'use client';

import React from 'react';
import { supabase } from '@/lib/supabase';

export const signInWithGoogle = async () => {
  try {
    // Check if Supabase is properly configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      alert('Supabase not configured. Please add environment variables to enable authentication.');
      return { error: { message: 'Supabase not configured' } };
    }

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
