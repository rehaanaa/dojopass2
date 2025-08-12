'use client';

import React from 'react';
import { DojoCardPass } from '@/components/DojoCardPass';
import { Star, CheckCircle } from 'lucide-react';

interface LandingCardProps {
  product: {
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviews: number;
    features?: string[];
  };
}

const LandingCard: React.FC<LandingCardProps> = ({ product }) => {
  return (
    <div className="cursor-pointer transition-all duration-300 hover:shadow-lg">
      <DojoCardPass className="p-4 flex flex-col justify-between h-full hover:shadow-xl transition-all duration-300 border-0">
        <div>
          {/* Header with Image and Badge */}
          <div className="relative mb-3">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover rounded-lg"
            />
            {product.originalPrice && (
              <span className="absolute top-2 right-2 px-2 py-1 text-xs font-medium bg-red-500 text-white rounded-full">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </span>
            )}
          </div>
          
          {/* Title */}
          <h3 className="text-base font-semibold text-card-foreground mb-2">
            {product.name}
          </h3>
          
          {/* Price and Rating */}
          <div className="mb-3">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-primary">
                ₹{product.price}
              </span>
              <div className="flex items-center">
                <Star className="w-3 h-3 text-yellow-500 mr-1" />
                <span className="text-xs text-muted-foreground">{product.rating}</span>
              </div>
            </div>
            {product.originalPrice && (
              <span className="text-muted-foreground line-through text-sm">₹{product.originalPrice}</span>
            )}
          </div>
          
          {/* Reviews */}
          <div className="mb-3">
            <p className="text-xs text-muted-foreground">
              ({product.reviews} reviews)
            </p>
          </div>
          
          {/* Features */}
          {product.features && product.features.length > 0 && (
            <div className="mb-3">
              <div className="flex items-center mb-2">
                <Star className="w-3 h-3 mr-1 text-yellow-500" />
                <span className="text-xs font-medium text-muted-foreground">Features</span>
              </div>
              <ul className="space-y-1 text-xs text-muted-foreground">
                {product.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-primary mr-1 flex-shrink-0">
                      <CheckCircle className="w-3 h-3" />
                    </span>
                    <span className="ml-1">{feature}</span>
                  </li>
                ))}
                {product.features.length > 3 && (
                  <li className="text-xs text-muted-foreground">
                    +{product.features.length - 3} more features
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="mt-3 text-right text-xs text-muted-foreground">
          Popular Choice
        </div>
      </DojoCardPass>
    </div>
  );
};

export default LandingCard; 