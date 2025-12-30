import React from 'react';
import { EXPERIENCES } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="pt-12 pb-32 bg-[#fafafa] dark:bg-[#050505] relative overflow-hidden transition-colors duration-500">
      
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-accent blur-[150px] rounded-full mix-blend-multiply dark:mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll>
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-black/5 dark:border-white/5 pb-8">
               <h2 className="group w-fit font-display text-4xl md:text-5xl font-black text-black dark:text-white leading-[0.9] tracking-tighter cursor-default">
                   CAREER<br/>
                   <span className="hover-outline-text">HISTORY</span>
               </h2>
               <div className="text-right mt-6 md:mt-0 hidden md:block">
                    <span className="font-mono text-slate-500 text-xs tracking-widest">/// 03 - EXPERIENCE</span>
               </div>
           </div>
        </RevealOnScroll>

        <div className="max-w-7xl mx-auto">
          {EXPERIENCES.map((job, index) => (
            <RevealOnScroll key={index} delay={index * 100} className="group relative">
               {/* 3-Column Grid for robust alignment: [Date (200px)] [Timeline (60px)] [Content (Auto)] */}
               <div className="grid md:grid-cols-[200px_60px_1fr] gap-0">
                  
                  {/* Column 1: Period (Desktop) */}
                  <div className="hidden md:flex flex-col items-end text-right pt-2 pr-2">
                       <span className="font-mono text-base text-slate-500 dark:text-slate-200 font-bold mb-2 tracking-tight leading-snug group-hover:text-accent transition-colors duration-300">
                          {job.period}
                      </span>
                      {job.period.toLowerCase().includes('present') && (
                        <span className="inline-flex items-center justify-center px-3 py-1 rounded-sm text-[10px] font-bold tracking-widest uppercase bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-black/10 dark:border-white/10 group-hover:border-accent/50 group-hover:text-accent transition-all">
                            Current Role
                        </span>
                      )}
                  </div>

                  {/* Column 2: Timeline Visuals */}
                  <div className="hidden md:flex flex-col items-center relative h-full">
                      {/* The Dot */}
                      <div className="w-3 h-3 rounded-full bg-white dark:bg-[#050505] border border-black/30 dark:border-white/30 group-hover:border-accent group-hover:scale-125 transition-all duration-300 mt-[10px] z-20 relative">
                         <div className="absolute inset-0 bg-accent rounded-full opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-300"></div>
                      </div>
                      
                      {/* The Line - Connects to next item */}
                      <div className="w-px bg-black/10 dark:bg-white/10 h-full absolute top-0 left-1/2 -translate-x-1/2 -z-10 group-hover:bg-black/20 dark:group-hover:bg-white/20 transition-colors duration-500">
                         {/* Animated Progress Line */}
                         <div className="w-full h-full bg-accent origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out"></div>
                      </div>
                  </div>
                  
                  {/* Column 3: Content */}
                  <div className="pl-0 md:pl-8 pb-16 relative">
                      
                      {/* Mobile Header (Date + Badge) */}
                      <div className="md:hidden mb-6 pl-4 border-l-2 border-accent/50 py-1">
                          <span className="block font-mono text-accent text-base font-bold mb-2">
                              {job.period}
                          </span>
                          {job.period.toLowerCase().includes('present') && (
                            <span className="inline-block text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-black/10 dark:bg-white/10 text-black dark:text-white border border-black/10 dark:border-white/10">
                                Current Role
                            </span>
                          )}
                      </div>

                      <div className="flex flex-col items-start mb-6">
                        <h3 className="font-display text-3xl md:text-5xl text-black dark:text-white font-bold leading-none mb-3 group-hover:text-accent transition-colors duration-300">
                            {job.role}
                        </h3>
                        <h4 className="font-mono text-xs md:text-sm text-slate-500 tracking-widest uppercase font-bold border border-black/10 dark:border-white/10 px-3 py-1.5 rounded bg-black/5 dark:bg-white/5">
                            {job.company}
                        </h4>
                      </div>

                      <div className="space-y-4 mb-8">
                        {job.description.map((desc, i) => (
                           <div key={i} className="flex items-start gap-4 group/item">
                               <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-700 group-hover/item:bg-accent transition-colors duration-300 shrink-0"></div>
                               <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed group-hover/item:text-slate-800 dark:group-hover/item:text-slate-200 transition-colors duration-300 max-w-3xl">
                                   {desc}
                               </p>
                           </div>
                        ))}
                      </div>

                      {job.techStack && (
                         <div className="flex flex-wrap gap-2">
                            {job.techStack.map((t) => (
                                <span 
                                    key={t} 
                                    className="px-3 py-1.5 text-xs font-mono font-medium text-slate-500 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-sm hover:border-accent/30 hover:text-accent hover:bg-accent/5 transition-all duration-300 cursor-default"
                                >
                                    {t}
                                </span>
                            ))}
                         </div>
                      )}
                  </div>
               </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;