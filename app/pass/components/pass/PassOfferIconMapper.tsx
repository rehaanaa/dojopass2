'use client';

import React from 'react';
import { Gift, Star, Tag, Zap, Crown, CheckCircle2, Clock, Shield, Users, Cloud, Smartphone, Music, Video, Gamepad2, Bot, Palette, IndianRupee, Package, TrendingUp, Heart, Award, Sparkles, Calendar, Globe, Lock, Unlock, Target, Trophy, Zap as Lightning, Plus } from 'lucide-react';

export default function PassOfferIconMapper() {
  // Get icon component for offers
  const getOfferIcon = (iconName: string) => {
    console.log('🔍 Getting offer icon for:', iconName);
    
    const iconMap: { [key: string]: React.ReactNode } = {
      // Basic icons
      'gift': <Gift className="w-3 h-3" />,
      'star': <Star className="w-3 h-3" />,
      'tag': <Tag className="w-3 h-3" />,
      'fire': <Zap className="w-3 h-3" />,
      'crown': <Crown className="w-3 h-3" />,
      'check': <CheckCircle2 className="w-3 h-3" />,
      'clock': <Clock className="w-3 h-3" />,
      'shield': <Shield className="w-3 h-3" />,
      'users': <Users className="w-3 h-3" />,
      'cloud': <Cloud className="w-3 h-3" />,
      'mobile': <Smartphone className="w-3 h-3" />,
      'music': <Music className="w-3 h-3" />,
      'video': <Video className="w-3 h-3" />,
      'game': <Gamepad2 className="w-3 h-3" />,
      'ai': <Bot className="w-3 h-3" />,
      'design': <Palette className="w-3 h-3" />,
      'indian-rupee': <IndianRupee className="w-3 h-3" />,
      'tv': <Video className="w-3 h-3" />,
      'smartphone': <Smartphone className="w-3 h-3" />,
      'theater': <Video className="w-3 h-3" />,
      'headphones': <Music className="w-3 h-3" />,
      'castle': <Crown className="w-3 h-3" />,
      'target': <Target className="w-3 h-3" />,
      'trophy': <Trophy className="w-3 h-3" />,
      'lightning': <Lightning className="w-3 h-3" />,
      
      // Additional offer-specific icons
      'package': <Package className="w-3 h-3" />,
      'trending': <TrendingUp className="w-3 h-3" />,
      'heart': <Heart className="w-3 h-3" />,
      'award': <Award className="w-3 h-3" />,
      'sparkles': <Sparkles className="w-3 h-3" />,
      'calendar': <Calendar className="w-3 h-3" />,
      'globe': <Globe className="w-3 h-3" />,
      'lock': <Lock className="w-3 h-3" />,
      'unlock': <Unlock className="w-3 h-3" />,
      
      // Discount and money related
      'discount': <Tag className="w-3 h-3" />,
      'sale': <Tag className="w-3 h-3" />,
      'off': <Tag className="w-3 h-3" />,
      'save': <Tag className="w-3 h-3" />,
      'price': <IndianRupee className="w-3 h-3" />,
      'cost': <IndianRupee className="w-3 h-3" />,
      
      // Time and availability
      'limited': <Clock className="w-3 h-3" />,
      'expiry': <Clock className="w-3 h-3" />,
      'duration': <Clock className="w-3 h-3" />,
      'trial': <Clock className="w-3 h-3" />,
      
      // Quality and features
      'premium': <Crown className="w-3 h-3" />,
      'pro': <Crown className="w-3 h-3" />,
      'quality': <Star className="w-3 h-3" />,
      'feature': <CheckCircle2 className="w-3 h-3" />,
      
      // Special offers
      'bonus': <Gift className="w-3 h-3" />,
      'free': <Gift className="w-3 h-3" />,
      'extra': <Plus className="w-3 h-3" />,
      'bundle': <Package className="w-3 h-3" />,
      'pack': <Package className="w-3 h-3" />,
      
      // User types
      'student': <Users className="w-3 h-3" />,
      'academic': <Users className="w-3 h-3" />,
      'family': <Users className="w-3 h-3" />,
      'team': <Users className="w-3 h-3" />,
      'business': <Users className="w-3 h-3" />,
      'enterprise': <Users className="w-3 h-3" />,
      
      // Platform specific
      'netflix': <Video className="w-3 h-3" />,
      'spotify': <Music className="w-3 h-3" />,
      'youtube': <Video className="w-3 h-3" />,
      'amazon': <Package className="w-3 h-3" />,
      'steam': <Gamepad2 className="w-3 h-3" />,
      'xbox': <Gamepad2 className="w-3 h-3" />,
      'playstation': <Gamepad2 className="w-3 h-3" />,
      'canva': <Palette className="w-3 h-3" />,
      'figma': <Palette className="w-3 h-3" />,
      'adobe': <Palette className="w-3 h-3" />,
      'chatgpt': <Bot className="w-3 h-3" />,
      'claude': <Bot className="w-3 h-3" />,
      'gemini': <Bot className="w-3 h-3" />
    };
    
    const icon = iconMap[iconName?.toLowerCase()] || <Star className="w-3 h-3" />;
    console.log('🔍 Returning icon for', iconName, ':', icon);
    return icon;
  };

  return { getOfferIcon };
}
