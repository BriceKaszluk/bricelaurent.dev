# 🚀 Guide d'utilisation - Site Vitrine Brice Laurent

## ✅ Félicitations ! Votre site est prêt

Votre site vitrine professionnel est maintenant créé avec toutes les fonctionnalités demandées :

- ✅ Page d'accueil avec Hero, Services, Avantages, Témoignages
- ✅ Page Offres avec les 3 packs + maintenance
- ✅ Page Mon Approche (processus de travail)
- ✅ Page À propos (votre présentation)
- ✅ Page Contact avec formulaire fonctionnel
- ✅ Header et Footer avec navigation responsive
- ✅ Design moderne avec thème Savoie (bleu alpin, vert sapin, orange)
- ✅ Optimisé pour le SEO et la performance

---

## 📋 Table des matières

1. [Lancer le site en local](#1-lancer-le-site-en-local)
2. [Configuration du formulaire de contact (Resend)](#2-configuration-du-formulaire-de-contact-resend)
3. [Déploiement sur Vercel](#3-déploiement-sur-vercel)
4. [Personnalisation du contenu](#4-personnalisation-du-contenu)
5. [SEO et Performance](#5-seo-et-performance)

---

## 1. Lancer le site en local

Le serveur de développement est déjà en cours d'exécution !

**Accédez au site sur :** http://localhost:3000

### Commandes utiles :

```bash
# Démarrer le serveur de développement
npm run dev

# Créer une version de production
npm run build

# Lancer la version de production
npm start
```

---

## 2. Configuration du formulaire de contact (Resend)

Le formulaire de contact utilise **Resend** pour envoyer des emails. Pour l'instant, il fonctionne en mode développement (les soumissions sont loggées dans la console).

### Étapes pour activer l'envoi d'emails :

#### Étape 1 : Créer un compte Resend (gratuit)

1. Allez sur https://resend.com
2. Créez un compte gratuit (3000 emails/mois inclus)
3. Vérifiez votre email

#### Étape 2 : Obtenir une clé API

1. Dans le dashboard Resend, allez dans **API Keys**
2. Cliquez sur **Create API Key**
3. Donnez-lui un nom (ex: "Site Vitrine")
4. Copiez la clé générée (elle commence par `re_`)

#### Étape 3 : Configurer la clé dans votre projet

1. Ouvrez le fichier `.env.local` à la racine du projet
2. Remplacez la ligne vide par :
   ```env
   RESEND_API_KEY=re_votre_cle_ici
   ```
3. **Redémarrez le serveur** (`Ctrl+C` puis `npm run dev`)

#### Étape 4 : Tester le formulaire

1. Allez sur http://localhost:3000/contact
2. Remplissez et envoyez le formulaire
3. Vous devriez recevoir un email sur **brice.laurent.dev@gmail.com**

### ⚠️ Important pour la production

Par défaut, Resend utilise l'adresse `onboarding@resend.dev` pour envoyer les emails. Pour utiliser votre propre domaine :

1. Dans le dashboard Resend, ajoutez et vérifiez votre domaine
2. Modifiez le fichier `app/contact/actions.ts` ligne 60 :
   ```typescript
   from: "Contact Site <contact@votre-domaine.fr>", // Remplacez par votre domaine
   ```

---

## 3. Déploiement sur Vercel

### Étape 1 : Préparer le déploiement

1. Assurez-vous que votre code est sur GitHub :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Site vitrine Brice Laurent"
   git branch -M main
   git remote add origin https://github.com/votre-username/votre-repo.git
   git push -u origin main
   ```

### Étape 2 : Déployer sur Vercel

1. Allez sur https://vercel.com
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur **Add New Project**
4. Sélectionnez votre repository
5. Vercel détectera automatiquement Next.js
6. **Important** : Dans **Environment Variables**, ajoutez :
   - `RESEND_API_KEY` = votre clé Resend
   - `NEXT_PUBLIC_SITE_URL` = https://bricelaurent-dev.vercel.app (ou votre domaine)
7. Cliquez sur **Deploy**

### Étape 3 : Configuration du domaine

**Par défaut**, votre site sera accessible sur : `bricelaurent-dev.vercel.app`

**Pour utiliser un domaine personnalisé** (ex: `brice-laurent.fr`) :

1. Dans le dashboard Vercel de votre projet, allez dans **Settings** > **Domains**
2. Ajoutez votre domaine
3. Suivez les instructions pour configurer les DNS chez votre registrar

---

## 4. Personnalisation du contenu

### Modifier les textes

Tous les textes sont dans les fichiers des pages. Voici où modifier :

- **Page d'accueil** : `app/page.tsx` et les fichiers dans `components/sections/`
- **Page Offres** : `app/offres/page.tsx`
- **Page Mon Approche** : `app/mon-approche/page.tsx`
- **Page À propos** : `app/a-propos/page.tsx`
- **Page Contact** : `app/contact/page.tsx`

### Modifier les images

Actuellement, le site utilise :
- **Logo** : `public/logo-brice-dev.png` (utilisé dans le header)
- **Photo de profil** : `public/profil-ronde.png` (utilisée dans la page À propos)

Pour les remplacer :
1. Placez vos nouvelles images dans le dossier `public/`
2. Gardez les mêmes noms ou mettez à jour les chemins dans le code

### Modifier les couleurs du thème

Les couleurs sont définies dans `app/globals.css` :

```css
--color-primary: oklch(45% 0.15 250);      /* Bleu alpin */
--color-secondary: oklch(55% 0.08 85);     /* Vert sapin */
--color-accent: oklch(70% 0.15 45);        /* Orange/bois */
```

Vous pouvez les modifier pour personnaliser le design.

### Modifier les metadata SEO

Les metadata sont dans chaque fichier `page.tsx`. Par exemple dans `app/offres/page.tsx` :

```typescript
export const metadata: Metadata = {
  title: "Offres & Tarifs - Sites Web dès 790€",
  description: "Découvrez mes offres...",
};
```

---

## 5. SEO et Performance

### Vérifier les performances

1. Ouvrez votre site dans Chrome
2. Ouvrez les DevTools (F12)
3. Allez dans l'onglet **Lighthouse**
4. Lancez une analyse

**Objectifs** :
- Performance : > 90
- SEO : > 95
- Accessibility : > 90

### Optimisations déjà en place

✅ Next.js 16 avec Turbopack (ultra rapide)
✅ Images optimisées avec `next/image`
✅ Fonts Google optimisées
✅ Server Components par défaut
✅ Metadata SEO sur toutes les pages
✅ Responsive design
✅ Tailwind CSS v4 (léger et performant)

### Après le déploiement

1. **Google Search Console** : Ajoutez votre site pour suivre le SEO
2. **Google Business Profile** : Ajoutez le lien de votre site
3. **Analytics** (optionnel) : Ajoutez Google Analytics pour suivre le trafic

---

## 📦 Structure du projet

```
├── app/                      # Pages Next.js (App Router)
│   ├── layout.tsx           # Layout racine + metadata
│   ├── page.tsx             # Page d'accueil
│   ├── globals.css          # Styles globaux + thème
│   ├── offres/              # Page des offres
│   ├── mon-approche/        # Page processus
│   ├── a-propos/            # Page à propos
│   ├── contact/             # Page contact + Server Actions
│   └── mentions-legales/    # Mentions légales
├── components/
│   ├── ui/                  # Composants shadcn/ui
│   ├── layout/              # Header, Footer, Nav
│   ├── sections/            # Sections de la page d'accueil
│   └── forms/               # Formulaire de contact
├── lib/
│   └── utils.ts             # Utilitaires
├── public/                  # Assets statiques
│   ├── logo-brice-dev.png
│   └── profil-ronde.png
├── .env.local               # Variables d'environnement (NE PAS versionner)
└── package.json             # Dépendances
```

---

## 🛠️ Technologies utilisées

- **Next.js 16** - Framework React moderne
- **React 19.2** - Bibliothèque UI
- **TypeScript** - JavaScript typé
- **Tailwind CSS v4** - Framework CSS
- **shadcn/ui** - Composants UI accessibles
- **Resend** - Envoi d'emails
- **Vercel** - Hébergement et déploiement

---

## ❓ Besoin d'aide ?

Si vous rencontrez un problème :

1. Vérifiez que toutes les dépendances sont installées : `npm install`
2. Vérifiez que le serveur tourne : `npm run dev`
3. Vérifiez les erreurs dans la console

**Erreur courante** : Si le formulaire ne fonctionne pas en production, vérifiez que `RESEND_API_KEY` est bien configuré dans les variables d'environnement Vercel.

---

## 🎉 Prochaines étapes

1. ✅ Testez le site localement
2. ✅ Configurez Resend pour le formulaire
3. ✅ Déployez sur Vercel
4. ✅ Configurez votre domaine (optionnel)
5. ✅ Ajoutez votre site à Google Search Console
6. ✅ Partagez le lien avec vos clients !

**Votre site est prêt à être déployé en production ! 🚀**
