import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface DojoButtonLandingProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
  size?: 'sm' | 'default' | 'lg' | 'icon';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function DojoButtonLanding({
  children,
  variant = 'default',
  size = 'default',
  className,
  onClick,
  disabled = false,
  type = 'button',
  ...props
}: DojoButtonLandingProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        'transition-colors duration-300',
        'hover:border-primary',
        'bg-primary/10 hover:bg-primary/20 text-primary',
        'border-primary/20 hover:border-primary/30',
        'focus:ring-2 focus:ring-primary focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </Button>
  );
}

// Specific button variants for landing page
export function HeroButtonLanding({ children, ...props }: DojoButtonLandingProps) {
  return (
    <DojoButtonLanding
      size="lg"
      className="text-lg px-8 py-4 bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 hover:border-primary/30"
      {...props}
    >
      {children}
    </DojoButtonLanding>
  );
}

export function CTAButtonLanding({ children, ...props }: DojoButtonLandingProps) {
  return (
    <DojoButtonLanding
      className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 hover:border-primary/30"
      {...props}
    >
      {children}
    </DojoButtonLanding>
  );
}

export function ProductButtonLanding({ children, ...props }: DojoButtonLandingProps) {
  return (
    <DojoButtonLanding
      className="w-full bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 hover:border-primary/30 font-semibold"
      {...props}
    >
      {children}
    </DojoButtonLanding>
  );
}

export function AuthButtonLanding({ children, ...props }: DojoButtonLandingProps) {
  return (
    <DojoButtonLanding
      className="bg-muted hover:bg-muted/80 text-muted-foreground border-border hover:border-border/80"
      {...props}
    >
      {children}
    </DojoButtonLanding>
  );
} 