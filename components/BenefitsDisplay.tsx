'use client';

interface BenefitsDisplayProps {
  benefits: string[];
  className?: string;
  maxBenefits?: number;
  showAll?: boolean;
}

export default function BenefitsDisplay({ 
  benefits, 
  className = '', 
  maxBenefits = 3,
  showAll = false 
}: BenefitsDisplayProps) {
  if (!benefits || benefits.length === 0) {
    return null;
  }

  const displayBenefits = showAll ? benefits : benefits.slice(0, maxBenefits);
  const hasMore = !showAll && benefits.length > maxBenefits;

  return (
    <div className={`space-y-1 ${className}`}>
      <ul className="space-y-1">
        {displayBenefits.map((benefit, index) => (
          <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
            <span className="text-primary mt-0.5">•</span>
            <span className="flex-1">{benefit}</span>
          </li>
        ))}
      </ul>
      
      {hasMore && (
        <div className="text-xs text-muted-foreground text-center pt-1">
          +{benefits.length - maxBenefits} more benefits
        </div>
      )}
    </div>
  );
}
