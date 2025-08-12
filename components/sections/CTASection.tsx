'use client';

import React from 'react';
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
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-primary-foreground mb-4">
          {title}
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8">
          {subtitle}
        </p>
        <Button variant="secondary" size="lg" className="bg-background text-primary hover:bg-muted transition-colors duration-300 hover:border-primary">
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default CTASection; 