import { createClient } from '@supabase/supabase-js';

// Get environment variables silently
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create Supabase client only if environment variables are available
let supabase: any = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  // Create a mock client for development when env vars are missing
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

// Test connection function
export const testSupabaseConnection = async () => {
  try {
    // Check if environment variables are properly set
    if (!supabaseUrl || !supabaseAnonKey) {
      return {
        success: false,
        error: 'Environment variables not configured',
        details: {
          hasUrl: !!supabaseUrl,
          hasKey: !!supabaseAnonKey
        }
      };
    }

    // Test a simple query
    const { data, error } = await supabase
      .from('dojo_users')
      .select('count')
      .limit(1);

    if (error) {
      return {
        success: false,
        error: 'Database connection failed',
        details: {
          code: error.code,
          message: error.message,
          details: error.details,
          hint: error.hint
        }
      };
    }

    return {
      success: true,
      message: 'Supabase connection successful',
      data
    };
  } catch (err) {
    return {
      success: false,
      error: 'Unexpected error during connection test',
      details: err
    };
  }
};
