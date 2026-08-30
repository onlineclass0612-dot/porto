import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Terminal, 
  Sparkles, 
  Code2, 
  Layers, 
  Zap,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, InstagramIcon, ThreadsIcon } from './Icons';

export const HeroSection = ({ personal }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Ambient Glows (Optimized Hardware Accelerated) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-gradient-to-tr from-cyan-500/20 via-purple-600/20 to-pink-500/15 rounded-full blur-[110px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
          >
            
            {/* Status Pill Badge */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E1528]/80 border border-cyan-500/30 backdrop-blur-md shadow-sm shadow-cyan-500/15 cursor-default"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              <span className="font-mono text-xs text-cyan-300 font-medium tracking-wide">
                SYSTEM ONLINE // OPEN FOR OPPORTUNITIES
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="font-mono text-sm tracking-widest text-purple-400 uppercase font-semibold flex items-center gap-2">
                <span>&lt;Hello World /&gt;</span>
                <span className="inline-block w-8 h-[1px] bg-purple-500/40"></span>
              </h2>
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-100">
                I'm <span className="cyber-gradient-text drop-shadow-[0_0_25px_rgba(0,240,255,0.25)]">{personal.name}</span>
                <br />
                <span className="text-3xl sm:text-5xl lg:text-6xl text-slate-300">
                  {personal.role}
                </span>
              </h1>
            </motion.div>

            {/* Subtitle / Bio */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {personal.tagline}. Menggabungkan arsitektur <span className="text-cyan-300 font-medium underline decoration-cyan-500/30 underline-offset-4">React</span> yang modular, kecepatan styling <span className="text-cyan-300 font-medium underline decoration-cyan-500/30 underline-offset-4">Tailwind CSS</span>, dan keandalan integrasi <span className="text-purple-300 font-medium underline decoration-purple-500/30 underline-offset-4">Laravel API</span>.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 hover:from-cyan-300 hover:to-purple-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300"
              >
                <span>Lihat Proyek Saya</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:text-cyan-300 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Hubungi Saya</span>
              </motion.a>

              <motion.a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-purple-300 border border-transparent hover:border-purple-500/30 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Resume CV</span>
              </motion.a>
            </motion.div>

            {/* Social Links & Quick Stack Icons */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 w-full">
              {/* Socials */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-slate-400">Connect:</span>
                <motion.a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/50 transition-colors shadow-sm"
                >
                  <GithubIcon className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={personal.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram Profile"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/50 transition-colors shadow-sm"
                >
                  <InstagramIcon className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={personal.threads}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Threads Profile"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/50 transition-colors shadow-sm"
                >
                  <ThreadsIcon className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={`mailto:${personal.email}`}
                  aria-label="Direct Email"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-purple-300 hover:border-purple-500/50 transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                </motion.a>
              </div>

              {/* Status Note */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Responsive & Modern UI Guarantee</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Cyber HUD Card & Terminal Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            
            {/* Floating Tech Chips with Smooth Spring Animations */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.08 }}
              className="absolute -top-4 -left-4 z-20 px-3.5 py-1.5 rounded-xl bg-[#0F172A]/90 border border-cyan-400/40 backdrop-blur-md shadow-lg shadow-cyan-500/20 flex items-center gap-2 cursor-pointer"
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span className="font-mono text-xs text-cyan-200 font-semibold">React Specialist</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              whileHover={{ scale: 1.08 }}
              className="absolute -bottom-3 -right-3 z-20 px-3.5 py-1.5 rounded-xl bg-[#0F172A]/90 border border-purple-400/40 backdrop-blur-md shadow-lg shadow-purple-500/20 flex items-center gap-2 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-purple-400" />
              <span className="font-mono text-xs text-purple-200 font-semibold">Tailwind & Laravel</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              whileHover={{ scale: 1.08 }}
              className="absolute top-1/2 -right-6 -translate-y-1/2 hidden sm:flex z-20 px-3 py-1.5 rounded-xl bg-[#0F172A]/90 border border-teal-400/40 backdrop-blur-md shadow-lg shadow-teal-500/20 flex items-center gap-2 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-teal-300" />
              <span className="font-mono text-xs text-teal-200 font-medium">99+ Lighthouse</span>
            </motion.div>

            {/* Main Cyber Card Window */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md rounded-2xl glass-panel p-5 sm:p-6 border border-cyan-500/30 relative overflow-hidden group shadow-2xl shadow-cyan-950/40"
            >
              
              {/* Scanline Animation Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent h-20 w-full animate-scanline pointer-events-none -z-0" />

              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                </div>
                <div className="font-mono text-[11px] text-slate-400 tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>averous_core.tsx</span>
                </div>
                <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  v3.2.0
                </div>
              </div>

              {/* Code Snippet Display */}
              <div className="font-mono text-xs space-y-2.5 leading-relaxed bg-[#05070E]/90 p-4 rounded-xl border border-slate-800/60 overflow-x-auto text-slate-300">
                <div className="text-slate-500">// Developer Profile Matrix</div>
                <div>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-cyan-300">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-300">"{personal.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">role:</span>{' '}
                  <span className="text-emerald-300">"{personal.role}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">coreStack:</span> [
                  <span className="text-amber-300">"React"</span>,{' '}
                  <span className="text-amber-300">"Tailwind"</span>,{' '}
                  <span className="text-amber-300">"Laravel"</span>,{' '}
                  <span className="text-amber-300">"Astro"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">passions:</span> [
                  <span className="text-amber-300">"Modern UI"</span>,{' '}
                  <span className="text-amber-300">"Clean Code"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">readyForHire:</span>{' '}
                  <span className="text-purple-400 font-bold">true</span>,
                </div>
                <div>&#125;;</div>
                
                <div className="pt-2 text-cyan-400/90 flex items-center gap-1.5">
                  <span className="text-slate-500">&gt;</span>
                  <span>developer.buildHighPerformanceWeb();</span>
                  <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse" />
                </div>
              </div>

              {/* Stats Bar Inside Card */}
              <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-800/80">
                {personal.stats.slice(0, 2).map((stat, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.03 }}
                    className="p-2.5 rounded-lg bg-[#0C111E] border border-slate-800/70 text-left transition-colors hover:border-cyan-500/40"
                  >
                    <div className="font-heading text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-slate-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
