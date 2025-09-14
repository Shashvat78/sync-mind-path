import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Heart,
  Shield,
  AlertTriangle,
  Users,
  ChevronRight,
  BookOpen
} from "@/components/ui/icons";

const emergencyContacts = [
  {
    title: "988 Suicide & Crisis Lifeline",
    description: "24/7 crisis intervention and emotional support",
    contact: "Call or Text 988",
    action: "Get Help Now",
    variant: "destructive" as const,
    icon: Phone,
    available: "24/7",
    languages: "Multiple languages available"
  },
  {
    title: "Crisis Text Line", 
    description: "Crisis counseling via text message",
    contact: "Text HOME to 741741",
    action: "Text Now",
    variant: "warning" as const,
    icon: MessageCircle,
    available: "24/7",
    languages: "English & Spanish"
  },
  {
    title: "Emergency Services",
    description: "Immediate medical and psychiatric emergency care",
    contact: "Call 911",
    action: "Call Emergency",
    variant: "destructive" as const,
    icon: Phone,
    available: "24/7",
    languages: "Local emergency services"
  }
];

const localResources = [
  {
    name: "University Counseling Center",
    phone: "(555) 123-4567",
    address: "123 Campus Drive, Student Center",
    hours: "Mon-Fri 8AM-6PM",
    services: "Individual therapy, group counseling, crisis intervention"
  },
  {
    name: "Community Mental Health Center",  
    phone: "(555) 987-6543",
    address: "456 Main Street, Downtown",
    hours: "Mon-Sat 9AM-8PM",
    services: "Emergency psychiatric services, walk-in crisis support"
  },
  {
    name: "Regional Medical Center",
    phone: "(555) 555-0123", 
    address: "789 Hospital Drive",
    hours: "24/7 Emergency Department",
    services: "Psychiatric emergency services, inpatient care"
  }
];

const warningSigns = [
  "Thoughts of suicide or self-harm",
  "Feeling hopeless or trapped", 
  "Extreme mood changes",
  "Withdrawal from friends and activities",
  "Increased substance use",
  "Giving away possessions",
  "Talking about death or dying",
  "Expressing feelings of being a burden"
];

export default function Emergency() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <div className="space-y-12">
          {/* Header with Crisis Banner */}
          <div className="text-center space-y-6">
            <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-destructive font-medium mb-4">
                <AlertTriangle className="h-6 w-6" />
                <span>Crisis Support Available Now</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                You Are Not Alone
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                If you're experiencing a mental health crisis, having thoughts of self-harm, 
                or need immediate support, help is available right now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="destructive" size="xl" className="text-lg font-semibold group">
                  <Phone className="h-6 w-6 mr-2" />
                  Call 988 Crisis Line
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="warning" size="xl" className="text-lg font-semibold">
                  <MessageCircle className="h-6 w-6 mr-2" />
                  Text Crisis Support
                </Button>
              </div>
            </div>
          </div>

          {/* Emergency Contacts */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Immediate Crisis Support
              </h2>
              <p className="text-lg text-muted-foreground">
                These services are available 24/7 for immediate crisis intervention and support.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {emergencyContacts.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Card key={index} className="border-2 hover:shadow-large transition-all duration-300 group">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 mx-auto bg-muted rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="h-8 w-8 text-foreground" />
                      </div>
                      <CardTitle className="text-xl">{contact.title}</CardTitle>
                      <Badge variant="secondary" className="w-fit mx-auto">
                        {contact.available}
                      </Badge>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <p className="text-muted-foreground">
                        {contact.description}
                      </p>
                      <div className="space-y-2">
                        <div className="text-lg font-semibold text-foreground">
                          {contact.contact}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {contact.languages}
                        </div>
                      </div>
                      <Button variant={contact.variant} className="w-full" size="lg">
                        {contact.action}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Warning Signs */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                When to Seek Help
              </h2>
              <p className="text-lg text-muted-foreground">
                If you or someone you know is experiencing these warning signs, reach out for help immediately.
              </p>
            </div>
            
            <Card className="shadow-medium max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Heart className="h-6 w-6 text-destructive" />
                  Crisis Warning Signs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {warningSigns.map((sign, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                      <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0" />
                      <span className="text-foreground">{sign}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                  <p className="text-center text-destructive font-medium">
                    <strong>If any of these signs are present, don't wait - reach out for help immediately.</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Local Resources */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Local Mental Health Resources
              </h2>
              <p className="text-lg text-muted-foreground">
                Find nearby mental health services, hospitals, and support centers in your area.
              </p>
            </div>
            
            <div className="space-y-4">
              {localResources.map((resource, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">{resource.name}</h3>
                            <p className="text-muted-foreground">{resource.address}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Phone className="h-4 w-4" />
                            <span>{resource.phone}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{resource.hours}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          <strong>Services:</strong> {resource.services}
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" size="sm">
                          <Phone className="h-4 w-4 mr-2" />
                          Call Now
                        </Button>
                        <Button variant="outline" size="sm">
                          <MapPin className="h-4 w-4 mr-2" />
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Safety Planning */}
          <section className="space-y-8">
            <Card className="bg-primary/5 border-primary/20 shadow-medium">
              <CardContent className="p-8 text-center space-y-6">
                <div className="flex items-center justify-center gap-2 text-primary font-medium">
                  <Shield className="h-6 w-6" />
                  <span>Crisis Safety Planning</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Create Your Safety Plan
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A safety plan is a personalized, practical plan that can help you get through 
                  thoughts of suicide. It helps you recognize warning signs and what to do to stay safe.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="default" size="lg" className="group">
                    <Users className="h-5 w-5 mr-2" />
                    Create Safety Plan
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Learn About Safety Planning
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}