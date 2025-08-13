'use client';

import React from 'react';
import { CheckCircle2, ChevronRight, Receipt, PartyPopper } from 'lucide-react';

// Helper function to safely format dates
const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'N/A';
    }
    return date.toLocaleDateString();
  } catch (error) {
    return 'N/A';
  }
};

// Custom Receipt Icon
const ReceiptIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/>
    <path d="M8 7h8"/>
    <path d="M12 17.5 8 15h1a4 4 0 0 0 0-8"/>
    <path d="M8 11h8"/>
  </svg>
);

// Custom Receipt Indian Rupee Icon
const ReceiptIndianRupeeIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/>
    <path d="M8 7h8"/>
    <path d="M12 17.5 8 15h1a4 4 0 0 0 0-8"/>
    <path d="M8 11h8"/>
  </svg>
);

interface UserPass {
  id: number;
  platform_id: number;
  name: string;
  description: string;
  price: number;
  payment_amount?: number;
  duration_days: number;
  image: string | null;
  features: any[];
  offers: any | null;
  completed?: boolean;
  created_at: string;
  updated_at: string;
}

interface AccountPassesSectionProps {
  loading: boolean;
  userPasses: UserPass[];
  selectedPass: UserPass | null;
  onPassSelect: (pass: UserPass | null) => void;
}

export default function AccountPassesSection({ 
  loading, 
  userPasses, 
  selectedPass, 
  onPassSelect 
}: AccountPassesSectionProps) {
  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
      </div>
    );
  }

  if (userPasses.length === 0) {
    return (
      <div className="text-center py-8">
        <ReceiptIndianRupeeIcon className="w-12 h-12 mx-auto text-primary mb-3" />
        <h3 className="text-base font-semibold text-foreground mb-2">No Passes Found</h3>
        <p className="text-muted-foreground text-sm mb-4">
          You haven't purchased any passes yet. Your purchased passes will appear here.
        </p>
      </div>
    );
  }

  if (selectedPass) {
    return (
      // Pass Details View
      <div className="space-y-4">
        <div className="text-center">
          <button
            onClick={() => onPassSelect(null)}
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground text-sm mx-auto"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            <span>Back to Passes</span>
          </button>
        </div>
        
        <div className="text-center">
          {/* Pass Icon */}
          <div className="flex items-center justify-center w-16 h-16 rounded-lg mx-auto mb-4 bg-green-100 dark:bg-green-900/20">
            <Receipt className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          
          {/* Pass Details */}
          <div className="mb-4">
            <div className="flex items-center justify-center mb-3">
              <h2 className="text-lg font-bold text-foreground">
                {selectedPass.name}
              </h2>
              {selectedPass.completed && (
                <div className="flex items-center text-xs text-primary bg-primary/20 px-2 py-1 rounded-full ml-2">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  <span>Completed</span>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">
                  Price Paid
                </label>
                <p className="text-lg font-bold text-primary">
                  ₹{selectedPass.price || selectedPass.payment_amount || 'N/A'}
                </p>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">
                  Status
                </label>
                <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  <span>Purchased</span>
                </div>
              </div>
            </div>
            
            <div className="text-xs text-muted-foreground space-y-1">
              <p>Receipt ID: {selectedPass.id}</p>
              <p>Purchase Date: {formatDate(selectedPass.created_at)}</p>
            </div>
            
            {/* Success Message */}
            <div className="mt-4 text-center">
              <div className="flex items-center justify-center space-x-2 text-primary">
                <PartyPopper className="w-4 h-4" />
                                 <span className="text-sm font-medium">Your Passes card code will be sent over email within 12hr. Thank you!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    // Simplified Passes List View - Show only Title, Price, and Status
    <div className="space-y-3">
      {userPasses.map((pass, index) => (
        <div
          key={`${pass.id}-${index}`}
          onClick={() => onPassSelect(pass)}
          className="cursor-pointer transition-colors duration-200 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 border border-transparent hover:border-primary/20"
        >
          <div className="flex items-center justify-between">
            {/* Left side - Receipt Icon and Pass Title */}
            <div className="flex items-center space-x-3 flex-1">
              {/* Receipt Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/20">
                <Receipt className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              
              {/* Pass Title and Details */}
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  {pass.name || 'Untitled Pass'}
                </h3>
                
                {/* Price and Status */}
                <div className="flex items-center space-x-4">
                  {/* Price */}
                  <span className="text-sm font-bold text-green-600 dark:text-green-400">
                    ₹{pass.price || pass.payment_amount || 'N/A'}
                  </span>
                  
                  {/* Status */}
                  <div className="flex items-center text-xs text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded-full">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    <span>Purchased</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Arrow */}
            <div className="flex-shrink-0 ml-3">
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
