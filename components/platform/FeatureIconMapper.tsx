'use client';

import React from 'react';
import { Monitor, Tag, Star, Gamepad2, Zap, CheckCircle, CheckCircle2, Bot, Clock, Globe, Package, Crown, Music, Download, Headphones, Video, Tv, HardDrive, Theater, Sparkles, Languages, Target, CheckSquare, Shield, Users, Cloud, Gift, Smartphone, RotateCcw, Heart, TrendingUp, ArrowRight, Lock, CreditCard } from 'lucide-react';

export default function FeatureIconMapper() {
  // Helper function to get icon component based on feature name
  const getFeatureIcon = (featureName: string) => {
    console.log('🔍 Platform FeatureIconMapper - getting icon for:', featureName);
    
    const iconMap: { [key: string]: React.ReactNode } = {
      // Game features
      'PlayStation, Steam, Xbox': <Gamepad2 className="w-4 h-4" />,
      'Access to 100+ Games': <Gamepad2 className="w-4 h-4" />,
      'Cloud Gaming': <Cloud className="w-4 h-4" />,
      'Instant Play': <Zap className="w-4 h-4" />,
      'Multiplayer Support': <Users className="w-4 h-4" />,
      'Steam Platform': <Gamepad2 className="w-4 h-4" />,
      
      // AI features
      'ChatGPT Pro, Claude 3': <Bot className="w-4 h-4" />,
      'GPT-5 Access': <Bot className="w-4 h-4" />,
      'AI Image Generation': <Sparkles className="w-4 h-4" />,
      'Fast Processing': <Zap className="w-4 h-4" />,
      'Priority Access': <Crown className="w-4 h-4" />,
      'Claude 3 Access': <Bot className="w-4 h-4" />,
      'Superior Reasoning': <Target className="w-4 h-4" />,
      'Analysis Tools': <CheckSquare className="w-4 h-4" />,
      
      // Design features
      'Pro Creative Tools': <CheckCircle2 className="w-4 h-4" />,
      'Pro Design Tools': <CheckCircle2 className="w-4 h-4" />,
      'Premium Templates': <Star className="w-4 h-4" />,
      'Team Collaboration': <Users className="w-4 h-4" />,
      'Team Invites': <Star className="w-4 h-4" />,
      'Advanced Tools': <Package className="w-4 h-4" />,
      'Cloud Storage': <Cloud className="w-4 h-4" />,
      'Unlimite Asset Downloads': <Download className="w-4 h-4" />,
      
      // Streaming features
      '4K Ultra HD': <Video className="w-4 h-4" />,
      'HD/4K Streaming': <Video className="w-4 h-4" />,
      'Multiple Screens': <Tv className="w-4 h-4" />,
      'Multi Device Access': <Smartphone className="w-4 h-4" />,
      'Offline Viewing': <HardDrive className="w-4 h-4" />,
      'Ad-Free': <CheckCircle className="w-4 h-4" />,
      'No Ads': <CheckCircle className="w-4 h-4" />,
      'Exclusive Content': <Star className="w-4 h-4" />,
      'Premium Content': <Star className="w-4 h-4" />,
      'Live Events': <Theater className="w-4 h-4" />,
      'HD Quality': <Video className="w-4 h-4" />,
      
      // Gift features
      'Instant code delivery': <Zap className="w-4 h-4" />,
      'Instant Delivery': <Zap className="w-4 h-4" />,
      'Multiple currency options': <Globe className="w-4 h-4" />,
      'Multiple Payment Options': <CreditCard className="w-4 h-4" />,
      'Wide range: Amazon, Flipkart, Google Play': <Package className="w-4 h-4" />,
      'International Support': <Globe className="w-4 h-4" />,
      'Perfect for Any Occasion': <Gift className="w-4 h-4" />,
      'Multiple Denominations': <Package className="w-4 h-4" />,
      'Amazon Wide': <Gift className="w-4 h-4" />,
      
      // General features
      'Instant Code': <Zap className="w-4 h-4" />,
      '100% Valid': <CheckCircle2 className="w-4 h-4" />,
      '30 Days Access': <Clock className="w-4 h-4" />,
      'Instant Login': <Zap className="w-4 h-4" />,
      'Instant Access': <Zap className="w-4 h-4" />,
      'Advanced Features': <Zap className="w-4 h-4" />,
      'No Expiry': <Shield className="w-4 h-4" />,
      'Unlimited Access': <CheckCircle2 className="w-4 h-4" />,
      'Premium Support': <Crown className="w-4 h-4" />,
      '24/7 Support': <Clock className="w-4 h-4" />,
      'Secure Access': <Shield className="w-4 h-4" />,
      'Mobile App': <Smartphone className="w-4 h-4" />,
      'Family Sharing': <Users className="w-4 h-4" />,
      'Auto Renewal': <RotateCcw className="w-4 h-4" />,
      'Gift Cards': <Gift className="w-4 h-4" />,
      'Loyalty Points': <Heart className="w-4 h-4" />,
      'Trending Content': <TrendingUp className="w-4 h-4" />,
      'Unlimited Skips': <ArrowRight className="w-4 h-4" />,
      'Cross Platform': <Globe className="w-4 h-4" />,
      'Sync Library': <Cloud className="w-4 h-4" />,
      'Custom Playlists': <Music className="w-4 h-4" />,
      'Social Features': <Users className="w-4 h-4" />,
      'Parental Controls': <Lock className="w-4 h-4" />,
      
      // Music features
      'Ad-Free Music': <Music className="w-4 h-4" />,
      'Offline Downloads': <Download className="w-4 h-4" />,
      'High Quality Audio': <Headphones className="w-4 h-4" />,
      'Premium Quality': <Sparkles className="w-4 h-4" />,
      'Multiple Languages': <Languages className="w-4 h-4" />,
      'Exclusive Shows': <Theater className="w-4 h-4" />,
      
      // Platform-specific features from database
      '4 Screens': <Tv className="w-4 h-4" />,
      'Original Content': <Theater className="w-4 h-4" />,
      'Family Friendly': <Users className="w-4 h-4" />,
      '4K HDR': <Video className="w-4 h-4" />,
      'Multiple Profiles': <Users className="w-4 h-4" />,
      'Premium Games': <Gamepad2 className="w-4 h-4" />,
      'Achievements': <Crown className="w-4 h-4" />,
      'Multiplayer': <Users className="w-4 h-4" />
    };
    
    // Try exact match first
    if (iconMap[featureName]) {
      return iconMap[featureName];
    }
    
    // Try partial matches for better icon mapping
    const lowerFeature = featureName.toLowerCase();
    for (const [key, icon] of Object.entries(iconMap)) {
      if (lowerFeature.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerFeature)) {
        return icon;
      }
    }
    
    // Default fallback icon based on feature type
    if (lowerFeature.includes('game') || lowerFeature.includes('playstation') || lowerFeature.includes('steam') || lowerFeature.includes('xbox')) {
      return <Gamepad2 className="w-4 h-4" />;
    }
    if (lowerFeature.includes('ai') || lowerFeature.includes('chatgpt') || lowerFeature.includes('claude')) {
      return <Bot className="w-4 h-4" />;
    }
    if (lowerFeature.includes('design') || lowerFeature.includes('creative') || lowerFeature.includes('figma') || lowerFeature.includes('canva')) {
      return <CheckCircle2 className="w-4 h-4" />;
    }
    if (lowerFeature.includes('gift') || lowerFeature.includes('card') || lowerFeature.includes('amazon')) {
      return <Gift className="w-4 h-4" />;
    }
    if (lowerFeature.includes('music') || lowerFeature.includes('spotify') || lowerFeature.includes('audio')) {
      return <Music className="w-4 h-4" />;
    }
    if (lowerFeature.includes('video') || lowerFeature.includes('streaming') || lowerFeature.includes('netflix')) {
      return <Video className="w-4 h-4" />;
    }
    if (lowerFeature.includes('instant') || lowerFeature.includes('fast') || lowerFeature.includes('quick')) {
      return <Zap className="w-4 h-4" />;
    }
    if (lowerFeature.includes('support') || lowerFeature.includes('help') || lowerFeature.includes('24/7')) {
      return <Clock className="w-4 h-4" />;
    }
    if (lowerFeature.includes('security') || lowerFeature.includes('secure') || lowerFeature.includes('safe')) {
      return <Shield className="w-4 h-4" />;
    }
    if (lowerFeature.includes('team') || lowerFeature.includes('collaboration') || lowerFeature.includes('group')) {
      return <Users className="w-4 h-4" />;
    }
    if (lowerFeature.includes('cloud') || lowerFeature.includes('storage') || lowerFeature.includes('sync')) {
      return <Cloud className="w-4 h-4" />;
    }
    if (lowerFeature.includes('download') || lowerFeature.includes('offline') || lowerFeature.includes('local')) {
      return <Download className="w-4 h-4" />;
    }
    if (lowerFeature.includes('premium') || lowerFeature.includes('exclusive') || lowerFeature.includes('vip')) {
      return <Crown className="w-4 h-4" />;
    }
    
    // Final fallback - use Star icon for any unmatched features
    const fallbackIcon = <Star className="w-4 h-4" />;
    console.log('🔍 Platform FeatureIconMapper - using fallback icon for:', featureName);
    return fallbackIcon;
  };

  return { getFeatureIcon };
}
