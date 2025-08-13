'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AuthCallback() {
  const router = useRouter();
  const [status, setStatus] = useState('');

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {

        
        // Get the current session from Supabase
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error('Session error:', sessionError);

          setTimeout(() => {
            router.push('/?error=session_error');
          }, 2000);
          return;
        }

        if (session && session.user) {
          // Successfully authenticated
          console.log('User authenticated:', session.user.email);

          
          // Force redirect to pass page
          setTimeout(() => {
            window.location.href = '/pass';
          }, 1000);
        } else {
          // No session found
          console.log('No session found');

          
          setTimeout(() => {
            router.push('/');
          }, 2000);
        }
      } catch (error) {
        console.error('Unexpected error in auth callback:', error);

        
        setTimeout(() => {
          router.push('/?error=unexpected');
        }, 2000);
      }
    };

    handleAuthCallback();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>

      </div>
    </div>
  );
}
