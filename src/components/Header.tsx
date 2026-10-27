import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0c0e]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-[#0b0c0e]/80 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Site Logo / Wordmark */}
        <a
          href="#hero"
          onClick={scrollTo('hero')}
          className="text-xl font-black tracking-tight text-white flex items-center gap-0.5 hover:opacity-90 hover:scale-[1.02] transition-transform duration-200"
        >
          SIKDER
          <span className="text-[#F5C725] text-2xl leading-none animate-pulse">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="flex items-center space-x-8 text-sm font-medium text-gray-400">
          <a
            href="#work"
            onClick={scrollTo('work')}
            className="hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            Work
          </a>
          <a
            href="#skills"
            onClick={scrollTo('skills')}
            className="hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            Skills
          </a>
          <a
            href="#about"
            onClick={scrollTo('about')}
            className="hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={scrollTo('contact')}
            className="hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
