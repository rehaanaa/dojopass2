'use client';

import React, { useState, useEffect } from 'react';
import { Star, Tag, Clock, CheckCircle2, Zap, Sparkles, Bot, Gamepad2, Music, Video, Monitor, HardDrive, Globe, Package, Headphones, Languages, Theater, Download, Tv } from 'lucide-react';
import Image from 'next/image';

interface PassesSectionProps {
  passes: any[];
}

export default function PassesSection({ passes }: PassesSectionProps) {
  const [clickedPasses, setClickedPasses] = useState<Set<string>>(new Set());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePassClick = (pass: any) => {
    setClickedPasses(prev => new Set(prev).add(pass.id));
    console.log('Pass clicked:', pass);
    // Handle pass selection
    // You can add navigation logic here
    setTimeout(() => {
      setClickedPasses(prev => {
        const newSet = new Set(prev);
        newSet.delete(pass.id);
        return newSet;
      });
    }, 2000); // Remove loading state after 2 seconds
  };

  // Helper function to get feature icon based on index
  const getFeatureIcon = (index: number) => {
    const icons = [
      <Star key="star" className="w-2 h-2 md:w-3 md:h-3" />,
      <Zap key="zap" className="w-2 h-2 md:w-3 md:h-3" />,
      <CheckCircle2 key="check" className="w-2 h-2 md:w-3 md:h-3" />,
      <Sparkles key="sparkles" className="w-2 h-2 md:w-3 md:h-3" />,
      <Bot key="bot" className="w-2 h-2 md:w-3 md:h-3" />,
      <Gamepad2 key="gamepad" className="w-2 h-2 md:w-3 md:h-3" />,
      <Music key="music" className="w-2 h-2 md:w-3 md:h-3" />,
      <Video key="video" className="w-2 h-2 md:w-3 md:h-3" />,
      <Monitor key="monitor" className="w-2 h-2 md:w-3 md:h-3" />,
      <HardDrive key="harddrive" className="w-2 h-2 md:w-3 md:h-3" />
    ];
    return icons[index % icons.length];
  };

  // Helper function to get feature color based on index
  const getFeatureColor = (index: number) => {
    const colors = [
      'text-blue-600 dark:text-blue-400',
      'text-green-600 dark:text-green-400',
      'text-purple-600 dark:text-purple-400',
      'text-orange-600 dark:text-orange-400',
      'text-pink-600 dark:text-pink-400',
      'text-indigo-600 dark:text-indigo-400',
      'text-red-600 dark:text-red-400',
      'text-yellow-600 dark:text-yellow-400',
      'text-teal-600 dark:text-teal-400',
      'text-cyan-600 dark:text-cyan-400'
    ];
    return colors[index % colors.length];
  };

  // Helper function to parse features
  const parseFeatures = (features: any) => {
    if (typeof features === 'string') {
      try {
        const parsed = JSON.parse(features);
        // Handle case where features is a single object
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
          return [parsed];
        }
        return Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        console.log('Error parsing features string:', e);
        return [];
      }
    }
    
    // Handle case where features is already a single object
    if (features && typeof features === 'object' && !Array.isArray(features)) {
      return [features];
    }
    
    return Array.isArray(features) ? features : [];
  };

  // Parse offers if they come as JSON string
  const parseOffers = (offers: any) => {
    if (typeof offers === 'string') {
      try {
        return JSON.parse(offers);
      } catch (e) {
        return offers;
      }
    }
    return offers;
  };

  // Format offers for display
  const formatOffers = (offers: any) => {
    if (!offers) return null;
    
    const parsed = parseOffers(offers);
    
    if (Array.isArray(parsed)) {
      return parsed.map((offer: any, index: number) => {
        if (offer && typeof offer === 'object') {
          return offer.title || offer.name || offer.discount || JSON.stringify(offer);
        }
        return String(offer);
      }).join(', ');
    }
    
    if (typeof parsed === 'object') {
      return Object.entries(parsed).map(([key, value]) => `${key}: ${value}`).join(', ');
    }
    
    return String(parsed);
  };

  return (
    <section id="passes" className="py-12 md:py-16 bg-background transition-colors duration-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">Choose Pass</h2>
          <p className="text-lg text-muted-foreground">Select from our curated collection of premium digital passes</p>
        </div>
                        <div
          className="grid gap-2 md:gap-4 lg:gap-6"
          style={{
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : window.innerWidth < 1024 ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)'
          }}
        >
          {Array.isArray(passes) && passes.length > 0 ? (
            passes.map((pass: any, index: number) => (
              <div key={pass.id} className="w-full">
                <div 
                  onClick={() => handlePassClick(pass)}
                  className={`bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden h-auto min-h-[60px] md:min-h-[100px] lg:min-h-[140px] w-full max-w-none mx-auto flex flex-col text-gray-900 dark:text-white transition-all duration-300 hover:border-green-500 hover:shadow-lg cursor-pointer group relative ${
                    clickedPasses.has(pass.id) ? 'cursor-not-allowed opacity-75' : ''
                  }`}
                >
                  {clickedPasses.has(pass.id) && (
                    <div className="absolute inset-0 bg-black/20 dark:bg-white/20 rounded-lg flex items-center justify-center z-10">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-500"></div>
                    </div>
                  )}
                  {/* Header with Image */}
                  <div className="p-1 md:p-2 pb-0.5">
                    <div className="relative w-full h-12 md:h-24 lg:h-32 rounded-lg overflow-hidden mb-0.5 md:mb-1">
                      {pass.image_url ? (
                        <Image
                          src={pass.image_url}
                          alt={pass.title || 'Pass'}
                          fill
                          className="object-contain"
                          sizes="100%"
                          unoptimized={!pass.image_url.startsWith('/')}
                          onError={(e) => {
                            // Fallback to default icon if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="flex items-center justify-center w-full h-12 md:h-20 lg:h-32 rounded-lg bg-gradient-to-br from-muted to-muted/80">
                                  <svg class="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 00-2-2V5a2 2 0 00-2 2v10a2 0 002 2z" />
                                  </svg>
                                </div>
                              `;
                            }
                          }}
                        />
                      ) : (
                        <div className="flex items-center justify-center w-full h-12 md:h-24 lg:h-32 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600">
                          <svg className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 00-2-2V5a2 2 0 00-2 2v10a2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    {/* Pass ID and Platform ID */}
                    <div className="mb-0.5 flex items-center justify-between">
                      <span className="text-[8px] md:text-[10px] lg:text-xs text-muted-foreground">Pass ID: {pass.id}</span>
                      <span className="text-[8px] md:text-[10px] lg:text-xs text-muted-foreground">Platform ID: {pass.platform_id}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-[10px] md:text-xs lg:text-sm font-bold text-card-foreground mb-0.5">
                      {pass.title || 'Untitled Pass'}
                    </h3>
                    
                    {/* Description */}
                    {pass.description && (
                      <div className="mb-0.5 md:mb-1">
                        <p className="text-[8px] md:text-[10px] lg:text-xs text-muted-foreground leading-tight">
                          {pass.description}
                        </p>
                      </div>
                    )}
                    
                    {/* Price and Duration */}
                    <div className="mb-0.5 md:mb-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] md:text-sm lg:text-base font-bold text-green-600 dark:text-green-400">
                          ₹{pass.price || '0'}
                        </span>
                        <span className="text-[10px] md:text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                          {pass.duration || '1 Month'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  {parseFeatures(pass.features).length > 0 ? (
                    <div className="p-1 md:p-2 pt-0">
                      <div className="mb-1 md:mb-2">
                        <div className="flex items-center mb-0.5">
                          <Star className="w-2 h-2 md:w-3 md:h-3 mr-1 text-yellow-500" />
                          <span className="text-[10px] md:text-xs font-medium text-card-foreground">Features ({parseFeatures(pass.features).length})</span>
                        </div>
                        <ul className="space-y-0.5 text-[8px] md:text-xs text-muted-foreground">
                          {parseFeatures(pass.features).map((feature: any, index: number) => {
                            // Handle both 'name' and 'text' keys for features
                            const featureText = feature.name || feature.text || feature;
                            const featureIcon = getFeatureIcon(index);
                            const featureColor = getFeatureColor(index);
                            
                            return (
                              <li key={index} className="flex items-center">
                                <span className={`mr-1 flex-shrink-0 ${featureColor}`}>
                                  {featureIcon}
                                </span>
                                <span className="text-[8px] md:text-xs">{featureText}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="p-1 md:p-2 pt-0">
                      <div className="mb-1 md:mb-2">
                        <div className="flex items-center mb-0.5">
                          <Star className="w-2 h-2 md:w-3 md:h-3 mr-1 text-yellow-500" />
                          <span className="text-[10px] md:text-xs font-medium text-card-foreground">Features</span>
                        </div>
                        <div className="text-[8px] md:text-xs text-muted-foreground">
                          No features available
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Offers */}
                  {parseOffers(pass.offers) && (
                    <div className="p-1 md:p-2 pt-0">
                      <div className="mb-1 md:mb-2">
                        <div className="flex items-center mb-0.5">
                          <Tag className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 mr-1 text-green-600 dark:text-green-400" />
                          <span className="text-[10px] md:text-xs font-medium text-card-foreground">Offers</span>
                        </div>
                        <div className="text-[10px] md:text-xs lg:text-sm text-green-600 dark:text-green-400 font-medium">
                          {formatOffers(pass.offers)}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* CardFooter */}
                  <div className="p-1 md:p-2 pt-0 border-t border-border mt-auto">
                    <div className="flex justify-between items-center w-full">
                      <div className="text-left">
                        <span className="text-[8px] md:text-[10px] lg:text-xs text-muted-foreground">Pass ID: {pass.id}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[8px] md:text-[10px] lg:text-xs text-muted-foreground">Platform ID: {pass.platform_id}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-muted-foreground">
                <p>No passes available at the moment.</p>
                <p className="text-sm mt-2">Please check back later or contact support.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
