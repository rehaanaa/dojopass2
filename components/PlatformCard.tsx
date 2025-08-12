'use client';

import React from 'react';
import PlatformCardMain from './platform/PlatformCardMain';

interface PlatformCardProps {
  platform: any;
  onClick: (platform: any) => void;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ platform, onClick }) => {
  return <PlatformCardMain platform={platform} onClick={onClick} />;
};

export default PlatformCard; 