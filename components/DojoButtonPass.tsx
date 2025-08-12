import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface DojoButtonPassProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
  size?: 'sm' | 'default' | 'lg' | 'icon';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function DojoButtonPass({
  children,
  variant = 'default',
  size = 'default',
  className,
  onClick,
  disabled = false,
  type = 'button',
  ...props
}: DojoButtonPassProps) {
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

// Specific button variants for pass page
export function PassActionButton({ children, ...props }: DojoButtonPassProps) {
  return (
    <DojoButtonPass
      className="bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200 hover:border-blue-300 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800 dark:hover:border-blue-700"
      {...props}
    >
      {children}
    </DojoButtonPass>
  );
}

export function PassViewButton({ children, ...props }: DojoButtonPassProps) {
  return (
    <DojoButtonPass
      variant="outline"
      className="border-border hover:border-border/80 text-muted-foreground hover:text-foreground bg-muted hover:bg-muted/80"
      {...props}
    >
      {children}
    </DojoButtonPass>
  );
}

export function PassDeleteButton({ children, ...props }: DojoButtonPassProps) {
  return (
    <DojoButtonPass
      variant="destructive"
      className="bg-red-50 hover:bg-red-100 text-red-700 border-red-200 hover:border-red-300 dark:bg-red-900/20 dark:hover:bg-red-900/30 dark:text-red-400 dark:border-red-800 dark:hover:border-red-700"
      {...props}
    >
      {children}
    </DojoButtonPass>
  );
}

export function PassQRButton({ children, ...props }: DojoButtonPassProps) {
  return (
    <DojoButtonPass
      className="bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-200 hover:border-purple-300 dark:bg-purple-900/20 dark:hover:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800 dark:hover:border-purple-700"
      {...props}
    >
      {children}
    </DojoButtonPass>
  );
} 