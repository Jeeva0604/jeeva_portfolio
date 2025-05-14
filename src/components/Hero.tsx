
import React from 'react';
import { portfolioData } from '@/assets/data';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const { name, role, image } = portfolioData.personalInfo;

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <img 
                  src={image} 
                  alt={name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 px-5 py-2 rounded-full shadow-lg">
                <p className="font-medium text-primary">{role}</p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-3">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">{name}</h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">{role}</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild className="text-lg px-6 py-6">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button asChild variant="outline" className="text-lg px-6 py-6">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
