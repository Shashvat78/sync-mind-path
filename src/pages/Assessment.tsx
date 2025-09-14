import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Brain, CheckCircle, Clock, ChevronRight, ArrowLeft } from "@/components/ui/icons";
import { Progress } from "@/components/ui/progress";

const assessmentQuestions = {
  stress: [
    "How often have you felt stressed in the past week?",
    "How difficult is it for you to relax?", 
    "How often do you feel overwhelmed by your responsibilities?",
    "How often do you have trouble sleeping due to stress?",
    "How often do you feel unable to cope with things?"
  ],
  anxiety: [
    "How often do you feel nervous or anxious?",
    "How often do you worry about things that might go wrong?",
    "How often do you feel restless or on edge?",
    "How often do you have trouble concentrating due to worry?",
    "How often do you avoid situations because they make you anxious?"
  ],
  depression: [
    "How often do you feel sad or down?",
    "How often do you lose interest in activities you used to enjoy?",
    "How often do you feel hopeless about the future?",
    "How often do you feel tired or have little energy?",
    "How often do you have trouble feeling good about yourself?"
  ]
};

const options = [
  { value: "0", label: "Never", points: 0 },
  { value: "1", label: "Rarely", points: 1 },
  { value: "2", label: "Sometimes", points: 2 },
  { value: "3", label: "Often", points: 3 },
  { value: "4", label: "Very Often", points: 4 }
];

export default function Assessment() {
  const [currentTest, setCurrentTest] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const startTest = (testType: string) => {
    setCurrentTest(testType);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const handleAnswer = (questionIndex: number, points: number) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: points }));
  };

  const nextQuestion = () => {
    if (!currentTest) return;
    
    const questions = assessmentQuestions[currentTest as keyof typeof assessmentQuestions];
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate score
      const totalScore = Object.values(answers).reduce((sum, points) => sum + points, 0);
      setScore(totalScore);
      setShowResults(true);
    }
  };

  const resetTest = () => {
    setCurrentTest(null);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const getScoreLevel = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage < 25) return { level: "Minimal", color: "success", description: "You're doing well! Continue with healthy habits." };
    if (percentage < 50) return { level: "Mild", color: "warning", description: "Some signs present. Consider stress management techniques." };
    if (percentage < 75) return { level: "Moderate", color: "accent", description: "Noticeable symptoms. We recommend speaking with a counselor." };
    return { level: "Severe", color: "destructive", description: "Significant symptoms present. Please consider professional help immediately." };
  };

  if (!currentTest) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-20">
          <div className="text-center space-y-6 mb-16">
            <div className="flex items-center justify-center gap-2 text-primary font-medium">
              <Brain className="h-6 w-6" />
              <span>Mental Health Assessment</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Understand Your Mental Health
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take our scientifically-backed assessments to evaluate your stress, anxiety, and depression levels. 
              Get personalized recommendations based on your results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Object.entries(assessmentQuestions).map(([key, questions]) => (
              <Card key={key} className="hover:shadow-medium transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="capitalize text-2xl">
                    {key === 'stress' ? 'Stress Level' : key === 'anxiety' ? 'Anxiety' : 'Depression'} Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {key === 'stress' ? 'Evaluate your current stress levels and coping mechanisms.' :
                     key === 'anxiety' ? 'Assess anxiety patterns and their impact on daily life.' :
                     'Screen for depression symptoms and mood patterns.'}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{Math.ceil(questions.length * 0.5)}-{questions.length} min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      <span>{questions.length} questions</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="default" 
                    className="w-full group"
                    onClick={() => startTest(key)}
                  >
                    Start {key.charAt(0).toUpperCase() + key.slice(1)} Test
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-muted/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Complete Assessment Suite</h3>
              <p className="text-muted-foreground mb-6">
                Take all three assessments for a comprehensive mental health evaluation 
                and receive detailed recommendations.
              </p>
              <Button variant="hero" size="lg">
                Take Full Assessment
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (showResults) {
    const questions = assessmentQuestions[currentTest as keyof typeof assessmentQuestions];
    const maxScore = questions.length * 4;
    const result = getScoreLevel(score, maxScore);
    
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary font-medium">
                <CheckCircle className="h-6 w-6" />
                <span>Assessment Complete</span>
              </div>
              
              <h1 className="text-4xl font-bold text-foreground">
                Your {currentTest.charAt(0).toUpperCase() + currentTest.slice(1)} Assessment Results
              </h1>
              
              <Card className={`border-l-4 border-l-${result.color} shadow-medium`}>
                <CardContent className="p-8 space-y-6">
                  <div className="text-center">
                    <div className={`text-4xl font-bold text-${result.color} mb-2`}>
                      {score}/{maxScore}
                    </div>
                    <div className={`text-2xl font-semibold text-${result.color}`}>
                      {result.level} Level
                    </div>
                  </div>
                  
                  <Progress value={(score / maxScore) * 100} className="h-3" />
                  
                  <p className="text-lg text-muted-foreground">
                    {result.description}
                  </p>
                  
                  <div className="space-y-4 text-left">
                    <h3 className="font-semibold text-lg">Recommended Next Steps:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {result.level === "Minimal" && (
                        <>
                          <li>• Continue with current healthy practices</li>
                          <li>• Maintain regular self-care routines</li>
                          <li>• Stay connected with supportive relationships</li>
                        </>
                      )}
                      {result.level === "Mild" && (
                        <>
                          <li>• Try stress management techniques and mindfulness</li>
                          <li>• Consider joining our support community</li>
                          <li>• Explore our wellness resources</li>
                        </>
                      )}
                      {result.level === "Moderate" && (
                        <>
                          <li>• Schedule a consultation with a counselor</li>
                          <li>• Join relevant support groups</li>
                          <li>• Practice daily stress management</li>
                        </>
                      )}
                      {result.level === "Severe" && (
                        <>
                          <li>• Seek professional help immediately</li>
                          <li>• Consider crisis support if needed</li>
                          <li>• Connect with our counseling services</li>
                        </>
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" onClick={resetTest}>
                  Take Another Assessment
                </Button>
                <Button variant="outline">
                  Find Counseling Services
                </Button>
                <Button variant="secondary">
                  Join Community Support
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const questions = assessmentQuestions[currentTest as keyof typeof assessmentQuestions];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" onClick={resetTest} className="mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Assessments
            </Button>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>

          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {questions[currentQuestion]}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup
                value={answers[currentQuestion]?.toString() || ""}
                onValueChange={(value) => handleAnswer(currentQuestion, parseInt(value))}
              >
                {options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value={option.points.toString()} id={option.value} />
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer text-lg">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              
              <div className="flex justify-end pt-4">
                <Button 
                  onClick={nextQuestion}
                  disabled={answers[currentQuestion] === undefined}
                  className="group"
                >
                  {currentQuestion === questions.length - 1 ? "Get Results" : "Next Question"}
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}