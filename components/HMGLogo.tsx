import React from 'react';

interface HMGLogoProps {
  className?: string;
}

const HMGLogo: React.FC<HMGLogoProps> = ({ className = "w-full h-full" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 200 1212 400" 
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <style>
          {`
            .pulse-anim { animation: pulse 2s infinite; }
            @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.6; } 100% { opacity: 1; } }
          `}
        </style>
      </defs>
      
      {/* Used absolute coordinates (606, 400) to center text within the specific viewBox range (y: 200-600) */}
      <text x="606" y="400" textAnchor="middle" dominantBaseline="central">
        <tspan 
          className="transition-all duration-300" 
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "200px",
            fontWeight: 900,
            fill: "currentColor", // Adapts to text-black/text-white
            stroke: "currentColor",
            strokeWidth: "2px",
            letterSpacing: "-10px",
            paintOrder: "stroke",
            strokeLinejoin: "round",
            strokeLinecap: "round"
          }}
        >
          H
        </tspan>
        <tspan 
          className="transition-all duration-300" 
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "250px",
            fontWeight: 900,
            fill: "transparent",
            stroke: "currentColor", // Adapts to text-black/text-white
            strokeWidth: "12px", // Keep thick stroke for visibility
            letterSpacing: "-10px",
            paintOrder: "stroke",
            strokeLinejoin: "round",
            strokeLinecap: "round"
          }}
        >
          M
        </tspan>
        <tspan 
          className="transition-all duration-300" 
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "200px",
            fontWeight: 900,
            fill: "currentColor", // Adapts to text-black/text-white
            stroke: "currentColor",
            strokeWidth: "2px",
            letterSpacing: "-10px",
            paintOrder: "stroke",
            strokeLinejoin: "round",
            strokeLinecap: "round"
          }}
        >
          G
        </tspan>
        <tspan 
          className="transition-all duration-300" 
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "200px",
            fontWeight: 900,
            fill: "var(--accent-color)",
            stroke: "var(--accent-color)", // Uses CSS variable for dynamic accent
            strokeWidth: "2px",
            letterSpacing: "-10px",
            paintOrder: "stroke",
            strokeLinejoin: "round",
            strokeLinecap: "round"
          }}
        >
          .
        </tspan>
      </text>
    </svg>
  );
};

export default HMGLogo;