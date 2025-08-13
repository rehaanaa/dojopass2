'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AuthCallback() {
  const router = useRouter();
  const [status, setStatus] = useState('Processing authentication...');

  useEffect(() => {
    const handleGoogleCallback = async () => {
      try {
        setStatus('Processing Google OAuth callback...');
        
        // Get the authorization code from URL
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const error = urlParams.get('error');
        
        if (error) {
          console.error('Google OAuth error:', error);
          setStatus('Authentication failed, redirecting to home...');
          setTimeout(() => {
            router.push('https://dojopass.store?error=auth_failed');
          }, 2000);
          return;
        }
        
        if (!code) {
          console.error('No authorization code received');
          setStatus('No authorization code, redirecting to home...');
          setTimeout(() => {
            router.push('https://dojopass.store?error=no_code');
          }, 2000);
          return;
        }

        setStatus('Creating Supabase session...');
        
        // Exchange code for tokens and create Supabase session
        const { data, error: sessionError } = await supabase.auth.exchangeCodeForSession(code);
        
        if (sessionError) {
          console.error('Session creation error:', sessionError);
          setStatus('Session creation failed, redirecting to home...');
          setTimeout(() => {
            router.push('https://dojopass.store?error=session_error');
          }, 2000);
          return;
        }

        if (data.session && data.user) {
          // Successfully authenticated
          console.log('User authenticated:', data.user.email);
          setStatus('Authentication successful! Redirecting to passes...');
          
          // Force redirect to pass page
          setTimeout(() => {
            window.location.href = 'https://dojopass.store/pass';
          }, 1000);
        } else {
          // No session created
          console.log('No session created');
          setStatus('No session created, redirecting to home...');
          
          setTimeout(() => {
            router.push('https://dojopass.store');
          }, 2000);
        }
      } catch (error) {
        console.error('Unexpected error in auth callback:', error);
        setStatus('Unexpected error, redirecting to home...');
        
        setTimeout(() => {
          router.push('https://dojopass.store?error=unexpected');
        }, 2000);
      }
    };

    handleGoogleCallback();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground mb-2">Completing sign in...</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{status}</p>
      </div>
    </div>
  );
}
