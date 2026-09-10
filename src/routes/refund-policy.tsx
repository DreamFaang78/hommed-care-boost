import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, RotateCcw, ChevronRight } from "lucide-react";
import hommedLogoImg from "@/assets/hommed-logo.png";

export const Route = createFileRoute("/refund-policy")({
  component: RefundPolicy,
  head: () => ({
    meta: [
      { title: "Refund Policy — HOMMED | Dr. Iqbal Quasim" },
      {
        name: "description",
        content: "HOMMED ki vapsi niti (Refund & Cancellation Policy) — shulk va dava vapsi ke niyam.",
      },
    ],
  }),
});

const TEL = "tel:+916306988550";
const PHONE_DISPLAY = "+91 63069 88550";

const trackContactEvent = () => {
  if (typeof window !== "undefined" && typeof (window as any).fbq !== "undefined") {
    (window as any).fbq("track", "Contact");
  }
};

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] font-hindi text-[#1C1C1E]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#E2DDD6] bg-[#1B4B66] shadow-sm">
        <div className="mx-auto flex max-w-[600px] items-center justify-between px-4 py-2.5">
          <Link to="/" className="flex items-center gap-2">
            <img src={hommedLogoImg} alt="HomMed" className="h-9 w-auto rounded-md bg-white p-0.5" />
          </Link>
          <span className="text-[12px] font-bold text-white/70">Refund Policy</span>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-[#1B4B66] via-[#1a5276] to-[#154360] px-4 py-8 text-white">
        <div className="mx-auto max-w-[600px] text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-xs">
            <RotateCcw className="h-6 w-6 text-[#F59E0B]" />
          </div>
          <h1 className="text-[22px] font-black tracking-tight">रिफंड एवं वापसी नीति (Refund Policy)</h1>
          <p className="mt-1.5 text-[13px] font-medium text-white/80">
            HOMMED · Dr. Iqbal Quasim's Homoeopathic Centre
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-[600px] px-4 py-8 space-y-6">
        <div className="rounded-xl border border-[#E2DDD6] bg-white p-5 shadow-xs space-y-4">
          <h2 className="text-[16px] font-bold text-[#1B4B66]">1. परामर्श शुल्क (Consultation Fee Refund)</h2>
          <p className="text-[13.5px] leading-relaxed text-slate-600">
            यदि आप परामर्श का समय निर्धारित होने से कम से कम 2 घंटे पूर्व अपॉइंटमेंट रद्द करते हैं, तो आपका परामर्श शुल्क 100% रिफंड कर दिया जाएगा।
          </p>
        </div>

        <div className="rounded-xl border border-[#E2DDD6] bg-white p-5 shadow-xs space-y-4">
          <h2 className="text-[16px] font-bold text-[#1B4B66]">2. दवा ऑर्डर एवं डिलीवरी (Medicine Order Cancellation)</h2>
          <p className="text-[13.5px] leading-relaxed text-slate-600">
            दवा का पैकेट डिस्पैच होने से पहले रद्द करने पर पूर्ण राशि वापस की जाएगी। डिस्पैच के पश्चात व्यक्तिगत होम्योपैथिक दवाओं का दोबारा उपयोग सुरक्षा कारणों से संभव न होने के कारण दवा रिफंड नहीं की जाती है।
          </p>
        </div>

        <div className="rounded-xl border border-[#E2DDD6] bg-white p-5 shadow-xs space-y-4">
          <h2 className="text-[16px] font-bold text-[#1B4B66]">3. क्षतिग्रस्त पार्सल (Damaged Parcel Replacement)</h2>
          <p className="text-[13.5px] leading-relaxed text-slate-600">
            यदि डिलीवरी के दौरान पैकेट क्षतिग्रस्त अवस्था में प्राप्त होता है, तो 48 घंटे के भीतर हमारी सहायता टीम को सूचित करने पर निःशुल्क नई दवाएं भेजी जाएंगी।
          </p>
        </div>

        <div className="rounded-xl border border-[#E2DDD6] bg-white p-5 shadow-xs space-y-4">
          <h2 className="text-[16px] font-bold text-[#1B4B66]">4. संपर्क करें</h2>
          <p className="text-[13.5px] leading-relaxed text-slate-600">
            रिफंड या ऑर्डर संबंधी सहायता के लिए हमारे विशेषज्ञों से संपर्क करें:
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
