import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please check your .env.local file and ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set.');
  console.error('The app will not function properly without these variables.');
  
  // In development, provide fallback to prevent crashes
  if (process.env.NODE_ENV === 'development') {
    console.warn('Running in development mode with fallback values. Create .env.local for full functionality.');
  }
}

// Create Supabase client with fallbacks for development
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder_key'
);

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
