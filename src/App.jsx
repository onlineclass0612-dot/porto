import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('porto_theme');
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'light') {
        document.documentElement.classList.add('light-theme');
      } else {
        document.documentElement.classList.remove('light-theme');
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('porto_theme', newTheme);

    if (newTheme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  };

  return (
    <div className={`min-h-screen relative selection:bg-cyan-500/30 selection:text-cyan-200 ${theme === 'light' ? 'light-theme' : ''}`}>
      
      {/* Cyber Grid Background Matrix */}
      <div className="fixed inset-0 cyber-grid pointer-events-none z-0 opacity-80" />

      {/* Floating Radial Ambient Ambient Lights */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Main Content Sections */}
      <div className="relative z-10">
        <Navbar 
          theme={theme} 
          toggleTheme={toggleTheme} 
          personal={portfolioData.personal} 
        />

        <main>
          <HeroSection personal={portfolioData.personal} />
          <AboutSection about={portfolioData.about} personal={portfolioData.personal} />
          <SkillsSection skills={portfolioData.skills} />
          <ProjectsSection projects={portfolioData.projects} />
          <ExperienceSection 
            experiences={portfolioData.experiences} 
            education={portfolioData.education} 
          />
          <TestimonialsSection testimonials={portfolioData.testimonials} />
          <ContactSection personal={portfolioData.personal} />
        </main>

        <Footer personal={portfolioData.personal} />
      </div>

    </div>
  );
}

export default App;
