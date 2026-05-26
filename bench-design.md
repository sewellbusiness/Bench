# bench.sewelllabs.com — Design Document

---

## Overview

**URL:** bench.sewelllabs.com
**Type:** Single-page professional portfolio
**Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS
**Deployment:** PM2 on existing DigitalOcean droplet, Nginx reverse proxy, SSL

---

## Brand Alignment

bench.sewelllabs.com shares the Sewelllabs design system without modification. No separate personal brand. Sewelllabs logo in header throughout.

---

## Color Tokens

| Token | Hex | Role |
|---|---|---|
| `sewell.dark` | `#111827` | Hero bg, footer bg |
| `folio.navy` | `#1B2A4A` | CTA / contact banner bg |
| `sewell.orange` | `#F5A623` | Accent, CTAs, eyebrows, links |
| `sewell.text` | `#1E1E2E` | Body text on light |
| `sewell.muted` | `#6B7280` | Secondary/supporting text |
| `sewell.bg` | `#F8F9FA` | Light section alternates |
| `sewell.border` | `#E5E7EB` | Card borders, dividers |
| `sewell.card` | `#FFFFFF` | Card backgrounds |

---

## Typography

| Role | Font | Usage |
|---|---|---|
| Display / Headings | **Sora** | All headings, eyebrows, labels, nav links, buttons |
| Body / UI | **DM Sans** | Paragraph text, case study prose |

### Type Scale

| Element | Class |
|---|---|
| Hero h1 | `text-5xl md:text-6xl lg:text-7xl` |
| Section h2 | `text-3xl md:text-4xl` |
| Case study h3 | `text-2xl` |
| Hero subhead | `text-xl` |
| Body | `text-base` |
| Eyebrows | `text-xs uppercase tracking-widest font-semibold text-sewell-orange` |

---

## Page Structure

Single scrolling page. Sections in order:

1. **Navbar** — fixed, transparent over dark hero, white + shadow on scroll
2. **Hero** — dark background
3. **About** — white background
4. **Skills** — light gray (`bg-gray-50`)
5. **Case Studies** — white background
6. **Career Highlights** — light gray (`bg-gray-50`)
7. **Contact** — navy (`bg-folio-navy`)
8. **Footer** — dark (`bg-sewell-dark`)

Sections alternate dark → white → gray as per Sewelllabs pattern.

---

## Section Backgrounds

| Section | Background Class | Hex |
|---|---|---|
| Hero | `bg-sewell-dark` + radial gradient | `#111827` |
| About | `bg-white` | — |
| Skills | `bg-gray-50` | — |
| Case Studies | `bg-white` | — |
| Career Highlights | `bg-sewell-bg` | `#F8F9FA` |
| Contact | `bg-folio-navy` | `#1B2A4A` |
| Footer | `bg-sewell-dark` | `#111827` |

---

## Section Padding

All sections: `py-24 px-4 sm:px-6 lg:px-8`
Hero: `pt-32 pb-20` (accounts for fixed navbar)

---

## Max Widths

| Context | Class |
|---|---|
| Hero content | `max-w-4xl` |
| Section headers | `max-w-3xl` |
| Body copy / bios | `max-w-2xl` |
| Case study cards | `max-w-5xl` |
| Skills grid | `max-w-5xl` |
| Career highlights | `max-w-4xl` |
| Full-width sections | `max-w-7xl` |

All centered: `mx-auto`

---

## Navbar

- Height: `h-16`, fixed top, full width
- `pt-16` offset applied to page body
- Transparent on dark hero background
- White background + `shadow-sm` after scroll (JS scroll listener)
- **Logo:**
  - Dark bg: `logo-wh-or.png` (white/orange) — `h-24 w-auto -mx-3`
  - Scrolled/light bg: `logo-bl-or.png` (blue/orange) — same sizing
- Nav links: `text-sm font-display font-medium`
- Links: smooth scroll anchors — About, Skills, Work, Contact
- No CTA button (portfolio context, not product marketing)

---

## Hero Section

**Background:** `bg-[radial-gradient(ellipse_at_top,_#1d3a6e_0%,_#111827_55%,_#111827_100%)]`

**Grid overlay:**
```
linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)
linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
backgroundSize: 60px 60px — opacity: 0.03
```

**Layout:** Centered, `max-w-4xl`, text-center

**Elements (staggered `fadeInUp` animation):**
- Eyebrow badge: "KEVIN SEWELL" — orange badge, `rounded-full`
- h1: headline copy — `text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white`
- Subhead: supporting line — `text-xl text-gray-300 max-w-2xl mx-auto`
- CTA link: "Get in touch →" — primary button, orange, `rounded-full`

**Animation delays:** 0s, 0.1s, 0.2s, 0.3s (stagger per element)

---

## About Section

**Background:** `bg-white`
**Layout:** `max-w-2xl mx-auto` centered prose, or optionally 2-column with a subtle visual element left

**Elements:**
- Eyebrow: "ABOUT"
- h2: "28 years. One consistent pattern."
- Bio copy: full paragraph text, `text-base font-body text-sewell-text leading-relaxed`

---

## Skills Section

**Background:** `bg-gray-50`
**Layout:** 4-column grid on desktop (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`), `max-w-5xl`

**Each skill category card:**
- `bg-white rounded-2xl border border-gray-100 shadow-sm p-6`
- Card header: icon (lucide-react, `w-10 h-10 rounded-xl bg-sewell-orange/10`) + category name
- Category name: `text-sm font-display font-semibold text-sewell-dark uppercase tracking-wide`
- Skill list items: `text-sm font-body text-sewell-muted leading-relaxed`

**Four categories:** Architecture & Systems / Development / Database / Other

---

## Case Studies Section

**Background:** `bg-white`
**Layout:** Stacked full-width cards, `max-w-5xl mx-auto`, `space-y-8`

**Section header:**
- Eyebrow: "WORK"
- h2: "Selected Projects"

**Each case study card:**
- `bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-8 md:p-10`
- Internal layout: badge row → problem → build → result (if present) → stack → demonstrates
- **Number badge:** `text-xs font-semibold font-display text-sewell-orange` — e.g., "01", "02"
- **Title:** `text-2xl font-display font-bold text-sewell-dark`
- **Section labels** (The Problem / What I Built / etc.): `text-xs font-semibold font-display uppercase tracking-widest text-sewell-muted`
- **Body copy:** `text-base font-body text-sewell-text leading-relaxed`
- **Stack pill row:** `inline-flex gap-2 flex-wrap mt-4` — gray badges per technology
- Folio card gets an orange left border accent: `border-l-4 border-sewell-orange`

**5 case studies** rendered in document order.

---

## Career Highlights Section

**Background:** `bg-sewell-bg` (`#F8F9FA`)
**Layout:** `max-w-4xl mx-auto`

**Section header:**
- Eyebrow: "EXPERIENCE"
- h2: "Career Highlights"

**Each highlight:**
- Timeline-style vertical list with left orange accent line or dot connector
- Company/title: `text-lg font-display font-semibold text-sewell-dark`
- Role badge: gray badge
- Body: `text-base font-body text-sewell-muted leading-relaxed`
- Education entries styled consistently with work entries

---

## Contact Section

**Background:** `bg-[radial-gradient(ellipse_at_right,_#2a3f6e_0%,_#1B2A4A_50%)]` (navy CTA banner treatment)
**Layout:** Centered, `max-w-xl mx-auto`, text-center

**Elements:**
- Eyebrow: "CONTACT"
- h2: "Have a project that needs the right foundation?"
- Supporting line: "Get in touch."
- Contact form (sends to `kevin@sewelllabs.com`)

**Form fields:**
- Name — text input, required
- Email — email input, required
- Message — textarea, 5 rows, required
- Submit button — primary orange, `rounded-full`, full width, "Send Message"

**Form styling:**
- Field wrapper: `flex flex-col gap-4 mt-8 text-left`
- Label: `text-sm font-display font-medium text-white/80`
- Input / textarea: `w-full rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sewell-orange/60`
- Submit: primary button variant, `w-full`, size `lg`

**Form behavior:**
- Client-side validation (required fields, valid email format)
- Submits via `mailto:` action OR Formspree endpoint (whichever is configured at build time)
- On success: inline success message replaces form — "Thanks, I'll be in touch."
- On error: inline error message below submit button

---

## Footer

- Background: `bg-sewell-dark`
- Logo: `logo-wh-or.png`, `h-24 w-auto`
- Simplified vs. sewelllabs.com footer — single row: logo left, copyright center or right
- Copyright: `© 2026 Sewelllabs. All rights reserved.`
- Optional: single link back to `sewelllabs.com`

---

## Animations

| Name | Definition | Duration |
|---|---|---|
| `fadeIn` | opacity 0→1 | 0.5s ease |
| `fadeInUp` | opacity 0→1 + translateY 24px→0 | 0.7s ease |

- Hero elements stagger: 0s / 0.1s / 0.2s / 0.3s
- Case study cards: `fadeInUp` on scroll entry (IntersectionObserver)
- Skill cards: subtle `fadeInUp` stagger on scroll entry

---

## Responsive Behavior

| Breakpoint | Notes |
|---|---|
| Mobile (`< 640px`) | Single column throughout; hero h1 `text-5xl`; case study cards full-width |
| Tablet (`640–1024px`) | Skills 2-col; hero h1 `text-6xl` |
| Desktop (`> 1024px`) | Skills 4-col; hero h1 `text-7xl`; case studies max-width constrained |

---

## Icons

Library: `lucide-react`
Standard sizes: `w-5 h-5` (feature/skill icons), `w-4 h-4` (inline)
Containers: `w-10 h-10 rounded-xl bg-sewell-orange/10 flex items-center justify-center`

Suggested skill category icons:
- Architecture & Systems → `Layers`
- Development → `Code2`
- Database → `Database`
- Other → `Wrench`

---

## File & Directory Structure

```
bench.sewelllabs.com/
├── app/
│   ├── layout.tsx          # root layout, fonts, metadata
│   ├── page.tsx            # single page, all sections assembled
│   └── globals.css         # Tailwind directives + custom animations
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── CaseStudies.tsx
│   ├── CareerHighlights.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
│   ├── logo-wh-or.png
│   └── logo-bl-or.png
├── tailwind.config.ts      # custom tokens from design system
├── next.config.ts
├── package.json
└── ecosystem.config.js     # PM2 config for deployment
```

---

## Tailwind Config Extensions

```ts
// tailwind.config.ts — extend colors
colors: {
  sewell: {
    orange: '#F5A623',
    dark:   '#111827',
    text:   '#1E1E2E',
    muted:  '#6B7280',
    bg:     '#F8F9FA',
    border: '#E5E7EB',
    card:   '#FFFFFF',
    blue:   '#2563EB',
  },
  folio: {
    navy:   '#1B2A4A',
    orange: '#F5A623',
    light:  '#EEF2FF',
  },
},
fontFamily: {
  display: ['var(--font-sora)', 'sans-serif'],
  body:    ['var(--font-dm-sans)', 'sans-serif'],
},
```

---

## Deployment Notes

- Node.js process managed by PM2
- Nginx reverse proxy → PM2 port
- SSL via Let's Encrypt (Certbot), already configured on droplet for *.sewelllabs.com or individual domain
- `next build` → `pm2 start ecosystem.config.js` or `pm2 restart bench`
- Environment: `NODE_ENV=production`, `PORT=3001` (or next available after sewelllabs.com)
