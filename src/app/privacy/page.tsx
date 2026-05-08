"use client";

import FadeInView from "@/components/FadeInView";

export default function PrivacyPage() {
  return (
    <div className="relative">
      <div className="orb w-[400px] h-[400px] bg-[#253998] -top-20 -right-20" />
      <div className="orb w-[300px] h-[300px] bg-[#7b2ff7] bottom-0 left-0" />

      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a23] to-[#0a0a23]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="text-gradient">Privacy</span> Policy
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
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p>
                  When you visit BSW Outlet (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), we may collect information
                  you provide directly, such as your name, email address, and phone number when you sign up for
                  our newsletter or marketing campaigns. We also automatically collect certain technical data
                  including your IP address, browser type, and pages visited.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Send you promotional emails and SMS about deals and store updates</li>
                  <li>Improve our website and customer experience</li>
                  <li>Respond to your inquiries and customer service requests</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. SMS &amp; Email Communications</h2>
                <p>
                  By providing your phone number and checking the consent box, you agree to receive recurring
                  automated marketing messages from BSW Outlet. Message frequency varies. Reply STOP to opt out
                  at any time. Reply HELP for assistance. Message and data rates may apply.
                </p>
                <p className="mt-3">
                  We do not share your phone number with third parties for their own marketing purposes.
                  Your information is stored securely and used solely for BSW Outlet communications.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                <p>
                  We implement reasonable security measures to protect your personal information. However,
                  no method of electronic storage or transmission is 100% secure. We cannot guarantee absolute
                  security of your data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Services</h2>
                <p>
                  We may use third-party services for analytics, email delivery, and SMS messaging. These
                  providers have their own privacy policies governing the use of your information. We
                  encourage you to review their policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
                <p>
                  You may opt out of marketing communications at any time by clicking the unsubscribe link
                  in emails or replying STOP to SMS messages. You may also request access to, correction of,
                  or deletion of your personal data by contacting us.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us:
                </p>
                <p className="mt-2">
                  <strong>BSW Outlet</strong>
                  <br />
                  6777 Winchester Rd, Memphis, TN 38115
                  <br />
                  4224 Summer Ave, Memphis, TN 38122
                  <br />
                  <a href="tel:+19016951857" className="text-accent hover:underline">(901) 695-1857</a>
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
