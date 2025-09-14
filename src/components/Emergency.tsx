import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Clock } from "@/components/ui/icons";

const emergencyResources = [
  {
    title: "Crisis Helpline",
    description: "24/7 crisis intervention and emotional support",
    contact: "1-800-CRISIS",
    action: "Call Now",
    variant: "destructive" as const,
    icon: Phone,
  },
  {
    title: "Text Crisis Support", 
    description: "Crisis counseling via text message",
    contact: "Text HOME to 741741",
    action: "Text Now",
    variant: "warning" as const,
    icon: MessageCircle,
  },
  {
    title: "Find Local Help",
    description: "Locate nearby emergency services and hospitals",
    contact: "Emergency Services",
    action: "Find Services",
    variant: "default" as const,
    icon: MapPin,
  },
];

export function Emergency() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 text-destructive font-medium mb-4">
            <Clock className="h-5 w-5" />
            <span>Emergency Support</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Immediate Help Available
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If you're experiencing a mental health crisis or having thoughts of self-harm, 
            help is available right now. You don't have to face this alone.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {emergencyResources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <Card key={index} className="border-2 hover:shadow-large transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-foreground" />
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    {resource.description}
                  </p>
                  <div className="text-lg font-semibold text-foreground">
                    {resource.contact}
                  </div>
                  <Button variant={resource.variant} className="w-full" size="lg">
                    {resource.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Crisis? Call 988 - Suicide & Crisis Lifeline
          </h3>
          <p className="text-muted-foreground mb-6">
            The 988 Lifeline provides 24/7, free and confidential support for people in distress, 
            prevention and crisis resources for you or your loved ones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="destructive" size="lg" className="text-lg font-semibold">
              <Phone className="h-5 w-5" />
              Call 988 Now
            </Button>
            <Button variant="outline" size="lg">
              <MessageCircle className="h-5 w-5" />
              Chat Online
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}