import React from 'react';
import GlitchText from './GlitchText';
import { PERSONAL_INFO } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import HMGLogo from './HMGLogo';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#fafafa] dark:bg-[#030303] overflow-hidden pt-20">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-900/10 rounded-full blur-[100px]" />
        
        {/* Huge Muted Logo Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] max-w-none opacity-[0.03] dark:opacity-[0.04] rotate-[-5deg] select-none text-black dark:text-white">
            <HMGLogo />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <RevealOnScroll>
            <div className="flex flex-col items-center">
                
                {/* Profile Image in Circle Frame */}
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-full border-2 border-black/10 dark:border-white/10 p-1 mb-8 shadow-2xl shadow-accent/20">
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                         <img 
                            src="https://i.ibb.co/LXRPrfhQ/pic.jpg" 
                            alt="Profile" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <p className="font-mono text-accent text-sm md:text-base tracking-[0.2em] mb-6 uppercase">
                    Hello, my name is
                </p>

                <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter text-slate-900 dark:text-white mb-6">
                    <GlitchText text="AMMAR" /> <br className="md:hidden" />
                    <GlitchText text="HAMZI" />
                </h1>

                <div className="h-1 w-24 bg-accent mx-auto mb-8 rounded-full"></div>

                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                    {PERSONAL_INFO.summary}
                </p>

                <div className="flex flex-col md:flex-row gap-6 mt-4">
                    <a href="#projects" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-display font-bold uppercase tracking-wider text-sm hover:bg-accent dark:hover:bg-accent transition-colors duration-300 rounded-lg">
                        View Projects
                    </a>
                    <a href="#contact" className="px-8 py-4 border border-black/10 dark:border-white/10 text-black dark:text-white font-display font-bold uppercase tracking-wider text-sm hover:border-accent hover:text-accent transition-colors duration-300 rounded-lg backdrop-blur-sm">
                        Contact Me
                    </a>
                </div>
            </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Hero;