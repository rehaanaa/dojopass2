'use client';

import React from 'react';
import { Gamepad2, Zap, CheckCircle2, Bot, Clock, Star, Globe, Package, Music, Download, Headphones, Video, Tv, HardDrive, Theater, Sparkles, Languages } from 'lucide-react';

export default function MainFeatureIconMapper() {
  // Helper function to get icon component based on feature name
  const getFeatureIcon = (featureName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'PlayStation, Steam, Xbox': <Gamepad2 className="w-4 h-4" />,
      'Instant Code': <Zap className="w-4 h-4" />,
      '100% Valid': <CheckCircle2 className="w-4 h-4" />,
      'Instant code delivery': <Zap className="w-4 h-4" />,
      'Multiple currency options': <Globe className="w-4 h-4" />,
      'Wide range: Amazon, Flipkart, Google Play': <Package className="w-4 h-4" />,
      'ChatGPT Pro, Claude 3': <Bot className="w-4 h-4" />,
      '30 Days Access': <Clock className="w-4 h-4" />,
      'Instant Login': <Zap className="w-4 h-4" />,
      'Pro Creative Tools': <CheckCircle2 className="w-4 h-4" />,
      'Team Invites': <Star className="w-4 h-4" />,
      'Instant Access': <Zap className="w-4 h-4" />,
      'GPT-4 Access': <Bot className="w-4 h-4" />,
      'Priority Support': <Star className="w-4 h-4" />,
      'Advanced Features': <Zap className="w-4 h-4" />,
      'Ad-Free Music': <Music className="w-4 h-4" />,
      'Offline Downloads': <Download className="w-4 h-4" />,
      'High Quality Audio': <Headphones className="w-4 h-4" />,
      '4K Ultra HD': <Video className="w-4 h-4" />,
      'Multiple Screens': <Tv className="w-4 h-4" />,
      'Offline Viewing': <HardDrive className="w-4 h-4" />,
      'Exclusive Shows': <Theater className="w-4 h-4" />,
      'Premium Quality': <Sparkles className="w-4 h-4" />,
      'Multiple Languages': <Languages className="w-4 h-4" />
    };
    return iconMap[featureName] || <Star className="w-4 h-4" />;
  };

  return { getFeatureIcon };
}
