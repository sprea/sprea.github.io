
import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const FooterSection = () => (
  <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-border">
    <div className="container mx-auto max-w-4xl text-center">
      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">Contact me</h3>
      <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
        Feel free to contact me for more information or a personalized consultation via Linkedin or Email.
      </p>
      <div className="flex gap-4 sm:gap-6 justify-center mb-6 sm:mb-8">
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
      <p className="text-muted-foreground text-xs sm:text-sm">
        © 2025 Simone Spreafico. All rights reserved.
      </p>
    </div>
  </footer>
);

export default FooterSection;
