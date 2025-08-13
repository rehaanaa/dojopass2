'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import UserPass from '@/components/UserPass';
import AccountHeader from './AccountHeader';
import AccountPassesSection from './AccountPassesSection';
import AccountSettingsSection from './AccountSettingsSection';
import DeleteAccountModal from './DeleteAccountModal';

// Helper function to safely format dates
const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'N/A';
    }
    return date.toLocaleDateString();
  } catch (error) {
    return 'N/A';
  }
};

interface UserPass {
  id: number;
  platform_id: number;
  name: string;
  description: string;
  price: number;
  payment_amount?: number; // Add this for compatibility
  duration_days: number;
  image: string | null;
  features: any[];
  offers: any | null;
  completed?: boolean;
  created_at: string;
  updated_at: string;
}

export default function AccountMainPage() {
  const { user, loading: authLoading, signOut, dojoUser } = useAuth();
  const router = useRouter();
  const [userPasses, setUserPasses] = useState<UserPass[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'passes' | 'settings'>('passes');
  const [selectedPass, setSelectedPass] = useState<UserPass | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);

  // Check authentication and redirect if not logged in
  useEffect(() => {
    if (!authLoading && !user && !dojoUser) {
      router.push('/');
      return;
    }
  }, [user, dojoUser, authLoading, router]);

  // Fetch user passes from both localStorage and API
  useEffect(() => {
    const fetchUserPasses = async () => {
      try {
        console.log('Fetching user passes...');
        
        let allPasses: UserPass[] = [];
        
        // First, try to fetch from API if we have a dojoUser
        if (dojoUser?.id) {
          try {
            console.log('Fetching passes from API for user:', dojoUser.id);
            const response = await fetch(`/api/user-purchased?user_id=${dojoUser.id}`);
            console.log('API response status:', response.status);
            
            if (response.ok) {
              const result = await response.json();
              console.log('Raw API response:', result);
              
              if (result.success && result.data) {
                console.log('API passes fetched:', result.data);
                
                // Transform API data to match UserPass interface
                const apiPasses = result.data.map((pass: any) => {
                  console.log('Processing pass:', pass);
                  const transformedPass = {
                    id: pass.id,
                    platform_id: pass.platform_id,
                    name: pass.passes?.title || pass.platforms?.title || 'Unknown Pass',
                    description: '', // Not needed for display
                    price: pass.amount_paid || 0,
                    payment_amount: pass.amount_paid || 0,
                    duration_days: 0, // Not in the table
                    image: null, // Not in the table
                    features: [],
                    offers: null,
                    completed: pass.payment_status === 'completed',
                    created_at: pass.purchase_date || pass.created_at,
                    updated_at: pass.updated_at || pass.purchase_date
                  };
                  console.log('Transformed pass:', transformedPass);
                  return transformedPass;
                });
                
                allPasses = [...allPasses, ...apiPasses];
              } else {
                console.warn('API response not successful:', result.error);
              }
            } else {
              console.warn('API response not ok:', response.status, response.statusText);
              try {
                const errorData = await response.json();
                console.error('API error details:', errorData);
              } catch (parseError) {
                console.error('Could not parse API error response');
              }
            }
          } catch (apiError) {
            console.error('Error fetching from API:', apiError);
          }
        } else {
          console.log('No dojoUser ID available, skipping API call');
        }
        
        // Only use database passes - localStorage is just a fallback for failed purchases
        // and should not be mixed with database data to avoid duplicates
        console.log('Using only database passes to avoid duplicates');
        
        console.log('All passes combined:', allPasses);
        setUserPasses(allPasses);
        
      } catch (error) {
        console.error('Error fetching user passes:', error);
        setUserPasses([]);
      } finally {
        console.log('Setting loading to false');
        setLoading(false);
      }
    };

    if (user || dojoUser) {
      console.log('User authenticated, fetching passes...');
      fetchUserPasses();
    } else {
      console.log('No user, setting loading to false');
      setLoading(false);
    }
  }, [user, dojoUser]);

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleDeleteAccount = async () => {
    if (!user) return;
    
    try {
      setDeleting(true);
      
      // Clear localStorage
      localStorage.removeItem('user_purchased');
      localStorage.removeItem('dojo_email');
      
      // Sign out the user
      await signOut();
      
      // Redirect to home page
      router.push('/');
    } catch (error) {
      console.error('Error deleting account:', error);
      setDeleting(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center h-64 space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Don't show anything, just redirect
  }

  return (
    <div className="min-h-screen bg-background">
      {/* UserPass Component - User Avatar in top right */}
      <UserPass />
      
      <div className="container mx-auto px-4 py-8">
        <div className="w-full max-w-md mx-auto">
          {/* Header and Tabs */}
          <AccountHeader 
            activeTab={activeTab}
            userPassesCount={userPasses.length}
            onTabChange={setActiveTab}
          />

          {/* Tab Content */}
          {activeTab === 'passes' ? (
            <AccountPassesSection 
              loading={loading}
              userPasses={userPasses}
              selectedPass={selectedPass}
              onPassSelect={setSelectedPass}
            />
          ) : (
            <AccountSettingsSection 
              userEmail={user.email || ''}
              onLogout={handleLogout}
              onDeleteAccount={() => setShowDeleteConfirm(true)}
            />
          )}
        </div>
      </div>

      {/* Delete Account Confirmation Modal */}
      <DeleteAccountModal 
        showDeleteConfirm={showDeleteConfirm}
        deleting={deleting}
        onCancel={() => setShowDeleteConfirm(false)}
        onConfirm={handleDeleteAccount}
      />
    </div>
  );
}
