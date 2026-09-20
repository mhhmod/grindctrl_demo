# V7 visual and asset gap audit

Checked against the owner-supplied [V7 full experience specification](GrindCTRL_V7_FULL_Product_Website_Experience_Spec.md) and the public demo repository. This is a source and asset audit, **not** browser acceptance of a V7 redesign. The first assigned redesign is the homepage only. V7 also describes later routes and interactions; those routes are not all present or implemented here. The homepage's visual handoff now covers each major product scene with an accurately labeled asset; capability and interaction acceptance remain separate.

## Ready to use

| V7 requirement | Public repo evidence | Status |
| --- | --- | --- |
| Logo, palette, fonts | `public/brand/logo*.svg`, `app/globals.css`, and font imports in `app/layout.tsx` | Present. |
| Two persistent shoppers and four garment inputs (§13) | `public/landing/proof/tryon/inputs/shopper-{woman,man}.webp` and four `garment-*.webp` files | Present as synthetic demo assets. V7 lists `.png` names; these `.webp` files are the supplied equivalents. |
| Four paired Try-On results (§13) | `public/landing/proof/tryon/result-{woman-linen-shirt,woman-abaya,man-denim-overshirt,man-knit-polo}.webp` | Present, pre-rendered. No generation service is in the public repo. |
| Shopping, chat, inbox, and operational overview UI (§12, §21) | Bilingual `demo-ui-storefront-tryon`, `demo-ui-shopper-chat`, `demo-ui-team-inbox`, `demo-ui-store-chat-overview`, and `demo-ui-tryon-usage-overview` images in `public/landing/proof/` | Present as captures of real UI components populated with synthetic demo fixtures; they are not live customer evidence. |
| Leads UI (§23) | `public/landing/proof/demo-ui-captured-leads-demo-data-en.webp` | Present. Captured from the actual `LeadsDashboard` component with two synthetic records. This component is not currently an exposed live lead page; treat as product UI preview, not live CRM proof. |
| Analytics UI (§25) | `public/landing/proof/demo-ui-analytics-preview-demo-data-en.webp` | Present. Captured from the actual `AnalyticsPreview` component. Its numbers are synthetic and visibly labeled Demo Data; do not cite them as results. |
| Workflow UI (§24) | `public/landing/proof/demo-ui-workflow-catalog-preview-en.webp` | Present. Captured from the actual `WorkflowCatalog` component, with preview/ready/planned states. This is not a run history. |
| Provider icon geometry (§26) | `components/brand-marks.tsx` uses the `simple-icons` package; integration state is recorded in `lib/product-truth/public-integrations.ts` | Present for the listed providers. Display must retain maturity labels and avoid partnership claims. |
| Supplemental editorial photography (§3, §12) | Three files in `public/landing/editorial/` | Present as AI-generated conceptual images. They cannot substitute for product UI proof. |

## Partial or absent

| V7 requirement | Finding | What is needed |
| --- | --- | --- |
| Exact same person, pose, hands, camera, crop, and background across garment changes (§5, §13, §17) | The two demo families preserve recognizable people and near-matching backgrounds, but the base/result framing and hand positions visibly drift. The female abaya image and male looks are especially useful for checking this. | Art-direct a stricter aligned input/result set or accept the existing pairs only after visual review. Do not claim pixel-perfect identity and pose preservation. |
| Large before/result category rail (§5.2, §17) | Images exist, but the present homepage does not implement the required default-result, hover/focus-before rail. `TryOnSwitcher` exists as a component but is not wired into `site-landing.tsx`. | Implement the locked desktop and touch mechanics in the redesign; use the four paired images. This is an implementation gap, not a missing file. |
| Tall interactive hero with selector (§6, §14-16) | The current homepage uses `HeroSystem`, not the V7 full-body model/garment selector composition. | Build and browser-test the V7 hero or show a documented stronger equivalent within its allowed placement rules. |
| Executed workflow/run proof (§21, §24, §32-34) | The new workflow catalog is a real product component, but the source does not provide an executed run view with actual result, duration, review, or retry. | Use the catalog as a truthful preview and retain its maturity states. A claim about completed workflow execution requires a real product run and separate evidence; no asset can create that capability. |
| Live analytics outcomes (§25) | The analytics preview image is now supplied, but its numbers are synthetic. | Use only with the embedded Demo Data banner; verified revenue, uplift, conversion, or customer outcomes require actual evidence. |
| Connected Conversion Engine (§6.3, §32-34) | Static UI fragments and native icons exist, but the current homepage does not have the required connected visual journey or proof for every node. | Implement a connected diagram with accurate capability/maturity labels; do not turn missing lead or workflow screenshots into invented UI. |
| Real reviews/customer logos (§5.3, §27, §35) | None approved in this repo; testimonials remain disabled. | Optional: provide approved material. Otherwise use verified integrations and product proof, as V7 permits. |
| Videos | Five timed prompts exist in `docs/CREATIVE_PRODUCTION_PACK.md`; no rendered video files exist. | Optional to V7: produce and review selected films if they materially improve the page. Images and interactive UI can satisfy the spec without video. |
| Full V7 routing (§42) | The demo includes the homepage and several public routes, but `/platform`, `/analytics`, `/demo`, `/privacy`, and `/terms` are absent. | Treat as future site implementation scope. Do not create thin placeholder routes for a homepage-only demo. |

## Asset use decisions for the developer

1. Use real supplied UI crops to explain the product. Label fixture numbers as **Demo data** in the visible page, including any motion using those crops.
2. Keep AI-generated lifestyle photographs in shopping and Try-On contexts. Conversations, leads, operations, and reporting need actual UI visuals.
3. Build the V7 locked interactions in code; image files alone do not provide selector behavior, hover/focus comparison, scroll choreography, or mobile swipe.
4. Before public release, review asset rights, product claims, integration depth, translated captions, and the V7 browser acceptance checklist.

The three new screenshots were captured locally from production-source React components in an isolated checkout at `f5c197a`, using synthetic fixture records and no production environment values. Only optimized image outputs were copied into this public repository; no dashboard source, backend code, credentials, or fixture route was copied. English captures are supplied because the current Leads component is English-only and the Arabic workflow/analytics components retain untranslated body copy.
