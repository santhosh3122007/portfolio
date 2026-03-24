import React from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  Terminal, 
  Code2, 
  Database, 
  Table, 
  Github, 
  BrainCircuit, 
  Lightbulb, 
  Users, 
  LineChart, 
  MessageSquare
} from 'lucide-react';

const technicalSkills = [
  { name: 'Python', icon: <Terminal className="w-6 h-6" />, color: 'bg-primary' },
  { name: 'Java', icon: <Code2 className="w-6 h-6" />, color: 'bg-secondary' },
  { name: 'HTML', icon: <Code2 className="w-6 h-6" />, color: 'bg-primary' },
  { name: 'CSS', icon: <Code2 className="w-6 h-6" />, color: 'bg-secondary' },
  { name: 'JavaScript', icon: <Code2 className="w-6 h-6" />, color: 'bg-primary' },
  { name: 'SQL', icon: <Database className="w-6 h-6" />, color: 'bg-secondary' },
  { name: 'Excel', icon: <Table className="w-6 h-6" />, color: 'bg-primary' },
  { name: 'Git & GitHub', icon: <Github className="w-6 h-6" />, color: 'bg-secondary' },
];

const softSkills = [
  { name: 'Problem Solving', icon: <BrainCircuit className="w-6 h-6" /> },
  { name: 'Critical Thinking', icon: <Lightbulb className="w-6 h-6" /> },
  { name: 'Communication', icon: <MessageSquare className="w-6 h-6" /> },
  { name: 'Team Collaboration', icon: <Users className="w-6 h-6" /> },
  { name: 'Analytical Thinking', icon: <LineChart className="w-6 h-6" /> },
];

const SkillCard = ({ name, icon, color }: { name: string; icon: React.ReactNode; color?: string }) => (
  <div className={`group relative p-8 brutalist-card ${color || 'bg-background'} transition-all`}>
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="p-4 bg-black text-white brutalist-border rounded-none group-hover:bg-primary transition-colors">
        {icon}
      </div>
      <h3 className="font-anton text-2xl uppercase tracking-widest">{name}</h3>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 md:px-8 bg-muted relative">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="relative">
            <h2 className="text-5xl md:text-8xl font-anton uppercase tracking-tighter mb-4 leading-none">
              TECHNICAL <br /> <span className="text-primary">TOOLKIT</span>
            </h2>
            <div className="absolute -bottom-4 left-0 w-3/4 h-8 bg-secondary/10 -z-10" />
          </div>
          <p className="max-w-md text-xl font-bold uppercase text-muted-foreground border-b-4 border-black pb-4">
            Mastering the languages of the future to build intelligent systems today.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {technicalSkills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>

        <div className="mb-16 relative">
          <h2 className="text-5xl md:text-8xl font-anton uppercase tracking-tighter mb-4 leading-none">
            SOFT <span className="text-secondary">POWERS</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {softSkills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center space-y-2 group">
              <div className="w-24 h-24 flex items-center justify-center bg-black text-white brutalist-border brutalist-shadow rotate-3 group-hover:rotate-12 transition-all">
                {skill.icon}
              </div>
              <span className="font-anton text-xl uppercase tracking-widest mt-4 group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative vertical line */}
      <div className="absolute top-0 right-1/4 h-full w-2 bg-black opacity-10 -z-10" />
    </section>
  );
};

export default Skills;
