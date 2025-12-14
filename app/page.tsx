import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Advantages } from "@/components/sections/advantages";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

export default function Home() {
  const sections = ["Accueil", "Services", "Avantages", "Témoignages", "Contact"];

  return (
    <>
      <ScrollIndicator sections={sections} />
      <Hero />
      <Services />
      <Advantages />
      <Testimonials />
      <CTA />
    </>
  );
}
