'use client';

import React from 'react';
import { Clock, Monitor, Tag, Star, Gamepad2, Zap, CheckCircle2, Bot, Crown, Music, Download, Headphones, Video, Tv, HardDrive, Theater, Sparkles, Languages, Target, CheckSquare, Shield, Users, Cloud, Gift, Smartphone, RotateCcw, Heart, TrendingUp, ArrowRight, Lock, CheckCircle, Globe, Package, Palette, Search, Brain, Infinity as InfinityIcon } from 'lucide-react';

export default function PassFeatureIconMapper() {
  // Helper function to get icon component based on feature name
  const getFeatureIcon = (featureName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      // Gaming
      'PlayStation, Steam, Xbox': <Gamepad2 className="w-3 h-3" />,
      'Steam Platform': <Gamepad2 className="w-3 h-3" />,
      
      // Speed & Instant
      'Instant Code': <Zap className="w-3 h-3" />,
      'Instant code delivery': <Zap className="w-3 h-3" />,
      'Instant Login': <Zap className="w-3 h-3" />,
      'Instant Access': <Zap className="w-3 h-3" />,
      'Instant Delivery': <Zap className="w-3 h-3" />,
      'Faster Response Speed': <Zap className="w-3 h-3" />,
      
      // Validation & Quality
      '100% Valid': <CheckCircle2 className="w-3 h-3" />,
      'Pro Creative Tools': <CheckCircle2 className="w-3 h-3" />,
      'Advanced Features': <Zap className="w-3 h-3" />,
      'Premium Quality': <Sparkles className="w-3 h-3" />,
      'HD Quality': <Video className="w-3 h-3" />,
      '4K Ultra HD': <Video className="w-3 h-3" />,
      
      // AI & Technology
      'ChatGPT Pro, Claude 3': <Bot className="w-3 h-3" />,
      'GPT-4 Access': <Bot className="w-3 h-3" />,
      'Claude 3 Access': <Bot className="w-3 h-3" />,
      'Superior Reasoning': <Target className="w-3 h-3" />,
      'Analysis Tools': <CheckSquare className="w-3 h-3" />,
      'Advanced Tools': <Package className="w-3 h-3" />,
      'Advanced Search': <Search className="w-3 h-3" />,
      'Context Memory': <Brain className="w-3 h-3" />,
      'Unlimited Queries': <InfinityIcon className="w-3 h-3" />,
      
      // Support & Access
      'Priority Support': <Crown className="w-3 h-3" />,
      'Premium Support': <Crown className="w-3 h-3" />,
      '24/7 Support': <Clock className="w-3 h-3" />,
      '30 Days Access': <Clock className="w-3 h-3" />,
      'Unlimited Access': <CheckCircle2 className="w-3 h-3" />,
      'No Expiry': <Shield className="w-3 h-3" />,
      
      // Media & Entertainment
      'Ad-Free Music': <Music className="w-3 h-3" />,
      'Offline Downloads': <Download className="w-3 h-3" />,
      'High Quality Audio': <Headphones className="w-3 h-3" />,
      'Multiple Screens': <Tv className="w-3 h-3" />,
      'Offline Viewing': <HardDrive className="w-3 h-3" />,
      'Exclusive Shows': <Theater className="w-3 h-3" />,
      'Live Events': <Theater className="w-3 h-3" />,
      'No Ads': <CheckCircle className="w-3 h-3" />,
      'Unlimited Skips': <ArrowRight className="w-3 h-3" />,
      
      // Collaboration & Sharing
      'Team Invites': <Star className="w-3 h-3" />,
      'Team Collaboration': <Users className="w-3 h-3" />,
      'Family Sharing': <Users className="w-3 h-3" />,
      'Social Features': <Users className="w-3 h-3" />,
      
      // Platform & Currency
      'Multiple currency options': <Globe className="w-3 h-3" />,
      'Wide range: Amazon, Flipkart, Google Play': <Package className="w-3 h-3" />,
      'Cross Platform': <Globe className="w-3 h-3" />,
      'Multiple Denominations': <Package className="w-3 h-3" />,
      'Amazon Wide': <Gift className="w-3 h-3" />,
      
      // Security & Control
      'Secure Access': <Shield className="w-3 h-3" />,
      'Parental Controls': <Lock className="w-3 h-3" />,
      
      // Other Features
      'Multiple Languages': <Languages className="w-3 h-3" />,
      'Cloud Storage': <Cloud className="w-3 h-3" />,
      'Cloud Play': <Cloud className="w-3 h-3" />,
      'Mobile App': <Smartphone className="w-3 h-3" />,
      'Auto Renewal': <RotateCcw className="w-3 h-3" />,
      'Gift Cards': <Gift className="w-3 h-3" />,
      'Loyalty Points': <Heart className="w-3 h-3" />,
      'Trending Content': <TrendingUp className="w-3 h-3" />,
      'Premium Content': <Star className="w-3 h-3" />,
      'Sync Library': <Cloud className="w-3 h-3" />,
      'Custom Playlists': <Music className="w-3 h-3" />
    };
    return iconMap[featureName] || <Star className="w-3 h-3" />;
  };

  return { getFeatureIcon };
}
