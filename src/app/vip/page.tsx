"use client";

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

const perks = [
  { icon: faStar, title: "Early Access", desc: "Get first dibs on new inventory drops before the general public." },
  { icon: faTag, title: "VIP-Only Pricing", desc: "Exclusive discounts on select items — only for VIP members." },
  { icon: faGift, title: "$10 Monthly Coupon", desc: "A bonus coupon worth $10 every single month, just for being a member." },
  { icon: faTicket, title: "Discount Coupons", desc: "Extra coupon bundles dropped throughout the month. Stack 'em and save!" },
  { icon: faUsers, title: "Priority Checkout", desc: "Skip the line at both locations. You're VIP — you go first." },
  { icon: faSmile, title: "Birthday Surprise", desc: "A special birthday gift on us. Because you deserve it." },
];

const coupons = [
  { code: "VIP10", discount: "$10 OFF", min: "No minimum", desc: "Monthly VIP coupon — use on any purchase" },
  { code: "VIP20", discount: "20% OFF", min: "On furniture items", desc: "Exclusive furniture discount for VIP members" },
  { code: "BIRTHDAY", discount: "Free Gift", min: "With any purchase", desc: "Your birthday surprise — just show your ID" },
];

export default function VIPPage() {
  return (
    <div className="relative">
      <div className="orb w-[500px] h-[500px] bg-[#f4a261] -top-40 -right-40 opacity-[0.1]" />
      <div className="orb w-[400px] h-[400px] bg-[#e63946] bottom-0 left-0 opacity-[0.08]" />

      {/* HERO */}
      <section className="relative py-12 md:py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <img
              src="/images/vip-hero.svg"
              alt="BSW VIP Club"
              className="w-full max-w-[700px] mx-auto h-auto"
            />
          </FadeInView>
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
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                Meet Rafael — Your VIP Host
              </h2>
              <p className="text-slate-500 italic max-w-2xl mx-auto">
                &ldquo;I make sure every VIP feels like family. Come say hi, grab a coupon, and let&apos;s find you a deal!&rdquo;
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-slate-500">
                <span className="px-3 py-1 bg-slate-100 rounded-full">🎤 Ask about our daily jokes</span>
                <span className="px-3 py-1 bg-slate-100 rounded-full">🎁 Rafael&apos;s mystery coupon drawer</span>
                <span className="px-3 py-1 bg-slate-100 rounded-full">📸 Selfie with Rafael = extra deal</span>
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
                <FontAwesomeIcon icon={faCrown} className="text-[#f4a261] mr-2" />
                Everything You Get
              </h2>
              <p className="text-slate-500 text-lg">Six VIP perks that make every visit better.</p>
            </div>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <StaggerItem key={i}>
                <div className="glass-card p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-[#f4a261] mx-auto mb-4">
                    <FontAwesomeIcon icon={perk.icon} size="xl" />
                  </div>
                  <h3 className="text-slate-800 font-bold text-lg mb-2">{perk.title}</h3>
                  <p className="text-slate-500 text-sm">{perk.desc}</p>
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
                VIP Discount Coupons
              </h2>
              <p className="text-slate-500 text-lg">Every member gets access to exclusive coupon codes.</p>
            </div>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coupons.map((coupon, i) => (
              <StaggerItem key={i}>
                <div className="glass-card p-6 text-center border-t-4 border-[#f4a261]">
                  <div className="text-3xl font-bold text-gradient mb-1">{coupon.discount}</div>
                  <div className="text-sm text-slate-400 mb-3">{coupon.code}</div>
                  <h3 className="text-slate-800 font-bold mb-1">{coupon.min}</h3>
                  <p className="text-slate-500 text-sm">{coupon.desc}</p>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <span className="text-xs text-slate-400">Show this to Rafael at checkout</span>
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
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    We Have a Lot of Fun in the Store! 🎉
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    BSW Outlet isn&apos;t just about crazy deals — it&apos;s about the experience. From the moment you
                    walk in, you&apos;ll feel the energy. Music playing, customers laughing, Rafael cracking jokes
                    at the register, and treasure hunters racing to find the next hidden gem.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Daily deal announcements over the speakers 🎤",
                      "Friendly bin-hunting competitions between customers 🏆",
                      "Rafael's famous mystery coupon drawer 🎁",
                      "New inventory unboxings — be there when it drops! 📦",
                      "Selfie wall — tag us for a chance to win a coupon 📸",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card p-8 text-center">
                  <div className="text-5xl mb-4">😄</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">See You Soon!</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Come for the deals, stay for the vibes. Rafael and the crew are
                    waiting for you at both Memphis locations.
                  </p>
                  <a href="tel:+19016951857" className="btn-primary mt-6 inline-flex">
                    <FontAwesomeIcon icon={faPhone} />
                    Call (901) 695-1857
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Join the VIP Club Today
              </h2>
              <p className="text-slate-600 text-lg mb-2">
                Just <strong className="text-[#f4a261]">$25/month</strong>
              </p>
              <p className="text-slate-500 mb-8">
                Sign up at either location. Your VIP card works at both Winchester &amp; Summer Ave.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+19016951857" className="btn-primary text-lg">
                  <FontAwesomeIcon icon={faCrown} />
                  Sign Up — (901) 695-1857
                </a>
                <Link href="/contact" className="btn-glass text-lg">
                  Visit Us Today
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
