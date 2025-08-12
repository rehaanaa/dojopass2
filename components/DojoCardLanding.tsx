import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface DojoCardLandingProps {
  children: React.ReactNode;
  className?: string;
}

export function DojoCardLanding({ children, className }: DojoCardLandingProps) {
  return (
    <Card className={cn(
      'bg-card border border-border',
      'transition-colors transition-transform duration-300',
      'hover:border-primary',
      'cursor-pointer',
      className
    )}>
      {children}
    </Card>
  );
}

// Specific card variants for landing page
export function ProductCardLanding({ children, className, ...props }: DojoCardLandingProps & { onClick?: () => void }) {
  return (
    <DojoCardLanding
      className={cn(
        'bg-card rounded-xl shadow-lg',
        'border border-border p-6',
        'group cursor-pointer transition-colors duration-300',
        'hover:border-primary hover:shadow-xl',
        className
      )}
      {...props}
    >
      {children}
    </DojoCardLanding>
  );
}

export function FeatureCardLanding({ children, className }: DojoCardLandingProps) {
  return (
    <DojoCardLanding
      className={cn(
        'bg-primary/5 rounded-lg p-6',
        'border border-primary/20',
        'text-center',
        'hover:border-primary/30',
        className
      )}
    >
      {children}
    </DojoCardLanding>
  );
}

export function CategoryCardLanding({ children, className, color }: DojoCardLandingProps & { color?: string }) {
  return (
    <DojoCardLanding
      className={cn(
        'rounded-2xl p-6 text-center',
        'bg-gradient-to-br from-primary/5 to-primary/10',
        'border border-primary/20',
        'group cursor-pointer transition-colors duration-300',
        'hover:border-primary/30',
        color,
        className
      )}
    >
      {children}
    </DojoCardLanding>
  );
}

export function TestimonialCardLanding({ children, className }: DojoCardLandingProps) {
  return (
    <DojoCardLanding
      className={cn(
        'bg-primary/5 rounded-lg p-6',
        'border border-primary/20',
        'text-center',
        'hover:border-primary/30',
        className
      )}
    >
      {children}
    </DojoCardLanding>
  );
} 