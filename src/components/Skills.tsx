import { Code, Database, Palette, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      category: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "HTML5/CSS3"]
    },
    {
      icon: Database,
      category: "Backend Development",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"]
    },
    {
      icon: Settings,
      category: "Tools & Technologies",
      skills: ["Git/GitHub", "Firebase", "AWS", "Docker", "CI/CD", "Webpack"]
    },
    {
      icon: Palette,
      category: "Design & Collaboration",
      skills: ["UI/UX Principles", "Figma", "Responsive Design", "Agile/Scrum", "Team Leadership", "Client Communication"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expertise in modern technologies to build exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-xl border border-border hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--gradient-from))] to-[hsl(var(--gradient-to))] flex items-center justify-center flex-shrink-0">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{category.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-4 py-2 bg-[hsl(var(--primary-light))] text-primary rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
