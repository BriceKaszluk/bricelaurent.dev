"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  sections: string[];
}

export function ScrollIndicator({ sections }: ScrollIndicatorProps) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSection = Math.round(scrollPosition / windowHeight);
      setActiveSection(Math.min(currentSection, sections.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections.length]);

  const scrollToSection = (index: number) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
      {sections.map((section, index) => (
        <button
          key={section}
          onClick={() => scrollToSection(index)}
          className="group relative"
          aria-label={`Aller à ${section}`}
        >
          <motion.div
            className={`h-3 w-3 rounded-full border-2 transition-colors ${
              activeSection === index
                ? "bg-primary border-primary"
                : "bg-transparent border-white/50"
            }`}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.2 }}
          />
          <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white px-2 py-1 rounded text-sm whitespace-nowrap pointer-events-none">
            {section}
          </span>
        </button>
      ))}
    </div>
  );
}
