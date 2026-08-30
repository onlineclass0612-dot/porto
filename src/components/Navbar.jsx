import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Sparkles } from 'lucide-react';

export const Navbar = ({ personal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section calculation
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#06080F]/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-950/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <motion.a 
          href="#home" 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 p-[1.5px] transition-transform group-hover:scale-105 shadow-md shadow-cyan-500/20">
            <div className="w-full h-full bg-[#07090E] rounded-[10px] flex items-center justify-center">
              <span className="font-mono font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                A
              </span>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-heading font-bold text-lg tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              {personal.name}
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            </span>
            <span className="font-mono text-[10px] tracking-widest text-cyan-400/80 uppercase">
              // {personal.role}
            </span>
          </div>
        </motion.a>

        {/* Desktop Nav Links with Sliding Active Pill */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-[#0E1322]/70 backdrop-blur-md border border-slate-800/80 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${
                  isActive
                    ? 'text-cyan-300'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/40 shadow-sm shadow-cyan-500/30 -z-10"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions (CTA) */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 shadow-md shadow-cyan-500/25"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            <span>Hire Me</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-400 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pt-3 pb-6 bg-[#090D18]/95 backdrop-blur-2xl border-b border-cyan-500/20 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-800 flex gap-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-2.5 rounded-xl text-center text-xs font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-950 shadow-md shadow-cyan-500/20"
                >
                  Let's Talk
                </a>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl text-center text-xs font-medium border border-slate-700 text-slate-300 flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>CV</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
