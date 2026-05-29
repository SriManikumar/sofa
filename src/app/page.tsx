import Image from "next/image";
import Link from "next/link";
import { GalleryGrid } from "@/components/GalleryGrid";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustSignals } from "@/components/TrustSignals";
import { galleryItems } from "@/data/gallery";
import { products } from "@/data/products";
import { site } from "@/data/site";

const featuredProducts = products.filter((p) => p.featured);
const previewGallery = galleryItems.slice(0, 6);

const processSteps = [
  {
    step: "01",
    title: "Share your requirements",
    text: "Tell us sofa or recliner type, dimensions, fabric, quantity, and delivery location.",
  },
  {
    step: "02",
    title: "Confirm & quote",
    text: "We review feasibility and send a clear quote — usually within 24 hours.",
  },
  {
    step: "03",
    title: "Build in our unit",
    text: "Frames, foam, upholstery, and recliner mechanisms assembled by our skilled team.",
  },
  {
    step: "04",
    title: "Deliver to your door",
    text: "Safe delivery and setup so your furniture is ready to use.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden text-cream">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=85"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/92 to-charcoal/55" />
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 70% 50%, rgba(201, 169, 98, 0.2), transparent)",
          }}
        />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-24 sm:px-6 sm:py-32 lg:py-44">
          <p className="text-sm font-semibold tracking-[0.25em] text-gold-light uppercase">
            Family-crafted quality · Premium materials
          </p>
          <h1 className="font-display max-w-3xl text-4xl leading-[1.1] font-semibold sm:text-5xl lg:text-6xl">
            Recliners &amp; sofas crafted for your home
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-cream/80">
            {site.tagline}. Browse our collection online, then order ready-made
            models or a fully custom sofa built to your dimensions and fabric.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
            >
              Browse collection
            </Link>
            <Link
              href="/contact?type=custom-sofa"
              className="rounded-full border border-cream/25 bg-cream/5 px-8 py-3.5 text-sm font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream/15"
            >
              Order custom sofa
            </Link>
          </div>
          <div className="mt-6 border-t border-cream/15 pt-8">
            <TrustSignals variant="compact" />
          </div>
        </div>
      </section>

      <section className="page-gradient mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <TrustSignals />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <SectionHeading
          eyebrow="Featured"
          title="Popular recliners & sofas"
          description="Each model can be customized in size, fabric, and finish. Request a quote for exact pricing."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="text-sm font-semibold text-accent transition-colors hover:text-accent-dark"
          >
            View full catalog →
          </Link>
        </div>
      </section>

      <section className="bg-cream-dark/80 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="How to order"
            title="From browse to delivery"
            description="Order online with confidence — we guide you from quote to installation."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="card-lift rounded-2xl border border-border/80 bg-white p-7 shadow-sm"
              >
                <span className="font-display text-3xl font-semibold text-gold/50">
                  {item.step}
                </span>
                <h3 className="font-display mt-4 text-lg font-semibold text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-border/60">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=85"
              alt="Sree Recliners and Sofas workshop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
              About {site.shortName}
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-charcoal sm:text-4xl">
              Crafted in our workshop, delivered to your door
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              {site.name} is a family-run manufacturing unit where premium
              materials and honest workmanship come first. We welcome custom
              orders — any size, any fabric — and deliver directly to your home.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm font-semibold text-accent hover:text-accent-dark"
            >
              Learn more about us →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-cream-dark/60 to-cream py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Gallery"
            title="See our craft before you order"
            description="Finished luxury sofas and recliners in real homes — plus glimpses from our workshop."
          />
          <div className="mt-14">
            <GalleryGrid items={previewGallery} columns={3} layout="masonry" />
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-flex rounded-full border border-border bg-white px-8 py-3 text-sm font-semibold text-charcoal shadow-sm transition-colors hover:border-gold hover:text-accent"
            >
              View full gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-charcoal px-8 py-14 text-center text-cream shadow-2xl sm:px-16 sm:py-18">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 0%, var(--gold) 0%, transparent 55%)",
            }}
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Ready to order your recliner or custom sofa?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-cream/75">
              Share dimensions, fabric, recliner type, quantity, and delivery
              location — we&apos;ll send a personalized quote within one business
              day.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="rounded-full border border-cream/25 px-8 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
              >
                Browse collection
              </Link>
              <Link
                href="/contact?type=custom-sofa"
                className="rounded-full bg-accent px-10 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-dark"
              >
                Order custom sofa
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
