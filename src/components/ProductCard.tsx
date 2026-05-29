import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card-lift group overflow-hidden rounded-2xl border border-border/80 bg-white shadow-sm ring-1 ring-border/40">
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute top-3 left-3 rounded-full bg-charcoal/85 px-3 py-1 text-xs font-medium tracking-wide text-cream backdrop-blur-sm">
          {product.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-charcoal">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
          {product.description}
        </p>
        <p className="mt-3 text-xs text-brown-light">{product.dimensions}</p>
        <Link
          href={
            product.category === "Custom"
              ? "/contact?type=custom-sofa"
              : "/contact"
          }
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent-dark"
        >
          {product.category === "Custom" ? "Order custom" : "Request quote"}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
