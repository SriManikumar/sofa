"use client";

import { useState } from "react";
import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryItems, type GalleryItem } from "@/data/gallery";

type Filter = "All" | GalleryItem["category"];

const filters: Filter[] = ["All", "Finished", "Workshop", "Detail"];

export function GalleryFilter() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <>
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
              active === filter
                ? "bg-charcoal text-cream shadow-md"
                : "border border-border bg-white text-brown-light hover:border-gold hover:text-accent"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-12">
        <GalleryGrid items={filtered} columns={3} layout="masonry" />
      </div>
    </>
  );
}
