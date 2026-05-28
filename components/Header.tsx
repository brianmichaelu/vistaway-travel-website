"use client";

import { useState } from "react";
import { ChevronDown, Globe2, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#why-us" },
  { label: "Destinations", href: "#packages", hasDropdown: true },
  { label: "Our Packages", href: "#packages" },
  { label: "UAE, Qatar & China Visa Application Support", href: "#flights" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[#064E4A] shadow-lg shadow-black/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <a
          href="#home"
          onClick={closeMenu}
          className="flex cursor-pointer items-center gap-3"
          aria-label="VistaWay Travel & Tours home"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#38BDF8] bg-[#FFF8EF] text-[#064E4A]">
            <Globe2 size={25} />
          </span>

          <span className="leading-tight">
            <span className="block text-xl font-black tracking-tight text-[#FFF8EF]">
              VistaWay
            </span>
            <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-[#38BDF8]">
              Travel & Tours
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex cursor-pointer items-center gap-1 text-sm font-bold text-[#FFF8EF]/90 transition hover:text-[#FF6B5E]"
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown
                  size={15}
                  className="transition group-hover:rotate-180"
                />
              )}
            </a>
          ))}
        </div>

        <a
          href="#flights"
          className="hidden cursor-pointer rounded-full bg-[#FF6B5E] px-5 py-3 text-sm font-black text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#f45e51] lg:inline-flex"
        >
          Request Booking
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#FF6B5E] text-white lg:hidden"
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="absolute left-4 right-4 top-[5.7rem] z-[999] rounded-3xl border border-white/10 bg-[#064E4A] p-4 shadow-2xl lg:hidden">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="cursor-pointer rounded-2xl px-4 py-3 text-sm font-bold text-[#FFF8EF] transition hover:bg-[#D9F7EF] hover:text-[#064E4A]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#flights"
              onClick={closeMenu}
              className="mt-2 cursor-pointer rounded-full bg-[#FF6B5E] px-5 py-3 text-center text-sm font-black text-white"
            >
              Request Booking
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
