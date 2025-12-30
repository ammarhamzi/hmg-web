import React from 'react';
import { SKILLS } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="pt-12 pb-12 bg-[#fafafa] dark:bg-[#050505] relative border-b border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-black/5 dark:border-white/5 pb-8">
                <h2 className="group w-fit font-display text-4xl md:text-5xl font-black text-black dark:text-white leading-[0.9] tracking-tighter cursor-default">
                TECHNICAL<br/>
                <span className="hover-outline-text">ARSENAL</span>
                </h2>
                <div className="text-right mt-6 md:mt-0 hidden md:block">
                    <span className="font-mono text-slate-500 text-xs tracking-widest">/// 02 - SKILLS</span>
                </div>
            </div>
        </RevealOnScroll>

        <RevealOnScroll>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg font-light mb-16">
              A comprehensive list of technologies and tools I've mastered to build intelligent, scalable applications.
            </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((category, idx) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <div className="bg-white dark:bg-[#0a0a0a] p-1 h-full border border-black/5 dark:border-white/5 hover:border-accent/30 transition-colors duration-500 group shadow-sm dark:shadow-none">
                <div className="h-full p-6 relative overflow-hidden">
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-black/5 dark:from-white/5 to-transparent -mr-4 -mt-4 transform rotate-45 group-hover:from-accent/20 transition-all"></div>

                  <h3 className="text-lg font-display font-bold text-black dark:text-white mb-6 uppercase tracking-wider group-hover:text-accent transition-colors">
                    {category.category}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill}
                        className="px-3 py-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-sm hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-default"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;