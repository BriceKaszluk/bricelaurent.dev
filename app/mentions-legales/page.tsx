import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site Brice Laurent - Développeur Web Freelance",
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen py-16 sm:py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="mb-8 text-4xl font-bold">Mentions Légales</h1>

        <div className="prose prose-slate max-w-none dark:prose-invert">
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">
              1. Informations légales
            </h2>
            <p className="mb-2">
              <strong>Éditeur du site :</strong> Brice Laurent
            </p>
            <p className="mb-2">
              <strong>Auto-entrepreneur</strong>
            </p>
            <p className="mb-2">
              <strong>Email :</strong>{" "}
              <a
                href="mailto:brice.laurent.dev@gmail.com"
                className="text-primary hover:underline"
              >
                brice.laurent.dev@gmail.com
              </a>
            </p>
            <p className="mb-2">
              <strong>Localisation :</strong> Savoie, France
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">2. Hébergement</h2>
            <p className="mb-2">
              <strong>Hébergeur :</strong> Vercel Inc.
            </p>
            <p className="mb-2">
              <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
            </p>
            <p className="mb-2">
              <strong>Site web :</strong>{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://vercel.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">
              3. Propriété intellectuelle
            </h2>
            <p className="mb-4">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
            </p>
            <p className="mb-4">
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p>
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse de l'éditeur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">
              4. Protection des données personnelles (RGPD)
            </h2>
            <p className="mb-4">
              <strong>Responsable du traitement :</strong> Brice Laurent
            </p>
            <p className="mb-4">
              <strong>Données collectées :</strong> Lors de l'utilisation du formulaire de contact, nous collectons : nom, email, téléphone (optionnel), activité, message, offre souhaitée et budget (optionnel).
            </p>
            <p className="mb-4">
              <strong>Finalité :</strong> Ces données sont uniquement utilisées pour traiter votre demande de contact et vous répondre.
            </p>
            <p className="mb-4">
              <strong>Conservation :</strong> Vos données sont conservées pendant la durée nécessaire au traitement de votre demande et supprimées ensuite.
            </p>
            <p className="mb-4">
              <strong>Vos droits :</strong> Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation du traitement, d'opposition et de portabilité de vos données personnelles.
            </p>
            <p className="mb-4">
              Pour exercer ces droits, contactez-nous à :{" "}
              <a
                href="mailto:brice.laurent.dev@gmail.com"
                className="text-primary hover:underline"
              >
                brice.laurent.dev@gmail.com
              </a>
            </p>
            <p>
              Les données ne sont ni vendues, ni partagées avec des tiers, ni utilisées à des fins commerciales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">5. Cookies</h2>
            <p>
              Ce site n'utilise pas de cookies de tracking ou de cookies publicitaires. Seuls les cookies strictement nécessaires au fonctionnement du site peuvent être utilisés.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">
              6. Responsabilité
            </h2>
            <p className="mb-4">
              L'éditeur du site ne saurait être tenu responsable des erreurs rencontrées sur le site, de problèmes techniques, ou de tout dommage résultant de l'utilisation du site.
            </p>
            <p>
              L'utilisateur s'engage à utiliser le site conformément à son usage normal et à ne pas porter atteinte à son fonctionnement.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              7. Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <div className="mt-12 border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">
              Dernière mise à jour : Décembre 2025
            </p>
            <p className="mt-4">
              <Link href="/" className="text-primary hover:underline">
                ← Retour à l'accueil
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
