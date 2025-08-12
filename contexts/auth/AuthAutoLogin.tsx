'use client';

import React from 'react';
import { getUserByEmail } from '@/lib/api';

export default function AuthAutoLogin() {
  // Auto-login function using stored email
  const autoLogin = async (storedEmail: string, setDojoUser: (user: any) => void) => {
    if (storedEmail) {
      try {
        // Check if Supabase is configured
        if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
          // Fallback: create a mock user for demo purposes
          const mockUser = {
            id: 1,
            email: storedEmail,
            dojo_id: 'DOJOPS83830001',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          };
          setDojoUser(mockUser);
          console.log('Mock user created for demo:', mockUser);
          return;
        }

        // Try to get user data from database using API
        const result = await getUserByEmail(storedEmail);

        if (!result.success) {
          if (result.error === 'User not found') {
            console.log('User not found in database:', storedEmail);
            return;
          }
          console.error('Error in auto-login:', result.error);
          return;
        }

        if (result.data) {
          setDojoUser(result.data);
          console.log('Auto-login successful:', result.data);
        }
      } catch (error) {
        console.error('Error in auto-login:', error);
      }
    }
  };

  return { autoLogin };
}
