'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import UserPass from '@/components/UserPass';
import PassHeader from '../PassHeader';
import PassPlatformsSection from '../PassPlatformsSection';
import PassPassesSection from '../PassPassesSection';
import PassPaymentSection from '../PassPaymentSection';
import PassDataFetcher from './PassDataFetcher';
import PassStepHandler from './PassStepHandler';
import PassPaymentProcessor from './PassPaymentProcessor';

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

  // Import all pass main page utilities
  const { fetchPlatforms, fetchPasses } = PassDataFetcher();
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
      await fetchPlatforms(user, setLoading, setPlatforms);
    };
    loadPlatforms();
  }, [user]);

  // Fetch passes when platform is selected
  useEffect(() => {
    const loadPasses = async () => {
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
        
        {currentStep === 2 && selectedPass && (
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
      </div>
    </div>
  );
}
