import { ExternalLink, Github } from 'lucide-react';

const Projects = ({ theme }: { theme: string }) => {
  const projects = theme === 'light' ? [
    {
      title: 'ShapeQR – Custom QR Code Generator',
      description: 'Create unique, scannable QR codes shaped from your images using advanced image processing. Built with FastAPI and OpenCV for creative and functional QR generation.',
      image: '/aweawf.png',
      tags: ['FastAPI', 'OpenCV', 'Python', 'Pillow', 'QR Code'],
      liveUrl: 'https://shape-qr.vercel.app/',
      githubUrl: 'https://github.com/Akash-Developer-hub/ShapeQR.git'
    },
    {
      title: 'Financial Analytics Dashboard',
      description: 'Real-time financial visualization platform processing $2B+ in transactions daily. Features predictive analytics, risk assessment models, and regulatory compliance reporting for Fortune 500 clients.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Secure Banking Mobile Application',
      description: 'GDPR-compliant mobile banking solution with biometric authentication, real-time fraud detection, and seamless integration with core banking systems. Serving 100K+ active users.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Node.js', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI-Powered CRM Platform',
      description: 'Machine learning-enhanced customer relationship management system with predictive lead scoring, automated workflow optimization, and advanced analytics. Increased sales conversion by 45%.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Healthcare Management System',
      description: 'HIPAA-compliant patient management platform with telemedicine integration, electronic health records, and AI-driven diagnostic assistance. Deployed across 50+ medical facilities.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Angular', 'Spring Boot', 'MySQL', 'Azure'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Corporate Learning Platform',
      description: 'Enterprise learning management system with SCORM compliance, advanced reporting, and AI-powered content recommendations. Supporting 10K+ corporate learners across global organizations.',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'GraphQL', 'Prisma', 'AWS'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ] : [
    {
      title: 'ShapeQR – Custom QR Code Generator',
      description: 'Create unique, scannable QR codes shaped from your images using advanced image processing. Built with FastAPI and OpenCV for creative and functional QR generation.',
      image: '/aweawf.png',
      tags: ['FastAPI', 'OpenCV', 'Python', 'Pillow'],
      liveUrl: 'https://shape-qr.vercel.app/',
      githubUrl: 'https://github.com/Akash-Developer-hub/ShapeQR.git'
    },
    {
      title: 'Corporate Dashboard',
      description: 'Comprehensive analytics dashboard for enterprise-level data visualization.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'D3.js', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure and intuitive mobile banking application with modern UI/UX.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI-Powered CRM',
      description: 'Customer relationship management system enhanced with AI capabilities.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'TensorFlow', 'Django'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Healthcare Portal',
      description: 'Comprehensive healthcare management system for patients and providers.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Angular', 'Spring Boot', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Learning Management System',
      description: 'Interactive platform for online education and course management.',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'GraphQL', 'Prisma'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFBF00] mb-4">
            {theme === 'light' ? 'Client Success Stories' : 'Our Projects'}
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-[#f6ebef]' : 'text-gray-600'} opacity-90 max-w-2xl mx-auto`}>
            {theme === 'light' 
              ? 'Delivering measurable business impact through innovative technology solutions. Our portfolio showcases successful digital transformations across diverse industries and enterprise-scale challenges.'
              : 'Showcasing our latest work and innovative solutions'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg ${theme === 'dark' ? 'bg-[#f6ebef]/5 hover:bg-[#f6ebef]/10' : 'bg-white border border-gray-200 hover:shadow-lg'} transition-all duration-300`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full p-4 h-44 object-cover transition-transform duration-300 group-hover:scale-110 mx-auto"
                />
                <div className="absolute inset-0 bg-[#FFBF00]/0 group-hover:bg-[#FFBF00]/20 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-[#f6ebef]' : 'text-gray-800'} mb-2`}>
                  {project.title}
                </h3>
                <p className={`${theme === 'dark' ? 'text-[#f6ebef]' : 'text-gray-600'} opacity-80 mb-4`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#FFBF00]/20 text-[#FFBF00] text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={`flex items-center ${theme === 'dark' ? 'text-[#f6ebef]' : 'text-gray-600'} hover:text-[#FFBF00] transition-colors duration-300`}
                  >
                    <ExternalLink className="w-4 h-4 mr-1 mb-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer nofollow'
                    className={`flex items-center ${theme === 'dark' ? 'text-[#f6ebef]' : 'text-gray-600'} hover:text-[#FFBF00] transition-colors duration-300`}
                  >
                    <Github className="w-4 h-4 mr-1 mb-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;