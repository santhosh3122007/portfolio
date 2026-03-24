import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 md:px-8 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 blur-3xl rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 blur-3xl rounded-full -z-10 animate-pulse duration-5000" />
      
      {/* Decorative dots/lines */}
      <div className="absolute top-10 left-10 w-24 h-24 border-4 border-black/20 rotate-12 -z-10" />
      <div className="absolute bottom-20 right-20 w-32 h-32 border-8 border-primary/20 -rotate-12 -z-10" />

      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center space-x-2 bg-secondary/20 px-4 py-1 border-2 border-black brutalist-shadow text-sm font-bold uppercase tracking-widest text-secondary-foreground animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span>SNS College of Technology '29</span>
        </div>

        <h1 className="text-6xl md:text-9xl lg:text-[10rem] font-anton leading-none tracking-tighter mb-8 animate-slide-in">
          SANTHOSH <span className="gradient-text">E</span>
        </h1>

        <p className="text-xl md:text-3xl font-anton uppercase tracking-widest mb-12 max-w-2xl text-muted-foreground animate-fade-in delay-200">
          AI & ML STUDENT | DEVELOPER
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in delay-500">
          <Button
            asChild
            className="h-16 px-10 text-xl font-anton uppercase bg-primary text-white brutalist-shadow-lg brutalist-border rounded-none hover:bg-primary/90 hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all"
          >
            <a href="#projects">View Projects <ArrowRight className="ml-2 w-6 h-6" /></a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-16 px-10 text-xl font-anton uppercase bg-background text-primary brutalist-shadow-lg brutalist-border rounded-none hover:bg-muted hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all"
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        {/* Marquee effect */}
        <div className="absolute bottom-0 left-0 right-0 py-6 bg-black text-white overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee font-anton text-4xl uppercase tracking-widest">
            Python • Java • SQL • Machine Learning • Data Analysis • Web Development • Hand Gesture Recognition • Support Ticket Routing • Python • Java • SQL • Machine Learning • Data Analysis • Web Development • 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
