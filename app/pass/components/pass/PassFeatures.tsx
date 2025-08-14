'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CardContent } from '@/components/ui/card';
import PassFeatureIconMapper from './PassFeatureIconMapper';

interface PassFeaturesProps {
  features: any[];
}

export default function PassFeatures({ features }: PassFeaturesProps) {
  const { getFeatureIcon } = PassFeatureIconMapper();

  // Debug: Log the features being passed
  console.log('🔍 PassFeatures - received features:', features);



  // Use different vibrant colors for different feature types
  const getFeatureColor = (text: string) => {
    const lowerText = text.toLowerCase();
    
    // Gaming & Entertainment
    if (lowerText.includes('gaming') || lowerText.includes('game') || lowerText.includes('playstation') || lowerText.includes('steam') || lowerText.includes('xbox') || lowerText.includes('nintendo')) {
      return 'text-blue-600 dark:text-blue-400';
    } 
    // AI & Technology
    else if (lowerText.includes('ai') || lowerText.includes('chatgpt') || lowerText.includes('claude') || lowerText.includes('gpt') || lowerText.includes('gemini') || lowerText.includes('midjourney')) {
      return 'text-purple-600 dark:text-purple-400';
    } 
    // Design & Creative
    else if (lowerText.includes('design') || lowerText.includes('figma') || lowerText.includes('canva') || lowerText.includes('adobe') || lowerText.includes('sketch') || lowerText.includes('creative')) {
      return 'text-pink-600 dark:text-pink-400';
    } 
    // Streaming & Media
    else if (lowerText.includes('streaming') || lowerText.includes('netflix') || lowerText.includes('spotify') || lowerText.includes('music') || lowerText.includes('video') || lowerText.includes('4k')) {
      return 'text-red-600 dark:text-red-400';
    } 
    // Gift & Shopping
    else if (lowerText.includes('gift') || lowerText.includes('card') || lowerText.includes('amazon') || lowerText.includes('flipkart') || lowerText.includes('shopping')) {
      return 'text-orange-600 dark:text-orange-400';
    } 
    // Speed & Performance
    else if (lowerText.includes('instant') || lowerText.includes('fast') || lowerText.includes('quick') || lowerText.includes('zap') || lowerText.includes('speed')) {
      return 'text-emerald-600 dark:text-emerald-400';
    } 
    // Quality & Premium
    else if (lowerText.includes('premium') || lowerText.includes('pro') || lowerText.includes('quality') || lowerText.includes('hd') || lowerText.includes('ultra')) {
      return 'text-amber-600 dark:text-amber-400';
    } 
    // Security & Support
    else if (lowerText.includes('secure') || lowerText.includes('support') || lowerText.includes('24/7') || lowerText.includes('priority') || lowerText.includes('shield')) {
      return 'text-teal-600 dark:text-teal-400';
    } 
    // Collaboration & Social
    else if (lowerText.includes('team') || lowerText.includes('collaboration') || lowerText.includes('family') || lowerText.includes('sharing') || lowerText.includes('users')) {
      return 'text-indigo-600 dark:text-indigo-400';
    } 
    // Cloud & Storage
    else if (lowerText.includes('cloud') || lowerText.includes('storage') || lowerText.includes('sync') || lowerText.includes('backup')) {
      return 'text-cyan-600 dark:text-cyan-400';
    } 
    // Mobile & Apps
    else if (lowerText.includes('mobile') || lowerText.includes('app') || lowerText.includes('smartphone') || lowerText.includes('ios') || lowerText.includes('android')) {
      return 'text-lime-600 dark:text-lime-400';
    } 
    // Default color
    else {
      return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <CardContent className="p-2 md:p-3 pt-0">
      {/* Features */}
      {features && features.length > 0 ? (
        <div className="mb-1 md:mb-2">
          <div className="flex items-center mb-0.5">
            <svg className="w-2 h-2 md:w-3 md:h-3 mr-0.5 md:mr-1 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Features ({features.length})</span>
          </div>
          <ul className="space-y-1 text-[11px] md:text-xs lg:text-sm text-gray-700 dark:text-gray-300">
            {features.map((feature: any, index: number) => {
              // Handle both 'name' and 'text' keys for features
              const featureText = feature.name || feature.text || feature.title || String(feature);
              if (featureText && featureText !== 'undefined' && featureText !== 'null') {
                return (
                  <li key={index} className="flex items-center">
                    <span className={`mr-0.5 md:mr-1 flex-shrink-0 ${getFeatureColor(featureText)}`}>
                      {getFeatureIcon(featureText)}
                    </span>
                    <span>{featureText}</span>
                  </li>
                );
              }
              return (
                <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="mr-0.5 md:mr-1 flex-shrink-0 text-indigo-600 dark:text-indigo-400">
                    <CheckCircle2 className="w-2 h-2 md:w-3 md:h-3" />
                  </span>
                  <span>Feature {index + 1}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="mb-1 md:mb-2">
          <div className="flex items-center mb-0.5">
            <svg className="w-2 h-2 md:w-3 md:h-3 mr-0.5 md:mr-1 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-medium text-gray-900 dark:text-gray-100">Features</span>
          </div>
          <div className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400">
            No features available
          </div>
        </div>
      )}
    </CardContent>
  );
}
