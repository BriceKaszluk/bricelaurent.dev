"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { unsplashImages } from "@/lib/unsplash-images";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Site parfait pour mon activité de plomberie. Mes clients me trouvent facilement sur Google et le formulaire de contact fonctionne très bien. Merci Brice !",
      author: "Thomas M.",
      role: "Plombier",
      location: "Chambéry",
    },
    {
      quote:
        "Un vrai professionnel à l'écoute. Le site reflète parfaitement l'image de mon restaurant. Les réservations en ligne sont un vrai plus.",
      author: "Sophie L.",
      role: "Restauratrice",
      location: "Aix-les-Bains",
    },
    {
      quote:
        "Processus simple et efficace. Brice a su comprendre mes besoins et livrer un site moderne en respectant les délais. Je recommande !",
      author: "Marc D.",
      role: "Électricien",
      location: "Albertville",
    },
  ];

  return (
    <section className="snap-section relative min-h-screen flex items-center overflow-hidden py-20">
      {/* Background Image with Parallax */}
      <ParallaxImage
        src={unsplashImages.testimonials}
        alt="Lac alpin en Savoie"
        speed={0.5}
      />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50 z-5" />

      {/* Content */}
      <div className="parallax-content container mx-auto max-w-7xl px-4 w-full">
        {/* Header */}
        <motion.div
          className="mx-auto mb-12 md:mb-16 max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ils me font confiance
          </h2>
          <p className="text-lg text-white/80">
            Des artisans et commerçants satisfaits de leur site vitrine
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass rounded-2xl p-6 md:p-8 relative"
            >
              <Quote className="mb-6 h-10 w-10 text-accent/40" />
              <blockquote className="mb-6 text-base leading-relaxed text-white/90">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="border-t border-white/20 pt-4">
                <p className="font-semibold text-white text-lg">{testimonial.author}</p>
                <p className="text-sm text-white/70 mt-1">
                  {testimonial.role} • {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
