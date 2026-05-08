"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faMapMarkerAlt, faPhone, faClock, faCalendarDay, faArrowRight, faCrown, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import FadeInView, { StaggerContainer, StaggerItem } from "@/components/FadeInView";
import { useT } from "@/i18n/context";
import { DAY_MAP } from "@/lib/constants";

const scheduleImgs = ["deal-thu.png", "deal-fri.jpg", "deal-sat.jpg", "deal-sun.jpg", "deal-mon.jpg", "deal-tue.jpg", "deal-wed.jpg"];
const scheduleKeys = ["thu", "fri", "sat", "sun", "mon", "tue", "wed"];

export default function WeeklyDealsPage() {
  const t = useT();
  const [todayKey, setTodayKey] = useState<string | null>(null);

  useEffect(() => {
    setTodayKey(DAY_MAP[new Date().getDay()]);
  }, []);
  return (
    <div className="relative">
      <div className="orb w-[500px] h-[500px] bg-[#e63946] -top-40 -left-40" />
      <div className="orb w-[400px] h-[400px] bg-[#f4a261] bottom-0 right-0" />

      {/* HERO */}
      <section className="relative py-12 md:py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <img
              src="/images/deals-hero.png"
              alt="Weekly Deals at BSW Outlet"
              className="w-full max-w-[600px] mx-auto h-auto mb-8"
            />
          </FadeInView>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="relative py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.06}>
            {scheduleKeys.map((key, i) => {
              const isToday = todayKey === key;
              return (
              <StaggerItem key={key}>
                <div className={`glass-card p-6 md:p-8 relative overflow-hidden ${isToday ? "ring-2 ring-[var(--blue)] shadow-lg" : ""}`}>
                  {isToday && (
                    <div className="absolute top-4 right-4 bg-[var(--blue)] text-white text-xs font-bold px-3 py-1 rounded-full shadow">{t("weekly.today")}</div>
                  )}
                  <div className="overflow-hidden rounded-lg h-28 md:h-32 mb-4 -mx-2 -mt-2">
                    <img src={`/images/${scheduleImgs[i]}`} alt={t(`weekly.schedule.${i}.day`)} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-3xl font-bold mb-1 text-gradient">{t(`weekly.schedule.${i}.price`)}</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider mb-1">{t(`weekly.schedule.${i}.day`)}</div>
                  <h3 className="text-slate-800 font-bold text-xl mb-2">{t(`weekly.schedule.${i}.title`)}</h3>
                  <p className="text-[var(--blue)] font-medium text-sm mb-3 italic">{t(`weekly.schedule.${i}.tagline`)}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{t(`weekly.schedule.${i}.desc`)}</p>
                </div>
              </StaggerItem>
            );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* STORE GALLERY */}
      <section className="relative py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1,3,5,7].map(i => (
              <div key={i} className="glass-card overflow-hidden rounded-xl h-32 md:h-40">
                <img src={`/images/gallery-${i}.jpg`} alt="BSW Outlet store" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VIP SECTION ===== */}
      <section className="relative py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                <FontAwesomeIcon icon={faCrown} className="text-[var(--accent-gold)] mr-2" />
                {t("weekly.vip.title")} <span className="text-[var(--accent-gold)]">{t("weekly.vip.price")}</span>
              </h2>
              <p className="text-slate-500 text-lg">{t("weekly.vip.subtitle")}</p>
            </div>
          </FadeInView>
          <FadeInView>
            <div className="glass-card p-8 md:p-10 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    {[0,1,2].map(i => (
                      <li key={i} className="flex items-center gap-3 text-slate-700"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 shrink-0" /><span>{t(`weekly.vip.perks1.${i}`)}</span></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    {[0,1,2].map(i => (
                      <li key={i} className="flex items-center gap-3 text-slate-700"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 shrink-0" /><span>{t(`weekly.vip.perks2.${i}`)}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-sm text-slate-400">{t("weekly.vip.just")}</div>
                  <div className="text-2xl font-bold text-gradient">{t("weekly.vip.price")}</div>
                </div>
                <a href="tel:+19016951857" className="btn-primary"><FontAwesomeIcon icon={faCrown} /> {t("weekly.vip.cta")} — (901) 695-1857</a>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <div className="glass-strong rounded-2xl p-12 md:p-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t("weekly.cta.title")}</h2>
              <p className="text-slate-600 text-lg mb-8">{t("weekly.cta.subtitle")}</p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/contact" className="btn-primary text-lg"><FontAwesomeIcon icon={faTag} /> {t("weekly.cta.btn")} <FontAwesomeIcon icon={faArrowRight} /></Link>
                <a href="tel:+19016951857" className="btn-glass text-lg"><FontAwesomeIcon icon={faPhone} /> {t("weekly.cta.call")} (901) 695-1857</a>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
