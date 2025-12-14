import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: (delayChildren: number = 0.3) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren },
  }),
};

export const parallaxUp: Variants = {
  hidden: { y: 100 },
  visible: (delay: number = 0) => ({
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};