import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Phone,
  MessageCircle,
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
} from "lucide-react";
import clinicImg from "@/assets/clinic-exterior.jpg";
import drIqbalImg from "@/assets/dr-iqbal.jpg";
import drCertsImg from "@/assets/dr-iqbal-certificates.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const TEL = "tel:+918707868504";
const PHONE_DISPLAY = "+91 87078 68504";
const WHATSAPP =
  "https://wa.me/918707868504?text=Mujhe%20sexual%20wellness%20consultation%20chahiye";
const WHATSAPP_PLAIN = "https://wa.me/918707868504";

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-hindi">
      <StickyHeader />
      <main className="mx-auto max-w-[440px] pb-40">
        <Hero />
        <LeadForm />
        <TrustBadges />
        <ProblemGrid />
        <DepartmentBanner />
        <ProcessSteps />
        <WhyHommed />
        <DoctorProfile />
        <TrustSection />
        <Footer />
      </main>
      <WhatsAppFab />
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
    <header className="sticky top-0 z-40 w-full border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[440px] items-center justify-between gap-2 px-3 py-2.5">
        <a href="#top" className="flex items-center gap-1.5 shrink-0">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-orange text-white font-black text-sm">
            H
          </span>
          <span className="text-lg font-black tracking-tight text-foreground">
            HOMMED
          </span>
        </a>
        <div className="flex items-center gap-1.5">
          <a
            href="#lead"
            className="rounded-full bg-brand-orange px-3.5 py-2 text-[13px] font-bold text-white shadow-sm active:scale-[0.98]"
          >
            अपॉइंटमेंट लें
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white text-foreground"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mx-auto max-w-[440px] border-t border-border bg-white px-3 py-2">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="flex items-center justify-between py-2.5 text-[15px] font-semibold text-foreground"
                >
                  {l.label}
                  <ChevronRight size={16} className="text-muted-foreground" />
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
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="mx-auto grid max-w-[440px] grid-cols-[auto_1fr_auto] items-center gap-2 px-3 py-2">
        <img
          src={drIqbalImg}
          alt="Dr. Iqbal Quasim"
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-brand-green"
        />
        <a
          href={TEL}
          className="flex min-w-0 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[color:var(--brand-blue)] to-[color:var(--brand-blue-2)] px-3 py-2.5 text-[13px] font-bold text-white shadow-sm active:scale-[0.98]"
        >
          <Phone size={16} className="shrink-0" />
          <span className="truncate">अभी कॉल करें</span>
        </a>
        <div className="flex shrink-0 items-center gap-1.5">
          <span className="pulse-dot inline-block h-2.5 w-2.5 rounded-full bg-brand-green" />
          <span className="pulse-text text-[11px] font-bold leading-tight text-brand-green-dark">
            डॉक्टर<br />ऑनलाइन
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- WhatsApp FAB ---------------- */

function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_PLAIN}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp पर संपर्क करें"
      className="fixed bottom-20 right-3 z-50 grid h-12 w-12 place-items-center rounded-full bg-brand-green text-white shadow-lg ring-4 ring-white active:scale-95"
    >
      <MessageCircle size={22} fill="white" />
    </a>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative bg-white">
      <div className="relative">
        <img
          src={clinicImg}
          alt="HOMMED Clinic, Civil Lines, Kanpur"
          width={1280}
          height={800}
          className="h-56 w-full object-cover"
        />
        <div className="absolute inset-x-0 top-0 bg-[color:var(--brand-yellow)]/95 px-3 py-2 text-center">
          <p className="text-[13px] font-extrabold leading-tight text-foreground">
            कानपुर का सबसे भरोसेमंद होम्योपैथिक सेंटर
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-2 pt-8">
          <p className="flex items-center gap-1 text-[12px] font-semibold text-white">
            <MapPin size={13} /> Civil Lines, Kanpur, Uttar Pradesh – 208001
          </p>
        </div>
      </div>

      <div className="px-4 pb-4 pt-5">
        <h1 className="text-[22px] font-black leading-tight text-foreground">
          शून्य-कम शुक्राणु, नपुंसकता एवं अन्य गुप्त रोगों का{" "}
          <span className="text-brand-orange">जड़ से इलाज</span> मात्र{" "}
          <span className="rounded-md bg-[color:var(--brand-yellow)] px-1.5 py-0.5">
            ₹1599
          </span>{" "}
          में
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-2 rounded-xl border border-border bg-section-alt px-3 py-2">
          <div className="flex items-center gap-1 text-brand-orange">
            <span className="text-base font-black text-foreground">4.9</span>
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <span className="text-[12px] font-semibold text-muted-foreground">
            Google Rating
          </span>
          <span className="text-muted-foreground">|</span>
          <span className="text-[12px] font-bold text-foreground">
            10,000+ मरीज ठीक हुए
          </span>
        </div>
      </div>
    </section>
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
    // Silence unused warnings while keeping fields captured for future backend
    void duration;
    void problems;
    setSubmitted(true);
  };

  return (
    <section id="lead" className="bg-white px-3 py-5">
      <div className="rounded-2xl bg-[color:var(--brand-yellow)] p-4 shadow-sm ring-1 ring-black/5">
        {submitted ? (
          <div className="text-center py-4">
            <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-brand-green text-white">
              <Check size={28} strokeWidth={3} />
            </div>
            <h2 className="text-lg font-black text-foreground">
              धन्यवाद! हमारी टीम जल्द सम्पर्क करेगी।
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              आपकी पहचान गुप्त रखी जायेगी।
            </p>
            <a
              href={TEL}
              className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[color:var(--brand-blue)] to-[color:var(--brand-blue-2)] px-5 py-2.5 text-sm font-bold text-white"
            >
              <Phone size={16} /> अभी कॉल करें
            </a>
          </div>
        ) : (
          <>
            <h2 className="text-[17px] font-black leading-snug text-foreground">
              क्या आप शून्य शुक्राणु एवं अन्य गुप्त रोगों से परेशान हैं?
            </h2>
            <p className="mt-1 text-[13px] text-muted-foreground">
              आज ही Dr. Iqbal से मुफ्त सलाह लें…
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href={TEL}
                className="flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[color:var(--brand-blue)] to-[color:var(--brand-blue-2)] px-3 py-2.5 text-[13px] font-bold text-white active:scale-[0.98]"
              >
                <Phone size={15} /> Call now
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-full bg-brand-green px-3 py-2.5 text-[13px] font-bold text-white active:scale-[0.98]"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
            </div>

            <form onSubmit={onSubmit} className="mt-4 space-y-2.5">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="आपका नाम"
                maxLength={80}
                className="w-full rounded-xl border border-border bg-white px-3.5 py-3 text-[15px] font-medium outline-none placeholder:text-muted-foreground focus:border-brand-orange"
              />
              <input
                type="tel"
                value={mobile}
                onChange={(e) =>
                  setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
                inputMode="numeric"
                pattern="[6-9][0-9]{9}"
                placeholder="मोबाइल नंबर (10 अंक)"
                className="w-full rounded-xl border border-border bg-white px-3.5 py-3 text-[15px] font-medium outline-none focus:border-brand-orange"
              />
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full rounded-xl border border-border bg-white px-3.5 py-3 text-[15px] font-medium outline-none focus:border-brand-orange"
              >
                <option value="">आपको कितने दिनों से समस्या है?</option>
                <option>1 महीने से कम</option>
                <option>1–6 महीने</option>
                <option>6 महीने – 1 साल</option>
                <option>1 साल से ज़्यादा</option>
              </select>

              <div className="rounded-xl border border-border bg-white p-3">
                <p className="mb-2 text-[13px] font-bold text-foreground">
                  आपकी समस्या (एक या अधिक चुनें)
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {PROBLEMS.map((p) => {
                    const active = problems.includes(p);
                    return (
                      <button
                        type="button"
                        key={p}
                        onClick={() => toggle(p)}
                        className={
                          "rounded-full px-3 py-1.5 text-[12.5px] font-semibold transition " +
                          (active
                            ? "bg-brand-orange text-white"
                            : "border border-border bg-white text-foreground")
                        }
                      >
                        {active ? "✓ " : ""}
                        {p}
                      </button>
                    );
                  })}
                </div>
              </div>

              {err && (
                <p className="text-[12.5px] font-semibold text-destructive">
                  {err}
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-full bg-brand-orange px-4 py-3.5 text-[15px] font-black text-white shadow-md active:scale-[0.99]"
              >
                शुरुआत करें →
              </button>

              <p className="pt-1 text-center text-[11.5px] leading-snug text-muted-foreground">
                🔒 आपकी पहचान गुप्त रखी जायेगी — Yahan judgment nahi, sirf ilaaj
                hai.
              </p>
            </form>
          </>
        )}
      </div>
    </section>
  );
}

/* ---------------- Trust Badges ---------------- */

const BADGES_A = [
  "4.9★ Google Rating, 98% Permanent Relief",
  "क्लीनिक एवं ऑनलाइन परामर्श की सुविधा (Kanpur में क्लिनिक, पूरे India में ऑनलाइन)",
  "₹1599 में 25 दिन की दवा",
  "3–5 महीने का Course* (T&C Apply)",
  "शुक्राणु की कमी (Low Sperm Count) का इलाज",
];
const BADGES_B = [
  "नपुंसकता (Erectile Dysfunction) का इलाज",
  "शीघ्रपतन (Premature Ejaculation) का इलाज",
  "दवाओं की फ्री होम डिलीवरी (पूरे भारत में)",
  "दवाओं की पूर्णतः गोपनीय डिलीवरी",
  "10,000+ संतुष्ट मरीज",
];

function TrustBadges() {
  return (
    <section className="bg-section-alt px-3 py-6">
      <h2 className="mb-3 text-center text-lg font-black text-foreground">
        क्यों हज़ारों मरीज़ हम पर भरोसा करते हैं
      </h2>
      <BadgeList items={BADGES_A} />
      <MiniCallNudge />
      <BadgeList items={BADGES_B} />
      <MiniCallNudge />
    </section>
  );
}

function BadgeList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((t) => (
        <li
          key={t}
          className="flex items-start gap-2.5 rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/5"
        >
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-green text-white">
            <Check size={14} strokeWidth={3} />
          </span>
          <span className="text-[14px] font-semibold leading-snug text-foreground">
            {t}
          </span>
        </li>
      ))}
    </ul>
  );
}

function MiniCallNudge() {
  return (
    <a
      href={TEL}
      className="my-3 flex items-center justify-between gap-2 rounded-xl bg-white p-3 shadow-sm ring-1 ring-brand-green/30"
    >
      <span className="flex items-center gap-2 text-[13.5px] font-bold text-foreground">
        <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-brand-green" />
        Dr. Iqbal अभी ऑनलाइन हैं
      </span>
      <span className="rounded-full bg-gradient-to-r from-[color:var(--brand-blue)] to-[color:var(--brand-blue-2)] px-3 py-1.5 text-[12px] font-bold text-white">
        अभी कॉल करें
      </span>
    </a>
  );
}

/* ---------------- Problem Grid ---------------- */

const PROBLEM_CARDS = [
  {
    t: "शुक्राणु की कमी",
    en: "Low Sperm Count",
    d: "टेस्टिकल्स में दर्द, सूजन, हार्मोन असामान्यता",
  },
  {
    t: "स्तंभनदोष / नपुंसकता",
    en: "Erectile Dysfunction",
    d: "इरेक्शन बनाए रखने में असमर्थता",
  },
  {
    t: "स्वप्नदोष",
    en: "Nightfall",
    d: "गीले सपने की समस्या",
  },
  {
    t: "शीघ्रपतन",
    en: "Premature Ejaculation",
    d: "अपेक्षा से जल्दी स्खलन",
  },
  {
    t: "प्रोस्टेट और मूत्राशय",
    en: "Prostate & Urinary Bladder",
    d: "मूत्र संबंधी परेशानी, जलन, बार-बार पेशाब",
  },
  {
    t: "धातरोग",
    en: "Spermatorrhoea",
    d: "पेशाब के साथ धातु निकलना, कमज़ोरी",
  },
];

function ProblemGrid() {
  const rows: (typeof PROBLEM_CARDS)[] = [];
  for (let i = 0; i < PROBLEM_CARDS.length; i += 2) {
    rows.push(PROBLEM_CARDS.slice(i, i + 2));
  }
  return (
    <section id="problems" className="bg-white px-3 py-6">
      <h2 className="mb-4 text-center text-lg font-black text-foreground">
        हम किन रोगों का इलाज करते हैं?
      </h2>
      {rows.map((row, i) => (
        <div key={i}>
          <div className="mb-3 grid grid-cols-2 gap-2.5">
            {row.map((c) => (
              <div
                key={c.t}
                className="flex flex-col rounded-xl border border-border bg-section-alt p-3"
              >
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand-orange/10 text-brand-orange">
                  <Stethoscope size={18} />
                </div>
                <h3 className="mt-2 text-[13.5px] font-black leading-tight text-foreground">
                  {c.t}
                </h3>
                <p className="text-[10.5px] font-semibold uppercase tracking-wide text-brand-orange">
                  {c.en}
                </p>
                <p className="mt-1 text-[11.5px] leading-snug text-muted-foreground">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
          <MiniCallNudge />
        </div>
      ))}
    </section>
  );
}

/* ---------------- Department Banner ---------------- */

function DepartmentBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[color:var(--brand-purple)] via-[#5b21b6] to-[color:var(--brand-teal)] px-4 py-7 text-white">
      <div className="text-center">
        <p className="text-[11px] font-bold uppercase tracking-widest text-white/70">
          Introducing
        </p>
        <h2 className="mt-1 text-xl font-black leading-tight">
          HOMMED Men's Wellness Department
        </h2>
      </div>
      <div className="mx-auto mt-5 w-fit">
        <div className="relative">
          <div className="absolute -inset-2 rounded-full bg-white/20 blur-xl" />
          <img
            src={drIqbalImg}
            alt="Dr. Iqbal Quasim"
            width={240}
            height={240}
            className="relative h-40 w-40 rounded-full object-cover ring-4 ring-white/70"
          />
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-[15px] font-black">Dr. Iqbal Quasim</p>
        <p className="mx-auto mt-1 max-w-[320px] text-[12px] font-medium text-white/85">
          Chief Homoeopathic Consultant &amp; Founder | BHMS | 10+ Years
          Experience
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
            className="rounded-full bg-white/15 px-3 py-1.5 text-[11.5px] font-semibold ring-1 ring-white/25 backdrop-blur"
          >
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Process Steps ---------------- */

const STEPS = [
  {
    t: "Call / WhatsApp करें",
    d: `${PHONE_DISPLAY} पर सम्पर्क करें`,
  },
  {
    t: "Appointment fix करें",
    d: "Civil Lines clinic या Online — अपनी सुविधा अनुसार",
  },
  {
    t: "Dr. Iqbal personally केस देखेंगे",
    d: "आपके symptoms, history को ध्यान से समझेंगे",
  },
  {
    t: "दवाएं घर तक डिलीवर",
    d: "पूरी गोपनीयता के साथ + follow-up भी",
  },
];

function ProcessSteps() {
  return (
    <section id="process" className="bg-section-alt px-4 py-6">
      <h2 className="mb-5 text-center text-lg font-black text-foreground">
        हमारा प्लान कैसे काम करता है?
      </h2>
      <ol className="relative space-y-3">
        {STEPS.map((s, i) => (
          <li
            key={s.t}
            className="flex items-start gap-3 rounded-xl bg-white p-3.5 shadow-sm ring-1 ring-black/5"
          >
            <div className="relative">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-orange font-black text-white">
                {i + 1}
              </div>
              <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-brand-green text-white ring-2 ring-white">
                <Check size={10} strokeWidth={3} />
              </span>
            </div>
            <div className="min-w-0">
              <h3 className="text-[14.5px] font-black text-foreground">
                Step {i + 1}: {s.t}
              </h3>
              <p className="mt-0.5 text-[12.5px] text-muted-foreground">
                {s.d}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <a
        href={TEL}
        className="mt-4 flex items-center justify-center gap-2 rounded-full bg-brand-orange px-4 py-3 text-[14px] font-black text-white shadow-md"
      >
        <Phone size={16} /> अभी शुरुआत करें
      </a>
    </section>
  );
}

/* ---------------- Why HOMMED ---------------- */

const WHY = [
  { icon: ShieldCheck, t: "पूर्ण रूप से गुप्त", d: "Privacy first — कोई पहचान लीक नहीं" },
  { icon: Truck, t: "घर तक डिलीवरी", d: "पूरे भारत में गोपनीय पैकिंग" },
  { icon: Stethoscope, t: "ऑनलाइन एवं क्लिनिक परामर्श", d: "आपकी सुविधा अनुसार" },
  { icon: Leaf, t: "कोई केमिकल नहीं, कोई साइड इफेक्ट नहीं", d: "प्राकृतिक होम्योपैथी" },
  { icon: Award, t: "10+ साल अनुभव, 10,000+ मरीज ठीक", d: "प्रमाणित परिणाम" },
];

function WhyHommed() {
  return (
    <section className="bg-white px-3 py-6">
      <h2 className="mb-4 text-center text-lg font-black text-foreground">
        इलाज के लिए HOMMED क्यों चुनें?
      </h2>
      <div className="space-y-2.5">
        {WHY.map((w) => (
          <div
            key={w.t}
            className="flex items-start gap-3 rounded-xl border border-border bg-section-alt p-3.5"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-orange/10 text-brand-orange">
              <w.icon size={22} />
            </div>
            <div className="min-w-0">
              <h3 className="text-[14.5px] font-black text-foreground">{w.t}</h3>
              <p className="mt-0.5 text-[12.5px] text-muted-foreground">{w.d}</p>
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
      <h2 className="mb-4 text-center text-lg font-black text-foreground">
        आपके डॉक्टर से मिलिए
      </h2>
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
        <img
          src={drCertsImg}
          alt="Dr. Iqbal Quasim with framed certificates"
          width={1100}
          height={900}
          loading="lazy"
          className="h-52 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-black text-foreground">
            Dr. Iqbal Quasim
          </h3>
          <p className="mt-0.5 text-[12.5px] font-semibold text-muted-foreground">
            BHMS (Bachelor of Homeopathic Medicine &amp; Surgery)
            <br />
            10+ Years Clinical Experience
          </p>
          <div className="mt-3 flex items-start gap-2 rounded-xl bg-[color:var(--brand-yellow)] p-3 ring-1 ring-black/5">
            <Award size={18} className="mt-0.5 shrink-0 text-brand-orange" />
            <p className="text-[13px] font-bold leading-snug text-foreground">
              Homoeopathic Icon Award 2025
              <span className="block text-[11.5px] font-semibold text-muted-foreground">
                KGMU, Lucknow द्वारा सम्मानित
              </span>
            </p>
          </div>
          <a
            href="#lead"
            className="mt-3 inline-flex text-[13px] font-bold text-brand-blue underline"
          >
            और पढ़ें…
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trust Section ---------------- */

const STATS = [
  { n: "10,000+", l: "संतुष्ट मरीज" },
  { n: "4.9★", l: "Google Rating" },
  { n: "98%", l: "Permanent Relief" },
  { n: "10+ साल", l: "क्लिनिकल अनुभव" },
];

function TrustSection() {
  return (
    <section className="bg-white px-3 py-6">
      <h2 className="text-center text-lg font-black text-foreground">
        10,000+ मरीजों का भरोसा
      </h2>
      <p className="mt-1 text-center text-[12.5px] text-muted-foreground">
        कानपुर से शुरू, पूरे भारत तक पहुँच
      </p>

      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {STATS.map((s) => (
          <div
            key={s.l}
            className="rounded-xl bg-section-alt p-3.5 text-center ring-1 ring-black/5"
          >
            <p className="text-xl font-black text-brand-orange">{s.n}</p>
            <p className="mt-0.5 text-[11.5px] font-semibold text-muted-foreground">
              {s.l}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-white to-section-alt p-4 shadow-sm ring-1 ring-black/5">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white ring-1 ring-border">
          <span className="text-lg font-black">G</span>
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1 text-brand-orange">
            <span className="text-base font-black text-foreground">4.9</span>
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <p className="text-[11.5px] font-semibold text-muted-foreground">
            Google पर 1,200+ रिव्यू
          </p>
        </div>
      </div>

      <p className="mt-4 rounded-xl border border-dashed border-border bg-section-alt p-3 text-center text-[11.5px] font-semibold text-muted-foreground">
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
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-orange text-white font-black">
          H
        </span>
        <span className="text-lg font-black">HOMMED</span>
      </div>
      <p className="mt-2 text-[12.5px] font-semibold text-muted-foreground">
        Men's Wellness Department — Dr. Iqbal Quasim
      </p>

      <div className="mt-4 space-y-3">
        <div className="rounded-xl bg-white p-3 ring-1 ring-black/5">
          <p className="flex items-center gap-1.5 text-[12px] font-bold text-brand-orange">
            <MapPin size={13} /> Civil Lines Branch
          </p>
          <p className="mt-1 text-[13px] font-semibold text-foreground">
            Civil Lines, Kanpur, Uttar Pradesh – 208001
          </p>
        </div>
        <div className="rounded-xl bg-white p-3 ring-1 ring-black/5">
          <p className="flex items-center gap-1.5 text-[12px] font-bold text-brand-orange">
            <MapPin size={13} /> Jajmau Branch
          </p>
          <p className="mt-1 text-[13px] font-semibold text-foreground">
            Jajmau, Kanpur, Uttar Pradesh
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-[13px]">
        <a
          href={TEL}
          className="flex items-center gap-2 font-bold text-foreground"
        >
          <Phone size={14} className="text-brand-blue" /> {PHONE_DISPLAY}
        </a>
        <a
          href="mailto:info@hommed.in"
          className="flex items-center gap-2 font-semibold text-foreground"
        >
          <Mail size={14} className="text-brand-blue" /> info@hommed.in
        </a>
        <p className="flex items-center gap-2 font-semibold text-muted-foreground">
          <Clock size={14} className="text-brand-blue" /> Mon–Sat · 10AM–2PM
          &amp; 5PM–8PM
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-3 text-[11.5px] text-muted-foreground">
        <a href="#" className="font-semibold underline">
          Privacy Policy
        </a>
        <span>© {new Date().getFullYear()} HOMMED</span>
      </div>
    </footer>
  );
}
