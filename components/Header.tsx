"use client";

import { useState } from "react";
import { ChevronDown, Globe2, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#why-us" },
  { label: "Our Packages", href: "#packages" },
  { label: "Flights", href: "#flights" },
  { label: "Visa Support", href: "#dubai-visa" },
  { label: "Contact Us", href: "#contact" }
];

const destinationLinks = [
  { label: "Zanzibar Beach Escape", href: "/packages/zanzibar" },
  { label: "Serengeti Safari", href: "/packages/serengeti-safari" },
  { label: "Ngorongoro Crater", href: "/packages/ngorongoro" },
  { label: "Kilimanjaro Climbing", href: "/packages/kilimanjaro" },
  { label: "Dubai Holiday", href: "/packages/dubai" },
  { label: "Corporate Travel", href: "/packages/corporate-travel" }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDestinationsOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[#064E4A] shadow-lg shadow-black/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 lg:py-5">
        <a
          href="#home"
          onClick={closeMenu}
          className="flex cursor-pointer items-center gap-3"
          aria-label="VistaWay Travel & Tours home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#38BDF8] bg-[#FFF8EF] text-[#064E4A] sm:h-12 sm:w-12">
            <Globe2 size={23} />
          </span>

          <span className="leading-tight">
            <span className="block text-lg font-black tracking-tight text-[#FFF8EF] sm:text-xl">
              VistaWay
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#38BDF8] sm:text-[11px]">
              Travel & Tours
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.slice(0, 2).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="cursor-pointer text-sm font-bold text-[#FFF8EF]/90 transition hover:text-[#FF6B5E]"
            >
              {link.label}
            </a>
          ))}

          <div className="group relative">
            <a
              href="#packages"
              className="flex cursor-pointer items-center gap-1 text-sm font-bold text-[#FFF8EF]/90 transition hover:text-[#FF6B5E]"
            >
              Destinations
              <ChevronDown
                size={15}
                className="transition group-hover:rotate-180"
              />
            </a>

            <div className="invisible absolute left-0 top-full z-[999] w-64 rounded-3xl border border-white/10 bg-white p-3 opacity-0 shadow-2xl transition group-hover:visible group-hover:opacity-100">
              {destinationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block rounded-2xl px-4 py-3 text-sm font-bold text-[#064E4A] transition hover:bg-[#D9F7EF] hover:text-[#FF6B5E]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {navLinks.slice(2).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="cursor-pointer text-sm font-bold text-[#FFF8EF]/90 transition hover:text-[#FF6B5E]"
            >
              {link.label}
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
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#FF6B5E] text-white lg:hidden"
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="absolute left-3 right-3 top-[72px] max-h-[calc(100vh-90px)] overflow-y-auto rounded-3xl border border-white/10 bg-[#064E4A] p-3 shadow-2xl lg:hidden">
          <div className="grid gap-1.5">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="cursor-pointer rounded-2xl px-4 py-2.5 text-[15px] font-bold text-[#FFF8EF] transition hover:bg-[#D9F7EF] hover:text-[#064E4A]"
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              onClick={() => setIsDestinationsOpen((current) => !current)}
              className="flex cursor-pointer items-center justify-between rounded-2xl px-4 py-2.5 text-left text-[15px] font-bold text-[#FFF8EF] transition hover:bg-[#D9F7EF] hover:text-[#064E4A]"
            >
              Destinations
              <ChevronDown
                size={17}
                className={`transition ${isDestinationsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isDestinationsOpen && (
              <div className="ml-3 grid gap-1 border-l border-white/15 pl-3">
                {destinationLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className="cursor-pointer rounded-xl px-3 py-2 text-[14px] font-bold text-[#D9F7EF] transition hover:bg-[#D9F7EF] hover:text-[#064E4A]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {navLinks.slice(2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="cursor-pointer rounded-2xl px-4 py-2.5 text-[15px] font-bold text-[#FFF8EF] transition hover:bg-[#D9F7EF] hover:text-[#064E4A]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#flights"
              onClick={closeMenu}
              className="mt-2 cursor-pointer rounded-full bg-[#FF6B5E] px-5 py-3 text-center text-[15px] font-black text-white"
            >
              Request Booking
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
