import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CountUp } from "@/lib/motion";
import {
  Phone,
  Star,
  Check,
  ShieldCheck,
  Truck,
  Stethoscope,
  Leaf,
  Award,
  MapPin,
  Mail,
  Clock,
  Microscope,
  HeartPulse,
  TimerReset,
  CheckCircle2,
  Loader2,
  Bed,
  Activity,
} from "lucide-react";

import drIqbalImg from "@/assets/dr-iqbal-portrait.jpg";
import drCertsImg from "@/assets/dr-iqbal-stethoscope.jpg";
import clinicExteriorImg from "@/assets/clinic-exterior.jpg";
import hommedLogoImg from "@/assets/hommed-logo.png";
import testimonialSanjeevImg from "@/assets/dr-iqbal-consultation.jpg";
import testimonialRajeevImg from "@/assets/dr-iqbal-consultation-patient.jpg";

export const Route = createFileRoute("/")(({
  component: Landing,
}));

const TEL = "tel:+916306988550";
const PHONE_DISPLAY = "+91 63069 88550";

/* ───────── Landing ───────── */
function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-hindi">
      <StickyHeader />
      <main id="top" className="mx-auto max-w-[440px] pb-28">
        <Hero />
        <DoctorBlock />
        <ProblemGrid />
        <Pricing />
        <ProcessSteps />
        <WhyHommed />
        <Testimonials />
        <StatsBar />
        <Footer />
      </main>
      <StickyBottomBar />
    </div>
  );
}

/* ═══════════════════════════════════════
   1. STICKY HEADER
═══════════════════════════════════════ */
function StickyHeader() {
  return (
    <header
      id="header"
      className="sticky top-0 z-40 w-full border-b border-[color:var(--card-border)] bg-[color:var(--brand-trust)] shadow-card-sm"
    >
      <div className="mx-auto flex max-w-[440px] items-center justify-between gap-2 px-4 py-2.5">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <img
            src={hommedLogoImg}
            alt="HomMed - Dr. Iqbal's Homoeopathic Centre"
            className="h-10 w-auto rounded-md bg-white p-0.5"
          />
        </a>
        <div className="flex items-center gap-2 text-right">
          <a
            href={TEL}
            className="text-[11.5px] font-bold text-white/80"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </header>
  );
}

/* ═══════════════════════════════════════
   2. HERO
═══════════════════════════════════════ */
const HERO_PROBLEMS = [
  "मर्दाना कमज़ोरी",
  "शीघ्रपतन / जल्दी डिस्चार्ज",
  "नाइटफॉल / धात",
  "टाइमिंग की कमी",
  "शुक्राणु की कमी",
  "अन्य गुप्त समस्या",
];

function Hero() {
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [heroSubmitting, setHeroSubmitting] = useState(false);
  const [heroName, setHeroName] = useState("");
  const [heroMobile, setHeroMobile] = useState("");
  const [heroDuration, setHeroDuration] = useState("");
  const [heroProblems, setHeroProblems] = useState<string[]>([]);
  const [heroErr, setHeroErr] = useState("");

  const toggleHeroProblem = (p: string) =>
    setHeroProblems((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p],
    );

  const onHeroSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setHeroErr("");
    if (!heroName.trim()) return setHeroErr("कृपया अपना नाम भरें");
    if (!/^[6-9]\d{9}$/.test(heroMobile))
      return setHeroErr("कृपया सही मोबाइल नंबर भरें (10 अंक)");

    setHeroSubmitting(true);
    try {
      const apiBase =
        (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? "";
      const res = await fetch(`${apiBase}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: heroName.trim(),
          phone: heroMobile.trim(),
          inquiry: heroProblems.length > 0 ? heroProblems.join(", ") : "General Inquiry",
          lead_source: "hero-form",
          notes: heroDuration ? `Duration: ${heroDuration}` : undefined,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { message?: string }).message ?? "Server error");
      }
      setHeroSubmitted(true);
    } catch {
      setHeroErr("कुछ गड़बड़ हो गई। कृपया पुनः प्रयास करें।");
    } finally {
      setHeroSubmitting(false);
    }
  };

  const inputCls =
    "w-full rounded-lg border border-[color:var(--card-border)] bg-[color:var(--section-alt)] px-3.5 py-2.5 text-[14.5px] font-semibold text-foreground outline-none placeholder:text-[color:var(--body-dim)]/60 focus:border-[color:var(--brand-trust)] transition-colors";
  const labelCls = "mb-1 block text-[12px] font-bold text-[color:var(--body-dim)] uppercase tracking-wide";

  return (
    <section id="hero" className="bg-[color:var(--brand-trust)] px-4 pt-7 pb-8 text-white">
      {/* Headline */}
      <h1 className="text-[22px] font-black leading-[1.25] tracking-tight">
        क्या आपको <span className="border-b-2 border-[color:var(--brand-cta)] text-[color:var(--brand-cta)]">मर्दाना तकलीफ़</span> है?
      </h1>
      <p className="mt-3 text-[14px] font-medium leading-relaxed text-white/80">
        सही इलाज होता है — बस एक बार बात करें।
      </p>

      {/* Call Now pill button */}
      <div className="mt-5 mb-2 flex justify-center">
        <a
          href={TEL}
          id="hero-call-now"
          className="flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1a7bbf] to-[#0d5fa0] px-7 py-3 text-[15px] font-black text-white shadow-[0_4px_18px_rgba(13,95,160,0.55)] transition-all duration-150 active:scale-95 hover:scale-105 hover:shadow-[0_6px_24px_rgba(13,95,160,0.70)]"
        >
          <Phone size={17} strokeWidth={2.5} />
          Call Now
        </a>
      </div>

      {/* Inline lead form card */}
      <div className="mt-3 rounded-xl border border-[color:var(--brand-trust)]/30 bg-white shadow-card">
        <AnimatePresence mode="wait" initial={false}>
          {heroSubmitted ? (
            <motion.div
              key="hero-thanks"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="px-5 py-8 text-center"
            >
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-[#22c55e] text-white">
                <Check size={28} strokeWidth={3} />
              </div>
              <h3 className="text-[18px] font-black text-[color:var(--brand-trust)]">
                धन्यवाद!
              </h3>
              <p className="mt-2 text-[13.5px] font-semibold leading-relaxed text-[color:var(--body-dim)]">
                डॉक्टर जल्द कॉल करेंगे।
              </p>
              <a
                href={TEL}
                id="hero-call-after-submit"
                className="mt-5 flex items-center justify-center gap-2 rounded-lg border-2 border-[color:var(--brand-trust)] bg-white py-3 text-[15px] font-black text-[color:var(--brand-trust)]"
              >
                <Phone size={15} strokeWidth={2.5} />
                अभी कॉल करें
              </a>
            </motion.div>
          ) : (
            <motion.form
              key="hero-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              onSubmit={onHeroSubmit}
              className="space-y-3.5 p-4"
            >
              {/* Name */}
              <div>
                <label className={labelCls}>नाम</label>
                <input
                  type="text"
                  value={heroName}
                  onChange={(e) => setHeroName(e.target.value)}
                  placeholder="अपना नाम लिखें"
                  maxLength={80}
                  className={inputCls}
                />
              </div>

              {/* Mobile */}
              <div>
                <label className={labelCls}>मोबाइल नंबर</label>
                <input
                  type="tel"
                  value={heroMobile}
                  onChange={(e) =>
                    setHeroMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                  inputMode="numeric"
                  pattern="[6-9][0-9]{9}"
                  placeholder="मोबाइल नंबर डालें"
                  className={inputCls}
                />
              </div>

              {/* Duration */}
              <div>
                <label className={labelCls}>कितने दिन से?</label>
                <input
                  type="text"
                  value={heroDuration}
                  onChange={(e) => setHeroDuration(e.target.value.slice(0, 60))}
                  placeholder="जैसे: 2 महीने"
                  className={inputCls}
                />
              </div>

              {/* Problem checkboxes */}
              <div>
                <p className="mb-2 text-[12px] font-bold uppercase tracking-wide text-[color:var(--body-dim)]">
                  क्या तकलीफ़ है?
                </p>
                <div className="grid grid-cols-2 gap-x-3 gap-y-2.5">
                  {HERO_PROBLEMS.map((p) => {
                    const active = heroProblems.includes(p);
                    return (
                      <label
                        key={p}
                        className="flex cursor-pointer items-center gap-2 text-[13px] font-semibold text-foreground"
                      >
                        <span
                          onClick={() => toggleHeroProblem(p)}
                          className={
                            "grid h-5 w-5 shrink-0 place-items-center rounded border-2 transition-colors " +
                            (active
                              ? "border-[color:var(--brand-trust)] bg-[color:var(--brand-trust)] text-white"
                              : "border-[color:var(--card-border)] bg-[color:var(--section-alt)]")
                          }
                        >
                          {active && <Check size={12} strokeWidth={3.5} />}
                        </span>
                        <span onClick={() => toggleHeroProblem(p)}>{p}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Error */}
              <AnimatePresence>
                {heroErr && (
                  <motion.p
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-[12px] font-bold text-destructive"
                  >
                    {heroErr}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Submit */}
              <button
                type="submit"
                disabled={heroSubmitting}
                id="hero-submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[color:var(--brand-cta)] py-3.5 text-[16px] font-black tracking-wide text-white disabled:opacity-70 cta-pulse form-submit-button"
              >
                {heroSubmitting ? (
                  <>
                    <Loader2 size={17} className="animate-spin" /> भेज रहे हैं…
                  </>
                ) : (
                  "अभी बात करें"
                )}
              </button>

              {/* Trust line */}
              <p className="text-center text-[11.5px] font-semibold text-[color:var(--body-dim)]">
                आपकी बात कोई नहीं जानेगा।
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   3. DOCTOR BLOCK
═══════════════════════════════════════ */
function DoctorBlock() {
  return (
    <section
      id="doctor"
      className="bg-background px-4 py-7"
    >
      <p className="mb-4 text-center text-[13.5px] font-semibold leading-snug text-[color:var(--body-dim)]">
        कानपुर के डॉक्टर — सीधे आपसे बात करेंगे।
      </p>
      <div className="overflow-hidden rounded-xl border-2 border-[color:var(--brand-trust)] shadow-card">
        <img
          src={clinicExteriorImg}
          alt="HomMed Clinic — Dr. Iqbal's Homoeopathic Centre, Jajmau, Kanpur"
          className="w-full h-auto block"
          loading="lazy"
        />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   4. PROBLEM GRID
═══════════════════════════════════════ */
const PROBLEM_CARDS = [
  {
    t: "शुक्राणु की कमी",
    en: "Low Sperm Count",
    d: "बच्चा नहीं हो रहा? इसका इलाज होता है।",
    icon: Microscope,
  },
  {
    t: "मर्दाना कमज़ोरी / टाइमिंग की समस्या",
    en: "Erectile Dysfunction",
    d: "बिस्तर पर कमज़ोरी आ रही है? आप अकेले नहीं हैं।",
    icon: HeartPulse,
  },
  {
    t: "शीघ्रपतन / जल्दी डिस्चार्ज",
    en: "Premature Ejaculation",
    d: "जल्दी डिस्चार्ज होता है? होम्योपैथी से ठीक होता है।",
    icon: TimerReset,
  },
  {
    t: "स्वप्नदोष",
    en: "Nightfall",
    d: "रात में बार-बार हो रहा है? इलाज होता है।",
    icon: Bed,
  },
  {
    t: "प्रोस्टेट और मूत्राशय",
    en: "Prostate & Urinary",
    d: "बार-बार पेशाब आता है या जलन होती है?",
    icon: Activity,
  },
];

function ProblemGrid() {
  return (
    <section id="problems" className="bg-[color:var(--section-alt)] px-4 py-7">
      <h2 className="mb-5 text-center text-[21px] font-black leading-tight text-[color:var(--brand-trust)]">
        किस तकलीफ़ का इलाज होता है?
      </h2>
      <div className="space-y-3">
        {PROBLEM_CARDS.map((c) => {
          const Icon = c.icon;
          return (
            <div
              key={c.t}
              className="flex items-start gap-3 rounded-xl border border-[color:var(--card-border)] bg-white p-4 shadow-card-sm"
              style={{ borderLeftWidth: 3, borderLeftColor: "var(--brand-trust)" }}
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[color:var(--brand-trust)] text-white">
                <Icon size={24} strokeWidth={2} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-[16px] font-black leading-tight text-[color:var(--foreground)]">
                  {c.t}
                </h3>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-[color:var(--body-dim)]">
                  {c.en}
                </p>
                <p className="mt-1.5 text-[13px] font-medium leading-snug text-[color:var(--body-dim)]">
                  {c.d}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   5. PRICING
═══════════════════════════════════════ */
function Pricing() {
  return (
    <section id="pricing" className="bg-background px-4 py-7">
      <h2 className="mb-5 text-center text-[21px] font-black leading-tight text-[color:var(--brand-trust)]">
        दवा की कीमत
      </h2>
      <div className="overflow-hidden rounded-xl border-2 border-[color:var(--brand-trust)] bg-white shadow-card">
        {/* Price highlight */}
        <div className="bg-[color:var(--brand-trust)] px-5 py-4 text-white">
          <p className="text-[13px] font-semibold text-white/70">पहला महीना</p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-[36px] font-black leading-none">₹1599</span>
            <span className="text-[14px] font-semibold text-white/80">25 दिन की दवा</span>
          </div>
        </div>
        {/* Details */}
        <div className="divide-y divide-[color:var(--card-border)] px-5">
          <div className="py-4">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[color:var(--brand-trust)]" fill="var(--accent)" />
              <p className="text-[14px] font-semibold leading-snug text-foreground">
                25 दिन की दवा — घर पर गुप्त डिलीवरी
              </p>
            </div>
          </div>
          <div className="py-4">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[color:var(--brand-trust)]" fill="var(--accent)" />
              <p className="text-[14px] font-semibold leading-snug text-foreground">
                ऑनलाइन या क्लिनिक — जैसे चाहें
              </p>
            </div>
          </div>
          <div className="py-4">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[color:var(--brand-trust)]" fill="var(--accent)" />
              <p className="text-[14px] font-semibold leading-snug text-foreground">
                Follow-up भी शामिल
              </p>
            </div>
          </div>
        </div>
        {/* Honest disclaimer */}
        <div className="mx-5 mb-5 rounded-lg bg-[color:var(--section-alt)] px-4 py-3">
          <p className="text-[13px] font-medium leading-relaxed text-[color:var(--body-dim)]">
            पहला महीना ₹1599। ज़्यादातर लोगों को <strong className="text-foreground">3–5 महीने</strong> लगते हैं — डॉक्टर खुद बताएंगे।
          </p>
        </div>
        <div className="px-5 pb-5">
          <LeadFormInline source="pricing" />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   INLINE LEAD FORM (reusable compact CTA — replaces all WaButtons)
═══════════════════════════════════════ */
const INLINE_CONDITIONS = [
  "मर्दाना कमज़ोरी",
  "शीघ्रपतन / जल्दी डिस्चार्ज",
  "नाइटफॉल / स्वप्नदोष",
  "शुक्राणु की कमी",
  "प्रोस्टेट / मूत्र समस्या",
  "अन्य गुप्त समस्या",
];

function LeadFormInline({ source }: { source: string }) {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [condition, setCondition] = useState("");
  const [err, setErr] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErr("");
    if (!name.trim()) return setErr("कृपया अपना नाम भरें");
    if (!/^[6-9]\d{9}$/.test(phone))
      return setErr("कृपया सही मोबाइल नंबर भरें (10 अंक)");

    setLoading(true);
    try {
      const apiBase =
        (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? "";
      const res = await fetch(`${apiBase}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          inquiry: condition || "General Inquiry",
          lead_source: source,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { message?: string }).message ?? "Server error");
      }
      setDone(true);
    } catch {
      setErr("कुछ गड़बड़ हो गई। कृपया पुनः प्रयास करें।");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full rounded-lg border border-[color:var(--card-border)] bg-white px-3.5 py-2.5 text-[14.5px] font-semibold text-foreground outline-none placeholder:text-[color:var(--body-dim)]/60 focus:border-[color:var(--brand-cta)] transition-colors";

  if (done) {
    return (
      <div className="mt-4 rounded-xl border-2 border-[color:var(--brand-cta)] bg-white p-5 text-center shadow-card">
        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#22c55e] text-white">
          <Check size={24} strokeWidth={3} />
        </div>
        <p className="text-[15px] font-black text-[color:var(--brand-trust)]">धन्यवाद!</p>
        <p className="mt-1 text-[13px] font-semibold text-[color:var(--body-dim)]">
          डॉक्टर जल्द कॉल करेंगे।
        </p>
        <a
          href={TEL}
          className="mt-4 flex items-center justify-center gap-2 rounded-lg border-2 border-[color:var(--brand-trust)] bg-white py-2.5 text-[14px] font-black text-[color:var(--brand-trust)]"
        >
          <Phone size={14} strokeWidth={2.5} />
          अभी कॉल करें
        </a>
      </div>
    );
  }

  return (
    <div className="mt-4 overflow-hidden rounded-xl border-2 border-[color:var(--brand-cta)] bg-white shadow-card">
      {/* Green header band */}
      <div className="bg-[color:var(--brand-cta)] px-4 py-3">
        <p className="text-center text-[14px] font-black text-white">
          🩺 नाम-नंबर दें — डॉक्टर कॉल करेंगे
        </p>
        <p className="mt-0.5 text-center text-[11.5px] font-semibold text-white/80">
          गुप्त बात · फ्री में बात करें
        </p>
      </div>
      <form onSubmit={onSubmit} className="space-y-3 p-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="आपका नाम"
          maxLength={80}
          className={inputCls}
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
          }
          inputMode="numeric"
          pattern="[6-9][0-9]{9}"
          placeholder="मोबाइल नंबर (10 अंक)"
          className={inputCls}
        />
        <select
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          className={`${inputCls} appearance-none`}
        >
          <option value="">समस्या चुनें (वैकल्पिक)</option>
          {INLINE_CONDITIONS.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <AnimatePresence>
          {err && (
            <motion.p
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="text-[12px] font-bold text-destructive"
            >
              {err}
            </motion.p>
          )}
        </AnimatePresence>
        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[color:var(--brand-cta)] py-3.5 text-[16px] font-black tracking-wide text-white disabled:opacity-70 cta-pulse"
        >
          {loading ? (
            <>
              <Loader2 size={17} className="animate-spin" /> भेज रहे हैं…
            </>
          ) : (
            "भेजें"
          )}
        </button>
        <p className="text-center text-[11px] font-semibold text-[color:var(--body-dim)]">
          🔒 बात किसी को नहीं पता चलेगी
        </p>
      </form>
    </div>
  );
}

/* ═══════════════════════════════════════
   6. LEAD FORM (kept, moved below pricing)
═══════════════════════════════════════ */
const PROBLEMS_LIST = [
  "शून्य शुक्राणु",
  "नपुंसकता",
  "शीघ्रपतन",
  "स्वप्नदोष",
  "अन्य गुप्त रोग",
];

function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [duration, setDuration] = useState("");
  const [problems, setProblems] = useState<string[]>([]);
  const [err, setErr] = useState("");

  const toggle = (p: string) =>
    setProblems((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p],
    );

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErr("");
    if (!name.trim()) return setErr("कृपया अपना नाम भरें");
    if (!/^[6-9]\d{9}$/.test(mobile))
      return setErr("कृपया सही मोबाइल नंबर भरें (10 अंक)");

    setSubmitting(true);
    try {
      const apiBase =
        (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? "";
      const res = await fetch(`${apiBase}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: mobile.trim(),
          inquiry:
            problems.length > 0
              ? problems.join(", ")
              : "General Inquiry",
          lead_source: "landing-page",
          notes: duration ? `Duration: ${duration}` : undefined,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { message?: string }).message ?? "Server error");
      }
      setSubmitted(true);
    } catch {
      setErr("कुछ गड़बड़ हो गई। कृपया पुनः प्रयास करें।");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full rounded-lg border-2 border-[color:var(--card-border)] bg-[color:var(--section-alt)] px-4 py-3 text-[15px] font-semibold text-foreground outline-none placeholder:text-[color:var(--body-dim)]/60 focus:border-[color:var(--brand-trust)] transition-colors";
  const labelCls =
    "mb-1.5 block text-[12.5px] font-bold text-[color:var(--body-dim)] uppercase tracking-wide";

  return (
    <section id="lead" className="bg-[color:var(--section-alt)] px-4 py-7">
      <h2 className="mb-1 text-center text-[21px] font-black leading-tight text-[color:var(--brand-trust)]">
        अपना नाम और नंबर दें
      </h2>
      <p className="mb-5 text-center text-[13px] font-medium text-[color:var(--body-dim)]">
        डॉक्टर खुद कॉल करेंगे — गुप्त बात
      </p>

      <div className="rounded-xl border border-[color:var(--card-border)] bg-white p-5 shadow-card">
        <AnimatePresence mode="wait" initial={false}>
          {submitted ? (
            <motion.div
              key="ok"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="py-6 text-center"
            >
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-[#22c55e] text-white">
                <Check size={28} strokeWidth={3} />
              </div>
              <h3 className="text-[19px] font-black text-[color:var(--brand-trust)]">
                धन्यवाद!
              </h3>
              <p className="mt-1.5 text-[14px] font-semibold text-[color:var(--body-dim)]">
                डॉक्टर जल्द कॉल करेंगे।
              </p>
              <div className="mt-5">
                <a
                  href={TEL}
                  className="flex items-center justify-center gap-2 rounded-lg border-2 border-[color:var(--brand-trust)] bg-white py-3 text-[15px] font-black text-[color:var(--brand-trust)]"
                >
                  <Phone size={15} strokeWidth={2.5} />
                  अभी कॉल करें
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              onSubmit={onSubmit}
              className="space-y-4"
            >
              <div>
                <label className={labelCls}>नाम</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="अपना नाम लिखें"
                  maxLength={80}
                  className={inputCls}
                />
              </div>

              <div>
                <label className={labelCls}>मोबाइल नंबर</label>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) =>
                    setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                  inputMode="numeric"
                  pattern="[6-9][0-9]{9}"
                  placeholder="10 अंकों का नंबर"
                  className={inputCls}
                />
              </div>

              <div>
                <label className={labelCls}>कितने दिन से?</label>
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value.slice(0, 60))}
                  placeholder="जैसे: 6 महीने, 1 साल…"
                  className={inputCls}
                />
              </div>

              <div>
                <p className="mb-2.5 text-[13px] font-bold text-foreground">
                  क्या तकलीफ़ है?
                </p>
                <div className="grid grid-cols-2 gap-x-3 gap-y-3">
                  {PROBLEMS_LIST.map((p) => {
                    const active = problems.includes(p);
                    return (
                      <label
                        key={p}
                        className="flex cursor-pointer items-center gap-2 text-[13.5px] font-semibold text-foreground"
                      >
                        <span
                          onClick={() => toggle(p)}
                          className={
                            "grid h-5 w-5 shrink-0 place-items-center rounded border-2 transition-colors " +
                            (active
                              ? "border-[color:var(--brand-trust)] bg-[color:var(--brand-trust)] text-white"
                              : "border-[color:var(--card-border)] bg-[color:var(--section-alt)]")
                          }
                        >
                          {active && <Check size={13} strokeWidth={3.5} />}
                        </span>
                        <span onClick={() => toggle(p)}>{p}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <AnimatePresence>
                {err && (
                  <motion.p
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-[12.5px] font-bold text-destructive"
                  >
                    {err}
                  </motion.p>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={submitting}
                id="lead-submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[color:var(--brand-cta)] py-4 text-[17px] font-black tracking-wide text-white disabled:opacity-70 cta-pulse"
              >
                {submitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> भेज रहे हैं…
                  </>
                ) : (
                  "अभी बात करें"
                )}
              </button>

              <p className="text-center text-[11px] font-medium text-[color:var(--body-dim)]">
                🔒 बात किसी को नहीं पता चलेगी
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   7. PROCESS STEPS
═══════════════════════════════════════ */
const STEPS = [
  {
    t: "फॉर्म भरें या कॉल करें",
    d: "बस अपनी तकलीफ़ बताइए",
  },
  {
    t: "वक्त तय करें",
    d: "क्लिनिक में या ऑनलाइन, जैसा आपको सही लगे",
  },
  {
    t: "डॉक्टर खुद आपकी बात सुनेंगे",
    d: "पूरी गुप्त बात",
  },
  {
    t: "दवाएं घर तक डिलीवर",
    d: "सादे पैकेट में + follow-up भी",
  },
];

function ProcessSteps() {
  return (
    <section id="process" className="bg-[color:var(--section-alt)] px-4 py-7">
      <h2 className="mb-5 text-center text-[21px] font-black leading-tight text-[color:var(--brand-trust)]">
        कैसे शुरू करें?
      </h2>
      <ol className="space-y-3">
        {STEPS.map((s, i) => (
          <li
            key={s.t}
            className="flex items-start gap-3.5 rounded-xl border border-[color:var(--card-border)] bg-white p-4 shadow-card-sm"
            style={{ borderLeftWidth: 3, borderLeftColor: "var(--brand-trust)" }}
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[color:var(--brand-trust)] text-[16px] font-black text-white">
              {i + 1}
            </div>
            <div className="min-w-0 pt-0.5">
              <h3 className="text-[15px] font-black leading-tight text-foreground">
                {s.t}
              </h3>
              <p className="mt-1 text-[12.5px] font-medium text-[color:var(--body-dim)]">
                {s.d}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <LeadFormInline source="process" />
    </section>
  );
}

/* ═══════════════════════════════════════
   8. WHY HOMMED (merged)
═══════════════════════════════════════ */
const WHY = [
  {
    icon: ShieldCheck,
    t: "गुप्त रहेगा",
    d: "किसी को पता नहीं चलेगा।",
  },
  {
    icon: Truck,
    t: "घर तक डिलीवरी",
    d: "पूरे भारत में — सादे पैकेट में।",
  },
  {
    icon: Leaf,
    t: "कोई साइड इफेक्ट नहीं",
    d: "देसी दवा है, कोई नुकसान नहीं।",
  },
  {
    icon: Stethoscope,
    t: "10+ साल अनुभव",
    d: "डॉ. इक़बाल 10+ साल से इलाज कर रहे हैं।",
  },
  {
    icon: Award,
    t: "10,000+ मरीज़ ठीक हुए",
    d: "कानपुर से शुरू, पूरे भारत तक।",
  },
];

function WhyHommed() {
  return (
    <section className="bg-background px-4 py-7">
      <h2 className="mb-5 text-center text-[21px] font-black leading-tight text-[color:var(--brand-trust)]">
        HOMMED क्यों?
      </h2>
      <div className="space-y-3">
        {WHY.map((w) => (
          <div
            key={w.t}
            className="flex items-center gap-3.5 rounded-xl border border-[color:var(--card-border)] bg-white p-4 shadow-card-sm"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[color:var(--brand-trust)] text-white">
              <w.icon size={22} strokeWidth={2} />
            </div>
            <div className="min-w-0">
              <h3 className="text-[15px] font-black leading-tight text-foreground">
                {w.t}
              </h3>
              <p className="mt-0.5 text-[12.5px] font-medium text-[color:var(--body-dim)]">
                {w.d}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   9. TESTIMONIALS
═══════════════════════════════════════ */
const CASES = [
  {
    img: testimonialSanjeevImg,
    name: "संजीव कुमार",
    city: "कानपुर, उत्तर प्रदेश",
    problem: "शीघ्रपतन",
    duration: "इलाज अवधि: 4 महीने",
    quote:
      "पहले शर्म की वजह से किसी को बता नहीं पाता था। डॉ. इक़बाल सर ने बहुत आराम से समझाया, दवा शुरू की और 4 महीने में फ़र्क़ खुद महसूस हुआ। अब आत्मविश्वास वापस आ गया है।",
  },
  {
    img: testimonialRajeevImg,
    name: "राजीव सिंह",
    city: "लखनऊ, उत्तर प्रदेश",
    problem: "शुक्राणु की कमी",
    duration: "इलाज अवधि: 5 महीने",
    quote:
      "शादी के 3 साल बाद भी बच्चा नहीं हो रहा था, रिपोर्ट में स्पर्म काउंट कम था। HOMMED से इलाज लिया, धीरे-धीरे रिपोर्ट सुधरी। परिवार में अब खुशखबरी है — डॉक्टर साहब का बहुत शुक्रिया।",
  },
];

function Testimonials() {
  return (
    <section className="bg-[color:var(--section-alt)] px-4 py-7">
      <div className="mb-5 text-center">
        <span className="inline-block rounded-md bg-[color:var(--brand-trust)] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white">
          असली मरीज़
        </span>
        <h2 className="mt-2.5 text-[21px] font-black leading-tight text-[color:var(--brand-trust)]">
          लोग क्या कह रहे हैं?
        </h2>
        <p className="mt-1 text-[12.5px] font-medium text-[color:var(--body-dim)]">
          असली मरीज़ · असली नाम
        </p>
      </div>

      <div className="space-y-4">
        {CASES.map((c) => (
          <article
            key={c.name}
            className="overflow-hidden rounded-xl border-2 border-[color:var(--brand-trust)]/20 bg-white shadow-card"
          >
            <div className="relative">
              <img
                src={c.img}
                alt={`${c.name} — ${c.problem} — HOMMED`}
                width={800}
                height={500}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
              <div className="absolute left-2 top-2 flex items-center gap-1 rounded-md bg-[color:var(--brand-trust)]/90 px-2 py-1">
                <CheckCircle2 size={13} className="text-white" strokeWidth={2.5} />
                <span className="text-[10px] font-black uppercase tracking-wide text-white">
                  Verified Patient
                </span>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-[16px] font-black text-foreground">{c.name}</h3>
                  <p className="mt-0.5 flex items-center gap-1 text-[12px] font-semibold text-[color:var(--body-dim)]">
                    <MapPin size={11} className="text-[color:var(--brand-trust)]" />
                    {c.city}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      size={13}
                      className="text-[#F59E0B]"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-2 inline-flex items-center gap-1 rounded-md border border-[color:var(--brand-trust)]/30 bg-[color:var(--accent)] px-2.5 py-1">
                <span className="text-[12px] font-black text-[color:var(--brand-trust)]">
                  {c.problem}
                </span>
              </div>

              <blockquote className="mt-3 border-l-2 border-[color:var(--brand-trust)]/30 pl-3 text-[13.5px] font-medium leading-relaxed text-foreground">
                "{c.quote}"
              </blockquote>

              <div className="mt-3 flex items-center justify-between border-t border-[color:var(--card-border)] pt-2.5">
                <span className="flex items-center gap-1 text-[11.5px] font-bold text-[color:var(--body-dim)]">
                  <Clock size={11} className="text-[color:var(--brand-trust)]" />
                  {c.duration}
                </span>
                <span className="flex items-center gap-1 text-[11.5px] font-black text-[#15803d]">
                  <CheckCircle2 size={12} className="text-[#22c55e]" strokeWidth={2.5} />
                  ठीक हो गए
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-3 text-center text-[10.5px] font-medium italic text-[color:var(--body-dim)]">
        *नतीजे हर इंसान पर अलग हो सकते हैं।
      </p>
    </section>
  );
}

/* ═══════════════════════════════════════
   10. STATS BAR
═══════════════════════════════════════ */
type Stat = {
  l: string;
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

const STATS: Stat[] = [
  { l: "मरीज़ ठीक हुए", target: 10000, suffix: "+" },
  { l: "Google Rating", target: 4.9, suffix: "★", decimals: 1 },
  { l: "राहत मिली", target: 98, suffix: "%" },
  { l: "साल का अनुभव", target: 10, suffix: "+" },
];

function StatsBar() {
  return (
    <section className="bg-background px-4 py-7">
      <h2 className="mb-1 text-center text-[21px] font-black text-[color:var(--brand-trust)]">
        <CountUp target={10000} suffix="+" /> मरीज़ों का भरोसा
      </h2>
      <p className="mb-5 text-center text-[13px] font-medium text-[color:var(--body-dim)]">
        कानपुर से शुरू, पूरे भारत तक
      </p>
      <div className="grid grid-cols-2 gap-3">
        {STATS.map((s) => (
          <div
            key={s.l}
            className="rounded-xl border border-[color:var(--card-border)] bg-white p-4 text-center shadow-card-sm"
            style={{ borderTopWidth: 3, borderTopColor: "var(--brand-trust)" }}
          >
            <p className="text-[28px] font-black leading-none text-[color:var(--brand-trust)]">
              <CountUp
                target={s.target}
                suffix={s.suffix}
                prefix={s.prefix}
                decimals={s.decimals}
              />
            </p>
            <p className="mt-1.5 text-[11.5px] font-bold uppercase tracking-wide text-[color:var(--body-dim)]">
              {s.l}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   11. FOOTER
═══════════════════════════════════════ */
function Footer() {
  return (
    <footer id="contact" className="bg-[color:var(--brand-trust)] px-4 py-7 text-white">
      {/* Logo row */}
      <div className="flex items-center gap-2.5">
        <img
          src={hommedLogoImg}
          alt="HomMed"
          className="h-10 w-auto rounded-md bg-white p-0.5"
        />
        <div>
          <p className="text-[16px] font-black">HOMMED</p>
          <p className="text-[11.5px] font-semibold text-white/70">
            Men's Wellness · Dr. Iqbal Quasim
          </p>
        </div>
      </div>

      {/* Clinic locations */}
      <div className="mt-5 space-y-3">
        <div className="rounded-xl border border-white/20 bg-white/10 p-4">
          <p className="flex items-center gap-1.5 text-[11.5px] font-black uppercase tracking-wide text-white/70">
            <MapPin size={12} /> शाखा 1 — Civil Lines
          </p>
          <p className="mt-1 text-[14px] font-bold text-white">
            Civil Lines, Kanpur, Uttar Pradesh – 208001
          </p>
        </div>
        <div className="rounded-xl border border-white/20 bg-white/10 p-4">
          <p className="flex items-center gap-1.5 text-[11.5px] font-black uppercase tracking-wide text-white/70">
            <MapPin size={12} /> शाखा 2 — Jajmau
          </p>
          <p className="mt-1 text-[14px] font-bold text-white">
            Jajmau, Kanpur, Uttar Pradesh
          </p>
        </div>
      </div>

      {/* Contact details */}
      <div className="mt-5 space-y-2.5">
        <a href={TEL} className="flex items-center gap-2 text-[14px] font-bold text-white">
          <Phone size={14} className="text-white/70" /> {PHONE_DISPLAY}
        </a>
        <a
          href="mailto:info@hommed.in"
          className="flex items-center gap-2 text-[13.5px] font-semibold text-white/80"
        >
          <Mail size={14} className="text-white/70" /> info@hommed.in
        </a>
        <p className="flex items-center gap-2 text-[13.5px] font-semibold text-white/80">
          <Clock size={14} className="text-white/70" /> सोम–शनि · सुबह 10–2 बजे और शाम 5–8 बजे
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-4 text-[11.5px] text-white/60">
        <a href="#" className="font-bold underline">
          Privacy Policy
        </a>
        <span>© {new Date().getFullYear()} HOMMED</span>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════
   STICKY BOTTOM BAR
═══════════════════════════════════════ */
function StickyBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 bg-white shadow-[0_-6px_24px_rgba(0,0,0,0.18)]">
      <div className="mx-auto max-w-[440px] px-4 py-3">
        {/* Call — full width */}
        <a
          href={TEL}
          id="sticky-call"
          className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[color:var(--brand-trust)] py-3.5 text-[16px] font-black text-white shadow-[0_4px_18px_rgba(27,75,102,0.50)] active:scale-[0.98] transition-transform call-cta-button"
        >
          <span className="relative flex h-5 w-5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-30" />
            <Phone size={18} strokeWidth={2.5} className="relative" />
          </span>
          <span>कॉल करें — +91 63069 88550</span>
        </a>
      </div>
    </div>
  );
}
