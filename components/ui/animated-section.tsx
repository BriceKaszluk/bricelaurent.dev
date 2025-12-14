"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        ...fadeInUp,
        visible: {
          ...fadeInUp.visible,
          transition: { ...fadeInUp.visible.transition, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
