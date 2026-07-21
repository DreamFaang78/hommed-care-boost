Add a small green verified checkmark inline before each ProblemGrid card heading, matching the WeClinic trust pattern, while preserving the existing colored icon circles and card structure.

1. Import `CheckCircle2` from `lucide-react` in `src/routes/index.tsx`.
2. In the `ProblemGrid` card markup, wrap each Hindi heading (`c.t`) in an inline flex container.
3. Place `<CheckCircle2 />` before the heading text with:
   - Size: 18px (16px on very small screens if needed)
   - Color: `#22C55E` (green)
   - Filled style via `fill="currentColor"` or Lucide `fill` prop
   - Gap of ~6px between checkmark and heading text
4. Keep all existing elements untouched:
   - Left colored icon circle (56px)
   - English uppercase subtitle
   - Description paragraph
   - Left-border accent stripe
   - OnlineNudge insertions between cards
5. Apply the same pattern identically to all 6 cards.
6. Run build to verify no errors.

Result: each card will read "✅ शुक्राणु की कमी" with the existing icon circle still on the left, adding a second trust signal without changing the card layout.