"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faBox,
  faDollarSign,
  faRunning,
  faStar,
  faMapMarkerAlt,
  faClock,
  faPhone,
  faChevronRight,
  faArrowRight,
  faCrown,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import FadeInView, { StaggerContainer, StaggerItem } from "@/components/FadeInView";
import NewsletterSection from "@/components/NewsletterSection";
import { useT } from "@/i18n/context";
import { DAY_MAP } from "@/lib/constants";

const schedule = [
  { key: "thu", price: "$10", img: "deal-thu.png" },
  { key: "fri", price: "$8", img: "deal-fri.jpg" },
  { key: "sat", price: "$7", img: "deal-sat.jpg" },
  { key: "sun", price: "$5", img: "deal-sun.jpg" },
  { key: "mon", price: "$3", img: "deal-mon.jpg" },
  { key: "tue", price: "$2", img: "deal-tue.jpg" },
  { key: "wed", price: "$1", img: "deal-wed.jpg" },
];

const dayNames: Record<string, string> = {
  thu: "Thursday", fri: "Friday", sat: "Saturday", sun: "Sunday",
  mon: "Monday", tue: "Tuesday", wed: "Wednesday",
};

const testimonials = [
  { name: "Rodney Lyte", rating: 5, platform: "Google" },
  { name: "Patricia Dockery", rating: 5, platform: "Google" },
  { name: "Tewanda Williams", rating: 5, platform: "Google" },
  { name: "Antonio Smith", rating: 5, platform: "Google" },
  { name: "Elizabeth Blaylock", rating: 5, platform: "Google" },
  { name: "Yulissa Munguia", rating: 5, platform: "Google" },
];

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [todayKey, setTodayKey] = useState<string | null>(null);
  const t = useT();

  useEffect(() => {
    setTodayKey(DAY_MAP[new Date().getDay()]);
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const sch = (k: string) => t(`home.schedule.${k}`);

  return (
    <div className="relative">
      <div className="orb w-[500px] h-[500px] bg-[#e63946] -top-40 -left-40" />
      <div className="orb w-[400px] h-[400px] bg-[#253998] top-1/3 right-0" />
      <div className="orb w-[600px] h-[600px] bg-[#3b5bdb] bottom-0 left-1/3" />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-white to-slate-50 bg-grid">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-slate-50/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            <FadeInView direction="none">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm text-slate-600">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                {t("home.hero.badge")}
              </div>
            </FadeInView>
            <FadeInView delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
                <span className="text-slate-900">{t("home.hero.title1")}</span>
                <br />
                <span className="text-gradient">{t("home.hero.title2")}</span>
              </h1>
            </FadeInView>
            <FadeInView delay={0.2}>
              <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-2xl">{t("home.hero.subtitle")}</p>
            </FadeInView>
            <FadeInView delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link href="/weekly-deals" className="btn-primary text-lg"><FontAwesomeIcon icon={faTag} /> {t("home.hero.cta")} <FontAwesomeIcon icon={faChevronRight} /></Link>
                <Link href="/about" className="btn-glass text-lg">{t("home.hero.learn")} <FontAwesomeIcon icon={faArrowRight} /></Link>
              </div>
            </FadeInView>
          </div>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-16 max-w-2xl">
            {[
              { icon: faBox, label: t("home.hero.stats.drops"), sub: t("home.hero.stats.dropsSub") },
              { icon: faDollarSign, label: t("home.hero.stats.prices"), sub: t("home.hero.stats.pricesSub") },
              { icon: faRunning, label: t("home.hero.stats.first"), sub: t("home.hero.stats.firstSub") },
            ].map((stat, i) => (
              <StaggerItem key={i}>
                <div className="glass-card p-5 text-center">
                  <FontAwesomeIcon icon={stat.icon} className="text-2xl text-[var(--accent)] mb-2" />
                  <p className="text-slate-800 font-semibold">{stat.label}</p>
                  <p className="text-slate-500 text-sm">{stat.sub}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SAVINGS VIDEO */}
      <section className="relative py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <video
              src="/images/bsw-featured.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[600px] mx-auto h-auto rounded-xl shadow-lg"
            />
          </FadeInView>
        </div>
      </section>

      {/* WEEKLY SCHEDULE */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-4">{t("home.schedule.title")}</h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t("home.schedule.subtitle")}</p>
            </div>
          </FadeInView>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4" staggerDelay={0.06}>
            {schedule.map((item, i) => {
              const isToday = todayKey === item.key;
              return (
              <StaggerItem key={i}>
                <div className={`glass-card p-4 md:p-6 text-center relative ${isToday ? "ring-2 ring-[var(--blue)]" : ""}`}>
                  {isToday && (
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[var(--blue)] text-white text-[10px] font-bold px-3 py-0.5 rounded-full shadow">
                      TODAY
                    </div>
                  )}
                  <div className="overflow-hidden rounded-lg mb-3 -mx-1 -mt-1">
                    <img src={`/images/${item.img}`} alt={dayNames[item.key]} className="w-full h-auto object-contain" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold mb-1 text-gradient">{item.price}</div>
                  <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider mb-1">{t(`days.${dayNames[item.key].toLowerCase()}`)}</div>
                  <h3 className="text-slate-800 font-semibold text-sm md:text-lg mb-1 md:mb-2">{sch(`${item.key}.name`)}</h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{sch(`${item.key}.desc`)}</p>
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
            {[2,4,6,8].map(i => (
              <div key={i} className="glass-card overflow-hidden rounded-xl h-32 md:h-40">
                <img src={`/images/gallery-${i}.jpg`} alt="BSW Outlet store" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP SECTION */}
      <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="orb w-[500px] h-[500px] bg-[#f4a261] top-0 right-0 opacity-[0.08]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-4">
                <FontAwesomeIcon icon={faCrown} className="text-[#f4a261] mr-3" />
                {t("home.vip.title")}
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t("home.vip.subtitle")}</p>
            </div>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <FadeInView direction="left" className="md:col-span-2">
              <div className="glass-card p-8 md:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <FontAwesomeIcon icon={faCrown} className="text-[#f4a261] text-2xl" />
                  <span className="text-sm uppercase tracking-widest text-slate-400 font-semibold">{t("home.vip.membership")}</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">{t("home.vip.price")} <span className="text-[#f4a261]">$25</span>{t("home.vip.month")}</h3>
                <p className="text-slate-500 mb-6">Unlock premium perks at both Memphis locations.</p>
                <ul className="space-y-3">
                  {[0,1,2,3,4].map(i => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 shrink-0" />
                      <span>{t(`home.vip.perks.${i}`)}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/vip" className="btn-primary mt-8 inline-flex"><FontAwesomeIcon icon={faCrown} /> {t("home.vip.cta")}</Link>
              </div>
            </FadeInView>
            <FadeInView direction="right" className="text-center">
              <div className="glass-card p-8">
                <img src="/images/vip-hero.png" alt="VIP Club" className="w-full mb-4" />
                <h4 className="text-lg font-bold text-slate-800 mb-2">{t("home.vip.howItWorks")}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{t("home.vip.howDesc")}</p>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="text-2xl font-bold text-gradient">$25</div>
                  <div className="text-sm text-slate-400">{t("home.vip.month")}</div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <NewsletterSection />

      {/* BARGAIN BIN IMAGE */}
      <section className="relative py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <img src="/images/bargain-bin.png" alt="Fill your cart at BSW Outlet" className="w-full max-w-[500px] mx-auto h-auto" />
          </FadeInView>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="relative py-24 bg-slate-50">
        <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{ backgroundImage: "url('/images/about-bg.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-transparent to-slate-50/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-4">{t("home.locations.title")}</h2>
              <p className="text-slate-500 text-lg">{t("home.locations.subtitle")}</p>
            </div>
          </FadeInView>
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { title: t("home.locations.winchester"), addr: "6777 Winchester Rd, Memphis, TN 38115" },
              { title: t("home.locations.summer"), addr: "4224 Summer Ave, Memphis, TN 38122" },
            ].map((loc, i) => (
              <StaggerItem key={i}>
                <div className="glass-card p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[var(--accent)] shrink-0"><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" /></div>
                    <div>
                      <h3 className="text-slate-800 font-bold text-xl mb-2">{loc.title}</h3>
                      <a href="https://www.google.com/maps/dir/?api=1&destination=BSW+Outlet+Memphis+TN" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[var(--accent)] transition-colors"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-[var(--accent)]" />{loc.addr}</a>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
            <FadeInView className="lg:col-span-2">
              <div className="glass-card p-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[var(--accent)] shrink-0"><FontAwesomeIcon icon={faClock} size="lg" /></div>
                    <div>
                      <p className="text-slate-800 font-semibold">{t("home.locations.hours")}</p>
                      <p className="text-slate-500 text-sm">{t("home.locations.hoursVal")}</p>
                      <p className="text-[var(--accent)] text-sm font-medium">{t("home.locations.thuTag")}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[var(--accent)] shrink-0"><FontAwesomeIcon icon={faPhone} size="lg" /></div>
                    <div>
                      <p className="text-slate-800 font-semibold">{t("home.locations.call")}</p>
                      <a href="tel:+19016951857" className="text-slate-500 hover:text-[var(--accent)] text-sm transition-colors">(901) 695-1857</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[var(--accent)] shrink-0"><FontAwesomeIcon icon={faStar} size="lg" /></div>
                    <div>
                      <p className="text-slate-800 font-semibold">{t("home.locations.best")}</p>
                      <p className="text-slate-500 text-sm">{t("home.locations.bestSub")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>
          </StaggerContainer>
        </div>
      </section>

      {/* STORE GALLERY 2 */}
      <section className="relative py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[9,10,11,12,1,5].map(i => (
              <div key={i} className="glass-card overflow-hidden rounded-xl h-28 md:h-36">
                <img src={`/images/gallery-${i}.jpg`} alt="BSW Outlet" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24 bg-grid bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-4">{t("home.testimonials.title")}</h2>
              <p className="text-slate-500 text-lg">{t("home.testimonials.subtitle")}</p>
            </div>
          </FadeInView>
          <div className="max-w-2xl mx-auto">
            <FadeInView key={activeIndex} delay={0.1}>
              <div className="glass-card p-8 text-center min-h-[220px] flex flex-col items-center justify-center">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, s) => (
                    <svg key={s} className="w-5 h-5 text-[var(--accent-gold)] fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-slate-700 text-lg mb-6 italic leading-relaxed">&ldquo;{t(`home.testimonials.items.${activeIndex}.text`)}&rdquo;</p>
                <p className="text-slate-800 font-semibold">{t(`home.testimonials.items.${activeIndex}.name`)}</p>
                <p className="text-slate-400 text-sm mt-1">{testimonials[activeIndex].platform} Review ⭐⭐⭐⭐⭐</p>
              </div>
            </FadeInView>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveIndex(i)} className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-[var(--blue)] w-8" : "w-2 bg-slate-300 hover:bg-slate-400"}`} aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <a
                href="https://www.google.com/search?q=BSW+Outlet+Memphis+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--blue)] hover:underline text-sm font-medium"
              >
                <FontAwesomeIcon icon={faStar} className="text-[var(--accent-gold)]" />
                Leave Us A Review →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <div className="glass-strong rounded-2xl p-12 md:p-20">
              <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6">{t("home.cta.title")}</h2>
              <p className="text-slate-600 text-xl mb-8 max-w-2xl mx-auto">{t("home.cta.subtitle")}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/weekly-deals" className="btn-primary text-lg"><FontAwesomeIcon icon={faTag} /> {t("home.cta.btn")}</Link>
                <a href="tel:+19016951857" className="btn-glass text-lg"><FontAwesomeIcon icon={faPhone} /> {t("home.cta.call")} (901) 695-1857</a>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
