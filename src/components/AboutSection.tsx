
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import CVDownload from "./CVDownload";

type AboutSectionProps = {
  skills: string[];
};

const AboutSection: React.FC<AboutSectionProps> = ({ skills }) => (
  <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-primary">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div className="space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            I'm a dedicated cybersecurity professional with extensive experience in information security, 
            DevSecOps, and cloud operations. My passion lies in building secure, scalable infrastructures 
            that protect organizations from evolving cyber threats.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            With a strong background in both technical implementation and strategic security planning, 
            I help organizations integrate security into every aspect of their operations, from development 
            to deployment and beyond.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            I believe in a proactive approach to cybersecurity, focusing on prevention, detection, 
            and rapid response to ensure business continuity and data protection.
          </p>

          {/* CV Download */}
          <div className="pt-4">
            <CVDownload />
          </div>
          
          {/* Social Links */}
          <div className="pt-4">
            <h4 className="text-lg font-semibold mb-4 text-primary">Connect with me</h4>
            <div className="flex gap-4 sm:gap-6">
              <a 
                href="https://www.linkedin.com/in/simone-spreafico/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 sm:p-3 rounded-full hover:bg-accent"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://github.com/sprea" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 sm:p-3 rounded-full hover:bg-accent"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="mailto:simone.spreafico@protonmail.com"
                className="text-muted-foreground hover:text-primary transition-colors p-2 sm:p-3 rounded-full hover:bg-accent"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="hover:bg-primary hover:text-primary-foreground transition-colors text-xs sm:text-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
