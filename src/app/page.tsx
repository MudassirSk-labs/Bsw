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

const schedule = [
  { day: "Thursday", price: "$10", name: "$10 Thursday", desc: "New deal day! Fresh inventory + $10 pricing. Best day to catch up on what you missed.", img: "deal-thu.png", active: true },
  { day: "Friday", price: "$8", name: "$8 Friday", desc: "Fresh drops + $8 pricing = certified win.", img: "deal-fri.jpg" },
  { day: "Saturday", price: "$7", name: "$7 Saturday", desc: "Our biggest day. Brand new inventory. First dibs!", img: "deal-sat.jpg", active: true },
  { day: "Sunday", price: "$5", name: "$5 Sunday", desc: "Weekend steals continue! Everything in the bins? Just $5.", img: "deal-sun.jpg" },
  { day: "Monday", price: "$3", name: "Mystery Monday", desc: "You never know what you'll find. Fresh surprises. Wild finds.", img: "deal-mon.jpg" },
  { day: "Tuesday", price: "$2", name: "$2 Tuesday", desc: "The bin hunt begins. Get here early and dig for gold.", img: "deal-tue.jpg" },
  { day: "Wednesday", price: "$1", name: "$1 Wednesday", desc: "Last chance before reset. Everything drops to just $1.", img: "deal-wed.jpg" },
];

const testimonials = [
  { name: "Rodney Lyte", rating: 5, text: "Very nice things and very friendly staff. I really enjoyed myself shopping there.", platform: "Google" },
  { name: "Sarah M.", rating: 5, text: "Best bin store in Memphis! Found amazing deals on electronics and home goods.", platform: "Google" },
  { name: "James K.", rating: 5, text: "The Tuesday $2 deals are crazy. Always find something worth way more.", platform: "Google" },
];

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
                Open Daily 10AM – 7PM
              </div>
            </FadeInView>
            <FadeInView delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
                <span className="text-slate-900">MEMPHIS&apos; #1</span>
                <br />
                <span className="text-gradient">DISCOUNT BIN STORE</span>
              </h1>
            </FadeInView>
            <FadeInView delay={0.2}>
              <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-2xl">
                Never pay retail again. Massive daily deals on electronics, home goods, tools, apparel &amp; more. New inventory weekly!
              </p>
            </FadeInView>
            <FadeInView delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link href="/weekly-deals" className="btn-primary text-lg"><FontAwesomeIcon icon={faTag} /> This Week&apos;s Deals <FontAwesomeIcon icon={faChevronRight} /></Link>
                <Link href="/about" className="btn-glass text-lg">Learn More <FontAwesomeIcon icon={faArrowRight} /></Link>
              </div>
            </FadeInView>
          </div>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-16 max-w-2xl">
            {[{ icon: faBox, label: "New Drops", sub: "Every Week" }, { icon: faDollarSign, label: "Crazy Prices", sub: "Daily" }, { icon: faRunning, label: "First Come", sub: "First Served" }].map((stat, i) => (
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

      {/* SAVINGS IMAGE */}
      <section className="relative py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <img src="/images/savings-hero.png" alt="Never pay retail again at BSW Outlet" className="w-full max-w-[550px] mx-auto h-auto" />
          </FadeInView>
        </div>
      </section>

      {/* WEEKLY SCHEDULE */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-4">Full Weekly Schedule</h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">Every day is a new deal at BSW Outlet. Here&apos;s how the week breaks down.</p>
            </div>
          </FadeInView>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4" staggerDelay={0.06}>
            {schedule.map((item, i) => (
              <StaggerItem key={i}>
                <div className={`glass-card p-4 md:p-6 text-center ${item.active ? "ring-2 ring-[var(--accent)]" : ""}`}>
                  <div className="glass-card overflow-hidden rounded-lg aspect-square mb-3 -mx-1 -mt-1">
                    <img src={`/images/${item.img}`} alt={item.day} className="w-full h-full object-cover" />
                  </div>
                  <div className={`text-2xl md:text-3xl font-bold mb-1 ${item.price === "Closed" ? "text-slate-400" : "text-gradient"}`}>{item.price}</div>
                  <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider mb-1">{item.day}</div>
                  <h3 className="text-slate-800 font-semibold text-sm md:text-lg mb-1 md:mb-2">{item.name}</h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
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
                BSW VIP Club
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">Get the best deals before anyone else. Exclusive perks, early access, and more.</p>
            </div>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <FadeInView direction="left" className="md:col-span-2">
              <div className="glass-card p-8 md:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <FontAwesomeIcon icon={faCrown} className="text-[#f4a261] text-2xl" />
                  <span className="text-sm uppercase tracking-widest text-slate-400 font-semibold">VIP MEMBERSHIP</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Just <span className="text-[#f4a261]">$25</span>/month</h3>
                <p className="text-slate-500 mb-6">Unlock premium perks at both Memphis locations.</p>
                <ul className="space-y-3">
                  {["Early access to new inventory drops", "Exclusive VIP-only pricing on select items", "Priority checkout — skip the line", "Monthly bonus coupon worth $10", "Birthday surprise gift"].map((perk, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 shrink-0" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/vip" className="btn-primary mt-8 inline-flex"><FontAwesomeIcon icon={faCrown} /> Learn More About VIP</Link>
              </div>
            </FadeInView>
            <FadeInView direction="right" className="text-center">
              <div className="glass-card p-8">
                <img src="/images/vip-hero.png" alt="VIP Club" className="w-full mb-4" />
                <h4 className="text-lg font-bold text-slate-800 mb-2">How it works</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Sign up at either location. Your VIP card works at both Winchester and Summer Ave. Just show your card at checkout and enjoy the perks instantly.</p>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="text-2xl font-bold text-gradient">$25</div>
                  <div className="text-sm text-slate-400">per month</div>
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
              <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-4">Find Us In Memphis</h2>
              <p className="text-slate-500 text-lg">The deals live here. You should too.</p>
            </div>
          </FadeInView>
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[{ title: "BSW Outlet – Winchester", addr: "6777 Winchester Rd, Memphis, TN 38115", link: "https://www.google.com/maps/search/bsw+outlet+memphis+tn+map/" }, { title: "BSW Outlet – Summer Ave", addr: "4224 Summer Ave, Memphis, TN 38122", link: "https://www.google.com/maps/search/bsw+outlet+memphis+tn+map/" }].map((loc, i) => (
              <StaggerItem key={i}>
                <div className="glass-card p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[var(--accent)] shrink-0"><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" /></div>
                    <div>
                      <h3 className="text-slate-800 font-bold text-xl mb-2">{loc.title}</h3>
                      <a href={loc.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[var(--accent)] transition-colors"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-[var(--accent)]" />{loc.addr}</a>
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
                      <p className="text-slate-800 font-semibold">Open Daily</p>
                      <p className="text-slate-500 text-sm">10AM – 7PM</p>
                      <p className="text-[var(--accent)] text-sm font-medium">$10 Thursdays!</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[var(--accent)] shrink-0"><FontAwesomeIcon icon={faPhone} size="lg" /></div>
                    <div>
                      <p className="text-slate-800 font-semibold">Call Us</p>
                      <a href="tel:+19016951857" className="text-slate-500 hover:text-[var(--accent)] text-sm transition-colors">(901) 695-1857</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[var(--accent)] shrink-0"><FontAwesomeIcon icon={faStar} size="lg" /></div>
                    <div>
                      <p className="text-slate-800 font-semibold">Memphis&apos; Best</p>
                      <p className="text-slate-500 text-sm">Rated #1 bin store</p>
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
              <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-4">What Memphis Is Saying</h2>
              <p className="text-slate-500 text-lg">Don&apos;t take our word for it.</p>
            </div>
          </FadeInView>
          <div className="max-w-2xl mx-auto">
            <FadeInView key={activeIndex} delay={0.1}>
              <div className="glass-card p-8 text-center min-h-[200px]">
                <div className="text-[var(--accent)] text-lg mb-3">{"★".repeat(testimonials[activeIndex].rating)}{"☆".repeat(5 - testimonials[activeIndex].rating)}</div>
                <p className="text-slate-700 text-lg mb-6 italic">&ldquo;{testimonials[activeIndex].text}&rdquo;</p>
                <p className="text-slate-800 font-semibold">{testimonials[activeIndex].name}</p>
                <p className="text-slate-400 text-sm">{testimonials[activeIndex].platform}</p>
              </div>
            </FadeInView>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveIndex(i)} className={`w-3 h-3 rounded-full transition-all ${i === activeIndex ? "bg-[var(--accent)] w-8" : "bg-slate-300 hover:bg-slate-400"}`} aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <div className="glass-strong rounded-2xl p-12 md:p-20">
              <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6">Ready to Save Big?</h2>
              <p className="text-slate-600 text-xl mb-8 max-w-2xl mx-auto">Don&apos;t pay full price ever again. Come dig, find, and win at BSW Outlet — Memphis&apos; #1 discount bin store.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/weekly-deals" className="btn-primary text-lg"><FontAwesomeIcon icon={faTag} /> See This Week&apos;s Deals</Link>
                <a href="tel:+19016951857" className="btn-glass text-lg"><FontAwesomeIcon icon={faPhone} /> Call (901) 695-1857</a>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
