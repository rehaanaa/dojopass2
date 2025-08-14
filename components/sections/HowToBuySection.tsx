'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, CreditCard, ShoppingCart } from 'lucide-react';
import { useAuth } from '@/contexts/auth/AuthContextMain';

export default function HowToBuySection() {
  const { signInWithGoogle, user } = useAuth();

  const steps = [
    {
      icon: <Monitor className="w-8 h-8 text-green-600 dark:text-green-400" />,
      title: "Choose Platform",
      description: "Browse through our curated selection of digital platforms and services to find what you need."
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Choose Pass",
      description: "Select the specific pass or subscription plan that best fits your requirements and budget."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
      title: "Do Payment",
      description: "Complete your purchase securely with UPI payments and get instant delivery via email or WhatsApp."
    }
  ];

  const handleStartShopping = () => {
    if (user) {
      // If user is already signed in, redirect to pass page
      window.location.href = '/pass';
    } else {
      // If user is not signed in, trigger Google sign-in
      signInWithGoogle();
    }
  };

  return (
    <section id="how-to-buy" className="py-12 bg-background transition-colors duration-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-foreground mb-2">How to Buy?</h2>
          <p className="text-sm text-muted-foreground">Follow these simple steps to get your digital passes instantly</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-full">
                  {step.icon}
                </div>
                <div className="mb-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-xs font-bold rounded-full">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <motion.button
            onClick={handleStartShopping}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200 cursor-pointer"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {user ? 'Go to Passes' : 'Start Shopping Now'}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
