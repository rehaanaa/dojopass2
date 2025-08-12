'use client';

import React from 'react';
import PlatformCard from '@/components/PlatformCard';

interface PlatformsSectionProps {
  platforms: any[];
  handlePlatformClick: (platform: any) => void;
}

export default function PlatformsSection({ platforms, handlePlatformClick }: PlatformsSectionProps) {
  return (
    <section id="platforms" className="py-16 bg-background transition-colors duration-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">Choose Platform</h2>
          <p className="text-lg text-muted-foreground">Browse our platforms to find the perfect digital pass</p>
        </div>
        {platforms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
            {platforms.map((platform, index) => (
              <PlatformCard
                key={platform.id}
                platform={platform}
                onClick={handlePlatformClick}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">
              <svg className="w-16 h-16 mx-auto text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No Platforms Available</h3>
            <p className="text-muted-foreground mb-4">
              There are currently no platforms available. Please check back later or contact support.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
