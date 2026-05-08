"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faClock, faPaperPlane, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import FadeInView, { StaggerContainer, StaggerItem } from "@/components/FadeInView";

export default function ContactPage() {
  return (
    <div className="relative">
      <div className="orb w-[450px] h-[450px] bg-[#253998] -top-32 right-0" />
      <div className="orb w-[350px] h-[350px] bg-[#f4a261] bottom-0 left-0" />

      {/* HERO */}
      <section className="relative py-12 md:py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <img
              src="/images/storefront.png"
              alt="BSW Outlet - Find us in Memphis"
              className="w-full max-w-[550px] mx-auto h-auto"
            />
          </FadeInView>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <StaggerContainer className="space-y-6">
              <StaggerItem>
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Visit Us</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[var(--accent)] shrink-0">
                        <FontAwesomeIcon icon={faLocationDot} size="lg" />
                      </div>
                      <div>
                        <h3 className="text-slate-800 font-semibold">BSW Outlet – Winchester</h3>
                        <a href="https://www.google.com/maps/search/bsw+outlet+memphis+tn+map/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[var(--accent)] transition-colors">6777 Winchester Rd, Memphis, TN 38115</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[var(--accent)] shrink-0">
                        <FontAwesomeIcon icon={faLocationDot} size="lg" />
                      </div>
                      <div>
                        <h3 className="text-slate-800 font-semibold">BSW Outlet – Summer Ave</h3>
                        <a href="https://www.google.com/maps/search/bsw+outlet+memphis+tn+map/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[var(--accent)] transition-colors">4224 Summer Ave, Memphis, TN 38122</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[var(--accent)] shrink-0">
                        <FontAwesomeIcon icon={faPhone} size="lg" />
                      </div>
                      <div>
                        <h3 className="text-slate-800 font-semibold">Call Us</h3>
                        <a href="tel:+19016951857" className="text-slate-500 hover:text-[var(--accent)] transition-colors">(901) 695-1857</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[var(--accent)] shrink-0">
                        <FontAwesomeIcon icon={faClock} size="lg" />
                      </div>
                      <div>
                        <h3 className="text-slate-800 font-semibold">Store Hours</h3>
                        <div className="text-slate-500 space-y-1 mt-1">
                          <p>Mon – Wed: 10AM – 7PM</p>
                          <p className="text-[var(--accent)] font-medium">$10 Thursdays!</p>
                          <p>Fri – Sun: 10AM – 7PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="glass-card p-4">
                  <h3 className="text-slate-800 font-semibold text-sm mb-2 flex items-center gap-1.5">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[var(--accent)]" />
                    Winchester
                  </h3>
                  <div className="rounded-xl overflow-hidden h-[200px] border border-slate-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1633.1624023780382!2d-89.83736145!3d35.0486177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887f9aa4bc696b2d%3A0x49a8e29f1784842b!2s6777%20Winchester%20Rd%2C%20Memphis%2C%20TN%2038115%2C%20USA!5e0!3m2!1sen!2sph!4v1752691084913!5m2!1sen!2sph"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="BSW Outlet Winchester map"
                    />
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="glass-card p-4">
                  <h3 className="text-slate-800 font-semibold text-sm mb-2 flex items-center gap-1.5">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[var(--accent)]" />
                    Summer Ave
                  </h3>
                  <div className="rounded-xl overflow-hidden h-[200px] border border-slate-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.249266589289!2d-89.9247920074389!3d35.15040368873177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887f83ddc39f080d%3A0x28aa6d79989e56de!2s4224%20Summer%20Ave%2C%20Memphis%2C%20TN%2038122!5e0!3m2!1sen!2sus!4v1757355813833!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="BSW Outlet Summer Ave map"
                    />
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Contact Form */}
            <FadeInView direction="right">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-slate-500 mb-1.5">Your Name</label>
                      <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-500 mb-1.5">Your Email</label>
                      <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-500 mb-1.5">Phone (optional)</label>
                    <input type="tel" placeholder="(901) 555-0123" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-500 mb-1.5">Subject</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all appearance-none">
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="hours">Store Hours</option>
                      <option value="inventory">Inventory Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-500 mb-1.5">Message</label>
                    <textarea rows={5} placeholder="Tell us what's on your mind..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all resize-none" />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center text-lg"><FontAwesomeIcon icon={faPaperPlane} /> Send Message</button>
                  <p className="text-xs text-slate-400 text-center mt-4">By submitting, you agree to our <Link href="/privacy" className="text-[var(--accent)] hover:underline">Privacy Policy</Link></p>
                </form>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <div className="glass-strong rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Stop By Today</h2>
              <p className="text-slate-600 mb-8">No appointment needed. Just walk in and start saving.</p>
              <a href="tel:+19016951857" className="btn-primary text-lg"><FontAwesomeIcon icon={faPhone} /> Call (901) 695-1857</a>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
