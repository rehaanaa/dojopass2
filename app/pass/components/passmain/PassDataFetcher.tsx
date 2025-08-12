'use client';

import React from 'react';

export default function PassDataFetcher() {
  const fetchPlatforms = async (user: any, setLoading: (loading: boolean) => void, setPlatforms: (platforms: any[]) => void) => {
    if (!user) return; // Don't fetch if user is not authenticated
    
    try {
      setLoading(true);
      
              console.log('Fetching platforms from /api/platforms...');
      const response = await fetch('/api/platforms');
      
      console.log('📡 Response status:', response.status);
      console.log('📡 Response headers:', response.headers);
      
      // Check if response is ok before parsing JSON
      if (!response.ok) {
        const errorText = await response.text();
                    console.error('HTTP error response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}, body: ${errorText.substring(0, 200)}`);
      }
      
      // Check content type to ensure it's JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const errorText = await response.text();
                  console.error('Non-JSON response:', contentType, errorText.substring(0, 200));
        throw new Error(`Expected JSON but got ${contentType}`);
      }
      
      const result = await response.json();
              console.log('Platforms API response:', result);
      
      if (result.success) {
        setPlatforms(result.data);
      } else {
        console.error('Failed to fetch platforms:', result.error);
        setPlatforms([]);
      }
    } catch (error) {
      console.error('Error fetching platforms:', error);
      setPlatforms([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchPasses = async (selectedPlatform: any, setPassesLoading: (loading: boolean) => void, setPasses: (passes: any[]) => void) => {
    if (!selectedPlatform) {
      setPasses([]);
      return;
    }

    try {
      setPassesLoading(true);
              console.log('Fetching passes for platform:', selectedPlatform.id);
      const response = await fetch(`/api/passes?platform_id=${selectedPlatform.id}`);
      
      console.log('📡 Passes response status:', response.status);
      console.log('📡 Passes response headers:', response.headers);
      
      // Check if response is ok before parsing JSON
      if (!response.ok) {
        const errorText = await response.text();
                    console.error('HTTP error response for passes:', errorText);
        throw new Error(`HTTP error! status: ${response.status}, body: ${errorText.substring(0, 200)}`);
      }
      
      // Check content type to ensure it's JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const errorText = await response.text();
                  console.error('Non-JSON response for passes:', contentType, errorText.substring(0, 200));
        throw new Error(`Expected JSON but got ${contentType}`);
      }
      
      const result = await response.json();
              console.log('Passes API response:', result);
      
      if (result.success) {
        setPasses(result.data);
      } else {
        console.error('Failed to fetch passes:', result.error);
        setPasses([]);
      }
    } catch (error) {
      console.error('Error fetching passes:', error);
      setPasses([]);
      setPassesLoading(false);
    } finally {
      setPassesLoading(false);
    }
  };

  return { fetchPlatforms, fetchPasses };
}
