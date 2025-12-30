import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'div';
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "", as: Component = 'span' }) => {
  return (
    <Component className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      
      {/* Layer 1 - Cyan/Accent Shift - Continuous Animation */}
      <span 
        className="absolute top-0 left-0 -z-10 w-full h-full text-accent opacity-0 animate-glitch-1 select-none mix-blend-screen" 
        aria-hidden="true"
      >
        {text}
      </span>
      
      {/* Layer 2 - Blue/Cyan Shift - Continuous Animation */}
      <span 
        className="absolute top-0 left-0 -z-10 w-full h-full text-cyan-300 opacity-0 animate-glitch-2 select-none mix-blend-overlay" 
        aria-hidden="true"
      >
        {text}
      </span>

      <style>{`
        @keyframes glitch-1 {
          0% { transform: translate(0); opacity: 0; }
          20% { transform: translate(-2px, 2px); opacity: 0.7; }
          40% { transform: translate(-2px, -2px); opacity: 0; }
          50% { opacity: 0; }
          60% { transform: translate(2px, 2px); opacity: 0.7; }
          80% { transform: translate(2px, -2px); opacity: 0; }
          100% { transform: translate(0); opacity: 0; }
        }
        @keyframes glitch-2 {
          0% { transform: translate(0); opacity: 0; }
          25% { transform: translate(2px, -2px); opacity: 0.5; }
          50% { transform: translate(-2px, 2px); opacity: 0; }
          60% { opacity: 0; }
          75% { transform: translate(-2px, -2px); opacity: 0.5; }
          100% { transform: translate(0); opacity: 0; }
        }
        .animate-glitch-1 {
          animation: glitch-1 3s infinite linear alternate-reverse;
        }
        .animate-glitch-2 {
          animation: glitch-2 4s infinite linear alternate-reverse;
        }
      `}</style>
    </Component>
  );
};

export default GlitchText;