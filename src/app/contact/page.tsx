import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Orders",
  description: `Order custom sofas and recliners from ${site.name}. Free quote within 24 hours.`,
};

type SearchParams = Promise<{ type?: string }>;

export default async function ContactPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const defaultOrderType = params.type ?? "";

  return (
    <>
      <PageHero
        eyebrow="Order & contact"
        title="Request a quote or custom order"
        description="Share dimensions, fabric, recliner type, quantity, and delivery location — especially for custom sofas."
      />
      <div className="page-gradient mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm defaultOrderType={defaultOrderType} />
          </div>

          <aside className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-border/80 bg-white p-7 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-charcoal">
                Visit & call
              </h3>
              <ul className="mt-5 space-y-4 text-sm text-muted">
                <li>
                  <span className="block font-medium text-charcoal">Address</span>
                  {site.address}
                </li>
                <li>
                  <span className="block font-medium text-charcoal">Phone</span>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-accent"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <span className="block font-medium text-charcoal">Email</span>
                  <a
                    href={`mailto:${site.email}`}
                    className="transition-colors hover:text-accent"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <span className="block font-medium text-charcoal">Hours</span>
                  {site.hours}
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-champagne/80 to-cream-dark p-7">
              <h3 className="font-display text-lg font-semibold text-charcoal">
                WhatsApp us
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Prefer to chat? Message us with your order details and photos of
                your room.
              </p>
              <a
                href={site.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-full bg-charcoal px-7 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-brown-light"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl border border-border/80 bg-white/60 p-6 text-sm leading-relaxed text-muted">
              <p>
                <strong className="text-charcoal">Custom sofa tip:</strong> Include
                length, width, height, fabric color, and whether you need recliner
                mechanisms. We&apos;ll confirm feasibility before quoting.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
