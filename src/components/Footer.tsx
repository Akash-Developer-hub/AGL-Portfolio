import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = ({ theme }: { theme: string }) => {
  return (
    <footer id="contact" className={`py-20 ${theme === 'dark' ? 'border-t border-[#f6ebef]/10' : 'border-t border-gray-200 bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#FFBF00] mb-4">AGL</h3>
            <p className={`${theme === 'dark' ? 'text-[#f6ebef]' : 'text-gray-600'} opacity-90 mb-6 leading-relaxed`}>
              {theme === 'light' 
                ? 'Almost Genius Technologies is a leading provider of digital innovation services, specializing in enterprise software development, cloud transformation, and strategic technology consulting. We partner with forward-thinking organizations to accelerate their digital journey and achieve sustainable competitive advantage.'
                : 'We are a forward-thinking organization dedicated to delivering innovative solutions that drive digital transformation and create lasting value for our clients.'
              }
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/almost-genius-labs/"
                className={`${theme === 'dark' ? 'text-[#f6ebef]' : 'text-gray-600'} hover:text-[#FFBF00] transition-colors duration-300`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className={`${theme === 'dark' ? 'text-[#f6ebef]' : 'text-gray-600'} hover:text-[#FFBF00] transition-colors duration-300`}
                aria-label="Visit our Twitter page"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className={`${theme === 'dark' ? 'text-[#f6ebef]' : 'text-gray-600'} hover:text-[#FFBF00] transition-colors duration-300`}
                aria-label="Visit our GitHub page"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-[#f6ebef]' : 'text-gray-800'}`}>
              {theme === 'light' ? 'Navigation' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {(theme === 'light' ? ['Home', 'Solutions', 'Projects', 'Contact'] : ['Home', 'Services', 'Projects', 'Contact']).map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`${theme === 'dark' ? 'text-[#f6ebef]' : 'text-gray-600'} opacity-80 hover:opacity-100 hover:text-[#FFBF00] transition-all duration-300`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-[#f6ebef]' : 'text-gray-800'}`}>
              {theme === 'light' ? 'Get In Touch' : 'Contact Info'}
            </h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#FFBF00] mr-3" />
                <a
                  href="mailto:almostgeniuslabs@gmail.com"
                  className={`${theme === 'dark' ? 'text-[#f6ebef]' : 'text-gray-600'} opacity-80 hover:opacity-100 hover:text-[#FFBF00] transition-all duration-300`}
                >
                  almostgeniuslabs@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#FFBF00] mr-3" />
                <a
                  href="tel:+91 9943994733"
                  className={`${theme === 'dark' ? 'text-[#f6ebef]' : 'text-gray-600'} opacity-80 hover:opacity-100 hover:text-[#FFBF00] transition-all duration-300`}
                >
                  +91 9943994733 , +91 9943994734
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-[#FFBF00] mr-3" />
                <span className={`${theme === 'dark' ? 'text-[#f6ebef]' : 'text-gray-600'} opacity-80`}>
                 Coimbatore, Tamil Nadu - 641107
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#f6ebef]/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`${theme === 'dark' ? 'text-[#f6ebef]' : 'text-gray-500'} opacity-60 text-sm`}>
              © 2025 AGL Organization. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className={`${theme === 'dark' ? 'text-[#f6ebef]' : 'text-gray-500'} opacity-60 hover:opacity-100 hover:text-[#FFBF00] transition-all duration-300 text-sm`}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className={`${theme === 'dark' ? 'text-[#f6ebef]' : 'text-black'} opacity-60 hover:opacity-100 hover:text-[#FFBF00] transition-all duration-300 text-sm`}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;