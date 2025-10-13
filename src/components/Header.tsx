import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ theme }: { theme: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = theme === 'light' ? [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#services' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ] : [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? (theme === 'dark' ? 'bg-[#050505]/95 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-sm border-b border-gray-200') : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4 border-b border-[#FFBF00]/20">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-[#FFBF00]">
            Almost Genius Labs
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={theme === 'dark' ? "text-[#f6ebef] hover:text-[#FFBF00] transition-colors duration-300 font-press-start" : "text-gray-700 hover:text-[#FFBF00] transition-colors duration-300 font-semibold"}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${theme === 'dark' ? 'text-[#f6ebef]' : 'text-gray-700'} hover:text-[#FFBF00] transition-colors duration-300`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 ${theme === 'dark' ? 'bg-[#050505]/95' : 'bg-white'} backdrop-blur-sm rounded-lg border ${theme === 'light' ? 'border-gray-200' : 'border-[#FFBF00]/20'} px-4`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block py-2 ${theme === 'dark' ? 'text-[#f6ebef]' : 'text-gray-700'} hover:text-[#FFBF00] transition-colors duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;