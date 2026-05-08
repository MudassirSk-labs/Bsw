"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt, faGear, faHandshake, faEye, faBullseye, faTrophy, faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import FadeInView, { StaggerContainer, StaggerItem } from "@/components/FadeInView";
import { useT } from "@/i18n/context";

const values = [
  { icon: faBolt, title: "Inspirational", desc: "Inspiring customers to never settle for retail prices again." },
  { icon: faGear, title: "Disciplined", desc: "Staying consistent with our deals and service every single day." },
  { icon: faHandshake, title: "Accountability", desc: "We own our promises. If we say it, you can count on it." },
  { icon: faEye, title: "Transparency", desc: "No hidden fees. No games. Just honest prices." },
  { icon: faBullseye, title: "Aligned", desc: "Every team member working toward the same goal: your savings." },
  { icon: faTrophy, title: "Results Oriented", desc: "Measured by the smiles we create and the money you save." },
];

const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/gallery-${i + 1}.jpg`,
  alt: `BSW Outlet Store Photo ${i + 1}`,
}));

export default function AboutPage() {
  const t = useT();
  return (
    <div className="relative">
      <div className="orb w-[400px] h-[400px] bg-[#253998] -top-20 -right-20" />
      <div className="orb w-[500px] h-[500px] bg-[#e63946] bottom-0 left-0" />

      {/* HERO */}
      <section className="relative py-24 md:py-36 bg-gradient-to-b from-white to-slate-50 bg-grid">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/about-bg.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-slate-50/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-4">
              {t("about.hero.title")} <span className="text-gradient">{t("about.hero.highlight")}</span>
            </h1>
            <p className="text-xl text-slate-600">
              {t("about.hero.subtitle")} <strong className="text-slate-900">{t("about.hero.never")}</strong>
            </p>
          </FadeInView>
        </div>
      </section>

      {/* STORY */}
      <section className="relative py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="glass-card p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[var(--accent)] shrink-0">
                  <FontAwesomeIcon icon={faQuoteLeft} size="lg" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">{t("about.story.title")}</h2>
                  <p className="text-slate-500 text-sm">{t("about.story.owner")}</p>
                </div>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>{t("about.story.p1")}</p>
                <p>{t("about.story.p2")}</p>
                <p>{t("about.story.p3")}</p>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">{t("about.gallery.title")}</h2>
          </FadeInView>
          <StaggerContainer className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3" staggerDelay={0.04}>
            {galleryImages.map((img, i) => (
              <StaggerItem key={i}>
                <div className="glass-card overflow-hidden break-inside-avoid">
                  <img src={img.src} alt={img.alt} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="relative py-20 bg-white bg-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t("about.team.title")}</h2>
              <p className="text-slate-500 text-lg">{t("about.team.subtitle")}</p>
            </div>
          </FadeInView>
          <FadeInView delay={0.2}>
            <div className="glass-card p-10 text-center">
              <img
                src="/images/abraham-hamed.jpg"
                alt="Abraham Hamed - Store Manager"
                className="w-36 h-36 rounded-full object-cover mx-auto mb-4 border-4 border-[var(--blue)] shadow-xl"
              />
              <h3 className="text-2xl font-bold text-slate-800 mb-1">{t("about.team.name")}</h3>
              <p className="text-[var(--blue)] font-medium mb-4">{t("about.team.role")}</p>
              <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">{t("about.team.desc")}</p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="relative py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t("about.values.title")}</h2>
            </div>
          </FadeInView>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <StaggerItem key={i}>
                <div className="glass-card p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[var(--accent)] mx-auto mb-4">
                    <FontAwesomeIcon icon={v.icon} size="lg" />
                  </div>
                  <h3 className="text-slate-800 font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-slate-500 text-sm">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <div className="glass-strong rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{t("about.cta.title")}</h2>
              <p className="text-slate-600 mb-8">{t("about.cta.subtitle")}</p>
              <Link href="/contact" className="btn-primary"><FontAwesomeIcon icon={faBullseye} /> {t("about.cta.btn")}</Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
