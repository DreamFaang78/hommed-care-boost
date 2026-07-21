
## Polish Layer: Subtle Motion Across HOMMED Landing

Goal: page should feel alive and premium without becoming flashy. All motion 0.2–0.5s, respects `prefers-reduced-motion`, tuned for low-end mobile.

### 1. Dependencies

Install:
- `gsap` (core + ScrollTrigger, bundled)
- `@gsap/react` (useGSAP hook)
- `framer-motion` (for `whileTap`/`whileHover` on CTAs and form success card)

### 2. New shared utilities (`src/lib/motion.ts`)

- `useReducedMotion()` hook wrapping `window.matchMedia('(prefers-reduced-motion: reduce)')`.
- `useCountUp(target, { duration, enabled })` — GSAP-driven counter that only starts when `enabled` is true (fired from ScrollTrigger). Returns formatted string preserving suffix like `+`, `★`, `%`.
- Register `ScrollTrigger` once (module-level `gsap.registerPlugin(ScrollTrigger, useGSAP)`).

### 3. Section entrance animations (`src/routes/index.tsx`)

Wrap each animated section (`ProblemGrid`, `TrustBadges`, `ProcessSteps`, `WhyHommed`, nudge bars) with `useGSAP({ scope: ref })`:

```
gsap.from(q(".reveal"), {
  opacity: 0, y: 20, duration: 0.5, ease: "power2.out",
  stagger: 0.09,
  scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" }
});
```

- Cards/rows get `className="reveal"`.
- Skip entirely when `prefers-reduced-motion` is set (set final state immediately).
- Nudge bars use `x: -10, opacity: 0` variant of the same helper.

### 4. Sticky bottom bar

- On mount: `gsap.from(barRef, { yPercent: 100, duration: 0.4, ease: "power3.out", delay: 0.5 })`.
- Replace CSS `pulse-dot` on the green online dot with a GSAP timeline: `scale 1→1.15→1`, `opacity 0.7→1→0.7`, `duration 1.5, repeat: -1, yoyo: true, ease: "sine.inOut"`. Same helper reused inside "Dr. Iqbal abhi online hain" nudge bars for a single, consistent pulse.

### 5. CTA micro-interactions (Motion / Framer)

Convert the three primary CTAs (`Call now` in LeadForm, `शुरुआत करें` submit, `अभी कॉल करें` bottom bar, header `अपॉइंटमेंट लें`) from `<a>/<button>` to `motion.a` / `motion.button`:

- `whileTap={{ scale: 0.96 }}`
- `whileHover={{ scale: 1.02 }}` (desktop pointer only via `@media (hover: hover)` — Framer handles gracefully on touch)
- `transition={{ duration: 0.18, ease: "easeOut" }}`
- Keep existing `cta-glow-*` utility classes intact.

### 6. Form interactions

- Inputs: add `transition-colors duration-200` + `focus:border-[hsl(var(--brand-gold))]` (CSS-only, no JS).
- Checkboxes: on state change, animate the custom check box with GSAP `gsap.fromTo(el, {scale: 1}, {scale: 1.15, yoyo: true, repeat: 1, duration: 0.1})` inside the change handler.
- Submit: introduce `submitting` state. Button label swaps to `भेज रहे हैं…` with a small inline spinner (Lucide `Loader2` + `animate-spin`). On success, replace form body with a thank-you card animated in via `motion.div` `initial={{opacity:0, scale:0.96}} animate={{opacity:1, scale:1}} transition={{duration:0.3}}`.

### 7. Trust badge count-up

- Numbers in `TrustBadges` / `TrustSection` (`10,000+`, `4.9★`, `98%`, patient count if any) each wrapped in a `<CountUp target={10000} suffix="+" />` component using `useCountUp`.
- Trigger via ScrollTrigger `start: "top 85%"`, once.
- Duration 1.2s, ease `power1.out`.

### 8. Hero clinic image (`AfterFormHero`)

- Page-load reveal: `gsap.from(img, { scale: 1.05, duration: 0.8, ease: "power2.out" })`.
- Subtle parallax: ScrollTrigger with `scrub: true`, `y: 12` over the image's own scroll range. Disabled on `prefers-reduced-motion` and on viewports `< 768px` (to protect low-end mobile scroll perf).

### 9. Performance & accessibility guardrails

- Single top-level `gsap.registerPlugin(ScrollTrigger)` call; per-section `useGSAP({ scope })` handles cleanup automatically on unmount.
- Every `useGSAP` block wrapped with a `gsap.matchMedia` that provides `reduceMotion` and `isMobile` conditions:
  - `reduceMotion` → set final state, no tween.
  - `isMobile` → shorter durations (0.3s), no parallax, no hover scale.
- Explicit `will-change` only on the sticky bar dot and hero image; cleared in the `useGSAP` cleanup return.
- No animations mounted before their section is near viewport (achieved naturally via ScrollTrigger `start: "top 85%"`).

### 10. Out of scope (explicit non-goals)

- No Three.js / WebGPU.
- No confetti, 3D tilt, elaborate route transitions, auto-carousels.
- No WhatsApp FAB work — it was removed earlier and stays removed.
- No copy, layout, color, or business-logic changes.

### Files touched

- `package.json` (add `gsap`, `@gsap/react`, `framer-motion`)
- `src/lib/motion.ts` (new)
- `src/routes/index.tsx` (wire animations into existing components: Header CTA, LeadForm, StickyBottomBar, ProblemGrid, TrustSection/TrustBadges, ProcessSteps, WhyHommed, OnlineNudge, AfterFormHero, CountUp usage)
- `src/styles.css` (minor: remove old dot keyframe if replaced; keep `cta-glow-*`)

### Verification

- Build passes.
- Manual check in preview at 393×852: sections fade-up on scroll, numbers count once, buttons tap-scale, bottom bar slides up, reduced-motion toggle disables all tweens.
