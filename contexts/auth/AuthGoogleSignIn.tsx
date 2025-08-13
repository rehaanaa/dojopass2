'use client';

import React from 'react';
import { supabase } from '@/lib/supabase';

export const signInWithGoogle = async () => {
  try {
    // Check if we have a real Supabase client
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return { 
        error: { 
          message: 'Supabase not configured. Please add environment variables to enable authentication.' 
        } 
      };
    }

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://dojopass.store/pass'
      }
    });
    
    if (error) {
      console.error('Google sign-in error:', error);
      return { error };
    }
    
    return { data };
  } catch (error) {
    console.error('Unexpected error in Google sign-in:', error);
    return { 
      error: { 
        message: 'An unexpected error occurred during sign-in. Please try again.' 
      } 
    };
  }
};
