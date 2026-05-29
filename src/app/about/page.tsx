import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
    title: "Honest materials",
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
      <section className="bg-brown py-16 text-cream sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            About us
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-4xl font-semibold sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cream/80">
            For over {site.yearsInBusiness} years, our family has manufactured
            recliners and sofas that customers trust for comfort, durability, and
            fair pricing — without the markup of big retail chains.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1589939705383-27ae3b7f4a0a?w=800&q=80"
              alt="Sree Recliners and Sofas manufacturing workshop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold text-brown">
              Built in our workshop, delivered to your home
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {site.name} started as a small upholstery workshop and grew into a
              full manufacturing unit for recliners, sofas, and sectionals. Today
              we serve homeowners, interior designers, and businesses who want
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

      <section className="bg-cream-dark py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading title="Why customers choose us" />
          <div className="mt-10">
            <TrustSignals />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Our values"
          title="What we stand for"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-white p-6"
            >
              <h3 className="font-display text-lg font-semibold text-brown">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-dark py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Process"
            title="How your order is made"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <div
                key={item.step}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <span className="text-sm font-semibold text-accent">
                  Step {i + 1}
                </span>
                <h3 className="font-display mt-2 text-lg font-semibold text-brown">
                  {item.step}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-brown">
          Visit us virtually — then place your order
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted">
          Browse our catalog or send a custom order request. We respond within
          one business day.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/products"
            className="rounded-full bg-brown px-8 py-3 text-sm font-semibold text-cream hover:bg-brown-light"
          >
            Browse collection
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-dark"
          >
            Order custom sofa
          </Link>
        </div>
      </section>
    </>
  );
}
