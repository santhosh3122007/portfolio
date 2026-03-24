import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const certificates = [
  {
    name: 'Scaler Python Course',
    issuer: 'Scaler',
    icon: <Award className="w-8 h-8" />,
    color: 'bg-primary'
  },
  {
    name: 'Databricks Accredited Generative AI Fundamentals',
    issuer: 'Databricks Academy',
    icon: <Award className="w-8 h-8" />,
    color: 'bg-secondary'
  },
  {
    name: 'Building Production-Ready AI Agents with Amazon Bedrock AgentCore',
    issuer: 'AWS Training & Certification',
    icon: <Award className="w-8 h-8" />,
    color: 'bg-primary'
  },
  {
    name: 'Enterprise Design Thinking Practitioner',
    issuer: 'IBM',
    icon: <Award className="w-8 h-8" />,
    color: 'bg-secondary'
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 px-4 md:px-8 bg-background relative">
      <div className="container mx-auto">
        <div className="mb-20 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="max-w-4xl">
            <h2 className="text-6xl md:text-9xl font-anton uppercase tracking-tighter leading-none mb-4">
              CREDEN<span className="text-secondary">TIALS</span>
            </h2>
            <div className="h-8 w-1/2 bg-secondary/10 -mt-10 -ml-4 -z-10" />
          </div>
          <p className="max-w-md text-xl font-bold uppercase text-muted-foreground border-l-4 border-black pl-8">
            Continuous learning and skill validation through industry-recognized certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className={`group flex items-center p-8 brutalist-card transition-all hover:bg-muted`}
            >
              <div className={`p-6 ${cert.color} text-white brutalist-border brutalist-shadow rotate-[-3deg] group-hover:rotate-0 transition-all`}>
                {cert.icon}
              </div>
              <div className="ml-8 flex-1">
                <h3 className="text-2xl font-anton uppercase tracking-widest group-hover:text-primary transition-colors">{cert.name}</h3>
                <p className="text-lg font-bold uppercase text-muted-foreground mt-2">{cert.issuer}</p>
                <div className="flex items-center space-x-2 mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-anton uppercase tracking-widest text-sm">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative dots background pattern */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[radial-gradient(black_2px,transparent_0)] bg-[length:20px_20px] opacity-10 -z-10" />
    </section>
  );
};

export default Certificates;
