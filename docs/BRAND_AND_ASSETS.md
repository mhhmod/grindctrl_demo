# Brand and asset inventory

## Brand source of truth

The current logo files are `public/brand/logo.svg` and `public/brand/logo-dark.svg`; the reusable component is `components/brand-logo.tsx`. The visual palette is warm cream and charcoal. Use the actual CSS tokens in `app/globals.css` rather than recoloring from screenshots. The light base is `--background: oklch(0.945 0.007 75)` and `--foreground: oklch(0.235 0.006 60)`; dark mode uses `oklch(0.135 0.004 70)` and `oklch(0.94 0.008 78)` respectively. Other surfaces, borders, and states also live in that file.

`app/layout.tsx` loads Manrope Variable for English and IBM Plex Sans Arabic weights 400, 500, 600, and 700. The font packages are declared in `package.json`; no separate font file handoff is required. There is no separately approved brand guideline PDF in this repo.

## Supplied images

| Material | Location | Status and use |
| --- | --- | --- |
| Brand logo | `public/brand/` | Current logo variants, used by the site. |
| Product UI crops | `public/landing/proof/*-en.webp` and `*-ar.webp` | Illustrative product interface captures used on the landing page: chat, inbox, report, storefront Try-On, and Try-On usage. They show demo data; do not present them as live customer activity. |
| Lead UI, workflow catalog, and analytics preview | `public/landing/proof/demo-ui-captured-leads-demo-data-en.webp`, `demo-ui-workflow-catalog-preview-en.webp`, and `demo-ui-analytics-preview-demo-data-en.webp` | New captures from real product components in an isolated local fixture. The visible banners identify synthetic data. The workflow image is a catalog preview, not an executed run. |
| Hero proof crops | `public/landing/proof/demo-ui-*-hero-crop-*.webp` | Tighter crops of the illustrative UI for the homepage hero. |
| Try-On people and garments | `public/landing/proof/tryon/inputs/` | Synthetic demo input imagery for two people and four garments. |
| Try-On results | `public/landing/proof/tryon/` | Four pre-rendered pairings: woman with linen shirt or abaya; man with denim overshirt or knit polo. The public repo does not include the generation pipeline. |
| Editorial lifestyle imagery | `public/landing/editorial/` | Three newly generated conceptual images for optional homepage use: shopper with garment, commerce team, and linen detail. These are AI-generated editorial illustrations, not real GrindCTRL customers or product screenshots. |

There are **no authentic product screen recordings** in this repository. The new lead, workflow catalog, and analytics images provide dashboard visual references with synthetic data. They are not evidence of live customer records, workflow executions, or measured business outcomes.

One owner-supplied 10-second concept film is in `public/landing/video/grindctrl-homepage-tryon-to-analytics-concept-10s-silent.mp4` (1920×1080, H.264, silent web copy). It depicts invented Try-On and reporting interfaces and fabricated figures, so it is **motion direction only**, not product proof or an approved homepage hero. The supplied source had audio; the public web copy has its audio removed. Five additional briefs are in [the creative production pack](CREATIVE_PRODUCTION_PACK.md).

## File naming

Names tell a developer what an asset is before opening it: `demo-ui-` means a capture with fixture data, `result-` means a pre-rendered Try-On outcome, `inputs/` contains the matching shopper and garment sources, and `concept-` means AI-generated editorial imagery. UI captures end in `-en` or `-ar`; `-hero-crop` is a tighter crop of the same interface. The [V7 asset gap audit](V7_ASSET_GAP_AUDIT.md) maps these files to the specification, whose older `.png` names are preserved verbatim in the owner-supplied document.
