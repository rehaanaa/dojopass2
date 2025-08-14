'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title = "Ready to Get Started?",
  subtitle = "Join thousands of users who trust DojoPass for their digital pass needs",
  buttonText = "Start Shopping Now"
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    // Simulate action
    setTimeout(() => {
      setIsLoading(false);
      // Add your navigation logic here
      console.log('CTA button clicked');
    }, 2000);
  };

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-primary-foreground mb-4">
          {title}
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8">
          {subtitle}
        </p>
        <Button 
          variant="secondary" 
          size="lg" 
          className="bg-background text-primary hover:bg-muted transition-colors duration-300 hover:border-primary"
          onClick={handleClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-primary"></div>
              Loading...
            </div>
          ) : (
            buttonText
          )}
        </Button>
      </div>
    </section>
  );
};

export default CTASection; 