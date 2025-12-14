"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/offres", label: "Offres" },
  { href: "/mon-approche", label: "Mon Approche" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md text-foreground shadow-sm border-b border-border/40"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-brice-dev.png"
            alt="Brice Laurent - Développeur Web"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <span
            className={`hidden font-heading text-lg font-semibold sm:inline-block transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            Brice Laurent
          </span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-foreground/60 hover:text-foreground"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Nav */}
        <div className="flex items-center gap-4">
          <Button asChild size="sm" className="hidden sm:flex">
            <Link href="/contact">Demander un devis</Link>
          </Button>

          {/* Navigation mobile */}
          <div className="md:hidden">
            <MobileNav navLinks={navLinks} isScrolled={isScrolled} />
          </div>
        </div>
      </div>
    </header>
  );
}
