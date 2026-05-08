"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faClock,
  faEnvelope,
  faPaperPlane,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="relative">
      {/* Orbs */}
      <div className="orb w-[450px] h-[450px] bg-[#253998] -top-32 right-0" />
      <div className="orb w-[350px] h-[350px] bg-[#f4a261] bottom-0 left-0" />

      {/* ===== HERO ===== */}
      <section className="relative py-24 md:py-32 bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a23] to-[#0a0a23]/80" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gray-300">
            We&apos;d love to hear from you. Reach out with questions, feedback, or just to say hi.
          </p>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Visit Us
                </h2>

                <div className="space-y-6">
                  {/* Location 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent shrink-0">
                      <FontAwesomeIcon icon={faLocationDot} size="lg" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        BSW Outlet – Winchester
                      </h3>
                      <a
                        href="https://maps.google.com/?q=6777+Winchester+Rd+Memphis+TN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        6777 Winchester Rd, Memphis, TN 38115
                      </a>
                    </div>
                  </div>

                  {/* Location 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent shrink-0">
                      <FontAwesomeIcon icon={faLocationDot} size="lg" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        BSW Outlet – Summer Ave
                      </h3>
                      <a
                        href="https://maps.google.com/?q=4224+Summer+Ave+Memphis+TN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        4224 Summer Ave, Memphis, TN 38122
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent shrink-0">
                      <FontAwesomeIcon icon={faPhone} size="lg" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Call Us</h3>
                      <a
                        href="tel:+19016951857"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        (901) 695-1857
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent shrink-0">
                      <FontAwesomeIcon icon={faClock} size="lg" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Store Hours</h3>
                      <div className="text-gray-400 space-y-1 mt-1">
                        <p>Mon – Wed: 10AM – 7PM</p>
                        <p className="text-accent">Thursday: Closed (Restock Day)</p>
                        <p>Fri – Sun: 10AM – 7PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map preview */}
              <div className="glass-card p-4 h-[250px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="text-accent mb-3" />
                  <p>Find us on Google Maps</p>
                  <p className="text-sm">6777 Winchester Rd &bull; 4224 Summer Ave</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Send a Message
                </h2>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="(901) 555-0123"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">
                      Subject
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent/50 transition-all appearance-none">
                      <option value="" className="bg-[#0a0a23]">Select a topic</option>
                      <option value="general" className="bg-[#0a0a23]">General Inquiry</option>
                      <option value="hours" className="bg-[#0a0a23]">Store Hours</option>
                      <option value="inventory" className="bg-[#0a0a23]">Inventory Question</option>
                      <option value="feedback" className="bg-[#0a0a23]">Feedback</option>
                      <option value="other" className="bg-[#0a0a23]">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us what's on your mind..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center text-lg">
                    <FontAwesomeIcon icon={faPaperPlane} />
                    Send Message
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy" className="text-accent hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-strong rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stop By Today
            </h2>
            <p className="text-gray-300 mb-8">
              No appointment needed. Just walk in and start saving.
            </p>
            <a href="tel:+19016951857" className="btn-primary text-lg">
              <FontAwesomeIcon icon={faPhone} />
              Call (901) 695-1857
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
