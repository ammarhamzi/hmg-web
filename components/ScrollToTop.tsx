import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-40 transition-all duration-500 transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
    }`}>
      <button
        onClick={scrollToTop}
        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-full shadow-xl hover:border-accent transition-all duration-300 overflow-hidden"
        aria-label="Scroll to top"
      >
        {/* Hover Fill Effect */}
        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
        
        {/* Icon */}
        <ArrowUp 
          strokeWidth={2}
          className="w-5 h-5 md:w-6 md:h-6 relative z-10 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300"
        />
      </button>
    </div>
  );
};

export default ScrollToTop;