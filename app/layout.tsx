import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brice-laurent-dev.vercel.app"),
  title: {
    default:
      "Brice Laurent - Développeur Web Freelance Savoie | Sites pour Artisans & TPE",
    template: "%s | Brice Laurent - Développeur Web Savoie",
  },
  description:
    "Développeur web freelance en Savoie. Création de sites vitrines performants pour artisans, commerçants et TPE. Devis gratuit, tarifs transparents dès 790€.",
  keywords: [
    "développeur web savoie",
    "création site internet savoie",
    "site vitrine artisan",
    "développeur freelance chambéry",
    "site web tpe savoie",
    "création site commerçant savoie",
    "brice laurent développeur",
  ],
  authors: [{ name: "Brice Laurent" }],
  creator: "Brice Laurent",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Brice Laurent - Développeur Web Savoie",
    title: "Brice Laurent - Développeur Web Freelance Savoie",
    description:
      "Développeur web freelance en Savoie. Création de sites vitrines performants pour artisans, commerçants et TPE. Devis gratuit, tarifs transparents dès 790€.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>
        <Header />
        <main className="snap-container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
