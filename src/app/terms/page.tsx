"use client";

import FadeInView from "@/components/FadeInView";

export default function TermsPage() {
  return (
    <div className="relative">
      <div className="orb w-[400px] h-[400px] bg-[#e63946] -top-20 -left-20" />
      <div className="orb w-[300px] h-[300px] bg-[#f4a261] bottom-0 right-0" />

      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a23] to-[#0a0a23]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Terms &amp; <span className="text-gradient">Conditions</span>
          </h1>
          <p className="text-gray-400">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="glass-card p-8 md:p-12 space-y-8 text-gray-300 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using the BSW Outlet website and services, you agree to be bound by
                  these Terms and Conditions. If you do not agree with any part of these terms, you
                  should not use our website or services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Store Policies</h2>
                <p>
                  All sales at BSW Outlet physical locations are final unless otherwise stated.
                  Prices are as marked and may change without notice. Inventory varies daily and
                  is available on a first-come, first-served basis.
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>All items sold &ldquo;as is&rdquo; with no warranties expressed or implied</li>
                  <li>No price adjustments on previous purchases</li>
                  <li>Store hours and pricing are subject to change</li>
                  <li>We reserve the right to limit quantities on certain items</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Website Use</h2>
                <p>
                  You agree not to use the BSW Outlet website for any unlawful purpose or in violation
                  of these terms. You may not reproduce, distribute, or create derivative works from
                  our content without prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Marketing Communications</h2>
                <p>
                  By providing your contact information and opting in, you consent to receive marketing
                  communications from BSW Outlet via email and SMS. You may opt out at any time by
                  following the unsubscribe instructions in our messages.
                </p>
                <p className="mt-3">
                  <strong>SMS Terms:</strong> Message frequency varies. Message and data rates may apply.
                  Reply HELP for help, reply STOP to cancel. Carriers are not liable for delayed or
                  undelivered messages.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                <p>
                  BSW Outlet shall not be liable for any indirect, incidental, special, consequential,
                  or punitive damages arising out of your use of our website or services. Our total
                  liability shall not exceed the amount paid by you, if any, for using our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective
                  immediately upon posting to our website. Your continued use of the site after changes
                  constitutes acceptance of the new terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Contact</h2>
                <p>
                  For questions about these terms, please contact us:
                </p>
                <p className="mt-2">
                  <strong>BSW Outlet</strong>
                  <br />
                  <a href="tel:+19016951857" className="text-accent hover:underline">(901) 695-1857</a>
                  <br />
                  6777 Winchester Rd, Memphis, TN 38115
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
