"use client";

import { useState, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faPhone, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import FadeInView from "./FadeInView";

export default function NewsletterSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="relative py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <div className="glass-strong rounded-2xl p-16">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-3xl" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">You&apos;re In! 🎉</h2>
              <p className="text-slate-600 text-lg">Thanks for signing up, {firstName}! You&apos;ll now receive exclusive BSW deals and alerts straight to your inbox.</p>
            </div>
          </FadeInView>
        </div>
      </section>
    );
  }

  return (
    <FadeInView>
      <section className="relative py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="orb w-[400px] h-[400px] bg-[#253998] -left-40 top-0 opacity-[0.08]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-2xl p-8 md:p-14">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Get Exclusive <span className="text-gradient">BSW Deals</span>
              </h2>
              <p className="text-slate-600 text-lg">Sign up for our marketing campaign &amp; <strong className="text-slate-900">SAVE!!</strong></p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-500 mb-1.5"><FontAwesomeIcon icon={faUser} className="mr-1.5 text-[var(--accent)]" />First Name <span className="text-[var(--accent)]">*</span></label>
                  <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="John" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all" />
                </div>
                <div>
                  <label className="block text-sm text-slate-500 mb-1.5"><FontAwesomeIcon icon={faUser} className="mr-1.5 text-[var(--accent)]" />Last Name <span className="text-[var(--accent)]">*</span></label>
                  <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Doe" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-500 mb-1.5"><FontAwesomeIcon icon={faEnvelope} className="mr-1.5 text-[var(--accent)]" />Email <span className="text-[var(--accent)]">*</span></label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all" />
              </div>
              <div>
                <label className="block text-sm text-slate-500 mb-1.5"><FontAwesomeIcon icon={faPhone} className="mr-1.5 text-[var(--accent)]" />Phone Number <span className="text-[var(--accent)]">*</span></label>
                <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(901)-000-0000" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all" />
              </div>

              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} className="mt-1 w-4 h-4 rounded border-slate-300 accent-[var(--accent)]" required />
                  <span className="text-slate-500 text-xs leading-relaxed group-hover:text-slate-700 transition-colors">By checking this box and clicking &ldquo;SIGN UP AND SAVE&rdquo; you consent to receive marketing text messages for notifications and alerts from BSW Outlet. Reply STOP to opt out. Reply HELP for help. Message and data rates may apply. Message frequency may vary.</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 accent-[var(--accent)]" />
                  <span className="text-slate-500 text-xs leading-relaxed group-hover:text-slate-700 transition-colors">I agree to the <a href="/terms" className="text-[var(--accent)] hover:underline">Terms and Conditions</a> and <a href="/privacy" className="text-[var(--accent)] hover:underline">Privacy Policy</a>.</span>
                </label>
              </div>

              <button type="submit" disabled={loading || !agreed} className="btn-primary w-full justify-center text-lg disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? (
                  <span className="flex items-center gap-2"><svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Signing Up...</span>
                ) : (<><FontAwesomeIcon icon={faEnvelope} /> SIGN UP AND SAVE</>)}
              </button>
            </form>
          </div>
        </div>
      </section>
    </FadeInView>
  );
}
