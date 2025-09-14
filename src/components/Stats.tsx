import { Users, CheckCircle, Clock, Star } from "@/components/ui/icons";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Students Helped",
    description: "Across universities nationwide"
  },
  {
    icon: CheckCircle, 
    value: "95%",
    label: "Success Rate",
    description: "Improved mental wellbeing"
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support Available",
    description: "Crisis intervention anytime"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "User Rating",
    description: "Trusted by our community"
  }
];

export function Stats() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Making a Real Impact
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Join thousands of students who have found support, healing, and hope through Mind Sync
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                  <div className="text-xl font-semibold">{stat.label}</div>
                  <div className="text-primary-foreground/80">{stat.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}