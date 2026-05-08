"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faGear,
  faHandshake,
  faEye,
  faBullseye,
  faTrophy,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
  return (
    <div className="relative">
      {/* Animated orbs */}
      <div className="orb w-[400px] h-[400px] bg-[#253998] -top-20 -right-20" />
      <div className="orb w-[500px] h-[500px] bg-[#7b2ff7] bottom-0 left-0" />

      {/* ===== HERO ===== */}
      <section className="relative py-24 md:py-36 bg-grid">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a23]/90 to-[#0a0a23]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            About <span className="text-gradient">BSW Outlet</span>
          </h1>
          <p className="text-xl text-gray-300">
            Big savings. Big collection. <strong className="text-white">Never pay retail again.</strong>
          </p>
        </div>
      </section>

      {/* ===== STORY ===== */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent shrink-0">
                <FontAwesomeIcon icon={faQuoteLeft} size="lg" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Our Story</h2>
                <p className="text-gray-400 text-sm">Abraham Hamed &bull; Owner</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                This is Memphis&apos; outlet for saving money. No fancy showroom, no overpriced markups. Just bins, shelves, racks, and crazy deals. We move fast, flip inventory daily, and pack this warehouse with new stuff all the time.
              </p>
              <p>
                At <strong className="text-white">BSW Outlet</strong>, every visit is a chance to score something incredible at a price that doesn&apos;t make your wallet flinch. Whether you&apos;re after electronics, tools, home goods, or just love the thrill of the bin hunt, this is your spot.
              </p>
              <p>
                You get <strong className="text-white">new inventory weekly</strong>, <strong className="text-white">deal days you won&apos;t believe</strong> ($1, $2, $5, $7), and a store full of people just like you. Ready to dig, find, and win.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Take a Look Inside
          </h2>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="glass-card overflow-hidden break-inside-avoid"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MEET THE TEAM ===== */}
      <section className="relative py-20 bg-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Meet The Team
            </h2>
            <p className="text-gray-400 text-lg">
              A crew of everyday people who believe saving money should actually be fun.
            </p>
          </div>

          <div className="glass-card p-10 text-center">
            <div className="w-24 h-24 rounded-full glass flex items-center justify-center text-3xl mx-auto mb-4">
              👤
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">Abraham Hamed</h3>
            <p className="text-accent font-medium mb-4">Store Manager &amp; Local Legend</p>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Abraham isn&apos;t some corporate suit. He&apos;s a Memphis-based entrepreneur who knows what
              it means to build something from the ground up. With roots in retail and a passion for
              customer-first business, Abraham opened BSW Outlet to give people a smarter way to shop.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="glass-card p-6 text-center">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent mx-auto mb-4">
                  <FontAwesomeIcon icon={v.icon} size="lg" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-strong rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Come Experience the Difference
            </h2>
            <p className="text-gray-300 mb-8">
              From the front registers to the back of the warehouse, we&apos;re a tight-knit team
              that&apos;s all about good energy, honest deals, and bringing something real to the community.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch
              <FontAwesomeIcon icon={faBullseye} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
