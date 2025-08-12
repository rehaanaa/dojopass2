'use client';

import React from 'react';
import { HelpCircle, Clock, Shield, CheckCircle } from 'lucide-react';

const HelpPage: React.FC = () => {
  const helpTopics = [
    {
      title: "How to Purchase",
      description: "Step-by-step guide to buying digital passes",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "text-primary"
    },
    {
      title: "Payment Issues",
      description: "Common payment problems and solutions",
      icon: <Shield className="w-6 h-6" />,
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Delivery Problems",
      description: "What to do if you don't receive your pass",
      icon: <Clock className="w-6 h-6" />,
      color: "text-orange-600 dark:text-orange-400"
    }
  ];



  const faqs = [
    {
      question: "How long does delivery take?",
      answer: "Digital passes are delivered instantly via email or WhatsApp within 0-5 minutes of payment confirmation."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept UPI, credit/debit cards, and net banking. All payments are processed securely."
    },
    {
      question: "Can I get a refund?",
      answer: "Yes, we offer a 24-hour refund window for technical issues or if the pass doesn't work properly."
    },
    {
      question: "Are your passes genuine?",
      answer: "Absolutely! All our passes are verified and tested before listing. We ensure 100% authenticity."
    }
  ];

  return (
    <div 
      className="min-h-screen bg-background transition-colors duration-200 text-foreground" 
      style={{ 
        fontSize: 'clamp(0.75rem, 1.25vw, 0.875rem)',
        transform: 'scale(1)',
        transformOrigin: 'top left'
      }}
    >
      {/* Navigation */}
      <nav className="bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img src="/passlogo.png" alt="DojoPass Logo" className="w-8 h-8 mr-2" />
                <h1 className="text-xl font-bold text-primary">DojoPass</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Home</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-background transition-colors duration-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-primary mb-4">
              <HelpCircle className="w-8 h-8 mx-auto" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Help Center</h1>
            <p className="text-lg text-foreground">Get help with your DojoPass experience</p>
          </div>
        </div>
      </section>

      {/* Help Topics */}
      <section className="py-16 bg-muted transition-colors duration-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-primary mb-4">
              <HelpCircle className="w-8 h-8 mx-auto" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-3">Help Topics</h2>
            <p className="text-lg text-foreground">Find answers to common questions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {helpTopics.map((topic, index) => (
              <div key={index} className="text-center">
                <div className={`${topic.color} mb-4 flex justify-center`}>
                  {topic.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{topic.title}</h3>
                <p className="text-foreground">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQs */}
      <section className="py-16 bg-muted transition-colors duration-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-primary mb-4">
              <Shield className="w-8 h-8 mx-auto" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
            <p className="text-lg text-foreground">Quick answers to common questions</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="text-left">
                <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 transition-colors duration-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/passlogo.png" alt="DojoPass Logo" className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold text-white">DojoPass</h3>
              </div>
              <p className="text-gray-300 mb-6">
                India's fastest digital pass store for ChatGPT Plus, Spotify Premium, Domains, Netflix & more.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <a href="/help" className="hover:text-white transition-colors duration-200">Help Center</a>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <a href="/shipping" className="hover:text-white transition-colors duration-200">Shipping & Delivery</a>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <a href="/refund" className="hover:text-white transition-colors duration-200">Refund Policy</a>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <a href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Products</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <a href="#" className="hover:text-white transition-colors duration-200">ChatGPT Plus</a>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <a href="#" className="hover:text-white transition-colors duration-200">Spotify Premium</a>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <a href="#" className="hover:text-white transition-colors duration-200">Domains</a>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <a href="#" className="hover:text-white transition-colors duration-200">Netflix</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Connect</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <a href="#" className="hover:text-white transition-colors duration-200">WhatsApp</a>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <a href="#" className="hover:text-white transition-colors duration-200">Telegram</a>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <a href="#" className="hover:text-white transition-colors duration-200">Email</a>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <a href="#" className="hover:text-white transition-colors duration-200">Phone</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 DojoPass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HelpPage;
