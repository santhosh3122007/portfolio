import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Globe, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Support Ticket Routing Website',
    description: 'Built a responsive website for efficient ticket routing with organized UI and core functional features. Focuses on seamless user interaction and automated backend routing logic.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_48e5f22e-adbd-47be-a446-bb30f0a7b319.jpg',
    link: '#',
    github: 'https://github.com/santhosh3122007'
  },
  {
    title: 'Hand Gesture Recognition System',
    description: 'Developed a real-time gesture recognition system using OpenCV. It interprets hand movements to control computer interfaces or devices, enhancing human-computer interaction.',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_190c9ad0-8ba7-4e1d-b5d6-6d2b9d758e3c.jpg',
    link: '#',
    github: 'https://github.com/santhosh3122007'
  },
  {
    title: 'Hackathon Prototype Projects',
    description: 'Collaborated in two hackathons to create working prototypes. These projects involved rapid development and creative problem solving within tight time constraints.',
    tags: ['Hackathon', 'Prototype', 'Teamwork', 'Innovation'],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_12a4ee64-4371-4f0c-9b59-38c1f01787d7.jpg',
    link: '#',
    github: 'https://github.com/santhosh3122007'
  }
];

const ProjectCard = ({ title, description, tags, image, link, github }: any) => (
  <div className="group relative bg-card brutalist-border brutalist-shadow-lg overflow-hidden transition-all hover:translate-x-[-8px] hover:translate-y-[-8px] hover:brutalist-shadow-xl hover:bg-muted active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
    <div className="h-64 overflow-hidden border-b-4 border-black relative">
      <img src={image} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" />
      <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
      <div className="absolute top-4 right-4 bg-black text-white px-4 py-1 font-anton text-sm uppercase tracking-widest brutalist-border">
        {tags[0]}
      </div>
    </div>
    <div className="p-8">
      <h3 className="text-3xl font-anton uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground font-medium mb-6 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag: string) => (
          <Badge key={tag} variant="outline" className="rounded-none border-2 border-black font-bold uppercase tracking-widest py-1 px-3">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="flex items-center space-x-6 pt-4 border-t-2 border-black/10">
        <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 font-anton uppercase text-lg hover:text-primary transition-colors">
          <Github className="w-5 h-5" />
          <span>Code</span>
        </a>
        <a href={link} className="flex items-center space-x-2 font-anton uppercase text-lg hover:text-primary transition-colors">
          <ExternalLink className="w-5 h-5" />
          <span>Demo</span>
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-20 flex flex-col md:flex-row items-baseline gap-4 border-b-8 border-black pb-8">
          <h2 className="text-6xl md:text-[10rem] font-anton leading-none tracking-tighter uppercase">
            FEA<span className="text-primary">TURED</span> <br /> PROJECTS
          </h2>
          <div className="mt-4 md:mt-0 md:ml-auto max-w-sm">
            <p className="text-xl font-bold uppercase italic text-muted-foreground">
              A selection of my recent work in development and AI experimentation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
      
      {/* Decorative vertical divider line */}
      <div className="hidden lg:block absolute left-1/2 top-0 h-full w-4 bg-primary/10 -z-10 -translate-x-1/2" />
    </section>
  );
};

export default Projects;
