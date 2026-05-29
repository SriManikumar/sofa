import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustSignals } from "@/components/TrustSignals";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.name} — a family manufacturing unit trusted for recliners and custom sofas.`,
};

const values = [
  {
    title: "Family-run quality",
    text: "Every frame, cushion, and recliner mechanism is inspected by our own team before it leaves the workshop.",
  },
  {
    title: "Premium materials",
    text: "We use solid hardwood frames, high-density foam, and durable upholstery — no shortcuts on what you sit on every day.",
  },
  {
    title: "Custom orders welcome",
    text: "From single recliners to full living-room sets, we build to your dimensions, fabric, and delivery schedule.",
  },
];

const process = [
  { step: "Consult", detail: "Share your needs — room size, style, recliner type, and budget." },
  { step: "Measure", detail: "We confirm dimensions on-site or from your specifications." },
  { step: "Build", detail: "Frames, foam, upholstery, and recliner mechanisms assembled in our unit." },
  { step: "Deliver", detail: "Safe delivery and setup at your location." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={site.name}
        description="A family manufacturing unit in Hyderabad — building recliners and sofas with premium materials, honest workmanship, and direct maker-to-customer service."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-border/60">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=85"
              alt="Sree Recliners and Sofas manufacturing workshop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold text-charcoal">
              Built in our workshop, delivered to your home
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              {site.name} started as a small upholstery workshop and grew into a
              full manufacturing unit for recliners, sofas, and sectionals. We
              serve homeowners, interior designers, and businesses who want
              reliable seating made to order — not mass-produced imports.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              When you order from us, you deal directly with the makers. That
              means clearer communication, honest timelines, and furniture built
              the way you actually want it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream-dark/80 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading title="Why customers choose us" />
          <div className="mt-12">
            <TrustSignals />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Our values" title="What we stand for" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="card-lift rounded-2xl border border-border/80 bg-white p-7 shadow-sm"
            >
              <h3 className="font-display text-lg font-semibold text-charcoal">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-cream-dark/60 to-cream py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Process" title="How your order is made" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <div
                key={item.step}
                className="card-lift rounded-2xl border border-border/80 bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-semibold text-accent">
                  Step {i + 1}
                </span>
                <h3 className="font-display mt-2 text-lg font-semibold text-charcoal">
                  {item.step}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-charcoal sm:text-3xl">
          Browse our collection — then place your order
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted">
          Explore recliners and sofas online, or send a custom order request. We
          respond within one business day.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/products"
            className="rounded-full bg-charcoal px-8 py-3 text-sm font-semibold text-cream hover:bg-brown-light"
          >
            Browse collection
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-accent-dark"
          >
            Order custom sofa
          </Link>
        </div>
      </section>
    </>
  );
}
