import { Code, Palette, Zap, Shield, Globe, Users, Terminal, Share2, Video } from 'lucide-react';

const Services = ({ theme }: { theme: string }) => {
  const services = theme === 'light' ? [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Enterprise Software Development',
      description: 'Custom enterprise-grade applications built with scalable architectures, microservices, and cloud-native technologies for mission-critical business operations.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Digital Experience Design',
      description: 'User-centered design solutions that combine strategic UX research, modern UI frameworks, and data-driven design systems to create exceptional digital experiences.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Engineering',
      description: 'Advanced optimization services including system architecture redesign, database tuning, CDN implementation, and automated monitoring for enterprise-scale applications.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security frameworks, compliance auditing, threat modeling, and implementation of industry-standard security protocols to protect digital assets.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Digital Transformation Strategy',
      description: 'Strategic consulting for technology modernization, legacy system migration, cloud adoption roadmaps, and digital innovation initiatives aligned with business objectives.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Technical Leadership',
      description: 'Expert technical advisory, architecture reviews, team mentoring, and strategic technology planning to accelerate development velocity and product quality.'
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: 'Custom Software Solutions',
      description: 'Tailored software software architectures designed to streamline operations, ensuring scalability, reliability, and seamless integration for complex business needs.'
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'Strategic Social Media Management',
      description: 'Data-driven social media campaigns, community engagement strategies, and brand voice development to maximize digital presence and audience growth.'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Professional Media Production',
      description: 'High-end video editing, motion graphics, and visual storytelling services to create compelling content that resonates with your target audience.'
    }
  ] : [
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
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: 'Software Building',
      description: 'Robust and scalable software solutions tailored to solve specific problems.'
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'Social Media Handling',
      description: 'Strategic management of your social presence to build audience and engagement.'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Video Editing',
      description: 'Professional video editing and post-production to bring your vision to life.'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFBF00] mb-4">
            {theme === 'light' ? 'Technology Solutions' : 'Our Services'}
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-[#f6ebef]' : 'text-gray-600'} opacity-90 max-w-2xl mx-auto`}>
            {theme === 'light'
              ? 'Comprehensive technology services designed to accelerate digital transformation and drive business innovation through strategic implementation and expert execution.'
              : 'We provide comprehensive solutions tailored to meet your unique business needs'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${theme === 'dark' ? 'bg-[#f6ebef]' : 'bg-white border border-gray-200'} p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300 group shadow-lg ${theme === 'light' ? 'hover:shadow-xl' : ''}`}
            >
              <div className={`${theme === 'dark' ? 'text-[#050505]' : 'text-[#FFBF00]'} mb-4 group-hover:text-[#FFBF00] transition-colors duration-300`}>
                {service.icon}
              </div>
              <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-[#050505]' : 'text-gray-800'} mb-3 ${theme === 'dark' ? 'font-press-start' : 'font-bold'}`}>
                {service.title}
              </h3>
              <p className={`${theme === 'dark' ? 'text-[#050505]' : 'text-gray-600'} opacity-80`}>
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