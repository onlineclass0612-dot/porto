import React, { useEffect, lazy, Suspense } from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';

// Lazy load offscreen sections for massive mobile performance boost
const AboutSection = lazy(() => import('./components/AboutSection').then(m => ({ default: m.AboutSection })));
const SkillsSection = lazy(() => import('./components/SkillsSection').then(m => ({ default: m.SkillsSection })));
const ProjectsSection = lazy(() => import('./components/ProjectsSection').then(m => ({ default: m.ProjectsSection })));
const ExperienceSection = lazy(() => import('./components/ExperienceSection').then(m => ({ default: m.ExperienceSection })));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const ContactSection = lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const CursorGlow = lazy(() => import('./components/CursorGlow').then(m => ({ default: m.CursorGlow })));

// Lightweight non-blocking placeholder
const SectionFallback = () => <div className="w-full min-h-[300px]" />;

export function App() {
  useEffect(() => {
    // Pastikan tema bersih di root element
    document.documentElement.classList.remove('light-theme');
    localStorage.removeItem('porto_theme');
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-cyan-500/30 selection:text-cyan-200 bg-[#06080F] text-slate-100">
      
      {/* Interactive Cyber Neon Glow Follower (Desktop only via lazy load) */}
      <Suspense fallback={null}>
        <CursorGlow />
      </Suspense>

      {/* Cyber Grid Background Matrix */}
      <div className="fixed inset-0 cyber-grid pointer-events-none z-0 opacity-80" />

      {/* Floating Radial Ambient Ambient Lights */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Main Content Sections */}
      <div className="relative z-10">
        <Navbar personal={portfolioData.personal} />

        <main>
          {/* Critical Above-the-fold Content (Instant FCP & LCP) */}
          <HeroSection personal={portfolioData.personal} />

          {/* Lazily Loaded Below-the-fold Sections (Zero TBT Penalty) */}
          <Suspense fallback={<SectionFallback />}>
            <AboutSection about={portfolioData.about} personal={portfolioData.personal} />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <SkillsSection skills={portfolioData.skills} />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <ProjectsSection projects={portfolioData.projects} />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <ExperienceSection 
              experiences={portfolioData.experiences} 
              education={portfolioData.education} 
            />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <TestimonialsSection testimonials={portfolioData.testimonials} />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <ContactSection personal={portfolioData.personal} />
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer personal={portfolioData.personal} />
        </Suspense>
      </div>

    </div>
  );
}

export default App;
