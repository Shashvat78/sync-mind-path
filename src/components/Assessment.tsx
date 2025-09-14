import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, CheckCircle, Clock, ChevronRight } from "@/components/ui/icons";

const assessmentTypes = [
  {
    title: "Stress Level Assessment",
    description: "Evaluate your current stress levels and get personalized coping strategies",
    duration: "5-7 minutes",
    questions: "15 questions",
    color: "primary",
  },
  {
    title: "Anxiety Evaluation", 
    description: "Understand your anxiety patterns and receive targeted support recommendations",
    duration: "8-10 minutes",
    questions: "20 questions",
    color: "secondary",
  },
  {
    title: "Depression Screening",
    description: "Professional screening tool to assess mood and connect you with appropriate resources",
    duration: "10-12 minutes", 
    questions: "25 questions",
    color: "accent",
  },
];

export function Assessment() {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 text-primary font-medium mb-4">
            <Brain className="h-5 w-5" />
            <span>Assessment Center</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Start Your Mental Health Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take our scientifically-backed assessments to understand your mental health status 
            and receive personalized recommendations for support and treatment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {assessmentTypes.map((assessment, index) => (
            <Card key={index} className="hover:shadow-medium transition-shadow duration-300 border-l-4 border-l-primary">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between text-xl">
                  {assessment.title}
                  <div className={`w-3 h-3 rounded-full bg-${assessment.color}`}></div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {assessment.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{assessment.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>{assessment.questions}</span>
                  </div>
                </div>
                
                <Button variant="default" className="w-full group">
                  Start Assessment
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Comprehensive Mental Health Assessment
            </h3>
            <p className="text-muted-foreground mb-6">
              Take all three assessments for a complete mental health evaluation and 
              receive a detailed report with personalized recommendations.
            </p>
            <Button variant="hero" size="lg" className="group">
              Take Full Assessment Suite
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}