import React from 'react';
import { CONTACT_INFO } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import { ArrowRight } from 'lucide-react';
import HMGLogo from './HMGLogo';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-16 md:py-32 bg-[#050505] dark:bg-[#fafafa] overflow-hidden flex items-center min-h-[50vh] md:min-h-[70vh] transition-colors duration-500">
      
      {/* Marquee Background Logo */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none opacity-[0.05]">
        <div className="whitespace-nowrap animate-marquee flex items-center">
            {/* First Set */}
            <div className="flex items-center gap-20 md:gap-32 px-10 md:px-16">
                <HMGLogo className="h-40 md:h-[30rem] w-auto text-white dark:text-black" />
                <HMGLogo className="h-40 md:h-[30rem] w-auto text-white dark:text-black" />
                <HMGLogo className="h-40 md:h-[30rem] w-auto text-white dark:text-black" />
                <HMGLogo className="h-40 md:h-[30rem] w-auto text-white dark:text-black" />
            </div>
            {/* Second Set (Duplicate for smooth loop) */}
            <div className="flex items-center gap-20 md:gap-32 px-10 md:px-16">
                <HMGLogo className="h-40 md:h-[30rem] w-auto text-white dark:text-black" />
                <HMGLogo className="h-40 md:h-[30rem] w-auto text-white dark:text-black" />
                <HMGLogo className="h-40 md:h-[30rem] w-auto text-white dark:text-black" />
                <HMGLogo className="h-40 md:h-[30rem] w-auto text-white dark:text-black" />
            </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 pt-0 md:pt-12">
                <div>
                     <h2 className="font-display text-5xl md:text-8xl font-black text-white dark:text-black mb-4 md:mb-6 leading-[0.9] tracking-tighter">
                        LET'S<br/>
                        <span className="text-white dark:text-black">TALK</span>
                    </h2>
                    <p className="text-slate-400 dark:text-slate-600 text-lg md:text-xl font-medium max-w-sm">
                        Available for freelance work and full-time opportunities.
                    </p>
                </div>

                <div className="flex flex-col gap-4 md:gap-6 w-full md:w-auto mt-8 md:mt-0">
                    <a 
                        href={`mailto:${CONTACT_INFO.email}`} 
                        className="group flex items-center justify-between gap-6 md:gap-12 text-white dark:text-black border-b-2 border-white/10 dark:border-black/10 py-4 md:py-6 hover:border-accent hover:text-accent dark:hover:text-accent transition-colors w-full md:w-[500px]"
                    >
                        <span className="font-display text-xl md:text-2xl font-bold tracking-tight truncate">{CONTACT_INFO.email}</span>
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white dark:bg-black text-black dark:text-white flex items-center justify-center group-hover:bg-accent group-hover:text-black dark:group-hover:text-black group-hover:scale-110 transition-all shrink-0">
                             <ArrowRight size={18} className="group-hover:-rotate-45 transition-transform duration-300 md:w-5 md:h-5" />
                        </div>
                    </a>
                    
                    <a 
                        href={CONTACT_INFO.linkedin} 
                        target="_blank"
                        rel="noopener"
                        className="group flex items-center justify-between gap-6 md:gap-12 text-white dark:text-black border-b-2 border-white/10 dark:border-black/10 py-4 md:py-6 hover:border-accent hover:text-accent dark:hover:text-accent transition-colors w-full md:w-[500px]"
                    >
                        <span className="font-display text-xl md:text-2xl font-bold tracking-tight">LinkedIn</span>
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white dark:bg-black text-black dark:text-white flex items-center justify-center group-hover:bg-accent group-hover:text-black dark:group-hover:text-black group-hover:scale-110 transition-all shrink-0">
                             <ArrowRight size={18} className="group-hover:-rotate-45 transition-transform duration-300 md:w-5 md:h-5" />
                        </div>
                    </a>
                </div>
            </div>
        </RevealOnScroll>
        
        <div className="mt-16 md:mt-32 flex justify-between items-end border-t border-white/10 dark:border-black/10 pt-6 md:pt-8">
            <div className="text-slate-500 dark:text-slate-400 text-[10px] md:text-xs font-mono uppercase tracking-widest">
                &copy; {new Date().getFullYear()} Nor Ammar Hamzi.
            </div>
            <div className="text-white dark:text-black font-display font-bold text-base md:text-lg">
                //MY
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;