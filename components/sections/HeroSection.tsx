'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Star, Ticket } from 'lucide-react';
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
      image: "/hero1.jpg"
    },
    {
      title: "Premium Digital Services",
      subtitle: "ChatGPT Plus, Perplexity Pro, Canva Pro & more",
      image: "/hero2.jpeg"
    },
    {
      title: "Entertainment & Gaming",
      subtitle: "Netflix, Spotify Premium, Xbox Game Pass & more",
      image: "/hero3.jpeg"
    }
  ]
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const { signInWithGoogle, user } = useAuth();

  useEffect(() => {
    // Auto-slide every 3 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
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
                  className="text-base px-6 py-2 bg-green-600 text-white hover:bg-green-700 dark:bg-green-600 dark:text-white dark:hover:bg-green-700"
                  onClick={() => {
                    setIsNavigating(true);
                    window.location.href = '/pass';
                  }}
                  disabled={isNavigating}
                >
                  {isNavigating ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white"></div>
                      Navigating...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Ticket className="w-4 h-4" />
                      Go to Passes
                    </div>
                  )}
                </Button>
              ) : (
                <Button 
                  className="text-sm px-4 py-1.5 bg-green-600 text-white hover:bg-green-700 dark:bg-green-600 dark:text-white dark:hover:bg-green-700 h-8 flex items-center gap-2"
                  onClick={async () => {
                    setIsSigningIn(true);
                    try {
                      await signInWithGoogle();
                    } finally {
                      setIsSigningIn(false);
                    }
                  }}
                  disabled={isSigningIn}
                >
                  {isSigningIn ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white"></div>
                      Signing in...
                    </div>
                  ) : (
                    <>
                      <svg className="w-4 h-4" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                        <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/>
                        <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/>
                        <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/>
                        <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/>
                      </svg>
                      Sign in with Google
                    </>
                  )}
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
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={slides[currentSlide].image}
                alt="Hero"
                className="w-full h-full object-cover transition-all duration-500"
                onError={(e) => {
                  console.error('Image failed to load:', slides[currentSlide].image);
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-1">{slides[currentSlide].title}</h3>
                <p className="text-base opacity-90">{slides[currentSlide].subtitle}</p>
              </div>
              
              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                <motion.div
                  className="h-full bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Slide Indicators */}
              <div className="absolute bottom-3 right-4 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 