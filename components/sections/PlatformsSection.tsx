'use client';

import React, { useState, useEffect } from 'react';
import PlatformCardMain from '@/components/platform/PlatformCardMain';
import { platforms } from './main/MainDataLoader';

export default function PlatformsSection() {
  const [clickedPlatforms, setClickedPlatforms] = useState<Set<string>>(new Set());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePlatformClick = (platform: any) => {
    setClickedPlatforms(prev => new Set(prev).add(platform.id));
    console.log('Platform clicked:', platform);
    // Handle platform selection
    // You can add navigation logic here
    setTimeout(() => {
      setClickedPlatforms(prev => {
        const newSet = new Set(prev);
        newSet.delete(platform.id);
        return newSet;
      });
    }, 2000); // Remove loading state after 2 seconds
  };

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select from our wide range of platforms and services to get started
          </p>
        </div>
        
        <div 
          className="grid gap-2 md:gap-4 lg:gap-6"
                      style={{ 
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : window.innerWidth < 1024 ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)',
              gridTemplateRows: 'repeat(2, 1fr)'
            }}
        >
          {platforms.map((platform: any) => (
            <div key={platform.id} className="w-full">
              <div className="w-full max-w-none mx-auto">
                <PlatformCardMain
                  platform={platform}
                  onClick={handlePlatformClick}
                  isLoading={clickedPlatforms.has(platform.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
