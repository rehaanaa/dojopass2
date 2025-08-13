import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const error = searchParams.get('error');
    
    if (error) {
      console.error('Google OAuth error:', error);
      return NextResponse.redirect(new URL('/?error=auth_failed', request.url));
    }
    
    if (!code) {
      console.error('No authorization code received');
      return NextResponse.redirect(new URL('/?error=no_code', request.url));
    }

    // Create Supabase client with service role key
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Exchange code for session
    const { data, error: sessionError } = await supabase.auth.exchangeCodeForSession(code);
    
    if (sessionError) {
      console.error('Session creation error:', sessionError);
      return NextResponse.redirect(new URL('/?error=session_error', request.url));
    }

    if (data.session && data.user) {
      // Successfully authenticated, redirect to pass page
      console.log('User authenticated:', data.user.email);
      return NextResponse.redirect(new URL('/pass', request.url));
    } else {
      // No session created
      console.log('No session created');
      return NextResponse.redirect(new URL('/', request.url));
    }
  } catch (error) {
    console.error('Unexpected error in auth callback:', error);
    return NextResponse.redirect(new URL('/?error=unexpected', request.url));
  }
}
