# iSAPsolutions.si — Website (Premium v2)

v2 (2026-10-24) replaces the plain v1 after feedback that v1 looked oversimplistic. v1 is backed up in the goal files as `isapsolutions-v1-index.html`, not in this repo.
v2.1 (2026-10-24) mobile-only fix: pin + GSAP scrub disabled at <=960px (native scroll + reveals), story wireframe boxes labeled, section padding tightened on mobile. Desktop (>960px) pin/scrub code is unchanged.

Single-page, client-facing website for **iSAPsolutions.si**.
SI = Super Intelligence. Not a country claim.

## What is in v1

- Sticky nav + early "Book a Review" CTA (the original prompt only had a CTA at 100% scroll)
- Hero: "iSAPsolutions.si // The Intelligence Apex" + plain-English offer line
- Agentic Injection Layer: 3 pillars (Unified Digital Core, Vector Layers, Agentic Modernization under the ISAP Solutions approach)
- Realization Matrix: outcomes stated without invented percentages
- Services: all 8 services confirmed by the boss on 2026-10-24
- Approach: Discover → Architect → Pilot → Scale → Run & Improve, plus security wording
- Strategic Vision Primer: 50/50 sticky/scoll layout, "Moving Beyond the Static Ledger"
- Industries & Insights: starter areas and 3 insight topics
- Technical Intake Hub: Name/Title, Company, Work Email, Target Enterprise Footprint, Cloud Baseline, Primary Operational Bottleneck
- Footer: trademark disclaimer for SAP / Oracle, direct uplinks

## Design

- Deep obsidian `#050505`, white `#ffffff`, dark gray borders `#222222`, cyan `#00f3ff` for technical accents only
- Monospace for labels/data, system sans for body paragraphs (readability fix)
- SVG wireframe only — no heavy 3D library, so "high-performance" holds on mobile
- Smooth scroll via Lenis + scroll animation via GSAP ScrollTrigger, loaded from CDN
- Pinned scroll story: the core section pins and phases assemble on scroll (GSAP scrub); fallback shows all phases if GSAP fails or reduced-motion is on
- Display typography (Space Grotesk + Inter + JetBrains Mono via Google Fonts), gradient accents, grid/glow hero, scroll progress bar, interactive service tabs, FAQ accordion
- Progressive enhancement: if the CDNs fail, or reduced-motion is on, all content is still fully readable via IntersectionObserver reveals
- Mobile: pinned/sticky layouts collapse to a single column, nav links collapse

## Do NOT publish as final until these are resolved

- [ ] labs@isapsolutions.si and info@isapsolutions.si — NOT yet created (boss to create very soon). Wire the form backend to them and send a test submission.
- [ ] Metrics: the original "40%" / "42%" figures are deliberately NOT in v1. Add percentages only with a measured source + context.
- [ ] SAP / Oracle partner status: the site uses neutral wording ("works across SAP and Oracle estates"). Change only if certified.
- [ ] Security / data-handling wording: confirm as a contractual commitment before relying on it.
- [ ] Industries list, leadership bios, location, legal entity name: confirm / supply.
- [ ] Intake reply timeframe: v1 says "we will reply with next steps" with no number — add a timeframe only once confirmed.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000/
```

## Deploy (free tier)

1. Create a GitHub repository (e.g. `isapsolutions-si`) and push `index.html` + this README to `main`.
2. Enable GitHub Pages from `main` (or use Netlify / Cloudflare Pages with the same files).
3. In the domain DNS, point `isapsolutions.si` to the Pages host and enable HTTPS.
4. Wire the intake form to a form backend (Netlify Forms, Formspree, or similar) once the inboxes exist — the current form shows a client-side confirmation only.
