# RT Interior Designer - Lead Generation Website

A conversion-focused marketing site for a Kolkata interior design studio, built with Astro and Tailwind CSS v4.

## Tech Stack

- Astro - static output, zero JavaScript by default for fast loads and clean SEO
- Tailwind CSS v4 via the official Vite plugin - theme tokens live in src/styles/global.css
- Google Fonts: Playfair Display (headings) and Lato (body)
- Inline SVG icon component (src/components/Icon.astro) - no icon-library dependency
- Unsplash CDN imagery

# Quickstart

```
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the production build
```

# Project Structure

```
src/
|-- styles/global.css        # Tailwind v4 @theme config: brand colors, fonts, keyframes
|-- data/site.ts             # ALL content: contact details, services, projects,
|                            #   testimonials, FAQs - edit copy here
|-- layouts/BaseLayout.astro # head/meta/SEO/fonts + scroll-reveal observer
|-- components/
|   |-- Icon.astro           # inline SVG registry (Lucide-style)
|   |-- Navbar.astro         # fixed nav, solid-on-scroll state, mobile drawer
|   |-- Hero.astro           # full-height hero with dual CTA and stats strip
|   |-- About.astro          # philosophy, image collage, principles checklist
|   |-- Services.astro       # six-card services grid with hover lift
|   |-- Projects.astro       # scroll-snap carousel with prev/next controls
|   |-- BeforeAfter.astro    # draggable before/after comparison slider
|   |-- Testimonials.astro   # star-rated client quotes
|   |-- Faq.astro            # native details/summary accordion
|   |-- ContactForm.astro    # lead capture form (Formspree-ready) with honeypot
|   `-- Footer.astro         # links, NAP contact block, social icons
`-- pages/index.astro       # assembles every section in order
```

# Brand Tokens (src/styles/global.css)

- --color-primary: #008080 (teal)
- --color-secondary: #f5f5dc (beige)
- --font-display: Playfair Display
- --font-body: Lato

Change these once and the entire site re-themes through utilities like bg-primary or font-display. Subtle motion ships built in: fade-up entrances on the hero, slow-zoom on the hero image, staggered scroll reveals (.reveal) and hover lifts on cards.

# Going-Live Checklist

1. Lead form: create a free form at formspree.io, then replace YOUR_FORM_ID inside src/data/site.ts (site.formspreeEndpoint).
2. Contact details: update phone, WhatsApp number, email and studio address in the same site object.
3. Imagery: swap the Unsplash photo IDs in site.ts for real project photography when available.
4. Deploy: npm run build outputs a fully static dist/ folder - host it on Netlify, Vercel, Cloudflare Pages or GitHub Pages with no server required.
5. SEO: page title and meta description are passed as props to BaseLayout from src/pages/index.astro.

