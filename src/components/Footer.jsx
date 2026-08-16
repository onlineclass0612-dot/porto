import React from 'react';
import { ArrowUp, Mail, Heart, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';


export const Footer = ({ personal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04060B] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      
      {/* Background Top Subtle Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900 items-center justify-between">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3 text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-purple-600 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#07090E] rounded-[7px] flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
                  A
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-slate-100">
                {personal.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Frontend Developer yang berdedikasi membangun aplikasi web modern, cepat, dan estetis menggunakan React, Tailwind CSS, dan ekosistem Laravel.
            </p>
          </div>

          {/* Quick Nav & Socials */}
          <div className="md:col-span-6 flex flex-col md:items-end gap-4">
            {/* Quick Links */}
            <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-400">
              <a href="#home" className="hover:text-cyan-300 transition-colors">Home</a>
              <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
              <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
              <a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a>
              <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-purple-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>

              {/* Scroll To Top */}
              <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 transition-all duration-200"
                title="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with</span>
            <span className="text-cyan-400">React</span>
            <span>+</span>
            <span className="text-purple-400">Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
