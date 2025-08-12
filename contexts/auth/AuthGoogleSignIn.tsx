'use client';

import React from 'react';
import { supabase } from '@/lib/supabase';

export default function AuthGoogleSignIn() {
  const signInWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });
      
      if (error) {
        console.error('Error signing in with Google:', error);
        throw error;
      }
      
      console.log('Google OAuth initiated:', data);
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  };

  return { signInWithGoogle };
}
