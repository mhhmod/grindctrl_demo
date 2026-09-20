# GrindCTRL V7 — Full Product Website Experience Specification
## Final Visual, Interaction, Content, Routing & Implementation Brief

### Authority
This is the primary website experience specification for GrindCTRL.

Use earlier V3 safeguards only for product truth, privacy, security, pricing, architecture and capability verification. This V7 document is authoritative for visual hierarchy, interaction mechanics, page choreography, routing, content presentation and browser acceptance.

This specification is intentionally detailed about what must be achieved, but it must not remove developer creativity.

The developer may freely improve exact composition, spacing, art direction, layout variants, transition design, section rhythm and micro-interactions. The developer may not remove or weaken the locked mechanics defined here.

The goal is not to clone competitors. The goal is to reach the same class of product communication quality using GrindCTRL's own brand system, real assets, real product UI, real customer journey and real technical truth.

---

# 1. First 5 seconds

Priority order:

1. Immediate understanding of what GrindCTRL does
2. Enterprise / serious service-platform credibility
3. Strong visual wow factor

The first viewport must communicate visually:

**A shopper/customer does something → GrindCTRL understands the signal → GrindCTRL takes or triggers the next approved action → the business sees the outcome.**

Virtual try-on can be the strongest visual hook, but it cannot define the whole company.

---

# 2. Target customers

Priority:

1. SMB + Enterprise ecommerce businesses
2. Fashion ecommerce stores
3. General ecommerce stores

The site must feel credible enough for enterprise buyers while still practical and accessible to SMB merchants.

Fashion is a strong use case and visual entry point. The overall platform identity must remain broad ecommerce.

---

# 3. Fashion prominence

Decision:

Fashion should be visually strong inside AI Shopping / Try-On, but should not dominate the whole GrindCTRL brand.

Use fashion-heavy photography in:
- hero proof where appropriate
- try-on
- shopper experience
- category rail
- before/after
- product demonstrations

Use real product/operations/enterprise visuals in:
- conversations
- leads
- automation
- operations
- analytics
- integrations
- technical trust

---

# 4. Benchmark priority

1. Genlook
2. Antla
3. OptiDress
4. Perfect Corp

References:
- https://genlook.app/
- https://antla.io/
- https://optidress.fr/en/
- https://www.perfectcorp.com/business/products/virtual-dressing-room-online

These are benchmark references, not templates to copy.

---

# 5. Genlook mechanics we want

## 5.1 Same person, clothes change only — LOCKED

This is one of the most important visual mechanics.

The shopper must remain:
- same face
- same body
- same pose
- same hands
- same camera
- same crop
- same background
- same lighting

Only the garment changes.

Do not use a different model for every outfit inside one demonstration family.

## 5.2 Horizontal category / look rail — LOCKED

Use large photographic cards.

Each card:
- approximately 3:4 ratio
- visually large, not tiny
- try-on result visible by default
- hover/focus reveals original shopper/base image
- product thumbnail remains visible bottom-right
- category/product label remains visible bottom-left
- smooth crossfade
- subtle image scale only

Mobile:
- horizontal swipe
- scroll snap
- one main card around 82–88vw
- part of the next card visible
- hover becomes tap/toggle/press interaction

## 5.3 Reviews / trust

Use real reviews only.

If there are not enough approved reviews, use real operational proof and real stack/integration trust instead.

## 5.4 Platform / provider icons

Use real provider icons / marks where allowed.

Never type brand names and style them as fake logos.

---

# 6. Antla mechanics we want

## 6.1 Tall interactive hero — LOCKED

Preferred composition:
- copy block
- large full-body model / product visual
- adjacent product selector rail

Desktop:
- large visual stage
- vertical product rail

Mobile:
- large visual
- horizontal product rail

## 6.2 Instant garment switching — LOCKED

Click / tap a garment:
- same person remains fixed
- clothing changes
- no layout shift
- no crop jump
- no identity change
- fast crossfade

## 6.3 Conversion Engine — LOCKED CONCEPT

Antla's idea is important because it does not stop at try-on.

GrindCTRL's version must be broader:

**Shopper signal → identity/consent/context where known → customer/lead profile → CRM/routing/workflow → WhatsApp/Instagram/follow-up → return/order/outcome → reporting**

This must be visual.

Do not represent this as a paragraph or 6 disconnected cards.

Use one connected visual journey with real icons, UI fragments and states.

---

# 7. OptiDress ideas we want

## 7.1 Scroll storytelling

Decision:
Strong scroll choreography in 2–3 signature places only.

Recommended:
1. Hero / opening
2. Fragmented journey → connected journey
3. Optional product/system proof scene

Do not make every section sticky.

Mobile may fall back to normal vertical flow if sticky behavior hurts usability.

## 7.2 Problem-first storytelling

Create one strong editorial section showing the merchant's fragmented reality before GrindCTRL.

Example:

Customer sees product
→ asks on Instagram
→ information copied manually
→ lead goes somewhere else
→ follow-up is missed
→ order happens elsewhere
→ nobody sees the full journey

Then transition into:

**With GrindCTRL: one connected, visible, measurable path.**

Do not make this a feature-card grid.

---

# 8. Perfect Corp ideas we want

Use its principles for:
- visual how-it-works
- solution breadth
- implementation clarity
- API/developer trust where real
- enterprise confidence
- technical depth
- multiple CTA paths

Do not copy its visual density if that makes GrindCTRL feel heavy.

---

# 9. Visual direction

Desired blend:
- Apple-like clean product presentation: 40%
- Premium modern SaaS: 35%
- Enterprise technology confidence: 25%

Fashion editorial character belongs mainly in shopping / try-on.

The rest of the platform should feel mature, technical and controlled.

---

# 10. Background style

Light-first.

Use:
- white
- warm off-white
- light neutral surfaces
- subtle tonal sections

Dark sections may be used selectively for contrast.

Do not use a generic dark-navy AI SaaS aesthetic.

---

# 11. Typography

Blend:
- clean Apple-like readability
- modern tech/product typography
- selective luxury/editorial character in major headings

Body text must stay highly readable.

No overly fashionable serif across the whole site.

No monospace as primary UI typography.

---

# 12. Human photography

Use human photography strongly in:
- hero visual proof
- try-on
- AI shopping
- shopper experience

Use real UI more heavily for:
- conversations
- leads
- operations
- analytics
- integrations

---

# 13. Persistent models / brand memory — LOCKED

Use the same woman and same man repeatedly in the try-on experience.

Purpose:
- visual consistency
- instant recognition
- before/after credibility
- brand memory

Current assets:
- shopper-woman.png
- shopper-man.png
- garment-linen-shirt.png
- garment-abaya.png
- garment-denim-overshirt.png
- garment-knit-polo.png

Required result assets:
- tryon-woman-linen-shirt.png
- tryon-woman-abaya.png
- tryon-man-denim-overshirt.png
- tryon-man-knit-polo.png

Result images must preserve identity, pose, camera and background as closely as possible.

Do not fake try-on by overlaying flat garment PNGs on top of the shopper with CSS.

---

# 14. Hero

## Primary archetype
Antla-style hero is preferred.

OptiDress-like scroll behavior may enhance it, but must not reduce clarity.

## Height
Desktop visual stage target:
- approximately 720–800px when viewport allows
- minimum approximately 680px on normal desktop

The hero may use a 140–180svh storytelling wrapper with a sticky inner stage if performance and UX remain strong.

Mobile must not become a scroll trap.

## Structure

### Left
- small trust/positioning line
- platform-level H1
- short supporting copy
- CTA: See it working
- CTA: Book a call

### Main visual
Large stable model/product or GrindCTRL product state.

### Selector rail
Desktop: vertical.
Mobile: horizontal.

---

# 15. Hero interaction level

Decision: strong interaction.

The visitor should want to click or tap.

Allowed:
- product switching
- real state switching
- controlled crossfade
- selected states
- subtle zoom
- scroll transitions

Avoid:
- floating random cards
- glow blobs
- 3D decoration
- excessive parallax
- motion with no product meaning

---

# 16. Hero try-on placement

Preferred:
keep Antla-like try-on switching in or directly connected to the hero.

Developer may move the complete switcher to the immediate next scene only if:
- the hero becomes significantly stronger as a platform story
- try-on remains above / near first scroll
- browser comparison proves the alternative is better

This is a controlled creativity area.

---

# 17. Genlook before/result mechanic — LOCKED

A section must exist with a close equivalent of this mechanic.

Default:
try-on result.

Hover/focus:
original shopper/base state.

Same identity.
Same crop.
Same pose.
Only clothing difference.

Developer may change styling and placement but cannot remove this comparison mechanic.

---

# 18. Page length

Medium length but visually substantial.

Not endless.
Not short.

Each major capability should feel like its own visual scene.

Avoid duplicate sections and long text.

---

# 19. Scroll behavior

Use strong scroll choreography in:
- hero/opening
- problem journey
- optionally one platform/product scene

Do not make the entire website a pinned animation.

---

# 20. Motion intensity

Medium premium motion.

Motion should:
- help comprehension
- clarify state
- reward interaction

Motion should never become the product.

---

# 21. Real UI policy — LOCKED

Use real UI strongly.

For:
- conversations
- leads
- operations
- reporting

Prefer actual product screenshots even if they are less marketing-polished.

Authenticity is more important than fake polished mockups.

If sensitive:
anonymize.

If production data cannot be shown:
use clearly labeled Demo Data.

Never fabricate.

---

# 22. Conversations

Use real UI.

Preferred visual:
- channel icon
- incoming customer message
- AI reply
- context source
- current state
- handoff status
- next action

Do not use text-only cards as proof.

---

# 23. Leads

If verified and ready, show actual lead/customer UI.

Possible visible fields:
- source
- customer
- product interest
- stage
- owner
- next action
- last event

Do not invent a CRM screen if none exists.

---

# 24. Operations

Use actual workflow/run UI.

Show:
- trigger
- workflow
- status
- action
- result
- duration if real
- human review
- failure/retry where real

The section should feel technical and trustworthy.

---

# 25. Analytics / reporting

Use actual reporting UI.

Demo data is allowed only when explicitly labeled.

No fake:
- revenue
- uplift
- conversion
- customers

Copy should be business/results-driven but truthful.

---

# 26. Integrations — LOCKED VISUAL PRINCIPLE

Preferred treatment:
clean native icon grid.

Priority:
- correct official icon/mark
- clearly positioned
- visually clean
- grouped logically
- no text-only logo rail

Groups:

### Commerce
Shopify

### Channels
WhatsApp
Instagram
Telegram if verified

### Automation
n8n
Make
Zapier

### CRM
HubSpot / verified systems

### Data
Supabase / verified systems

### AI
Claude
Gemini
other verified providers

Each item may show:
- icon
- name
- integration depth

Examples:
Native
API
Automation layer
Custom
Internal technology

Do not imply official partnership.

---

# 27. Trust strategy

If customer logos/reviews are not sufficient, use a mix of:
- verified integration trust
- real operational proof
- real screenshots
- verified metrics
- approved reviews

No fake Trusted by wall.
No fake stars.

---

# 28. CTA system

Primary CTA:
**See it working**

Secondary:
**Book a call**

Use consistently.

---

# 29. Pricing

Show a pricing teaser on homepage.

Do not let pricing redefine the whole company as a try-on credit product.

Homepage teaser should:
- indicate entry point
- explain managed/custom path if real
- link to full pricing

No pricing architecture changes without commercial approval.

---

# 30. Copy tone

Business/results-driven.

Copy should answer:
- what happens
- why it matters
- what result it creates
- what the merchant gains

Avoid generic AI hype and poetic filler.

Keep copy short.

---

# 31. First-5-second browser test — LOCKED

Within 5 seconds the visitor should understand:
- GrindCTRL works across ecommerce/customer journey
- it is a serious platform/service
- it has powerful visual/product capabilities
- it is not just virtual try-on

This is a mandatory browser acceptance test.

---

# 32. Homepage structure

Recommended sequence:

1. Tall immersive hero
2. Trust / verified proof
3. Fragmented journey → connected journey
4. One platform overview
5. Genlook-style same-shopper visual rail
6. Interactive try-on switcher
7. Conversations
8. Leads / customer context
9. Operations
10. How GrindCTRL works
11. Reporting / control
12. Integrations
13. Pricing teaser / business case
14. Managed implementation / technical trust
15. Platform-level final CTA

Developer may merge or reorder sections if:
- the narrative improves
- no locked mechanic disappears
- the first-5-second perception remains correct
- browser comparison proves the alternative is stronger

---

# 33. Platform overview

Do not use 5 generic cards.

Show one connected system.

Visual nodes:
- Shopper / Storefront
- Conversation
- Customer / Lead
- Operation
- Outcome / Reporting

Use real UI thumbnails.

The relationship must be understandable visually.

---

# 34. GrindCTRL Conversion Engine — LOCKED CONCEPT

This should become a signature section.

Flow:

1. Shopper signal
2. Known identity / consent / session context
3. Customer / lead profile
4. CRM / routing / segmentation
5. Automated or assisted action
6. Personalized follow-up
7. Shopper return / order / outcome
8. Reporting

Possible channels only where verified:
- Shopify
- WhatsApp
- Instagram
- CRM
- Meta / marketing platform
- other real integrations

Use:
- native icons
- real UI fragments
- state labels
- product/event context
- connectors

Do not use disconnected feature cards.

---

# 35. Reviews

Use real approved customer reviews only.

Prefer fewer strong reviews over many weak ones.

Include only approved:
- customer/store name
- role/company
- quote

No filler testimonials.

---

# 36. Visual rhythm

Default:
**alternating rhythm**

Strong scene
→ quieter scene
→ strong interaction
→ quieter trust/explanation
→ strong visual again

Do not make every section equally loud.

---

# 37. Developer freedom model

Decision:
**Hybrid freedom.**

## Locked
Developer must preserve:
- broad platform identity above the fold
- tall immersive hero
- same-person garment switching
- Genlook-style before/result hover mechanic
- real UI for non-fashion proof
- native real integration icons
- strong connected Conversion Engine journey
- real proof / no fabrication
- platform-level final CTA/footer identity
- strong desktop and mobile quality

## Flexible
Developer may decide:
- exact section composition
- exact spacing
- motion choreography
- visual framing
- card radius
- micro-interactions
- editorial transitions
- exact placement of reviews/trust
- whether full try-on switcher is hero-center or immediate next scene
- sticky vs normal behavior if UX/performance improves

---

# 38. Competitor similarity vs creativity

Decision:
Blend between:
- staying close to proven mechanic
- allowing a better GrindCTRL-native alternative

Rule:

If a competitor mechanic is locked in this spec, implement it closely in behavior.

If developer believes another solution is better:
- prototype it
- compare both in browser
- show why the alternative improves clarity, performance or brand
- do not silently replace the locked mechanic

---

# 39. Mobile

Mobile must be designed separately.

Hero:
- copy first
- large visual
- horizontal selector rail

Genlook rail:
- horizontal scroll
- snap
- partial next card visible
- before/result tap interaction

Sticky desktop scenes:
- may become normal stacked flow

UI screenshots:
- crop/focus intelligently
- never become tiny unreadable desktop screenshots

Integrations:
- 2-column grid or clean grouped horizontal layout

No horizontal page overflow.

---

# 40. Performance

Measure before and after:
- LCP
- INP
- CLS
- initial JS
- largest media
- mobile performance

Use:
- responsive images
- optimized formats
- lazy loading below fold
- correct LCP loading
- preloading for image swaps
- no unnecessary animation libraries

Do not sacrifice performance for animation.

---

# 41. Accessibility

All interactions must support:
- keyboard
- focus
- touch
- reduced motion
- semantic controls
- alt text
- no hover-only essential information

Before/result hover must have keyboard/focus equivalent.

Mobile must have explicit tap behavior.

---

# 42. Routing

Core:
- `/` Homepage
- `/platform` Full platform
- `/try-on` Virtual try-on
- `/conversations` Customer conversations
- `/operations` Automation / operations
- `/analytics` Reporting / control
- `/integrations` Integrations
- `/demo` Direct product proof
- `/pricing` Pricing

Conditional only when content/product depth exists:
- `/customers`
- `/resources`
- `/developers`
- `/security`
- `/leads`

Legal:
- `/privacy`
- `/terms`

Do not create thin pages.

---

# 43. Navigation

Desktop:

Product
- Platform
- Try-On
- Conversations
- Operations
- Analytics

Integrations
Pricing
Customers only if ready
Resources only if ready

Right:
- Sign in
- Book a call
- See it working

Keep navigation clean.

---

# 44. Final CTA

Must be platform-level.

Direction:
**See what GrindCTRL can run for your store.**

Primary:
See it working

Secondary:
Book a call

Do not close the page with try-on-only language.

---

# 45. Footer identity

Footer must describe GrindCTRL as a broad commerce platform/service.

Do not use:
`Managed AI virtual try-on for Shopify fashion stores`

Direction:
`Managed AI commerce systems for online stores`

Exact approved wording may improve.

---

# 46. Prohibited patterns

Do not use:
- generic SaaS hero
- small hero
- repeated 3-card grids
- text-only product proof
- fake dashboards
- fake metrics
- fake customer logos
- fake integrations
- fake reviews
- wordmark-only integration marquee
- emoji placeholders
- generic AI gradients
- dark navy as dominant identity
- floating glass cards everywhere
- random glow
- gratuitous parallax
- copied competitor wording
- copied competitor source code
- different person for each garment inside same demo family

---

# 47. Mandatory implementation workflow

## Phase 1 — Browser benchmark
Open GrindCTRL + four competitor references.
Capture desktop/mobile.

## Phase 2 — Design-system audit
Document current GrindCTRL tokens/components.

## Phase 3 — Asset inventory
List:
- models
- garments
- try-on results
- UI screenshots
- dashboards
- chats
- lead screens
- operations screens
- analytics screens
- logos/icons

## Phase 4 — Visual map
Every section must have:
- purpose
- benchmark mechanic
- GrindCTRL adaptation
- real asset
- interaction
- mobile treatment
- performance note

## Phase 5 — Hero only
Build hero.
Browser review.
Do not continue until first-5-second test passes.

## Phase 6 — Genlook mechanics
Build:
- same-person garment switcher
- before/result hover rail

Browser review.

## Phase 7 — Journey / Conversion Engine
Build connected downstream flow.

## Phase 8 — Real UI scenes
Conversations
Leads
Operations
Reporting

## Phase 9 — Integrations
Use real provider icons.

## Phase 10 — Pricing / trust / final CTA
Complete supporting sections.

## Phase 11 — QA
Desktop
Mobile
Accessibility
Performance
RTL where applicable

---

# 48. Final browser acceptance

Implementation is accepted only when:
- first 5 seconds are clear
- site feels enterprise-ready
- visual wow is obvious
- hero is materially taller/stronger than current site
- same-person garment switching works
- Genlook-like before/result rail works
- Conversion Engine journey is clearly visible
- real UI is used for non-fashion product proof
- integration icons are real and well positioned
- no fabricated proof exists
- mobile is deliberately designed
- page does not look like generic SaaS
- GrindCTRL remains visually consistent with its own brand control system

---

# 49. Final standard

Target:

**Genlook-level visual clarity**
+
**Antla-level interaction**
+
**OptiDress-level storytelling**
+
**Perfect Corp-level technical trust**
+
**GrindCTRL's own product, brand and customer journey**

The developer should still have room to produce a better GrindCTRL-native composition.

But the final browser result must clearly meet or exceed those benchmark qualities.
