import React, { useState } from 'react';
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
  Cloud,
  Check
} from 'lucide-react';
import { FigmaIcon } from './Icons';

export const SkillsSection = ({ skills }) => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend Core' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'tools', label: 'Tools & DevOps' },
  ];

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

  // Combine or filter skills based on active tab
  const getDisplaySkills = () => {
    if (activeTab === 'frontend') return skills.frontend;
    if (activeTab === 'backend') return skills.backend;
    if (activeTab === 'tools') return skills.tools;
    return [...skills.frontend, ...skills.backend, ...skills.tools];
  };

  const displaySkills = getDisplaySkills();

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Ambient Violet Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono text-xs tracking-wider uppercase">
            <span>// 02. TECH STACK & SKILLS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">
            Arsenal <span className="cyber-gradient-text">Teknologi & Keahlian</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Kombinasi teknologi modern yang saya gunakan untuk membangun antarmuka web yang cepat, responsif, dan scalable.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-semibold shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displaySkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 relative group overflow-hidden"
            >
              {/* Top Accent Line */}
              <div 
                className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: skill.color || '#00F0FF' }}
              />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform"
                    style={{ color: skill.color || '#00F0FF' }}
                  >
                    {getIcon(skill.icon)}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="font-mono text-[11px] text-slate-400">
                      {skill.category}
                    </span>
                  </div>
                </div>

                <span className="font-mono text-xs font-bold text-slate-300">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-800/80 overflow-hidden relative">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-125"
                  style={{
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, #00F0FF, ${skill.color || '#8B5CF6'})`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Core Stack Feature Callout Banner */}
        <div className="mt-14 p-6 rounded-2xl glass-panel border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-cyan-950/20">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-slate-100">
                Core Stack Focus: React + Tailwind + Laravel API
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                Spesialisasi penuh pada pembuatan antarmuka modern yang terintegrasi secara aman dan efisien dengan backend REST API.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="shrink-0 px-5 py-2.5 rounded-xl font-semibold text-xs font-mono bg-cyan-400/10 border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 transition-all duration-200"
          >
            LIHAT IMPLEMENTASI &gt;
          </a>
        </div>

      </div>
    </section>
  );
};
