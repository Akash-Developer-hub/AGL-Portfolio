import React from 'react';
import { Code, Palette, Zap, Shield, Globe, Users } from 'lucide-react';

const Services = ({ theme }: { theme: string }) => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience and engagement.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Lightning-fast applications optimized for speed and efficiency.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Solutions',
      description: 'Robust security implementations to protect your digital assets.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation strategies for modern businesses.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Consulting',
      description: 'Expert guidance and consultation for your technology initiatives.'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFBF00] mb-4">
            Our Services
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-[#f6ebef]' : 'text-black'} opacity-90 max-w-2xl mx-auto`}>
            We provide comprehensive solutions tailored to meet your unique business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${theme === 'dark' ? 'bg-[#f6ebef]' : 'bg-black'} p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300 group`}
            >
              <div className={`${theme === 'dark' ? 'text-[#050505]' : 'text-white'} mb-4 group-hover:text-[#FFBF00] transition-colors duration-300`}>
                {service.icon}
              </div>
              <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-[#050505]' : 'text-white'} mb-3 font-press-start`}>
                {service.title}
              </h3>
              <p className={`${theme === 'dark' ? 'text-[#050505]' : 'text-white'} opacity-80`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;