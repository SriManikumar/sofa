"use client";

import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import {
  productCategories,
  products,
  type ProductCategory,
} from "@/data/products";

export function ProductCatalog() {
  const [active, setActive] = useState<ProductCategory | "All">("All");

  const filtered =
    active === "All"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <>
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        <FilterButton
          label="All"
          active={active === "All"}
          onClick={() => setActive("All")}
        />
        {productCategories.map((cat) => (
          <FilterButton
            key={cat}
            label={cat}
            active={active === cat}
            onClick={() => setActive(cat)}
          />
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-muted">
        Showing {filtered.length} {filtered.length === 1 ? "item" : "items"}
        {active !== "All" ? ` in ${active}` : ""}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {active === "Custom" && (
        <p className="mt-8 rounded-xl border border-accent/30 bg-accent/5 px-6 py-4 text-center text-sm text-brown-light">
          Every custom order includes a free consultation. Share your room
          dimensions, preferred fabric, and recliner type on our{" "}
          <a href="/contact" className="font-semibold text-accent hover:underline">
            order form
          </a>
          .
        </p>
      )}
    </>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
        active
          ? "bg-brown text-cream"
          : "border border-border bg-white text-brown-light hover:border-accent hover:text-accent"
      }`}
    >
      {label}
    </button>
  );
}
