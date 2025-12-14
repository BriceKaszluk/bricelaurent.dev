"use client";

import { motion } from "framer-motion";
import { MapPin, User, Code, BadgeDollarSign } from "lucide-react";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { unsplashImages } from "@/lib/unsplash-images";
import { fadeInUp, fadeInScale, staggerContainer } from "@/lib/animations";

export function Advantages() {
  const advantages = [
    {
      icon: MapPin,
      title: "Proximité locale",
      description:
        "Basé en Savoie, je comprends les enjeux des entreprises locales et reste disponible pour des échanges en présentiel.",
    },
    {
      icon: User,
      title: "Interlocuteur unique",
      description:
        "Un seul contact du début à la fin du projet. Communication directe, réactivité et suivi personnalisé garanti.",
    },
    {
      icon: Code,
      title: "Technologies modernes",
      description:
        "Sites rapides et performants, développés avec les dernières technologies web. Performance et SEO optimisés.",
    },
    {
      icon: BadgeDollarSign,
      title: "Tarifs adaptés",
      description:
        "Prix transparents pensés pour les artisans, commerçants et TPE. Pas de frais cachés, des forfaits clairs.",
    },
  ];

  return (
    <section className="snap-section relative min-h-screen flex items-center overflow-hidden py-20">
      {/* Background Image with Parallax */}
      <ParallaxImage
        src={unsplashImages.advantages}
        alt="Forêt de sapins en Savoie"
        speed={0.5}
      />

      {/* Lighter Overlay - to keep forest texture visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-5" />

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
            Pourquoi travailler avec moi ?
          </h2>
          <p className="text-lg text-white/80">
            Une approche personnalisée pour donner vie à votre projet web
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:gap-10 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={advantage.title}
                variants={fadeInScale}
                className="glass-dark rounded-2xl p-6 md:p-8 flex flex-col items-center text-center"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full glass border-2 border-accent/30 bg-accent/10 text-accent">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 font-heading text-xl md:text-2xl font-semibold text-white">
                  {advantage.title}
                </h3>
                <p className="text-white/80 leading-relaxed">{advantage.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
