"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { unsplashImages } from "@/lib/unsplash-images";
import { fadeInUp, fadeInScale } from "@/lib/animations";

export function Hero() {
  return (
    <section className="snap-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <ParallaxImage
        src={unsplashImages.hero}
        alt="Sommets enneigés de Savoie"
        speed={0.5}
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 overlay-mountain z-[5]" />

      {/* Content */}
      <div className="parallax-content container mx-auto max-w-screen-xl px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Glass Card */}
          <motion.div
            className="glass-dark rounded-3xl p-8 md:p-12"
            initial="hidden"
            animate="visible"
            variants={fadeInScale}
          >
            {/* Badge */}
            <motion.div
              className="mb-8 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm backdrop-blur-sm"
              variants={fadeInUp}
            >
              <span className="mr-2 h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-white">
                Développeur freelance basé en Savoie
              </span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl"
              variants={fadeInUp}
            >
              Développeur web freelance{" "}
              <span className="bg-gradient-to-r from-accent to-primary-light bg-clip-text text-transparent">
                en Savoie
              </span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              className="mx-auto mb-10 max-w-2xl text-lg text-white/90 sm:text-xl"
              variants={fadeInUp}
            >
              Sites performants pour artisans, commerçants et TPE. Des
              solutions web modernes et accessibles pour développer votre
              activité.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              variants={fadeInUp}
            >
              <Button asChild size="lg" className="group w-full sm:w-auto">
                <Link href="/offres">
                  Voir les offres
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
              >
                <Link href="/contact">Me contacter</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-8 w-8 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
