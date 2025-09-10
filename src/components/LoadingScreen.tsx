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
      {/* Original rollercoaster animation */}
      {/* <svg
        className="container absolute"
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
      </svg> */}
      <h2 className="text-4xl font-bold text-[#FFBF00]">Almost Genius Labs</h2>

      {/* 3D Diamond background animation */}
      <svg xmlns="http://www.w3.org/2000/svg" height="200" width="200" className="diamond-container absolute opacity-30">
        <g>
          <polygon
            transform="rotate(45 100 100)"
            strokeWidth="1"
            stroke="#d3a410"
            fill="none"
            points="70,70 148,50 130,130 50,150"
            id="bounce"
          />
          <polygon
            transform="rotate(45 100 100)"
            strokeWidth="1"
            stroke="#d3a410"
            fill="none"
            points="70,70 148,50 130,130 50,150"
            id="bounce2"
          />
          <polygon
            transform="rotate(45 100 100)"
            strokeWidth="2"
            stroke=""
            fill="#414750"
            points="70,70 150,50 130,130 50,150"
          />
          <polygon
            strokeWidth="2"
            stroke=""
            fill="url(#gradiente)"
            points="100,70 150,100 100,130 50,100"
          />
          <defs>
            <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente">
              <stop style={{stopColor: "#1e2026", stopOpacity: 1}} offset="20%" />
              <stop style={{stopColor: "#414750", stopOpacity: 1}} offset="60%" />
            </linearGradient>
          </defs>
          <polygon
            transform="translate(20, 31)"
            strokeWidth="2"
            stroke=""
            fill="#b7870f"
            points="80,50 80,75 80,99 40,75"
          />
          <polygon
            transform="translate(20, 31)"
            strokeWidth="2"
            stroke=""
            fill="url(#gradiente2)"
            points="40,-40 80,-40 80,99 40,75"
          />
          <defs>
            <linearGradient y2="100%" x2="0%" y1="-17%" x1="10%" id="gradiente2">
              <stop style={{stopColor: "#d3a51000", stopOpacity: 1}} offset="20%" />
              <stop
                style={{stopColor: "#d3a51054", stopOpacity: 1}}
                offset="100%"
                id="animatedStop"
              />
            </linearGradient>
          </defs>
          <polygon
            transform="rotate(180 100 100) translate(20, 20)"
            strokeWidth="2"
            stroke=""
            fill="#d3a410"
            points="80,50 80,75 80,99 40,75"
          />
          <polygon
            transform="rotate(0 100 100) translate(60, 20)"
            strokeWidth="2"
            stroke=""
            fill="url(#gradiente3)"
            points="40,-40 80,-40 80,85 40,110.2"
          />
          <defs>
            <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente3">
              <stop style={{stopColor: "#d3a51000", stopOpacity: 1}} offset="20%" />
              <stop
                style={{stopColor: "#d3a51054", stopOpacity: 1}}
                offset="100%"
                id="animatedStop"
              />
            </linearGradient>
          </defs>
          <polygon
            transform="rotate(45 100 100) translate(80, 95)"
            strokeWidth="2"
            stroke=""
            fill="#ffe4a1"
            points="5,0 5,5 0,5 0,0"
            id="particles"
          />
          <polygon
            transform="rotate(45 100 100) translate(80, 55)"
            strokeWidth="2"
            stroke=""
            fill="#ccb069"
            points="6,0 6,6 0,6 0,0"
            id="particles"
          />
          <polygon
            transform="rotate(45 100 100) translate(70, 80)"
            strokeWidth="2"
            stroke=""
            fill="#fff"
            points="2,0 2,2 0,2 0,0"
            id="particles"
          />
          <polygon
            strokeWidth="2"
            stroke=""
            fill="#292d34"
            points="29.5,99.8 100,142 100,172 29.5,130"
          />
          <polygon
            transform="translate(50, 92)"
            strokeWidth="2"
            stroke=""
            fill="#1f2127"
            points="50,50 120.5,8 120.5,35 50,80"
          />
        </g>
      </svg>
    </div>
  );
};

export default LoadingScreen;
