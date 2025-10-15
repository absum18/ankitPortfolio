import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/ankit.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary-dark))]/95 via-[hsl(var(--primary-dark))]/90 to-[hsl(var(--gradient-to))]/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-white space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                👋 Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              I Build <span className="gradient-text bg-gradient-to-r from-blue-400 to-purple-400">Scalable Web Apps</span> That Drive Results
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
              Full-Stack MERN Developer & Founder of Absum Tech. Creating fast, responsive, and user-friendly digital experiences.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="xl" 
                variant="hero"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Work Together <ArrowRight className="ml-2" />
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:contact@absumtech.com"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--gradient-from))] to-[hsl(var(--gradient-to))] rounded-full blur-2xl opacity-50 animate-pulse" />
              <img 
                src={profileImg} 
                alt="Ankit Nayka" 
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-white/20 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
