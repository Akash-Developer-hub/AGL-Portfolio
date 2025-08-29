import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center max-w-4xl mx-auto px-6">
        <div className="opacity-0 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-[#FFBF00] mb-6">
            AGL
          </h1>
          <p className="text-xl md:text-2xl text-[#f6ebef] mb-8 opacity-90">
            Innovative Solutions for Tomorrow's Challenges
          </p>
          <a
            href="#services"
            className="inline-block bg-[#FFBF00] text-[#050505] px-8 py-3 rounded-lg font-semibold hover:bg-[#FFBF00]/90 transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Work
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-[#FFBF00] w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;