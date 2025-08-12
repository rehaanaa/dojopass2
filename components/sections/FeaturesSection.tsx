'use client';

import React from 'react';
import { TrendingUp, Shield, Users, CheckCircle } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      title: "Instant Delivery",
      description: "Get your digital passes instantly via email or WhatsApp",
      icon: <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
    },
    {
      title: "Secure Payments",
      description: "UPI, cards, and net banking with bank-grade security",
      icon: <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support via WhatsApp and email",
      icon: <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
    },
    {
      title: "Trusted Platform",
      description: "Used by 10,000+ customers with 4.8/5 rating",
      icon: <CheckCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
    }
  ];

  return (
    <section className="py-16 bg-background transition-colors duration-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">Why Choose DojoPass?</h2>
          <p className="text-lg text-muted-foreground">We make buying digital passes simple and secure</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center"
            >
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 