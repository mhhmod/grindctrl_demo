# GrindCTRL V7 — Mandatory Live Competitive References

This file is a required companion to the V7 implementation spec.

Before implementation, open every reference below on desktop and mobile. Study the mechanic and adapt the principle into GrindCTRL. Do not copy competitor code, assets, wording, exact layout or trade dress.

## Shopping / Virtual Try-On

### Genlook — primary shopping reference
- Main: https://genlook.app/
- Shopify: https://genlook.app/shopify
- Live demo: https://demo.genlook.app/
- State of Try-On report: https://genlook.app/reports/state-of-virtual-try-on-q2-2026

Study:
- same person, same face/body/pose/camera, only garment changes
- result-first image rail
- source/result hover or focus comparison
- large 3:4 image-led cards
- one shopper photo across many looks
- real product-page context
- compact reviews and trust
- leads/integrations as downstream value

GrindCTRL adaptation:
- same-person Try-On must remain a locked mechanic
- desktop large visual rail
- mobile horizontal snap/tap equivalent
- shopping interaction must connect into customer/business action

### Antla — primary interactive hero reference
- Main: https://antla.io/

Study:
- tall hero
- stable model stage
- adjacent garment selector
- desktop vertical product selection
- mobile tap/horizontal selection
- immediate garment switching
- Conversion Engine
- Try-On → consent/capture → activation → re-engagement → storefront return

GrindCTRL adaptation:
- stable hero stage with immediate selection
- no layout jump between garments
- expand Conversion Engine into:
  Signal → Context → Customer/Lead State → Decision → Action → Human Control → Follow-through → Outcome → Reporting

### OptiDress — primary scroll-storytelling reference
- Main: https://optidress.fr/en/
- Virtual fitting room: https://optidress.fr/en/optidress/
- Integrations: https://optidress.fr/en/integration/
- Comparisons: https://optidress.fr/en/compare/

Study:
- editorial scroll pacing
- problem-first storytelling
- "Understand what your customers go through"
- large visual sections
- problem → solution progression
- integration presentation

GrindCTRL adaptation:
- strong scroll choreography in only 2–3 signature scenes
- fragmented operation → connected GrindCTRL operation
- large elegant scenes, not dense card grids

### Perfect Corp — technical/product maturity reference
- Virtual dressing room: https://www.perfectcorp.com/business/products/virtual-dressing-room-online
- Virtual Try-On: https://www.perfectcorp.com/business/products/virtual-try-on
- AI Dress Up: https://www.perfectcorp.com/business/products/ai-dress-up-online

Study:
- visual How It Works
- category breadth
- step-by-step product demonstration
- technical maturity
- enterprise presentation

GrindCTRL adaptation:
- show input → action → result visually
- show Shopping, Conversations, Leads, Operations and Reporting with real visual proof

## AI Operations / Business Transformation

### AgentRuntime — primary execution reference
- Main: https://www.agentruntime.io/

Study:
- Run workflow
- current run
- events
- context
- timeline
- step progression
- human approval
- handoff/follow-through

GrindCTRL adaptation:
- signature "Run a GrindCTRL Operation" experience
- user selects a business scenario and watches:
  Signal → Context → Decision → Action → Human → Outcome
- make it business-readable, not a developer runtime
- do not expose a node builder

### Initask — primary show-don't-tell business demo reference
- Main: https://initask.com/en

Study:
- Pick an input signal
- Input → Analysis → Action → Result → Human review
- sample business scenarios
- process-description experience

GrindCTRL adaptation:
- "Choose what happened"
- examples: product question, high-intent lead, failed payment, delayed delivery, exchange, escalation
- show facts/context, rule result, action, human review and outcome
- never expose private chain-of-thought
- optional "What are you still doing manually?" managed-transformation demo

### Gumloop — primary real-system-context reference
- Main: https://www.gumloop.com/
- CRM example: https://www.gumloop.com/use-cases/ai-salesforce-agent

Study:
- live activity
- real app/system context
- recognizable integrations
- work happening across tools
- enterprise controls

GrindCTRL adaptation:
- show work crossing WhatsApp, Shopify, CRM, internal business rules, human owner and reporting
- use legitimate native provider marks
- show actual operational activity where real
- do not adopt the DIY agent-builder positioning

### Kora — primary governance/human-control reference
- Main: https://kora.raw-labs.com/
- Governed AI workflows: https://kora.raw-labs.com/solutions/ai-workflows

Study:
- people + systems + AI
- policy/checkpoints
- approvals
- exceptions
- ownership
- run record
- observable execution

GrindCTRL adaptation:
- visibly pause for approval/escalation where required
- routine work can be automated while judgment remains human-owned
- show exception paths as part of the operation
- use simple merchant/business language, not developer-governance language

### Relevance AI — primary breadth/enterprise reference
- Main: https://relevanceai.com/

Study:
- specific use cases across Sales, Customer Success, Marketing, HR, Support, Operations and Research
- enterprise presentation
- task/use-case breadth
- concrete case studies/results

GrindCTRL adaptation:
- make breadth concrete:
  Shopping
  Customer Service
  Sales / Leads
  Commerce Operations
  Reporting / Management
- show actual work, not "AI for everything"
- never reuse competitor metrics as GrindCTRL claims

## Explicit non-UI references

These may be integrations or implementation infrastructure, but they are NOT the public UI/product model:
- https://n8n.io/
- https://www.make.com/
- https://www.workato.com/
- https://zapier.com/

GrindCTRL must NOT look like:
- a node editor
- a workflow canvas
- a DIY automation builder
- a developer orchestration product

## Final mapping

| GrindCTRL experience | Primary reference | Principle |
|---|---|---|
| Hero Try-On | Antla | stable model stage + immediate item selection |
| Same-person look family | Genlook | same shopper, many garments |
| Before/result rail | Genlook | image-first comparison |
| Shopping → business action | Antla | downstream Conversion Engine principle |
| Scroll narrative | OptiDress | problem-first editorial storytelling |
| How It Works | Perfect Corp | visual step-by-step proof |
| Run a GrindCTRL Operation | AgentRuntime | visible execution |
| Business scenario selector | Initask | input → action → result → human review |
| Real-system context | Gumloop | work across recognizable apps |
| Human approvals/exceptions | Kora | governed human control |
| Business breadth | Relevance AI | concrete multi-function AI use cases |

## Visual rule

Do not combine all reference mechanics into a noisy page.

The target is:
- fewer, stronger product moments
- elegant and premium
- large visual surfaces
- short copy
- minimal icon use
- restrained motion
- no arrow spaghetti
- no dashboard clutter
- no repeated feature-card grids

Preserve GrindCTRL's existing logo, color family and brand identity.
