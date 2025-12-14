import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Advantages } from "@/components/sections/advantages";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

export default function Home() {
  const sections = [
    { id: "home", label: "Accueil" },
    { id: "services", label: "Services" },
    { id: "advantages", label: "Avantages" },
    { id: "testimonials", label: "Témoignages" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <ScrollIndicator sections={sections} headerOffset={0} />

      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="advantages">
        <Advantages />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <CTA />
      </section>
    </>
  );
}
