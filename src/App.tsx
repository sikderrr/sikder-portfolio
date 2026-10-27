import React, { useState, useEffect } from 'react';
import { AmbientSpotlight } from './components/AmbientSpotlight';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Work } from './components/Work';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './data/projects';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    // Setup entrance reveal observer if supported
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal-item').forEach((el) => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const items = document.querySelectorAll('.reveal-item');
    items.forEach((el, index) => {
      (el as HTMLElement).style.transitionDelay = `${Math.min(index * 0.1, 0.3)}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans antialiased text-gray-100 selection:bg-[#F5C725] selection:text-black relative min-h-screen bg-[#0b0c0e]">
      {/* Ambient Spotlight Follower Layer */}
      <AmbientSpotlight />

      {/* Main Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="max-w-6xl mx-auto px-6 relative z-10">
        <Hero />
        <Skills />
        <Work onSelectProject={setSelectedProject} />
        <About />
        <Contact />
      </main>

      {/* Main Footer */}
      <Footer />

      {/* Project Lightbox Dialog Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
