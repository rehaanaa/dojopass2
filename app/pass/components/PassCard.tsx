'use client';

import React from 'react';
import PassCardMain from './pass/PassCardMain';

interface PassCardProps {
  pass: any;
  onClick: (pass: any) => void;
}

const PassCard: React.FC<PassCardProps> = ({ pass, onClick }) => {
  return <PassCardMain pass={pass} onClick={onClick} />;
};

export default PassCard; 