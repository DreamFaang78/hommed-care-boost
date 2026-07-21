## Add Patient Testimonials Section

Insert a new "मरीज़ों की असली कहानियाँ" (Real Patient Stories) section on the landing page, placed after `WhyHommed` and before the final CTA/footer area.

### Assets
Upload the two consultation photos as Lovable Assets:
- `user-uploads://Doctor_Iqbal_consulting_patient_2K_202607211933.jpeg` → `src/assets/testimonial-sanjeev.jpg.asset.json`
- `user-uploads://Doctor_speaking_to_patient_consu_202607211930.jpeg` → `src/assets/testimonial-rajeev.jpg.asset.json`

### New component: `Testimonials` (in `src/routes/index.tsx`)
Deep-green section matching existing theme, gold accent heading, 2 stacked cards (mobile-first). Each card:
- Consultation photo (top, 16:10, gold border, rounded)
- Green verified check + name + city chip: "संजीव कुमार · कन्नौज" / "राजीव सिंह · रांची"
- Problem tag chip (gold outline): "शीघ्रपतन (PE)" / "शुक्राणु की कमी"
- 5-star row (gold)
- Hindi testimonial quote (2–3 lines, written by me, natural tier-3 patient voice, no medical claims/guarantees)
- Footer meta: "इलाज अवधि: 4 महीने" / "5 महीने" + "सत्यापित मरीज़" label

### Copy (drafted)
**Sanjeev Kumar, Kannauj — शीघ्रपतन**
"पहले शर्म की वजह से किसी को बता नहीं पाता था। डॉ. इक़बाल सर ने बहुत आराम से समझाया, दवा शुरू की और 4 महीने में फ़र्क़ खुद महसूस हुआ। अब आत्मविश्वास वापस आ गया है।"

**Rajeev Singh, Ranchi — शुक्राणु की कमी**
"शादी के 3 साल बाद भी बच्चा नहीं हो रहा था, रिपोर्ट में स्पर्म काउंट कम था। HomMed से इलाज लिया, धीरे-धीरे रिपोर्ट सुधरी। परिवार में अब खुशखबरी है — डॉक्टर साहब का शुक्रिया।"

Small legal-safe disclaimer under section: "*परिणाम व्यक्ति और स्थिति पर निर्भर करते हैं।"

### Motion
Reuse existing `useRevealOnScroll` pattern (cards get `.reveal` class, stagger 0.09s), respects `prefers-reduced-motion`. No new dependencies.

### Files touched
- `src/routes/index.tsx` — add `Testimonials` component + import both new asset JSONs + mount after `WhyHommed`
- 2 new `.asset.json` pointer files under `src/assets/`

### Out of scope
No video testimonials, no carousel, no schema.org Review markup, no changes to other sections.
