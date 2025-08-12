'use client';

import React from 'react';

export default function MainAuthHandler() {
  const handleAuthClick = async (
    user: any,
    signInWithGoogle: () => Promise<void>
  ) => {
    if (!user) {
      try {
        await signInWithGoogle();
      } catch (error) {
        console.error('Authentication failed:', error);
        // You can add a toast notification here if you have a toast system
        alert('Authentication failed. Please try again.');
      }
    }
  };

  const handleSignOut = async (signOut: () => Promise<void>) => {
    await signOut();
  };

  const handlePlatformClick = (
    platform: any,
    user: any,
    handleAuthClick: () => void
  ) => {
    // Navigate to pass page when platform is clicked
    if (user) {
      window.location.href = '/pass';
    } else {
      // If not logged in, show sign in prompt
      handleAuthClick();
    }
  };

  return { handleAuthClick, handleSignOut, handlePlatformClick };
}
