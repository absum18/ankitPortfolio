import { Code2, Smartphone, Plug, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies. From landing pages to complex SaaS platforms, I create fast, responsive, and SEO-friendly solutions.",
      features: ["React & Next.js", "MERN Stack", "Responsive Design", "SEO Optimization"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native. Build once, deploy everywhere with native performance and smooth user experiences.",
      features: ["React Native", "iOS & Android", "Native Features", "App Store Deployment"]
    },
    {
      icon: Plug,
      title: "API Integration",
      description: "Seamless integration with third-party services and APIs. Connect your application with payment gateways, social media, and business tools.",
      features: ["REST APIs", "GraphQL", "Payment Gateway", "Third-party Services"]
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your applications running smoothly. Bug fixes, updates, performance optimization, and feature enhancements.",
      features: ["Bug Fixes", "Performance Tuning", "Security Updates", "Feature Updates"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services <span className="gradient-text">I Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            End-to-end development solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-xl border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[hsl(var(--gradient-from))] to-[hsl(var(--gradient-to))] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
