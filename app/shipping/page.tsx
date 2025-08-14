'use client';

import React from 'react';
import { Truck, Clock, Shield, CheckCircle, AlertCircle, Package, MapPin, Phone } from 'lucide-react';

const ShippingPage: React.FC = () => {
  const deliveryMethods = [
    {
      title: "Instant Digital Delivery",
      description: "Get your digital passes instantly via email or WhatsApp",
      time: "0-5 minutes",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "text-green-600 dark:text-green-400",
      features: ["Email delivery", "WhatsApp delivery", "Instant access", "24/7 availability"]
    },
    {
      title: "Email Delivery",
      description: "Receive your passes directly to your email address",
      time: "1-5 minutes",
      icon: <Package className="w-6 h-6" />,
      color: "text-blue-600 dark:text-blue-400",
      features: ["Secure email", "PDF format", "Downloadable", "Backup access"]
    },
    {
      title: "WhatsApp Delivery",
      description: "Get your passes instantly on WhatsApp",
      time: "0-2 minutes",
      icon: <Phone className="w-6 h-6" />,
      color: "text-green-600 dark:text-green-400",
      features: ["Instant messaging", "Media files", "Quick access", "Chat support"]
    }
  ];

  const deliveryInfo = [
    {
      title: "Processing Time",
      description: "Orders are processed instantly after payment confirmation",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Delivery Time",
      description: "Digital passes are delivered within 0-5 minutes",
      icon: <Truck className="w-6 h-6" />
    },
    {
      title: "Security",
      description: "All deliveries are encrypted and secure",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <div 
      className="min-h-screen bg-white dark:bg-black transition-colors duration-200 text-black dark:text-white" 
      style={{ 
        fontSize: 'clamp(0.75rem, 1.25vw, 0.875rem)',
        transform: 'scale(1)',
        transformOrigin: 'top left'
      }}
    >
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-black/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img 
                  src="/pass/dojopass.png" 
                  alt="DojoPass Logo" 
                  className="w-16 h-16 mr-2 object-contain cursor-pointer"
                  onClick={() => window.location.href = '/'}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/" className="text-black dark:text-white hover:text-green-600 dark:hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Home</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-white dark:bg-black transition-colors duration-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-green-600 dark:text-green-400 mb-4">
              <Truck className="w-8 h-8 mx-auto" />
            </div>
            <h1 className="text-4xl font-bold text-black dark:text-white mb-4">Shipping & Delivery</h1>
            <p className="text-lg text-black dark:text-white">Fast and secure digital delivery for all your passes</p>
          </div>
        </div>
      </section>

      {/* Delivery Methods */}
      <section className="py-16 bg-gray-50 dark:bg-black transition-colors duration-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-3">Delivery Methods</h2>
            <p className="text-lg text-black dark:text-white">Choose your preferred delivery method</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryMethods.map((method, index) => (
              <div key={index} className="text-center">
                <div className={`${method.color} mb-4 flex justify-center`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{method.title}</h3>
                <p className="text-black dark:text-white mb-4">{method.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">Delivery Time: {method.time}</span>
                </div>
                <ul className="space-y-2">
                  {method.features.map((feature, idx) => (
                                      <li key={idx} className="flex items-center text-sm text-black dark:text-white">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Information */}
      <section className="py-16 bg-white dark:bg-black transition-colors duration-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-3">Delivery Information</h2>
            <p className="text-lg text-black dark:text-white">Important details about our delivery process</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="text-green-600 dark:text-green-400 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{info.title}</h3>
                <p className="text-black dark:text-white">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-gray-50 dark:bg-black transition-colors duration-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-3">Important Notes</h2>
            <p className="text-lg text-black dark:text-white">Please read these important delivery details</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-left">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Email Delivery</h3>
                  <p className="text-black dark:text-white mb-2">Please check your spam/junk folder if you don't receive the email within 5 minutes. Make sure to provide a valid email address during checkout.</p>
                </div>
              </div>
            </div>
            <div className="text-left">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">WhatsApp Delivery</h3>
                  <p className="text-black dark:text-white mb-2">Ensure your WhatsApp number is correct and active. You'll receive the pass files directly in the chat.</p>
                </div>
              </div>
            </div>
            <div className="text-left">
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Security & Support</h3>
                  <p className="text-black dark:text-white mb-2">All deliveries are encrypted and secure. If you face any issues, contact our 24/7 support team immediately.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 transition-colors duration-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                          <div className="flex items-center mb-4">
              <img 
                src="/pass/dojopass.png" 
                alt="DojoPass Logo" 
                className="w-20 h-20 mr-3 object-contain"
              />
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

export default ShippingPage; 