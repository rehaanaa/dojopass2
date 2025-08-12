'use client';

import { Feature } from '@/lib/types';

interface FeaturesDisplayProps {
  features: Feature[];
  className?: string;
  maxFeatures?: number;
  showAll?: boolean;
}

export default function FeaturesDisplay({ 
  features, 
  className = '', 
  maxFeatures = 4,
  showAll = false 
}: FeaturesDisplayProps) {
  if (!features || features.length === 0) {
    return null;
  }

  const displayFeatures = showAll ? features : features.slice(0, maxFeatures);
  const hasMore = !showAll && features.length > maxFeatures;

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="grid grid-cols-2 gap-2">
        {displayFeatures.map((feature, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-2 text-sm text-muted-foreground"
          >
            <span className="text-lg">{feature.icon}</span>
            <span className="truncate">{feature.text}</span>
          </div>
        ))}
      </div>
      
      {hasMore && (
        <div className="text-xs text-muted-foreground text-center">
          +{features.length - maxFeatures} more features
        </div>
      )}
    </div>
  );
}
