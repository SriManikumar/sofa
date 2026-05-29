import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";

export function GalleryGrid({
  items,
  columns = 4,
}: {
  items: GalleryItem[];
  columns?: 2 | 3 | 4;
}) {
  const gridClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : columns === 3
        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {items.map((item) => (
        <figure
          key={item.id}
          className="group relative aspect-square overflow-hidden rounded-xl bg-cream-dark"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brown/80 to-transparent p-4 pt-12">
            <span className="text-xs font-medium tracking-wider text-cream/70 uppercase">
              {item.category}
            </span>
            <p className="mt-0.5 text-sm font-medium text-cream">{item.title}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
