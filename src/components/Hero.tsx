import { Button } from "@/components/ui/button";
import { Brain, ChevronRight } from "@/components/ui/icons";
import heroImage from "@/assets/hero-mental-health.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-soft py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-primary font-medium">
              <Brain className="h-5 w-5" />
              <span>Mind Sync - Mental Wellness Platform</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Mental Health
                <span className="block text-primary">Matters</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Get personalized support through our comprehensive assessment system. 
                Connect with professional counselors, join anonymous communities, 
                and access 24/7 emergency help when you need it most.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Take Assessment Test
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Get Emergency Help
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>100% Anonymous Options</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-large">
              <img 
                src={heroImage} 
                alt="Mental health support community with diverse students in a calming environment"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-medium">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Help Available</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-medium">
              <div className="text-2xl font-bold text-secondary">1000+</div>
              <div className="text-sm text-muted-foreground">Students Helped</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}