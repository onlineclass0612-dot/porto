import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-3 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider uppercase">
            <span>// 05. SOCIAL PROOF & ENDORSEMENTS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-100">
            Apa Kata <span className="cyber-gradient-text">Kolaborator & Klien</span>
          </h2>
        </motion.div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/40 relative flex flex-col justify-between space-y-6 text-left group shadow-lg"
            >
              {/* Top Quote Icon & Stars */}
              <div className="flex items-center justify-between">
                <Quote className="w-8 h-8 text-cyan-400/40 group-hover:text-cyan-400 transition-colors" />
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                "{item.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400/50 shadow-md shadow-cyan-500/20"
                />
                <div>
                  <h4 className="font-heading font-bold text-slate-100 text-sm sm:text-base">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
