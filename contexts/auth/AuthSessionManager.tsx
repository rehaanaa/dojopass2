'use client';

import React from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { createOrUpdateUser } from '@/lib/api';

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
        
        try {
          // Create or update user in the database
          if (!session.user.email) {
            throw new Error('User email is undefined');
          }
          const result = await createOrUpdateUser(session.user.email);
          
          if (result.success && result.data) {
            setDojoUser(result.data);
          } else {
            console.error('Failed to create/update user in database:', result.error);
            // Fallback to basic user object
            const basicUser = {
              id: session.user.id,
              email: session.user.email,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString()
            };
            setDojoUser(basicUser);
          }
        } catch (error) {
          console.error('Error creating/updating user in database:', error);
          // Fallback to basic user object
          const basicUser = {
            id: session.user.id,
            email: session.user.email,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          };
          setDojoUser(basicUser);
        }
        

      }
    } catch (error) {
      console.error('Error in getInitialSession:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle auth state changes - optimized to prevent excessive API calls
  const handleAuthStateChange = async (
    event: string,
    session: Session | null,
    setSession: (session: Session | null) => void,
    setUser: (user: User | null) => void,
    setDojoUser: (user: any) => void
  ) => {
    if (event === 'SIGNED_IN' && session) {
      setSession(session);
      setUser(session.user);
      
      // Only create/update user if we don't already have one
      if (!session.user.email) {
        console.error('User email is undefined');
        return;
      }
      
      try {
        const result = await createOrUpdateUser(session.user.email);
        if (result.success && result.data) {
          setDojoUser(result.data);
        } else {
          // Fallback to basic user object
          const basicUser = {
            id: session.user.id,
            email: session.user.email,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          };
          setDojoUser(basicUser);
        }
      } catch (error) {
        console.error('Error creating/updating user in database:', error);
        // Fallback to basic user object
        const basicUser = {
          id: session.user.id,
          email: session.user.email,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        setDojoUser(basicUser);
      }
    } else if (event === 'SIGNED_OUT') {
      setSession(null);
      setUser(null);
      setDojoUser(null);
    }
  };

  return { getInitialSession, handleAuthStateChange };
}
