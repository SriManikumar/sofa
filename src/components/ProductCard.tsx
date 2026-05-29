import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute top-3 left-3 rounded-full bg-brown/90 px-3 py-1 text-xs font-medium text-cream">
          {product.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-brown">
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
          className="mt-4 inline-block text-sm font-medium text-accent hover:text-accent-dark"
        >
          {product.category === "Custom" ? "Order custom →" : "Request quote →"}
        </Link>
      </div>
    </article>
  );
}
