import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dojopass.store';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create client-side Supabase client (for components that need it)
export const supabase = createClient(
  supabaseUrl, 
  supabaseAnonKey || 'placeholder-key'
);

// Server-side Supabase client with service role key (for API routes only)
export const createServerSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dojopass.store';
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  if (!supabaseUrl || !supabaseServiceKey) {
    console.warn('Missing Supabase service role key. This function should only be called from API routes.');
    return null;
  }
  
  return createClient(supabaseUrl, supabaseServiceKey);
};
