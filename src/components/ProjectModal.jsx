import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Zap, ArrowUpRight } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#04060B]/80 light-theme:bg-slate-900/40 backdrop-blur-xl animate-fade-in project-modal-backdrop">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Content Box */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel border border-cyan-500/40 p-6 sm:p-8 text-left shadow-2xl shadow-cyan-950/60 z-10 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/50 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

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
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-100">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm sm:text-base font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Project Image Banner */}
        <div className="relative rounded-xl overflow-hidden border border-slate-800 aspect-video group">
          <img
            src={project.image}
            alt={project.title}
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
          <p className="text-slate-300 text-sm leading-relaxed">
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
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Used */}
        <div className="space-y-2.5 pt-2 border-t border-slate-800">
          <span className="font-mono text-xs text-slate-400 font-semibold uppercase">
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
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs text-slate-200 bg-slate-900 border border-slate-700 hover:border-cyan-500 hover:text-cyan-300 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Code (GitHub)</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 shadow-md shadow-cyan-500/20 transition-all"
            >
              <span>Buka Live Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>

      </div>
    </div>
  );
};
