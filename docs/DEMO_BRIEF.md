# GrindCTRL website demo brief

## Starting point

This repository contains the working public website interface. Run `npm install` and `npm run dev`, then open `http://localhost:3000`. The homepage is `/`; the other public routes are Shopping, Conversations, Operations, Integrations, Pricing, ROI, Security, and Try-On. The code is Next.js, React, TypeScript, and Tailwind. No production credentials or deployment access are needed.

The first deliverable is a **reviewable redesign of the homepage (`/`) only**, built from this source. Other public routes are product and content reference; they are outside this first redesign scope. The exact homepage sections and elements to retain are awaiting owner confirmation in [Open items](OPEN_ITEMS.md). Keep the existing site runnable and use a branch for changes.

## Product story and source copy

GrindCTRL presents a connected commerce workflow: Shopping and virtual Try-On, Conversations, leads, Operations, reporting, and Integrations. The homepage should convey the breadth of this system; Try-On is a compelling visual example within it. This is positioning for the demo, not a claim that every workflow in this public repository is live.

Use existing EN/AR copy in `lib/landing/landing-i18n.ts` and `components/landing/proof/proof-copy.ts`, plus the public route content, as the initial content source. Confirm new claims, metrics, client logos, testimonials, and CTA destinations with the owner before publishing them. Pricing and ROI numbers here are illustrative.

## Interaction references

These are inspiration for interaction patterns, not assets or layouts to copy:

| Reference | Pattern to consider |
| --- | --- |
| [Genlook](https://genlook.app/) | Explain the shopper image, garment, and result as a clear visual sequence in a commerce setting. |
| [Antla](https://antla.io/) | Let a garment thumbnail switch a pre-rendered result; make the controls comfortable on mobile. |
| [OptiDress](https://optidress.fr/en) | Connect problem and solution cards to a clear product journey and integration story. |
| [Perfect Corp](https://www.perfectcorp.com/business/products/virtual-dressing-room-online) | Use compact numbered steps with UI visuals to explain the try-on flow. |

The owner has not yet selected exact interactions or approved a final section list. Treat these as candidates for the first homepage preview.

## Demo delivery and review

- Show the redesigned homepage locally or in a separate preview. Do not deploy to production.
- Keep English and Arabic usable, including RTL layout and translated text expansion.
- Check desktop and narrow mobile layouts, interaction states, keyboard focus, and reduced-motion behavior.
- Label synthetic demo data and pre-rendered Try-On imagery accurately. Do not imply the public repo has working AI generation, production CRM, lead capture, or payment flows.
- Share screenshots or a short walkthrough of the proposed UI and interactions with the owner for review.

See [Brand and assets](BRAND_AND_ASSETS.md) for supplied materials and [Open items](OPEN_ITEMS.md) for decisions still needed.

## Creative materials

Three optional editorial images and five fully timed 10-second video briefs are in [the creative production pack](CREATIVE_PRODUCTION_PACK.md). The videos are production instructions; no video files are included yet. Review the selected cuts and asset use with the owner before treating them as approved final media.
