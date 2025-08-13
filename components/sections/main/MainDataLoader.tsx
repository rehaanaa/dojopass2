'use client';

import React from 'react';
import { Gamepad2, Zap, CheckCircle2, Bot, Clock, Star, Globe, Package, Music, Download, Headphones, Video, Tv, HardDrive, Theater, Sparkles, Languages } from 'lucide-react';

export default function MainDataLoader() {
  const loadStaticPlatforms = () => {
    const staticPlatforms = [
      {
        id: 1,
        title: 'Gaming Pass',
        description: 'Top up your game with codes & passes Steam, Xbox, PSN, and Nitro codes – delivered instantly.',
        image_url: '/landing/Game-Pass-Xbox.jpg',
        subtitle: 'Gaming',
        features: [
          { name: 'PlayStation, Steam, Xbox', icon: <Gamepad2 className="w-4 h-4" /> },
          { name: 'Instant Code', icon: <Zap className="w-4 h-4" /> },
          { name: '100% Valid', icon: <CheckCircle2 className="w-4 h-4" /> }
        ]
      },
      {
        id: 2,
        title: 'AI Pass',
        description: 'ChatGPT, Claude, Gemini & more Unlock premium access to the smartest AI tools in the world.',
        image_url: '/landing/ChatGPT-5-Plus.png',
        subtitle: 'AI Tools',
        features: [
          { name: 'ChatGPT Pro, Claude 3', icon: <Bot className="w-4 h-4" /> },
          { name: '30 Days Access', icon: <Clock className="w-4 h-4" /> },
          { name: 'Instant Login', icon: <Zap className="w-4 h-4" /> }
        ]
      },
      {
        id: 3,
        title: 'Design Pass',
        description: 'Canva, Figma, Adobe & more Pro design tools for freelancers, editors, and agencies.',
        image_url: '/landing/Canva-Free.png',
        subtitle: 'Design',
        features: [
          { name: 'Pro Creative Tools', icon: <CheckCircle2 className="w-4 h-4" /> },
          { name: 'Team Invites', icon: <Star className="w-4 h-4" /> },
          { name: 'Instant Access', icon: <Zap className="w-4 h-4" /> }
        ]
      },
      {
        id: 4,
        title: 'Gift Pass',
        description: 'Cards & credits for anything digital Digital gift cards and top-up credits for your favorite stores, platforms, and games.',
        image_url: '/landing/gift-pass.png',
        subtitle: 'Gift Cards',
        features: [
          { name: 'Instant code delivery', icon: <Zap className="w-4 h-4" /> },
          { name: 'Multiple currency options', icon: <Globe className="w-4 h-4" /> },
          { name: 'Wide range: Amazon, Flipkart, Google Play', icon: <Package className="w-4 h-4" /> }
        ]
      },
      {
        id: 5,
        title: 'Streaming Pass',
        description: 'Netflix, Spotify, YouTube Premium & more Premium streaming services for unlimited entertainment.',
        image_url: '/landing/streaming-pass.png',
        subtitle: 'Streaming',
        features: [
          { name: 'Ad-Free Music', icon: <Music className="w-4 h-4" /> },
          { name: '4K Ultra HD', icon: <Video className="w-4 h-4" /> },
          { name: 'Multiple Screens', icon: <Tv className="w-4 h-4" /> }
        ]
      }
    ];
    return staticPlatforms;
  };

  const loadStaticPasses = () => {
    const staticPasses = [
      {
        id: 1,
        title: 'ChatGPT 5 Plus',
        description: 'Access to GPT-4, advanced features, and priority support',
        price: 1999,
        duration_days: 30,
        platform_id: 2,
        image_url: '/landing/ChatGPT-5-Plus.png',
        features: [
          { name: 'GPT-4 Access', icon: <Bot className="w-4 h-4" /> },
          { name: 'Priority Support', icon: <Star className="w-4 h-4" /> },
          { name: 'Advanced Features', icon: <Zap className="w-4 h-4" /> }
        ],
        offers: [{ title: 'New User Discount', discount: '20% OFF' }]
      },
      {
        id: 2,
        title: 'Spotify Premium',
        description: 'Ad-free music, offline downloads, and high-quality audio',
        price: 999,
        duration_days: 30,
        platform_id: 5,
        image_url: '/landing/spotify.png',
        features: [
          { name: 'Ad-Free Music', icon: <Music className="w-4 h-4" /> },
          { name: 'Offline Downloads', icon: <Download className="w-4 h-4" /> },
          { name: 'High Quality Audio', icon: <Headphones className="w-4 h-4" /> }
        ],
        offers: [{ title: 'Student Discount', discount: '50% OFF' }]
      },
      {
        id: 3,
        title: 'Netflix Premium',
        description: '4K Ultra HD streaming with multiple screens',
        price: 1499,
        duration_days: 30,
        platform_id: 5,
        image_url: '/landing/netflix.png',
        features: [
          { name: '4K Ultra HD', icon: <Video className="w-4 h-4" /> },
          { name: 'Multiple Screens', icon: <Tv className="w-4 h-4" /> },
          { name: 'Offline Viewing', icon: <HardDrive className="w-4 h-4" /> }
        ],
        offers: [{ title: 'Family Plan', discount: 'Save 30%' }]
      },
      {
        id: 4,
        title: 'Canva Pro',
        description: 'Professional design tools for teams and collaboration',
        price: 799,
        duration_days: 30,
        platform_id: 3,
        image_url: '/landing/Canva-Free.png',
        features: [
          { name: 'Pro Creative Tools', icon: <CheckCircle2 className="w-4 h-4" /> },
          { name: 'Team Invites', icon: <Star className="w-4 h-4" /> },
          { name: 'Instant Access', icon: <Zap className="w-4 h-4" /> }
        ],
        offers: [{ title: 'Team Bundle', discount: '25% OFF' }]
      },
      {
        id: 5,
        title: 'Xbox Game Pass',
        description: 'Access to hundreds of high-quality games for Xbox and PC',
        price: 500,
        duration_days: 365,
        platform_id: 1,
        image_url: '/landing/Game-Pass-Xbox.jpg',
        features: [
          { name: 'PlayStation, Steam, Xbox', icon: <Gamepad2 className="w-4 h-4" /> },
          { name: 'Instant Code', icon: <Zap className="w-4 h-4" /> },
          { name: '100% Valid', icon: <CheckCircle2 className="w-4 h-4" /> }
        ],
        offers: [{ title: 'Bulk Purchase', discount: '10% OFF' }]
      }
    ];
    return staticPasses;
  };

  const loadPasses = async () => {
    try {
      const response = await fetch('/api/passes');
      if (response.ok) {
        const result = await response.json();
        console.log('Passes API response:', result);
        
        // Extract data from the API response structure
        const passesData = result.data || result;
        console.log('Passes data:', passesData);
        console.log('Passes type:', typeof passesData);
        console.log('Passes is array:', Array.isArray(passesData));
        
        return Array.isArray(passesData) ? passesData : [];
      } else {
        console.error('Failed to fetch passes');
        return [];
      }
    } catch (error) {
      console.error('Error fetching passes:', error);
      return [];
    }
  };

  return { loadStaticPlatforms, loadStaticPasses, loadPasses };
}
