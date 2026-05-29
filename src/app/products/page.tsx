import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ProductCatalog } from "@/components/ProductCatalog";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse recliners, sofas, sectionals, and custom orders from Sree Recliners and Sofas.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Catalog"
        title="Recliners, sofas & sectionals"
        description="Filter by category or order a fully custom piece built to your dimensions and fabric choice."
      />
      <div className="page-gradient mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <ProductCatalog />
        <div className="mt-20 overflow-hidden rounded-3xl border border-border/80 bg-white px-6 py-10 text-center shadow-sm sm:px-14">
          <h3 className="font-display text-2xl font-semibold text-charcoal">
            Need something unique?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted">
            We manufacture custom sofas and recliners to your exact specifications.
            Share dimensions, fabric, and delivery details for a free quote.
          </p>
          <Link
            href="/contact?type=custom-sofa"
            className="mt-8 inline-block rounded-full bg-accent px-10 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 hover:bg-accent-dark"
          >
            Order custom sofa
          </Link>
        </div>
      </div>
    </>
  );
}
