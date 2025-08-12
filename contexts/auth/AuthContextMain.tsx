'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import AuthStorageManager from './AuthStorageManager';
import AuthUserManager from './AuthUserManager';
import AuthAutoLogin from './AuthAutoLogin';
import AuthSessionManager from './AuthSessionManager';
import AuthGoogleSignIn from './AuthGoogleSignIn';
import AuthSignOut from './AuthSignOut';

import AuthLogout from './AuthLogout';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  dojoUser: any | null;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  autoLogin: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [dojoUser, setDojoUser] = useState<any | null>(null);

  // Import all auth utilities
  const { storeUserEmail, removeUserEmail, getStoredEmail, clearAllStoredData } = AuthStorageManager();
  const { createOrUpdateDojoUser, getExistingUser } = AuthUserManager();
  const { autoLogin: autoLoginUtil } = AuthAutoLogin();
  const { getInitialSession, handleAuthStateChange } = AuthSessionManager();
  const { signInWithGoogle: signInWithGoogleUtil } = AuthGoogleSignIn();
  const { signOut: signOutUtil } = AuthSignOut();

  const { logout: logoutUtil } = AuthLogout();

  // Auto-login function using stored email
  const autoLogin = async () => {
    const storedEmail = getStoredEmail();
    if (storedEmail && !dojoUser) {
              console.log('Auto-login: Checking for existing user with email:', storedEmail);
      
      // First try to get existing user data
      const existingUser = await getExistingUser(storedEmail);
      
      if (existingUser) {
                  console.log('Auto-login: Found existing user, setting dojoUser');
        setDojoUser(existingUser);
      } else {
                  console.log('Auto-login: No existing user found, will create on first interaction');
        // User will be created when they first interact with the app
      }
    }
  };

  useEffect(() => {
    // Get initial session
    const initializeAuth = async () => {
      await getInitialSession(setSession, setUser, setLoading, createOrUpdateDojoUser, setDojoUser);
    };

    // Add timeout to prevent infinite loading
    const timeoutId = setTimeout(() => {
      console.warn('Authentication timeout - setting loading to false');
      setLoading(false);
    }, 10000); // 10 second timeout

    initializeAuth();

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        handleAuthStateChange(
          event,
          session,
          setSession,
          setUser,
          setDojoUser,
          createOrUpdateDojoUser,
          removeUserEmail
        );
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    await signInWithGoogleUtil();
  };

  const signOut = async () => {
    await signOutUtil(removeUserEmail, setUser, setSession, setDojoUser, clearAllStoredData);
  };



  const logout = async (): Promise<void> => {
    await logoutUtil(setUser, setSession, setDojoUser, removeUserEmail, clearAllStoredData);
  };

  const value = {
    user,
    session,
    loading,
    dojoUser,
    signInWithGoogle,
    signOut,
    autoLogin,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
