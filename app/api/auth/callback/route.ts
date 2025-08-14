import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Use the original Supabase URL for server-side operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export async function GET(request: NextRequest) {
  // Get the site URL from environment or construct from request
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || `https://${request.headers.get('host')}`;
  
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const error = searchParams.get('error');
    
    if (error) {
      console.error('Google OAuth error:', error);
      return NextResponse.redirect(new URL(`${siteUrl}/?error=auth_failed`));
    }
    
    if (!code) {
      console.error('No authorization code received');
      return NextResponse.redirect(new URL(`${siteUrl}/?error=no_code`));
    }

    // Create Supabase client with service role key
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Exchange code for session
    const { data, error: sessionError } = await supabase.auth.exchangeCodeForSession(code);
    
    if (sessionError) {
      console.error('Session creation error:', sessionError);
      return NextResponse.redirect(new URL(`${siteUrl}/?error=session_error`));
    }

    if (data.session && data.user) {
      // Successfully authenticated, redirect to pass page
      console.log('User authenticated:', data.user.email);
      return NextResponse.redirect(new URL(`${siteUrl}/pass`));
    } else {
      // No session created
      console.log('No session created');
      return NextResponse.redirect(new URL(siteUrl));
    }
  } catch (error) {
    console.error('Unexpected error in auth callback:', error);
    return NextResponse.redirect(new URL(`${siteUrl}/?error=unexpected`));
  }
}
