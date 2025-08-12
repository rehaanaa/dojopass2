'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Handle the OAuth callback
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          console.error('Auth callback error:', error);
          router.push('https://dojopass.store?error=auth_failed');
          return;
        }

        if (data.session) {
          // Successfully authenticated, redirect directly to pass page
          console.log('User authenticated, redirecting to pass page');
          router.push('https://dojopass.store/pass');
        } else {
          // No session, redirect to home
          console.log('No session found, redirecting to home');
          router.push('https://dojopass.store');
        }
      } catch (error) {
        console.error('Unexpected error in auth callback:', error);
        router.push('https://dojopass.store?error=unexpected');
      }
    };

    handleAuthCallback();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Completing sign in...</p>
      </div>
    </div>
  );
}
