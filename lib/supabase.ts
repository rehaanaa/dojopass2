import { createClient } from '@supabase/supabase-js';

// Check if environment variables are set
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase environment variables are missing!');
  console.error('Please create a .env.local file with:');
  console.error('NEXT_PUBLIC_SUPABASE_URL=https://yourproject.supabase.co');
  console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here');
  
  // Provide fallback for development
  if (typeof window !== 'undefined') {
    console.warn('Running without Supabase - some features will not work');
  }
}

// Create Supabase client with validation
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder_key'
);

// Test connection function
export const testSupabaseConnection = async () => {
  try {
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
