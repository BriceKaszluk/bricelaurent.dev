"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { unsplashImages } from "@/lib/unsplash-images";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Services() {
  const services = [
    {
      title: "Pack Essentiel",
      price: "790€",
      description: "Idéal pour artisan ou commerçant qui démarre sur le web",
      features: [
        "Site 1 à 3 pages",
        "Design responsive",
        "Formulaire de contact",
        "SEO local de base",
        "Hébergement 1 an inclus",
        "Livraison 2 semaines",
      ],
      badge: null,
    },
    {
      title: "Pack Pro",
      price: "1490€",
      description: "Pour les entreprises locales qui veulent se démarquer",
      features: [
        "Site 5 à 7 pages",
        "Design premium",
        "Google Business Profile",
        "Page avis clients",
        "Analytics configuré",
        "Performance 90+",
        "Hébergement 1 an inclus",
        "Livraison 3 semaines",
      ],
      badge: "Recommandé",
    },
    {
      title: "Pack Sur-mesure",
      price: "Sur devis",
      description: "Projet complexe avec besoins spécifiques",
      features: [
        "Tout le pack Pro +",
        "Fonctionnalités personnalisées",
        "Système de réservation",
        "Espace client sécurisé",
        "Catalogue produits",
        "Formation incluse",
      ],
      badge: null,
    },
  ];

  return (
    <section className="snap-section relative min-h-screen flex items-center overflow-hidden py-20" id="services">
      {/* Background Image with Parallax */}
      <ParallaxImage
        src={unsplashImages.services}
        alt="Vallée alpine de Savoie"
        speed={0.5}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 overlay-dark z-5" />

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
            Des offres adaptées à vos besoins
          </h2>
          <p className="text-lg text-white/80">
            Des packs clairs et transparents, sans surprises. Choisissez la solution qui correspond à votre projet.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className={`glass rounded-2xl p-6 md:p-8 relative ${
                service.badge ? "border-2 border-accent" : ""
              }`}
            >
              {service.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                  {service.badge}
                </Badge>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <div className="mt-2">
                  <span className="text-4xl font-bold text-white">{service.price}</span>
                  {service.price !== "Sur devis" && (
                    <span className="text-white/60"> HT</span>
                  )}
                </div>
                <p className="mt-3 text-white/80">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 text-sm">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg
                      className="h-5 w-5 text-accent mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="w-full" size="lg">
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
            <Link href="/offres">
              Découvrir toutes les offres
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
