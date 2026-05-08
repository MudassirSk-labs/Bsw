"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faClock,
  faBox,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import FadeInView from "@/components/FadeInView";
import { useT } from "@/i18n/context";

const faqs = [
  {
    id: "restock",
    icon: faClock,
    video: "/videos/faq-restock.mp4",
    poster: "/videos/bsw-restock.jpg",
  },
  {
    id: "products",
    icon: faBox,
    video: "/videos/faq-products.mp4",
    poster: "/videos/bsw-products.jpg",
  },
  {
    id: "different",
    icon: faStar,
    video: "/videos/faq-different.mp4",
    poster: "/videos/bsw-different.jpg",
  },
];

export default function FAQPage() {
  const t = useT();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#253998]/5 to-[#f24f26]/5" />
        <FadeInView className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            {t("faq.hero.title")}{" "}
            <span className="text-[var(--accent)]">{t("faq.hero.highlight")}</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t("faq.hero.subtitle")}
          </p>
        </FadeInView>
      </section>

      {/* FAQ Items */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {faqs.map((item) => (
            <FadeInView key={item.id}>
              <div className="glass-card rounded-2xl overflow-hidden">
                {/* Video */}
                <div className="relative aspect-[4/5] bg-slate-100">
                  <video
                    className="w-full h-full object-cover"
                    poster={item.poster}
                    preload="metadata"
                    controls
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                </div>

                {/* Question Toggle */}
                <button
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  className="w-full p-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="text-[var(--accent)] text-sm"
                      />
                    </div>
                    <h3 className="font-semibold text-slate-800 flex-1">
                      {t(`faq.${item.id}.q`)}
                    </h3>
                    <FontAwesomeIcon
                      icon={openId === item.id ? faChevronUp : faChevronDown}
                      className="text-slate-400 text-xs transition-transform"
                    />
                  </div>
                </button>

                {/* Answer */}
                {openId === item.id && (
                  <div className="px-5 pb-5 pt-0 border-t border-slate-100">
                    <p className="text-slate-600 leading-relaxed mt-3">
                      {t(`faq.${item.id}.a`)}
                    </p>
                  </div>
                )}
              </div>
            </FadeInView>
          ))}
        </div>
      </section>
    </main>
  );
}
