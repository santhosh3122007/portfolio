import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Hand Gesture Recognition Project',
    company: 'Self-Directed / Academic',
    period: '2024 - Present',
    description: 'Developed a real-time hand gesture recognition system using OpenCV and Python. This project involved deep learning models for accurate detection and classification.',
    icon: <Briefcase className="w-8 h-8" />
  },
  {
    title: 'Hackathon Collaborator',
    company: 'SNS College of Technology',
    period: '2024',
    description: 'Participated in two hackathons and contributed to developing functional prototypes through teamwork. Focused on AI applications and rapid frontend development.',
    icon: <Briefcase className="w-8 h-8" />
  },
  {
    title: 'Club Activities & Coding Events',
    company: 'SNS College of Technology',
    period: '2025 - Present',
    description: 'Participated in coding events and contributed to club activities. Worked with programming and database concepts to build core logic for various internal projects.',
    icon: <Briefcase className="w-8 h-8" />
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 md:px-8 bg-muted relative overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="inline-block px-8 py-4 bg-primary text-white font-anton text-2xl uppercase tracking-widest brutalist-border brutalist-shadow mb-8">
            Experience & Activities
          </div>
          <h2 className="text-5xl md:text-8xl font-anton uppercase tracking-tighter mb-4 max-w-4xl">
            MY JOURNEY THROUGH <span className="text-primary">TECH</span>
          </h2>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="hidden md:flex flex-col items-center pt-2">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center brutalist-border brutalist-shadow transition-all group-hover:bg-primary group-hover:scale-110">
                  {exp.icon}
                </div>
                <div className="w-1 h-full bg-black/10 min-h-[100px] mt-4" />
              </div>
              
              <div className="flex-1 bg-background p-8 brutalist-card transition-all">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
                  <div>
                    <h3 className="text-3xl font-anton uppercase tracking-tighter group-hover:text-primary transition-colors">{exp.title}</h3>
                    <p className="text-xl font-bold uppercase text-primary tracking-widest mt-2">{exp.company}</p>
                  </div>
                  <div className="inline-flex items-center px-4 py-2 bg-muted brutalist-border font-anton text-lg">
                    <Calendar className="w-5 h-5 mr-2" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-xl leading-relaxed text-muted-foreground font-medium">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 right-10 h-full w-4 bg-primary/5 -z-10" />
      <div className="absolute top-0 right-20 h-full w-1 bg-black/5 -z-10" />
    </section>
  );
};

export default Experience;
