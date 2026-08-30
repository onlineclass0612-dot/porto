import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Building, CheckCircle2 } from 'lucide-react';

export const ExperienceSection = ({ experiences, education }) => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Purple Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-3 mb-12"
        >
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
            <motion.button
              onClick={() => setActiveTab('experience')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                activeTab === 'experience'
                  ? 'text-slate-950 shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              {activeTab === 'experience' && (
                <motion.div 
                  layoutId="activeExpTab"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 rounded-xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <Briefcase className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Pengalaman Kerja</span>
            </motion.button>

            <motion.button
              onClick={() => setActiveTab('education')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                activeTab === 'education'
                  ? 'text-slate-950 shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              {activeTab === 'education' && (
                <motion.div 
                  layoutId="activeExpTab"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 rounded-xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <GraduationCap className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Pendidikan & Sertifikasi</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative pt-6">
          
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-8 bottom-8 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent -translate-x-1/2 hidden sm:block opacity-40" />

          <AnimatePresence mode="wait">
            {activeTab === 'experience' ? (
              /* Experience Timeline */
              <motion.div 
                key="experience"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {experiences.map((exp, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isEven ? 35 : -35 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.6, delay: index * 0.12 }}
                      className={`relative flex flex-col sm:flex-row items-center ${
                        isEven ? 'sm:flex-row-reverse' : ''
                      } gap-6 group`}
                    >
                      {/* Node Dot on Desktop with Pulse */}
                      <motion.div 
                        whileHover={{ scale: 1.3 }}
                        className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#07090E] border-2 border-cyan-400 shadow-lg shadow-cyan-500/50 hidden sm:flex items-center justify-center z-10 cursor-pointer"
                      >
                        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping opacity-75" />
                      </motion.div>

                      {/* Content Card */}
                      <div className="w-full sm:w-1/2">
                        <motion.div 
                          whileHover={{ y: -4 }}
                          className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 text-left relative overflow-hidden transition-all duration-300 shadow-lg"
                        >
                          
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
                                className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-400 group-hover:border-slate-700 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                        </motion.div>
                      </div>

                      {/* Empty spacer for alignment on opposite side */}
                      <div className="hidden sm:block w-1/2" />
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              /* Education & Certification Timeline */
              <motion.div 
                key="education"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-purple-500/40 text-left transition-all duration-300 shadow-lg"
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
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
