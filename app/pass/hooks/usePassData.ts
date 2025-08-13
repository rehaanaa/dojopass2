import { useState, useEffect } from 'react';
import { Platform, Pass } from '@/lib/types';
import { useAuth } from '@/contexts/AuthContext';

export const usePassData = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [selectedPass, setSelectedPass] = useState<Pass | null>(null);
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [passes, setPasses] = useState<Pass[]>([]);
  const [loading, setLoading] = useState(false);
  const [passesLoading, setPassesLoading] = useState(false);
  const [userPasses, setUserPasses] = useState<Pass[]>([]);
  const [userPassesLoading, setUserPassesLoading] = useState(false);

  const { user, autoLogin } = useAuth();

  // Get stored email from localStorage
  const getStoredEmail = (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('dojo_email');
    }
    return null;
  };

  // Store a purchased pass in localStorage
  const storePurchasedPass = (pass: Pass) => {
    try {
      const existingPasses = localStorage.getItem('user_passes');
      const passes = existingPasses ? JSON.parse(existingPasses) : [];
      
      // Check if pass already exists to avoid duplicates
      const existingPassIndex = passes.findIndex((p: Pass) => p.id === pass.id);
      if (existingPassIndex === -1) {
        passes.push(pass);
        localStorage.setItem('user_passes', JSON.stringify(passes));
        setUserPasses(passes);
      }
    } catch (error) {
      console.error('Error storing purchased pass:', error);
    }
  };

  // Auto-fetch user passes using stored email
  const fetchUserPasses = async () => {
    const storedEmail = getStoredEmail();
    if (!storedEmail) return;

    try {
      setUserPassesLoading(true);
      
      // Try to fetch from API first
      const response = await fetch(`/api/pass/user-passes?email=${encodeURIComponent(storedEmail)}`);
      if (response.ok) {
        const data = await response.json();
        setUserPasses(data.passes || []);
      } else {
        // Fallback to localStorage if API fails
        const storedPasses = localStorage.getItem('user_passes');
        if (storedPasses) {
          setUserPasses(JSON.parse(storedPasses));
        }
      }
    } catch (error) {
      console.error('Failed to fetch user passes:', error);
      // Fallback to localStorage
      const storedPasses = localStorage.getItem('user_passes');
      if (storedPasses) {
        setUserPasses(JSON.parse(storedPasses));
      }
    } finally {
      setUserPassesLoading(false);
    }
  };

  const fetchPlatforms = async () => {
    try {
      const response = await fetch('/api/platforms');
      const data = await response.json();

      if (response.ok) {
        const platformsData = data.platforms || [];
        
        // If no platforms from API, show empty state
        if (platformsData.length === 0) {
          console.log('No platforms from API');
          setPlatforms([]);
        } else {
          setPlatforms(platformsData);
        }
        
        // Set platforms data
        setPlatforms(platformsData);
      } else {
        console.error('Failed to fetch platforms:', data.error, data.details);
        // No fallback data - rely on database only
        setPlatforms([]);
      }
    } catch (error) {
      console.error('Failed to fetch platforms:', error);
      // No fallback data - rely on database only
      setPlatforms([]);
    }
  };

  const fetchPasses = async (platformId: number) => {
    try {
      setPassesLoading(true);
      const response = await fetch(`/api/passes?platform_id=${platformId}`);
      const data = await response.json();

      if (response.ok) {
        setPasses(data.passes || []);
      } else {
        console.error('Failed to fetch passes:', data.error, data.details);
        setPasses([]);
      }
    } catch (error) {
      console.error('Failed to fetch passes:', error);
      setPasses([]);
    } finally {
      setPassesLoading(false);
    }
  };

  const handlePlatformSelect = (platform: Platform) => {
    setSelectedPlatform(platform);
    setCurrentStep(1); // Move to next step after platform selection
    fetchPasses(platform.id);
  };

  const handlePassSelect = (pass: Pass) => {
    setSelectedPass(pass);
    setCurrentStep(2); // Move to payment step
  };

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };

  // Fetch data on component mount - only once
  useEffect(() => {
    const initializeData = async () => {
      // Fetch platforms
      await fetchPlatforms();
    };

    initializeData();
  }, []);

  // Fetch user passes only when user changes and we don't have them already
  useEffect(() => {
    if (user && userPasses.length === 0) {
      fetchUserPasses();
    }
  }, [user]);

  return {
    currentStep,
    selectedPlatform,
    selectedPass,
    platforms,
    passes,
    loading,
    passesLoading,
    userPasses,
    userPassesLoading,
    handlePlatformSelect,
    handlePassSelect,
    handleStepChange,
    fetchPlatforms,
    fetchPasses,
    fetchUserPasses,
    storePurchasedPass
  };
}; 