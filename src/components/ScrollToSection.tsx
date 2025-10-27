import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.replace('/', '');
    if (sectionId) {
      // Add a small delay to ensure the DOM is fully rendered
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // For the root path, scroll to top
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return null;
}

export default ScrollToSection;