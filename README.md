# GrindCTRL Developer Demo — V7 LATEST ONLY

## Use this branch only

**Branch:** `developer-handoff-v7-latest-only`

This branch is the clean handoff branch for external developers building the GrindCTRL V7 landing-page demo.

Do **not** use specs, visual briefs, archived concepts, or instructions from `main` or older branches as implementation authority.

## Single source of truth

Read exactly this specification before implementation:

`docs/GRINDCTRL_V7_LATEST_IMPLEMENTATION_SPEC.md`

It contains the latest approved decisions for:
- GrindCTRL positioning
- Shopping / Virtual Try-On
- AI Conversations
- AI Leads
- AI Operations
- AI Business Transformation
- managed implementation
- visual direction
- premium/elegant restraint
- approved model and garment direction
- competitor URLs and exact mechanics to study
- mobile and browser acceptance

## Important design rules

- Preserve the existing GrindCTRL logo.
- Preserve the current GrindCTRL color family and theming.
- Do not invent a new brand palette.
- Elegant, premium, calm and visual-first.
- Avoid icon-heavy sections, arrow-heavy diagrams, excessive copy and dashboard clutter.
- Virtual Try-On and AI/business operations must receive equally serious interactive proof.
- GrindCTRL is not an n8n/Make/Workato-style DIY workflow builder.
- Use real product UI and demo-safe data wherever possible.
- Do not fabricate customer proof, metrics, capabilities or integrations.

## Assets

Use assets under `public/` only as source/reference material.

Where the V7 spec explicitly marks an older model/look as unapproved, follow the V7 spec.

Do not connect this demo to production secrets, customer data, production APIs, real WhatsApp sends, real CRM writes, or production-order actions.

## Before coding

Open the live competitor references listed inside the V7 spec and create the required browser/mechanics audit.

Then implement in the staged build gates defined by the spec.

If anything conflicts with the V7 spec, **the V7 spec wins**.
