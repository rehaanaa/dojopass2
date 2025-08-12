'use client';

import React from 'react';

export default function AuthStorageManager() {
  // Store email in localStorage when user signs in
  const storeUserEmail = (email: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('dojo_email', email);
    }
  };

  // Remove email from localStorage when user signs out
  const removeUserEmail = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('dojo_email');
    }
  };

  // Get stored email from localStorage
  const getStoredEmail = (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('dojo_email');
    }
    return null;
  };

  // Clear all stored data
  const clearAllStoredData = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user_purchased');
      localStorage.removeItem('selected_platform');
      localStorage.removeItem('selected_pass');
    }
  };

  return { storeUserEmail, removeUserEmail, getStoredEmail, clearAllStoredData };
}
