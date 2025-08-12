'use client';

import React from 'react';

export default function AuthEmailLogin() {
  // Simple email-based login (for demo purposes)
  const loginWithEmail = async (
    email: string,
    storeUserEmail: (email: string) => void,
    createOrUpdateDojoUser: (email: string) => Promise<any>,
    setDojoUser: (user: any) => void
  ): Promise<{ success: boolean; message: string }> => {
    try {
      // Store email in localStorage
      storeUserEmail(email);
      
      // Check if Supabase is configured
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        // Fallback: create a mock user for demo purposes
        const mockUser = {
          id: 1,
          email: email,
          dojo_id: 'DOJOPS83830001',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        setDojoUser(mockUser);
        console.log('Mock user created for demo:', mockUser);
        return { success: true, message: 'Login successful! (Demo Mode)' };
      }
      
      // Create or get existing user from pass_users table
      const dojoUser = await createOrUpdateDojoUser(email);
      
      if (dojoUser) {
        setDojoUser(dojoUser);
        console.log('User logged in successfully:', dojoUser);
        return { success: true, message: 'Login successful!' };
      } else {
        return { success: false, message: 'Failed to create user account' };
      }
    } catch (error) {
      console.error('Error in loginWithEmail:', error);
      return { success: false, message: 'Login failed. Please try again.' };
    }
  };

  return { loginWithEmail };
}
