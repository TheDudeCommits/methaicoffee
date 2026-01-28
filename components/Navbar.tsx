"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/menu", label: "MENU" },
    { href: "#about", label: "STORY" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm navbar-wood">
      <nav
        className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 text-coffee-800 transition-colors hover:text-[#1C39BB]"
            aria-label="ME THAI COFFEE - Home"
          >
            <Image
              src="/logo-icon.PNG"
              alt="ME THAI logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="text-xs font-medium tracking-[0.18em] uppercase text-coffee-700">
              ME THAI COFFEE
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8 font-medium tracking-[0.18em] text-xs text-coffee-700">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1 uppercase transition-colors hover:text-[#1C39BB] relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#1C39BB] after:transition-all after:duration-200 hover:after:w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-coffee-600 hover:text-coffee-700 focus:outline-none focus:ring-2 focus:ring-coffee-400 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden py-4 border-t border-gray-100"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-2 text-coffee-700 font-medium uppercase tracking-[0.18em] hover:text-[#1C39BB] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
