import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  ArrowUpRight, 
  Sparkles, 
  Eye, 
  ChevronLeft, 
  ChevronRight,
  Layers
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'React App', 'Full-Stack Laravel', 'UI & Landing Pages'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === filteredProjects.length - 1;

  // Reset index when category changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < filteredProjects.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeModalProject) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredProjects.length, activeModalProject, currentIndex]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-3 mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider uppercase shadow-sm shadow-cyan-500/10">
            <span>// 03. 3D COVERFLOW SHOWCASE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">
            Karya & <span className="cyber-gradient-text">Proyek Unggulan</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Jelajahi 6 proyek nyata yang live di server VPS. Gunakan tombol navigasi atau klik langsung pada kartu samping untuk berinteraksi dalam perspektif 3D.
          </p>

          {/* Filter Categories with Spring Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className={`relative px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'text-slate-950 font-semibold shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {selectedCategory === cat && (
                  <motion.div 
                    layoutId="activeProjectTab"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* 3D Cover Flow Carousel Container */}
        <div className="relative w-full py-10 flex flex-col items-center justify-center">
          
          {/* Main 3D Stage with Perspective */}
          <div 
            className="relative w-full max-w-5xl h-[520px] sm:h-[550px] flex items-center justify-center overflow-visible"
            style={{ perspective: 1200 }}
          >
            {filteredProjects.map((project, index) => {
              // Direct linear offset relative to current active index
              const offset = index - currentIndex;

              const isCenter = offset === 0;
              const isLeft1 = offset === -1;
              const isRight1 = offset === 1;
              const isLeft2 = offset === -2;
              const isRight2 = offset === 2;

              // Hide items further away than 2 positions
              if (Math.abs(offset) > 2) return null;

              // Dynamic 3D transform values
              let translateX = '0%';
              let rotateY = 0;
              let scale = 1;
              let opacity = 1;
              let zIndex = 30;
              let filter = 'none';

              if (isCenter) {
                translateX = '0%';
                rotateY = 0;
                scale = 1;
                opacity = 1;
                zIndex = 30;
                filter = 'none';
              } else if (isLeft1) {
                translateX = '-65%';
                rotateY = 32;
                scale = 0.84;
                opacity = 0.55;
                zIndex = 20;
                filter = 'brightness(0.75) blur(0.5px)';
              } else if (isRight1) {
                translateX = '65%';
                rotateY = -32;
                scale = 0.84;
                opacity = 0.55;
                zIndex = 20;
                filter = 'brightness(0.75) blur(0.5px)';
              } else if (isLeft2) {
                translateX = '-115%';
                rotateY = 45;
                scale = 0.68;
                opacity = 0.25;
                zIndex = 10;
                filter = 'brightness(0.5) blur(1.5px)';
              } else if (isRight2) {
                translateX = '115%';
                rotateY = -45;
                scale = 0.68;
                opacity = 0.25;
                zIndex = 10;
                filter = 'brightness(0.5) blur(1.5px)';
              }

              return (
                <motion.div
                  key={project.id}
                  onClick={() => {
                    if (!isCenter) setCurrentIndex(index);
                  }}
                  animate={{
                    x: translateX,
                    rotateY: rotateY,
                    scale: scale,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 26,
                    mass: 0.8,
                  }}
                  style={{
                    filter: filter,
                    transformStyle: 'preserve-3d',
                  }}
                  className={`absolute w-[320px] sm:w-[460px] md:w-[500px] rounded-2xl glass-card overflow-hidden transition-shadow duration-500 ${
                    isCenter 
                      ? 'border-2 border-cyan-400/80 shadow-[0_0_40px_rgba(0,240,255,0.28)] cursor-default' 
                      : 'border border-slate-800/80 hover:border-cyan-500/40 cursor-pointer shadow-xl'
                  }`}
                >
                  {/* Image & Header Overlay */}
                  <div className="relative aspect-video overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={`Pratinjau antarmuka ${project.title} - ${project.subtitle}`}
                      width="500"
                      height="281"
                      decoding="async"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080C16] via-[#080C16]/40 to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-3.5 left-3.5 flex gap-2 z-10">
                      <span className="px-3 py-1 rounded-lg text-[11px] font-mono font-bold bg-[#06080F]/90 backdrop-blur-md text-cyan-300 border border-cyan-500/40 shadow-lg">
                        {project.category}
                      </span>
                      {project.badge && (
                        <span className="px-3 py-1 rounded-lg text-[11px] font-mono font-semibold bg-purple-950/85 backdrop-blur-md text-purple-300 border border-purple-500/40 shadow-lg">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    {/* Center Action Eye on Active Item */}
                    {isCenter && (
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveModalProject(project);
                        }}
                        aria-label="View Project Case Study"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center opacity-90 hover:opacity-100 transition-all shadow-xl shadow-cyan-500/50 z-20 cursor-pointer"
                        title="Buka Studi Kasus"
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                    )}
                  </div>

                  {/* Card Content Details */}
                  <div className="p-5 sm:p-6 text-left space-y-4 bg-[#080C16]/95 backdrop-blur-md">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                        <span className="font-mono text-xs text-slate-500 font-semibold">
                          0{index + 1} / 0{filteredProjects.length}
                        </span>
                      </div>
                      <p className="text-xs text-purple-400 font-mono mt-0.5">
                        {project.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.slice(0, 5).map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-cyan-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons (Active item only) */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveModalProject(project);
                        }}
                        className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors cursor-pointer group"
                      >
                        <span>Detail Studi Kasus</span>
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                      </button>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            aria-label="GitHub Repository"
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors shadow-sm"
                            title="GitHub Repo"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </motion.a>
                        )}
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            aria-label="Live Demo Link"
                            whileHover={{ scale: 1.15, y: -1 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/25 transition-all"
                            title="Live Demo"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Carousel Controls: Arrows & Indicators */}
          <div className="flex items-center justify-center gap-6 mt-8 z-30">
            {/* Prev Button */}
            <motion.button
              onClick={handlePrev}
              disabled={isFirst}
              aria-label="Previous Project"
              whileHover={isFirst ? {} : { scale: 1.15, x: -3 }}
              whileTap={isFirst ? {} : { scale: 0.9 }}
              className={`p-3 rounded-full border transition-all shadow-lg ${
                isFirst
                  ? 'opacity-20 cursor-not-allowed border-slate-800 text-slate-600 bg-slate-950/40 shadow-none pointer-events-none'
                  : 'bg-slate-900/90 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 shadow-cyan-500/10 cursor-pointer'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Pagination Dots Indicator */}
            <div className="flex items-center gap-2">
              {filteredProjects.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to project ${dotIdx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === dotIdx
                      ? 'w-8 bg-gradient-to-r from-cyan-400 to-purple-500 shadow-md shadow-cyan-500/50'
                      : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={handleNext}
              disabled={isLast}
              aria-label="Next Project"
              whileHover={isLast ? {} : { scale: 1.15, x: 3 }}
              whileTap={isLast ? {} : { scale: 0.9 }}
              className={`p-3 rounded-full border transition-all shadow-lg ${
                isLast
                  ? 'opacity-20 cursor-not-allowed border-slate-800 text-slate-600 bg-slate-950/40 shadow-none pointer-events-none'
                  : 'bg-slate-900/90 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 shadow-cyan-500/10 cursor-pointer'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

        </div>

        {/* Modal Popup with AnimatePresence */}
        <AnimatePresence>
          {activeModalProject && (
            <ProjectModal
              project={activeModalProject}
              onClose={() => setActiveModalProject(null)}
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ProjectsSection;
