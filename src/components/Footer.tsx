"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { useT } from "@/i18n/context";

export default function Footer() {
  const t = useT();

  return (
    <footer className="relative mt-auto border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <img
                src="/images/logo.png"
                alt="BSW Outlet"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-slate-800 font-semibold mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[var(--accent)]" />
              {t("footer.locations")}
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-slate-700 font-medium">Winchester</p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=6777+Winchester+Rd,+Memphis,+TN+38115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-[var(--accent)] transition-colors"
                >
                  6777 Winchester Rd
                  <br />
                  Memphis, TN 38115
                </a>
              </div>
              <div>
                <p className="text-slate-700 font-medium">Summer Ave</p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=4224+Summer+Ave,+Memphis,+TN+38122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-[var(--accent)] transition-colors"
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
            <h3 className="text-slate-800 font-semibold mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faClock} className="text-[var(--accent)]" />
              {t("footer.hours")}
            </h3>
            <div className="space-y-2 text-sm text-slate-500">
              <div className="flex justify-between gap-2">
                <span>{t("footer.monWed")}</span>
                <span className="text-slate-800 font-medium">10AM – 7PM</span>
              </div>
              <div className="flex justify-between gap-2">
                <span>{t("footer.thu")}</span>
                <span className="text-[var(--blue)] font-semibold text-xs">$10 Deal Day!</span>
              </div>
              <div className="flex justify-between gap-2">
                <span>{t("footer.friSun")}</span>
                <span className="text-slate-800 font-medium">10AM – 7PM</span>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <a
                  href="tel:+19016951857"
                  className="flex items-center gap-2 text-slate-500 hover:text-[var(--accent)] transition-colors"
                >
                  <FontAwesomeIcon icon={faPhone} className="text-[var(--accent)]" />
                  (901) 695-1857
                </a>
              </div>
            </div>
          </div>

          {/* Social + Quick links */}
          <div>
            <h3 className="text-slate-800 font-semibold mb-4">{t("footer.follow")}</h3>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.facebook.com/people/BSW-outlet/61575132308874/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[var(--accent)] hover:text-white transition-all"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a
                href="https://www.instagram.com/bswoutlet/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[var(--accent)] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="https://www.tiktok.com/@bswoutlet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[var(--accent)] hover:text-white transition-all"
                aria-label="TikTok"
              >
                <FontAwesomeIcon icon={faTiktok} size="lg" />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <Link
                href="/faq"
                className="block text-slate-500 hover:text-[var(--accent)] transition-colors"
              >
                {t("header.nav.faq")}
              </Link>
              <Link
                href="/careers"
                className="block text-slate-500 hover:text-[var(--accent)] transition-colors"
              >
                {t("header.nav.careers")}
              </Link>
              <Link
                href="/vip"
                className="block text-slate-500 hover:text-[var(--accent)] transition-colors"
              >
                {t("header.nav.vip")}
              </Link>
              <Link
                href="/furniture"
                className="block text-slate-500 hover:text-[var(--accent)] transition-colors"
              >
                {t("header.nav.furniture")}
              </Link>
              <Link
                href="/weekly-deals"
                className="block text-slate-500 hover:text-[var(--accent)] transition-colors"
              >
                {t("header.nav.weeklyDeals")}
              </Link>
              <Link
                href="/contact"
                className="block text-slate-500 hover:text-[var(--accent)] transition-colors"
              >
                {t("header.nav.contact")}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} BSW Outlet. {t("footer.rights")} &nbsp;|&nbsp; {t("footer.websiteBy")}{" "}
            <a
              href="https://www.amsitservices.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors"
            >
              Mudassir
            </a>
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-[var(--accent)] transition-colors">
              {t("footer.terms")}
            </Link>
            <Link href="/privacy" className="hover:text-[var(--accent)] transition-colors">
              {t("footer.privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
