import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = ({ theme }: { theme: string }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-14">
      {/* Background gradient */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 text-left max-w-6xl mx-auto px-6">
        <div className="opacity-0 animate-fade-in">
          {/* Small badge */}
          <div className="inline-flex items-center px-4 py-2 bg-[#FFBF00]/10 border border-[#FFBF00]/20 rounded-full text-[#FFBF00] text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-[#FFBF00] rounded-full mr-2 animate-pulse"></span>
            {theme === 'light' ? 'Professional Technology Solutions' : 'Introducing Almost Genius Labs'}
            <ArrowRight className="ml-2 w-4 h-4" />
          </div>

          {/* Main heading */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold ${theme === 'dark' ? 'text-[#f6ebef71]' : 'text-black/70'} mb-6 leading-tight`}>
            <span className={theme === 'dark' ? 'text-[#f6ebef]' : 'text-black'}>
              {theme === 'light' ? 'Digital Innovation' : 'Complete'}
            </span>
            <br />
            <span className="relative">
              {theme === 'light' ? 'Excellence' : 'Tech Solutions'}
              <div className="absolute inset-0 md:translate-y-2 lg:translate-y-3 bg-gradient-to-r from-[#FFBF00] to-[#FFD700] bg-clip-text text-transparent font-bold">
                {theme === 'light' ? 'Excellence' : 'Tech Solutions'}
              </div>
            </span>
            <br />
            <span className={`${theme === 'dark' ? 'text-[#f6ebef]' : 'text-black'} font-press-start text-4xl md:text-6xl lg:text-7xl`}>
              {theme === 'light' ? 'Transforming Businesses' : '@  AGL'}
            </span>
          </h1>

          {/* Description */}
          <p className={`text-lg md:text-xl ${theme === 'dark' ? 'text-[#f6ebef]/80' : 'text-gray-600'} mb-12 max-w-2xl leading-relaxed`}>
            {theme === 'light' 
              ? 'Almost Genius Technologies delivers cutting-edge digital solutions that transform businesses. We combine strategic consulting, advanced software development, and innovative technology implementation to drive measurable results and sustainable growth for forward-thinking enterprises.'
              : 'Almost Genius Labs delivers comprehensive technology solutions combining cutting-edge software development, innovative hardware solutions, and expert consulting services for modern businesses.'
            }
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#projects"
              className={`inline-flex items-center justify-center ${theme === 'dark' ? 'bg-[#f6ebef] text-[#050505]' : 'bg-gray-900 text-white'} px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105`}
            >
              {theme === 'light' ? 'View Our Portfolio' : 'View Our Work'}
            </a>
            <a
              href="#services"
              className={`inline-flex items-center justify-center border ${theme === 'dark' ? 'border-[#FFBF00]/30 text-[#f6ebef]' : 'border-gray-300 text-gray-700'} px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300`}
            >
              {theme === 'light' ? 'Explore Solutions' : 'Our Services'}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-[#FFBF00] w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;