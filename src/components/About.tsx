import { Award, Users, Rocket, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Rocket,
      title: "5+ Years Experience",
      description: "Building scalable web applications"
    },
    {
      icon: Users,
      title: "10-50 Team Members",
      description: "Leading Absum Tech's talented crew"
    },
    {
      icon: Award,
      title: "50+ Projects",
      description: "Delivered with excellence"
    },
    {
      icon: Target,
      title: "100% Client Satisfaction",
      description: "Focused on quality & results"
    }
  ];

  return (
    <section id="about" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border">
            <p className="text-lg leading-relaxed mb-6">
              Hi, I'm <span className="font-bold text-primary">Ankit Nayka</span>, a passionate Full-Stack Developer specializing in the <span className="font-semibold">MERN stack</span> (MongoDB, Express, React, Node.js). I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              As the founder of <span className="font-bold text-primary">Absum Tech</span>, I lead a talented remote team of 10–50 developers and designers who are committed to delivering top-quality digital products. We focus on building fast, responsive, and scalable applications that drive real business results.
            </p>
            <p className="text-lg leading-relaxed">
              What sets me apart? I don't just write code—I solve problems. I work closely with clients to understand their needs, deliver on time, and ensure they're thrilled with the final product. Whether it's a complex web app or a sleek mobile interface, I bring dedication, expertise, and a genuine passion for technology to every project.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[hsl(var(--gradient-from))] to-[hsl(var(--gradient-to))] flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
