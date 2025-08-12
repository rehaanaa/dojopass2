'use client';

import React from 'react';

export default function PassDataParser() {
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
    if (typeof offers === 'string') {
      try {
        return JSON.parse(offers);
      } catch (e) {
        return offers;
      }
    }
    return offers;
  };

  // Format offers for display with proper icon mapping
  const formatOffers = (offers: any) => {
    if (!offers) return null;
    
    const parsed = parseOffers(offers);
    
    if (Array.isArray(parsed)) {
      return parsed.filter(offer => offer && typeof offer === 'object');
    }
    
    if (typeof parsed === 'object') {
      return [parsed];
    }
    
    return null;
  };

  return { parseFeatures, parseOffers, formatOffers };
}
