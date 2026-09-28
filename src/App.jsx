import React, { useEffect, lazy, Suspense } from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';

// Below-the-fold sections loaded asynchronously to maximize Main Thread availability & slash TBT
const AboutSection = lazy(() => import('./components/AboutSection').then(m => ({ default: m.AboutSection })));
const SkillsSection = lazy(() => import('./components/SkillsSection').then(m => ({ default: m.SkillsSection })));
const ProjectsSection = lazy(() => import('./components/ProjectsSection').then(m => ({ default: m.ProjectsSection })));
const ExperienceSection = lazy(() => import('./components/ExperienceSection').then(m => ({ default: m.ExperienceSection })));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const ContactSection = lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const CursorGlow = lazy(() => import('./components/CursorGlow').then(m => ({ default: m.CursorGlow })));

// ID-preserving skeleton fallback guarantees anchors and document.getElementById never fail
const SectionFallback = ({ id, minHeight = "min-h-[450px]" }) => (
  <section id={id} className={`w-full ${minHeight} scroll-mt-24`} />
);

export function App() {
  useEffect(() => {
    // Pastikan tema bersih di root element
    document.documentElement.classList.remove('light-theme');
    localStorage.removeItem('porto_theme');
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-cyan-500/30 selection:text-cyan-200 bg-[#06080F] text-slate-100">
      
      {/* Interactive Cyber Neon Glow Follower (Desktop only via deferred lazy load) */}
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
          {/* Above-the-fold Hero rendered immediately for instant FCP & zero TBT */}
          <HeroSection personal={portfolioData.personal} />

          <Suspense fallback={<SectionFallback id="about" minHeight="min-h-[500px]" />}>
            <AboutSection about={portfolioData.about} personal={portfolioData.personal} />
          </Suspense>

          <Suspense fallback={<SectionFallback id="skills" minHeight="min-h-[450px]" />}>
            <SkillsSection skills={portfolioData.skills} />
          </Suspense>

          <Suspense fallback={<SectionFallback id="projects" minHeight="min-h-[600px]" />}>
            <ProjectsSection projects={portfolioData.projects} />
          </Suspense>

          <Suspense fallback={<SectionFallback id="experience" minHeight="min-h-[550px]" />}>
            <ExperienceSection 
              experiences={portfolioData.experiences} 
              education={portfolioData.education} 
            />
          </Suspense>

          <Suspense fallback={<SectionFallback id="testimonials" minHeight="min-h-[350px]" />}>
            <TestimonialsSection testimonials={portfolioData.testimonials} />
          </Suspense>

          <Suspense fallback={<SectionFallback id="contact" minHeight="min-h-[600px]" />}>
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


