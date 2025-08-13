import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Check environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  // Only show warning in development, not in production
  if (process.env.NODE_ENV === 'development') {
    console.warn('⚠️ Supabase environment variables not found. Create .env.local for full functionality.');
    console.warn('📝 Add these to your .env.local file:');
    console.warn('   NEXT_PUBLIC_SUPABASE_URL=https://yourproject.supabase.co');
    console.warn('   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here');
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
