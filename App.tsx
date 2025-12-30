import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Skills from './components/Skills';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#030303] text-slate-900 dark:text-slate-200 transition-colors duration-500">
      <CustomCursor />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <ScrollToTop />
      
      <main>
        <div id="about">
          <Hero />
        </div>
        
        <div className="relative">
          {/* Global Ambient Glow */}
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
             <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-900/5 rounded-full blur-[120px]" />
             <div className="absolute bottom-[20%] left-0 w-[500px] h-[500px] bg-accent/10 dark:bg-accent/5 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10">
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;