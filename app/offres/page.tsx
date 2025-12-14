"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { unsplashImages } from "@/lib/unsplash-images";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function OffresPage() {
  const packs = [
    {
      title: "Pack Essentiel",
      price: "790€",
      priceDetail: "HT",
      description: "Idéal pour artisan ou commerçant qui démarre sur le web",
      features: [
        "Site vitrine 1 à 3 pages",
        "Design responsive (mobile, tablette, desktop)",
        "Formulaire de contact fonctionnel",
        "Optimisation SEO local de base",
        "Hébergement première année inclus",
        "Mise en ligne sous 2 semaines",
      ],
      isRecommended: false,
    },
    {
      title: "Pack Pro",
      price: "1490€",
      priceDetail: "HT",
      description: "Pour les entreprises locales qui veulent se démarquer",
      features: [
        "Site vitrine 5 à 7 pages",
        "Design responsive premium",
        "Optimisation Google Business Profile",
        "Page avis clients intégrée",
        "Section actualités (gérée par mes soins)",
        "Google Analytics configuré",
        "Optimisation vitesse (score 90+ PageSpeed)",
        "Hébergement première année inclus",
        "Mise en ligne sous 3 semaines",
      ],
      isRecommended: true,
    },
    {
      title: "Pack Sur-mesure",
      price: "Sur devis",
      priceDetail: "",
      description: "Projet complexe avec besoins spécifiques",
      features: [
        "Tout le pack Pro +",
        "Fonctionnalités personnalisées",
        "Système de réservation en ligne",
        "Espace client sécurisé",
        "Catalogue produits",
        "Intégrations spécifiques",
        "Accompagnement stratégique",
        "Formation à l'utilisation",
      ],
      isRecommended: false,
    },
  ];

  const maintenance = [
    {
      title: "Formule Tranquillité",
      price: "39€",
      priceDetail: "/mois",
      features: [
        "Hébergement sécurisé",
        "Mises à jour techniques",
        "Sauvegarde hebdomadaire",
        "Support par email",
      ],
    },
    {
      title: "Formule Croissance",
      price: "79€",
      priceDetail: "/mois",
      features: [
        "Tout Tranquillité +",
        "Modifications mineures mensuelles (textes, images)",
        "Rapport analytics mensuel",
        "Support prioritaire",
      ],
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
        <ParallaxImage
          src={unsplashImages.services}
          alt="Paysages de Savoie"
          speed={0.5}
          priority
        />
        <div className="absolute inset-0 overlay-dark z-5" />

        <div className="parallax-content container mx-auto max-w-7xl px-4 py-20">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Mes offres pour votre présence en ligne
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Des packs clairs et transparents, adaptés aux artisans, commerçants et TPE de Savoie
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packs principaux */}
      <section className="relative py-16 sm:py-20 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            className="grid gap-6 md:gap-8 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {packs.map((pack) => (
              <motion.div
                key={pack.title}
                variants={fadeInUp}
                className={`relative rounded-2xl p-6 md:p-8 bg-card border ${
                  pack.isRecommended
                    ? "border-primary shadow-lg shadow-primary/20"
                    : "border-border"
                }`}
              >
                {pack.isRecommended && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                    ⭐ Recommandé
                  </Badge>
                )}

                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{pack.title}</h2>
                  <div className="mb-3">
                    <span className="text-4xl md:text-5xl font-bold">{pack.price}</span>
                    {pack.priceDetail && (
                      <span className="ml-2 text-muted-foreground text-lg">
                        {pack.priceDetail}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground">{pack.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full" size="lg">
                  <Link href="/contact">Demander un devis</Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Separator */}
      <div className="container mx-auto max-w-7xl px-4">
        <div className="h-px bg-border" />
      </div>

      {/* Maintenance Section */}
      <section className="relative py-16 sm:py-20 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            className="mx-auto mb-12 md:mb-16 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="mb-4 text-3xl md:text-4xl font-bold">Formules de maintenance</h2>
            <p className="text-lg text-muted-foreground">
              Gardez votre site à jour et performant avec nos forfaits mensuels
            </p>
          </motion.div>

          <motion.div
            className="mx-auto grid max-w-4xl gap-6 md:gap-8 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {maintenance.map((formula) => (
              <motion.div
                key={formula.title}
                variants={fadeInUp}
                className="rounded-2xl p-6 md:p-8 bg-card border border-border"
              >
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{formula.title}</h3>
                  <div>
                    <span className="text-3xl md:text-4xl font-bold">{formula.price}</span>
                    <span className="ml-2 text-muted-foreground">
                      {formula.priceDetail}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {formula.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild variant="outline" className="w-full" size="lg">
                  <Link href="/contact">En savoir plus</Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <ParallaxImage
          src={unsplashImages.cta}
          alt="Montagnes de Savoie au coucher de soleil"
          speed={0.5}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 via-black/40 to-black/60 z-5" />

        <div className="parallax-content container mx-auto max-w-7xl px-4 py-16">
          <motion.div
            className="mx-auto max-w-2xl text-center glass-dark rounded-3xl p-8 md:p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-white">
              Une question sur les offres ?
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Je suis à votre disposition pour discuter de votre projet et vous conseiller sur l'offre la plus adaptée
            </p>
            <Button asChild size="lg" className="text-base">
              <Link href="/contact">Me contacter</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
