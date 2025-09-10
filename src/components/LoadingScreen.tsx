import React, { useState, useEffect } from 'react';
import './loader.css'; // Import the CSS for animations

const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setSlide(true);
    }, 2000); // Start sliding after 5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Hide after 7 seconds
    return () => {
      clearTimeout(slideTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 bg-[#050505] flex items-center justify-center ${slide ? 'slide-down' : ''}`}>
      <svg
        className="container"
        x="0px"
        y="0px"
        viewBox="0 0 50 31.25"
        height="31.25"
        width="50"
        preserveAspectRatio='xMidYMid meet'
      >
        <path
          className="track"
          strokeWidth="4"
          fill="none"
          pathLength="100"
          d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"
        />
        <path
          className="car"
          strokeWidth="4"
          fill="none"
          pathLength="100"
          d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"
        />
      </svg>
    </div>
  );
};

export default LoadingScreen;
