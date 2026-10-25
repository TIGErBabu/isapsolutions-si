# iSAPsolutions.si — Website (Premium v2)

v2 (2026-10-24) replaces the plain v1 after feedback that v1 looked oversimplistic. v1 is backed up in the goal files as `isapsolutions-v1-index.html`, not in this repo.
v2.1 (2026-10-24) mobile-only fix: pin + GSAP scrub disabled at <=960px (native scroll + reveals), story wireframe boxes labeled, section padding tightened on mobile. Desktop (>960px) pin/scrub code is unchanged.
v2.2 (2026-10-24) lighter mobile interaction was REVERTED the same day — the sticky wireframe looked odd on mobile. Site is back to v2.1: mobile static (native scroll + reveals, no pin/scrub), desktop pin/scrub unchanged.
v3 (2026-10-24) all three expert reviews implemented where feasible without inventing claims: split styles.css/script.js, single-animation system (reveals only + desktop pin), SEO (OG, canonical, JSON-LD, sitemap.xml, robots.txt, 404.html), mobile nav drawer, SAP Depth section (SAP Activate, modules, conversion, BTP, Datasphere/Joule/AI Core/Signavio, labeled target architecture, separate Oracle track, ECC decision, plain no-claims note), multi-step intake form with honeypot and a configurable FORM_ENDPOINT (empty until labs@/info@ inboxes exist — no fake send). Still boss-only, NOT invented: partner/certification status, named clients/case-study metrics, team bios, pricing/timeline ranges, form backend endpoint, custom domain.
v3.1 (2026-10-24) reviewer fixes: synthetic-data claim removed, replaced with Brownfield reality (Z-code, master-data cleansing, testing/downtime/rollback) and Cost & Governance (BTP consumption, human approval, audit trail); unified layer clarified (shared data + approval/audit, separate ERP cores); static architecture grid replaced with clickable illustrative agent workflow (Trigger→Retrieve→Reason→Approve→Act→Audit, clearly labeled not live data); intake form reverted to single page; typography markers demoted (only section titles loud).
v3.2 (2026-10-24) abstract visuals only: hero (68KB), agent-flow (26KB), vision (63KB) — dark/cyan, no people, no text/logos, no fake clients. Each captioned as abstract/illustrative. Total ~157KB, lazy-loaded except hero. Note: the GitHub connector push is UTF-8 only, so the visuals are embedded in index.html as WebP data URIs; the original assets/*.webp files are kept locally in site/assets/.
v3.3 (2026-10-24) heritage CONFIRMED by user: isapsolutions.com was the old site, isapsolutions.si is its replacement, same firm, .si = Super Intelligence. Added About section + footer note "Formerly isapsolutions.com" + LinkedIn link (linkedin.com/company/isapsolutions). Did NOT import the old broad services list — the boss-confirmed 8 services on the new site stand. Headcount not put on the public site.
v3.4 (2026-10-24) boss CONFIRMED the full old service list — "we do everything." Added Full Capability List section (ERP SAP/Oracle, HR/CRM apps, Cloud/DevOps/Engineering, Integration/Data, Automation/Delivery), grouped, with the 8 core AI services kept primary above it. List is boss-confirmed, not keyword-stuffed into the hero.
v3.5 (2026-10-25) DRAFT pending boss final approval, at user's direction: Golok claims are treated as iSAP claims ("Golok claims are our claims"). Added Why iSAP section: award-winning SAP global partner, 10+ Centers of Excellence (App Dev & App Management), local partner + global delivery, proven methodologies/tools/accelerators. Replaced starter industries with the Golok SAP industry list. NO named clients added — the Golok SAP page lists industries, not client names. NO new numbers, award names, or metrics invented beyond the Golok page claims. Do NOT present v3.5 as boss-final until he approves.
v3.6 (2026-10-25) CORRECTION: user pointed out Golok homepage (not SAP page) DOES list clients under "Clients we have worked with" as logos. Verified from golokglobal.com homepage image strip: Duke Energy, DXC, Florida Blue, American Express, Atos, HP, Blue Cross Blue Shield, AT&T, Accenture, Infosys. Added Clients section as names only (no logos reproduced), draft pending boss final approval, no project details/metrics claimed per client.

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
