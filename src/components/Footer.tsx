import { Brain, Mail, Phone, MapPin } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export function Footer() {
  const quickLinks = [
    "Assessment Test",
    "Find Counselors", 
    "Support Groups",
    "Crisis Help",
  ];
  
  const resources = [
    "Mental Health Articles",
    "Meditation Guides", 
    "Wellness Videos",
    "Recovery Stories",
  ];
  
  const support = [
    "Contact Us",
    "Privacy Policy",
    "Terms of Service", 
    "Accessibility",
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Mind Sync</span>
            </div>
            <p className="text-white/80">
              Supporting mental health and wellbeing through comprehensive assessment, 
              community support, and professional resources.
            </p>
            <div className="space-y-2 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Crisis Line: 988</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@mindsync.com</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Emergency Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="bg-destructive/20 rounded-xl p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">Need Immediate Help?</h3>
            <p className="text-white/80 mb-4">
              If you're having thoughts of suicide or self-harm, reach out for help immediately.
            </p>
            <Button variant="destructive" className="bg-destructive hover:bg-destructive/90">
              <Phone className="h-4 w-4" />
              Call 988 Crisis Line
            </Button>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Mind Sync. All rights reserved. Supporting mental health and wellness.</p>
        </div>
      </div>
    </footer>
  );
}