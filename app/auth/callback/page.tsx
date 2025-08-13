'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AuthCallback() {
  const router = useRouter();
  const [status, setStatus] = useState('Processing authentication...');

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        setStatus('Checking session...');
        
        // Get the current session from Supabase
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error('Session error:', sessionError);
          setStatus('Session error, redirecting to home...');
          setTimeout(() => {
            router.push('https://dojopass.store?error=session_error');
          }, 2000);
          return;
        }

        if (session && session.user) {
          // Successfully authenticated
          console.log('User authenticated:', session.user.email);
          setStatus('Authentication successful! Redirecting to passes...');
          
          // Force redirect to pass page
          setTimeout(() => {
            window.location.href = 'https://dojopass.store/pass';
          }, 1000);
        } else {
          // No session found
          console.log('No session found');
          setStatus('No session found, redirecting to home...');
          
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

    handleAuthCallback();
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
