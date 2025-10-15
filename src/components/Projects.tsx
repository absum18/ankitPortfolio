import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management SaaS",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Healthcare Portal",
      description: "Patient management system with appointment scheduling, medical records, and telemedicine capabilities.",
      tags: ["React", "Express", "MongoDB", "Firebase"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real Estate Marketplace",
      description: "Property listing platform with advanced search filters, virtual tours, and integrated messaging system.",
      tags: ["Next.js", "Node.js", "MySQL", "AWS S3"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics and content management tool for managing multiple social media accounts with scheduling features.",
      tags: ["React", "GraphQL", "MongoDB", "Redis"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course management, video streaming, assessments, and student progress tracking.",
      tags: ["MERN Stack", "JWT", "Cloudinary", "Razorpay"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my best work—real solutions for real clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-xl border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary-dark))]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  <Button size="sm" variant="hero" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" /> Code
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-[hsl(var(--primary-light))] text-primary rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
