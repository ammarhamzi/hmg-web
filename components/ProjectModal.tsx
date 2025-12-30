import React, { useEffect, useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(project.image);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-6">
      <div 
        className="absolute inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />
      
      <div className="relative bg-[#fafafa] dark:bg-[#080808] border border-black/10 dark:border-white/10 w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-white/50 dark:bg-black/50 hover:bg-accent hover:text-white dark:hover:text-black text-black dark:text-white rounded-full transition-all duration-300 backdrop-blur-sm shadow-sm"
        >
          <X size={24} />
        </button>

        {/* Left Side: Images */}
        <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col gap-4 bg-slate-50 dark:bg-[#0a0a0a]">
            {/* Main Image */}
            <div className="w-full aspect-video overflow-hidden rounded-lg border border-black/5 dark:border-white/5 bg-slate-200 dark:bg-slate-900">
                <img 
                    src={currentImage} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                />
            </div>
            
            {/* Gallery Grid */}
            {project.gallery && project.gallery.length > 0 && (
            <div className="grid grid-cols-3 gap-3">
                {project.gallery.map((img, idx) => (
                    <div 
                        key={idx} 
                        className={`aspect-square overflow-hidden rounded-lg border cursor-pointer transition-all duration-300 ${currentImage === img ? 'border-accent opacity-100 scale-95' : 'border-black/5 dark:border-white/5 opacity-60 hover:opacity-100'}`}
                        onMouseEnter={() => setCurrentImage(img)}
                    >
                        <img 
                            src={img} 
                            alt={`${project.title} gallery ${idx + 1}`} 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                ))}
            </div>
            )}
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col border-l border-black/5 dark:border-white/5 bg-[#fafafa] dark:bg-[#080808]">
            <div className="mb-8">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
                {project.title}
                </h2>
                
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech) => (
                        <span key={tech} className="font-mono text-[10px] md:text-xs text-accent-dark dark:text-accent border border-accent/20 bg-accent/5 px-3 py-1.5 rounded uppercase tracking-wider font-bold" style={{ color: 'var(--accent-color)' }}>
                        {tech}
                        </span>
                    ))}
                </div>
                
                <div className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg font-light space-y-6">
                    <p className="border-l-2 border-accent/50 pl-4 italic text-slate-700 dark:text-slate-300">
                        {project.description}
                    </p>
                    {project.longDescription && (
                    <p>
                        {project.longDescription}
                    </p>
                    )}
                </div>
            </div>

            <div className="mt-auto pt-8 border-t border-black/5 dark:border-white/5">
                {project.link && (
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between w-full bg-black dark:bg-white text-white dark:text-black px-6 py-4 font-display font-bold text-lg uppercase tracking-wider hover:bg-accent dark:hover:bg-accent hover:text-white dark:hover:text-black transition-colors duration-300 rounded-lg"
                >
                    <span>Visit Project</span>
                    <ArrowRight size={24} className="group-hover:-rotate-45 transition-transform duration-300" />
                </a>
                )}
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;