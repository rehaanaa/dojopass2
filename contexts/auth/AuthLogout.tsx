'use client';

import React from 'react';

export default function AuthLogout() {
  // Logout function that clears local state but keeps user data in table
  const logout = async (
    setUser: (user: any) => void,
    setSession: (session: any) => void,
    setDojoUser: (user: any) => void,
    removeUserEmail: () => void,
    clearAllStoredData: () => void
  ): Promise<void> => {
    try {
      // Clear local state
      setUser(null);
      setSession(null);
      setDojoUser(null);
      
      // Remove stored email
      removeUserEmail();
      
      // Clear any other stored data
      clearAllStoredData();
      
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Error in logout:', error);
    }
  };

  return { logout };
}
