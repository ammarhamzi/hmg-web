import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import RevealOnScroll from './RevealOnScroll';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#fafafa] dark:bg-[#050505] relative transition-colors duration-500">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-black/5 dark:border-white/5 pb-8">
            <h2 className="group w-fit font-display text-4xl md:text-5xl font-black text-black dark:text-white leading-[0.9] tracking-tighter cursor-default">
              SELECTED<br/>
              <span className="hover-outline-text">WORKS</span>
            </h2>
            <div className="text-right mt-6 md:mt-0 hidden md:block">
                <span className="font-mono text-slate-500 text-xs tracking-widest">/// 01 - WORK</span>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {PROJECTS.map((project, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
                <div 
                    className="group flex flex-col h-full bg-white dark:bg-[#111] border border-black/5 dark:border-white/5 rounded-xl overflow-hidden hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                >
                    {/* Image Container */}
                    <div className="relative w-full aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/90 dark:bg-black/90 rounded-full flex items-center justify-center backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                <ArrowUpRight className="w-6 h-6 text-black dark:text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white group-hover:text-accent transition-colors">
                                {project.title}
                            </h3>
                        </div>
                        
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                            {project.description}
                        </p>

                        <div className="mt-auto pt-6 border-t border-black/5 dark:border-white/5 flex flex-wrap gap-2">
                            {project.techStack.slice(0, 3).map((tech) => (
                                <span key={tech} className="px-2 py-1 text-[10px] font-mono font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 rounded-sm">
                                    {tech}
                                </span>
                            ))}
                            {project.techStack.length > 3 && (
                                <span className="px-2 py-1 text-[10px] font-mono font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 rounded-sm">
                                    +{project.techStack.length - 3}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
            <div className="flex justify-center mt-20">
                <a 
                    href="https://github.com/ammarhamzi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-8 py-4 border border-black/10 dark:border-white/10 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                >
                    <span className="font-display font-bold uppercase tracking-wider text-sm">View More on GitHub</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </RevealOnScroll>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;