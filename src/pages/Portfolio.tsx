import React, { useEffect } from 'react';
import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Experience from '@/components/portfolio/Experience';
import Certificates from '@/components/portfolio/Certificates';
import Contact from '@/components/portfolio/Contact';

const Portfolio = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      
      <footer className="py-12 px-4 md:px-8 bg-black text-white brutalist-border-t border-t-8 border-black">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div>
            <h2 className="text-4xl font-anton uppercase tracking-tighter mb-2">
              Santhosh <span className="text-primary">E</span>
            </h2>
            <p className="text-lg font-bold uppercase tracking-widest text-muted-foreground">
              AI & ML Student | Developer
            </p>
          </div>
          
          <div className="flex space-x-8">
            <a href="https://github.com/santhosh3122007" target="_blank" rel="noopener noreferrer" className="text-sm font-anton uppercase tracking-widest hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/santhosh-e-811518385" target="_blank" rel="noopener noreferrer" className="text-sm font-anton uppercase tracking-widest hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="https://leetcode.com/u/santhosh3122007/" target="_blank" rel="noopener noreferrer" className="text-sm font-anton uppercase tracking-widest hover:text-primary transition-colors">
              LeetCode
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              &copy; 2026 Santhosh E Portfolio • All Rights Reserved
            </p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary mt-2">
              Designed with Brutalist Aesthetics
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
