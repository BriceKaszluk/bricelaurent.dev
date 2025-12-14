"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number; // 0.5 = slow, 1 = normal, 2 = fast
  priority?: boolean;
}

export function ParallaxImage({
  src,
  alt,
  speed = 0.5,
  priority = false,
}: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 50}%`]);

  return (
  <div ref={ref} className="absolute inset-0 overflow-hidden">
    <motion.div className="relative h-full w-full" style={{ y }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        sizes="100vw"
      />
    </motion.div>
  </div>
  );
}
