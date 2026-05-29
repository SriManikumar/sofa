import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
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
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Order & contact"
        title="Request a quote or custom order"
        description="Fill in your details below — especially for custom sofas: dimensions, fabric, recliner type, quantity, and delivery location."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm defaultOrderType={defaultOrderType} />
        </div>

        <aside className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-border bg-white p-6">
            <h3 className="font-display text-lg font-semibold text-brown">
              Visit & call
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <span className="block font-medium text-brown">Address</span>
                {site.address}
              </li>
              <li>
                <span className="block font-medium text-brown">Phone</span>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="hover:text-accent"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <span className="block font-medium text-brown">Email</span>
                <a href={`mailto:${site.email}`} className="hover:text-accent">
                  {site.email}
                </a>
              </li>
              <li>
                <span className="block font-medium text-brown">Hours</span>
                {site.hours}
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
            <h3 className="font-display text-lg font-semibold text-brown">
              WhatsApp us
            </h3>
            <p className="mt-2 text-sm text-muted">
              Prefer to chat? Message us with your order details and photos of
              your room.
            </p>
            <a
              href={site.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-brown px-6 py-2.5 text-sm font-medium text-cream hover:bg-brown-light"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-cream-dark p-6 text-sm text-muted">
            <p>
              <strong className="text-brown">Custom sofa tip:</strong> Include
              length, width, height, fabric color, and whether you need recliner
              mechanisms. We&apos;ll confirm feasibility before quoting.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
