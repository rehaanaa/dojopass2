'use client';

import React from 'react';
import { supabase } from '@/lib/supabase';

export default function AuthSignOut() {
  const signOut = async (
    removeUserEmail: () => void,
    setUser: (user: any) => void,
    setSession: (session: any) => void,
    setDojoUser: (user: any) => void,
    clearAllStoredData: () => void
  ) => {
    try {
      // Remove stored email before signing out
      removeUserEmail();
      
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      // Clear local state
      setUser(null);
      setSession(null);
      setDojoUser(null);
      
      // Clear any other stored data
      clearAllStoredData();
      
      console.log('Signed out successfully');
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  return { signOut };
}
