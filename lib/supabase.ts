import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce',
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://dojopass.store'}/auth/callback`
  }
})

// Server-side Supabase client with service role key (for API routes only)
export const createServerSupabaseClient = () => {
  // For server-side operations, we need the original Supabase URL
  const originalSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mbzxsvhuswrowjlujhco.supabase.co';
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  if (!supabaseServiceKey) {
    console.warn('Missing Supabase service role key. This function should only be called from API routes.');
    return null;
  }
  
  return createClient(originalSupabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
};
