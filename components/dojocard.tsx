'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface DojoCardProps {
  title?: string;
  description?: string;
  image?: string;
  badge?: string;
  badgeColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outlined' | 'gradient';
  footer?: React.ReactNode;
  onClick?: () => void;
  showActionButton?: boolean;
  actionText?: string;
  onActionClick?: () => void;
}

const DojoCard: React.FC<DojoCardProps> = ({
  title = 'Card Title',
  description = 'Card description goes here',
  image,
  badge,
  badgeColor = 'primary',
  size = 'md',
  variant = 'default',
  footer,
  onClick,
  showActionButton = false,
  actionText = 'Action',
  onActionClick
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'outlined':
        return 'border-2 border-border bg-transparent';
      case 'gradient':
        return 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground';
      default:
        return 'bg-card border border-border';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'p-4';
      case 'lg':
        return 'p-8';
      default:
        return 'p-6';
    }
  };

  const getBadgeColorClasses = () => {
    switch (badgeColor) {
      case 'secondary':
        return 'bg-muted text-muted-foreground';
      case 'success':
        return 'bg-primary text-primary-foreground';
      case 'warning':
        return 'bg-yellow-500 text-black';
      case 'danger':
        return 'bg-red-500 text-white';
      default:
        return 'bg-primary text-primary-foreground';
    }
  };

  const isGradient = variant === 'gradient';

  return (
    <Card
      onClick={onClick}
      className={`
        ${getVariantClasses()}
        ${getSizeClasses()}
        rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer
        ${onClick ? 'hover:scale-105' : ''}
      `}
    >
      {/* Badge */}
      {badge && (
        <div className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mb-3 ${getBadgeColorClasses()}`}>
          {badge}
        </div>
      )}

      {/* Image */}
      {image && (
        <div className="mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      )}

      {/* Header */}
      <CardHeader className="p-0">
        <CardTitle className={`text-xl font-semibold mb-2 ${isGradient ? 'text-primary-foreground' : 'text-card-foreground'}`}>
          {title}
        </CardTitle>
        <CardDescription className={`${isGradient ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
          {description}
        </CardDescription>
      </CardHeader>

      {/* Content */}
      <CardContent className="p-0 mt-4">
        {/* Add any additional content here */}
      </CardContent>

      {/* Action Button */}
      {showActionButton && (
        <div className="mt-4">
          <Button
            onClick={onActionClick}
            className="w-full transition-colors duration-300 hover:border-primary"
            variant={isGradient ? 'secondary' : 'default'}
          >
            {actionText}
          </Button>
        </div>
      )}

      {/* Footer */}
      {footer && (
        <CardFooter className="p-0 mt-6 pt-4 border-t border-border">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};

export default DojoCard; 