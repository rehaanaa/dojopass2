'use client';

import React from 'react';
import { supabase } from '@/lib/supabase';

export const signInWithGoogle = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://dojopass.store/pass'
      }
    });
    
    if (error) {
      console.error('Google sign-in error:', error);
      throw error;
    }
    
    return data;
  } catch (error) {
    console.error('Unexpected error in Google sign-in:', error);
    throw error;
  }
};
