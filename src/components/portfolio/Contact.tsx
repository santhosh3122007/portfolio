import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/santhosh-e-811518385',
    icon: <Linkedin className="w-8 h-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />,
    color: 'bg-primary'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/santhosh3122007',
    icon: <Github className="w-8 h-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />,
    color: 'bg-secondary'
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/santhosh3122007/',
    icon: <img src="https://miaoda-conversation-file.s3cdn.medo.dev/user-81tilzfj9hj4/conv-9oyw985n0tfk/20260218/file-9ppifxtgyhaa.png" alt="LeetCode" className="w-14 h-14 object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mix-blend-screen brightness-125 group-hover:brightness-150" />,
    color: 'bg-primary'
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-muted relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <h2 className="text-6xl md:text-9xl font-anton uppercase tracking-tighter leading-none mb-8">
              SAY <span className="text-primary">HELLO</span>
            </h2>
            <p className="text-2xl md:text-3xl font-bold uppercase leading-tight mb-12 text-muted-foreground border-l-8 border-black pl-8 py-4">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-8 mb-16">
              <div className="flex items-center space-x-6 group">
                <div className="w-16 h-16 flex items-center justify-center bg-black text-white brutalist-border brutalist-shadow transition-all group-hover:bg-primary group-hover:scale-110">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Email me at</p>
                  <a href="mailto:santhosh0312007@gmail.com" className="text-2xl font-anton uppercase hover:text-primary transition-colors">
                    santhosh0312007@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-16 h-16 flex items-center justify-center bg-black text-white brutalist-border brutalist-shadow transition-all group-hover:bg-secondary group-hover:scale-110">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Call me at</p>
                  <a href="tel:9585484671" className="text-2xl font-anton uppercase hover:text-secondary transition-colors">
                    9585484671
                  </a>
                </div>
              </div>
            </div>

            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-16 h-16 flex items-center justify-center ${social.color} text-white brutalist-border brutalist-shadow transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:brutalist-shadow-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-background p-8 md:p-12 brutalist-card relative">
            {/* Absolute element to give it that sticker look */}
            <div className="absolute -top-6 -right-6 px-6 py-3 bg-secondary text-white font-anton text-xl uppercase tracking-widest brutalist-border rotate-6 shadow-xl">
              Message Me
            </div>
            
            <form className="space-y-8 mt-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Your Name</label>
                <Input 
                  placeholder="JOHN DOE" 
                  className="h-14 px-6 bg-muted border-2 border-black rounded-none font-bold uppercase tracking-widest focus-visible:ring-primary focus-visible:ring-offset-0"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Your Email</label>
                <Input 
                  placeholder="HELLO@EXAMPLE.COM" 
                  type="email"
                  className="h-14 px-6 bg-muted border-2 border-black rounded-none font-bold uppercase tracking-widest focus-visible:ring-primary focus-visible:ring-offset-0"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Your Message</label>
                <Textarea 
                  placeholder="TELL ME ABOUT YOUR PROJECT" 
                  className="min-h-[160px] p-6 bg-muted border-2 border-black rounded-none font-bold uppercase tracking-widest focus-visible:ring-primary focus-visible:ring-offset-0"
                />
              </div>
              <Button className="w-full h-20 text-2xl font-anton uppercase bg-primary text-white brutalist-shadow-lg brutalist-border rounded-none hover:bg-primary/90 hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all">
                Send Message <Send className="ml-2 w-6 h-6" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
