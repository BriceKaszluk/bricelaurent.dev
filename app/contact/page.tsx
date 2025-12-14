"use client";

import type { Metadata } from "next";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/forms/contact-form";
import { Mail, MapPin, Clock } from "lucide-react";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { unsplashImages } from "@/lib/unsplash-images";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ContactPage() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
        <ParallaxImage
          src={unsplashImages.cta}
          alt="Montagnes de Savoie"
          speed={0.5}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 via-black/40 to-black/60 z-5" />

        <div className="parallax-content container mx-auto max-w-7xl px-4 py-20">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Parlons de votre projet
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Je vous réponds sous <strong>24-48h</strong>. Devis gratuit et sans engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
            {/* Formulaire */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <div className="mb-8">
                <h2 className="mb-2 text-2xl md:text-3xl font-bold">Demande de devis</h2>
                <p className="text-muted-foreground text-lg">
                  Remplissez le formulaire ci-dessous et je reviendrai vers vous rapidement.
                </p>
              </div>
              <ContactForm />
            </motion.div>

            {/* Informations de contact */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <h2 className="mb-6 text-2xl md:text-3xl font-bold">Informations</h2>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="mt-1 h-6 w-6 shrink-0 text-primary" />
                      <div>
                        <h3 className="mb-1 font-semibold text-lg">Email</h3>
                        <a
                          href="mailto:brice.laurent.dev@gmail.com"
                          className="text-sm text-primary hover:underline"
                        >
                          brice.laurent.dev@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="mt-1 h-6 w-6 shrink-0 text-primary" />
                      <div>
                        <h3 className="mb-1 font-semibold text-lg">Zone d'intervention</h3>
                        <p className="text-sm text-muted-foreground">
                          Savoie, Haute-Savoie, Rhône-Alpes
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Interventions à distance possibles
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-6">
                    <div className="flex items-start gap-4">
                      <Clock className="mt-1 h-6 w-6 shrink-0 text-primary" />
                      <div>
                        <h3 className="mb-1 font-semibold text-lg">Disponibilité</h3>
                        <p className="text-sm text-muted-foreground">
                          Du lundi au vendredi
                          <br />
                          9h - 18h
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Engagement */}
              <motion.div
                variants={fadeInUp}
                className="rounded-2xl border border-primary/20 bg-primary/5 p-6"
              >
                <h3 className="mb-3 font-semibold text-lg">Mon engagement</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Réponse sous 24-48h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Devis détaillé et transparent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Aucun frais caché</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Sans engagement de votre part</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
