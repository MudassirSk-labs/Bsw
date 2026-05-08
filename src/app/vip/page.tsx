"use client";

import { Suspense, lazy } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faCheckCircle,
  faGift,
  faTag,
  faTicket,
  faStar,
  faSmile,
  faPhone,
  faArrowRight,
  faUsers,
  faPercent,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import FadeInView, { StaggerContainer, StaggerItem } from "@/components/FadeInView";
import { useT } from "@/i18n/context";

const VIP3DCard = lazy(() => import("@/components/VIP3DCard"));

const perkIcons = [faStar, faTag, faGift, faTicket, faUsers, faSmile];
const couponCodes = ["VIP10", "VIP20", "BIRTHDAY"];

export default function VIPPage() {
  const t = useT();
  return (
    <div className="relative">
      <div className="orb w-[500px] h-[500px] bg-[#f4a261] -top-40 -right-40 opacity-[0.1]" />
      <div className="orb w-[400px] h-[400px] bg-[#e63946] bottom-0 left-0 opacity-[0.08]" />

      {/* HERO with 3D Card */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0f2e] to-[#1a0a2e]">
        {/* Gradient orbs */}
        <div className="orb w-[600px] h-[600px] bg-[#ffd700] top-0 left-0 opacity-[0.06]" />
        <div className="orb w-[500px] h-[500px] bg-[#e63946] bottom-0 right-0 opacity-[0.05]" />

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Text side */}
              <FadeInView direction="left">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ffd700]/30 bg-[#ffd700]/5 text-[#ffd700] text-sm mb-6">
                    <FontAwesomeIcon icon={faCrown} />
                    {t("vip.hero.badge")}
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
                    <span className="text-white">{t("vip.hero.title1")}</span>
                    <br />
                    <span className="text-[#ffd700]">{t("vip.hero.title2")}</span>
                  </h1>
                  <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg">
                    {t("vip.hero.subtitle")}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-10">
                    <a href="tel:+19016951857" className="btn-primary text-lg !bg-gradient-to-r !from-[#ffd700] !to-[#f4a261] !text-[#0a0a1a] !font-bold">
                      <FontAwesomeIcon icon={faCrown} />
                      {t("vip.hero.cta")}
                    </a>
                    <Link href="/contact" className="btn-glass text-lg !border-[#ffd700]/30 !text-slate-300">
                      {t("vip.hero.visit")}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </div>
                  {/* Stats */}
                  <div className="flex gap-8 text-sm">
                    <div>
                      <div className="text-2xl font-bold text-[#ffd700]">$25</div>
                      <div className="text-slate-500">{t("vip.hero.month")}</div>
                    </div>
                    <div className="w-px bg-slate-700/50" />
                    <div>
                      <div className="text-2xl font-bold text-[#ffd700]">6</div>
                      <div className="text-slate-500">{t("vip.hero.perks")}</div>
                    </div>
                    <div className="w-px bg-slate-700/50" />
                    <div>
                      <div className="text-2xl font-bold text-[#ffd700]">2</div>
                      <div className="text-slate-500">{t("vip.hero.locations")}</div>
                    </div>
                  </div>
                </div>
              </FadeInView>

              {/* 3D Card side */}
              <FadeInView direction="right">
                <Suspense
                  fallback={
                    <div className="w-full h-[500px] md:h-[600px] rounded-2xl bg-gradient-to-br from-[#0a0a1a] via-[#0f0f2e] to-[#1a0a2e] flex items-center justify-center">
                      <div className="text-center">
                        <FontAwesomeIcon icon={faCrown} className="text-4xl text-[#ffd700] animate-pulse" />
                        <p className="text-slate-500 mt-4 text-sm">Loading premium card...</p>
                      </div>
                    </div>
                  }
                >
                  <VIP3DCard />
                </Suspense>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      {/* MEET RAFAEL */}
      <section className="relative py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="glass-card p-8 md:p-10 text-center">
              <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center text-3xl mx-auto mb-4">
                😄
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">{t("vip.rafael.title")}</h2>
              <p className="text-slate-500 italic max-w-2xl mx-auto">&ldquo;{t("vip.rafael.quote")}&rdquo;</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-slate-500">
                {[0,1,2].map(i => (
                  <span key={i} className="px-3 py-1 bg-slate-100 rounded-full">{t(`vip.rafael.tags.${i}`)}</span>
                ))}
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* ALL PERKS */}
      <section className="relative py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                <FontAwesomeIcon icon={faCrown} className="text-[var(--accent-gold)] mr-2" />
                {t("vip.perks.title")}
              </h2>
              <p className="text-slate-500 text-lg">{t("vip.perks.subtitle")}</p>
            </div>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perkIcons.map((icon, i) => (
              <StaggerItem key={i}>
                <div className="glass-card p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-[var(--accent-gold)] mx-auto mb-4">
                    <FontAwesomeIcon icon={icon} size="xl" />
                  </div>
                  <h3 className="text-slate-800 font-bold text-lg mb-2">{t(`vip.perks.items.${i}.title`)}</h3>
                  <p className="text-slate-500 text-sm">{t(`vip.perks.items.${i}.desc`)}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* DISCOUNT COUPONS */}
      <section className="relative py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                <FontAwesomeIcon icon={faPercent} className="text-[var(--accent)] mr-2" />
                {t("vip.coupons.title")}
              </h2>
              <p className="text-slate-500 text-lg">{t("vip.coupons.subtitle")}</p>
            </div>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {couponCodes.map((code, i) => (
              <StaggerItem key={i}>
                <div className="glass-card p-6 text-center border-t-4 border-[var(--accent-gold)]">
                  <div className="text-3xl font-bold text-gradient mb-1">{t(`vip.coupons.items.${i}.discount`)}</div>
                  <div className="text-sm text-slate-400 mb-3">{code}</div>
                  <h3 className="text-slate-800 font-bold mb-1">{t(`vip.coupons.items.${i}.min`)}</h3>
                  <p className="text-slate-500 text-sm">{t(`vip.coupons.items.${i}.desc`)}</p>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <span className="text-xs text-slate-400">{t("vip.coupons.footer")}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FUN AT THE STORE */}
      <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="glass-card p-10 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{t("vip.fun.title")}</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">{t("vip.fun.desc")}</p>
                  <ul className="space-y-3">
                    {[0,1,2,3,4].map(i => (
                      <li key={i} className="flex items-start gap-3 text-slate-700">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 shrink-0" />
                        <span>{t(`vip.fun.items.${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card p-8 text-center">
                  <div className="text-5xl mb-4">😄</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{t("vip.fun.cardTitle")}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{t("vip.fun.cardDesc")}</p>
                  <a href="tel:+19016951857" className="btn-primary mt-6 inline-flex">
                    <FontAwesomeIcon icon={faPhone} />
                    {t("home.locations.call")} (901) 695-1857
                  </a>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <div className="glass-strong rounded-2xl p-12 md:p-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t("vip.cta.title")}</h2>
              <p className="text-slate-600 text-lg mb-2">
                {t("weekly.vip.just")} <strong className="text-[var(--accent-gold)]">{t("vip.cta.price")}</strong>
              </p>
              <p className="text-slate-500 mb-8">{t("vip.cta.desc")}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+19016951857" className="btn-primary text-lg">
                  <FontAwesomeIcon icon={faCrown} />
                  {t("vip.cta.btn")} — (901) 695-1857
                </a>
                <Link href="/contact" className="btn-glass text-lg">
                  {t("vip.cta.visit")}
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
