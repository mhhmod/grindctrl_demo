# GrindCTRL homepage creative production pack

## Art direction and source rules

Create a premium, calm commerce experience around **a connected journey**, not a wall of generic dashboards. The visual system is warm cream, charcoal, and quiet sage from the existing Try-On examples. Use generous negative space, true fabric texture, restrained camera movement, and crisp UI compositing. The homepage should move from the shopper's decision to conversations and operations, then proof/reporting. Try-On is one strong moment in that journey.

Three new optional editorial images are supplied:

| File | Suggested use | Truth label |
| --- | --- | --- |
| `public/landing/editorial/concept-shopper-browsing-sage-shirt.png` | Shopper or Try-On context; copy can sit in the image's open space | AI-generated conceptual lifestyle image |
| `public/landing/editorial/concept-ecommerce-team-workspace.png` | Conversations/operations section | AI-generated conceptual team image; not a customer or employee photo |
| `public/landing/editorial/concept-sage-linen-shirt-detail.png` | Garment or product-detail transition | AI-generated conceptual product still life; not a real SKU |

The exact images already shown by the website are in `public/landing/proof/`; the matching Try-On inputs and results are in `public/landing/proof/tryon/`. Use the original image files as source plates. Composite real UI crops in an editor; do not ask a video model to recreate their text or metrics. Do not invent product screens, customer data, numeric claims, customer logos, or new try-on results. A first design can use these images without any video.

Additional source plates now include `demo-ui-captured-leads-demo-data-en.webp`, `demo-ui-workflow-catalog-preview-en.webp`, and `demo-ui-analytics-preview-demo-data-en.webp`. Their visible Demo Data and preview labels must remain visible in any film. The workflow catalog must not be animated into an executed run.

All motion briefs below target **10 seconds**, silent, with a 16:9 desktop master and 9:16 mobile reframing. Keep meaningful content inside the center 60% of the frame. Deliver MP4/H.264, poster still, and a static reduced-motion alternative. Preserve clean frames for English and Arabic copy to be added in the webpage itself, rather than baking translated text into video. Never autoplay audio. If videos are used, load only those visible in the page, provide controls where needed, and respect `prefers-reduced-motion`.

## Film 1 — The connected journey (hero, 10 seconds)

**Purpose:** establish that GrindCTRL connects shopping, conversation, and reporting. **Source plates:** `concept-shopper-browsing-sage-shirt.png`, `demo-ui-storefront-tryon-en.webp`, `demo-ui-shopper-chat-hero-crop-en.webp`, `demo-ui-team-inbox-hero-crop-en.webp`, `demo-ui-store-chat-overview-hero-crop-en.webp`. Prepare an Arabic variant with the matching `-ar` files if any UI is legible.

**Prompt:** Produce a refined, silent, 10-second homepage hero film. At 0–2 s, open on the supplied shopper/garment image with subtle daylight and a slow 2% push-in. At 2–4 s, reveal the supplied storefront Try-On crop in a clean, readable floating frame, without changing its content. At 4–6 s, pass the attention to the supplied conversation crop, with a restrained highlight around the existing message area. At 6–8 s, reveal the inbox crop; at 8–9.5 s, reveal the reporting crop as a quiet conclusion. At 9.5–10 s, resolve back toward the opening composition for a seamless loop. Transitions should feel like one information path, using brief masked wipes and soft parallax, no neon trails or flying dashboards. Preserve the UI pixels and all words and numbers exactly. Leave room for HTML headline and CTA overlays. The film is an illustrative demo, not live platform footage.

## Film 2 — Garment to result (Try-On feature, 10 seconds)

**Purpose:** explain the interaction precisely. **Source plates:** `tryon/inputs/shopper-woman.webp`, `tryon/inputs/garment-linen-shirt.webp`, `tryon/result-woman-linen-shirt.webp`; optionally create a second cut with `tryon/inputs/shopper-man.webp`, `tryon/inputs/garment-denim-overshirt.webp`, and `tryon/result-man-denim-overshirt.webp`.

**Prompt:** Make a silent 10-second editorial Try-On interaction film using only the supplied matched input and result images. At 0–2 s show the full shopper input photo, unchanged. At 2–4 s bring in the garment photo as a small, clean side card. At 4–6 s show a visible thumbnail selection state. At 6–8 s use a simple masked crossfade to the corresponding supplied result image, keeping the same person, pose, face, background, and framing; do not synthesize a new result. At 8–10 s hold the result long enough to understand the garment, then return to the first frame for looping. Keep the pace calm, with no body morph, glitch, sparkles, invented UI, or before/after quality claim. Label on the webpage that the example uses synthetic inputs and a pre-rendered result.

## Film 3 — A conversation becomes action (feature section, 10 seconds)

**Purpose:** connect the human story to the available conversation/inbox visuals. **Source plates:** `concept-ecommerce-team-workspace.png`, `demo-ui-shopper-chat-en.webp`, `demo-ui-team-inbox-en.webp`; Arabic cut uses `demo-ui-shopper-chat-ar.webp` and `demo-ui-team-inbox-ar.webp`.

**Prompt:** Create a silent 10-second film that begins with the supplied conceptual commerce-team photograph. At 0–3 s, use a steady slow camera move over the scene; device screens must stay unreadable. At 3–6 s, composite the supplied chat UI crop at full legibility, showing only its existing conversation. At 6–8.5 s, transition to the supplied inbox crop with a calm selection emphasis. At 8.5–10 s, return to the team image and resolve to a loopable composition. Use restrained editorial motion, accurate perspective and shadows, and no new notifications, lead status, automation claims, or chat messages. The team photograph is conceptual, and the UI contains demo data.

## Film 4 — Proof, not hype (reporting section, 10 seconds)

**Purpose:** show the existing reporting interface without implying verified business impact. **Source plates:** `demo-ui-store-chat-overview-en.webp`, `demo-ui-store-chat-overview-hero-crop-en.webp`, `demo-ui-tryon-usage-overview-en.webp`; create Arabic cut from equivalent `-ar` files.

**Prompt:** Produce a silent 10-second reporting film. At 0–2 s, begin with warm cream space and a readable crop of the supplied report UI. At 2–5 s, gently pan over the existing chart or table details, never changing any number, label, date, or data point. At 5–7.5 s, introduce the existing Try-On usage crop alongside the report to show that different product moments can be viewed together. At 7.5–10 s, pull back to a balanced, legible composition and loop. Keep motion precise and accessible. No counter animations, growing revenue charts, fake percentage uplift, or new metrics. The existing figures are illustrative demo content.

## Film 5 — Fabric interlude (quiet section divider, 10 seconds)

**Purpose:** add breathing room between product-heavy sections. **Source plate:** `concept-sage-linen-shirt-detail.png`.

**Prompt:** Create a silent 10-second macro editorial loop from the supplied linen still life. Let light move very subtly over the woven fabric and buttons while the camera drifts no more than a few percent. Preserve the exact garment silhouette and material texture. A gentle shadow crossing the cream surface can add depth; avoid wind, liquid, particle effects, added props, labels, or logos. Keep it calm enough to sit behind HTML copy without competing for attention. The end frame must return smoothly to the start. This is conceptual fashion imagery, not a specific product listing.

## Selection guidance

Produce Film 1 and Film 2 first. Add Film 3 only if it improves the storytelling. Use Film 4 where the report crop is large enough to read. Film 5 is a quiet transition, not a replacement for product proof. Test the final page on mobile, English/Arabic, slow network, and reduced motion before choosing how many videos to ship.
