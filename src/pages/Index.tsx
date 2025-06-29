import { useState, useEffect } from "react";
import { Shield, Cloud, Code, Eye, Server, Fingerprint } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";
import NavigationBar from "@/components/NavigationBar";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "services", "projects"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const skills = [
    "Information Security", "DevSecOps", "Cloud Security", "Incident Response",
    "Vulnerability Assessment", "IAM", "FAM", "Penetration Testing", "Security Auditing",
    "Risk Assessment", "AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Jenkins", "Gnu/Linux",
    "Python", "Bash", "JS", "Rust", "PowerShell", "SIEM", "IDS/IPS", "Firewall Management"
  ];

  const services = [
    {
      title: "Security Assessment",
      description: "Comprehensive security audits and vulnerability assessments to identify and mitigate risks in your infrastructure.",
      icon: Shield
    },
    {
      title: "DevSecOps Implementation",
      description: "Integration of security practices into your DevOps pipeline, ensuring security from development to deployment.",
      icon: Code
    },
    {
      title: "Cloud Security",
      description: "Expert guidance on securing cloud infrastructures, implementing best practices for AWS, Azure, GCP, and multi-cloud environments.",
      icon: Cloud
    },
    {
      title: "Identity Access Management",
      description: "Provides tailored Identity and Access Management (IAM) solutions to help businesses securely manage user identities, access permissions, and compliance across their IT systems.",
      icon: Fingerprint
    },
    {
      title: "Incident Response",
      description: "Rapid response to security incidents, forensic analysis, and implementation of preventive measures.",
      icon: Eye
    },
    {
      title: "Security Training",
      description: "Customized security awareness training for teams and organizations to build a security-first culture.",
      icon: Server
    }
  ];

  const projects = [
    {
      title: "Stonewall",
      description: "Cross-platform desktop application that helps you study and memorize chess openings",
      tech: ["Rust", "Typescript", "Tauri"],
      github: "https://github.com/sprea/stonewall"
    },
    {
      title: "Ciclocomputerino",
      description: "Cyclocomputer made with Arduino - embedded systems course project",
      tech: ["Arduino", "electronics"],
      github: "https://github.com/sprea/ciclocomputerino"
    }
  ];

  const navigationItems = ["Home", "About", "Experience", "Services", "Projects"];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <NavigationBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        scrollToSection={scrollToSection}
        navigationItems={navigationItems}
      />
      <HeroSection 
        scrollToSection={scrollToSection} 
      />
      <AboutSection skills={skills} />
      <ExperienceSection />
      <ServicesSection services={services} />
      <ProjectsSection projects={projects} />
      <FooterSection />
    </div>
  );
};

export default Index;
