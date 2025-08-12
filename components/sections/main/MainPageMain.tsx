'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Navigation from '../Navigation';
import HeroSection from '../HeroSection';
import PlatformsSection from '../PlatformsSection';
import PassesSection from '../PassesSection';
import FeaturesSection from '../FeaturesSection';
import FooterSection from '../FooterSection';
import MainFeatureIconMapper from './MainFeatureIconMapper';
import MainDataParser from './MainDataParser';
import MainDataLoader from './MainDataLoader';
import MainAuthHandler from './MainAuthHandler';

export default function MainPageMain() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [platforms, setPlatforms] = useState<any[]>([]);
  const [passes, setPasses] = useState<any[]>([]);
  const { user, signOut, signInWithGoogle, loading } = useAuth();

  // Import all main page utilities
  const { getFeatureIcon } = MainFeatureIconMapper();
  const { parseFeatures, parseOffers, formatOffers } = MainDataParser();
  const { loadStaticPlatforms, loadStaticPasses, loadPasses } = MainDataLoader();
  const { handleAuthClick: handleAuthClickUtil, handleSignOut: handleSignOutUtil, handlePlatformClick: handlePlatformClickUtil } = MainAuthHandler();

  useEffect(() => {
    // Remove setInterval to prevent timeout errors
    // Hero slides will remain static instead of auto-rotating
    // This prevents console errors and improves performance
  }, []);

  // Load static platforms data for landing page
  useEffect(() => {
    const staticPlatforms = loadStaticPlatforms();
    const staticPasses = loadStaticPasses();
    setPlatforms(staticPlatforms);
    setPasses(staticPasses);
  }, []);

  // Add immediate redirect for authenticated users
  useEffect(() => {
    if (user && !loading) {
      // Immediately redirect to pass page if user is authenticated
      window.location.href = '/pass';
    }
  }, [user, loading]);

  const handleAuthClick = async () => {
    await handleAuthClickUtil(user, signInWithGoogle);
  };

  const handleSignOut = async () => {
    await handleSignOutUtil(signOut);
  };

  const handlePlatformClick = (platform: any) => {
    handlePlatformClickUtil(platform, user, handleAuthClick);
  };

  return (
    <div 
      className="min-h-screen bg-background text-foreground transition-colors duration-200" 
      style={{ 
        fontSize: 'clamp(0.75rem, 1.25vw, 0.875rem)',
        transform: 'scale(1)',
        transformOrigin: 'top left'
      }}
    >
      {/* Show loading spinner while checking authentication */}
      {loading && (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}

      {/* Only show content if not loading and user is not authenticated */}
      {!loading && !user && (
        <>
          <Navigation 
            user={user} 
            handleAuthClick={handleAuthClick} 
            handleSignOut={handleSignOut} 
          />
          <HeroSection handleAuthClick={handleAuthClick} />
          <PlatformsSection 
            platforms={platforms} 
            handlePlatformClick={handlePlatformClick} 
          />
          <PassesSection passes={passes} />
          <FeaturesSection />
          <FooterSection />
        </>
      )}
    </div>
  );
}
