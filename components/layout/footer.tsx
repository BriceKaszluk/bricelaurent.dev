import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container mx-auto max-w-screen-xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Contact */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:brice.laurent.dev@gmail.com"
                  className="hover:text-foreground transition-colors"
                >
                  brice.laurent.dev@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>
                  <p>Savoie, Haute-Savoie</p>
                  <p className="text-xs">Rhône-Alpes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Accueil
              </Link>
              <Link
                href="/offres"
                className="hover:text-foreground transition-colors"
              >
                Offres & Tarifs
              </Link>
              <Link
                href="/mon-approche"
                className="hover:text-foreground transition-colors"
              >
                Mon Approche
              </Link>
              <Link
                href="/a-propos"
                className="hover:text-foreground transition-colors"
              >
                À propos
              </Link>
              <Link
                href="/contact"
                className="hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Informations */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold">
              Informations
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Développeur web freelance</p>
              <p>Spécialisé dans les sites vitrines</p>
              <p className="text-xs">
                Du lundi au vendredi
                <br />
                9h - 18h
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row">
          <p>© {currentYear} Brice Laurent. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link
              href="/mentions-legales"
              className="hover:text-foreground transition-colors"
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
