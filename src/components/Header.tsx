"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/data/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="group">
          <span className="font-display text-xl font-semibold text-brown sm:text-2xl">
            {site.name}
          </span>
          <span className="mt-0.5 block text-xs tracking-widest text-muted uppercase">
            Recliners &amp; Custom Sofas
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-accent"
                    : "text-brown-light hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="text-sm font-medium text-brown-light hover:text-accent"
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-brown px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-brown-light"
          >
            Order Custom
          </Link>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-0.5 w-6 bg-brown transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-brown transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-brown transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-cream px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-brown-light hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-brown-light hover:text-accent"
            >
              {site.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brown py-3 text-center text-sm font-medium text-cream"
            >
              Order Custom
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
