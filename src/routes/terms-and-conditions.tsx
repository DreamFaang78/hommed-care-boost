import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, FileText, ChevronRight } from "lucide-react";
import hommedLogoImg from "@/assets/hommed-logo.png";

export const Route = createFileRoute("/terms-and-conditions")({
  component: TermsAndConditions,
  head: () => ({
    meta: [
      { title: "Terms & Conditions — HOMMED | Dr. Iqbal Quasim" },
      {
        name: "description",
        content: "HOMMED ki niyam va shartein (Terms & Conditions) — hamari sevaon ka upayog karne ke niyam.",
      },
    ],
  }),
});

const TEL = "tel:+918934934708";
const PHONE_DISPLAY = "+91 89349 34708";

const trackContactEvent = () => {
  if (typeof window !== "undefined" && typeof (window as any).fbq !== "undefined") {
    (window as any).fbq("track", "Contact");
  }
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] font-hindi text-[#1C1C1E]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#E2DDD6] bg-[#1B4B66] shadow-sm">
        <div className="mx-auto flex max-w-[600px] items-center justify-between px-4 py-2.5">
          <Link to="/" className="flex items-center gap-2">
            <img src={hommedLogoImg} alt="HomMed" className="h-9 w-auto rounded-md bg-white p-0.5" />
          </Link>
          <span className="text-[12px] font-bold text-white/70">Terms &amp; Conditions</span>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-[#1B4B66] via-[#1a5276] to-[#154360] px-4 py-8 text-white">
        <div className="mx-auto max-w-[600px] text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-xs">
            <FileText className="h-6 w-6 text-[#F59E0B]" />
          </div>
          <h1 className="text-[22px] font-black tracking-tight">नियम एवं शर्तें (Terms &amp; Conditions)</h1>
          <p className="mt-1.5 text-[13px] font-medium text-white/80">
            HOMMED · Dr. Iqbal Quasim's Homoeopathic Centre
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-[600px] px-4 py-8 space-y-6">
        <div className="rounded-xl border border-[#E2DDD6] bg-white p-5 shadow-xs space-y-4">
          <h2 className="text-[16px] font-bold text-[#1B4B66]">1. सेवा स्वीकृति (Acceptance of Terms)</h2>
          <p className="text-[13.5px] leading-relaxed text-slate-600">
            HOMMED की वेबसाइट या ऑनलाइन परामर्श सेवा का उपयोग करके आप इन नियमों व शर्तों को स्वीकार करते हैं। यदि आप किसी नियम से सहमत नहीं हैं, तो कृपया सेवा का उपयोग न करें।
          </p>
        </div>

        <div className="rounded-xl border border-[#E2DDD6] bg-white p-5 shadow-xs space-y-4">
          <h2 className="text-[16px] font-bold text-[#1B4B66]">2. चिकित्सा परामर्श व डिस्क्लेमर (Medical Disclaimer)</h2>
          <p className="text-[13.5px] leading-relaxed text-slate-600">
            ऑनलाइन परामर्श अनुभवी विशेषज्ञों द्वारा रोगी द्वारा दी गई जानकारी के आधार पर प्रदान किया जाता है। आपातकालीन स्थिति में रोगी को निकटतम अस्पताल में संपर्क करने की सलाह दी जाती है।
          </p>
        </div>

        <div className="rounded-xl border border-[#E2DDD6] bg-white p-5 shadow-xs space-y-4">
          <h2 className="text-[16px] font-bold text-[#1B4B66]">3. गोपनीयता व सुरक्षा (Confidentiality)</h2>
          <p className="text-[13.5px] leading-relaxed text-slate-600">
            मरीज़ की सभी जानकारी एवं मेडिकल रिकॉर्ड्स पूर्णतः सुरक्षित रखे जाते हैं और किसी भी तीसरे पक्ष के साथ साझा नहीं किए जाते हैं।
          </p>
        </div>

        <div className="rounded-xl border border-[#E2DDD6] bg-white p-5 shadow-xs space-y-4">
          <h2 className="text-[16px] font-bold text-[#1B4B66]">4. संपर्क एवं सहायता</h2>
          <p className="text-[13.5px] leading-relaxed text-slate-600">
            किसी भी प्रश्न या जानकारी के लिए हमारे विशेषज्ञों से संपर्क करें:
          </p>
          <div className="flex flex-col gap-2 pt-1 text-[13px] font-bold text-[#1B4B66]">
            <a href={TEL} onClick={trackContactEvent} className="flex items-center gap-2">
              <Phone size={14} className="text-[#C25E26]" /> {PHONE_DISPLAY}
            </a>
            <a href="mailto:info@hommed.in" className="flex items-center gap-2">
              <Mail size={14} className="text-[#C25E26]" /> info@hommed.in
            </a>
          </div>
        </div>

        <div className="pt-4 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#1B4B66] px-6 py-2.5 text-[13px] font-bold text-white shadow-xs transition-opacity hover:opacity-90"
          >
            <span>मुख्य पृष्ठ पर लौटें</span>
            <ChevronRight size={14} />
          </Link>
        </div>
      </main>
    </div>
  );
}
