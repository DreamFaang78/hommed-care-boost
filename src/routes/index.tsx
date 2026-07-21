import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap, useGSAP, useRevealOnScroll, useReducedMotion, CountUp } from "@/lib/motion";
import {
  Phone,
  Menu,
  X,
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
  ChevronRight,
  Microscope,
  HeartPulse,
  MoonStar,
  TimerReset,
  Waves,
  CheckCircle2,
  Loader2,
} from "lucide-react";

import drIqbalPortraitAsset from "@/assets/dr-iqbal-portrait-hq.jpg.asset.json";
import drIqbalClinicAsset from "@/assets/dr-iqbal-clinic-v2.jpg.asset.json";
import clinicExteriorAsset from "@/assets/hommed-clinic-exterior-v2.jpg.asset.json";
import hommedLogoAsset from "@/assets/hommed-logo.jpg.asset.json";
const drIqbalImg = drIqbalPortraitAsset.url;
const drCertsImg = drIqbalClinicAsset.url;
const clinicExteriorImg = clinicExteriorAsset.url;

export const Route = createFileRoute("/")({
  component: Landing,
});

const TEL = "tel:+916306988550";
const PHONE_DISPLAY = "+91 63069 88550";

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-hindi">
      <StickyHeader />
      <main className="mx-auto max-w-[440px] pb-40">
        <LeadForm />
        <AfterFormHero />
        <TrustBadges />
        <ProblemGrid />
        <DepartmentBanner />
        <ProcessSteps />
        <WhyHommed />
        <DoctorProfile />
        <TrustSection />
      <Footer />
      </main>
      <StickyBottomBar />
    </div>
  );
}

/* ---------------- Sticky Header ---------------- */

function StickyHeader() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#lead", label: "अपॉइंटमेंट" },
    { href: "#problems", label: "इलाज" },
    { href: "#doctor", label: "डॉक्टर" },
    { href: "#process", label: "प्रक्रिया" },
    { href: "#contact", label: "संपर्क" },
  ];
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[color:var(--card-border)] bg-[#081A0F]/95 backdrop-blur">
      <div className="mx-auto flex max-w-[440px] items-center justify-between gap-2 px-3 py-2.5">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <img
            src={hommedLogoAsset.url}
            alt="HomMed - Dr. Iqbal's Homoeopathic Centre"
            className="h-10 w-auto rounded-md bg-white p-0.5 shadow-hard-sm"
          />
        </a>
        <div className="flex items-center gap-1.5">
          <motion.a
            href="#lead"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="rounded-md bg-brand-gold px-3.5 py-2 text-[13px] font-black tracking-wide text-[color:var(--primary-foreground)] cta-glow-gold"
          >
            अपॉइंटमेंट लें
          </motion.a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-md border border-[color:var(--card-border)] bg-card text-white"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mx-auto max-w-[440px] border-t border-[color:var(--card-border)] bg-card px-3 py-2">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="flex items-center justify-between py-2.5 text-[15px] font-semibold text-white"
                >
                  {l.label}
                  <ChevronRight size={16} className="text-[color:var(--body-dim)]" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

/* ---------------- Sticky Bottom Bar ---------------- */

function StickyBottomBar() {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();
  useGSAP(
    () => {
      if (!ref.current) return;
      if (!reduced) {
        gsap.from(ref.current, {
          y: 60,
          opacity: 0,
          duration: 0.5,
          delay: 0.2,
          ease: "power2.out",
        });
      }
    },
    { scope: ref, dependencies: [reduced] },
  );
  return (
    <div
      ref={ref}
      className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-brand-gold bg-[#081A0F] shadow-[0_-6px_20px_rgba(0,0,0,0.6)]"
    >
      <div className="mx-auto grid max-w-[440px] grid-cols-[auto_1fr_auto] items-center gap-2 px-3 py-2">
        <img
          src={drIqbalImg}
          alt="Dr. Iqbal Quasim"
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-brand-gold"
        />
        <motion.a
          href={TEL}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="flex min-w-0 items-center justify-center gap-1.5 rounded-md bg-gradient-to-r from-[color:var(--brand-blue)] to-[color:var(--brand-blue-2)] px-3 py-2.5 text-[14px] font-black tracking-wide text-white cta-glow-blue"
        >
          <Phone size={16} className="shrink-0" />
          <span className="truncate">अभी कॉल करें</span>
        </motion.a>
        <div className="flex shrink-0 items-center gap-1.5">
          <span className="pulse-dot inline-block h-2.5 w-2.5 rounded-full bg-brand-green" />
          <span className="pulse-text text-[11px] font-black leading-tight text-brand-green">
            डॉक्टर<br />ऑनलाइन
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Online Nudge (reusable, bold gradient) ---------------- */

function OnlineNudge() {
  return (
    <motion.a
      href={TEL}
      initial={{ opacity: 0, x: -14 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="my-3 flex items-center justify-between gap-2 rounded-md bg-gradient-to-r from-brand-green-dark via-[#3d7a2f] to-brand-gold p-[1.5px] shadow-hard-sm"
    >
      <div className="flex w-full items-center justify-between gap-2 rounded-md bg-[#0C2416] px-3 py-2.5">
        <span className="flex items-center gap-2 text-[13.5px] font-black text-white">
          <span className="pulse-dot h-3 w-3 rounded-full bg-brand-green ring-2 ring-brand-green/40" />
          Dr. Iqbal अभी ऑनलाइन हैं
        </span>
        <span className="flex items-center gap-1 rounded-md bg-brand-gold px-3 py-1.5 text-[12.5px] font-black tracking-wide text-[color:var(--primary-foreground)]">
          <Phone size={13} strokeWidth={3} /> कॉल करें
        </span>
      </div>
    </motion.a>
  );
}

/* ---------------- Lead Form ---------------- */

const PROBLEMS = [
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

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErr("");
    if (!name.trim()) return setErr("कृपया अपना नाम भरें");
    if (!/^[6-9]\d{9}$/.test(mobile))
      return setErr("कृपया सही मोबाइल नंबर भरें (10 अंक)");
    void duration;
    void problems;
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const inputCls =
    "w-full rounded-md border-2 border-[color:var(--card-border)] bg-[#0F2416] px-3.5 py-2.5 text-[15px] font-semibold text-white outline-none placeholder:text-[color:var(--body-dim)]/70 focus:border-brand-gold transition-colors";
  const labelCls =
    "mb-1 block text-[12.5px] font-semibold text-[color:var(--body-dim)]";

  return (
    <section id="lead" className="bg-background px-3 py-4">
      <div className="relative rounded-md border-2 border-brand-gold bg-card p-4 shadow-hard">
        <AnimatePresence mode="wait" initial={false}>
          {submitted ? (
            <motion.div
              key="ok"
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="py-4 text-center"
            >
              <motion.div
                initial={{ scale: 0.5, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.05 }}
                className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-brand-green text-white shadow-hard-sm"
              >
                <Check size={28} strokeWidth={3} />
              </motion.div>
              <h2 className="text-lg font-black text-white">
                धन्यवाद! हमारी टीम जल्द सम्पर्क करेगी।
              </h2>
              <p className="mt-1 text-sm text-[color:var(--body-dim)]">
                आपकी पहचान गुप्त रखी जायेगी।
              </p>
              <motion.a
                href={TEL}
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-md bg-gradient-to-r from-[color:var(--brand-blue)] to-[color:var(--brand-blue-2)] px-5 py-3 text-[14px] font-black tracking-wide text-white shadow-hard-sm"
              >
                <Phone size={16} /> अभी कॉल करें
              </motion.a>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="text-center text-[21px] font-black leading-snug text-white">
                क्या आप शून्य शुक्राणु एवं गुप्त रोगों से परेशान हैं?
              </h2>
              <p className="mt-1.5 text-center text-[13.5px] font-semibold text-[#A8C4B0]">
                हमारे विशेषज्ञों से मुफ्त सलाह लें
              </p>

              <motion.a
                href={TEL}
                whileTap={{ scale: 0.97 }}
                className="mt-3 flex items-center justify-center gap-2 text-[26px] font-black tracking-tight text-brand-gold"
              >
                <Phone size={22} strokeWidth={2.5} className="fill-brand-gold" />
                {PHONE_DISPLAY}
              </motion.a>

              <div className="mt-3 flex justify-center">
                <motion.a
                  href={TEL}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--brand-blue)] to-[color:var(--brand-blue-2)] px-8 py-2.5 text-[15px] font-black tracking-wide text-white cta-glow-blue"
                >
                  <Phone size={16} strokeWidth={3} /> Call now
                </motion.a>
              </div>

              <form onSubmit={onSubmit} className="mt-5 space-y-3">
                <div>
                  <label className={labelCls}>आपका नाम</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    maxLength={80}
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className={labelCls}>आपका मोबाइल नंबर</label>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) =>
                      setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                    }
                    inputMode="numeric"
                    pattern="[6-9][0-9]{9}"
                    placeholder="Your Mobile Number"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className={labelCls}>
                    आपको कितने दिनों से समस्या है?
                  </label>
                  <input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value.slice(0, 60))}
                    placeholder=""
                    className={inputCls}
                  />
                </div>

                <div className="pt-1">
                  <p className="mb-2 text-[13.5px] font-bold text-white">
                    इनमें से आपको क्या क्या समस्या है
                  </p>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-2.5">
                    {PROBLEMS.map((p) => {
                      const active = problems.includes(p);
                      return (
                        <label
                          key={p}
                          className="flex cursor-pointer items-center gap-2 text-[13.5px] font-semibold text-white"
                        >
                          <motion.span
                            onClick={() => toggle(p)}
                            animate={active ? { scale: [1, 1.25, 1] } : { scale: 1 }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                            className={
                              "grid h-5 w-5 shrink-0 place-items-center rounded-[4px] border-2 transition-colors " +
                              (active
                                ? "border-brand-gold bg-brand-gold text-[color:var(--primary-foreground)]"
                                : "border-brand-gold bg-[#0F2416]")
                            }
                          >
                            {active && <Check size={14} strokeWidth={4} />}
                          </motion.span>
                          <span onClick={() => toggle(p)}>{p}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <AnimatePresence>
                  {err && (
                    <motion.p
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: [-8, 8, -6, 6, 0] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-[12.5px] font-bold text-destructive"
                    >
                      {err}
                    </motion.p>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="mt-1 flex w-full items-center justify-center gap-2 rounded-md bg-brand-gold px-4 py-3.5 text-[16px] font-black tracking-wide text-[color:var(--primary-foreground)] shadow-hard disabled:opacity-80"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> भेज रहे हैं…
                    </>
                  ) : (
                    "शुरुआत करें"
                  )}
                </motion.button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ---------------- After-Form Hero CTA ---------------- */

function AfterFormHero() {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  useGSAP(
    () => {
      if (reduced || !ref.current) return;
      const img = ref.current.querySelector<HTMLImageElement>(".clinic-img");
      if (img) {
        gsap.from(img, {
          scale: 1.08,
          opacity: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: img, start: "top 90%", toggleActions: "play none none none" },
        });
      }
    },
    { scope: ref, dependencies: [reduced] },
  );
  return (
    <section ref={ref} className="bg-background px-3 pb-2 pt-1">
      <div className="rounded-md border-2 border-brand-gold bg-card p-3.5 shadow-hard">
        <div className="bg-brand-gold -mx-3.5 -mt-3.5 mb-4 rounded-t-md px-3 py-2.5 text-center shadow-hard-sm">
          <p className="text-[13px] font-black uppercase tracking-wider leading-tight text-[color:var(--primary-foreground)]">
            कानपुर का सबसे भरोसेमंद होम्योपैथिक सेंटर
          </p>
        </div>

        <div className="mb-4 overflow-hidden rounded-md border-2 border-brand-gold shadow-hard-sm">
          <img
            src={clinicExteriorImg}
            alt="HomMed Clinic — Dr. Iqbal's Homoeopathic Centre, Jajmau, Kanpur"
            className="clinic-img block h-auto w-full object-cover"
            loading="lazy"
          />
        </div>

        <h2 className="text-[22px] font-black leading-[1.15] text-white">
          शून्य-कम शुक्राणु, नपुंसकता एवं गुप्त रोगों का{" "}
          <span className="text-brand-gold">जड़ से इलाज</span> मात्र{" "}
          <span className="rounded-md bg-brand-gold px-2 py-0.5 text-[color:var(--primary-foreground)]">
            ₹1599
          </span>{" "}
          में
        </h2>

        <div className="mt-4 flex items-center gap-2.5 rounded-md border-2 border-brand-gold bg-[#0F2416] px-3.5 py-3 shadow-hard-sm">
          <div className="flex flex-col items-center border-r border-[color:var(--card-border)] pr-3">
            <span className="text-2xl font-black leading-none text-brand-gold">
              <CountUp target={4.9} decimals={1} />
            </span>
            <div className="mt-1 flex items-center gap-0.5 text-brand-gold">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={11} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[color:var(--body-dim)]">
              Google Rating
            </p>
            <p className="text-[14px] font-black leading-tight text-white">
              <CountUp target={10000} suffix="+" /> मरीज ठीक हुए
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trust Badges ---------------- */

const BADGES_A = [
  "4.9★ Google Rating, 98% Permanent Relief",
  "क्लीनिक एवं ऑनलाइन परामर्श की सुविधा",
  "₹1599 में 25 दिन की दवा",
  "3–5 महीने का Course* (T&C Apply)",
  "शुक्राणु की कमी (Low Sperm) का इलाज",
];
const BADGES_B = [
  "नपुंसकता (Erectile Dysfunction) का इलाज",
  "शीघ्रपतन (Premature Ejaculation) का इलाज",
  "दवाओं की फ्री होम डिलीवरी (पूरे भारत में)",
  "दवाओं की पूर्णतः गोपनीय डिलीवरी",
  "10,000+ संतुष्ट मरीज",
];

function TrustBadges() {
  const ref = useRef<HTMLElement | null>(null);
  useRevealOnScroll(ref, { selector: "li.badge" });
  return (
    <section ref={ref} className="bg-section-alt px-3 py-5">
      <h2 className="mb-3 text-center text-[18px] font-black leading-tight text-white">
        क्यों हज़ारों मरीज़ हम पर <span className="text-brand-gold">भरोसा</span> करते हैं
      </h2>
      <BadgeList items={BADGES_A} />
      <OnlineNudge />
      <BadgeList items={BADGES_B} />
      <OnlineNudge />
    </section>
  );
}

function BadgeList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((t) => (
        <li
          key={t}
          className="badge flex items-start gap-2.5 rounded-md border border-[color:var(--card-border)] bg-card p-3 shadow-hard-sm"
        >
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-brand-green text-white">
            <Check size={14} strokeWidth={3} />
          </span>
          <span className="text-[14px] font-bold leading-snug text-white">
            {t}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ---------------- Problem Grid (1-col with vivid icons + gold accent) ---------------- */

const PROBLEM_CARDS = [
  {
    t: "शुक्राणु की कमी",
    en: "LOW SPERM COUNT",
    d: "टेस्टिकल्स में दर्द, सूजन, हार्मोन असामान्यता, चेहरे के बाल कम होना।",
    icon: Microscope,
    color: "#EC4899",
    accent: "#EC4899",
  },
  {
    t: "स्तंभनदोष / नपुंसकता",
    en: "ERECTILE DYSFUNCTION",
    d: "इरेक्शन बनाए रखने में असमर्थता, कमज़ोरी, आत्मविश्वास की कमी।",
    icon: HeartPulse,
    color: "#F97316",
    accent: "#F97316",
  },
  {
    t: "स्वप्नदोष",
    en: "NIGHTFALL",
    d: "गीले सपने, अनियंत्रित स्खलन एवं शारीरिक कमज़ोरी।",
    icon: MoonStar,
    color: "#A855F7",
    accent: "#A855F7",
  },
  {
    t: "शीघ्रपतन",
    en: "PREMATURE EJACULATION",
    d: "अपेक्षा से जल्दी स्खलन, संबंधों में असंतुष्टि।",
    icon: TimerReset,
    color: "#EF4444",
    accent: "#EF4444",
  },
  {
    t: "प्रोस्टेट और मूत्राशय",
    en: "PROSTATE & URINARY BLADDER",
    d: "मूत्र संबंधी परेशानी, जलन, बार-बार पेशाब आना।",
    icon: Stethoscope,
    color: "#14B8A6",
    accent: "#14B8A6",
  },
  {
    t: "धातरोग",
    en: "SPERMATORRHOEA",
    d: "पेशाब के साथ धातु निकलना, गंभीर कमज़ोरी।",
    icon: Waves,
    color: "#3B82F6",
    accent: "#3B82F6",
  },
];

function ProblemGrid() {
  const ref = useRef<HTMLElement | null>(null);
  useRevealOnScroll(ref, { selector: ".reveal-card" });
  return (
    <section ref={ref} id="problems" className="bg-background px-3 py-6">
      <h2 className="mb-4 text-center text-[22px] font-black leading-tight text-white">
        हम किन <span className="text-brand-gold">रोगों</span> का इलाज करते हैं?
      </h2>
      <div className="space-y-2.5">
        {PROBLEM_CARDS.map((c, i) => {
          const Icon = c.icon;
          return (
            <div key={c.t}>
              <div
                className="reveal-card relative overflow-hidden rounded-md border border-[color:var(--card-border)] bg-card p-3 pl-4 shadow-hard-sm"
                style={{ borderLeftWidth: 4, borderLeftColor: c.accent }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-md text-white shadow-hard-sm"
                    style={{ background: c.color }}
                  >
                    <Icon size={30} strokeWidth={2.5} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="flex items-center gap-1.5 text-[16px] font-black leading-tight text-white">
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-white"
                        fill="#22C55E"
                      />
                      {c.t}
                    </h3>
                    <p className="mt-0.5 text-[11px] font-black uppercase tracking-wider text-brand-gold">
                      {c.en}
                    </p>
                    <p className="mt-1.5 text-[12.5px] font-medium leading-snug text-[color:var(--body-dim)]">
                      {c.d}
                    </p>
                  </div>
                </div>
              </div>
              {i % 2 === 1 && i < PROBLEM_CARDS.length - 1 && <OnlineNudge />}
            </div>
          );
        })}
      </div>
      <div className="mt-3">
        <OnlineNudge />
      </div>
    </section>
  );
}

/* ---------------- Department Banner ---------------- */

function DepartmentBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#061309] via-[#0A1F12] to-[#000000] px-4 py-7 text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
      <div className="text-center">
        <h2 className="text-[24px] font-black leading-tight tracking-tight text-white">
          HOMMED <span className="text-brand-gold">Men's Wellness</span>
          <br />Department
        </h2>
        <div className="mx-auto mt-2 h-[3px] w-16 bg-brand-gold" />
      </div>
      <div className="mx-auto mt-5 w-fit">
        <div className="relative">
          <div className="absolute -inset-3 rounded-full bg-brand-gold/25 blur-xl" />
          <img
            src={drIqbalImg}
            alt="Dr. Iqbal Quasim"
            width={240}
            height={240}
            className="relative h-44 w-44 rounded-full object-cover ring-4 ring-brand-gold shadow-hard"
          />
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-[17px] font-black text-white">Dr. Iqbal Quasim</p>
        <p className="mx-auto mt-1 max-w-[320px] text-[12.5px] font-semibold text-[color:var(--body-dim)]">
          Chief Homoeopathic Consultant &amp; Founder · BHMS · 10+ Years Experience
        </p>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-1.5">
        {[
          "Low Sperm Count",
          "Erectile Dysfunction",
          "Premature Ejaculation",
          "Nightfall",
        ].map((c) => (
          <span
            key={c}
            className="rounded-md border-2 border-brand-gold bg-brand-gold/10 px-3 py-1.5 text-[11.5px] font-black tracking-wide text-brand-gold"
          >
            {c}
          </span>
        ))}
      </div>
      <a
        href={TEL}
        className="mt-5 flex items-center justify-center gap-2 rounded-md bg-brand-gold px-4 py-3 text-[15px] font-black tracking-wide text-[color:var(--primary-foreground)] shadow-hard"
      >
        <Phone size={16} strokeWidth={3} /> अभी कंसल्ट करें — {PHONE_DISPLAY}
      </a>
    </section>
  );
}

/* ---------------- Process Steps ---------------- */

const STEPS = [
  {
    t: "Call / WhatsApp करें",
    d: `${PHONE_DISPLAY} पर सम्पर्क करें।`,
    color: "#EC4899",
  },
  {
    t: "Appointment fix करें",
    d: "Civil Lines clinic या Online — अपनी सुविधा अनुसार।",
    color: "#F97316",
  },
  {
    t: "Dr. Iqbal personally केस देखेंगे",
    d: "आपके symptoms एवं history को ध्यान से समझेंगे।",
    color: "#14B8A6",
  },
  {
    t: "दवाएं घर तक डिलीवर",
    d: "पूरी गोपनीयता के साथ + follow-up भी।",
    color: "#3B82F6",
  },
];

function ProcessSteps() {
  const ref = useRef<HTMLElement | null>(null);
  useRevealOnScroll(ref);
  return (
    <section ref={ref} id="process" className="bg-section-alt px-4 py-6">
      <h2 className="reveal mb-4 text-center text-[22px] font-black leading-tight text-white">
        हमारा <span className="text-brand-gold">प्लान</span> कैसे काम करता है?
      </h2>
      <ol className="space-y-2.5">
        {STEPS.map((s, i) => (
          <li
            key={s.t}
            className="reveal flex items-start gap-3 rounded-md border border-[color:var(--card-border)] bg-card p-3 shadow-hard-sm"
            style={{ borderLeftWidth: 4, borderLeftColor: s.color }}
          >
            <div
              className="grid h-11 w-11 shrink-0 place-items-center rounded-md text-white font-black text-[17px] shadow-hard-sm"
              style={{ background: s.color }}
            >
              {i + 1}
            </div>
            <div className="min-w-0">
              <h3 className="text-[15px] font-black leading-tight text-white">
                Step {i + 1}: {s.t}
              </h3>
              <p className="mt-0.5 text-[12.5px] font-medium text-[color:var(--body-dim)]">
                {s.d}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <motion.a
        href={TEL}
        whileTap={{ scale: 0.96 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="reveal mt-4 flex items-center justify-center gap-2 rounded-md bg-brand-gold px-4 py-3.5 text-[15px] font-black tracking-wide text-[color:var(--primary-foreground)] shadow-hard"
      >
        <Phone size={16} strokeWidth={3} /> अभी शुरुआत करें
      </motion.a>
    </section>
  );
}

/* ---------------- Why HOMMED ---------------- */

const WHY = [
  { icon: ShieldCheck, t: "पूर्ण रूप से गुप्त", d: "Privacy first — कोई पहचान लीक नहीं।", color: "#22c55e" },
  { icon: Truck, t: "घर तक डिलीवरी", d: "पूरे भारत में गोपनीय पैकिंग।", color: "#F97316" },
  { icon: Stethoscope, t: "ऑनलाइन एवं क्लिनिक परामर्श", d: "आपकी सुविधा अनुसार।", color: "#3B82F6" },
  { icon: Leaf, t: "कोई साइड इफेक्ट नहीं", d: "प्राकृतिक होम्योपैथी — केमिकल-मुक्त।", color: "#14B8A6" },
  { icon: Award, t: "10+ साल अनुभव", d: "10,000+ मरीज ठीक — प्रमाणित परिणाम।", color: "#E8A93C" },
];

function WhyHommed() {
  const ref = useRef<HTMLElement | null>(null);
  useRevealOnScroll(ref);
  return (
    <section ref={ref} className="bg-background px-3 py-6">
      <h2 className="reveal mb-4 text-center text-[22px] font-black leading-tight text-white">
        इलाज के लिए <span className="text-brand-gold">HOMMED</span> क्यों चुनें?
      </h2>
      <div className="space-y-2">
        {WHY.map((w) => (
          <div
            key={w.t}
            className="reveal flex items-start gap-3 rounded-md border border-[color:var(--card-border)] bg-card p-3 shadow-hard-sm"
          >
            <div
              className="grid h-12 w-12 shrink-0 place-items-center rounded-md text-white shadow-hard-sm"
              style={{ background: w.color }}
            >
              <w.icon size={24} strokeWidth={2.4} />
            </div>
            <div className="min-w-0">
              <h3 className="text-[15px] font-black text-white">{w.t}</h3>
              <p className="mt-0.5 text-[12.5px] font-medium text-[color:var(--body-dim)]">{w.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Doctor Profile ---------------- */

function DoctorProfile() {
  return (
    <section id="doctor" className="bg-section-alt px-3 py-6">
      <h2 className="mb-4 text-center text-[22px] font-black leading-tight text-white">
        आपके <span className="text-brand-gold">डॉक्टर</span> से मिलिए
      </h2>
      <div className="overflow-hidden rounded-md border-2 border-brand-gold bg-card shadow-hard">
        <img
          src={drCertsImg}
          alt="Dr. Iqbal Quasim with framed certificates"
          width={1100}
          height={900}
          loading="lazy"
          className="h-56 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-[20px] font-black text-white">Dr. Iqbal Quasim</h3>
          <p className="mt-0.5 text-[12.5px] font-bold text-[color:var(--body-dim)]">
            BHMS (Bachelor of Homeopathic Medicine &amp; Surgery)
            <br />
            10+ Years Clinical Experience
          </p>
          <div className="mt-3 flex items-start gap-2 rounded-md bg-brand-gold/10 border border-brand-gold p-3">
            <Award size={20} className="mt-0.5 shrink-0 text-brand-gold" />
            <p className="text-[13.5px] font-black leading-snug text-white">
              Homoeopathic Icon Award 2025
              <span className="mt-0.5 block text-[11.5px] font-semibold text-[color:var(--body-dim)]">
                KGMU, Lucknow द्वारा सम्मानित
              </span>
            </p>
          </div>
          <a
            href="#lead"
            className="mt-3 inline-flex text-[13px] font-black text-brand-gold underline"
          >
            और पढ़ें…
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trust Section ---------------- */

type Stat = {
  l: string;
  color: string;
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

const STATS: Stat[] = [
  { l: "संतुष्ट मरीज", color: "#EC4899", target: 10000, suffix: "+" },
  { l: "Google Rating", color: "#E8A93C", target: 4.9, suffix: "★", decimals: 1 },
  { l: "Permanent Relief", color: "#22c55e", target: 98, suffix: "%" },
  { l: "साल का अनुभव", color: "#3B82F6", target: 10, suffix: "+" },
];

function TrustSection() {
  const ref = useRef<HTMLElement | null>(null);
  useRevealOnScroll(ref, { selector: ".reveal-stat" });
  return (
    <section ref={ref} className="bg-background px-3 py-6">
      <h2 className="text-center text-[24px] font-black leading-tight text-white">
        <CountUp target={10000} suffix="+" className="text-brand-gold" /> मरीजों का भरोसा
      </h2>
      <p className="mt-1 text-center text-[12.5px] font-semibold text-[color:var(--body-dim)]">
        कानपुर से शुरू, पूरे भारत तक पहुँच
      </p>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {STATS.map((s) => (
          <div
            key={s.l}
            className="reveal-stat rounded-md border border-[color:var(--card-border)] bg-card p-3.5 text-center shadow-hard-sm"
            style={{ borderTopWidth: 3, borderTopColor: s.color }}
          >
            <p
              className="text-[28px] font-black leading-none tracking-tight"
              style={{ color: s.color }}
            >
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

      <div className="reveal-stat mt-4 flex items-center gap-3 rounded-md border-2 border-brand-gold bg-card p-4 shadow-hard-sm">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-white">
          <span className="text-xl font-black text-[#4285F4]">G</span>
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-[20px] font-black leading-none text-white">
              <CountUp target={4.9} decimals={1} />
            </span>
            <div className="flex items-center gap-0.5 text-brand-gold">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
          </div>
          <p className="mt-1 text-[11.5px] font-bold text-[color:var(--body-dim)]">
            Google पर <CountUp target={1200} suffix="+" /> रिव्यू
          </p>
        </div>
      </div>

      <p className="reveal-stat mt-4 rounded-md border-2 border-dashed border-[color:var(--card-border)] bg-card p-3 text-center text-[11.5px] font-semibold text-[color:var(--body-dim)]">
        📹 Real patient video testimonials जल्द add होंगे
      </p>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer id="contact" className="bg-section-alt px-4 py-6">
      <div className="flex items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-md bg-brand-gold text-[color:var(--primary-foreground)] font-black shadow-hard-sm">
          H
        </span>
        <span className="text-lg font-black text-white">HOMMED</span>
      </div>
      <p className="mt-2 text-[12.5px] font-bold text-[color:var(--body-dim)]">
        Men's Wellness Department — Dr. Iqbal Quasim
      </p>

      <div className="mt-4 space-y-2.5">
        <div className="rounded-md border border-[color:var(--card-border)] bg-card p-3">
          <p className="flex items-center gap-1.5 text-[11.5px] font-black uppercase tracking-wide text-brand-gold">
            <MapPin size={13} /> Civil Lines Branch
          </p>
          <p className="mt-1 text-[13.5px] font-bold text-white">
            Civil Lines, Kanpur, Uttar Pradesh – 208001
          </p>
        </div>
        <div className="rounded-md border border-[color:var(--card-border)] bg-card p-3">
          <p className="flex items-center gap-1.5 text-[11.5px] font-black uppercase tracking-wide text-brand-gold">
            <MapPin size={13} /> Jajmau Branch
          </p>
          <p className="mt-1 text-[13.5px] font-bold text-white">
            Jajmau, Kanpur, Uttar Pradesh
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-[13.5px]">
        <a href={TEL} className="flex items-center gap-2 font-black text-white">
          <Phone size={14} className="text-brand-gold" /> {PHONE_DISPLAY}
        </a>
        <a
          href="mailto:info@hommed.in"
          className="flex items-center gap-2 font-bold text-white"
        >
          <Mail size={14} className="text-brand-gold" /> info@hommed.in
        </a>
        <p className="flex items-center gap-2 font-bold text-[color:var(--body-dim)]">
          <Clock size={14} className="text-brand-gold" /> Mon–Sat · 10AM–2PM &amp; 5PM–8PM
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-[color:var(--card-border)] pt-3 text-[11.5px] text-[color:var(--body-dim)]">
        <a href="#" className="font-bold underline">
          Privacy Policy
        </a>
        <span>© {new Date().getFullYear()} HOMMED</span>
      </div>
    </footer>
  );
}
