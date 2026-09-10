import { createFileRoute, Link } from "@tanstack/react-router";
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
  ChevronRight,
  Instagram,
  Globe,
  Youtube,
} from "lucide-react";

import drIqbalImg from "@/assets/dr-iqbal-portrait.jpg";
import drCertsImg from "@/assets/dr-iqbal-stethoscope.jpg";
import drIqbalCertificatesImg from "@/assets/dr-iqbal-certificates.jpg";
import clinicExteriorImg from "@/assets/clinic-exterior.jpg";
import hommedLogoImg from "@/assets/hommed-logo.png";
import testimonialSanjeevImg from "@/assets/dr-iqbal-consultation.jpg";
import testimonialRajeevImg from "@/assets/dr-iqbal-consultation-patient.jpg";

export const Route = createFileRoute("/")(({
  component: Landing,
}));

declare let fbq: any;

const TEL = "tel:+916306988550";
const PHONE_DISPLAY = "+91 63069 88550";

const trackContactEvent = () => {
  if (typeof fbq !== "undefined") {
    fbq("track", "Contact");
  }
};

const trackLeadEvent = () => {
  if (typeof fbq !== "undefined") {
    fbq("track", "Lead");
  }
};

/* ───────── Landing ───────── */
function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-hindi">
      <StickyHeader />
      <main id="top" className="mx-auto max-w-[440px]">
        <Hero />
        <DoctorBlock />
        <ProblemGrid />
        <Pricing />
        <ProcessSteps />
        <CredentialsRecognition />
        <WhyHommed />
        <Testimonials />
        <StatsBar />
      </main>
      <Footer />
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
            onClick={trackContactEvent}
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
      if (typeof fbq !== "undefined") {
        fbq("track", "Lead");
      }
      setHeroSubmitted(true);
    } catch {
      setHeroErr("कुछ गड़बड़ हो गई। कृपया पुनः प्रयास करें।");
    } finally {
      setHeroSubmitting(false);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-[#D1D5DB] bg-white px-3.5 py-2.5 text-[14.5px] font-medium text-[#1C1C1E] outline-none placeholder:text-[#9CA3AF] focus:border-[color:var(--brand-trust)] focus:ring-2 focus:ring-[color:var(--brand-trust)]/15 transition-colors";
  const labelCls = "mb-2 block text-[12.5px] font-semibold text-[#6B7280] tracking-wide";

  return (
    <section id="hero" className="bg-[#FDF6EE] px-4 pt-9 pb-8">
      {/* Headline block — center aligned */}
      <div className="mb-6 text-center">
        <h1 className="text-[23px] font-black leading-[1.3] tracking-tight text-[#1C1C1E]">
          क्या आपको{" "}
          <span className="text-[color:var(--brand-trust)]">मर्दाना तकलीफ़</span>{" "}
          है?
        </h1>
        <p className="mt-2 text-[14px] font-medium leading-relaxed text-[#6B7280]">
          हमारे विशेषज्ञों से निःशुल्क सलाह लें
        </p>

        {/* Phone number stacked above pill CTA — centered */}
        <div className="mt-5 flex flex-col items-center gap-2.5">
          <a
            href={TEL}
            onClick={trackContactEvent}
            id="hero-phone-display"
            className="text-[18px] font-black tracking-tight text-[color:var(--brand-trust)] underline decoration-[color:var(--brand-cta)] decoration-2 underline-offset-[3px]"
          >
            +91 63069 88550
          </a>
          <a
            href={TEL}
            onClick={trackContactEvent}
            id="hero-call-now"
            className="call-now-btn inline-flex items-center gap-1.5 rounded-full bg-[color:var(--brand-cta)] px-5 py-2 text-[13.5px] font-bold text-white shadow-sm transition-all active:scale-95 hover:opacity-90"
          >
            <Phone size={13} strokeWidth={2.5} />
            Call Now
          </a>
        </div>
      </div>

      {/* Lead form card */}
      <div className="rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.07)]">
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
                धन्यवाद
              </h3>
              <p className="mt-2 text-[13.5px] font-semibold leading-relaxed text-[#6B7280]">
                विशेषज्ञ जल्द कॉल करेंगे।
              </p>
              <a
                href={TEL}
                onClick={trackContactEvent}
                id="hero-call-after-submit"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border-2 border-[color:var(--brand-trust)] bg-white px-6 py-2.5 text-[14px] font-black text-[color:var(--brand-trust)] transition-colors hover:bg-[color:var(--brand-trust)] hover:text-white"
              >
                <Phone size={15} strokeWidth={2.5} />
                कॉल करें
              </a>
            </motion.div>
          ) : (
            <motion.form
              key="hero-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              onSubmit={onHeroSubmit}
              className="space-y-4 p-4"
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
                <p className="mb-2.5 text-[12.5px] font-semibold tracking-wide text-[#6B7280]">
                  क्या तकलीफ़ है?
                </p>
                <div className="grid grid-cols-2 gap-x-3 gap-y-3">
                  {HERO_PROBLEMS.map((p) => {
                    const active = heroProblems.includes(p);
                    return (
                      <label
                        key={p}
                        onClick={() => toggleHeroProblem(p)}
                        className="flex cursor-pointer items-center gap-2 text-[13px] font-medium text-[#1C1C1E]"
                      >
                        <span
                          className={
                            "grid h-[18px] w-[18px] shrink-0 place-items-center rounded-[4px] border transition-colors " +
                            (active
                              ? "border-[color:var(--brand-trust)] bg-[color:var(--brand-trust)] text-white"
                              : "border-[#D1D5DB] bg-white")
                          }
                        >
                          {active && <Check size={11} strokeWidth={3} />}
                        </span>
                        <span className="leading-tight">{p}</span>
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
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[color:var(--brand-cta)] py-3.5 text-[15.5px] font-bold tracking-wide text-white disabled:opacity-70 hover:opacity-90 transition-opacity shadow-[0_4px_14px_rgba(194,94,38,0.35)]"
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
              <p className="text-center text-[11.5px] font-medium text-[#9CA3AF]">
                🔒 आपकी जानकारी सुरक्षित रखी जाएगी।
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   MID-PAGE CALL STRIP
═══════════════════════════════════════ */
function CallStrip() {
  return (
    <div className="bg-white border-y border-[#E5E7EB] px-4 py-3.5">
      <div className="mx-auto flex max-w-[440px] items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9CA3AF]">
            सीधे बात करें
          </p>
          <a
            href={TEL}
            id="strip-phone"
            className="mt-0.5 block text-[16px] font-black text-[color:var(--brand-trust)] underline decoration-[color:var(--brand-cta)] decoration-2 underline-offset-[3px]"
          >
            +91 63069 88550
          </a>
        </div>
        <a
          href={TEL}
          id="strip-call-now"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[color:var(--brand-cta)] px-4 py-2 text-[13px] font-bold text-white shadow-sm transition-all active:scale-95 hover:opacity-90"
        >
          <Phone size={13} strokeWidth={2.5} />
          Call Now
        </a>
      </div>
    </div>
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
   4. PROBLEM GRID (WeClinic-style condition cards)
═══════════════════════════════════════ */
const PROBLEM_CARDS = [
  {
    title: "शुक्राणु की कमी - Low Sperm Count",
    description:
      "यह स्थिति तब होती है जब वीर्य में शुक्राणुओं की संख्या सामान्य से कम हो जाती है। इसका कारण हार्मोन असंतुलन, तनाव या गलत खान-पान हो सकता है। इसके कारण संतान प्राप्ति में देरी या कठिनाई हो सकती है।",
  },
  {
    title: "मर्दाना कमज़ोरी / टाइमिंग की समस्या - Erectile Dysfunction",
    description:
      "यह वह स्थिति है जिसमें संबंध बनाने के दौरान उचित मजबूती बनाए रखना कठिन हो जाता है। यह अक्सर रक्त प्रवाह में कमी, तनाव या उम्र बढ़ने के कारण होता है। इससे आत्मविश्वास में कमी और रिश्ते में तनाव आ सकता है।",
  },
  {
    title: "शीघ्रपतन / जल्दी डिस्चार्ज - Premature Ejaculation",
    description:
      "यह समस्या तब होती है जब संबंध के दौरान डिस्चार्ज समय से पहले हो जाता है। इसका कारण मानसिक तनाव, अत्यधिक उत्तेजना या तंत्रिका संवेदनशीलता हो सकती है। इससे संतुष्टि में कमी महसूस होती है।",
  },
  {
    title: "स्वप्नदोष - Nightfall",
    description:
      "यह स्थिति है जिसमें नींद के दौरान अनैच्छिक रूप से वीर्य स्खलन हो जाता है। यह सामान्यतः हार्मोनल बदलाव या अत्यधिक यौन विचारों के कारण होता है। बार-बार होने पर यह शारीरिक कमज़ोरी का कारण बन सकता है।",
  },
  {
    title: "प्रोस्टेट और मूत्राशय - Prostate & Urinary",
    description:
      "यह समस्या प्रोस्टेट ग्रंथि में सूजन या मूत्राशय की कार्यक्षमता में कमी के कारण होती है। उम्र बढ़ने के साथ यह अधिक सामान्य हो जाती है। इसके कारण बार-बार पेशाब आना या जलन जैसी परेशानी हो सकती है।",
  },
];

function ProblemGrid() {
  return (
    <section id="problems" className="bg-[color:var(--section-alt)] px-4 py-7">
      <h2 className="mb-5 text-center text-[21px] font-black leading-tight text-[color:var(--brand-trust)]">
        किस तकलीफ़ का इलाज होता है?
      </h2>
      <div className="space-y-3.5">
        {PROBLEM_CARDS.map((c) => (
          <div
            key={c.title}
            className="flex items-start gap-3.5 rounded-xl border border-[color:var(--card-border)] bg-white p-4 shadow-card-sm"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#22c55e] text-white shadow-xs">
              <Check size={20} strokeWidth={3} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-[15.5px] font-bold leading-tight text-[#1E3A8A]">
                {c.title}
              </h3>
              <p className="mt-1.5 text-[13px] font-medium leading-relaxed text-slate-600">
                {c.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   5. PRICING
═══════════════════════════════════════ */
function Pricing() {
  const PRICING_POINTS = [
    "25 दिन की दवा — घर पर गुप्त डिलीवरी",
    "ऑनलाइन या क्लिनिक — जैसे चाहें",
    "Follow-up भी शामिल",
    "100% गुप्त — आपकी जानकारी कहीं शेयर नहीं होती",
    "पूरे भारत में दवाओं की होम डिलीवरी",
    "प्राकृतिक व सुरक्षित होम्योपैथिक दवाएं",
    "पहला महीना ₹1599। ज़्यादातर लोगों को 3–5 महीने लगते हैं — विशेषज्ञ खुद बताएंगे",
  ];

  return (
    <section id="pricing" className="bg-background px-4 py-8">
      {/* Section Title & Main Pitch Headline */}
      <div className="text-center">
        <h2 className="text-[20px] font-black leading-tight text-[#1C1C1E]">
          मर्दाना तकलीफ़ का{" "}
          <span className="text-[color:var(--brand-cta)] font-black">जड़ से इलाज</span>{" "}
          मात्र <span className="text-[color:var(--brand-cta)] font-black">₹1599*</span> में
        </h2>

        {/* Social Proof row */}
        <div className="mt-2.5 flex flex-col items-center justify-center gap-1">
          <div className="flex items-center gap-1.5 text-[13px] font-bold text-[#374151]">
            <div className="flex items-center text-[#F59E0B]">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  size={14}
                  fill="currentColor"
                  strokeWidth={0}
                />
              ))}
            </div>
            <span>4.6</span>
          </div>
          <p className="text-[12px] font-semibold text-[#15803d]">
            👍 95% मरीज इसे दूसरों को सुझाते हैं
          </p>
        </div>
      </div>

      {/* Bullet list - clean & unboxed */}
      <ul className="mt-6 space-y-3.5">
        {PRICING_POINTS.map((pt, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[14px] leading-snug text-[#374151]">
            <ChevronRight
              size={17}
              className="mt-0.5 shrink-0 text-[color:var(--brand-cta)] stroke-[2.5]"
            />
            <span>{pt}</span>
          </li>
        ))}
      </ul>

      {/* Online urgency line + compact Call Now pill */}
      <div className="mt-7 flex flex-col items-center gap-2.5 border-t border-[#E5E7EB] pt-5">
        <div className="flex items-center gap-2 text-[12.5px] font-semibold text-[#374151]">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
          </span>
          <span>हमारे विशेषज्ञ ऑनलाइन हैं… अभी कॉल करें</span>
        </div>

        <a
          href={TEL}
          onClick={trackContactEvent}
          id="pricing-call-now"
          className="call-now-btn inline-flex items-center gap-1.5 rounded-full bg-[color:var(--brand-cta)] px-5 py-2 text-[13.5px] font-bold text-white shadow-sm transition-all active:scale-95 hover:opacity-90"
        >
          <Phone size={13} strokeWidth={2.5} />
          Call Now
        </a>
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
      trackLeadEvent();
      setDone(true);
    } catch {
      setErr("कुछ गड़बड़ हो गई। कृपया पुनः प्रयास करें।");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full rounded-lg border border-[color:var(--card-border)] bg-white px-3.5 py-2.5 text-[14.5px] font-medium text-foreground outline-none placeholder:text-[color:var(--body-dim)]/60 focus:border-[color:var(--brand-trust)] transition-colors";

  if (done) {
    return (
      <div className="mt-4 rounded-xl border border-[color:var(--card-border)] bg-white p-5 text-center shadow-card-sm">
        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#22c55e] text-white">
          <Check size={24} strokeWidth={3} />
        </div>
        <p className="text-[15px] font-bold text-[color:var(--brand-trust)]">धन्यवाद</p>
        <p className="mt-1 text-[13px] text-[color:var(--body-dim)]">
          डॉक्टर जल्द कॉल करेंगे।
        </p>
        <a
          href={TEL}
          onClick={trackContactEvent}
          className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-[color:var(--brand-trust)] bg-white py-2.5 text-[14px] font-bold text-[color:var(--brand-trust)] hover:bg-[color:var(--section-alt)] transition-colors"
        >
          <Phone size={14} strokeWidth={2.2} />
          कॉल करें
        </a>
      </div>
    );
  }

  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-[color:var(--card-border)] bg-white shadow-card-sm">
      {/* Sober clinic header */}
      <div className="border-b border-[color:var(--card-border)] bg-[color:var(--section-alt)] px-4 py-3">
        <p className="text-center text-[14px] font-bold text-[color:var(--brand-trust)]">
          नाम-नंबर दें — डॉक्टर कॉल करेंगे
        </p>
        <p className="mt-0.5 text-center text-[11.5px] text-[color:var(--body-dim)]">
          गोपनीय परामर्श
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
              className="text-[12px] font-medium text-destructive"
            >
              {err}
            </motion.p>
          )}
        </AnimatePresence>
        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[color:var(--brand-cta)] py-3 text-[15px] font-bold tracking-wide text-white disabled:opacity-70 hover:opacity-90 transition-opacity"
        >
          {loading ? (
            <>
              <Loader2 size={17} className="animate-spin" /> भेज रहे हैं…
            </>
          ) : (
            "भेजें"
          )}
        </button>
        <p className="text-center text-[11px] text-[color:var(--body-dim)]">
          आपकी जानकारी सुरक्षित रखी जाएगी
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
      trackLeadEvent();
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
                  onClick={trackContactEvent}
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
  "फॉर्म भरें या कॉल करें — बस अपनी तकलीफ़ बताइए।",
  "वक्त तय करें — क्लिनिक में या ऑनलाइन, जैसा आपको सही लगे।",
  "विशेषज्ञ खुद आपकी बात सुनेंगे — पूरी गुप्त बातचीत।",
  "दवाएं घर तक डिलीवर होंगी — सादे पैकेट में, फॉलो-अप सहित।",
  "आपके इलाज के दौरान हमारी टीम आपको समय समय पर कॉल करती रहेगी।",
  "इलाज के दौरान किसी भी समस्या के लिए आप हमारे विशेषज्ञों के साथ अपॉइंटमेंट ले सकते हैं।",
];

function ProcessSteps() {
  return (
    <section id="process" className="bg-[color:var(--section-alt)] px-4 py-8">
      <h2 className="mb-6 text-center text-[21px] font-black leading-tight text-[#1C1C1E]">
        कैसे शुरू करें?
      </h2>

      {/* Unboxed step list */}
      <ol className="space-y-4">
        {STEPS.map((s, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[14px] leading-snug">
            <ChevronRight
              size={17}
              className="mt-0.5 shrink-0 text-[color:var(--brand-cta)] stroke-[2.5]"
            />
            <div>
              <span className="font-bold text-[#1C1C1E]">Step {i + 1}: </span>
              <span className="font-normal text-[#374151]">{s}</span>
            </div>
          </li>
        ))}
      </ol>

      {/* Online indicator + Call Now button */}
      <div className="mt-7 flex flex-col items-center gap-2.5 border-t border-[color:var(--card-border)] pt-5">
        <div className="flex items-center gap-2 text-[12.5px] font-semibold text-[#374151]">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
          </span>
          <span>हम ऑनलाइन हैं, अभी परामर्श लें</span>
        </div>

        <a
          href={TEL}
          onClick={trackContactEvent}
          id="process-call-now"
          className="call-now-btn inline-flex items-center gap-1.5 rounded-full bg-[color:var(--brand-cta)] px-5 py-2 text-[13.5px] font-bold text-white shadow-sm transition-all active:scale-95 hover:opacity-90"
        >
          <Phone size={13} strokeWidth={2.5} />
          Call Now
        </a>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   7.5 CREDENTIALS & RECOGNITION (WeClinic Media Mentions Style)
═══════════════════════════════════════ */
function AwardIconIllustration() {
  return (
    <div className="mb-3.5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-50 to-orange-100/70 p-3 shadow-[0_2px_8px_rgba(194,94,38,0.08)] border border-amber-100">
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="20" r="12" fill="#F59E0B" fillOpacity="0.25" stroke="#D97706" strokeWidth="2.5" />
        <path d="M18 31L15 42L24 37L33 42L30 31" fill="#FDBA74" fillOpacity="0.4" stroke="#C25E26" strokeWidth="2" strokeLinejoin="round" />
        <path d="M24 12L26 16.5L31 17.2L27.5 20.7L28.3 25.5L24 23.2L19.7 25.5L20.5 20.7L17 17.2L22 16.5L24 12Z" fill="#C25E26" stroke="#C25E26" strokeWidth="1" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function SpeakerIconIllustration() {
  return (
    <div className="mb-3.5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-50 to-amber-100/70 p-3 shadow-[0_2px_8px_rgba(194,94,38,0.08)] border border-orange-100">
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 14H34V28H14V14Z" fill="#EA580C" fillOpacity="0.2" stroke="#C25E26" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M24 28V38" stroke="#C25E26" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M18 38H30" stroke="#C25E26" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="21" r="3" fill="#C25E26" />
        <path d="M8 20C8 20 10 16 14 16" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <path d="M40 20C40 20 38 16 34 16" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function CertificateIconIllustration() {
  return (
    <div className="mb-3.5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-50 to-yellow-100/70 p-3 shadow-[0_2px_8px_rgba(194,94,38,0.08)] border border-amber-100">
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="8" width="28" height="32" rx="3" fill="#FBBF24" fillOpacity="0.2" stroke="#D97706" strokeWidth="2.5" />
        <path d="M16 16H32" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 22H28" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
        <circle cx="30" cy="30" r="5" fill="#C25E26" stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M28 30L29.5 31.5L32 29" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function GlobalCertIconIllustration() {
  return (
    <div className="mb-3.5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-50 to-red-100/70 p-3 shadow-[0_2px_8px_rgba(194,94,38,0.08)] border border-orange-100">
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="15" fill="#F97316" fillOpacity="0.2" stroke="#EA580C" strokeWidth="2.5" />
        <path d="M9 24H39" stroke="#EA580C" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M24 9C28 14 30 19 30 24C30 29 28 34 24 39C20 34 18 29 18 24C18 19 20 14 24 9Z" fill="#C25E26" fillOpacity="0.25" stroke="#C25E26" strokeWidth="2" />
        <path d="M19 19L24 15L29 19" stroke="#C25E26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

const CREDENTIALS_CARDS = [
  {
    Illustration: AwardIconIllustration,
    title: "Homoeopathic Icon Award 2025",
    tagline: "Conferred State Honor & Recognition",
    summary:
      "UP के सबसे बड़े मंच KGMU लखनऊ में डॉ. इक़बाल क़ासिम को 10 साल के अनुभव और 10,000+ मरीज़ों के भरोसे के लिए यह राष्ट्रीय सम्मान मिला।",
    cta: "प्रमाणपत्र देखें",
  },
  {
    Illustration: SpeakerIconIllustration,
    title: "Clinical Speaker at HomoeoVision 3.0",
    tagline: "National Conference Speaker",
    summary:
      "नेशनल कॉन्फ्रेंस में डॉ. इक़बाल ने देशभर के विशेषज्ञों को 'Chronic Kidney Failure में होम्योपैथी की भूमिका' पर व्याख्यान दिया।",
    cta: "विवरण देखें",
  },
  {
    Illustration: CertificateIconIllustration,
    title: "Rigomo Certificate of Completion",
    tagline: "Integrative Diabetes Certification",
    summary:
      "'Integrative Diabetes Treatment Support' कोर्स नवंबर 2023 में सफलतापूर्वक पूर्ण किया, डायबिटीज़ प्रबंधन में उन्नत ज्ञान का प्रमाण।",
    cta: "प्रमाणपत्र देखें",
  },
  {
    Illustration: GlobalCertIconIllustration,
    title: "Alison Certificate of Completion",
    tagline: "Global CPD-Accredited Course",
    summary:
      "'Type 2 Diabetes: Understanding and Management' — जून 2025 में पूर्ण किया गया वैश्विक स्तर पर मान्यता प्राप्त CPD-प्रमाणित कोर्स।",
    cta: "प्रमाणपत्र देखें",
  },
];

function CredentialsRecognition() {
  const [selectedCert, setSelectedCert] = useState<{
    title: string;
    summary: string;
  } | null>(null);

  return (
    <section id="credentials" className="bg-background px-4 py-8">
      <h2 className="mb-5 text-center text-[21px] font-black leading-tight text-[color:var(--brand-trust)]">
        हमारी उपलब्धियां और मान्यता
      </h2>

      <div className="space-y-4">
        {CREDENTIALS_CARDS.map((c) => {
          const Illustration = c.Illustration;
          return (
            <div
              key={c.title}
              className="flex flex-col items-center rounded-xl border border-[color:var(--card-border)] bg-white p-5 text-center shadow-card-sm"
            >
              <Illustration />
              <h3 className="text-[15.5px] font-bold leading-tight text-[#1E3A8A]">
                {c.title}
              </h3>
              <span className="mt-1 text-[11.5px] font-bold tracking-wide text-[color:var(--brand-cta)] uppercase">
                {c.tagline}
              </span>
              <p className="mt-2 text-[13px] font-medium leading-relaxed text-slate-600 max-w-[300px]">
                {c.summary}
              </p>
              <button
                type="button"
                onClick={() =>
                  setSelectedCert({ title: c.title, summary: c.summary })
                }
                className="mt-3.5 inline-flex items-center gap-1.5 rounded-md bg-[#F59E0B] px-3.5 py-1.5 text-[12px] font-bold text-white shadow-xs transition-transform active:scale-95 hover:bg-[#D97706]"
              >
                <Award size={13} strokeWidth={2.5} />
                <span>{c.cta}</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Lightbox / Modal for viewing Certificate */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-[400px] overflow-hidden rounded-2xl bg-white p-4 shadow-2xl"
            >
              <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-[color:var(--brand-cta)]" />
                  <h4 className="text-[14px] font-bold text-[#1E3A8A] leading-tight">
                    {selectedCert.title}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="grid h-7 w-7 place-items-center rounded-full bg-slate-100 text-[13px] font-bold text-slate-600 hover:bg-slate-200"
                >
                  ✕
                </button>
              </div>

              <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                <img
                  src={drIqbalCertificatesImg}
                  alt={selectedCert.title}
                  className="h-auto w-full object-contain max-h-[300px]"
                />
              </div>

              <p className="mt-3 text-[12px] font-medium leading-snug text-slate-600 text-center">
                {selectedCert.summary}
              </p>

              <button
                onClick={() => setSelectedCert(null)}
                className="mt-4 w-full rounded-xl bg-[color:var(--brand-trust)] py-2.5 text-[13.5px] font-bold text-white transition-opacity hover:opacity-90"
              >
                बंद करें
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ═══════════════════════════════════════
   8. WHY HOMMED (WeClinic-style structure)
═══════════════════════════════════════ */
function PrivacyIllustration() {
  return (
    <div className="mb-3.5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-50 to-blue-100/70 p-3 shadow-[0_2px_8px_rgba(30,58,138,0.08)] border border-indigo-100">
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6L38 12V22C38 31.5 32 39.5 24 42C16 39.5 10 31.5 10 22V12L24 6Z" fill="#3B82F6" fillOpacity="0.18" stroke="#1E40AF" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M24 10L35 15V22C35 29.5 30 36.5 24 38.8C18 36.5 13 29.5 13 22V15L24 10Z" fill="#60A5FA" fillOpacity="0.25" />
        <rect x="18" y="22" width="12" height="10" rx="2" fill="#1E3A8A" />
        <path d="M21 22V19C21 17.3431 22.3431 16 24 16C25.6569 16 27 17.3431 27 19V22" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="26" r="1.5" fill="#FFFFFF" />
      </svg>
    </div>
  );
}

function DeliveryIllustration() {
  return (
    <div className="mb-3.5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-50 to-orange-100/70 p-3 shadow-[0_2px_8px_rgba(194,94,38,0.08)] border border-amber-100">
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="16" width="22" height="16" rx="3" fill="#F59E0B" fillOpacity="0.25" stroke="#D97706" strokeWidth="2.5" />
        <path d="M30 20H36L41 25V32H30V20Z" fill="#FBBF24" fillOpacity="0.3" stroke="#D97706" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="16" cy="35" r="4.5" fill="#C25E26" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="34" cy="35" r="4.5" fill="#C25E26" stroke="#FFFFFF" strokeWidth="2" />
        <path d="M4 22H10" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
        <path d="M2 26H8" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
        <rect x="14" y="10" width="10" height="8" rx="1.5" fill="#C25E26" />
        <path d="M17 10V18" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
    </div>
  );
}

function NaturalIllustration() {
  return (
    <div className="mb-3.5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-50 to-teal-100/70 p-3 shadow-[0_2px_8px_rgba(16,185,129,0.08)] border border-emerald-100">
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38 12C38 12 28 13 20 21C12 29 11 39 11 39C11 39 21 38 29 30C37 22 38 12 38 12Z" fill="#10B981" fillOpacity="0.3" stroke="#059669" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M11 39C16 33 24 25 38 12" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 28C22 28 16 26 12 20C8 14 9 7 9 7C9 7 16 8 20 14C24 20 22 28 22 28Z" fill="#34D399" fillOpacity="0.35" stroke="#059669" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function ExperienceIllustration() {
  return (
    <div className="mb-3.5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-50 to-blue-100/70 p-3 shadow-[0_2px_8px_rgba(2,132,199,0.08)] border border-sky-100">
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="22" r="14" fill="#38BDF8" fillOpacity="0.2" stroke="#0284C7" strokeWidth="2.5" />
        <path d="M24 14V22L29 25" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="14" y="32" width="20" height="10" rx="3" fill="#1B4B66" />
        <text x="24" y="39.5" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif">10+ YRS</text>
      </svg>
    </div>
  );
}

function TrustIllustration() {
  return (
    <div className="mb-3.5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-50 to-pink-100/70 p-3 shadow-[0_2px_8px_rgba(225,29,72,0.08)] border border-rose-100">
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="20" r="13" fill="#F43F5E" fillOpacity="0.2" stroke="#E11D48" strokeWidth="2.5" />
        <path d="M18 31L15 42L24 37L33 42L30 31" fill="#FDA4AF" fillOpacity="0.4" stroke="#BE123C" strokeWidth="2" strokeLinejoin="round" />
        <path d="M24 12L26.5 17L32 17.8L28 21.7L28.9 27.2L24 24.6L19.1 27.2L20 21.7L16 17.8L21.5 17L24 12Z" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

const WHY_CARDS = [
  {
    Illustration: PrivacyIllustration,
    heading: "पूर्ण रूप से गुप्त",
    description: "आपकी जानकारी पूर्णतः सुरक्षित रखी जाएगी।",
  },
  {
    Illustration: DeliveryIllustration,
    heading: "घर तक डिलीवरी",
    description: "दवाएं सादे पैकेट में, पूरे भारत में डिलीवर की जाएंगी।",
  },
  {
    Illustration: NaturalIllustration,
    heading: "जड़ से इलाज",
    description: "प्राकृतिक होम्योपैथिक दवा से शरीर के अनुकूल असर, साइड इफ़ेक्ट की संभावना कम।",
  },
  {
    Illustration: ExperienceIllustration,
    heading: "अनुभवी विशेषज्ञ",
    description: "डॉ. इक़बाल 10 से अधिक वर्षों से परामर्श दे रहे हैं।",
  },
  {
    Illustration: TrustIllustration,
    heading: "भरोसेमंद सेवा",
    description: "10,000+ मरीज़ों को कानपुर एवं अन्य शहरों में सेवा दी जा चुकी है।",
  },
];

function WhyHommed() {
  return (
    <section className="bg-background px-4 py-7">
      <h2 className="mb-5 text-center text-[21px] font-black leading-tight text-[color:var(--brand-trust)]">
        HOMMED क्यों?
      </h2>
      <div className="space-y-3.5">
        {WHY_CARDS.map((w) => {
          const Illustration = w.Illustration;
          return (
            <div
              key={w.heading}
              className="flex flex-col items-center rounded-xl border border-[color:var(--card-border)] bg-white p-5 text-center shadow-card-sm"
            >
              <Illustration />
              <h3 className="flex items-center justify-center gap-1.5 text-[16px] font-bold text-[#1E3A8A] leading-tight">
                <span className="text-[#EC4899] font-black text-[13px]">○</span>
                <span>{w.heading}</span>
              </h3>
              <p className="mt-1.5 text-[13px] font-medium text-slate-600 leading-relaxed max-w-[290px]">
                {w.description}
              </p>
            </div>
          );
        })}
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
          सत्यापित मरीज़ · असली नाम
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
                <span className="flex items-center gap-1 text-[11.5px] font-bold text-[#15803d]">
                  <CheckCircle2 size={12} className="text-[#22c55e]" strokeWidth={2.5} />
                  आराम मिला
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-3 text-center text-[10.5px] font-medium italic text-[color:var(--body-dim)]">
        *परिणाम प्रत्येक व्यक्ति की स्थिति के अनुसार भिन्न हो सकते हैं।
      </p>
      <div className="mt-4 flex justify-center">
        <a
          href={TEL}
          onClick={trackContactEvent}
          id="testimonials-call-now"
          className="call-now-btn inline-flex items-center gap-1.5 rounded-full bg-[color:var(--brand-cta)] px-5 py-2 text-[13.5px] font-bold text-white shadow-sm transition-all active:scale-95 hover:opacity-90"
        >
          <Phone size={13} strokeWidth={2.5} />
          Call Now
        </a>
      </div>
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
  { l: "परामर्श दिए गए", target: 10000, suffix: "+" },
  { l: "Google Rating", target: 4.9, suffix: "★", decimals: 1 },
  { l: "संतुष्ट अनुभव", target: 98, suffix: "%" },
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
   11. FOOTER (WeClinic Multi-Column Structure)
═══════════════════════════════════════ */
function Footer() {
  const KANPUR_LOCATIONS = [
    "Civil Lines",
    "Jajmau",
    "Kidwai Nagar",
    "Kalyanpur",
    "Swaroop Nagar",
    "Panki",
    "Barra",
  ];

  return (
    <footer id="contact" className="w-full bg-[color:var(--brand-trust)] text-white px-4 pt-10 pb-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl space-y-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1 — Brand Block */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2.5">
              <img
                src={hommedLogoImg}
                alt="HomMed"
                className="h-10 w-auto rounded-md bg-white p-0.5"
              />
              <div>
                <p className="text-[17px] font-black tracking-tight text-white">HOMMED</p>
                <p className="text-[11.5px] font-semibold text-white/70">
                  Men's Wellness · Dr. Iqbal Qasim
                </p>
              </div>
            </div>
            <p className="text-[12.5px] font-medium leading-relaxed text-white/80">
              कानपुर के लोगों का भरोसेमंद होम्योपैथिक इलाज — मर्दाना कमज़ोरी, शीघ्रपतन, शुक्राणु की कमी, स्वप्नदोष और प्रोस्टेट समस्याओं का गुप्त एवं सुरक्षित उपचार, क्लिनिक व ऑनलाइन दोनों माध्यम से।
            </p>
            <div className="flex items-center gap-2 rounded-lg bg-white/5 p-2.5 text-[12px] font-semibold text-white/80 border border-white/10">
              <Clock size={15} className="shrink-0 text-[color:var(--brand-cta)]" />
              <span>सोम–शनि · सुबह 10–2 बजे और शाम 5–8 बजे</span>
            </div>
          </div>

          {/* Column 2 — Our Services */}
          <div>
            <h4 className="mb-3.5 text-[13px] font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-[13px] font-medium text-white/75">
              <li>
                <a href="#problems" className="hover:text-[color:var(--brand-cta)] transition-colors">
                  Low Sperm Count
                </a>
              </li>
              <li>
                <a href="#problems" className="hover:text-[color:var(--brand-cta)] transition-colors">
                  Erectile Dysfunction
                </a>
              </li>
              <li>
                <a href="#problems" className="hover:text-[color:var(--brand-cta)] transition-colors">
                  Premature Ejaculation
                </a>
              </li>
              <li>
                <a href="#problems" className="hover:text-[color:var(--brand-cta)] transition-colors">
                  Nightfall
                </a>
              </li>
              <li>
                <a href="#problems" className="hover:text-[color:var(--brand-cta)] transition-colors">
                  Prostate &amp; Urinary
                </a>
              </li>
              <li>
                <a href="#lead" className="hover:text-[color:var(--brand-cta)] transition-colors">
                  General Men's Wellness
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h4 className="mb-3.5 text-[13px] font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-[13px] font-medium text-white/75">
              <li>
                <a href="#hero" className="hover:text-[color:var(--brand-cta)] transition-colors">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#doctor" className="hover:text-[color:var(--brand-cta)] transition-colors">
                  Doctor Profile
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-[color:var(--brand-cta)] transition-colors">
                  Healthcare Blog
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[color:var(--brand-cta)] transition-colors">
                  FAQ Panel
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[color:var(--brand-cta)] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Contact Us */}
          <div className="space-y-3.5">
            <h4 className="mb-3.5 text-[13px] font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Contact Us
            </h4>
            
            <div className="space-y-2.5 text-[12.5px] font-medium text-white/80">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[color:var(--brand-cta)]" />
                <div>
                  <span className="font-bold text-white">Branch 1 — Civil Lines</span>
                  <p className="text-white/70">Civil Lines, Kanpur, Uttar Pradesh – 208001</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[color:var(--brand-cta)]" />
                <div>
                  <span className="font-bold text-white">Branch 2 — Jajmau</span>
                  <p className="text-white/70">Jajmau, Kanpur, Uttar Pradesh</p>
                </div>
              </div>

              <a href={TEL} onClick={trackContactEvent} className="flex items-center gap-2 text-white hover:text-[color:var(--brand-cta)] transition-colors">
                <Phone size={15} className="shrink-0 text-[color:var(--brand-cta)]" />
                <span className="font-bold">{PHONE_DISPLAY}</span>
              </a>

              <a href="mailto:info@hommed.in" className="flex items-center gap-2 text-white/80 hover:text-[color:var(--brand-cta)] transition-colors">
                <Mail size={15} className="shrink-0 text-[color:var(--brand-cta)]" />
                <span>info@hommed.in</span>
              </a>
            </div>
          </div>

        </div>

        {/* Connect With Us / Social Section */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h5 className="text-[11px] font-bold tracking-widest text-white uppercase">
              CONNECT WITH US
            </h5>
            <p className="text-[12px] font-medium text-white/70 mt-0.5">
              Follow Hommed for health tips &amp; updates
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <a
              href="https://www.youtube.com/@hommed_clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[12px] font-bold text-white transition-colors hover:bg-[#FF0000] hover:border-[#FF0000] group"
            >
              <Youtube size={15} className="text-[#FF0000] group-hover:text-white transition-colors" />
              <span>YouTube</span>
            </a>
            <a
              href="https://www.instagram.com/hommed.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[12px] font-bold text-white transition-colors hover:bg-[#E1306C] hover:border-[#E1306C] group"
            >
              <Instagram size={15} className="text-[#E1306C] group-hover:text-white transition-colors" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.hommed.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[12px] font-bold text-white transition-colors hover:bg-[color:var(--brand-cta)] hover:border-[color:var(--brand-cta)] group"
            >
              <Globe size={15} className="text-[color:var(--brand-cta)] group-hover:text-white transition-colors" />
              <span>Website</span>
            </a>
          </div>
        </div>

        {/* Locations Served SEO Row */}
        <div className="border-t border-white/10 pt-6 text-center">
          <h5 className="text-[11px] font-bold tracking-widest text-white/70 uppercase mb-3">
            LOCATIONS WE SERVE IN KANPUR
          </h5>
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1.5 text-[11.5px] font-medium text-white/60">
            {KANPUR_LOCATIONS.map((loc, idx) => (
              <span key={loc} className="flex items-center gap-2">
                <a href="#problems" className="hover:text-[color:var(--brand-cta)] transition-colors">
                  Men's Wellness in {loc}
                </a>
                {idx < KANPUR_LOCATIONS.length - 1 && <span className="text-white/30">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom legal links & copyright section */}
        <div className="border-t border-white/10 pt-5 flex flex-col items-center justify-center gap-2 text-center text-[12px] text-white/60">
          {/* Legal links row: Terms · Privacy · Refunds */}
          <div className="flex items-center justify-center gap-2.5 font-medium text-white/70">
            <Link to="/terms-and-conditions" className="hover:text-white hover:underline transition-colors">
              Terms
            </Link>
            <span className="text-white/40 font-bold">·</span>
            <Link to="/privacy-policy" className="hover:text-white hover:underline transition-colors">
              Privacy
            </Link>
            <span className="text-white/40 font-bold">·</span>
            <Link to="/refund-policy" className="hover:text-white hover:underline transition-colors">
              Refunds
            </Link>
          </div>

          {/* Copyright line */}
          <p className="text-[11.5px] text-white/50">
            © {new Date().getFullYear()} HOMMED
          </p>
        </div>

      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════
   STICKY BOTTOM BAR
═══════════════════════════════════════ */
function StickyBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E5E7EB] bg-[#FDF6EE] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-[440px] items-center justify-between gap-3 px-4 py-3">
        {/* Phone number — tap to call */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9CA3AF]">
            निःशुल्क परामर्श
          </p>
          <a
            href={TEL}
            onClick={trackContactEvent}
            id="sticky-phone"
            className="mt-0.5 block text-[15px] font-black tracking-tight text-[color:var(--brand-trust)] underline decoration-[color:var(--brand-cta)] decoration-2 underline-offset-[3px]"
          >
            +91 63069 88550
          </a>
        </div>

        {/* Call CTA — pill button */}
        <a
          href={TEL}
          onClick={trackContactEvent}
          id="sticky-call"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[color:var(--brand-cta)] px-5 py-2.5 text-[14px] font-black text-white shadow-[0_3px_12px_rgba(194,94,38,0.40)] active:scale-[0.97] transition-transform call-cta-button"
        >
          <Phone size={15} strokeWidth={2.5} />
          <span>कॉल करें</span>
        </a>
      </div>
    </div>
  );
}
