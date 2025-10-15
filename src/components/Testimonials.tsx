import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "Ankit delivered our e-commerce platform ahead of schedule and exceeded all expectations. His attention to detail and problem-solving skills are exceptional. Highly recommend!",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      name: "Michael Chen",
      role: "Founder, HealthCare Solutions",
      content: "Working with Ankit was a game-changer for our startup. He built a scalable healthcare platform that our users love. Professional, responsive, and incredibly talented.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, EduTech",
      content: "The learning management system Ankit built for us has transformed how we deliver education. Fast, reliable, and beautifully designed. Couldn't ask for better!",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
    },
    {
      name: "David Park",
      role: "Director, Real Estate Group",
      content: "Ankit's expertise in the MERN stack is outstanding. He built our property marketplace from scratch and continues to provide excellent support. A true professional.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take my word for it—here's what my clients say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-xl border border-border hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
              
              <p className="text-lg leading-relaxed mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-primary"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
