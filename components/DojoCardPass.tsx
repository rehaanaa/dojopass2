import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface DojoCardPassProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'platform' | 'pass';
}

export const DojoCardPass: React.FC<DojoCardPassProps> = ({
  children,
  className,
  variant = 'default'
}) => {
  const baseClasses = 'bg-card border border-border text-card-foreground shadow-lg transition-colors duration-300 hover:border-primary';
  
  const variantClasses = {
    default: 'transition-colors duration-300 hover:shadow-xl',
    platform: 'transition-colors duration-300 hover:shadow-xl',
    pass: 'transition-colors duration-300 hover:shadow-xl'
  };

  return (
    <Card className={cn(
      baseClasses,
      variantClasses[variant],
      'cursor-pointer',
      className
    )}>
      {children}
    </Card>
  );
};

// Platform Card Variant
export const PlatformCard: React.FC<DojoCardPassProps> = ({ children, className }) => {
  return (
    <DojoCardPass variant="platform" className={className}>
      {children}
    </DojoCardPass>
  );
};

// Pass Card Variant
export const PassCard: React.FC<DojoCardPassProps> = ({ children, className }) => {
  return (
    <DojoCardPass variant="pass" className={className}>
      {children}
    </DojoCardPass>
  );
};

// Pass Detail Card
export const PassDetailCard: React.FC<DojoCardPassProps> = ({ children, className }) => {
  return (
    <Card className={cn(
      'bg-card border border-border text-card-foreground shadow-lg transition-colors duration-300 hover:border-primary',
      'hover:shadow-xl',
      'cursor-pointer',
      className
    )}>
      {children}
    </Card>
  );
};

// Pass QR Card
export const PassQRCard: React.FC<DojoCardPassProps> = ({ children, className }) => {
  return (
    <Card className={cn(
      'bg-card border border-border text-card-foreground shadow-lg transition-colors duration-300 hover:border-primary',
      'hover:shadow-xl',
      'cursor-pointer',
      className
    )}>
      {children}
    </Card>
  );
};

export function PassStatusCard({ status, children, className }: DojoCardPassProps & { status: 'active' | 'expired' | 'pending' }) {
  const statusColors = {
    active: 'border-green-500 bg-green-50 dark:bg-green-900/20 hover:border-green-400',
    expired: 'border-red-500 bg-red-50 dark:bg-red-900/20 hover:border-red-400',
    pending: 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 hover:border-yellow-400'
  };

  return (
    <DojoCardPass
      className={cn(
        'rounded-lg p-6',
        statusColors[status],
        className
      )}
    >
      {children}
    </DojoCardPass>
  );
} 