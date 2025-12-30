import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Direct movement for the dot
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
      }

      // Smooth delayed movement for the follower
      if (followerRef.current) {
        followerRef.current.animate({
          transform: `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`
        }, {
          duration: 500,
          fill: 'forwards'
        });
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Small center dot - Centered */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />
      
      {/* Large surrounding glow area - Centered */}
      <div 
        ref={followerRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-300 ease-out rounded-full
          ${hovered 
            ? 'w-[300px] h-[300px] bg-accent/10 blur-[60px]' 
            : 'w-[150px] h-[150px] bg-white/5 blur-[40px]'
          }`}
      >
      </div>
    </>
  );
};

export default CustomCursor;
