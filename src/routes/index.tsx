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
const WA = "https://wa.me/916306988550?text=नमस्ते%20डॉक्टर%20साहब%2C%20मुझे%20अपनी%20समस्या%20के%20बारे%20में%20बात%20करनी%20है।";
const PHONE_DISPLAY = "+91 63069 88550";

/* ───────── WhatsApp SVG icon (bubble outline — used in buttons/CTAs) ───────── */
function WaIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.48 4.966 1.481 5.45-.001 9.885-4.417 9.888-9.867.002-2.64-1.019-5.12-2.877-6.982C16.766 1.924 14.288.9 11.647.9 6.202.9 1.768 5.314 1.765 10.766c-.002 1.8.486 3.56 1.413 5.12L2.174 21.8l6.02-1.579c1.558.85 3.112 1.298 4.453 1.298z" />
    </svg>
  );
}

/* ───────── WhatsApp official brand icon (phone-in-bubble — header) ───────── */
function WaOfficialIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 448 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

/* ───────── CTA Button Variants ───────── */
function WaButton({
  href = WA,
  label = "व्हाट्सएप पर बात करें",
  fullWidth = false,
  size = "md",
}: {
  href?: string;
  label?: string;
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const padCls = size === "lg" ? "py-4 text-[17px]" : size === "sm" ? "py-2.5 text-[14px]" : "py-3 text-[15.5px]";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      id="wa-cta"
      className={`flex items-center justify-center gap-2 rounded-lg bg-[#25D366] font-black tracking-wide text-white cta-pulse ${padCls} ${fullWidth ? "w-full" : ""}`}
    >
      <WaIcon size={size === "sm" ? 14 : 18} />
      {label}
    </a>
  );
}

function CallButton({
  fullWidth = false,
  label = "कॉल करें",
}: {
  fullWidth?: boolean;
  label?: string;
}) {
  return (
    <a
      href={TEL}
      id="call-cta"
      className={`flex items-center justify-center gap-1.5 rounded-lg border-2 border-[color:var(--brand-trust)] bg-white py-2.5 text-[14px] font-black tracking-wide text-[color:var(--brand-trust)] ${fullWidth ? "w-full" : ""}`}
    >
      <Phone size={14} strokeWidth={2.5} />
      {label}
    </a>
  );
}

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
            className="text-[11.5px] font-bold text-white/80 hidden xs:block"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-2 text-[13.5px] font-black text-white"
          >
            <WaOfficialIcon size={15} />
            व्हाट्सएप
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
        शर्माने की ज़रूरत नहीं —<br />
        गुप्त समस्याओं का सही इलाज,{" "}
        <span className="border-b-2 border-[color:var(--brand-cta)] text-[color:var(--brand-cta)]">पूरी गोपनीयता</span> के साथ
      </h1>
      <p className="mt-3 text-[14px] font-medium leading-relaxed text-white/80">
        जल्दी डिस्चार्ज होना, टाइमिंग की कमी, रात में गीले सपने, शुक्राणु की कमी — ये कमज़ोरी नहीं, एक आम समस्या है जो सही इलाज से ठीक होती है
      </p>

      {/* Secondary WhatsApp option above form */}
      <div className="mt-5">
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] py-2.5 text-[14px] font-black text-white whatsapp-cta-button"
        >
          <WaIcon size={15} />
          व्हाट्सएप पर बात करें
        </a>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-[12px] font-semibold text-white/50">या फॉर्म भरें</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>
        <p className="mt-2 text-center text-[12px] font-semibold text-white/70">
          सिर्फ एक कॉल या मैसेज दूर — अपनी तकलीफ़ बताइए, डॉक्टर खुद रास्ता बताएंगे
        </p>
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
                हमारी टीम जल्द सम्पर्क करेगी।<br />
                आपकी पहचान गुप्त रखी जाएगी।
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
                <label className={labelCls}>आपका नाम</label>
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
                <label className={labelCls}>आपका मोबाइल नंबर</label>
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
                <label className={labelCls}>आपको कितने दिनों से ये तकलीफ़ है?</label>
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
                  इनमें से आपको क्या समस्या है?
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
                आपकी जानकारी पूरी तरह गुप्त रहेगी — दवा भी सादे पैकेट में, बिना किसी नाम के
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   3. DOCTOR BLOCK (merged)
═══════════════════════════════════════ */
function DoctorBlock() {
  return (
    <section
      id="doctor"
      className="bg-background px-4 py-7"
    >
      <p className="mb-4 text-center text-[13.5px] font-semibold leading-snug text-[color:var(--body-dim)]">
        कानपुर के डॉक्टर, आपकी भाषा में बात — कोई कॉल-सेंटर नहीं, कोई अनजान नंबर नहीं
      </p>
      <div className="overflow-hidden rounded-xl border-2 border-[color:var(--brand-trust)] bg-white shadow-card">
        {/* Clinic storefront photo with location caption overlay */}
        <div className="relative">
          <img
            src={clinicExteriorImg}
            alt="HomMed Clinic — Dr. Iqbal's Homoeopathic Centre, Jajmau, Kanpur"
            className="h-64 w-full object-cover"
            style={{ objectPosition: "center 35%" }}
            loading="lazy"
          />

        </div>
        <div className="p-4">
          {/* Clinic tagline — primary line */}
          <h2 className="text-[17px] font-black leading-snug text-[color:var(--brand-trust)]">
            आपका भरोसेमंद होम्योपैथिक क्लिनिक — कानपुर
          </h2>

          {/* Doctor sub-line */}
          <p className="mt-1.5 text-[12.5px] font-semibold text-[color:var(--body-dim)]">
            Dr. Iqbal Quasim (BHMS) के नेतृत्व में
          </p>

          {/* Stats */}
          <p className="mt-2.5 text-[13px] font-black text-[color:var(--brand-trust)]">
            4.9★ Google Rating · 10,000+ मरीज़ ठीक हुए
          </p>

          {/* CTA */}
          <div className="mt-3">
            <WaButton label="अभी बात करें" fullWidth />
          </div>
        </div>
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
    d: "बच्चे में देरी की वजह बन रही है? घबराइए मत — सही इलाज से सुधार संभव है",
    icon: Microscope,
  },
  {
    t: "मर्दाना कमज़ोरी / टाइमिंग की समस्या",
    en: "Erectile Dysfunction",
    d: "बिस्तर पर आत्मविश्वास खोना, रिश्ते में दूरी। ये अकेले आप नहीं झेल रहे",
    icon: HeartPulse,
  },
  {
    t: "शीघ्रपतन / जल्दी डिस्चार्ज",
    en: "Premature Ejaculation",
    d: "जल्दी डिस्चार्ज हो जाने का डर, पार्टनर को संतुष्ट न कर पाने की चिंता — होम्योपैथी से धीरे-धीरे समय बढ़ाना संभव",
    icon: TimerReset,
  },
  {
    t: "स्वप्नदोष",
    en: "Nightfall",
    d: "नाइटफॉल / धात बार-बार हो रहा है और शरीर कमज़ोर लग रहा है? इसका इलाज है",
    icon: Bed,
  },
  {
    t: "प्रोस्टेट और मूत्राशय",
    en: "Prostate & Urinary",
    d: "बार-बार पेशाब, जलन, मूत्र संबंधी परेशानी।",
    icon: Activity,
  },
];

function ProblemGrid() {
  return (
    <section id="problems" className="bg-[color:var(--section-alt)] px-4 py-7">
      <h2 className="mb-5 text-center text-[21px] font-black leading-tight text-[color:var(--brand-trust)]">
        हम किन रोगों का इलाज करते हैं?
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
        इलाज की कीमत
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
                25 दिन की होम्योपैथी दवा — घर तक गोपनीय डिलीवरी
              </p>
            </div>
          </div>
          <div className="py-4">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[color:var(--brand-trust)]" fill="var(--accent)" />
              <p className="text-[14px] font-semibold leading-snug text-foreground">
                ऑनलाइन या क्लिनिक — दोनों में परामर्श
              </p>
            </div>
          </div>
          <div className="py-4">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[color:var(--brand-trust)]" fill="var(--accent)" />
              <p className="text-[14px] font-semibold leading-snug text-foreground">
                Follow-up कंसल्टेशन शामिल
              </p>
            </div>
          </div>
        </div>
        {/* Honest disclaimer */}
        <div className="mx-5 mb-5 rounded-lg bg-[color:var(--section-alt)] px-4 py-3">
          <p className="text-[13px] font-medium leading-relaxed text-[color:var(--body-dim)]">
            पहला महीना — ₹1599 (25 दिन की Total Vitality Kit)। कोई छुपी शर्त नहीं। ज़्यादातर मरीज़ों को <strong className="text-foreground">3–5 महीने का कोर्स</strong> चाहिए होता है — डॉक्टर जांच के बाद खुद बताएंगे, पहले से पूरी जानकारी मिलेगी
          </p>
        </div>
        <div className="px-5 pb-5">
          <WaButton label="कीमत के बारे में पूछें" fullWidth />
        </div>
      </div>
    </section>
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
        डॉक्टर खुद कॉल करेंगे — पूरी गोपनीयता
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
                हमारी टीम जल्द सम्पर्क करेगी। आपकी पहचान गुप्त रखी जायेगी।
              </p>
              <div className="mt-5">
                <WaButton label="अभी बात करें" fullWidth />
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
                <label className={labelCls}>आपका नाम</label>
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
                <label className={labelCls}>कितने समय से समस्या है?</label>
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
                  आपकी क्या समस्या है? (एक या अधिक चुनें)
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
                  "अभी बात करें →"
                )}
              </button>

              <p className="text-center text-[11px] font-medium text-[color:var(--body-dim)]">
                🔒 आपकी जानकारी पूरी तरह सुरक्षित है
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
    t: "व्हाट्सएप या कॉल करें",
    d: "बस अपनी तकलीफ़ बताइए",
  },
  {
    t: "Appointment fix करें",
    d: "क्लिनिक में या ऑनलाइन, जैसा आपको सही लगे",
  },
  {
    t: "डॉक्टर खुद आपकी बात सुनेंगे",
    d: "पूरी गोपनीयता के साथ",
  },
  {
    t: "दवाएं घर तक डिलीवर",
    d: "पूरी गोपनीयता के साथ + follow-up भी",
  },
];

function ProcessSteps() {
  return (
    <section id="process" className="bg-[color:var(--section-alt)] px-4 py-7">
      <h2 className="mb-5 text-center text-[21px] font-black leading-tight text-[color:var(--brand-trust)]">
        हमारा प्लान कैसे काम करता है?
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
      <div className="mt-5">
        <WaButton label="अभी बात करें" fullWidth />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   8. WHY HOMMED (merged)
═══════════════════════════════════════ */
const WHY = [
  {
    icon: ShieldCheck,
    t: "गोपनीयता",
    d: "कोई पहचान लीक नहीं — डिलीवरी भी गुप्त।",
  },
  {
    icon: Truck,
    t: "घर तक डिलीवरी",
    d: "पूरे भारत में — सादे पैकेट में।",
  },
  {
    icon: Leaf,
    t: "कोई साइड इफेक्ट नहीं",
    d: "प्राकृतिक होम्योपैथी — केमिकल-मुक्त।",
  },
  {
    icon: Stethoscope,
    t: "10+ साल अनुभव",
    d: "डॉ. इक़बाल का दशकों का क्लिनिकल अनुभव।",
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
        HOMMED क्यों चुनें?
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
          मरीज़ों की असली कहानियाँ
        </h2>
        <p className="mt-1 text-[12.5px] font-medium text-[color:var(--body-dim)]">
          सत्यापित मरीज़ · असली नाम व शहर के साथ
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
                  सफल परिणाम
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-3 text-center text-[10.5px] font-medium italic text-[color:var(--body-dim)]">
        *परिणाम व्यक्ति और स्थिति पर निर्भर करते हैं। नाम मरीज़ की सहमति से प्रकाशित।
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
  { l: "संतुष्ट मरीज़", target: 10000, suffix: "+" },
  { l: "Google Rating", target: 4.9, suffix: "★", decimals: 1 },
  { l: "स्थायी राहत", target: 98, suffix: "%" },
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
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[14px] font-bold text-white"
        >
          <WaIcon size={14} /> व्हाट्सएप पर बात करें
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
