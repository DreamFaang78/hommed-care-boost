# HOMMED Men's Wellness — Landing Page Plan

Mobile-first Hindi/Hinglish landing page for Dr. Iqbal Quasim's homeopathy clinic, focused on sexual wellness treatments. Built at `/` (replacing the placeholder), single-column, max-width ~420px, trust-heavy, conversion-optimized for tier 3/4 audiences.

## Design tokens (src/styles.css)

Add semantic tokens (oklch) alongside existing ones:
- `--brand-orange` (#F97316) — primary CTAs, submit, checkmark circles
- `--brand-blue` + `--brand-blue-2` — blue gradient for secondary CTAs (call buttons)
- `--brand-green` — trust checkmarks, "online" dot, WhatsApp
- `--brand-yellow-bg` (#FFF9DB) — form + hero overlay banner
- `--section-alt` (#F0F7FF) — alternating section background
- `--brand-purple` + `--brand-teal` — department banner gradient
- Devanagari-friendly font: load **Noto Sans Devanagari** (500/700/900) + **Inter** via `<link>` in `__root.tsx` head; set as `--font-hindi` in `@theme`. Base body uses it; larger sizes (16–18px body, 22–28px headings) for tier-3 readability.
- Utility: `.pulse-dot` custom keyframe for the "online" green dot.

## Route + metadata

- Rewrite `src/routes/index.tsx` (delete placeholder).
- Add page-level `head()`: title "HOMMED — पुरुष स्वास्थ्य विशेषज्ञ | Dr. Iqbal Quasim, Kanpur", meta description in Hindi, og:title/description/type, twitter:card, og:image = generated clinic hero image (absolute URL is handled by hosting; use `/src/assets/...` import → resolved URL).

## Images (generate via imagegen, save to `src/assets/`)

- `clinic-exterior.jpg` — Indian homeopathy clinic building exterior, HOMMED signage, warm daylight (hero).
- `dr-iqbal.jpg` — professional portrait of an Indian male homeopathic doctor, white coat, warm smile, neutral background (used in bottom bar, department banner, doctor card).
- `dr-iqbal-certificates.jpg` — same doctor with framed certificates blurred behind (doctor profile section).

All three use `data-lov-image-placeholder` pattern via direct `imagegen--generate_image` calls during build.

## Components (single file, colocated in `src/routes/index.tsx` or split into `src/components/hommed/*`)

Split for readability:
- `StickyHeader.tsx` — HOMMED wordmark left, hamburger, orange "अपॉइंटमेंट लें" button. Fixed top, white bg, shadow. Hamburger opens a simple sheet with anchor links.
- `StickyBottomBar.tsx` — Fixed bottom, 3-col: doctor circular photo | blue gradient "अभी कॉल करें" `<a href="tel:+918707868504">` | pulsing green dot + "डॉक्टर ऑनलाइन हैं".
- `WhatsAppFab.tsx` — Floating bottom-right (above bottom bar), circular green, links to wa.me URL.
- `Hero.tsx` — Full-width clinic image, yellow overlay banner (top), address chip, bold Hindi headline, rating badge with stars.
- `LeadForm.tsx` — Yellow card. Heading, subtext, blue Call + green WhatsApp buttons, then form: name, mobile (tel input, 10-digit pattern), duration select, checkbox group (5 problems), orange rounded-full submit. On submit → local state shows thank-you card ("धन्यवाद! हमारी टीम जल्द सम्पर्क करेगी।"). No backend; pure client-side state (spec is UI-only, no data persistence mentioned).
- `TrustBadges.tsx` — Green checkmark list of 10 badges, split into 2 groups; between groups a mini "🟢 अभी कॉल करें" nudge card linking to tel:.
- `ProblemGrid.tsx` — 2-col responsive grid on mobile (2×3 or 1-col at very small widths) of 6 problem cards; after every 2 cards insert a mini CTA row.
- `DepartmentBanner.tsx` — Purple→teal gradient section, heading, large centered doctor photo (rounded), name/title label, 4 pill chips.
- `ProcessSteps.tsx` — 4 vertical steps with orange checkmark circles + connecting line.
- `WhyHommed.tsx` — 5 icon cards (lucide-react: ShieldCheck, Truck, MessagesSquare, Leaf, Award).
- `DoctorProfile.tsx` — Doctor image with certificates bg, name, qualification, award badge, "और पढ़ें..." link (anchor, non-functional stub).
- `TrustSection.tsx` — Stats row (10,000+ मरीज / 4.9★ / 98% relief / 10+ years), big Google rating badge card, placeholder note about upcoming testimonials.
- `Footer.tsx` — Two clinic addresses, phone (tel link), email (mailto), hours, Privacy Policy link (`#`).

Section alternation: white / `--section-alt` light-blue backgrounds down the page.

## Layout constraints

- Body wrapper: `mx-auto max-w-[440px] pb-32` (bottom padding for sticky bar + FAB).
- All CTAs: `rounded-full font-bold` + high-contrast bg. Min tap target 48px.
- Sticky header top-0 z-40, bottom bar bottom-0 z-40, WhatsApp FAB z-50 above bottom bar (positioned bottom-24 right-4).
- Smooth scroll for header anchor links to sections.

## Form behavior

- Controlled React state (name, mobile, duration, checked problems array).
- Client validation: name non-empty, mobile matches `/^[6-9]\d{9}$/`.
- On submit prevent default → set `submitted=true` → replace form with thank-you card containing another blue "अभी कॉल करें" CTA.
- No server-side; ready to be wired to Lovable Cloud later if user asks.

## Accessibility & SEO

- Single `<h1>` in hero. `<h2>` per section. Semantic `<section>`, `<nav>`, `<footer>`.
- Alt text in Hindi + English for all images.
- `lang="hi"` on the `<html>` root (adjust `__root.tsx`).
- `tel:` and `https://wa.me/...` links throughout for direct conversion.

## Out of scope (will not do unless asked)

- Backend / lead persistence / SMS / email notifications.
- Real testimonial videos (placeholder note per spec).
- Multi-page routing (`/about`, `/privacy`) — Privacy Policy link is a stub anchor.
- Analytics/pixel integration.

## File changes summary

```text
src/styles.css                              (add tokens, font family, pulse utility)
src/routes/__root.tsx                       (lang="hi", Noto Sans Devanagari <link>)
src/routes/index.tsx                        (rewrite: page head + section composition)
src/components/hommed/StickyHeader.tsx      (new)
src/components/hommed/StickyBottomBar.tsx   (new)
src/components/hommed/WhatsAppFab.tsx       (new)
src/components/hommed/Hero.tsx              (new)
src/components/hommed/LeadForm.tsx          (new)
src/components/hommed/TrustBadges.tsx      (new)
src/components/hommed/ProblemGrid.tsx       (new)
src/components/hommed/DepartmentBanner.tsx  (new)
src/components/hommed/ProcessSteps.tsx      (new)
src/components/hommed/WhyHommed.tsx         (new)
src/components/hommed/DoctorProfile.tsx     (new)
src/components/hommed/TrustSection.tsx      (new)
src/components/hommed/Footer.tsx            (new)
src/assets/clinic-exterior.jpg              (generated)
src/assets/dr-iqbal.jpg                     (generated)
src/assets/dr-iqbal-certificates.jpg        (generated)
```
