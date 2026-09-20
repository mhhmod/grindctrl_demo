# V7 visual and asset gap audit

Checked against the owner-supplied [V7 full experience specification](GrindCTRL_V7_FULL_Product_Website_Experience_Spec.md) and the public demo repository. This is a source and asset audit, **not** browser acceptance of a V7 redesign. The first assigned redesign is the homepage only. V7 also describes later routes and interactions; those routes are not all present or implemented here.

## Ready to use

| V7 requirement | Public repo evidence | Status |
| --- | --- | --- |
| Logo, palette, fonts | `public/brand/logo*.svg`, `app/globals.css`, and font imports in `app/layout.tsx` | Present. |
| Two persistent shoppers and four garment inputs (§13) | `public/landing/proof/tryon/inputs/shopper-{woman,man}.webp` and four `garment-*.webp` files | Present as synthetic demo assets. V7 lists `.png` names; these `.webp` files are the supplied equivalents. |
| Four paired Try-On results (§13) | `public/landing/proof/tryon/{woman-linen-shirt,woman-abaya,man-denim-overshirt,man-knit-polo}.webp` | Present, pre-rendered. No generation service is in the public repo. |
| Shopping, chat, inbox, and operational overview UI (§12, §21) | Bilingual `storefront-tryon`, `chat`, `inbox`, `report`, and `tryon-usage` images in `public/landing/proof/` | Present as captures of real UI components populated with synthetic demo fixtures; they are not live customer evidence. |
| Provider icon geometry (§26) | `components/brand-marks.tsx` uses the `simple-icons` package; integration state is recorded in `lib/product-truth/public-integrations.ts` | Present for the listed providers. Display must retain maturity labels and avoid partnership claims. |
| Supplemental editorial photography (§3, §12) | Three files in `public/landing/editorial/` | Present as AI-generated conceptual images. They cannot substitute for product UI proof. |

## Partial or absent

| V7 requirement | Finding | What is needed |
| --- | --- | --- |
| Exact same person, pose, hands, camera, crop, and background across garment changes (§5, §13, §17) | The two demo families preserve recognizable people and near-matching backgrounds, but the base/result framing and hand positions visibly drift. The female abaya image and male looks are especially useful for checking this. | Art-direct a stricter aligned input/result set or accept the existing pairs only after visual review. Do not claim pixel-perfect identity and pose preservation. |
| Large before/result category rail (§5.2, §17) | Images exist, but the present homepage does not implement the required default-result, hover/focus-before rail. `TryOnSwitcher` exists as a component but is not wired into `site-landing.tsx`. | Implement the locked desktop and touch mechanics in the redesign; use the four paired images. This is an implementation gap, not a missing file. |
| Tall interactive hero with selector (§6, §14-16) | The current homepage uses `HeroSystem`, not the V7 full-body model/garment selector composition. | Build and browser-test the V7 hero or show a documented stronger equivalent within its allowed placement rules. |
| Lead/customer profile or pipeline UI (§21, §23, §32-34) | No approved lead UI image exists in this public repo. The inbox image is a conversation handoff, **not** a lead/CRM screen. | Capture actual product UI with anonymized or synthetic records and approval for public reuse. Until then, show a clearly qualified journey state, not invented lead proof. |
| Workflow/run operations UI (§21, §24, §32-34) | `tryon-usage` and `report` are operational overview crops, not a run view with trigger, status, action, result, and retry. No approved workflow screenshot exists here. | Capture an actual run/workflow UI with safe demo data. Do not use the removed fake operations image or create a fake dashboard. |
| Analytics/reporting screen (§21, §25) | `report-*.webp` contains an illustrative Store Chat operational summary, and `tryon-usage-*.webp` is a usage overview. No full analytics screen exists. | Use these only with a visible **Demo data** label; obtain an actual reporting capture if the V7 analytics scene needs charts, outcomes, or broader metrics. Do not imply verified revenue or uplift. |
| Connected Conversion Engine (§6.3, §32-34) | Static UI fragments and native icons exist, but the current homepage does not have the required connected visual journey or proof for every node. | Implement a connected diagram with accurate capability/maturity labels; do not turn missing lead or workflow screenshots into invented UI. |
| Real reviews/customer logos (§5.3, §27, §35) | None approved in this repo; testimonials remain disabled. | Optional: provide approved material. Otherwise use verified integrations and product proof, as V7 permits. |
| Videos | Five timed prompts exist in `docs/CREATIVE_PRODUCTION_PACK.md`; no rendered video files exist. | Optional to V7: produce and review selected films if they materially improve the page. Images and interactive UI can satisfy the spec without video. |
| Full V7 routing (§42) | The demo includes the homepage and several public routes, but `/platform`, `/analytics`, `/demo`, `/privacy`, and `/terms` are absent. | Treat as future site implementation scope. Do not create thin placeholder routes for a homepage-only demo. |

## Asset use decisions for the developer

1. Use real supplied UI crops to explain the product. Label fixture numbers as **Demo data** in the visible page, including any motion using those crops.
2. Keep AI-generated lifestyle photographs in shopping and Try-On contexts. Conversations, leads, operations, and reporting need actual UI visuals.
3. Build the V7 locked interactions in code; image files alone do not provide selector behavior, hover/focus comparison, scroll choreography, or mobile swipe.
4. Before public release, review asset rights, product claims, integration depth, translated captions, and the V7 browser acceptance checklist.
