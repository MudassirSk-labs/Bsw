"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faMapMarkerAlt, faPhone, faClock, faCalendarDay, faArrowRight, faCrown, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import FadeInView, { StaggerContainer, StaggerItem } from "@/components/FadeInView";

const schedule = [
  { day: "Monday", price: "$3", title: "Mystery Monday", tagline: "You never know what you'll find.", desc: "Fresh surprises. Wild finds. Mystery Mondays hit different. Everything in the bins is just $3 — come ready to hunt.", emoji: "🎲" },
  { day: "Tuesday", price: "$2", title: "$2 Tuesday", tagline: "The bin hunt begins.", desc: "Get here early and dig for gold. At $2, everything in the bins is a steal. Our regulars know Tuesday is prime hunting day.", emoji: "🔍" },
  { day: "Wednesday", price: "$1", title: "$1 Wednesday", tagline: "Last chance before reset.", desc: "Everything left drops to just $1. Unreal value. Come grab whatever's left before we clear the bins for restock.", emoji: "💎" },
  { day: "Thursday", price: "$10", title: "$10 Thursday", tagline: "New deal day — fresh inventory!", desc: "Thursday is now a deal day! Fresh drops hit the floor with everything in the bins at $10. Best day to catch up on what you missed earlier in the week.", emoji: "💥", active: true },
  { day: "Friday", price: "$8", title: "$8 Friday", tagline: "Fresh drops. Fresh prices.", desc: "New inventory hits the floor. Great day to shop if you missed the early rush. Everything in bins is just $8.", emoji: "🔥" },
  { day: "Saturday", price: "$7", title: "$7 Saturday", tagline: "Our biggest day of the week!", desc: "Brand new inventory drops. If you want first dibs on the best finds, Saturday is it. Doors open at 10AM — line up early!", emoji: "⭐", active: true },
  { day: "Sunday", price: "$5", title: "$5 Sunday", tagline: "Weekend steals continue!", desc: "Everything in the bins? Just $5. Come wrap up your weekend with some incredible finds before Monday's reset.", emoji: "🎉" },
];

export default function WeeklyDealsPage() {
  return (
    <div className="relative">
      <div className="orb w-[500px] h-[500px] bg-[#e63946] -top-40 -left-40" />
      <div className="orb w-[400px] h-[400px] bg-[#f4a261] bottom-0 right-0" />

      {/* HERO */}
      <section className="relative py-24 md:py-36 bg-gradient-to-b from-white to-slate-50 bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-slate-50/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm text-slate-600">
              <FontAwesomeIcon icon={faCalendarDay} className="text-[var(--accent)]" />
              Updated Weekly
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-4">
              Weekly <span className="text-gradient">Deals</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">The best bin store deals in Memphis — updated every week.</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
              <span><FontAwesomeIcon icon={faMapMarkerAlt} className="text-[var(--accent)] mr-2" />6777 Winchester Rd, Memphis, TN 38115</span>
              <span><FontAwesomeIcon icon={faMapMarkerAlt} className="text-[var(--accent)] mr-2" />4224 Summer Ave, Memphis, TN 38122</span>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="relative py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.06}>
            {schedule.map((item, i) => (
              <StaggerItem key={i}>
                <div className={`glass-card p-6 md:p-8 relative overflow-hidden ${item.active ? "ring-2 ring-[var(--accent)]" : ""}`}>
                  {item.active && <div className="absolute top-4 right-4 bg-[var(--accent)] text-white text-xs font-bold px-3 py-1 rounded-full">TODAY</div>}
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <div className={`text-3xl font-bold mb-1 ${item.price === "Closed" ? "text-slate-400" : "text-gradient"}`}>{item.price}</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider mb-1">{item.day}</div>
                  <h3 className="text-slate-800 font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-[var(--accent)] font-medium text-sm mb-3 italic">{item.tagline}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== VIP SECTION ===== */}
      <section className="relative py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                <FontAwesomeIcon icon={faCrown} className="text-[#f4a261] mr-2" />
                BSW VIP Club — <span className="text-[#f4a261]">$25/mo</span>
              </h2>
              <p className="text-slate-500 text-lg">Early access, exclusive pricing, and more.</p>
            </div>
          </FadeInView>
          <FadeInView>
            <div className="glass-card p-8 md:p-10 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    {["Early access to new drops", "VIP-only pricing on select items", "Priority checkout"].map((p, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 shrink-0" /><span>{p}</span></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    {["$10 monthly bonus coupon", "Birthday surprise gift", "Works at both locations"].map((p, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 shrink-0" /><span>{p}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-sm text-slate-400">Just</div>
                  <div className="text-2xl font-bold text-gradient">$25/month</div>
                </div>
                <a href="tel:+19016951857" className="btn-primary"><FontAwesomeIcon icon={faCrown} /> Sign Up — (901) 695-1857</a>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Ready to Pull Up?</h2>
              <p className="text-slate-600 text-lg mb-8">Two locations in Memphis. One mission: help you never pay retail again.</p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/contact" className="btn-primary text-lg"><FontAwesomeIcon icon={faTag} /> Contact Us <FontAwesomeIcon icon={faArrowRight} /></Link>
                <a href="tel:+19016951857" className="btn-glass text-lg"><FontAwesomeIcon icon={faPhone} /> Call (901) 695-1857</a>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
