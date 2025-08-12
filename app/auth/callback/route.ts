import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    
    try {
      // Exchange the code for a session
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      
      if (error) {
        console.error('Error exchanging code for session:', error);
        return NextResponse.redirect(`${requestUrl.origin}/?error=auth_failed`);
      }
      
      // Redirect to pass page after successful authentication
      return NextResponse.redirect(`${requestUrl.origin}/pass`);
    } catch (error) {
      console.error('Error in auth callback:', error);
      return NextResponse.redirect(`${requestUrl.origin}/?error=auth_failed`);
    }
  }

  // If no code, redirect to home page
  return NextResponse.redirect(requestUrl.origin);
}

