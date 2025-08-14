import { createClient } from '@supabase/supabase-js';

// Use the original Supabase URL for authentication operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mbzxsvhuswrowjlujhco.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create client-side Supabase client (for components that need it)
export const supabase = createClient(
  supabaseUrl, 
  supabaseAnonKey || 'placeholder-key'
);

// Server-side Supabase client with service role key (for API routes only)
export const createServerSupabaseClient = () => {
  // For server-side operations, we need the original Supabase URL
  const originalSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mbzxsvhuswrowjlujhco.supabase.co';
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  if (!supabaseServiceKey) {
    console.warn('Missing Supabase service role key. This function should only be called from API routes.');
    return null;
  }
  
  return createClient(originalSupabaseUrl, supabaseServiceKey);
};
