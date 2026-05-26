"use client";

import { useState } from "react";
import { Menu, Plane, X } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Flights", href: "#flights" },
  { label: "Dubai Visa", href: "#dubai-visa" },
  { label: "Packages", href: "#packages" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-tealDeep/10 bg-creamWhite/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#home"
          className="flex cursor-pointer items-center gap-3 font-black text-tealDeep"
          onClick={closeMenu}
          aria-label="VistaWay Travel & Tours home"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-tealDeep text-white shadow-lg shadow-tealDeep/20">
            <Plane size={22} />
          </span>
          <span className="leading-tight">
            VistaWay
            <span className="block text-xs font-bold tracking-[0.22em] text-coralWarm">
              TRAVEL & TOURS
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer text-sm font-bold text-charcoal/75 transition hover:text-coralWarm"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="#flights" variant="primary">
            Request Booking
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-tealDeep text-white shadow-md lg:hidden"
          aria-label="Toggle mobile menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="absolute left-4 right-4 top-[4.8rem] z-[60] rounded-[1.5rem] border border-tealDeep/10 bg-white p-4 shadow-2xl lg:hidden">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="cursor-pointer rounded-2xl px-4 py-3 text-sm font-bold text-charcoal transition hover:bg-mintSoft hover:text-tealDeep"
              >
                {link.label}
              </a>
            ))}
            <Button href="#flights" className="mt-2 w-full" onClick={closeMenu}>
              Request Booking
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
