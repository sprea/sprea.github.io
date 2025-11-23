
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";

type NavigationBarProps = {
  activeSection: string;
  setActiveSection: (v: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (v: boolean) => void;
  scrollToSection: (sectionId: string) => void;
  navigationItems: string[];
};

const NavigationBar: React.FC<NavigationBarProps> = ({
  activeSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  scrollToSection,
  navigationItems,
}) => (
  <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
    <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
      <div className="flex items-center justify-between">
        <div className="text-lg sm:text-xl font-bold text-primary">
          Simone Spreafico
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex space-x-6 lg:space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.toLowerCase() ? "text-primary" : "text-muted-foreground"
                }`}>
                {item}
              </button>
            ))}
          </div>
          <ThemeToggle />
        </div>
        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-left text-lg font-medium transition-colors hover:text-primary p-2 rounded-md ${
                      activeSection === item.toLowerCase() ? "text-primary bg-accent" : "text-muted-foreground"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  </nav>
);

export default NavigationBar;
