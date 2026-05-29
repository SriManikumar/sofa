import type { Metadata } from "next";
import Link from "next/link";
import { ProductCatalog } from "@/components/ProductCatalog";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse recliners, sofas, sectionals, and custom orders from Sree Recliners and Sofas.",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Catalog"
        title="Recliners, sofas & sectionals"
        description="Filter by category or order a fully custom piece built to your dimensions and fabric choice."
      />
      <ProductCatalog />
      <div className="mt-16 rounded-2xl border border-border bg-cream-dark px-6 py-8 text-center sm:px-12">
        <h3 className="font-display text-xl font-semibold text-brown">
          Need something unique?
        </h3>
        <p className="mx-auto mt-2 max-w-lg text-sm text-muted">
          We manufacture custom sofas and recliners to your exact specifications.
          Share dimensions, fabric, and delivery details for a free quote.
        </p>
        <Link
          href="/contact?type=custom-sofa"
          className="mt-6 inline-block rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-dark"
        >
          Order custom sofa
        </Link>
      </div>
    </div>
  );
}
