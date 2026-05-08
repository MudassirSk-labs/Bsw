"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCouch,
  faChair,
  faBed,
  faTable,
  faLightbulb,
  faTag,
  faPhone,
  faArrowRight,
  faCheckCircle,
  faBox,
  faStar,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import FadeInView, { StaggerContainer, StaggerItem } from "@/components/FadeInView";

const categories = [
  { icon: faCouch, title: "Sofas & Couches", desc: "Sectionals, loveseats, reclining sofas — brand names at bin prices." },
  { icon: faChair, title: "Chairs & Seating", desc: "Accent chairs, dining chairs, office chairs, and more." },
  { icon: faBed, title: "Bedroom Furniture", desc: "Bed frames, nightstands, dressers, and mattress toppers." },
  { icon: faTable, title: "Tables & Desks", desc: "Coffee tables, dining tables, desks, console tables." },
  { icon: faLightbulb, title: "Lighting & Decor", desc: "Lamps, rugs, wall art, mirrors, and home accents." },
  { icon: faBox, title: "Storage & Shelving", desc: "Bookshelves, cabinets, storage ottomans, TV stands." },
];

export default function FurniturePage() {
  return (
    <div className="relative">
      <div className="orb w-[500px] h-[500px] bg-[#253998] -top-40 -left-40 opacity-[0.1]" />
      <div className="orb w-[400px] h-[400px] bg-[#e63946] bottom-0 right-0 opacity-[0.08]" />

      {/* HERO */}
      <section className="relative py-12 md:py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <img
              src="/images/furniture-hero.png"
              alt="BSW Outlet Furniture"
              className="w-full max-w-[700px] mx-auto h-auto"
            />
          </FadeInView>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                What We Carry
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                From living room to bedroom to home office — we&apos;ve got furniture for every room.
                New inventory drops every single week.
              </p>
            </div>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <StaggerItem key={i}>
                <div className="glass-card p-6 text-center hover:border-[var(--accent)]/30">
                  <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-[var(--accent)] mx-auto mb-4">
                    <FontAwesomeIcon icon={cat.icon} size="xl" />
                  </div>
                  <h3 className="text-slate-800 font-bold text-lg mb-2">{cat.title}</h3>
                  <p className="text-slate-500 text-sm">{cat.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FURNITURE GALLERY */}
      <section className="relative py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                See What&apos;s In Store
              </h2>
              <p className="text-slate-500 text-lg">
                New furniture drops every week. Come see for yourself!
              </p>
            </div>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" staggerDelay={0.05}>
            {[1,2,3,4,5,6,7,8].map(i => (
              <StaggerItem key={i}>
                <div className="glass-card overflow-hidden aspect-square">
                  <img
                    src={`/images/gallery-${i}.jpg`}
                    alt={`BSW Outlet store - furniture finds`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </StaggerItem>
            ))}
            <StaggerItem>
              <div className="glass-card p-6 flex flex-col items-center justify-center aspect-square text-center bg-gradient-to-br from-[#fef3c7] to-[#fde68a]">
                <img src="/images/furniture-sofa.png" alt="Sofas" className="w-20 h-16 mb-3" />
                <p className="text-slate-800 font-bold text-lg">Sofas</p>
                <p className="text-slate-500 text-xs">Starting at $15</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-card p-6 flex flex-col items-center justify-center aspect-square text-center bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe]">
                <img src="/images/furniture-sofa.png" alt="Chairs" className="w-20 h-16 mb-3 scale-x-[-1]" />
                <p className="text-slate-800 font-bold text-lg">Chairs</p>
                <p className="text-slate-500 text-xs">Starting at $8</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* VIP FURNITURE DEAL */}
      <section className="relative py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <FadeInView>
              <div className="glass-card p-8 md:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <FontAwesomeIcon icon={faCrown} className="text-[#f4a261] text-2xl" />
                  <span className="text-sm uppercase tracking-widest text-slate-400 font-semibold">VIP BONUS</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  VIP Members Get <span className="text-[#f4a261]">20% OFF</span> Furniture
                </h2>
                <p className="text-slate-600 mb-6">
                  Join the BSW VIP Club for just $25/month and get 20% off all furniture items 
                  on top of our already insane bin prices. Plus early access to new furniture drops.
                </p>
                <ul className="space-y-2 mb-6">
                  {["20% off all furniture, every day", "Early access to new furniture drops", "Extra discount coupons every month"].map((p, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/vip" className="btn-primary">
                  <FontAwesomeIcon icon={faCrown} />
                  Learn About VIP Club
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </FadeInView>

            <FadeInView direction="right">
              <div className="glass-card p-8 text-center">
                <div className="text-5xl mb-4">🛋️</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">New Drops Every Week</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Furniture inventory changes fast. What&apos;s here today might be gone tomorrow.
                  Come dig, find, and score deals on real furniture.
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-xs">
                  <span className="px-3 py-1.5 bg-slate-100 rounded-full">🏷️ Name brands</span>
                  <span className="px-3 py-1.5 bg-slate-100 rounded-full">📦 Open box</span>
                  <span className="px-3 py-1.5 bg-slate-100 rounded-full">✨ Like new</span>
                  <span className="px-3 py-1.5 bg-slate-100 rounded-full">🔥 Clearance</span>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <div className="glass-strong rounded-2xl p-12 md:p-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Ready to Furnish on a Budget?
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                Stop overpaying for furniture. Come to BSW Outlet and see how much you can save.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+19016951857" className="btn-primary text-lg">
                  <FontAwesomeIcon icon={faPhone} />
                  Call (901) 695-1857
                </a>
                <Link href="/contact" className="btn-glass text-lg">
                  <FontAwesomeIcon icon={faCouch} />
                  Visit Our Showroom
                </Link>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
