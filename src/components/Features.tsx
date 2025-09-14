import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Users, 
  Shield, 
  Phone, 
  Stethoscope, 
  UserCheck,
  ChevronRight 
} from "@/components/ui/icons";

const features = [
  {
    icon: Brain,
    title: "Personalized Assessment",
    description: "Complete stress, anxiety, and depression evaluation with tailored support recommendations based on your results.",
    gradient: "gradient-primary",
  },
  {
    icon: Users,
    title: "Anonymous Community",
    description: "Connect with peers in a safe, judgment-free space. Share experiences and get support without revealing your identity.",
    gradient: "gradient-secondary",
  },
  {
    icon: Stethoscope,
    title: "Professional Counseling",
    description: "Book sessions with licensed therapists and counselors. Choose between online and in-person appointments.",
    gradient: "gradient-accent",
  },
  {
    icon: Phone,
    title: "24/7 Emergency Help",
    description: "Immediate access to crisis support, helplines, and emergency resources when you need help right away.",
    gradient: "gradient-primary",
  },
  {
    icon: UserCheck,
    title: "Progress Tracking",
    description: "Monitor your mental health journey with mood tracking, personalized insights, and detailed progress reports.",
    gradient: "gradient-secondary",
  },
  {
    icon: Shield,
    title: "Complete Privacy",
    description: "Your data is secure and confidential. Choose between public and anonymous interactions at any time.",
    gradient: "gradient-accent",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Comprehensive Mental Health Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform offers a complete suite of tools and resources designed to support 
            your mental wellness journey, from assessment to recovery.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-medium transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-${feature.gradient} flex items-center justify-center`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="group-hover:text-primary p-0 h-auto font-medium"
                  >
                    Learn more
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}