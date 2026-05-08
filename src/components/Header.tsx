"use client";

import { useState } from "react";
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
} from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { href: "/", label: "Home", icon: faHome },
  { href: "/about", label: "About", icon: faInfoCircle },
  { href: "/weekly-deals", label: "Weekly Deals", icon: faCalendarAlt },
  { href: "/contact", label: "Contact Us", icon: faEnvelope },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Notification Bar */}
      <div className="notification-bar">
        <span>🎉 NEW LOCATION NOW OPEN — 4224 Summer Ave &nbsp;|&nbsp; BSW OUTLET</span>
      </div>

      {/* Navbar */}
      <header className="nav-glass sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <img
                src="/images/logo.png"
                alt="BSW Outlet"
                className="h-10 w-auto"
              />
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-white">BSW</span>
                <span className="text-sm text-gray-400 ml-1">Outlet</span>
              </div>
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
                        ? "glass text-white"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
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
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faPhone} className="text-accent" />
                <span>(901) 695-1857</span>
              </a>
              <Link href="/weekly-deals" className="btn-primary text-sm !py-2 !px-4">
                <FontAwesomeIcon icon={faTag} />
                Weekly Deals
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} size="lg" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "glass text-white"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
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
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                >
                  <FontAwesomeIcon icon={faPhone} className="text-accent" />
                  (901) 695-1857
                </a>
                <Link
                  href="/weekly-deals"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center text-sm"
                >
                  <FontAwesomeIcon icon={faTag} />
                  Weekly Deals
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
