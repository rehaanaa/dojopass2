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
  image_url: string | null;
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
  const [loading, setLoading] = useState(true);
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
            
            if (response.ok) {
              const result = await response.json();
              if (result.success && result.data) {
                console.log('API passes fetched:', result.data);
                
                // Transform API data to match UserPass interface
                const apiPasses = result.data.map((pass: any) => ({
                  id: pass.id,
                  platform_id: pass.platform_id,
                  name: pass.pass_name,
                  description: pass.passes?.description || '',
                  price: pass.price,
                  payment_amount: pass.price,
                  duration_days: pass.duration_days,
                  image_url: pass.platforms?.image_url || null,
                  features: [],
                  offers: null,
                  completed: false,
                  created_at: pass.purchase_date,
                  updated_at: pass.updated_at
                }));
                
                allPasses = [...allPasses, ...apiPasses];
              }
            } else {
              console.warn('API response not ok:', response.status);
            }
          } catch (apiError) {
            console.error('Error fetching from API:', apiError);
          }
        }
        
        // Then check localStorage for any additional passes
        const storedPasses = localStorage.getItem('user_purchased');
        if (storedPasses) {
          try {
            const passes = JSON.parse(storedPasses);
            console.log('Found existing passes in localStorage:', passes);
            
            // Ensure unique IDs by adding timestamp if duplicates exist
            const uniquePasses: UserPass[] = passes.map((pass: any, index: number) => {
              // If ID is 1, make it unique by adding timestamp
              if (pass.id === 1) {
                const uniqueId = Date.now() + index;
                console.log(`Changing duplicate ID 1 to ${uniqueId} for pass:`, pass.name);
                return { ...pass, id: uniqueId };
              }
              return pass;
            });
            
            // Merge with API passes, avoiding duplicates
            const existingIds = new Set(allPasses.map(p => p.id));
            const uniqueLocalPasses = uniquePasses.filter((pass: UserPass) => !existingIds.has(pass.id));
            
            allPasses = [...allPasses, ...uniqueLocalPasses];
          } catch (parseError) {
            console.error('Error parsing stored passes:', parseError);
            localStorage.removeItem('user_purchased');
          }
        }
        
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
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center h-64 space-y-4">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Authentication Required
              </h2>
              <p className="text-muted-foreground mb-4">
                Please log in to access your account.
              </p>
              <button
                onClick={() => router.push('/')}
                className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors duration-200"
              >
                Go to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* UserPass Component - User Avatar in top right */}
      <UserPass />
      
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md mx-auto px-4">
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
