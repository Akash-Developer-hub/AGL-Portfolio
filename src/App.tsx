import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import PullSwitch from './components/PullSwitch';
import ScrollToSection from './components/ScrollToSection';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    // Apply theme-specific font class to body
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [theme]);

  const MainContent = () => (
    <>
      <section id="home">
        <Hero theme={theme} />
      </section>
      <section id="services">
        <Services theme={theme} />
      </section>
      <section id="projects">
        <Projects theme={theme} />
      </section>
      <Team theme={theme} />
      <section id="contact">
        <Footer theme={theme} />
      </section>
    </>
  );

  return (
    <div className={theme === 'dark' ? "bg-[#050505] text-[#f6ebef] min-h-screen" : "bg-white text-gray-800 min-h-screen"}>
      <ScrollToSection />
      <div className="relative ">
        <LoadingScreen />
        <Header theme={theme} />
        {/* Rope is absolutely positioned -> no layout gap */}
        <PullSwitch theme={theme} setTheme={setTheme} />
      </div>

      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/services" element={<MainContent />} />
        <Route path="/projects" element={<MainContent />} />
        <Route path="/contact" element={<MainContent />} />
      </Routes>
    </div>
  );
}

export default App;
