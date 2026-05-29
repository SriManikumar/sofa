import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";

function masonrySpan(index: number, featured: boolean): string {
  if (featured && index === 0) {
    return "sm:col-span-2 sm:row-span-2";
  }
  if (index % 7 === 4 || index % 7 === 6) {
    return "sm:row-span-2";
  }
  return "";
}

export function GalleryGrid({
  items,
  columns = 4,
  layout = "grid",
}: {
  items: GalleryItem[];
  columns?: 2 | 3 | 4;
  layout?: "grid" | "masonry";
}) {
  const gridClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : columns === 3
        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  const isMasonry = layout === "masonry";

  return (
    <div
      className={
        isMasonry
          ? `grid auto-rows-[minmax(180px,auto)] gap-4 ${gridClass}`
          : `grid gap-4 ${gridClass}`
      }
    >
      {items.map((item, index) => (
        <figure
          key={item.id}
          className={`group relative overflow-hidden rounded-2xl bg-cream-dark shadow-sm ring-1 ring-border/60 card-lift ${
            isMasonry
              ? `min-h-[220px] ${masonrySpan(index, true)}`
              : "aspect-square"
          }`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes={
              isMasonry && index === 0
                ? "(max-width: 768px) 100vw, 66vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
          />
          <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent p-5 pt-16 opacity-95 transition-opacity group-hover:opacity-100">
            <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-gold-light uppercase">
              {item.category}
            </span>
            <p className="font-display mt-1 text-base font-medium text-cream sm:text-lg">
              {item.title}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
