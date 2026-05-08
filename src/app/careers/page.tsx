"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faFileUpload,
  faPaperPlane,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import FadeInView from "@/components/FadeInView";
import { useT } from "@/i18n/context";

const values = [
  { id: "inspirational", icon: "⚡" },
  { id: "disciplined", icon: "⚙️" },
  { id: "accountability", icon: "🤝" },
  { id: "transparency", icon: "📖" },
  { id: "aligned", icon: "📌" },
  { id: "results", icon: "🎯" },
];

export default function CareersPage() {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-[#f24f26]/5" />
        <FadeInView className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            {t("careers.hero.title")}{" "}
            <span className="text-[var(--accent)]">{t("careers.hero.highlight")}</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t("careers.hero.subtitle")}
          </p>
        </FadeInView>
      </section>

      {/* Application Form + Values */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <FadeInView>
            <div className="glass-card rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-6xl text-green-500 mb-4"
                  />
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {t("careers.form.success")}
                  </h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      <FontAwesomeIcon icon={faUser} className="mr-2 text-[var(--accent)]" />
                      {t("careers.form.name")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none transition-all bg-white"
                      placeholder="👤 Full Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-[var(--accent)]" />
                      {t("careers.form.email")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none transition-all bg-white"
                      placeholder="📧 Email Address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      <FontAwesomeIcon icon={faPhone} className="mr-2 text-[var(--accent)]" />
                      {t("careers.form.phone")}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none transition-all bg-white"
                      placeholder="📱 (901)-000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      <FontAwesomeIcon icon={faFileUpload} className="mr-2 text-[var(--accent)]" />
                      {t("careers.form.resume")}
                    </label>
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.txt"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[var(--accent)] file:text-white file:font-medium hover:file:bg-[var(--accent)]/90 text-slate-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      {t("careers.form.message")}
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none transition-all bg-white resize-none"
                      placeholder="💬 Tell us about yourself..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center text-base">
                    <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                    {t("careers.form.submit")}
                  </button>
                </form>
              )}
            </div>
          </FadeInView>

          {/* Values */}
          <FadeInView>
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                {t("careers.values.title")}
              </h2>
              <div className="space-y-4">
                {values.map((v, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="text-2xl">{v.icon}</div>
                    <div>
                      <h3 className="font-semibold text-slate-800">
                        {t(`careers.values.items.${i}.title`)}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {t(`careers.values.items.${i}.desc`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInView>
        </div>

        {/* CTA */}
        <FadeInView className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              {t("careers.cta.title")}
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              {t("careers.cta.subtitle")}
            </p>
            <a href="mailto:hr@bswoutlet.com" className="btn-primary text-base inline-flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              {t("careers.cta.btn")}
            </a>
          </div>
        </FadeInView>
      </section>
    </main>
  );
}
