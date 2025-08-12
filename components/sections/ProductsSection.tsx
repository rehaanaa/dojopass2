'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Product {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
}

interface ProductsSectionProps {
  products?: Product[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ 
  products = [
    {
      name: "ChatGPT Plus",
      price: 199,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 1247
    },
    {
      name: "Canva Pro",
      price: 149,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 892
    },
    {
      name: "Netflix Premium",
      price: 199,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 2156
    },
    {
      name: "Xbox Game Pass",
      price: 499,
      originalPrice: 699,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 567
    }
  ]
}) => {
  return (
    <section id="products" className="py-20 bg-background transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Products</h2>
          <p className="text-xl text-muted-foreground">Most popular digital passes and subscriptions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group cursor-pointer hover:shadow-lg transition-all duration-200"
            >
              <div className="relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                {product.originalPrice && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">{product.name}</h3>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-muted-foreground line-through ml-2">₹{product.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="text-sm text-muted-foreground">{product.rating}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">({product.reviews} reviews)</p>
              <Button className="w-full transition-colors duration-300 hover:border-primary">Add to Cart</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection; 