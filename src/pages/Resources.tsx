import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Play, 
  Calendar, 
  Download,
  Search,
  Clock,
  Star,
  User,
  ChevronRight,
  Heart,
  Brain
} from "@/components/ui/icons";

const articles = [
  {
    id: 1,
    title: "Managing Academic Stress: A Student's Guide",
    author: "Dr. Sarah Chen",
    readTime: "8 min read",
    category: "Stress Management",
    description: "Evidence-based strategies for handling academic pressure and maintaining mental wellness during studies.",
    rating: 4.8,
    downloads: 1234
  },
  {
    id: 2,
    title: "Understanding Anxiety: Signs, Symptoms, and Solutions",
    author: "Prof. Michael Rodriguez",
    readTime: "12 min read", 
    category: "Anxiety",
    description: "Comprehensive guide to recognizing anxiety disorders and implementing effective coping mechanisms.",
    rating: 4.9,
    downloads: 2156
  },
  {
    id: 3,
    title: "Building Resilience Through Mindful Practices",
    author: "Dr. Emily Watson",
    readTime: "6 min read",
    category: "Wellness",
    description: "Learn how mindfulness and meditation can strengthen your mental resilience and emotional well-being.",
    rating: 4.7,
    downloads: 987
  }
];

const videos = [
  {
    id: 1,
    title: "5-Minute Daily Meditation for Students",
    instructor: "Mindfulness Coach Lisa",
    duration: "5:32",
    category: "Meditation",
    views: 45612,
    description: "Quick meditation session perfect for busy students to reduce stress and improve focus."
  },
  {
    id: 2,
    title: "Breathing Techniques for Anxiety Relief",
    instructor: "Dr. James Park",
    duration: "8:15",
    category: "Anxiety Management",
    views: 32145,
    description: "Learn proven breathing exercises to manage anxiety and panic attacks effectively."
  },
  {
    id: 3,
    title: "Progressive Muscle Relaxation Guide",
    instructor: "Wellness Expert Maria",
    duration: "12:20",
    category: "Relaxation",
    views: 28739,
    description: "Step-by-step guide to progressive muscle relaxation for better sleep and stress relief."
  }
];

const workshops = [
  {
    id: 1,
    title: "Stress Management Masterclass",
    date: "Nov 15, 2024",
    time: "2:00 PM - 4:00 PM",
    instructor: "Dr. Alex Thompson",
    participants: 45,
    maxParticipants: 50,
    category: "Stress Management",
    isLive: true
  },
  {
    id: 2,
    title: "Building Healthy Relationships",
    date: "Nov 18, 2024", 
    time: "6:00 PM - 7:30 PM",
    instructor: "Counselor Sarah Lee",
    participants: 32,
    maxParticipants: 40,
    category: "Relationships",
    isLive: false
  },
  {
    id: 3,
    title: "Mindfulness & Academic Success",
    date: "Nov 22, 2024",
    time: "4:00 PM - 5:30 PM",
    instructor: "Prof. David Kim",
    participants: 38,
    maxParticipants: 60,
    category: "Academic Support",
    isLive: true
  }
];

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-primary font-medium">
              <BookOpen className="h-6 w-6" />
              <span>Mental Health Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Knowledge & Wellness Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access our comprehensive library of evidence-based articles, guided exercises, 
              and interactive workshops designed to support your mental health journey.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {["All", "Stress", "Anxiety", "Depression", "Wellness", "Academic"].map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category.toLowerCase() ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Resource Tabs */}
          <Tabs defaultValue="articles" className="space-y-8">
            <TabsList className="grid w-full md:w-auto grid-cols-3">
              <TabsTrigger value="articles">Articles & Guides</TabsTrigger>
              <TabsTrigger value="videos">Video Exercises</TabsTrigger>
              <TabsTrigger value="workshops">Live Workshops</TabsTrigger>
            </TabsList>

            <TabsContent value="articles" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <Card key={article.id} className="shadow-soft hover:shadow-medium transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Star className="h-3 w-3 fill-current text-yellow-500" />
                          <span>{article.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {article.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Download className="h-3 w-3" />
                          <span>{article.downloads} downloads</span>
                        </div>
                        <Button size="sm" className="group/btn">
                          Read Article
                          <ChevronRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <Card key={video.id} className="shadow-soft hover:shadow-medium transition-all duration-300 group overflow-hidden">
                    <div className="aspect-video bg-gradient-primary relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button size="lg" variant="secondary" className="rounded-full w-16 h-16 group-hover:scale-110 transition-transform">
                          <Play className="h-6 w-6 ml-1" />
                        </Button>
                      </div>
                      <Badge className="absolute top-3 left-3 bg-black/50 text-white border-0">
                        {video.duration}
                      </Badge>
                    </div>
                    <CardContent className="p-4 space-y-3">
                      <div>
                        <Badge variant="outline" className="text-xs mb-2">
                          {video.category}
                        </Badge>
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {video.title}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-muted-foreground">
                        {video.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>By {video.instructor}</span>
                        <span>{video.views.toLocaleString()} views</span>
                      </div>
                      
                      <Button className="w-full group/btn">
                        <Play className="h-4 w-4 mr-2" />
                        Start Exercise
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="workshops" className="space-y-6">
              <div className="space-y-4">
                {workshops.map((workshop) => (
                  <Card key={workshop.id} className="shadow-soft hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-2">
                            <Badge variant={workshop.isLive ? "default" : "secondary"} className="text-xs">
                              {workshop.isLive ? "Live" : "Recorded"}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {workshop.category}
                            </Badge>
                          </div>
                          
                          <h3 className="text-xl font-semibold">{workshop.title}</h3>
                          
                          <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{workshop.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{workshop.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <span>{workshop.instructor}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:items-end gap-2">
                          <div className="text-sm text-muted-foreground">
                            {workshop.participants}/{workshop.maxParticipants} participants
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Heart className="h-4 w-4" />
                            </Button>
                            <Button size="sm" className="group">
                              {workshop.isLive ? "Register Now" : "Watch Recording"}
                              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Featured Resource */}
          <Card className="bg-gradient-soft shadow-large border-0">
            <CardContent className="p-8 text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary font-medium">
                <Brain className="h-6 w-6" />
                <span>Featured Resource</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                Complete Mental Health Toolkit
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Download our comprehensive toolkit with assessment guides, coping strategies, 
                crisis resources, and wellness exercises all in one place.
              </p>
              <Button variant="hero" size="lg" className="group">
                <Download className="h-5 w-5 mr-2" />
                Download Free Toolkit
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}