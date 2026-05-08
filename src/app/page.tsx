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
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const schedule = [
  { day: "Monday", price: "$3", name: "Mystery Monday", desc: "You never know what you'll find. Fresh surprises. Wild finds.", active: false },
  { day: "Tuesday", price: "$2", name: "$2 Tuesday", desc: "The bin hunt begins. Get here early and dig for gold.", active: false },
  { day: "Wednesday", price: "$1", name: "$1 Wednesday", desc: "Last chance before reset. Everything drops to just $1.", active: false },
  { day: "Thursday", price: "Closed", name: "Closed For Restock", desc: "We're restocking the bins and prepping for the weekend rush.", active: false },
  { day: "Friday", price: "$8", name: "$8 Friday", desc: "Fresh drops + $8 pricing = certified win.", active: false },
  { day: "Saturday", price: "$7", name: "$7 Saturday", desc: "Our biggest day. Brand new inventory. First dibs!", active: true },
  { day: "Sunday", price: "$5", name: "$5 Sunday", desc: "Weekend steals continue! Everything in the bins? Just $5.", active: false },
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
      {/* Animated background orbs */}
      <div className="orb w-[500px] h-[500px] bg-[#e63946] -top-40 -left-40" />
      <div className="orb w-[400px] h-[400px] bg-[#253998] top-1/3 right-0" />
      <div className="orb w-[600px] h-[600px] bg-[#7b2ff7] bottom-0 left-1/3" />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-grid">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a23]/90 via-[#0a0a23]/70 to-[#0a0a23]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm text-gray-300">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Open Daily 10AM – 7PM &bull; Closed Thursday
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">MEMPHIS&apos; #1</span>
              <br />
              <span className="text-gradient">DISCOUNT BIN STORE</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl">
              Never pay retail again. Massive daily deals on electronics,
              home goods, tools, apparel &amp; more. New inventory weekly!
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/weekly-deals" className="btn-primary text-lg">
                <FontAwesomeIcon icon={faTag} />
                This Week&apos;s Deals
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
              <Link href="/about" className="btn-glass text-lg">
                Learn More
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-16 max-w-2xl">
            {[
              { icon: faBox, label: "New Drops", sub: "Every Week" },
              { icon: faDollarSign, label: "Crazy Prices", sub: "Daily" },
              { icon: faRunning, label: "First Come", sub: "First Served" },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass-card p-5 text-center"
              >
                <FontAwesomeIcon
                  icon={stat.icon}
                  className="text-2xl text-accent mb-2"
                />
                <p className="text-white font-semibold">{stat.label}</p>
                <p className="text-gray-400 text-sm">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WEEKLY SCHEDULE ===== */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Full Weekly Schedule
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Every day is a new deal at BSW Outlet. Here&apos;s how the week breaks down.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {schedule.map((item, i) => (
              <div
                key={i}
                className={`glass-card p-6 text-center ${
                  item.active ? "ring-2 ring-accent" : ""
                }`}
              >
                <div
                  className={`text-3xl font-bold mb-1 ${
                    item.price === "Closed"
                      ? "text-gray-500"
                      : "text-gradient"
                  }`}
                >
                  {item.price}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-3">
                  {item.day}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOCATIONS ===== */}
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a23] via-transparent to-[#0a0a23]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Find Us In Memphis
            </h2>
            <p className="text-gray-400 text-lg">
              The deals live here. You should too.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Location Cards */}
            {[
              {
                title: "BSW Outlet – Winchester",
                addr: "6777 Winchester Rd, Memphis, TN 38115",
                link: "https://maps.google.com/?q=6777+Winchester+Rd+Memphis+TN",
              },
              {
                title: "BSW Outlet – Summer Ave",
                addr: "4224 Summer Ave, Memphis, TN 38122",
                link: "https://maps.google.com/?q=4224+Summer+Ave+Memphis+TN",
              },
            ].map((loc, i) => (
              <div key={i} className="glass-card p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent shrink-0">
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">
                      {loc.title}
                    </h3>
                    <a
                      href={loc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="mr-2 text-accent"
                      />
                      {loc.addr}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Info Card */}
            <div className="glass-card p-8 lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent shrink-0">
                    <FontAwesomeIcon icon={faClock} size="lg" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Open Daily</p>
                    <p className="text-gray-400 text-sm">10AM – 7PM</p>
                    <p className="text-accent text-sm">Closed Thursday</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent shrink-0">
                    <FontAwesomeIcon icon={faPhone} size="lg" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Call Us</p>
                    <a
                      href="tel:+19016951857"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      (901) 695-1857
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent shrink-0">
                    <FontAwesomeIcon icon={faStar} size="lg" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Memphis&apos; Best</p>
                    <p className="text-gray-400 text-sm">Rated #1 bin store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="relative py-24 bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              What Memphis Is Saying
            </h2>
            <p className="text-gray-400 text-lg">
              Don&apos;t take our word for it.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-8 text-center min-h-[200px] transition-all duration-500">
              <div className="text-accent text-lg mb-3">
                {"★".repeat(testimonials[activeIndex].rating)}
                {"☆".repeat(5 - testimonials[activeIndex].rating)}
              </div>
              <p className="text-white text-lg mb-6 italic">
                &ldquo;{testimonials[activeIndex].text}&rdquo;
              </p>
              <p className="text-white font-semibold">
                {testimonials[activeIndex].name}
              </p>
              <p className="text-gray-500 text-sm">
                {testimonials[activeIndex].platform}
              </p>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === activeIndex
                      ? "bg-accent w-8"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-strong rounded-2xl p-12 md:p-20">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Ready to Save Big?
            </h2>
            <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
              Don&apos;t pay full price ever again. Come dig, find, and win at
              BSW Outlet — Memphis&apos; #1 discount bin store.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/weekly-deals" className="btn-primary text-lg">
                <FontAwesomeIcon icon={faTag} />
                See This Week&apos;s Deals
              </Link>
              <a href="tel:+19016951857" className="btn-glass text-lg">
                <FontAwesomeIcon icon={faPhone} />
                Call (901) 695-1857
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
