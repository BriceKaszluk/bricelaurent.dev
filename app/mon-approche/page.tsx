"use client";

import type { Metadata } from "next";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Check, MessageSquare, FileText, Code, Rocket, HeadphonesIcon } from "lucide-react";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { unsplashImages } from "@/lib/unsplash-images";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function MonApprochePage() {
  const steps = [
    {
      number: "01",
      title: "Échange initial",
      description:
        "Nous discutons de votre projet, vos besoins, vos objectifs et votre budget. C'est l'occasion de faire connaissance et de voir si nous pouvons travailler ensemble.",
      icon: MessageSquare,
    },
    {
      number: "02",
      title: "Proposition & Devis",
      description:
        "Je vous envoie une proposition détaillée avec le devis correspondant à votre projet. Pas de surprise, tout est clair dès le début.",
      icon: FileText,
    },
    {
      number: "03",
      title: "Création & Validations",
      description:
        "Je crée votre site et vous présente régulièrement l'avancement. Vous validez chaque étape et pouvez demander des ajustements.",
      icon: Code,
    },
    {
      number: "04",
      title: "Formation & Mise en ligne",
      description:
        "Je vous forme à l'utilisation de votre site si nécessaire, puis je le mets en ligne. Vous êtes autonome dès le premier jour.",
      icon: Rocket,
    },
    {
      number: "05",
      title: "Suivi & Maintenance",
      description:
        "Je reste disponible après la mise en ligne pour toute question. Vous pouvez souscrire à une formule de maintenance pour un suivi à long terme.",
      icon: HeadphonesIcon,
    },
  ];

  const technologies = [
    { name: "Next.js", description: "Framework React moderne" },
    { name: "React", description: "Bibliothèque JavaScript" },
    { name: "TypeScript", description: "JavaScript typé" },
    { name: "Tailwind CSS", description: "Framework CSS utilitaire" },
    { name: "Node.js", description: "Runtime JavaScript" },
    { name: "Vercel", description: "Hébergement performant" },
  ];

  const guarantees = [
    "Performance Lighthouse > 90",
    "Design 100% responsive",
    "SEO optimisé dès le départ",
    "Code propre et maintenable",
    "Support post-lancement inclus",
    "Livraison dans les délais",
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
        <ParallaxImage
          src={unsplashImages.advantages}
          alt="Forêt de Savoie"
          speed={0.5}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-5" />

        <div className="parallax-content container mx-auto max-w-7xl px-4 py-20">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Comment je travaille avec vous
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Un processus transparent et structuré pour donner vie à votre projet web
            </p>
          </motion.div>
        </div>
      </section>

      {/* Processus étape par étape */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.h2
            className="mb-12 md:mb-16 text-center text-3xl md:text-4xl font-bold"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Mon processus en 5 étapes
          </motion.h2>

          <motion.div
            className="space-y-6 md:space-y-8 max-w-5xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  className="rounded-2xl border border-border bg-card p-6 sm:p-8"
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                    {/* Number & Icon */}
                    <div className="flex items-center gap-4 sm:flex-col sm:items-center">
                      <Badge
                        variant="outline"
                        className="h-12 w-12 rounded-full text-lg font-bold shrink-0"
                      >
                        {step.number}
                      </Badge>
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl md:text-2xl font-semibold">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden py-16 sm:py-20">
        <ParallaxImage
          src={unsplashImages.testimonials}
          alt="Lac alpin de Savoie"
          speed={0.5}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50 z-5" />

        <div className="parallax-content container mx-auto max-w-7xl px-4 w-full">
          <motion.div
            className="mx-auto mb-12 md:mb-16 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-white">Technologies modernes</h2>
            <p className="text-lg text-white/80">
              J'utilise des outils performants pour créer des sites rapides et fiables
            </p>
          </motion.div>

          <motion.div
            className="mx-auto grid max-w-4xl gap-4 md:gap-6 grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={fadeInUp}
                className="glass rounded-2xl p-6"
              >
                <h3 className="mb-1 font-heading text-lg font-semibold text-white">
                  {tech.name}
                </h3>
                <p className="text-sm text-white/70">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            className="mx-auto mb-12 md:mb-16 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="mb-4 text-3xl md:text-4xl font-bold">Mes garanties</h2>
            <p className="text-lg text-muted-foreground">
              Des engagements concrets pour la qualité de votre site
            </p>
          </motion.div>

          <motion.div
            className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {guarantees.map((guarantee) => (
              <motion.div
                key={guarantee}
                variants={fadeInUp}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-6"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="font-medium">{guarantee}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
