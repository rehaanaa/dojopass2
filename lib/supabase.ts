import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create Supabase client with fallback
let supabase: any;

if (supabaseUrl && supabaseAnonKey) {
  // Create real Supabase client when environment variables are available
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  // Create fallback client when environment variables are missing
  supabase = {
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
      signInWithOAuth: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
      signOut: async () => ({ error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
    },
    from: () => ({
      select: () => ({
        limit: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } })
      })
    })
  };
}

export { supabase };
