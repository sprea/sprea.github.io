
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Cloud, Code, ArrowDown } from "lucide-react";
import PersonalPhoto from "./PersonalPhoto";
import React from "react";

type HeroSectionProps = {
  scrollToSection: (sectionId: string) => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => (
  <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,theme(colors.primary/0.3),transparent)]"></div>
    </div>
    <div className="text-center max-w-4xl mx-auto relative z-10">
      <PersonalPhoto />
      
      <div className="mb-8 sm:mb-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent leading-tight">
          Simone Spreafico
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-6 sm:mb-8">
          Cybersecurity Analyst
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <Badge variant="secondary" className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            IT Security
          </Badge>
          <Badge variant="secondary" className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
            <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            DevSecOps
          </Badge>
          <Badge variant="secondary" className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
            <Cloud className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Cloud
          </Badge>
        </div>
        
        <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
          I received my bachelor's degree in Security of Information Systems and Networks (SSRI) from the University of Milan and have a strong interest in the world of information security. I am motivated to grow professionally by developing new technical skills.
        </p>
      </div>
      
      <div className="flex justify-center">
        <Button 
          onClick={() => scrollToSection("about")}
          size="lg"
          className="group relative px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-400 animate-slow-scale hover:animate-none"
        >
          <span className="flex items-center gap-2">
            About Me
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-450" />
          </span>
          <div className="absolute inset-0 bg-white/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
