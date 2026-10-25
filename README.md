# iSAPsolutions.si — Website

Client-facing website for **iSAPsolutions.si**.
SI = Super Intelligence. Not a country claim.

Live site: https://tigerbabu.github.io/isapsolutions-si/

5 pages: Home, Services, SAP & Approach, About, Contact.

## Tech used

- HTML, CSS, JavaScript — no backend, no database
- GitHub Pages hosting (free tier)
- GSAP ScrollTrigger + Lenis for scroll animation, loaded from CDN
- Google Fonts: Space Grotesk, Inter, JetBrains Mono
- WebP images, embedded in the pages (see Challenges)
- Intake form: client-side only for now. A form-service endpoint (Formspree / Netlify Forms style) can be plugged into `FORM_ENDPOINT` in `script.js` later — no server build is needed for email delivery.

## Design

- Deep obsidian `#050505`, white `#ffffff`, dark gray borders `#222222`, cyan `#00f3ff` for technical accents, plus one accent colour per page in the final version (Services amber, SAP violet, About mint, Contact rose)
- Monospace for labels/data, system sans for body paragraphs
- SVG wireframe only — no heavy 3D library, so performance holds on mobile
- Progressive enhancement: if the CDNs fail, or reduced-motion is on, all content is still fully readable via IntersectionObserver reveals
- Mobile: pinned/sticky layouts collapse to a single column, nav links collapse into a Menu drawer

## Version history — v1 to final (v5.3)

- **v1:** Simple single page — hero, 3 pillars, 8 core services, 5-step approach, vision, intake form. Outcomes stated without invented percentages.
- **v2:** Premium redesign — new typography, gradient accents, scroll progress, service tabs, FAQ, stats strip.
- **v2.1:** Mobile fix — long dead scroll on mobile removed, spacing tightened, wireframe boxes labeled. Desktop pin/scrub unchanged.
- **v2.2:** A lighter mobile interaction was tried, looked odd on mobile, and was reverted the same day back to v2.1.
- **v3:** Split into `index.html` / `styles.css` / `script.js`, single-animation system, SEO (Open Graph, canonical, JSON-LD, sitemap, robots, 404), mobile nav drawer, deeper SAP section (SAP Activate, modules, conversion, BTP, Datasphere/Joule/AI Core/Signavio, labeled target architecture, separate Oracle track, ECC decision), intake form rebuilt with honeypot and a configurable `FORM_ENDPOINT` (empty — no fake send).
- **v3.1:** Unmeasured claims removed and replaced with a brownfield reality section (custom code, master-data cleansing, testing/downtime/rollback) and a cost/governance section (consumption control, human approval, audit trail); unified layer clarified (shared data + approval/audit, separate ERP cores); static architecture grid replaced with a clickable agent workflow (Trigger → Retrieve → Reason → Approve → Act → Audit); intake form reverted to a single page; typography markers demoted.
- **v3.2:** Abstract visuals added — hero, workflow, and vision images. Dark/cyan, no people, no text/logos, no fake systems. Lazy-loaded except the hero.
- **v3.3:** About / heritage section added, with a "Formerly isapsolutions.com" footer note.
- **v3.4:** Full capability list added below the 8 core services, grouped by area.
- **v3.5:** Why section added.
- **v3.6:** Clients section added, names only, no logos reproduced, no project details or metrics per client.
- **v4:** Split from one long page into 5 pages — Home, Services, SAP & Approach, About, Contact — no content deleted. Shared `styles.css` / `script.js`, sitemap updated to 5 URLs.
- **v4.1:** Story break added to Home — a light section with a before/after workflow story ("9:00 AM. An invoice is blocked. What happens next?"), in plain language.
- **v5:** High-tech Home update — animated hero orbs, glass cards, animated counters, extra visuals, plus a demo dashboard (later removed).
- **v5.1:** Demo dashboard removed, hero code leak fixed, colour breaks added to the other pages.
- **v5.2:** Client name correction, CSS brace bug fixed, per-page accent colours added, light breaks moved mid-page.
- **v5.3 (final):** Menu drawer fixed to a proper vertical list, all visuals contained in framed cards, stylesheet cache-busted to `styles.css?v=5.3`.

Backups of earlier single-page versions are kept locally, not in this repo.

## Challenges encountered, and how they were handled

- **First version looked too simple:** It read like a starter template, not a company site. Rebuilt with a premium design system, then iterated on typography and layout until it felt like a real firm.
- **Mobile looked broken:** The pinned scroll story created long stretches of empty black space on phones, and unlabeled wireframe boxes looked like placeholders. Pin disabled on mobile only (≤960px), all phases made fully visible, spacing tightened. Desktop unchanged.
- **A mobile interaction attempt backfired:** A lighter sticky-wireframe version was tried, looked odd on mobile, and was reverted the same day to the version that worked.
- **Claims without proof:** Early drafts carried percentages and a speed claim with no source or measurement behind them. Removed entirely and replaced with plain outcomes, plus a realistic section on custom code, data cleansing, testing, and downtime/rollback.
- **No visuals, then generic visuals:** The site started with no imagery. Added abstract visuals only — no fake people, offices, or logos — so the site looks designed without pretending to show real systems.
- **One page got too long:** By v3 it had grown to 13 sections in a single page. Split into 5 pages with no content deleted, so each page now has a clear job.
- **The site felt bland and all-dark:** Everything was obsidian black with one cyan accent. Added a light story section on Home, then light colour breaks and a different accent colour on each other page.
- **Form with no backend:** The intake form had nowhere to send to, and faking a submission was not acceptable. Left the endpoint empty and the form as client-side only, with a note that it is not live yet. A form-service endpoint can be plugged in later, with no server build needed.
- **A code leak on Home:** An edit to the hero accidentally left a piece of HTML attribute text visible on screen. Found the broken tag, fixed it, and verified it live.
- **A dashboard that didn't fit:** A demo live dashboard was built, but it looked odd in the page and felt misleading as a "live" system. Removed it completely, including its code.
- **A CSS bug that hid colours and duplicated the nav:** An unclosed media-query block trapped several rules inside it, so on normal devices the colours didn't render and the mobile nav showed as a second line. Fixed the braces, cleaned the nav rules, and balanced the stylesheet.
- **Menu and image leaks:** The mobile drawer opened as a horizontal row of links instead of a vertical list, and visuals sat edge-to-edge with no frame. Replaced the nav rules with one clean column-only set, put every visual inside a bordered card with `max-width: 100%`, and cache-busted the stylesheet so browsers pick up the fix.
- **Tool limits:** The GitHub connector cannot create repositories or push binary files, so images are embedded in the pages as WebP data URIs instead of uploaded as separate files. The site works the same, just with larger HTML files. Original image files are kept locally in `site/assets/`.

## Not yet done

- [ ] Intake inboxes (`labs@` / `info@`) — not yet created. Wire the form backend to them and send a test submission.
- [ ] Metrics — add percentages only with a measured source + context.
- [ ] Partner status — site uses neutral wording ("works across SAP and Oracle estates"). Change only if certified.
- [ ] Security / data-handling wording — confirm as a contractual commitment before relying on it.
- [ ] Custom domain — point `isapsolutions.si` at GitHub Pages and enable HTTPS.
- [ ] Intake reply timeframe — add a number only once confirmed.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000/
```

## Deploy (free tier)

1. Create a GitHub repository (e.g. `isapsolutions-si`) and push the site files to `main`.
2. Enable GitHub Pages from `main` (or use Netlify / Cloudflare Pages with the same files).
3. In the domain DNS, point `isapsolutions.si` to the Pages host and enable HTTPS.
4. Wire the intake form to a form backend (Netlify Forms, Formspree, or similar) once the inboxes exist — the current form shows a client-side confirmation only.
