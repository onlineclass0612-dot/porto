import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, CheckCircle2, Building, Sparkles } from 'lucide-react';

export const ExperienceSection = ({ experiences, education }) => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Purple Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono text-xs tracking-wider uppercase">
            <span>// 04. CAREER & EDUCATION</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">
            Perjalanan & <span className="cyber-gradient-text">Pengalaman Profesional</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Rekam jejak kontribusi, pengembangan aplikasi nyata, serta latar belakang akademis dan sertifikasi yang saya miliki.
          </p>

          {/* Experience vs Education Toggle */}
          <div className="flex items-center gap-2 pt-6">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Pengalaman Kerja</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Pendidikan & Sertifikasi</span>
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative pt-6">
          
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-8 bottom-8 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent -translate-x-1/2 hidden sm:block opacity-40" />

          {activeTab === 'experience' ? (
            /* Experience Timeline */
            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`relative flex flex-col sm:flex-row items-center ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    } gap-6 group`}
                  >
                    {/* Node Dot on Desktop */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#07090E] border-2 border-cyan-400 shadow-lg shadow-cyan-500/50 hidden sm:flex items-center justify-center z-10 group-hover:scale-125 transition-transform">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping opacity-75" />
                    </div>

                    {/* Content Card */}
                    <div className="w-full sm:w-1/2">
                      <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 text-left relative overflow-hidden transition-all duration-300">
                        
                        {/* Period & Type Badges */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                            {exp.period}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">
                            {exp.type}
                          </span>
                        </div>

                        {/* Role & Company */}
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-medium text-purple-400 mb-3">
                          <Building className="w-3.5 h-3.5" />
                          <span>{exp.company}</span>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {/* Achievements List */}
                        <div className="space-y-2 mb-4">
                          {exp.achievements.map((ach, aIdx) => (
                            <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Chips */}
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                          {exp.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>

                    {/* Empty spacer for alignment on opposite side */}
                    <div className="hidden sm:block w-1/2" />
                  </div>
                );
              })}
            </div>
          ) : (
            /* Education & Certification Timeline */
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-purple-500/40 text-left transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/30">
                      {edu.period}
                    </span>
                    <span className="text-xs font-mono text-cyan-400">
                      Verified Academic / Cert
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-100 mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-xs sm:text-sm font-medium text-slate-400 mb-3">
                    {edu.institution}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
