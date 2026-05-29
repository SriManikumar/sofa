import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-charcoal/20 bg-charcoal text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold">{site.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">
            {site.description}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-gold-light uppercase">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
            <li>
              <Link href="/products" className="transition-colors hover:text-gold-light">
                Our Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition-colors hover:text-gold-light">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="transition-colors hover:text-gold-light">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-gold-light">
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-gold-light uppercase">
            Contact
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
            <li>{site.address}</li>
            <li>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-gold-light"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold-light"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-gold-light"
              >
                {site.email}
              </a>
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/45">
        © {new Date().getFullYear()} {site.name}. Quality recliners &amp; sofas,
        made to order.
      </div>
    </footer>
  );
}
