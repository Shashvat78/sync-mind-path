import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  MessageCircle, 
  Heart, 
  Share, 
  Plus, 
  Search,
  Shield,
  Clock,
  User
} from "@/components/ui/icons";

// Mock data for community posts
const mockPosts = [
  {
    id: 1,
    author: "Anonymous Student",
    avatar: "AS",
    content: "Starting college felt overwhelming, but joining study groups really helped my anxiety. Anyone else find community support helpful?",
    timestamp: "2 hours ago",
    likes: 12,
    comments: 5,
    category: "Student Life",
    isAnonymous: true
  },
  {
    id: 2, 
    author: "MindfulWarrior",
    avatar: "MW",
    content: "Daily meditation has been a game-changer for my stress levels. Here's a simple 5-minute technique that works for me...",
    timestamp: "5 hours ago",
    likes: 28,
    comments: 8,
    category: "Stress Management",
    isAnonymous: false
  },
  {
    id: 3,
    author: "Anonymous Helper",
    avatar: "AH", 
    content: "To anyone struggling today: you're not alone. This community has shown me that healing is possible. Keep going! 💙",
    timestamp: "1 day ago",
    likes: 45,
    comments: 12,
    category: "Support",
    isAnonymous: true
  }
];

const supportGroups = [
  {
    name: "Anxiety Support Circle",
    members: 234,
    description: "Safe space for sharing anxiety management techniques",
    category: "Anxiety",
    isActive: true
  },
  {
    name: "Student Stress Relief",
    members: 156,
    description: "College students supporting each other through academic pressure",
    category: "Student Life", 
    isActive: true
  },
  {
    name: "Depression Recovery",
    members: 189,
    description: "Journey together towards healing and hope",
    category: "Depression",
    isActive: false
  },
  {
    name: "Mindfulness & Meditation",
    members: 312,
    description: "Daily mindfulness practices and meditation support",
    category: "Wellness",
    isActive: true
  }
];

export default function Community() {
  const [newPost, setNewPost] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCreatePost = () => {
    if (newPost.trim()) {
      // In a real app, this would send to backend
      console.log("Creating post:", { content: newPost, isAnonymous });
      setNewPost("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-primary font-medium">
              <Users className="h-6 w-6" />
              <span>Community Support</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              You're Not Alone
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with others, share experiences, and find support in our safe, 
              anonymous community. Every voice matters here.
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-primary">1,247</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-secondary">156</div>
              <div className="text-sm text-muted-foreground">Posts This Week</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-accent">15</div>
              <div className="text-sm text-muted-foreground">Support Groups</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-success">24/7</div>
              <div className="text-sm text-muted-foreground">Peer Support</div>
            </Card>
          </div>

          {/* Main Community Interface */}
          <Tabs defaultValue="posts" className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <TabsList className="grid w-full sm:w-auto grid-cols-3">
                <TabsTrigger value="posts">Community Posts</TabsTrigger>
                <TabsTrigger value="groups">Support Groups</TabsTrigger>
                <TabsTrigger value="chat">Peer Chat</TabsTrigger>
              </TabsList>
              
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search community..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
              </div>
            </div>

            <TabsContent value="posts" className="space-y-8">
              {/* Create Post */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Share with the Community
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="What's on your mind? Share your thoughts, experiences, or ask for support..."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    className="min-h-24"
                  />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        variant={isAnonymous ? "default" : "outline"}
                        size="sm"
                        onClick={() => setIsAnonymous(!isAnonymous)}
                      >
                        <Shield className="h-4 w-4" />
                        {isAnonymous ? "Post Anonymously" : "Post Publicly"}
                      </Button>
                      {isAnonymous && (
                        <Badge variant="secondary" className="text-xs">
                          Your identity is protected
                        </Badge>
                      )}
                    </div>
                    
                    <Button 
                      onClick={handleCreatePost}
                      disabled={!newPost.trim()}
                      className="group"
                    >
                      <Plus className="h-4 w-4 group-hover:rotate-90 transition-transform" />
                      Share Post
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Posts Feed */}
              <div className="space-y-6">
                {mockPosts.map((post) => (
                  <Card key={post.id} className="shadow-soft hover:shadow-medium transition-shadow">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarFallback className={post.isAnonymous ? "bg-muted" : "bg-primary text-white"}>
                            {post.isAnonymous ? <Shield className="h-4 w-4" /> : post.avatar}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{post.author}</span>
                            {post.isAnonymous && (
                              <Badge variant="outline" className="text-xs">
                                <Shield className="h-3 w-3 mr-1" />
                                Anonymous
                              </Badge>
                            )}
                            <Badge variant="secondary" className="text-xs">
                              {post.category}
                            </Badge>
                          </div>
                          
                          <p className="text-muted-foreground">{post.content}</p>
                          
                          <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{post.timestamp}</span>
                            </div>
                            
                            <Button variant="ghost" size="sm" className="h-auto p-0">
                              <Heart className="h-4 w-4 mr-1" />
                              {post.likes}
                            </Button>
                            
                            <Button variant="ghost" size="sm" className="h-auto p-0">
                              <MessageCircle className="h-4 w-4 mr-1" />
                              {post.comments}
                            </Button>
                            
                            <Button variant="ghost" size="sm" className="h-auto p-0">
                              <Share className="h-4 w-4 mr-1" />
                              Share
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="groups" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {supportGroups.map((group, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <CardTitle className="flex items-center gap-2">
                            {group.name}
                            {group.isActive && (
                              <div className="w-2 h-2 bg-success rounded-full"></div>
                            )}
                          </CardTitle>
                          <Badge variant="outline">{group.category}</Badge>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <div className="font-semibold">{group.members}</div>
                          <div>members</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{group.description}</p>
                      <Button className="w-full" variant={group.isActive ? "default" : "outline"}>
                        <Users className="h-4 w-4 mr-2" />
                        {group.isActive ? "Join Group" : "Request to Join"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="chat" className="space-y-8">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Peer Support Chat
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/30 rounded-lg p-6 text-center">
                    <MessageCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="font-semibold mb-2">Real-time Peer Support</h3>
                    <p className="text-muted-foreground mb-4">
                      Connect with trained peer supporters and community members for real-time conversations.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Button variant="default" className="group">
                        <User className="h-4 w-4 mr-2" />
                        Join Anonymous Chat
                      </Button>
                      <Button variant="outline" className="group">
                        <Shield className="h-4 w-4 mr-2" />
                        Private Support
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Currently Online Supporters:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Crisis Counselor", "Peer Support Specialist", "Student Mentor", "Wellness Coach"].map((role, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-success rounded-full"></div>
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}