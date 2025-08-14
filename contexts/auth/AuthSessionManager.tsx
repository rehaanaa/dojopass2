'use client';

import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

export const getInitialSession = async (
  setSession: (session: Session | null) => void,
  setUser: (user: User | null) => void,
  setLoading: (loading: boolean) => void,
  setDojoUser: (dojoUser: any) => void
) => {
  try {
    // Get the current session
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) {
      console.error('Error getting session:', error);
      setLoading(false);
      return;
    }

    if (session) {
      setSession(session);
      setUser(session.user);
      
      // Fetch additional user data if needed
      if (session.user) {
        try {
          const { data: profile, error: profileError } = await supabase
            .from('users')
            .select('*')
            .eq('id', session.user.id)
            .single();
          
          if (!profileError && profile) {
            setDojoUser(profile);
          }
        } catch (profileError) {
          console.log('No user profile found, creating new user...');
          // You can create a new user profile here if needed
        }
      }
    }
    
    setLoading(false);
  } catch (error) {
    console.error('Unexpected error in getInitialSession:', error);
    setLoading(false);
  }
};

export const handleAuthStateChange = (
  event: string,
  session: Session | null,
  setSession: (session: Session | null) => void,
  setUser: (user: User | null) => void,
  setDojoUser: (dojoUser: any) => void
) => {
  console.log('Auth state change:', event, session?.user?.email);
  
  if (event === 'SIGNED_IN' && session) {
    setSession(session);
    setUser(session.user);
    
    // Fetch additional user data
    if (session.user) {
      (async () => {
        try {
          const { data: profile, error } = await supabase
            .from('users')
            .select('*')
            .eq('id', session.user.id)
            .single();
          
          if (!error && profile) {
            setDojoUser(profile);
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      })();
    }
  } else if (event === 'SIGNED_OUT') {
    setSession(null);
    setUser(null);
    setDojoUser(null);
  } else if (event === 'TOKEN_REFRESHED' && session) {
    setSession(session);
    setUser(session.user);
  }
};

export default {
  getInitialSession,
  handleAuthStateChange,
};
