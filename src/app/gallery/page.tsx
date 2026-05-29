import type { Metadata } from "next";
import Link from "next/link";
import { GalleryFilter } from "@/components/GalleryFilter";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `See workshop photos and finished recliners and sofas from ${site.name}.`,
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Gallery"
        title="Our workshop & finished work"
        description="Take a virtual tour of how we build recliners and sofas — from frame assembly to delivery in your home."
      />
      <GalleryFilter />
      <div className="mt-16 rounded-2xl bg-brown px-6 py-10 text-center text-cream sm:px-12">
        <p className="font-display text-xl font-semibold">
          Like what you see? Order your own.
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm text-cream/75">
          Send us your requirements and we&apos;ll match style, size, and fabric
          to your space.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-dark"
        >
          Request a quote
        </Link>
      </div>
    </div>
  );
}
