'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();

  // Import all main page utilities
  const featureIconMapper = MainFeatureIconMapper();
  const dataParser = MainDataParser();
  const dataLoader = MainDataLoader();
  const authHandler = MainAuthHandler();

  // Extract functions from the utility objects
  const { getFeatureIcon } = featureIconMapper;
  const { parseFeatures, parseOffers, formatOffers } = dataParser;
  const { loadStaticPlatforms, loadStaticPasses, loadPasses } = dataLoader;
  const { handleAuthClick: handleAuthClickUtil, handleSignOut: handleSignOutUtil, handlePlatformClick: handlePlatformClickUtil } = authHandler;

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

  // Handle authentication state changes - only redirect once
  useEffect(() => {
    if (user && !loading && window.location.pathname === '/') {
      console.log('User authenticated, redirecting to pass page:', user.email);
      // Use router.push instead of window.location for better performance
      router.push('/pass');
    }
  }, [user, loading, router]);

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


      {/* Only show landing page content if not loading and user is not authenticated */}
      {!loading && !user && (
        <>
          <Navigation 
            user={user} 
            handleAuthClick={handleAuthClick} 
            handleSignOut={handleSignOut} 
          />
          <HeroSection />
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
