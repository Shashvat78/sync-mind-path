import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "@/components/ui/icons";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Assessment", href: "#assessment" },
    { name: "Resources", href: "#resources" },
    { name: "Community", href: "#community" },
    { name: "Emergency", href: "#emergency" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Mind Sync</span>
          </div>
          
          {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="/assessment" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Assessment
              </a>
              <a href="/resources" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Resources
              </a>
              <a href="/community" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Community
              </a>
              <a href="/emergency" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Emergency
              </a>
            </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="default">Get Started</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col space-y-4">
              <a href="/assessment" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Assessment
              </a>
              <a href="/resources" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Resources
              </a>
              <a href="/community" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Community
              </a>
              <a href="/emergency" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Emergency
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost">Sign In</Button>
                <Button variant="default">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}