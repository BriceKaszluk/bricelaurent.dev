"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Clock } from "lucide-react";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { unsplashImages } from "@/lib/unsplash-images";
import { fadeInUp, fadeInScale, staggerContainer } from "@/lib/animations";

export default function AProposPage() {
  const skills = [
    { name: "React / Next.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Bases de données", category: "Data" },
    { name: "SEO & Performance", category: "Optimisation" },
  ];

  const values = [
    {
      title: "Proximité",
      description: "Un interlocuteur unique, disponible et à l'écoute",
    },
    {
      title: "Transparence",
      description: "Prix clairs, pas de surprise, communication ouverte",
    },
    {
      title: "Qualité",
      description: "Technologies modernes, bonnes pratiques, code propre",
    },
    {
      title: "Efficacité",
      description: "Délais respectés, communication fluide, résultats concrets",
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
        <ParallaxImage
          src={unsplashImages.hero}
          alt="Montagnes de Savoie"
          speed={0.5}
          priority
        />
        <div className="absolute inset-0 overlay-mountain z-5" />

        <div className="parallax-content container mx-auto max-w-7xl px-4 py-20">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              À propos de moi
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Développeur web freelance passionné, au service des entrepreneurs locaux
            </p>
          </motion.div>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[300px_1fr] items-center">
            {/* Photo */}
            <motion.div
              className="mx-auto"
              initial="hidden"
              animate="visible"
              variants={fadeInScale}
            >
              <div className="relative h-64 w-64 overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/profil-ronde.png"
                  alt="Brice Laurent"
                  fill
                  className="object-cover"
                  sizes="256px"
                />
              </div>
            </motion.div>

            {/* Texte */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <h2 className="mb-4 text-3xl md:text-4xl font-bold">Brice Laurent</h2>
                <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
                  Développeur web passionné, je suis basé en Savoie où j'accompagne les entrepreneurs locaux dans leur présence en ligne.
                </p>
                <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
                  Après <strong>4 années d'expérience</strong> en développement web, j'ai choisi de me spécialiser dans la création de sites pour les artisans, commerçants et TPE de notre région.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mon approche : des sites <strong>performants</strong>, rapides à charger, et pensés pour <strong>convertir vos visiteurs en clients</strong>. Pas de jargon technique, pas de fonctionnalités inutiles — juste ce dont vous avez besoin pour développer votre activité.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Button asChild size="lg">
                  <Link href="/contact">Discutons de votre projet</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden py-16 sm:py-20">
        <ParallaxImage
          src={unsplashImages.advantages}
          alt="Forêt de Savoie"
          speed={0.5}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-black/60 z-5" />

        <div className="parallax-content container mx-auto max-w-7xl px-4 w-full">
          <motion.h2
            className="mb-8 md:mb-12 text-center text-3xl md:text-4xl font-bold text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Compétences techniques
          </motion.h2>

          <motion.div
            className="grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={fadeInScale}
                className="glass-dark rounded-2xl p-6 text-center"
              >
                <p className="mb-1 font-heading text-lg font-semibold text-white">
                  {skill.name}
                </p>
                <p className="text-sm text-white/70">
                  {skill.category}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            className="mx-auto max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2
              className="mb-12 md:mb-16 text-center text-3xl md:text-4xl font-bold"
              variants={fadeInUp}
            >
              Mes valeurs
            </motion.h2>

            <div className="grid gap-6 md:gap-8 sm:grid-cols-2">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  className="rounded-2xl border border-border bg-card p-6 md:p-8"
                >
                  <h3 className="mb-2 text-xl md:text-2xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Zone d'intervention & Contact */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden py-16 sm:py-20">
        <ParallaxImage
          src={unsplashImages.testimonials}
          alt="Lac alpin de Savoie"
          speed={0.5}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/40 to-black/50 z-5" />

        <div className="parallax-content container mx-auto max-w-7xl px-4 w-full">
          <motion.div
            className="mx-auto max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2
              className="mb-8 md:mb-12 text-center text-3xl md:text-4xl font-bold text-white"
              variants={fadeInUp}
            >
              Zone d'intervention & Contact
            </motion.h2>

            <div className="grid gap-6 sm:grid-cols-3">
              <motion.div
                variants={fadeInUp}
                className="glass-dark rounded-2xl p-6 md:p-8 flex flex-col items-center text-center"
              >
                <MapPin className="mb-3 h-10 w-10 text-accent" />
                <h3 className="mb-2 font-semibold text-white text-lg">Zone d'intervention</h3>
                <p className="text-sm text-white/80">
                  Savoie, Haute-Savoie, Rhône-Alpes
                </p>
                <p className="mt-2 text-xs text-white/60">
                  Interventions à distance possibles
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="glass-dark rounded-2xl p-6 md:p-8 flex flex-col items-center text-center"
              >
                <Mail className="mb-3 h-10 w-10 text-accent" />
                <h3 className="mb-2 font-semibold text-white text-lg">Email</h3>
                <a
                  href="mailto:brice.laurent.dev@gmail.com"
                  className="text-sm text-accent hover:underline"
                >
                  brice.laurent.dev@gmail.com
                </a>
                <p className="mt-2 text-xs text-white/60">
                  Réponse sous 24-48h
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="glass-dark rounded-2xl p-6 md:p-8 flex flex-col items-center text-center"
              >
                <Clock className="mb-3 h-10 w-10 text-accent" />
                <h3 className="mb-2 font-semibold text-white text-lg">Disponibilité</h3>
                <p className="text-sm text-white/80">
                  Du lundi au vendredi
                </p>
                <p className="text-sm text-white/80">9h - 18h</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
