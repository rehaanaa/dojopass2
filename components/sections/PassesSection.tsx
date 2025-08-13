'use client';

import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Star, Clock, Tag, Monitor } from 'lucide-react';
import Image from 'next/image';

interface PassesSectionProps {
  passes: any[];
}

export default function PassesSection({ passes }: PassesSectionProps) {
  // Helper function to get icon component based on feature name
  const getFeatureIcon = (featureName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'PlayStation, Steam, Xbox': <Monitor className="w-4 h-4" />,
      'Instant Code': <Monitor className="w-4 h-4" />,
      '100% Valid': <Star className="w-4 h-4" />,
      'Instant code delivery': <Monitor className="w-4 h-4" />,
      'Multiple currency options': <Monitor className="w-4 h-4" />,
      'Wide range: Amazon, Flipkart, Google Play': <Monitor className="w-4 h-4" />,
      'ChatGPT Pro, Claude 3': <Monitor className="w-4 h-4" />,
      '30 Days Access': <Clock className="w-4 h-4" />,
      'Instant Login': <Monitor className="w-4 h-4" />,
      'Pro Creative Tools': <Star className="w-4 h-4" />,
      'Team Invites': <Star className="w-4 h-4" />,
      'Instant Access': <Monitor className="w-4 h-4" />,
      'GPT-4 Access': <Monitor className="w-4 h-4" />,
      'Priority Support': <Star className="w-4 h-4" />,
      'Advanced Features': <Monitor className="w-4 h-4" />,
      'Ad-Free Music': <Monitor className="w-4 h-4" />,
      'Offline Downloads': <Monitor className="w-4 h-4" />,
      'High Quality Audio': <Monitor className="w-4 h-4" />,
      '4K Ultra HD': <Monitor className="w-4 h-4" />,
      'Multiple Screens': <Monitor className="w-4 h-4" />,
      'Offline Viewing': <Monitor className="w-4 h-4" />,
      'Exclusive Shows': <Monitor className="w-4 h-4" />,
      'Premium Quality': <Star className="w-4 h-4" />,
      'Multiple Languages': <Monitor className="w-4 h-4" />
    };
    return iconMap[featureName] || <Star className="w-4 h-4" />;
  };

  // Parse features if they come as JSON string
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
    <section id="passes" className="py-16 bg-background transition-colors duration-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">Choose Pass</h2>
          <p className="text-lg text-muted-foreground">Select from our curated collection of premium digital passes</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {Array.isArray(passes) && passes.length > 0 ? (
            passes.map((pass: any, index: number) => (
              <Card key={pass.id} className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden h-full flex flex-col text-gray-900 dark:text-white">
                {/* Header with Image */}
                <CardHeader className="p-3 pb-1">
                  <div className="relative w-full h-40 rounded-lg overflow-hidden mb-2">
                    {pass.image_url ? (
                      <Image
                        src={pass.image_url}
                        alt={pass.title}
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
                              <div class="flex items-center justify-center w-full h-32 rounded-lg bg-gradient-to-br from-muted to-muted/80">
                                <svg class="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 00-2-2V5a2 2 0 00-2 2v10a2 0 002 2z" />
                                </svg>
                              </div>
                            `;
                          }
                        }}
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-32 rounded-lg bg-gradient-to-br from-muted to-muted/80">
                        <Monitor className="w-6 h-6 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  
                  {/* Pass ID and Platform ID */}
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Pass ID: {pass.id}</span>
                    <span className="text-xs text-muted-foreground">Platform ID: {pass.platform_id}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-sm font-bold text-card-foreground mb-1">
                    {pass.title || 'Untitled Pass'}
                  </h3>
                  
                  {/* Description */}
                  <div className="mb-2">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {pass.description}
                    </p>
                  </div>
                </CardHeader>
                
                {/* Content */}
                <CardContent className="p-3 pt-0">
                  {/* Price and Duration */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-primary">
                        ₹{pass.price}
                      </span>
                      {pass.duration_days && (
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{pass.duration_days} {pass.duration_days === 1 ? 'Day' : 'Days'}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  {parseFeatures(pass.features).length > 0 ? (
                    <div className="mb-3">
                      <div className="flex items-center mb-1">
                        <Star className="w-3 h-3 mr-1 text-yellow-500" />
                        <span className="text-xs font-medium text-card-foreground">Features ({parseFeatures(pass.features).length})</span>
                      </div>
                      <ul className="space-y-1 text-xs text-muted-foreground">
                        {parseFeatures(pass.features).map((feature: any, index: number) => {
                          // Handle both 'name' and 'text' keys for features
                          const featureText = feature.name || feature.text || feature.title || String(feature);
                          if (featureText && featureText !== 'undefined' && featureText !== 'null') {
                            return (
                              <li key={index} className="flex items-center">
                                <span className="mr-2 flex-shrink-0 text-green-600 dark:text-green-400">
                                  {getFeatureIcon(featureText)}
                                </span>
                                <span>{featureText}</span>
                              </li>
                            );
                          }
                          return (
                            <li key={index} className="flex items-center text-muted-foreground">
                              <span className="mr-2 flex-shrink-0 text-green-600 dark:text-green-400">
                                <Star className="w-4 h-4" />
                              </span>
                              <span>Feature {index + 1}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : (
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <Star className="w-4 h-4 mr-1 text-yellow-500" />
                        <span className="text-sm font-medium text-card-foreground">Features</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        No features available
                      </div>
                    </div>
                  )}

                  {/* Offers */}
                  {parseOffers(pass.offers) && (
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <Tag className="w-4 h-4 mr-1 text-orange-600 dark:text-orange-400" />
                        <span className="text-sm font-medium text-card-foreground">Offers</span>
                      </div>
                      <div className="text-sm text-orange-600 dark:text-orange-400 font-medium">
                        {formatOffers(pass.offers)}
                      </div>
                    </div>
                  )}
                </CardContent>
                
                {/* CardFooter */}
                <CardFooter className="p-3 pt-0 border-t border-border mt-auto">
                  <div className="flex justify-between items-center w-full">
                    <div className="text-left">
                      <p className="text-base font-bold text-primary">₹{pass.price}</p>
                      <p className="text-xs text-muted-foreground">{pass.duration_days} {pass.duration_days === 1 ? 'Day' : 'Days'}</p>
                    </div>
                    <div className="text-right text-xs text-muted-foreground">
                      Pass ID: {pass.id}
                    </div>
                  </div>
                </CardFooter>
              </Card>
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
