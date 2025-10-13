import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
// import Team from './components/Team';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import PullSwitch from './components/PullSwitch';
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    // Apply theme-specific font class to body
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [theme]);

  return (
    <div className={theme === 'dark' ? "bg-[#050505] text-[#f6ebef] min-h-screen" : "bg-white text-gray-800 min-h-screen"}>
      <div className="relative ">
        <LoadingScreen />
        <Header theme={theme} />
        {/* Rope is absolutely positioned -> no layout gap */}
        <PullSwitch theme={theme} setTheme={setTheme} />
      </div>

      {/* Hero comes directly after Header, no gap */}
      <Hero theme={theme} />

      <Services theme={theme} />
      <Projects theme={theme} />
      {/* <Team /> */}
      <Footer theme={theme} />
    </div>
  );
}

export default App;
