'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { signInWithGoogle } from './AuthGoogleSignIn';
import AuthSessionManager from './AuthSessionManager';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  dojoUser: any;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  logout: () => Promise<void>;
  autoLogin: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [dojoUser, setDojoUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Import all auth utilities
  const { getInitialSession, handleAuthStateChange } = AuthSessionManager();

  // Auto-login function using stored email
  const autoLogin = async () => {
    // The email-based login logic is removed, so this function is no longer needed.
    // The user will be set directly by Supabase on auth state change.
  };

  useEffect(() => {
    // Get initial session
    const initializeAuth = async () => {
      await getInitialSession(setSession, setUser, setLoading, setDojoUser);
    };

    initializeAuth();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event: string, session: Session | null) => {
        handleAuthStateChange(
          event,
          session,
          setSession,
          setUser,
          setDojoUser
        );
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signInWithGoogleHandler = async () => {
    try {
      setLoading(true);
      const result = await signInWithGoogle();
      
      if (result.error) {
        // Show user-friendly error message based on error type
        if (result.error.code === 'MISSING_CONFIG') {
          alert('Authentication is not configured. Please add your Supabase environment variables to .env.local file.');
          console.error('Configuration missing:', result.error.details);
        } else if (result.error.code === 'SIGN_IN_ERROR') {
          alert(`Sign-in failed: ${result.error.message}`);
          console.error('Sign-in error:', result.error.details);
        } else {
          alert(`Sign-in failed: ${result.error.message}`);
          console.error('Unexpected error:', result.error);
        }
      } else {
        console.log('Google sign-in initiated successfully');
        // The redirect will happen automatically via Supabase
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
      alert('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setDojoUser(null);
  };

  const logout = async (): Promise<void> => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setDojoUser(null);
  };

  const value: AuthContextType = {
    user,
    session,
    dojoUser,
    loading,
    signInWithGoogle: signInWithGoogleHandler,
    signOut,
    logout,
    autoLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
