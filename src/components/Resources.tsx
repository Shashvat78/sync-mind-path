import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Play, Users, Calendar } from "@/components/ui/icons";

const resources = [
  {
    icon: BookOpen,
    title: "Educational Articles",
    description: "Evidence-based articles on mental health topics, coping strategies, and wellness tips.",
    count: "200+ Articles",
    color: "bg-gradient-primary",
  },
  {
    icon: Play,
    title: "Guided Exercises",
    description: "Meditation, breathing exercises, and mindfulness practices for stress relief.",
    count: "50+ Videos",
    color: "bg-gradient-secondary", 
  },
  {
    icon: Users,
    title: "Support Groups",
    description: "Join topic-specific support groups and connect with others facing similar challenges.",
    count: "15+ Groups",
    color: "bg-gradient-accent",
  },
  {
    icon: Calendar,
    title: "Wellness Workshops",
    description: "Interactive workshops on stress management, anxiety coping, and building resilience.",
    count: "Weekly Events",
    color: "bg-gradient-primary",
  },
];

export function Resources() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Mental Health Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access our comprehensive library of mental health resources, from educational 
            content to interactive exercises and community support.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-2xl ${resource.color} flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {resource.description}
                  </p>
                  <div className="text-primary font-semibold">
                    {resource.count}
                  </div>
                  <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary">
                    Explore
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="secondary" size="lg">
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
}