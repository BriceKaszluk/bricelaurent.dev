# 🏔️ Site Vitrine - Développeur Web Freelance Savoie

## Contexte du projet

Site vitrine professionnel pour un développeur web freelance basé en Savoie, ciblant les artisans, commerçants, TPE et associations locales.

**Objectif principal** : Générer des demandes de devis via un funnel simple avec des offres packagées à prix affichés.

**Positionnement** : Proximité locale + prix accessibles + expertise technique moderne.

---

## Stack technique OBLIGATOIRE

| Technologie | Version | Notes |
|-------------|---------|-------|
| **Next.js** | 16.x (stable) | App Router uniquement, Turbopack activé par défaut |
| **React** | 19.2.x | Dernière version stable |
| **TypeScript** | 5.1+ | Obligatoire, mode strict activé |
| **Tailwind CSS** | 4.x | Configuration CSS-first (pas de tailwind.config.js) |
| **shadcn/ui** | Dernière version | Style "new-york", compatible Tailwind v4 |
| **Node.js** | 20.x minimum | Requis par Next.js 16 |

### Dépendances additionnelles

```json
{
  "dependencies": {
    "next": "^16.0.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "lucide-react": "latest",
    "clsx": "latest",
    "tailwind-merge": "latest"
  },
  "devDependencies": {
    "typescript": "^5.1.0",
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "@tailwindcss/postcss": "latest",
    "tw-animate-css": "latest"
  }
}
```

---

## Structure du projet

```
src/
├── app/
│   ├── layout.tsx              # Layout racine avec metadata SEO
│   ├── page.tsx                # Page d'accueil
│   ├── offres/
│   │   └── page.tsx            # Page détail des 3 offres
│   ├── realisations/
│   │   └── page.tsx            # Portfolio / études de cas
│   ├── a-propos/
│   │   └── page.tsx            # Présentation personnelle
│   ├── contact/
│   │   └── page.tsx            # Formulaire de contact
│   └── globals.css             # Styles globaux + config Tailwind v4
├── components/
│   ├── ui/                     # Composants shadcn/ui
│   ├── layout/
│   │   ├── header.tsx          # Navigation principale
│   │   └── footer.tsx          # Pied de page
│   ├── sections/
│   │   ├── hero.tsx            # Section héro page d'accueil
│   │   ├── services.tsx        # Aperçu des 3 offres
│   │   ├── testimonials.tsx    # Témoignages clients
│   │   ├── cta.tsx             # Call-to-action
│   │   └── pricing-card.tsx    # Carte de tarification
│   └── forms/
│       └── contact-form.tsx    # Formulaire de demande de devis
├── lib/
│   └── utils.ts                # Utilitaires (cn, etc.)
└── public/
    ├── images/                 # Images optimisées
    └── fonts/                  # Polices locales si nécessaire
```

---

## Configuration Tailwind CSS v4

Le fichier `globals.css` DOIT utiliser la syntaxe Tailwind v4 (CSS-first) :

```css
@import "tailwindcss";
@import "tw-animate-css";

@theme {
  /* Palette inspirée Savoie - tons naturels et montagne */
  --color-primary: oklch(45% 0.15 250);      /* Bleu alpin profond */
  --color-primary-light: oklch(60% 0.12 250);
  --color-secondary: oklch(55% 0.08 85);     /* Vert sapin */
  --color-accent: oklch(70% 0.15 45);        /* Orange/bois chaud */
  
  --color-background: oklch(98% 0.005 250);
  --color-foreground: oklch(20% 0.02 250);
  --color-muted: oklch(95% 0.005 250);
  --color-muted-foreground: oklch(45% 0.02 250);
  
  --color-card: oklch(100% 0 0);
  --color-card-foreground: oklch(20% 0.02 250);
  --color-border: oklch(90% 0.01 250);
  
  /* Radius et spacing */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  
  /* Fonts */
  --font-sans: "Inter", system-ui, sans-serif;
  --font-heading: "Plus Jakarta Sans", var(--font-sans);
}

/* Mode sombre */
.dark {
  --color-background: oklch(15% 0.01 250);
  --color-foreground: oklch(95% 0.005 250);
  --color-muted: oklch(25% 0.01 250);
  --color-muted-foreground: oklch(65% 0.01 250);
  --color-card: oklch(20% 0.01 250);
  --color-border: oklch(30% 0.01 250);
}
```

**IMPORTANT** : NE PAS créer de fichier `tailwind.config.js` ou `tailwind.config.ts`. Tailwind v4 utilise la configuration CSS-first exclusivement.

---

## Contenu des pages

### 1. Page d'accueil (`/`)

**Structure obligatoire** :

1. **Hero Section**
   - Titre : "Développeur web freelance en Savoie"
   - Sous-titre : "Sites performants pour artisans, commerçants et TPE"
   - CTA principal : "Voir les offres" → `/offres`
   - CTA secondaire : "Me contacter" → `/contact`
   - Image/illustration : montagne stylisée ou paysage savoyard abstrait

2. **Section Services** (aperçu des 3 offres)
   - 3 cartes résumant les packs
   - Lien vers page `/offres` pour détails

3. **Section Avantages**
   - Proximité locale (basé en Savoie)
   - Interlocuteur unique
   - Technologies modernes
   - Tarifs adaptés aux petites structures

4. **Section Témoignages**
   - 3 témoignages (études de cas simulées au lancement)
   - Format : citation + nom + activité + localisation

5. **Section CTA finale**
   - "Discutons de votre projet"
   - Bouton vers formulaire contact

---

### 2. Page Offres (`/offres`)

**Les 3 packs OBLIGATOIRES** :

#### Pack Essentiel - À partir de 790€

```
Inclus :
- Site vitrine 1 à 3 pages
- Design responsive (mobile, tablette, desktop)
- Formulaire de contact fonctionnel
- Optimisation SEO local de base
- Hébergement première année inclus
- Mise en ligne sous 2 semaines

Idéal pour : Artisan ou commerçant qui démarre sur le web
```

#### Pack Pro - À partir de 1490€ ⭐ RECOMMANDÉ

```
Inclus :
- Site vitrine 5 à 7 pages
- Design responsive premium
- Optimisation Google Business Profile
- Page avis clients intégrée
- Section actualités (gérée par mes soins)
- Google Analytics configuré
- Optimisation vitesse (score 90+ PageSpeed)
- Hébergement première année inclus
- Mise en ligne sous 3 semaines

Idéal pour : Entreprise locale qui veut se démarquer
```

#### Pack Sur-mesure - Sur devis

```
Inclus :
- Tout le pack Pro +
- Fonctionnalités personnalisées :
  - Système de réservation en ligne
  - Espace client sécurisé
  - Catalogue produits
  - Intégrations spécifiques
- Accompagnement stratégique
- Formation à l'utilisation

Idéal pour : Projet complexe avec besoins spécifiques
```

#### Maintenance (section séparée)

```
Formule Tranquillité - 39€/mois
- Hébergement sécurisé
- Mises à jour techniques
- Sauvegarde hebdomadaire
- Support par email

Formule Croissance - 79€/mois
- Tout Tranquillité +
- Modifications mineures mensuelles (textes, images)
- Rapport analytics mensuel
- Support prioritaire
```

**UI/UX des cartes de prix** :
- Pack Pro visuellement mis en avant (badge "Recommandé", bordure colorée)
- Prix en grand, visible immédiatement
- Liste à puces avec icônes check
- CTA "Demander un devis" sur chaque carte

---

### 3. Page Réalisations (`/realisations`)

**Format études de cas** (3 minimum au lancement) :

Structure par projet :
- Image/mockup du site
- Nom du projet (peut être anonymisé : "Site vitrine - Plombier Chambéry")
- Secteur d'activité
- Problématique initiale
- Solution apportée
- Résultats (même estimés : "Site 2x plus rapide", "Premier sur Google local")
- Technologies utilisées (icônes)

**Projets à inclure** :
1. Calinou (application personnelle - montrer expertise technique)
2. Artiflow (application personnelle - montrer capacité fullstack)
3. Exemple fictif artisan local (plombier, électricien, etc.)

---

### 4. Page À propos (`/a-propos`)

**Contenu obligatoire** :

1. **Photo professionnelle** (placeholder si non fournie)

2. **Texte de présentation** :
```
Développeur web passionné, je suis basé en Savoie où j'accompagne 
les entrepreneurs locaux dans leur présence en ligne.

Après [X années] d'expérience en développement web, j'ai choisi 
de me spécialiser dans la création de sites pour les artisans, 
commerçants et TPE de notre région.

Mon approche : des sites performants, rapides à charger, et pensés 
pour convertir vos visiteurs en clients. Pas de jargon technique, 
pas de fonctionnalités inutiles — juste ce dont vous avez besoin 
pour développer votre activité.
```

3. **Compétences techniques** (icônes discrets, pas de liste exhaustive)
   - React / Next.js
   - Node.js
   - Bases de données
   - SEO & Performance

4. **Valeurs** :
   - Proximité : Un interlocuteur unique, disponible
   - Transparence : Prix clairs, pas de surprise
   - Qualité : Technologies modernes, bonnes pratiques
   - Efficacité : Délais respectés, communication fluide

---

### 5. Page Contact (`/contact`)

**Formulaire obligatoire** avec les champs :

```typescript
interface ContactForm {
  nom: string;              // Requis
  email: string;            // Requis, validation email
  telephone?: string;       // Optionnel
  activite: string;         // Requis (ex: "Plombier", "Restaurant", etc.)
  offre: "essentiel" | "pro" | "sur-mesure" | "ne-sait-pas"; // Select
  message: string;          // Requis, textarea
  budget?: "moins-1000" | "1000-2000" | "plus-2000" | "ne-sait-pas"; // Select optionnel
}
```

**Après soumission** :
- Message de confirmation
- Délai de réponse annoncé : "Je vous réponds sous 24-48h"

**Informations de contact additionnelles** :
- Email direct
- Zone d'intervention : Savoie, Haute-Savoie, Rhône-Alpes
- Disponibilité : Du lundi au vendredi

---

## SEO & Metadata

### Configuration obligatoire dans `layout.tsx`

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://[DOMAINE]'),
  title: {
    default: 'Développeur Web Freelance Savoie | Sites pour Artisans & TPE',
    template: '%s | [NOM] - Développeur Web Savoie'
  },
  description: 'Développeur web freelance en Savoie. Création de sites vitrines performants pour artisans, commerçants et TPE. Devis gratuit, tarifs transparents.',
  keywords: [
    'développeur web savoie',
    'création site internet savoie',
    'site vitrine artisan',
    'développeur freelance chambéry',
    'site web tpe savoie',
    'création site commerçant'
  ],
  authors: [{ name: '[NOM]' }],
  creator: '[NOM]',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: '[NOM] - Développeur Web Savoie',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  }
}
```

### Metadata par page

Chaque page DOIT avoir ses propres metadata optimisées pour le SEO local.

---

## Composants shadcn/ui à installer

```bash
npx shadcn@latest init
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add select
npx shadcn@latest add label
npx shadcn@latest add badge
npx shadcn@latest add separator
npx shadcn@latest add navigation-menu
npx shadcn@latest add sheet
npx shadcn@latest add form
```

**Configuration shadcn** : Style "new-york", couleurs personnalisées via CSS variables.

---

## Performance & Optimisation

### Objectifs obligatoires

- **Lighthouse Performance** : > 90
- **Lighthouse SEO** : > 95
- **Lighthouse Accessibility** : > 90
- **Core Web Vitals** : Tous en vert

### Techniques à appliquer

1. **Images** :
   - Utiliser `next/image` systématiquement
   - Format WebP/AVIF
   - Lazy loading par défaut
   - Dimensions explicites

2. **Fonts** :
   - Utiliser `next/font` pour les polices Google
   - Subset français uniquement
   - Display swap

3. **Composants** :
   - Server Components par défaut
   - Client Components uniquement si interaction nécessaire
   - Pas de `"use client"` inutile

4. **Bundle** :
   - Turbopack activé (défaut Next.js 16)
   - Pas de dépendances lourdes inutiles

---

## Design & UI

### Principes

1. **Identité savoyarde subtile**
   - Palette inspirée des Alpes (bleus profonds, verts sapins, touches bois)
   - Pas de clichés (edelweiss, vaches, etc.)
   - Modernité + authenticité

2. **Clarté**
   - Hiérarchie visuelle forte
   - Beaucoup d'espace blanc
   - Typographie lisible

3. **Confiance**
   - Design professionnel mais accessible
   - Pas de dark patterns
   - Prix visibles

4. **Mobile-first**
   - Navigation hamburger sur mobile
   - Touch targets 44px minimum
   - Formulaires optimisés mobile

### Animations

- Subtiles et performantes
- `tw-animate-css` pour les animations de base
- Pas d'animations bloquantes ou distrayantes
- `prefers-reduced-motion` respecté

---

## Accessibilité (a11y)

### Obligatoire

- Contraste WCAG AA minimum
- Focus visible sur tous les éléments interactifs
- Landmarks ARIA corrects
- Alt text sur toutes les images
- Labels sur tous les champs de formulaire
- Navigation au clavier fonctionnelle

---

## Formulaire de contact - Implémentation

### Option 1 : Sans backend (recommandé pour MVP)

Utiliser un service tiers :
- **Formspree** (gratuit jusqu'à 50 soumissions/mois)
- **Getform**
- **Web3Forms**

```typescript
// Exemple avec Formspree
const handleSubmit = async (data: ContactForm) => {
  const response = await fetch('https://formspree.io/f/[FORM_ID]', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  // Gérer la réponse
}
```

### Option 2 : Avec Server Action (Next.js 16)

```typescript
// app/contact/actions.ts
'use server'

import { z } from 'zod'

const ContactSchema = z.object({
  nom: z.string().min(2),
  email: z.string().email(),
  // ...
})

export async function submitContact(formData: FormData) {
  const validated = ContactSchema.parse(Object.fromEntries(formData))
  // Envoyer email via Resend, Nodemailer, etc.
}
```

---

## Déploiement

### Plateforme recommandée : Vercel

- Gratuit pour projets personnels
- Optimisé pour Next.js
- HTTPS automatique
- Preview deployments

### Configuration

```json
// vercel.json (optionnel)
{
  "framework": "nextjs",
  "regions": ["cdg1"]  // Paris - proche Savoie
}
```

### Domaine

- Prévoir achat domaine (.fr recommandé pour SEO local)
- Configuration DNS sur Vercel

---

## Checklist avant mise en production

- [ ] Toutes les pages créées et fonctionnelles
- [ ] Formulaire de contact testé
- [ ] Metadata SEO sur chaque page
- [ ] Images optimisées
- [ ] Lighthouse > 90 sur toutes les métriques
- [ ] Test mobile complet
- [ ] Test accessibilité
- [ ] Mentions légales / CGV si nécessaire
- [ ] Google Analytics configuré (optionnel)
- [ ] Google Search Console (après mise en ligne)
- [ ] Google Business Profile mis à jour avec lien site

---

## Notes pour Claude Code

### À FAIRE

1. Utiliser UNIQUEMENT les versions spécifiées (Next.js 16, Tailwind v4, React 19.2)
2. Suivre la structure de fichiers exacte
3. Implémenter TOUS les composants demandés
4. Respecter la palette de couleurs Savoie
5. Optimiser pour le SEO local dès le départ
6. Tester la responsivité sur toutes les tailles d'écran

### À NE PAS FAIRE

1. NE PAS utiliser Pages Router (App Router uniquement)
2. NE PAS créer de fichier `tailwind.config.js` (Tailwind v4 = CSS-first)
3. NE PAS utiliser `tailwindcss-animate` (remplacé par `tw-animate-css`)
4. NE PAS ajouter de dépendances non listées sans justification
5. NE PAS utiliser de composants client inutilement
6. NE PAS négliger l'accessibilité

### Ordre de développement suggéré

1. Configuration projet (Next.js, Tailwind, shadcn)
2. Layout global (header, footer)
3. Page d'accueil
4. Page offres
5. Page contact + formulaire
6. Page réalisations
7. Page à propos
8. Optimisations finales (SEO, performance, a11y)

---

## Variables d'environnement

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://[DOMAINE]
FORMSPREE_FORM_ID=[ID]  # ou autre service de formulaire
# RESEND_API_KEY=[KEY]  # si envoi email direct
```

---

## Ressources

- [Documentation Next.js 16](https://nextjs.org/docs)
- [Documentation Tailwind CSS v4](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

---

*Ce README est le document de référence pour le développement du site. Toute déviation doit être justifiée et documentée.*
