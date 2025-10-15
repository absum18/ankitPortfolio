import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--primary-dark))] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
         
          
          <div className="text-muted-foreground text-sm text">
            © {currentYear} Ankit Nayka. All rights reserved...yexx
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
