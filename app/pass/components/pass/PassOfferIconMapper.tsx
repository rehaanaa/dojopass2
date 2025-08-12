'use client';

import React from 'react';
import { Gift, Star, Tag, Zap, Crown, CheckCircle2, Clock, Shield, Users, Cloud, Smartphone, Music, Video, Gamepad2, Bot, Palette } from 'lucide-react';

export default function PassOfferIconMapper() {
  // Get icon component for offers
  const getOfferIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'gift': <Gift className="w-3 h-3" />,
      'star': <Star className="w-3 h-3" />,
      'discount': <Tag className="w-3 h-3" />,
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
      'design': <Palette className="w-3 h-3" />
    };
    
    return iconMap[iconName?.toLowerCase()] || <Star className="w-3 h-3" />;
  };

  return { getOfferIcon };
}
