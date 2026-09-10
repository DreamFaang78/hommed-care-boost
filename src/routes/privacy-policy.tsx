import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Shield,
  Phone,
  Mail,
  Lock,
  Eye,
  Database,
  UserCheck,
  Trash2,
  Bell,
  Globe,
  ChevronRight,
} from "lucide-react";

import hommedLogoImg from "@/assets/hommed-logo.png";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Privacy Policy — HOMMED | Dr. Iqbal Quasim, Kanpur" },
      {
        name: "description",
        content:
          "HOMMED ki gopaniyata niti — janein ki hum aapki vyaktigat jankari kaise ektra, upayog aur surakshit rakhte hain.",
      },
    ],
  }),
});

const TEL = "tel:+916306988550";
const PHONE_DISPLAY = "+91 63069 88550";
const EFFECTIVE_DATE = "10 September 2025";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] font-hindi text-[#1C1C1E]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#E2DDD6] bg-[#1B4B66] shadow-sm">
        <div className="mx-auto flex max-w-[500px] items-center justify-between px-4 py-2.5">
          <Link to="/" className="flex items-center gap-2">
            <img src={hommedLogoImg} alt="HomMed" className="h-9 w-auto rounded-md bg-white p-0.5" />
          </Link>
          <span className="text-[12px] font-bold text-white/70">Privacy Policy</span>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-[#1B4B66] via-[#1a5276] to-[#154360] px-4 pb-8 pt-8 text-white">
        <div className="mx-auto max-w-[500px]">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
            <Shield size={26} className="text-emerald-400" />
          </div>
          <h1 className="text-[24px] font-black leading-tight">Privacy Policy</h1>
          <p className="mt-1.5 text-[13px] font-medium text-white/75">HOMMED — Dr. Iqbal Quasim's Homoeopathic Centre</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11.5px] font-semibold text-white/85">
              Effective: {EFFECTIVE_DATE}
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-500/20 px-3 py-1 text-[11.5px] font-semibold text-emerald-200">
              DPDP Act 2023 Compliant
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[500px] space-y-4 px-4 py-6 pb-12">

        {/* Intro */}
        <section className="rounded-xl border border-[#E2DDD6] bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2.5 border-b border-[#F3EFE8] pb-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F3EFE8]">
              <Shield size={18} className="text-emerald-500" />
            </div>
            <h2 className="text-[15px] font-black text-[#1B4B66]">1. Introduction</h2>
          </div>
          <div className="space-y-3 text-[14px] leading-relaxed text-[#374151]">
            <p>HOMMED is a trusted homoeopathic health center in Kanpur, Uttar Pradesh, led by Dr. Iqbal Quasim (BHMS). Your privacy is paramount to us.</p>
            <p>This Privacy Policy explains how we collect, use, and protect your information when you visit <strong className="text-[#1B4B66]">https://kit.hommed.org</strong>, use our services, or contact us.</p>
            <p>By using our services, you agree to the terms of this Privacy Policy.</p>
          </div>
        </section>

        {/* Data Collected */}
        <section className="rounded-xl border border-[#E2DDD6] bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2.5 border-b border-[#F3EFE8] pb-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F3EFE8]">
              <Database size={18} className="text-blue-500" />
            </div>
            <h2 className="text-[15px] font-black text-[#1B4B66]">2. Information We Collect</h2>
          </div>
          <div className="space-y-4 text-[14px] leading-relaxed text-[#374151]">
            <p className="font-semibold text-[#1B4B66]">2.1 Information you provide:</p>
            <ul className="space-y-2 pl-4">
              {["Full Name","Mobile Number","Health-related information — symptoms or problem description","Duration of the problem","Medical consultation details"].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-semibold text-[#1B4B66]">2.2 Automatically collected technical information:</p>
            <ul className="space-y-2 pl-4">
              {["IP Address","Browser type and version","Device type (mobile/desktop)","Pages visited and time/date","Usage data via Cookies, Facebook Pixel, and Microsoft Clarity"].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight size={14} className="mt-0.5 shrink-0 text-blue-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How we use */}
        <section className="rounded-xl border border-[#E2DDD6] bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2.5 border-b border-[#F3EFE8] pb-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F3EFE8]">
              <Eye size={18} className="text-violet-500" />
            </div>
            <h2 className="text-[15px] font-black text-[#1B4B66]">3. How We Use Your Information</h2>
          </div>
          <div className="space-y-3 text-[14px] leading-relaxed text-[#374151]">
            <p>We use your information for the following purposes:</p>
            <ul className="space-y-2 pl-4">
              {["To provide medical consultations or appointments","To create a suitable treatment plan based on your problem","To improve our services","To send important health information (only with your consent)","To ensure technical functionality of the website","To comply with legal obligations"].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight size={14} className="mt-0.5 shrink-0 text-violet-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
              <p className="text-[13px] font-semibold text-emerald-800">We never sell or rent your health information to third parties.</p>
            </div>
          </div>
        </section>

        {/* Sharing */}
        <section className="rounded-xl border border-[#E2DDD6] bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2.5 border-b border-[#F3EFE8] pb-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F3EFE8]">
              <UserCheck size={18} className="text-orange-500" />
            </div>
            <h2 className="text-[15px] font-black text-[#1B4B66]">4. Information Sharing</h2>
          </div>
          <div className="space-y-3 text-[14px] leading-relaxed text-[#374151]">
            <p>HOMMED never sells your personal information for commercial purposes. We may only share it in the following circumstances:</p>
            <ul className="space-y-2 pl-4">
              {[
                { t: "Service Providers:", d: "Trusted technical partners (e.g., web hosting, analytics) who help operate our services. All are bound by confidentiality agreements." },
                { t: "Legal Requirement:", d: "If required by law, court order, or government authority." },
                { t: "Medical Emergency:", d: "If your safety or that of another person is at risk." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight size={14} className="mt-0.5 shrink-0 text-orange-400" />
                  <span><strong>{item.t}</strong> {item.d}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cookies */}
        <section className="rounded-xl border border-[#E2DDD6] bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2.5 border-b border-[#F3EFE8] pb-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F3EFE8]">
              <Globe size={18} className="text-sky-500" />
            </div>
            <h2 className="text-[15px] font-black text-[#1B4B66]">5. Cookies & Tracking Technologies</h2>
          </div>
          <div className="space-y-3 text-[14px] leading-relaxed text-[#374151]">
            <p>Our website uses the following tracking technologies:</p>
            <div className="space-y-3">
              {[
                { name: "Facebook Pixel", colorBg: "bg-blue-50", colorBorder: "border-blue-200", colorTitle: "text-blue-800", desc: "To measure ad performance and show relevant ads. You can opt-out via Facebook Ad Preferences." },
                { name: "Microsoft Clarity", colorBg: "bg-sky-50", colorBorder: "border-sky-200", colorTitle: "text-sky-800", desc: "Session recordings and heatmaps to improve user experience. No personally identifiable information is stored." },
                { name: "Analytics Cookies", colorBg: "bg-violet-50", colorBorder: "border-violet-200", colorTitle: "text-violet-800", desc: "To understand website traffic and usage patterns." },
              ].map((c, i) => (
                <div key={i} className={`rounded-lg border p-3 ${c.colorBg} ${c.colorBorder}`}>
                  <p className={`text-[12px] font-black uppercase tracking-wide ${c.colorTitle}`}>{c.name}</p>
                  <p className="mt-1 text-[13px] text-[#374151]">{c.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-[#6B7280]">You can block or delete cookies in your browser settings, though some website features may be affected.</p>
          </div>
        </section>

        {/* Security */}
        <section className="rounded-xl border border-[#E2DDD6] bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2.5 border-b border-[#F3EFE8] pb-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F3EFE8]">
              <Lock size={18} className="text-red-500" />
            </div>
            <h2 className="text-[15px] font-black text-[#1B4B66]">6. Data Security</h2>
          </div>
          <div className="space-y-3 text-[14px] leading-relaxed text-[#374151]">
            <p>The security of your information is our highest priority. We implement:</p>
            <ul className="space-y-2 pl-4">
              {["SSL/TLS encryption — all data transfer via HTTPS","Restricted access — only authorized staff can view your information","Regular security audits and updates","Sensitive health data stored under special security protocols","Data minimization — we collect only what is necessary"].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight size={14} className="mt-0.5 shrink-0 text-red-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
              <p className="text-[13px] text-amber-800">No internet transmission can be guaranteed 100% secure. If you suspect a security breach, please contact us immediately.</p>
            </div>
          </div>
        </section>

        {/* Retention */}
        <section className="rounded-xl border border-[#E2DDD6] bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2.5 border-b border-[#F3EFE8] pb-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F3EFE8]">
              <Database size={18} className="text-teal-500" />
            </div>
            <h2 className="text-[15px] font-black text-[#1B4B66]">7. Data Retention</h2>
          </div>
          <div className="space-y-3 text-[14px] leading-relaxed text-[#374151]">
            <ul className="space-y-2 pl-4">
              {["Patient records: 7 years after treatment ends (per Indian medical record standards)","Contact form data: 2 years","Analytics data: 26 months","On your request: data can be deleted at any time (subject to legal obligations)"].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight size={14} className="mt-0.5 shrink-0 text-teal-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Your Rights */}
        <section className="rounded-xl border border-[#E2DDD6] bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2.5 border-b border-[#F3EFE8] pb-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F3EFE8]">
              <UserCheck size={18} className="text-indigo-500" />
            </div>
            <h2 className="text-[15px] font-black text-[#1B4B66]">8. Your Rights (DPDP Act 2023)</h2>
          </div>
          <div className="space-y-3 text-[14px] leading-relaxed text-[#374151]">
            <p>Under the Digital Personal Data Protection Act 2023 and the IT Act, you have the following rights:</p>
            <div className="grid gap-2">
              {[
                { right: "Right to Access", desc: "Know what data we hold about you" },
                { right: "Right to Correction", desc: "Correct inaccurate information" },
                { right: "Right to Erasure", desc: "Request deletion of your data (subject to legal limits)" },
                { right: "Right to Withdraw Consent", desc: "Opt out of marketing communications at any time" },
                { right: "Right to Grievance Redressal", desc: "File a complaint with MEITY or the relevant authority" },
              ].map((item, i) => (
                <div key={i} className="rounded-lg border border-indigo-100 bg-indigo-50 p-3">
                  <p className="text-[13px] font-bold text-indigo-800">{item.right}</p>
                  <p className="mt-0.5 text-[12.5px] text-[#6B7280]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Children */}
        <section className="rounded-xl border border-[#E2DDD6] bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2.5 border-b border-[#F3EFE8] pb-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F3EFE8]">
              <Shield size={18} className="text-pink-500" />
            </div>
            <h2 className="text-[15px] font-black text-[#1B4B66]">9. Children's Privacy</h2>
          </div>
          <div className="space-y-3 text-[14px] leading-relaxed text-[#374151]">
            <p>Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children under 18.</p>
            <p>If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately — we will promptly delete that data.</p>
          </div>
        </section>

        {/* Data Deletion */}
        <section className="rounded-xl border border-[#E2DDD6] bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2.5 border-b border-[#F3EFE8] pb-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F3EFE8]">
              <Trash2 size={18} className="text-red-500" />
            </div>
            <h2 className="text-[15px] font-black text-[#1B4B66]">10. Data Deletion Request</h2>
          </div>
          <div className="space-y-3 text-[14px] leading-relaxed text-[#374151]">
            <p>You may request deletion of your personal information at any time. We will act on your request within 30 business days.</p>
            <p>Note: Some information may be retained due to legal obligations for a specified period.</p>
            <div className="rounded-lg border border-[#1B4B66]/20 bg-[#1B4B66]/5 p-3">
              <p className="text-[13px] font-semibold text-[#1B4B66]">To request data deletion:</p>
              <p className="mt-1 text-[13px] text-[#374151]">📧 info@hommed.in — Subject: "Data Deletion Request"</p>
            </div>
          </div>
        </section>

        {/* Policy Updates */}
        <section className="rounded-xl border border-[#E2DDD6] bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2.5 border-b border-[#F3EFE8] pb-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F3EFE8]">
              <Bell size={18} className="text-amber-500" />
            </div>
            <h2 className="text-[15px] font-black text-[#1B4B66]">11. Changes to This Policy</h2>
          </div>
          <div className="space-y-3 text-[14px] leading-relaxed text-[#374151]">
            <p>We may update this Privacy Policy from time to time. In case of significant changes, we will:</p>
            <ul className="space-y-2 pl-4">
              {["Post a clear notice on our website","Update the 'Effective Date' on this page","Notify registered users if changes are material"].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight size={14} className="mt-0.5 shrink-0 text-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>Continued use of our services after a policy update constitutes acceptance of the revised policy.</p>
          </div>
        </section>

        {/* Contact */}
        <section className="rounded-xl border border-[#1B4B66]/20 bg-[#1B4B66] p-5 text-white">
          <div className="mb-4 flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
              <Mail size={18} className="text-emerald-300" />
            </div>
            <h2 className="text-[15px] font-black">12. Contact Us</h2>
          </div>
          <p className="mb-4 text-[14px] leading-relaxed text-white/85">For any questions, complaints, or data requests related to this Privacy Policy, please contact us:</p>
          <div className="space-y-3">
            <div className="rounded-lg bg-white/10 p-3">
              <p className="text-[12px] font-bold uppercase tracking-wide text-white/60">Clinic Address</p>
              <p className="mt-1 text-[13.5px] font-semibold">HOMMED — Dr. Iqbal Quasim's Homoeopathic Centre</p>
              <p className="text-[13px] text-white/80">Civil Lines, Kanpur, Uttar Pradesh – 208001</p>
            </div>
            <a href={TEL} className="flex items-center gap-3 rounded-lg bg-emerald-500 p-3 transition-opacity hover:opacity-90">
              <Phone size={17} strokeWidth={2.3} />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wide text-white/70">Phone / WhatsApp</p>
                <p className="text-[14px] font-extrabold">{PHONE_DISPLAY}</p>
              </div>
            </a>
            <a href="mailto:info@hommed.in" className="flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 p-3 transition-colors hover:bg-white/20">
              <Mail size={17} strokeWidth={2.3} />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wide text-white/70">Email</p>
                <p className="text-[14px] font-extrabold">info@hommed.in</p>
              </div>
            </a>
          </div>
        </section>

        {/* Back to home */}
        <div className="pb-6 text-center">
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-[#1B4B66]/25 bg-white px-6 py-2.5 text-[14px] font-bold text-[#1B4B66] shadow-sm transition-all hover:bg-[#1B4B66] hover:text-white">
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}
