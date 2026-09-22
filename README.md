# GrindCTRL Developer Demo — V7 LATEST ONLY

## Use this branch only

**Branch:** `developer-handoff-v7-latest-only`

This branch is the complete developer handoff for the GrindCTRL V7 production-ready landing-page implementation and safe review preview.

Do not use `main`, older branches, previous chats, old briefs, old screenshots, or older specifications as implementation authority.

## Start here

Read this full specification before implementation:

`docs/GRINDCTRL_V7_LATEST_IMPLEMENTATION_SPEC.md`

If anything conflicts with that file, the latest V7 specification wins.

Main GrindCTRL website:

https://grindctrl.cloud

---

## Current task

Build the GrindCTRL V7 landing page as **production-ready implementation code**, and provide a separate safe preview link our team can open and review.

The preview is for review only. The implementation itself must NOT be a disposable prototype or demo-only build.

Do not deploy anything to the GrindCTRL production stack, current hosting, production database, production APIs, or live customer environment until explicitly approved.

The review environment must be isolated and safe.

Do not use:
- production secrets
- production credentials
- real customer data
- real WhatsApp sends
- real CRM writes
- real production orders/actions

Use demo-safe data only.

---

## Production-ready implementation requirement — LOCKED

The final implementation must be suitable for promotion into the real GrindCTRL production codebase after approval.

Build it as production software from the beginning.

Required:

- reusable components rather than one-off prototype markup
- maintainable file/component structure
- responsive behavior for real desktop, tablet and mobile widths
- semantic HTML and accessibility
- keyboard/focus behavior
- reduced-motion support
- optimized images and media
- reasonable performance and loading behavior
- no unnecessary client-side JavaScript
- no prototype-only dependencies unless justified
- no hardcoded secrets, hostnames, credentials or production IDs
- no real customer data
- clean separation between presentation/demo data and production data sources
- safe loading/error/empty states where relevant
- components that can accept real production data later without visual redesign
- no fake production integrations hidden inside UI logic
- no duplicated design system if an existing token/component can be reused
- no massive monolithic landing-page component
- no desktop-only implementation
- no screenshot-only substitution for interactive product UI when a real component should exist

Demo-safe sample data is allowed for previewing interactions, but sample data must be clearly isolated so it can be replaced by real production sources without rebuilding the interface.

The preview environment and the production implementation are two different concerns:

**Preview-safe deployment now**
+
**Production-ready code underneath**

Do not sacrifice maintainability, accessibility, responsiveness, performance, or production integration quality just because the first deliverable is a review link.

Before final handoff, identify any item that still blocks direct production integration.

---

## Product positioning

GrindCTRL must NOT look like a Virtual Try-On company.

Virtual Try-On is one important feature inside a broader platform.

GrindCTRL should be positioned as a managed AI commerce, AI operations, and business transformation platform for businesses.

The website should communicate the broader platform, including:

- AI Shopping
- Virtual Try-On
- Store Chat Widget
- AI Conversations
- Lead Handling
- Customer Context
- AI Business Operations
- Commerce / Order Operations
- Follow-Ups
- Reporting & Control
- Integrations
- Managed AI Business Transformation

GrindCTRL is NOT an n8n, Make, Workato, or Zapier-style DIY automation builder.

The customer should understand that GrindCTRL helps understand the process, connect systems, implement AI and automation, run the operation, keep humans involved where required, monitor outcomes, and improve the process.

---

## Visual direction

The site should feel:

- elegant
- premium
- modern
- enterprise-ready
- very visual
- calm
- clean
- product-first

Avoid:

- icon-heavy sections
- arrow-heavy diagrams
- excessive copy
- generic AI graphics
- repeated feature-card grids
- noisy dashboards
- excessive badges/pills
- workflow-builder visuals
- generic navy AI SaaS styling

Preserve the existing GrindCTRL logo.

Preserve the current GrindCTRL color family and theme.

Do not invent a new brand palette.

You may improve:
- composition
- spacing
- interaction
- motion
- image treatment
- layout
- section rhythm
- visual polish

Do not redesign the brand identity.

---

## Virtual Try-On

The Try-On experience must be visually strong and interactive.

Within each same-person Try-On family preserve:

- same person
- same face
- same body
- same pose
- same camera
- same framing
- same background
- same lighting

Only the clothing/look should change.

Use the latest approved model and garment direction from the V7 specification.

Do not use superseded model assets that the V7 spec marks as unapproved.

---

## Store Chat Widget

Store Chat is a first-class GrindCTRL product experience.

Do not show it as only a floating chat icon.

It should feel integrated into a real ecommerce storefront/product experience.

It may demonstrate questions such as:

- product questions
- sizing
- colors
- availability
- recommendations
- delivery
- order status
- exchanges
- support

Where supported, the experience should use relevant product, cart, customer, order, or session context and lead to a useful next action.

It should visually connect to the wider GrindCTRL platform, including:
- lead/customer context
- human handoff
- business operations
- follow-up
- reporting

---

## AI Operations

AI Operations must receive the same visual and interaction quality as Try-On.

Do not explain it only with text.

The visitor should be able to see a business scenario progress through a real-looking managed operation.

Example:

Customer signal  
→ context found  
→ business decision  
→ system action  
→ human approval if required  
→ follow-up  
→ outcome

This should communicate that GrindCTRL runs and manages the process.

It should NOT look like the customer is expected to build nodes or workflows themselves.

---

## Competitor references

Use these references for visual quality, interaction mechanics, storytelling, and product demonstration only.

Do not copy their:
- design
- source code
- assets
- copy
- branding
- trade dress
- metrics
- claims

### Shopping / Try-On

Genlook  
https://genlook.app/

Genlook Live Demo  
https://demo.genlook.app/

Antla  
https://antla.io/

OptiDress  
https://optidress.fr/en/

Perfect Corp  
https://www.perfectcorp.com/business/products/virtual-dressing-room-online

### AI Operations / Business Transformation

AgentRuntime  
https://www.agentruntime.io/

Initask  
https://initask.com/en

Gumloop  
https://www.gumloop.com/

Kora  
https://kora.raw-labs.com/

Relevance AI  
https://relevanceai.com/

### Store Chat / Shopping Assistant

Dialog  
https://www.askdialog.com/

Gorgias Shopping Assistant  
https://www.gorgias.com/ai-agent/shopping-assistant

REP AI  
https://www.hellorep.ai/

Shopify Inbox  
https://www.shopify.com/inbox

Tidio  
https://www.tidio.com/

Alhena AI  
https://alhena.ai/

Bloomreach Conversational Shopping  
https://www.bloomreach.com/en/use-cases/conversational-shopping

Constructor AI Shopping Agent  
https://constructor.com/solutions/ai-shopping-agent

Manifest AI  
https://getmanifest.ai/

Zipchat  
https://www.zipchat.ai/

The V7 spec contains the deeper URLs, exact mechanics to study, screenshot targets, and GrindCTRL adaptations for each competitor.

Open the live websites in a real browser on desktop and mobile before implementing.

Do not rely only on screenshots or written descriptions.

---

## Repository and assets

Use the code and safe assets available in this branch.

Review the repository before changing architecture or introducing new dependencies.

Do not assume or replace the existing stack unnecessarily.

Use real GrindCTRL product UI and approved demo-safe assets where available.

Do not silently invent missing capabilities.

If an asset, product screenshot, capability, or piece of information is missing, ask exactly for what you need.

---

## Required workflow

Before coding:

1. Read the full V7 specification
2. Review the existing repo and assets
3. Open the competitor references in a real browser
4. Understand GrindCTRL's full positioning
5. Build the demo separately from production
6. Test desktop and mobile
7. Send the preview link for review

Follow the staged build gates in the V7 specification.

---

## Selection process

This demo is being shared with more than 100 developers.

The strongest accepted demo will qualify to continue working with us on more tasks across the GrindCTRL platform.

The demo itself is unpaid.

If the demo is accepted, the developer will continue and complete the full task for **$5**.

Payment will be made after the full task is completed and accepted.

If the work is strong, there may be more paid tasks across the platform afterward.

---

## Final rule

Use only:

**Branch**  
`developer-handoff-v7-latest-only`

**Specification**  
`docs/GRINDCTRL_V7_LATEST_IMPLEMENTATION_SPEC.md`

If anything conflicts with the latest V7 specification, the V7 specification wins.
