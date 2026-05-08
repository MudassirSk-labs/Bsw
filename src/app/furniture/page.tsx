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

const deals = [
  { item: "Accent Chair", original: "$120", vip: "$35", bin: "$15" },
  { item: "Coffee Table", original: "$200", vip: "$55", bin: "$25" },
  { item: "Floor Lamp", original: "$80", vip: "$20", bin: "$8" },
  { item: "Nightstand", original: "$150", vip: "$40", bin: "$18" },
  { item: "Storage Ottoman", original: "$90", vip: "$25", bin: "$10" },
  { item: "Wall Mirror", original: "$110", vip: "$30", bin: "$12" },
];

export default function FurniturePage() {
  return (
    <div className="relative">
      <div className="orb w-[500px] h-[500px] bg-[#253998] -top-40 -left-40 opacity-[0.1]" />
      <div className="orb w-[400px] h-[400px] bg-[#e63946] bottom-0 right-0 opacity-[0.08]" />

      {/* HERO */}
      <section className="relative py-24 md:py-36 bg-gradient-to-b from-white to-slate-50 bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-slate-50/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm text-slate-600">
              <FontAwesomeIcon icon={faStar} className="text-[var(--accent)]" />
              New Furniture Drops Weekly
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-4">
              <span className="text-gradient">Furniture</span> Deals
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Sofas, chairs, tables, decor &amp; more — all at insane discount prices. 
              Never pay retail for furniture again.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+19016951857" className="btn-primary text-lg">
                <FontAwesomeIcon icon={faPhone} />
                Call (901) 695-1857
              </a>
              <Link href="/vip" className="btn-glass text-lg">
                <FontAwesomeIcon icon={faTag} />
                VIP Gets Extra 20% Off
              </Link>
            </div>
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

      {/* SAMPLE PRICING */}
      <section className="relative py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                Sample Furniture Pricing
              </h2>
              <p className="text-slate-500 text-lg">
                See the difference. Retail vs. BSW — you do the math.
              </p>
            </div>
          </FadeInView>

          <div className="overflow-x-auto rounded-2xl">
            <FadeInView>
              <div className="glass-card min-w-[600px]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="text-left px-6 py-4 text-slate-500 font-medium">Item</th>
                      <th className="text-center px-6 py-4 text-slate-500 font-medium">Retail</th>
                      <th className="text-center px-6 py-4 text-[#f4a261] font-medium">VIP Price</th>
                      <th className="text-center px-6 py-4 text-[var(--accent)] font-medium">Bin Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deals.map((d, i) => (
                      <tr key={i} className="border-b border-slate-50 last:border-0">
                        <td className="px-6 py-4 text-slate-800 font-medium">{d.item}</td>
                        <td className="px-6 py-4 text-center text-slate-400 line-through">{d.original}</td>
                        <td className="px-6 py-4 text-center text-[#f4a261] font-bold">{d.vip}</td>
                        <td className="px-6 py-4 text-center text-[var(--accent)] font-bold">{d.bin}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>
          </div>

          <FadeInView className="text-center mt-6">
            <p className="text-slate-400 text-sm">
              * Prices vary by day and inventory. VIP members get the best deal every time.
            </p>
          </FadeInView>
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
