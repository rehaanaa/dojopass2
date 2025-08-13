'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CardContent } from '@/components/ui/card';
import FeatureIconMapper from './FeatureIconMapper';

interface PlatformFeaturesProps {
  features: any[];
}

export default function PlatformFeatures({ features }: PlatformFeaturesProps) {
  const { getFeatureIcon } = FeatureIconMapper();

  // Debug: Log the features being passed
  console.log('🔍 PlatformFeatures - received features:', features);

  // Use different colors for different feature types (for icons)
  const getFeatureColor = (text: string) => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('gaming') || lowerText.includes('game') || lowerText.includes('playstation') || lowerText.includes('steam') || lowerText.includes('xbox')) {
      return 'text-blue-600 dark:text-blue-400';
    } else if (lowerText.includes('ai') || lowerText.includes('chatgpt') || lowerText.includes('claude') || lowerText.includes('gpt')) {
      return 'text-purple-600 dark:text-purple-400';
    } else if (lowerText.includes('design') || lowerText.includes('figma') || lowerText.includes('canva') || lowerText.includes('adobe')) {
      return 'text-pink-600 dark:text-pink-400';
    } else if (lowerText.includes('streaming') || lowerText.includes('netflix') || lowerText.includes('spotify') || lowerText.includes('music')) {
      return 'text-red-600 dark:text-red-400';
    } else if (lowerText.includes('gift') || lowerText.includes('card') || lowerText.includes('amazon') || lowerText.includes('flipkart')) {
      return 'text-orange-600 dark:text-orange-400';
    } else if (lowerText.includes('instant') || lowerText.includes('fast') || lowerText.includes('quick')) {
      return 'text-green-600 dark:text-green-400';
    } else {
      return 'text-indigo-600 dark:text-indigo-400';
    }
  };

  return (
    <CardContent className="p-3 pt-0">
      {/* Features */}
      {features && features.length > 0 ? (
        <div className="mb-3">
          <div className="flex items-center mb-1">
            <svg className="w-3 h-3 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-medium text-gray-900 dark:text-gray-100">Features ({features.length})</span>
          </div>
          <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
            {features.map((feature: any, index: number) => {
              // Handle both 'name' and 'text' keys for features
              const featureText = feature.name || feature.text || feature.title || String(feature);
              if (featureText && featureText !== 'undefined' && featureText !== 'null') {
                return (
                  <li key={index} className="flex items-center">
                    <span className={`mr-1 flex-shrink-0 ${getFeatureColor(featureText)}`}>
                      {getFeatureIcon(featureText)}
                    </span>
                    <span>{featureText}</span>
                  </li>
                );
              }
              return (
                <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="mr-1 flex-shrink-0 text-indigo-600 dark:text-indigo-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <span>Feature {index + 1}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="mb-3">
          <div className="flex items-center mb-1">
            <svg className="w-3 h-3 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-medium text-gray-900 dark:text-gray-100">Features</span>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            No features available
          </div>
        </div>
      )}
    </CardContent>
  );
}
