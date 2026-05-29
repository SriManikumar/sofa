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
const previewGallery = galleryItems.slice(0, 4);

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
      <section className="relative overflow-hidden bg-brown text-cream">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1540574163026-d643ea2f2f08?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brown via-brown/90 to-brown/60" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            Trusted family manufacturing · {site.yearsInBusiness} years
          </p>
          <h1 className="font-display max-w-3xl text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">
            Recliners &amp; sofas crafted for your home
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-cream/80">
            {site.tagline}. Browse our collection online, then order ready-made
            models or a fully custom sofa built to your dimensions and fabric.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Browse collection
            </Link>
            <Link
              href="/contact?type=custom-sofa"
              className="rounded-full border border-cream/30 px-8 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              Order custom sofa
            </Link>
          </div>
          <div className="mt-4 border-t border-cream/20 pt-8">
            <TrustSignals variant="compact" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <TrustSignals />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <SectionHeading
          eyebrow="Featured"
          title="Popular recliners & sofas"
          description="Each model can be customized in size, fabric, and finish. Request a quote for exact pricing."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="text-sm font-semibold text-accent hover:text-accent-dark"
          >
            View full catalog →
          </Link>
        </div>
      </section>

      <section className="bg-cream-dark py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="How to order"
            title="From browse to delivery"
            description="Order online with confidence — we guide you from quote to installation."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <span className="font-display text-3xl font-semibold text-accent/40">
                  {item.step}
                </span>
                <h3 className="font-display mt-3 text-lg font-semibold text-brown">
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

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1589939705383-27ae3b7f4a0a?w=800&q=80"
              alt="Sree Recliners and Sofas workshop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">
              About {site.shortName}
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-brown sm:text-4xl">
              A name families trust for recliners &amp; sofas
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {site.name} is a family-run manufacturing unit where quality
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

      <section className="bg-cream-dark py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Gallery"
            title="See our craft before you order"
            description="Workshop photos and finished recliners and sofas in customers&apos; homes."
          />
          <div className="mt-12">
            <GalleryGrid items={previewGallery} columns={4} />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="text-sm font-semibold text-accent hover:text-accent-dark"
            >
              View full gallery →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="rounded-3xl bg-brown px-8 py-12 text-center text-cream sm:px-16 sm:py-16">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Ready to order your recliner or custom sofa?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-cream/75">
            Share dimensions, fabric, recliner type, quantity, and delivery
            location — we&apos;ll send a personalized quote within one business day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="rounded-full border border-cream/30 px-8 py-3.5 text-sm font-semibold text-cream hover:bg-cream/10"
            >
              Browse collection
            </Link>
            <Link
              href="/contact?type=custom-sofa"
              className="rounded-full bg-accent px-10 py-3.5 text-sm font-semibold text-white hover:bg-accent-dark"
            >
              Order custom sofa
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
