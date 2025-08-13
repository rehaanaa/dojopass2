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
    setDojoUser: (user: any) => void
  ) => {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error getting session:', error);
      }
      
      if (session) {
        setSession(session);
        setUser(session.user);
        
        // For now, just set a basic user object
        // You can expand this later to fetch from your database
        const basicUser = {
          id: session.user.id,
          email: session.user.email,
          dojo_id: `DOJOPS${Math.floor(Math.random() * 100000)}`,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        setDojoUser(basicUser);
        console.log('User session restored:', basicUser);
        
        // Redirect to pass page after successful login
        if (window.location.pathname === '/') {
          window.location.href = '/pass';
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
    setDojoUser: (user: any) => void
  ) => {
    console.log('Auth state changed:', event, session);
    
    if (event === 'SIGNED_IN' && session) {
      setSession(session);
      setUser(session.user);
      
      // Create basic user object
      const basicUser = {
        id: session.user.id,
        email: session.user.email,
        dojo_id: `DOJOPS${Math.floor(Math.random() * 100000)}`,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      setDojoUser(basicUser);
      console.log('User signed in:', basicUser);
      
      // Redirect to pass page after successful login
      if (window.location.pathname === '/') {
        window.location.href = '/pass';
      }
    } else if (event === 'SIGNED_OUT') {
      setSession(null);
      setUser(null);
      setDojoUser(null);
      
      // Redirect to landing page after logout
      console.log('User signed out, redirecting to landing page');
      window.location.href = '/';
    }
  };

  return { getInitialSession, handleAuthStateChange };
}
