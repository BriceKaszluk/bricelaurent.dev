"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { unsplashImages } from "@/lib/unsplash-images";
import { fadeInUp, fadeInScale } from "@/lib/animations";

export function CTA() {
  return (
    <section className="snap-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <ParallaxImage
        src={unsplashImages.cta}
        alt="Coucher de soleil doré sur les montagnes de Savoie"
        speed={0.5}
      />

      {/* Warm Golden Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 via-black/40 to-black/60 z-5" />

      {/* Content */}
      <div className="parallax-content container mx-auto max-w-7xl px-4">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInScale}
        >
          {/* Glass Card */}
          <div className="glass-dark rounded-3xl p-8 md:p-12 lg:p-16">
            <motion.h2
              className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-6xl"
              variants={fadeInUp}
            >
              Prêt à lancer votre projet web ?
            </motion.h2>

            <motion.p
              className="mx-auto mb-10 max-w-2xl text-lg text-white/80 md:text-xl"
              variants={fadeInUp}
            >
              Discutons de votre projet et voyons ensemble comment créer un site qui vous ressemble et qui convertit.
            </motion.p>

            <motion.div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-8"
              variants={fadeInUp}
            >
              <Button asChild size="lg" className="group w-full sm:w-auto text-base">
                <Link href="/contact">
                  Me contacter
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
              >
                <Link href="/offres">Voir les tarifs</Link>
              </Button>
            </motion.div>

            <motion.p
              className="text-sm text-white/70 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
              variants={fadeInUp}
            >
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Réponse sous 24-48h
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Devis gratuit
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Sans engagement
              </span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
