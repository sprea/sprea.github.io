
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
};

type ProjectsSectionProps = {
  projects: Project[];
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => (
  <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-muted/30">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-primary">Personal Projects</h2>
      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="border-border hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="text-primary flex items-center justify-between text-lg sm:text-xl">
                <span className="truncate pr-2">{project.title}</span>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex} 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-xs sm:text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8 sm:mt-12">
        <Button 
          variant="outline" 
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
          asChild
        >
          <a href="https://github.com/sprea" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
