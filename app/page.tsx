'use client';

import { useAuth } from '@/contexts/auth/AuthContextMain';
import HeroSection from '@/components/sections/HeroSection';
import ProductsSection from '@/components/sections/ProductsSection';
import CTASection from '@/components/sections/CTASection';
import PassMainPage from '@/app/pass/components/PassMainPage';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // If user is logged in, show the pass selection page
  if (user) {
    return (
      <div className="min-h-screen bg-background">
        <PassMainPage />
      </div>
    );
  }

  // If user is not logged in, show the landing page
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProductsSection />
      <CTASection />
    </div>
  );
} 