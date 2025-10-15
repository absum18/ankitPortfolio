import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
      }`}
    >
      <Button
        size="lg"
        variant="hero"
        onClick={scrollToContact}
        className="shadow-2xl hover:shadow-3xl rounded-full px-6 animate-pulse hover:animate-none"
      >
        <Briefcase className="mr-2" />
        Hire Me
      </Button>
    </div>
  );
};

export default FloatingCTA;
