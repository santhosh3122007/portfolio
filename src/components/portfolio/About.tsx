import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/3 relative group">
            <div className="w-full aspect-square bg-primary brutalist-border brutalist-shadow-lg rotate-3 group-hover:rotate-6 transition-transform duration-500 overflow-hidden">
              <div className="w-full h-full bg-secondary rotate-12 -translate-x-12 translate-y-12 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center font-anton text-9xl text-white opacity-20 select-none">
                AI
              </div>
            </div>
            {/* Background geometric shape */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-secondary -z-10 -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
          </div>

          <div className="w-full lg:w-2/3">
            <div className="mb-8 relative inline-block">
              <h2 className="text-5xl md:text-7xl font-anton uppercase tracking-tighter mb-4">
                ABOUT <span className="text-primary">ME</span>
              </h2>
              <div className="absolute -bottom-2 left-0 w-full h-4 bg-primary/20 -z-10" />
            </div>

            <p className="text-xl md:text-2xl font-bold uppercase leading-relaxed mb-8 text-muted-foreground border-l-8 border-black pl-8 py-4">
              I am a motivated Artificial Intelligence and Machine Learning student with a strong interest in building intelligent systems that solve real-world problems.
            </p>

            <div className="space-y-6 text-lg font-medium leading-relaxed">
              <p>
                Currently pursuing BTech in AI & ML at SNS College of Technology (2025-2029). I have hands-on experience with Python, Java, SQL, data analysis, and machine learning models, along with exposure to web and application deployment.
              </p>
              <p>
                My passion lies in exploring the intersections of data science and real-world impact, constantly seeking to push the boundaries of what's possible with intelligent software.
              </p>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-4">
              <div className="bg-primary/10 px-6 py-3 brutalist-border font-anton text-primary text-xl uppercase tracking-widest">
                Problem Solver
              </div>
              <div className="bg-secondary/10 px-6 py-3 brutalist-border font-anton text-secondary text-xl uppercase tracking-widest">
                Python Expert
              </div>
              <div className="bg-black text-white px-6 py-3 brutalist-border font-anton text-xl uppercase tracking-widest">
                AI Enthusiast
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
