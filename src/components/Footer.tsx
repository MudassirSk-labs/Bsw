import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faClock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="relative mt-auto">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a23] to-[#100a30]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.png"
                alt="BSW Outlet"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-white">BSW Outlet</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Memphis&apos; #1 discount bin store. Never pay retail again.
              Massive daily deals on electronics, home goods, tools, apparel &amp; more.
            </p>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-accent" />
              Locations
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white font-medium">Winchester</p>
                <a
                  href="https://maps.google.com/?q=6777+Winchester+Rd+Memphis+TN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  6777 Winchester Rd
                  <br />
                  Memphis, TN 38115
                </a>
              </div>
              <div>
                <p className="text-white font-medium">Summer Ave</p>
                <a
                  href="https://maps.google.com/?q=4224+Summer+Ave+Memphis+TN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  4224 Summer Ave
                  <br />
                  Memphis, TN 38122
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faClock} className="text-accent" />
              Store Hours
            </h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>Mon – Wed</span>
                <span className="text-white">10AM – 7PM</span>
              </div>
              <div className="flex justify-between">
                <span>Thursday</span>
                <span className="text-accent">Closed</span>
              </div>
              <div className="flex justify-between">
                <span>Fri – Sun</span>
                <span className="text-white">10AM – 7PM</span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <a
                  href="tel:+19016951857"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faPhone} className="text-accent" />
                  (901) 695-1857
                </a>
              </div>
            </div>
          </div>

          {/* Social + Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all"
                aria-label="TikTok"
              >
                <FontAwesomeIcon icon={faTiktok} size="lg" />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <Link
                href="/weekly-deals"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Weekly Deals
              </Link>
              <Link
                href="/contact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} BSW Outlet. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
