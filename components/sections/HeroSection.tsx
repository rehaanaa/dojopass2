'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, TrendingUp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth/AuthContextMain';

interface HeroSlide {
  title: string;
  subtitle: string;
  image: string;
}

interface HeroSectionProps {
  slides?: HeroSlide[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  slides = [
    {
      title: "India's Fastest Digital Pass Store",
      subtitle: "Buy ChatGPT Plus, Spotify Premium, Domains & more",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
    },
    {
      title: "Instant Delivery",
      subtitle: "Get your digital passes instantly via email or WhatsApp",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
    },
    {
      title: "Trusted by 10K+ Users",
      subtitle: "India's fastest digital pass delivery platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d3?w=800&h=600&fit=crop"
    }
  ]
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { signInWithGoogle, user } = useAuth();

  useEffect(() => {
    // Remove setInterval to prevent timeout errors
    // Slides will remain static instead of auto-rotating
    // This prevents console errors and improves performance
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden bg-background transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              India's Fastest
              <span className="text-green-600 dark:text-green-400 block">Digital Pass Store</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-200 mb-8">
              Buy ChatGPT Plus, Spotify Premium, Domains, Netflix & more with instant UPI payments. 
              India's fastest digital pass delivery platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {user ? (
                <Button 
                  size="sm" 
                  className="text-base px-6 py-2 bg-green-600 text-white hover:bg-green-700 dark:bg-green-600 dark:text-white dark:hover:bg-green-700"
                  onClick={() => window.location.href = '/'}
                >
                  Go to Passes
                </Button>
              ) : (
                <Button 
                  size="sm" 
                  className="text-base px-6 py-2 bg-green-600 text-white hover:bg-green-700 dark:bg-green-600 dark:text-white dark:hover:bg-green-700"
                  onClick={signInWithGoogle}
                >
                  Sign in with Google
                </Button>
              )}
            </div>
            <div className="flex items-center mt-8 space-x-6">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                <span className="text-sm text-gray-700 dark:text-gray-300">10K+ Users</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                <span className="text-sm text-gray-700 dark:text-gray-300">50K+ Sales</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="text-sm text-gray-700 dark:text-gray-300">4.8 Rating</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={slides[currentSlide].image}
                alt="Hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{slides[currentSlide].title}</h3>
                <p className="text-lg opacity-90">{slides[currentSlide].subtitle}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 