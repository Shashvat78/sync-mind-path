import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Assessment } from "@/components/Assessment";
import { Resources } from "@/components/Resources";
import { Stats } from "@/components/Stats";
import { Emergency } from "@/components/Emergency";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <section id="assessment">
          <Assessment />
        </section>
        <Stats />
        <section id="resources">
          <Resources />
        </section>
        <section id="emergency">
          <Emergency />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;