import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  FileCode, 
  Palette, 
  Layers, 
  Code, 
  Globe, 
  Server, 
  Network, 
  Cpu, 
  Database, 
  GitBranch, 
  Zap, 
  Send, 
  Cloud
} from 'lucide-react';
import { FigmaIcon } from './Icons';

export const SkillsSection = ({ skills }) => {
  // Helper icon renderer
  const getIcon = (iconName) => {
    const iconProps = { className: "w-5 h-5" };
    switch (iconName) {
      case 'Code2': return <Code2 {...iconProps} />;
      case 'FileCode': return <FileCode {...iconProps} />;
      case 'Palette': return <Palette {...iconProps} />;
      case 'Layers': return <Layers {...iconProps} />;
      case 'Code': return <Code {...iconProps} />;
      case 'Globe': return <Globe {...iconProps} />;
      case 'Server': return <Server {...iconProps} />;
      case 'Network': return <Network {...iconProps} />;
      case 'Cpu': return <Cpu {...iconProps} />;
      case 'Database': return <Database {...iconProps} />;
      case 'GitBranch': return <GitBranch {...iconProps} />;
      case 'Zap': return <Zap {...iconProps} />;
      case 'Figma': return <FigmaIcon {...iconProps} />;
      case 'Send': return <Send {...iconProps} />;
      case 'Cloud': return <Cloud {...iconProps} />;
      default: return <Code2 {...iconProps} />;
    }
  };

  // Combine all skills into an exact 16-item array
  const allSkills = [
    ...(skills.frontend || []),
    ...(skills.backend || []),
    ...(skills.tools || []),
  ];

  // Split into 2 rows of 8 items each
  const row1Skills = allSkills.slice(0, 8);
  const row2Skills = allSkills.slice(8, 16);

  const renderSkillCard = (skill, index, rowId) => (
    <div
      key={`${rowId}-${skill.name}-${index}`}
      className="shrink-0 w-64 sm:w-72 glass-card p-4 sm:p-5 rounded-2xl border border-slate-800/80 hover:border-cyan-500/50 relative group overflow-hidden shadow-lg transition-all duration-300 mx-3 my-2 cursor-pointer bg-[#0A0F1D]/85 backdrop-blur-md hover:-translate-y-1 hover:shadow-cyan-500/20"
    >
      {/* Top Accent Line */}
      <div 
        className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
        style={{ backgroundColor: skill.color || '#00F0FF' }}
      />

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 group-hover:border-cyan-500/40 transition-transform shadow-inner"
            style={{ color: skill.color || '#00F0FF' }}
          >
            {getIcon(skill.icon)}
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm sm:text-base text-slate-100 group-hover:text-cyan-300 transition-colors">
              {skill.name}
            </h4>
            <span className="font-mono text-[10px] sm:text-[11px] text-slate-400">
              {skill.category}
            </span>
          </div>
        </div>

        <span className="font-mono text-xs font-bold text-slate-300">
          {skill.level}%
        </span>
      </div>

      {/* Progress Bar Container with ARIA Accessibility */}
      <div 
        role="progressbar" 
        aria-valuenow={skill.level} 
        aria-valuemin={0} 
        aria-valuemax={100} 
        aria-label={`Tingkat keahlian ${skill.name}: ${skill.level}%`}
        className="w-full h-1.5 rounded-full bg-slate-900 border border-slate-800/80 overflow-hidden relative"
      >
        <div
          className="h-full rounded-full transition-all duration-700 ease-out group-hover:brightness-125"
          style={{
            width: `${skill.level}%`,
            background: `linear-gradient(90deg, #00F0FF, ${skill.color || '#8B5CF6'})`,
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Ambient Violet Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono text-xs tracking-wider uppercase">
            <span>// 02. TECH STACK & SKILLS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">
            Arsenal <span className="cyber-gradient-text">16 Teknologi & Keahlian</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Eksplorasi seluruh teknologi modern yang saya kuasai dan implementasikan dalam pengembangan web production-ready.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee Wrapper with Individual Row Hover & Edge Gradient Fade */}
      <div className="relative w-full overflow-hidden space-y-4">
        
        {/* Left & Right Gradient Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-[#06080F] via-[#06080F]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-[#06080F] via-[#06080F]/80 to-transparent z-20" />

        {/* Row 1: Left to Right (LTR) with Individual Pause on Hover */}
        <div className="marquee-row flex overflow-hidden py-3">
          <div className="animate-marquee-ltr flex items-center py-2">
            {/* First Set */}
            {row1Skills.map((skill, idx) => renderSkillCard(skill, idx, 'row1-set1'))}
            {/* Duplicate Set for Seamless Loop */}
            {row1Skills.map((skill, idx) => renderSkillCard(skill, idx, 'row1-set2'))}
          </div>
        </div>

        {/* Row 2: Right to Left (RTL) with Individual Pause on Hover */}
        <div className="marquee-row flex overflow-hidden py-3">
          <div className="animate-marquee-rtl flex items-center py-2">
            {/* First Set */}
            {row2Skills.map((skill, idx) => renderSkillCard(skill, idx, 'row2-set1'))}
            {/* Duplicate Set for Seamless Loop */}
            {row2Skills.map((skill, idx) => renderSkillCard(skill, idx, 'row2-set2'))}
          </div>
        </div>

      </div>

      {/* Core Stack Feature Callout Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-2xl glass-panel border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-cyan-950/20"
        >
          <div className="flex items-center gap-4 text-left">
            <motion.div 
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/10"
            >
              <Zap className="w-6 h-6 text-cyan-400" />
            </motion.div>
            <div>
              <h4 className="font-heading font-bold text-lg text-slate-100">
                Core Stack: React 19 + Tailwind CSS + Laravel 11 + Astro.js
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                Spesialisasi penuh pada pembuatan antarmuka modern yang terintegrasi secara aman, efisien, dan berkecepatan tinggi dengan backend REST API & server VPS.
              </p>
            </div>
          </div>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shrink-0 px-5 py-2.5 rounded-xl font-semibold text-xs font-mono bg-cyan-400/10 border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 transition-all duration-200 shadow-md shadow-cyan-500/10"
          >
            LIHAT 6 PROYEK LIVE &gt;
          </motion.a>
        </motion.div>
      </div>

    </section>
  );
};

export default SkillsSection;
