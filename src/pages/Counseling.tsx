import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Star, 
  Video, 
  Users,
  ChevronRight,
  CheckCircle,
  Heart,
  Brain,
  User,
  Phone,
  Shield
} from "@/components/ui/icons";

const counselors = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Clinical Psychologist",
    specializations: ["Anxiety", "Depression", "Academic Stress"],
    rating: 4.9,
    reviews: 234,
    experience: "12 years",
    image: "/api/placeholder/150/150",
    available: "Today",
    price: "$120/session",
    languages: ["English", "Mandarin"],
    modalities: ["CBT", "Mindfulness", "Solution-Focused"]
  },
  {
    id: 2,
    name: "Dr. Michael Rodriguez",
    title: "Licensed Therapist", 
    specializations: ["Trauma", "PTSD", "Relationships"],
    rating: 4.8,
    reviews: 189,
    experience: "8 years",
    image: "/api/placeholder/150/150",
    available: "Tomorrow",
    price: "$100/session",
    languages: ["English", "Spanish"],
    modalities: ["EMDR", "Cognitive Behavioral", "Family Systems"]
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    title: "Counseling Psychologist",
    specializations: ["Student Wellness", "Life Transitions", "Self-esteem"],
    rating: 4.9,
    reviews: 156,
    experience: "6 years", 
    image: "/api/placeholder/150/150",
    available: "This week",
    price: "$90/session",
    languages: ["English"],
    modalities: ["Humanistic", "Mindfulness", "Positive Psychology"]
  }
];

const appointmentTypes = [
  {
    type: "Individual Therapy",
    duration: "50 minutes",
    description: "One-on-one sessions with a licensed therapist for personalized care",
    icon: User,
    price: "$90-120"
  },
  {
    type: "Group Therapy", 
    duration: "90 minutes",
    description: "Therapeutic groups for specific topics with 6-8 participants",
    icon: Users,
    price: "$40-60"
  },
  {
    type: "Crisis Counseling",
    duration: "30-60 minutes", 
    description: "Immediate support for acute mental health crises",
    icon: Heart,
    price: "Covered by insurance"
  },
  {
    type: "Consultation",
    duration: "30 minutes",
    description: "Initial assessment and treatment planning session",
    icon: Brain,
    price: "$60-80"
  }
];

export default function Counseling() {
  const [selectedCounselor, setSelectedCounselor] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [appointmentType, setAppointmentType] = useState("individual");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-2 text-primary font-medium">
              <Heart className="h-6 w-6" />
              <span>Professional Counseling Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Connect With Licensed Therapists
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Book sessions with experienced mental health professionals. Choose between 
              online and in-person appointments that fit your schedule and preferences.
            </p>
          </div>

          {/* Service Types */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Counseling Services Available
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the type of support that best fits your needs and situation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {appointmentTypes.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="hover:shadow-medium transition-all duration-300 group cursor-pointer">
                    <CardHeader className="text-center pb-4">
                      <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{service.type}</CardTitle>
                      <Badge variant="secondary" className="w-fit mx-auto">
                        {service.duration}
                      </Badge>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                      <div className="text-lg font-semibold text-primary">
                        {service.price}
                      </div>
                      <Button variant="outline" size="sm" className="w-full group-hover:border-primary">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Counselor Selection */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Meet Our Licensed Therapists
              </h2>
              <p className="text-lg text-muted-foreground">
                All our therapists are licensed professionals with experience in student mental health.
              </p>
            </div>

            <Tabs defaultValue="browse" className="space-y-8">
              <TabsList className="grid w-full md:w-auto grid-cols-2">
                <TabsTrigger value="browse">Browse Therapists</TabsTrigger>
                <TabsTrigger value="book">Book Appointment</TabsTrigger>
              </TabsList>

              <TabsContent value="browse" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  {counselors.map((counselor) => (
                    <Card key={counselor.id} className="shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="w-16 h-16">
                            <AvatarImage src={counselor.image} alt={counselor.name} />
                            <AvatarFallback className="bg-primary text-white text-lg">
                              {counselor.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1 space-y-2">
                            <div>
                              <h3 className="text-xl font-semibold">{counselor.name}</h3>
                              <p className="text-muted-foreground">{counselor.title}</p>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-current text-yellow-500" />
                                <span className="font-medium">{counselor.rating}</span>
                              </div>
                              <span className="text-sm text-muted-foreground">
                                ({counselor.reviews} reviews)
                              </span>
                              <Badge variant="secondary" className="text-xs">
                                {counselor.experience}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-lg font-semibold text-primary">{counselor.price}</div>
                            <Badge variant={counselor.available === "Today" ? "default" : "secondary"} className="text-xs">
                              {counselor.available}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm font-medium text-muted-foreground">Specializations:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {counselor.specializations.map((spec, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {spec}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <span className="text-sm font-medium text-muted-foreground">Approaches:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {counselor.modalities.map((modality, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {modality}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between pt-2">
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Video className="h-4 w-4 mr-2" />
                                Online
                              </Button>
                              <Button variant="outline" size="sm">
                                <MapPin className="h-4 w-4 mr-2" />
                                In-Person
                              </Button>
                            </div>
                            <Button 
                              variant="default" 
                              onClick={() => setSelectedCounselor(counselor.id)}
                              className="group"
                            >
                              Book Session
                              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="book" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Booking Form */}
                  <div className="space-y-6">
                    <Card className="shadow-medium">
                      <CardHeader>
                        <CardTitle>Book Your Appointment</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {selectedCounselor && (
                          <div className="p-4 bg-muted/30 rounded-lg">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarFallback className="bg-primary text-white">
                                  {counselors.find(c => c.id === selectedCounselor)?.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-semibold">
                                  {counselors.find(c => c.id === selectedCounselor)?.name}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {counselors.find(c => c.id === selectedCounselor)?.title}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium">Appointment Type</label>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                              <Button
                                variant={appointmentType === "individual" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setAppointmentType("individual")}
                              >
                                <User className="h-4 w-4 mr-2" />
                                Individual
                              </Button>
                              <Button
                                variant={appointmentType === "group" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setAppointmentType("group")}
                              >
                                <Users className="h-4 w-4 mr-2" />
                                Group
                              </Button>
                            </div>
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium">Session Format</label>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                              <Button variant="outline" size="sm">
                                <Video className="h-4 w-4 mr-2" />
                                Online
                              </Button>
                              <Button variant="outline" size="sm">
                                <MapPin className="h-4 w-4 mr-2" />
                                In-Person
                              </Button>
                            </div>
                          </div>
                          
                          {selectedDate && (
                            <div className="space-y-3">
                              <label className="text-sm font-medium">Available Times</label>
                              <div className="grid grid-cols-3 gap-2">
                                {["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM", "6:00 PM"].map((time) => (
                                  <Button key={time} variant="outline" size="sm">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {time}
                                  </Button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <Button className="w-full" size="lg" disabled={!selectedDate}>
                          <CheckCircle className="h-5 w-5 mr-2" />
                          Confirm Booking
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Calendar */}
                  <div className="space-y-6">
                    <Card className="shadow-medium">
                      <CardHeader>
                        <CardTitle>Select Date</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          className="rounded-md border"
                          disabled={(date) => date < new Date()}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Insurance & Pricing */}
          <section className="space-y-8">
            <Card className="bg-gradient-soft shadow-large border-0">
              <CardContent className="p-8 text-center space-y-6">
                <div className="flex items-center justify-center gap-2 text-primary font-medium">
                  <Shield className="h-6 w-6" />
                  <span>Insurance & Payment</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Affordable Mental Healthcare
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We accept most major insurance plans and offer sliding scale fees 
                  for students and those with financial need.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="space-y-2">
                    <CheckCircle className="h-8 w-8 text-success mx-auto" />
                    <div className="font-semibold">Insurance Accepted</div>
                    <div className="text-sm text-muted-foreground">Most major plans covered</div>
                  </div>
                  <div className="space-y-2">
                    <Heart className="h-8 w-8 text-primary mx-auto" />
                    <div className="font-semibold">Sliding Scale</div>
                    <div className="text-sm text-muted-foreground">Income-based pricing available</div>
                  </div>
                  <div className="space-y-2">
                    <Phone className="h-8 w-8 text-secondary mx-auto" />
                    <div className="font-semibold">24/7 Crisis Support</div>
                    <div className="text-sm text-muted-foreground">Emergency services included</div>
                  </div>
                </div>
                <Button variant="hero" size="lg" className="group">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  Schedule Free Consultation
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}