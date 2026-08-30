import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, Layers, Zap, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto project-modal-backdrop"
    >
      
      {/* Click outside backdrop with Framer Motion */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 bg-[#04060B]/80 backdrop-blur-xl" 
        onClick={onClose} 
      />

      {/* Modal Content Box with Spring Animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel border border-cyan-500/40 p-6 sm:p-8 text-left shadow-2xl shadow-cyan-950/60 z-10 space-y-6"
      >
        
        {/* Close Button */}
        <motion.button
          onClick={onClose}
          aria-label="Tutup jendela studi kasus"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 transition-colors z-20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </motion.button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
              {project.badge || "Project Case Study"}
            </span>
          </div>
          <h3 id="modal-project-title" className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-100">
            {project.title}
          </h3>
          <p className="text-slate-300 text-sm sm:text-base font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Project Image Banner */}
        <div className="relative rounded-xl overflow-hidden border border-slate-800 aspect-video group">
          <img
            src={project.image}
            alt={`Detail antarmuka dan studi kasus ${project.title}`}
            width="800"
            height="450"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06080F] via-transparent to-transparent opacity-80" />
        </div>

        {/* Key Metrics / Highlights */}
        {project.metrics && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-center font-mono text-xs text-cyan-300">
                {metric}
              </div>
            ))}
          </div>
        )}

        {/* Project Description */}
        <div className="space-y-3">
          <h4 className="font-heading text-lg font-bold text-slate-200 flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            Ringkasan & Solusi
          </h4>
          <p className="text-slate-200 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Features / Highlights */}
        {project.highlights && (
          <div className="space-y-3">
            <h4 className="font-heading text-lg font-bold text-slate-200 flex items-center gap-2">
              <Zap className="w-4 h-4 text-purple-400" />
              Fitur Utama yang Diimplementasikan
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Used */}
        <div className="space-y-2.5 pt-2 border-t border-slate-800">
          <span className="font-mono text-xs text-slate-300 font-semibold uppercase">
            Teknologi & Tooling:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-800">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs text-slate-200 bg-slate-900 border border-slate-700 hover:border-cyan-500 hover:text-cyan-300 transition-colors shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Code (GitHub)</span>
            </motion.a>
          )}

          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 shadow-md shadow-cyan-500/25 transition-all"
            >
              <span>Buka Live Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          )}
        </div>

      </motion.div>
    </div>
  );
};

export default ProjectModal;
