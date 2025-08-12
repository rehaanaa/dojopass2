'use client';

import React from 'react';
import { createOrUpdateUser, getUserByEmail } from '@/lib/api';

export default function AuthUserManager() {
  // Create or update user in dojo_users table
  const createOrUpdateDojoUser = async (email: string) => {
    try {
      console.log('AuthUserManager: Creating/updating user for email:', email);
      
      // Use the API to create or update user
      const result = await createOrUpdateUser(email);
      
      if (!result.success) {
        console.error('Error creating/updating user:', result);
        return null;
      }

      console.log(`User ${result.action} successfully:`, result.data);
      
      // Store user data in localStorage for persistence
      if (result.data) {
        localStorage.setItem('dojo_user_data', JSON.stringify(result.data));
        localStorage.setItem('dojo_email', email);
      }
      
      return result.data;
      
    } catch (error) {
      console.error('Unexpected error in createOrUpdateDojoUser:', error);
      return null;
    }
  };

  // Get existing user data from localStorage or API
  const getExistingUser = async (email: string) => {
    try {
      // First check localStorage
      const storedUser = localStorage.getItem('dojo_user_data');
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        if (userData.email === email) {
          console.log('Found existing user in localStorage:', userData);
          return userData;
        }
      }

      // If not in localStorage, try to fetch from API
      console.log('Fetching user data from API for email:', email);
      const result = await getUserByEmail(email);
      
      if (result.success && result.data) {
        // Store in localStorage for future use
        localStorage.setItem('dojo_user_data', JSON.stringify(result.data));
        localStorage.setItem('dojo_email', email);
        console.log('User data fetched and stored:', result.data);
        return result.data;
      }

      return null;
    } catch (error) {
      console.error('Error getting existing user:', error);
      return null;
    }
  };

  return { createOrUpdateDojoUser, getExistingUser };
}
