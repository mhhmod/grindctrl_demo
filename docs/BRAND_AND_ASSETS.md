# Brand and asset inventory

## Brand source of truth

The current logo files are `public/brand/logo.svg` and `public/brand/logo-dark.svg`; the reusable component is `components/brand-logo.tsx`. The visual palette is warm cream and charcoal. Use the actual CSS tokens in `app/globals.css` rather than recoloring from screenshots. The light base is `--background: oklch(0.945 0.007 75)` and `--foreground: oklch(0.235 0.006 60)`; dark mode uses `oklch(0.135 0.004 70)` and `oklch(0.94 0.008 78)` respectively. Other surfaces, borders, and states also live in that file.

`app/layout.tsx` loads Manrope Variable for English and IBM Plex Sans Arabic weights 400, 500, 600, and 700. The font packages are declared in `package.json`; no separate font file handoff is required. There is no separately approved brand guideline PDF in this repo.

## Supplied images

| Material | Location | Status and use |
| --- | --- | --- |
| Brand logo | `public/brand/` | Current logo variants, used by the site. |
| Product UI crops | `public/landing/proof/*-en.webp` and `*-ar.webp` | Illustrative product interface captures used on the landing page: chat, inbox, report, storefront Try-On, and Try-On usage. They show demo data; do not present them as live customer activity. |
| Hero proof crops | `public/landing/proof/hero-*.webp` | Cropped versions of the illustrative UI for the homepage hero. |
| Try-On people and garments | `public/landing/proof/tryon/inputs/` | Synthetic demo input imagery for two people and four garments. |
| Try-On results | `public/landing/proof/tryon/` | Four pre-rendered pairings: woman with linen shirt or abaya; man with denim overshirt or knit polo. The public repo does not include the generation pipeline. |
| Editorial lifestyle imagery | `public/landing/editorial/` | Three newly generated conceptual images for optional homepage use: shopper with garment, commerce team, and linen detail. These are AI-generated editorial illustrations, not real GrindCTRL customers or product screenshots. |

There are **no product screen recordings or full dashboard screenshots** in this repository. The UI crops are the only supplied product visuals. Do not invent a dashboard or use real customer screenshots. Obtain reviewed, anonymized or synthetic captures from the owner if the redesign needs more.

The current site contains no video files. Five executable video briefs and their exact source asset rules are in [the creative production pack](CREATIVE_PRODUCTION_PACK.md). Video output requires a motion producer or video-generation tool and owner review before it is represented as finished media.
