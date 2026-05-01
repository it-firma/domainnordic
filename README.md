# DomainNordic

Strategic domain advisory, built for the Nordics. Production website for DomainNordic Advisory Group, the parent of four regional brands: domene.io, domän.io, domæne.io, and verkkotunnus.io.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS. Designed for static export and deployment on Vercel.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/                  Next.js App Router pages
  page.tsx            Homepage
  layout.tsx          Root layout with full SEO/JSON-LD
  globals.css         Tailwind + design tokens
  sitemap.ts          Dynamic XML sitemap
  robots.ts           Robots.txt with AI crawler allow list
  not-found.tsx       404 page
  services/           Services index + 15 dynamic detail pages
  brands/             Brands page
  approach/           How we work
  insights/           Insights index + dynamic article pages
  contact/            Contact page (email only)
  about/              About page
  privacy/            Privacy policy
  terms/              Terms of service
components/           Shared components
  SiteHeader.tsx      Header with dark/light variants
  SiteFooter.tsx      Footer with all nav and contact
lib/                  Data and constants
  site-config.ts      Site metadata, brands, services list
  service-details.ts  Full content for 15 service detail pages
  insight-details.ts  Full article content for 3 insights
public/               Static assets
  images/             Photos, logos, OG image
  favicon.svg         SVG favicon
  favicon.ico         Multi size ICO
  apple-touch-icon.png  iOS home screen icon
  icon-192.png, icon-512.png  PWA icons
  site.webmanifest    Web app manifest
  llms.txt            Concise context for LLMs
  llms-full.txt       Extended context for LLMs
  entity-index.json   Structured entity data for AEO
```

## Deployment

### Push to GitHub

1. Create a new repository on GitHub (under user MohanM86)
2. Initialise the local repo and push:

```bash
git init
git add .
git commit -m "Initial DomainNordic build"
git branch -M main
git remote add origin https://github.com/MohanM86/domainnordic.git
git push -u origin main
```

### Connect to Vercel

1. Go to https://vercel.com/new and import the GitHub repository
2. Vercel auto detects Next.js. No build configuration changes needed
3. Set the production domain to `domainnordic.com` in Project Settings → Domains
4. Add `www.domainnordic.com` as an alias redirecting to the apex domain

The site will deploy automatically on every push to main.

## SEO and AEO checklist

This build includes a complete SEO and AEO infrastructure:

- Per page metadata with title templates and canonical URLs
- Open Graph tags with custom 1200x630 OG image
- Twitter Card metadata
- JSON-LD structured data on every relevant page:
  - Organization, WebSite, ProfessionalService on root layout
  - Service + FAQPage + BreadcrumbList on each service detail
  - Article schema on each insight
- Dynamic XML sitemap at `/sitemap.xml`
- Robots.txt with explicit allow rules for GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, and other AI crawlers
- llms.txt and llms-full.txt for direct LLM context retrieval
- entity-index.json for structured entity recognition
- Web app manifest for PWA install
- Favicon in SVG and ICO formats, plus apple-touch-icon and 192/512 PNG icons

## Design system

- Primary blue `#2152E8`, navy `#0F1A3D`, deep navy footer `#050B1F`
- Body font: General Sans (Fontshare)
- Display serif: Tobias italic (Fontshare)
- Maritime accent blue `#7AA0F0`
- Section numbering in Roman numerals (I, II, III, IV) and lowercase (i, ii, iii, iv) for sub items
- Consistent eight section narrative on the homepage, used as a template for subpage hero treatments

## Brand identity

- Norway: domene.io, accent `#2152E8`
- Sweden: domän.io, accent `#EAB308`
- Denmark: domæne.io, accent `#E94B35`
- Finland: verkkotunnus.io, accent `#38BDF8`

IDN domains are linked using punycode (xn--domn-noa.io, xn--domne-ura.io) but displayed in their unicode form for readability.

## Editing content

- Service details: `lib/service-details.ts` — each service has tagline, intro, four content blocks, and three FAQ items
- Insights: `lib/insight-details.ts` — articles with paragraphs and h2 headings
- Site copy and brand list: `lib/site-config.ts`

After editing data files, no rebuild step is needed during development. Vercel rebuilds automatically on push.

## Notes

- Contact is email only (hello@domainnordic.com). No forms, no phone, no address.
- Location is intentionally not disclosed publicly.
- Content is in English throughout.
