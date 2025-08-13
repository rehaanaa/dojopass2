'use client';

import React from 'react';

export default function DataParser() {
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
    console.log('🔍 Platform DataParser - parsing offers:', offers, 'Type:', typeof offers);
    
    if (typeof offers === 'string') {
      try {
        const parsed = JSON.parse(offers);
        console.log('🔍 Platform DataParser - parsed offers from string:', parsed);
        return parsed;
      } catch (e) {
        console.warn('Platform DataParser - Failed to parse offers JSON:', e);
        return offers;
      }
    }
    
    console.log('🔍 Platform DataParser - offers is already parsed:', offers);
    return offers;
  };

  // Format offers for display with proper icon mapping
  const formatOffers = (offers: any) => {
    const parsed = parseOffers(offers);
    console.log('🔍 Platform DataParser - formatting offers, parsed:', parsed);
    
    if (Array.isArray(parsed)) {
      const filtered = parsed.filter(offer => offer && typeof offer === 'object' && offer.text);
      console.log('🔍 Platform DataParser - filtered offers:', filtered);
      return filtered;
    }
    
    if (typeof parsed === 'object') {
      console.log('🔍 Platform DataParser - single offer object:', parsed);
      return [parsed];
    }
    
    console.log('🔍 Platform DataParser - no offers to format');
    return [];
  };

  return { parseFeatures, parseOffers, formatOffers };
}
