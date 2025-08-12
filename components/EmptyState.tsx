'use client';

import React from 'react';
import { Ticket, AlertCircle } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onRetry: () => void;
  section?: 'platforms' | 'passes' | 'user-passes' | 'settings' | 'database' | 'payment';
}

const EmptyState: React.FC<EmptyStateProps> = ({ 
  title, 
  description, 
  buttonText, 
  onRetry, 
  section 
}) => {
  // Generate section-specific messages if section is provided
  const getSectionMessages = () => {
    switch (section) {
      case 'platforms':
        return {
          title: 'No Platforms',
          description: 'No platforms available.',
          buttonText: 'Retry'
        };
      case 'passes':
        return {
          title: 'No Passes',
          description: 'No passes found for this platform.',
          buttonText: 'Retry'
        };
      case 'user-passes':
        return {
          title: 'No Passes Yet',
          description: 'You haven\'t purchased any passes.',
          buttonText: 'Browse Platforms'
        };
      case 'settings':
        return {
          title: 'No Settings',
          description: 'Settings not available.',
          buttonText: 'Retry'
        };
      case 'database':
        return {
          title: 'Database Error',
          description: 'Unable to connect to database.',
          buttonText: 'Retry'
        };
      case 'payment':
        return {
          title: 'Payment Error',
          description: 'Payment processing failed.',
          buttonText: 'Try Again'
        };
      default:
        return {
          title: title || 'No Data',
          description: description || 'No data available.',
          buttonText: buttonText || 'Retry'
        };
    }
  };

  const messages = getSectionMessages();

  return (
    <div className="text-center py-8">
      <div className="text-primary mb-4">
        <Ticket className="w-12 h-12 mx-auto" />
      </div>
      <div className="flex items-center justify-center mb-3">
        <AlertCircle className="w-4 h-4 text-primary mr-2" />
        <h3 className="text-base font-semibold text-foreground">{messages.title}</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{messages.description}</p>
      <button 
        onClick={onRetry}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center mx-auto text-sm"
      >
        <Ticket className="w-4 h-4 mr-2" />
        {messages.buttonText}
      </button>
    </div>
  );
};

export default EmptyState; 