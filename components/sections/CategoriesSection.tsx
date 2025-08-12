'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Paintbrush, Gamepad2, Clapperboard, BookOpen, Code2 } from 'lucide-react';

interface Category {
  name: string;
  icon: React.ReactNode;
  color: string;
  count: number;
}

interface CategoriesSectionProps {
  categories?: Category[];
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({ 
  categories = [
    { name: "AI Tools", icon: <Bot className="w-6 h-6" />, color: "bg-purple-500", count: 15 },
    { name: "Design Tools", icon: <Paintbrush className="w-6 h-6" />, color: "bg-blue-500", count: 12 },
    { name: "Gaming", icon: <Gamepad2 className="w-6 h-6" />, color: "bg-pink-500", count: 8 },
    { name: "Streaming", icon: <Clapperboard className="w-6 h-6" />, color: "bg-orange-500", count: 10 },
    { name: "Learning", icon: <BookOpen className="w-6 h-6" />, color: "bg-green-500", count: 20 },
    { name: "Developer", icon: <Code2 className="w-6 h-6" />, color: "bg-cyan-500", count: 6 }
  ]
}) => {
  return (
    <section id="categories" className="py-20 bg-muted transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Shop by Category</h2>
          <p className="text-xl text-muted-foreground">Find the perfect digital pass for your needs</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`${category.color} rounded-2xl p-6 text-center text-white group-hover:scale-105 transition-transform duration-200`}>
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm opacity-80">{category.count} products</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection; 