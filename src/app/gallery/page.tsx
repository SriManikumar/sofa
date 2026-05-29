import type { Metadata } from "next";
import Link from "next/link";
import { GalleryFilter } from "@/components/GalleryFilter";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `See workshop photos and finished recliners and sofas from ${site.name}.`,
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Luxury finishes & our craft"
        description="Explore finished living rooms, premium upholstery, and behind-the-scenes work from our manufacturing unit."
      />
      <div className="page-gradient mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <GalleryFilter />
        <div className="mt-20 overflow-hidden rounded-3xl bg-charcoal px-6 py-12 text-center text-cream shadow-xl sm:px-14">
          <p className="font-display text-2xl font-semibold sm:text-3xl">
            Like what you see? Order your own.
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-cream/75">
            Send us your requirements and we&apos;ll match style, size, and fabric
            to your space.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-accent px-10 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 hover:bg-accent-dark"
          >
            Request a quote
          </Link>
        </div>
      </div>
    </>
  );
}
