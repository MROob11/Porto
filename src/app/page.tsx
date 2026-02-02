import { HeroSequence } from "@/components/features/hero";
import { AboutSection } from "@/components/features/about";
import { TechStackSection } from "@/components/features/tech";
import { ServicesSection } from "@/components/features/services";
import { JourneySection } from "@/components/features/journey";
import { TestimonialsSection } from "@/components/features/testimonials";
import { MusicSection } from "@/components/features/music";
import { ContactFooter } from "@/components/features/contact";
import { PageTransition } from "@/components/transitions/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <div>
        <HeroSequence />
        <AboutSection />
        <TechStackSection />
        <ServicesSection />
        <JourneySection />
        <TestimonialsSection />
        <MusicSection />
        <ContactFooter />
      </div>
    </PageTransition>
  );
}
