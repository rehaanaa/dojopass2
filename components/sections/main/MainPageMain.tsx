'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/auth/AuthContextMain';
import Navigation from '../Navigation';
import HeroSection from '../HeroSection';
import PlatformsSection from '../PlatformsSection';
import PassesSection from '../PassesSection';
import FeaturesSection from '../FeaturesSection';
import HowToBuySection from '../HowToBuySection';
import FooterSection from '../FooterSection';
import UserPass from '@/components/UserPass';
import { platforms, loadStaticPasses } from './MainDataLoader';

export default function MainPageMain() {
  const passes = loadStaticPasses();
  const { user, signOut, signInWithGoogle, loading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    // Handle URL parameters for authentication errors
    const error = searchParams.get('error');
    const details = searchParams.get('details');
    
    if (error) {
      let errorMessage = 'Authentication failed';
      
      switch (error) {
        case 'no_code':
          errorMessage = 'No authorization code received. Please try signing in again.';
          break;
        case 'auth_failed':
          errorMessage = `Authentication failed: ${details || 'Unknown error'}`;
          break;
        case 'session_error':
          errorMessage = `Session creation failed: ${details || 'Unknown error'}`;
          break;
        case 'no_session':
          errorMessage = 'No session was created. Please try again.';
          break;
        case 'unexpected':
          errorMessage = `Unexpected error: ${details || 'Unknown error'}`;
          break;
        default:
          errorMessage = `Authentication error: ${error}`;
      }
      
      setAuthError(errorMessage);
      
      // Clear the error from URL after 5 seconds
      setTimeout(() => {
        setAuthError(null);
        // Remove error parameters from URL
        const url = new URL(window.location.href);
        url.searchParams.delete('error');
        url.searchParams.delete('details');
        window.history.replaceState({}, '', url.toString());
      }, 5000);
    }
  }, [searchParams]);

  // Handle hash-based OAuth response
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      
      if (params.has('access_token')) {
        // This is an OAuth response, clear the hash
        window.location.hash = '';
        
        // Show success message
        setAuthError('Authentication successful! Redirecting...');
        setTimeout(() => {
          setAuthError(null);
          // Redirect to pass page after successful auth
          router.push('/pass');
        }, 2000);
      }
    }
  }, [router]);



  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handlePlatformClick = (platform: any) => {
    console.log('Platform clicked:', platform);
    // Handle platform selection - could navigate to a specific page or show more details
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mx-auto"></div>
        </div>
      </div>
    );
  }

    return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <Navigation 
        user={user}
        handleAuthClick={signInWithGoogle}
        handleSignOut={handleSignOut}
      />
      
      {/* UserPass Component - positioned in header where sign-in button would be */}
      {user && <UserPass className="top-2 right-4" />}
      
      {/* Authentication Error Display */}
      {authError && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded shadow-lg">
          <div className="flex items-center">
            <span className="mr-2">⚠️</span>
            <span>{authError}</span>
          </div>
        </div>
      )}
      
      <HeroSection />
      <PlatformsSection />
      <PassesSection passes={passes} />
      <FeaturesSection />
      <HowToBuySection />
      <FooterSection />
    </div>
  );
}
