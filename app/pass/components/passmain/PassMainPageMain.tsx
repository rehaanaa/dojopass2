'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import UserPass from '@/components/UserPass';
import PassHeader from '../PassHeader';
import PassPlatformsSection from '../PassPlatformsSection';
import PassPassesSection from '../PassPassesSection';
import PassPaymentSection from '../PassPaymentSection';
// PassDataFetcher removed - functions inlined below
import PassStepHandler from './PassStepHandler';
import PassPaymentProcessor from './PassPaymentProcessor';
import DatabaseErrorDisplay from './DatabaseErrorDisplay';

export default function PassMainPageMain() {
  const router = useRouter();
  const { user, dojoUser, loading: authLoading } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPlatform, setSelectedPlatform] = useState<any | null>(null);
  const [selectedPass, setSelectedPass] = useState<any | null>(null);
  const [paymentResult, setPaymentResult] = useState<{ success: boolean; message: string; transactionId?: string } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Database state
  const [platforms, setPlatforms] = useState<any[]>([]);
  const [passes, setPasses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [passesLoading, setPassesLoading] = useState(false);
  const [databaseError, setDatabaseError] = useState<string | null>(null);

  // Inline data fetching functions (previously from PassDataFetcher)
  const fetchPlatforms = async (user: any, setLoading: (loading: boolean) => void, setPlatforms: (platforms: any[]) => void) => {
    if (!user) return;
    
    try {
      setLoading(true);
      console.log('Fetching platforms from /api/platforms...');
      const response = await fetch('/api/platforms');
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('HTTP error response:', errorText);
        
        // Handle specific database errors gracefully
        if (response.status === 500) {
          if (errorText.includes('PGRST205') || errorText.includes('Could not find the table')) {
            console.error('🚨 DATABASE SETUP REQUIRED 🚨');
            console.error('The platforms table does not exist in your Supabase database.');
            console.error('Please follow these steps:');
            console.error('1. Go to your Supabase dashboard');
            console.error('2. Navigate to SQL Editor');
            console.error('3. Copy and paste the contents of database-schema.sql');
            console.error('4. Run the SQL script');
            console.error('5. Refresh this page');
            
            // Set database error state instead of throwing
            setDatabaseError('Database setup required. Please run the database schema setup first.');
            setPlatforms([]);
            return;
          }
        }
        
        // For other errors, set a generic error message
        setDatabaseError(`Failed to fetch platforms: ${response.status}`);
        setPlatforms([]);
        return;
      }
      
      const result = await response.json();
      if (result.success) {
        setPlatforms(result.data);
        setDatabaseError(null); // Clear any previous errors
      } else {
        console.error('Failed to fetch platforms:', result.error);
        setDatabaseError(result.error || 'Failed to fetch platforms');
        setPlatforms([]);
      }
    } catch (error) {
      console.error('Error fetching platforms:', error);
      setDatabaseError('Network error occurred while fetching platforms');
      setPlatforms([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchPasses = async (selectedPlatform: any, setPassesLoading: (loading: boolean) => void, setPasses: (passes: any[]) => void) => {
    if (!selectedPlatform) {
      setPasses([]);
      return;
    }

    try {
      setPassesLoading(true);
      console.log('Fetching passes for platform:', selectedPlatform.id);
      const response = await fetch(`/api/passes?platform_id=${selectedPlatform.id}`);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('HTTP error response for passes:', errorText);
        
        // Handle specific database errors gracefully
        if (response.status === 500) {
          if (errorText.includes('PGRST205') || errorText.includes('Could not find the table')) {
            console.error('🚨 DATABASE SETUP REQUIRED 🚨');
            console.error('The passes table does not exist in your Supabase database.');
            setDatabaseError('Database setup required. Please run the database schema setup first.');
            setPasses([]);
            return;
          }
        }
        
        // For other errors, set a generic error message
        setDatabaseError(`Failed to fetch passes: ${response.status}`);
        setPasses([]);
        return;
      }
      
      const result = await response.json();
      if (result.success) {
        setPasses(result.data);
        setDatabaseError(null); // Clear any previous errors
      } else {
        console.error('Failed to fetch passes:', result.error);
        setDatabaseError(result.error || 'Failed to fetch passes');
        setPasses([]);
      }
    } catch (error) {
      console.error('Error fetching passes:', error);
      setDatabaseError('Network error occurred while fetching passes');
      setPasses([]);
    } finally {
      setPassesLoading(false);
    }
  };
  const { handlePlatformSelect: handlePlatformSelectUtil, handlePassSelect: handlePassSelectUtil, handleStepChange: handleStepChangeUtil, handleBackToPasses: handleBackToPassesUtil } = PassStepHandler();
  const { processPayment, resetPayment } = PassPaymentProcessor();

  // Check authentication and redirect if not logged in
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/');
      return;
    }
  }, [user, authLoading, router]);

  // Fetch platforms on component mount
  useEffect(() => {
    const loadPlatforms = async () => {
      setDatabaseError(null);
      await fetchPlatforms(user, setLoading, setPlatforms);
    };
    loadPlatforms();
  }, [user]);

  // Fetch passes when platform is selected
  useEffect(() => {
    const loadPasses = async () => {
      setDatabaseError(null);
      await fetchPasses(selectedPlatform, setPassesLoading, setPasses);
    };
    loadPasses();
  }, [selectedPlatform]);

  // Show loading state while authentication is being checked
  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        </div>
      </div>
    );
  }

  // Redirect to home if not authenticated
  if (!user) {
    return null; // This will trigger the useEffect redirect
  }

  // Show database error if one occurred
  if (databaseError) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-7xl mx-auto pt-20">
          <DatabaseErrorDisplay 
            error={databaseError} 
            onRetry={() => {
              setDatabaseError(null);
              setLoading(true);
              // Retry loading platforms
              const loadPlatforms = async () => {
                await fetchPlatforms(user, setLoading, setPlatforms);
              };
              loadPlatforms();
            }}
          />
        </div>
      </div>
    );
  }

  const handlePlatformSelect = (platform: any) => {
    handlePlatformSelectUtil(platform, setSelectedPlatform, setSelectedPass, setPaymentResult, handleStepChange);
  };

  const handlePassSelect = (pass: any) => {
    handlePassSelectUtil(pass, setSelectedPass, handleStepChange);
  };

  const handleStepChange = (step: number) => {
    handleStepChangeUtil(step, setCurrentStep, setSelectedPlatform, setSelectedPass, setPaymentResult);
  };

  const handlePaymentSubmit = async (upiId: string) => {
    await processPayment(upiId, selectedPass, selectedPlatform, user, dojoUser, setIsProcessing, setPaymentResult);
  };

  const resetPaymentState = () => {
    resetPayment(setPaymentResult, setIsProcessing);
  };

  const handleBackToPasses = () => {
    handleBackToPassesUtil(handleStepChange, resetPaymentState);
  };

  const handleGoToAccount = () => {
    router.push('/account');
  };

  return (
    <div 
      className="min-h-screen bg-white dark:bg-black p-4" 
      style={{ 
        fontSize: 'clamp(0.75rem, 1.1vw, 0.875rem)'
      }}
    >
      {/* User Avatar - Fixed positioned in top right corner */}
      <div className="fixed top-4 right-4 z-50">
        <UserPass />
      </div>

      {/* Top Navigation - Stepper and Progress Bar */}
      <PassHeader 
        currentStep={currentStep}
        selectedPlatform={selectedPlatform}
        selectedPass={selectedPass}
        onStepChange={handleStepChange}
      />
        
      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-6">
        {/* Step Content */}
        {currentStep === 0 && (
          <PassPlatformsSection 
            loading={loading}
            platforms={platforms}
            onPlatformSelect={handlePlatformSelect}
          />
        )}
        
        {currentStep === 1 && (
          <PassPassesSection 
            passesLoading={passesLoading}
            passes={passes}
            selectedPlatform={selectedPlatform}
            onPassSelect={handlePassSelect}
            onBackToPlatforms={() => handleStepChange(0)}
          />
        )}
        
        {currentStep === 2 && (
          <PassPaymentSection 
            selectedPass={selectedPass}
            selectedPlatform={selectedPlatform}
            paymentResult={paymentResult}
            isProcessing={isProcessing}
            onPaymentSubmit={handlePaymentSubmit}
            onBackToPasses={handleBackToPasses}
            onGoToAccount={handleGoToAccount}
          />
        )}
        
        {/* Payment Result Display - Removed bottom notification box */}
        {/* {paymentResult && (
          <div className="mt-8">
            <div className={`p-4 rounded-lg ${
              paymentResult.success 
                ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
                : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
            }`}>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  {paymentResult.success ? (
                    <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-medium ${
                    paymentResult.success ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'
                  }`}>
                    {paymentResult.success ? 'Payment Successful!' : 'Payment Failed'}
                  </h3>
                  <p className={`mt-1 text-sm ${
                    paymentResult.success ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'
                  }`}>
                    {paymentResult.message}
                  </p>
                  {paymentResult.transactionId && (
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Transaction ID: {paymentResult.transactionId}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="mt-4 flex space-x-3">
                {paymentResult.success ? (
                  <button
                    onClick={handleGoToAccount}
                    className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Go to Account
                  </button>
                ) : (
                  <button
                    onClick={handleBackToPasses}
                    className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Try Again
                  </button>
                )}
                
                <button
                  onClick={resetPaymentState}
                  className="px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  {paymentResult.success ? 'Continue Shopping' : 'Back to Passes'}
                </button>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
