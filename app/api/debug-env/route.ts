import { NextResponse } from 'next/server';

export async function GET() {
  const envInfo = {
    hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    hasSupabaseAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    hasSupabaseServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    hasSiteUrl: !!process.env.NEXT_PUBLIC_SITE_URL,
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || 'not set',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'not set',
    nodeEnv: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  };

  return NextResponse.json(envInfo);
}
