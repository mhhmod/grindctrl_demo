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

## Optional 10-second motion prompt

Video is optional for the first homepage preview. If motion helps the design, create it from the supplied static demo assets using this brief:

> Create a polished 10-second, silent, seamless-loop website hero video for GrindCTRL, 16:9 master with a center-safe composition for mobile crops. Use only the supplied GrindCTRL logo and product UI crops from `public/landing/proof/`, plus the four pre-rendered Try-On examples and their matching inputs. Start with a clean warm-cream background and the real logo (0-2 s). Move into the existing storefront Try-On UI, showing a gentle garment-thumbnail-to-result transition with the provided matching images (2-5 s). Transition to the existing Conversations and Inbox crops, then the existing report crop, to express one connected commerce workflow (5-9 s). End on a quiet brand frame that loops to the opening (9-10 s). Match the site's warm charcoal and cream palette, Manrope typography, restrained motion, and generous spacing. Keep all product UI text and numbers exactly as in the supplied assets. Add no fabricated screens, customer data, integrations, statistics, testimonials, or claims. Use only licensed supplied material. Export MP4 H.264; make a still poster frame and a reduced-motion static alternative. This is an illustrative product demo, not live platform footage.

Review the storyboard and asset use with the owner before treating the video as approved final media.
