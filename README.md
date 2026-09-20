# GrindCTRL website demo

This is a standalone, editable copy of the public facing GrindCTRL website interface. It starts from a new Git history and contains no production application, database, authentication, or deployment configuration.

## Run locally

Use Node.js 20 or newer.

```sh
npm install
npm run dev
```

Open <http://localhost:3000>. Run `npm run build` and `npm run typecheck` before sharing changes.

## Included

- The landing page and public Shopping, Conversations, Operations, Integrations, Pricing, ROI, Security, and Try-On pages.
- English and Arabic interface copy, responsive styles, reusable UI components, and brand/demo images already used by those pages.
- Illustrative pricing data and pre-rendered Try-On examples. Pricing is sample content, not a live offer.

## Demo boundaries

This repository does not connect to production. Try-On does not upload photos or generate new images. CTAs do not submit leads, create accounts, book calls, or process payments. Analytics tracking is disabled. All data shown here is illustrative.

Do not add real credentials, customer information, production URLs, environment samples copied from production, backend code, database or Supabase migrations, workflow exports, API collections, Docker/deployment files, or local agent/MCP settings. Obtain separate demo-only services and assets before adding any live behavior.
