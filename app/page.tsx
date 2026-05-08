import Hero from "@/components/hero";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import Header from "@/components/header";
import Dashboardprev from "@/components/dashboardprev";
import Cta from "@/components/cta";
import Footer from "@/components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 antialiased overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Dashboardprev />
      <Cta />
      <Footer />
    </div>
  );
}
