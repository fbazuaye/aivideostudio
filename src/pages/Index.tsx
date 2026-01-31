import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { PainSolutionSection } from "@/components/landing/PainSolutionSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { VisualProofSection } from "@/components/landing/VisualProofSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { ProgramTeaserSection } from "@/components/landing/ProgramTeaserSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PainSolutionSection />
        <section id="benefits">
          <BenefitsSection />
        </section>
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        <VisualProofSection />
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <ProgramTeaserSection />
        <section id="faq">
          <FAQSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
