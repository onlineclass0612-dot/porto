import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Sparkles, 
  Layers, 
  Zap, 
  MapPin, 
  Briefcase, 
  Smile 
} from 'lucide-react';

export const AboutSection = ({ about, personal }) => {
  const iconMap = [
    <Code className="w-6 h-6 text-cyan-400" />,
    <Sparkles className="w-6 h-6 text-purple-400" />,
    <Layers className="w-6 h-6 text-teal-400" />,
    <Zap className="w-6 h-6 text-amber-400" />
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider uppercase">
            <span>// 01. ABOUT ME</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">
            Menggabungkan <span className="cyber-gradient-text">Logika & Estetika</span> Modern
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Mengenal lebih dekat visi, cara kerja, dan dedikasi saya dalam membangun antarmuka web masa depan.
          </p>
        </motion.div>

        {/* Top Grid: Bio & Quick Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Bio Story */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 relative shadow-xl">
              <h3 className="font-heading text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                Visi & Pendekatan Pengembangan
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                {about.story}
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {about.philosophy}
              </p>

              {/* Quick Info Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-slate-800/80">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Briefcase className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{personal.role}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Smile className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Available Now</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats HUD Matrix */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personal.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-center items-center text-center group hover:border-cyan-500/40 transition-all duration-300 shadow-lg cursor-pointer"
              >
                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 via-indigo-300 to-purple-400 mb-1 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mb-0.5">
                  {stat.label}
                </div>
                <div className="font-mono text-[11px] text-cyan-400/80">
                  {stat.suffix}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Key Highlights Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 rounded-2xl border border-slate-800/70 hover:border-cyan-500/40 flex flex-col justify-between space-y-4 group transition-all duration-300 shadow-md"
            >
              <div className="flex items-center justify-between">
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:border-cyan-500/40 group-hover:bg-cyan-950/20 transition-colors"
                >
                  {iconMap[index % iconMap.length]}
                </motion.div>
                <span className="font-mono text-xs text-slate-500 font-semibold">
                  0{index + 1}
                </span>
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
