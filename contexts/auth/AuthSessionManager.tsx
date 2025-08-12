'use client';

import React from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

export default function AuthSessionManager() {
  // Get initial session
  const getInitialSession = async (
    setSession: (session: Session | null) => void,
    setUser: (user: User | null) => void,
    setLoading: (loading: boolean) => void,
    createOrUpdateDojoUser: (email: string) => Promise<any>,
    setDojoUser: (user: any) => void
  ) => {
    try {
      // Check if Supabase is properly configured
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        console.error('Supabase environment variables are not configured');
        setLoading(false);
        return;
      }

      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error getting session:', error);
      }
      
      if (session) {
        setSession(session);
        setUser(session.user);
        
        // Save user data to database
        const userData = await createOrUpdateDojoUser(session.user.email!);
        if (userData) {
          setDojoUser(userData);
          console.log('User data saved to database:', userData);
          
          // Redirect to pass page after successful login
          if (window.location.pathname === '/') {
            window.location.href = '/pass';
          }
        }
      }
    } catch (error) {
      console.error('Error in getInitialSession:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle auth state changes
  const handleAuthStateChange = (
    event: string,
    session: Session | null,
    setSession: (session: Session | null) => void,
    setUser: (user: User | null) => void,
    setDojoUser: (user: any) => void,
    createOrUpdateDojoUser: (email: string) => Promise<any>,
    removeUserEmail: () => void
  ) => {
    console.log('Auth state changed:', event, session);
    
    if (event === 'SIGNED_IN' && session) {
      setSession(session);
      setUser(session.user);
      
      // Save user data to database
      createOrUpdateDojoUser(session.user.email!).then((userData) => {
        if (userData) {
          setDojoUser(userData);
          console.log('User data saved to database:', userData);
          
          // Redirect to pass page after successful login
          if (window.location.pathname === '/') {
            window.location.href = '/pass';
          }
        }
      });
    } else if (event === 'SIGNED_OUT') {
      setSession(null);
      setUser(null);
      setDojoUser(null);
      removeUserEmail();
    }
  };

  return { getInitialSession, handleAuthStateChange };
}
