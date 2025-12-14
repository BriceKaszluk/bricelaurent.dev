"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type SectionItem = { id: string; label: string };

interface ScrollIndicatorProps {
  sections: SectionItem[];
  headerOffset?: number; // si tu as une navbar fixed
}

export function ScrollIndicator({ sections, headerOffset = 0 }: ScrollIndicatorProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  const ids = useMemo(() => sections.map((s) => s.id), [sections]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // on garde l’entrée la plus visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        // on considère "active" quand la section est dans la zone centrale de l'écran
        rootMargin: `-${headerOffset + 80}px 0px -50% 0px`,
        threshold: [0.15, 0.25, 0.35, 0.5, 0.65],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, headerOffset]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
      {sections.map((section) => {
        const isActive = activeId === section.id;

        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative"
            aria-label={`Aller à ${section.label}`}
            type="button"
          >
            <motion.div
              className={`h-3 w-3 rounded-full border-2 transition-colors ${
                isActive ? "bg-primary border-primary" : "bg-transparent border-white/50"
              }`}
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.2 }}
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white px-2 py-1 rounded text-sm whitespace-nowrap pointer-events-none">
              {section.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
