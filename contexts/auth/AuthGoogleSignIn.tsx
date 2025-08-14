'use client';

import React from 'react';
import { supabase } from '@/lib/supabase';

export const signInWithGoogle = async () => {
  try {
    // Check if we have a real Supabase client
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return { 
        error: { 
          message: 'Supabase not configured. Please add environment variables to enable authentication.',
          code: 'MISSING_CONFIG',
          details: {
            hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
            hasKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
          }
        } 
      };
    }

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`
      }
    });
    
    if (error) {
      console.error('Google sign-in error:', error);
      return { 
        error: {
          message: error.message || 'Google sign-in failed',
          code: error.status || 'SIGN_IN_ERROR',
          details: error
        }
      };
    }
    
    return { data };
  } catch (error) {
    console.error('Unexpected error in Google sign-in:', error);
    return { 
      error: { 
        message: 'An unexpected error occurred during sign-in. Please try again.',
        code: 'UNEXPECTED_ERROR',
        details: error
      } 
    };
  }
};
