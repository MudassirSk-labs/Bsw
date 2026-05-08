"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faTag,
  faBars,
  faXmark,
  faHome,
  faInfoCircle,
  faCalendarAlt,
  faEnvelope,
  faCrown,
  faCouch,
  faQuestionCircle,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "@/i18n/context";

const dayKeys = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [todayMsg, setTodayMsg] = useState("");
  const pathname = usePathname();
  const { t, lang, toggleLang } = useTranslation();

  // Build notification message
  useEffect(() => {
    const now = new Date();
    const dayKey = dayKeys[now.getDay()]; // "sunday"... "saturday"
    const shortKey = dayKey === "thursday" ? "thu" : dayKey.substring(0, 3);
    const dayLabel = t(`header.notification.${dayKey}`);
    const price = t(`header.notification.prices.${shortKey}`);
    const emoji = t(`header.notification.emojis.${shortKey}`);
    const prefix = t("header.notification.prefix");
    const everything = t("header.notification.everything");
    const open = t("header.notification.open");
    const tagline = t("header.notification.tagline");
    setTodayMsg(`${emoji} ${prefix} ${dayLabel}! ${everything} ${price}. ${open} ${tagline}`);
  }, [t, lang]);

  const navLinks = [
    { href: "/", label: t("header.nav.home"), icon: faHome },
    { href: "/about", label: t("header.nav.about"), icon: faInfoCircle },
    { href: "/weekly-deals", label: t("header.nav.weeklyDeals"), icon: faCalendarAlt },
    { href: "/vip", label: t("header.nav.vip"), icon: faCrown },
    { href: "/furniture", label: t("header.nav.furniture"), icon: faCouch },
    { href: "/faq", label: t("header.nav.faq"), icon: faQuestionCircle },
    { href: "/careers", label: t("header.nav.careers"), icon: faBriefcase },
    { href: "/contact", label: t("header.nav.contact"), icon: faEnvelope },
  ];

  return (
    <>
      {/* Language Switcher Bar */}
      <div className="flex items-center justify-end gap-1 px-4 py-1 bg-slate-900 text-xs">
        <button
          onClick={() => { if (lang !== "en") toggleLang(); }}
          className={`px-2 py-0.5 rounded transition-colors ${lang === "en" ? "text-white font-semibold" : "text-slate-400 hover:text-white"}`}
        >
          EN
        </button>
        <span className="text-slate-600">|</span>
        <button
          onClick={() => { if (lang !== "es") toggleLang(); }}
          className={`px-2 py-0.5 rounded transition-colors ${lang === "es" ? "text-white font-semibold" : "text-slate-400 hover:text-white"}`}
        >
          ES
        </button>
      </div>

      {/* Notification Bar */}
      <div className="notification-bar">
        <span>{todayMsg || "BSW Outlet — Never Pay Retail Again!"}</span>
      </div>

      {/* Navbar */}
      <header className="nav-glass sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/images/logo.png"
                alt="BSW Outlet"
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-[var(--blue)] text-white shadow-sm"
                        : "text-slate-600 hover:text-[var(--blue)] hover:bg-blue-50"
                    }`}
                  >
                    <FontAwesomeIcon icon={link.icon} className="mr-2" />
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+19016951857"
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                <FontAwesomeIcon icon={faPhone} className="text-[var(--accent)]" />
                <span>(901) 695-1857</span>
              </a>
              <Link href="/weekly-deals" className="btn-primary text-sm !py-2 !px-4">
                <FontAwesomeIcon icon={faTag} />
                {t("header.weeklyDeals")}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-slate-700 p-2 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} size="lg" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-200">
            <div className="px-4 py-4 space-y-2 bg-white">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-[var(--blue)] text-white"
                        : "text-slate-600 hover:text-[var(--blue)] hover:bg-blue-50"
                    }`}
                  >
                    <FontAwesomeIcon icon={link.icon} className="w-5" />
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-2 space-y-2">
                <a
                  href="tel:+19016951857"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all"
                >
                  <FontAwesomeIcon icon={faPhone} className="text-[var(--accent)]" />
                  (901) 695-1857
                </a>
                <Link
                  href="/weekly-deals"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center text-sm"
                >
                  <FontAwesomeIcon icon={faTag} />
                  {t("header.weeklyDeals")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
