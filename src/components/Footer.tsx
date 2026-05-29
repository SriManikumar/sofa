import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-brown text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold">{site.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-cream/75">
            {site.description}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wider uppercase">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            <li>
              <Link href="/products" className="hover:text-cream">
                Our Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-cream">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-cream">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-cream">
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wider uppercase">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            <li>{site.address}</li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-cream">
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-cream">
                {site.email}
              </a>
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {site.name}. Quality recliners &amp; sofas, made to order.
      </div>
    </footer>
  );
}
