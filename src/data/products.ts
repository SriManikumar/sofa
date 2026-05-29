export type ProductCategory = "Recliners" | "Sofas" | "Sectionals" | "Custom";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  features: string[];
  dimensions: string;
  image: string;
  featured?: boolean;
};

export const productCategories: ProductCategory[] = [
  "Recliners",
  "Sofas",
  "Sectionals",
  "Custom",
];

export const products: Product[] = [
  {
    id: "dual-recliner-sofa",
    name: "Dual Recliner Sofa",
    category: "Recliners",
    description:
      "Three-seater with manual recliners on both ends — ideal for living rooms and home theatres.",
    features: ["Dual recliners", "Padded armrests", "Easy-clean leatherette"],
    dimensions: "7.5 ft × 3.5 ft × 38 in",
    image:
      "https://images.unsplash.com/photo-1540574163026-d643ea2f2f08?w=800&q=80",
    featured: true,
  },
  {
    id: "single-recliner-chair",
    name: "Single Recliner Chair",
    category: "Recliners",
    description:
      "Compact single recliner with smooth mechanism — available in fabric or leatherette.",
    features: ["Single-seat recliner", "Rocking option", "Multiple colors"],
    dimensions: "3 ft × 3 ft × 40 in",
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80",
    featured: true,
  },
  {
    id: "classic-chester-sofa",
    name: "Classic Chester Sofa",
    category: "Sofas",
    description:
      "Elegant three-seater with solid hardwood frame and high-resilience foam cushioning.",
    features: ["Solid hardwood frame", "Premium upholstery", "High-density foam"],
    dimensions: "7 ft × 3 ft × 34 in",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    featured: true,
  },
  {
    id: "minimal-two-seater",
    name: "Compact Two-Seater",
    category: "Sofas",
    description:
      "Slim profile sofa for apartments and bedrooms — choose from 40+ fabric swatches.",
    features: ["Space-saving", "40+ fabrics", "Lightweight frame"],
    dimensions: "5 ft × 2.5 ft × 30 in",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
  },
  {
    id: "family-sectional",
    name: "Family Sectional",
    category: "Sectionals",
    description:
      "Modular L-shaped sectional for large living rooms — left or right chaise configuration.",
    features: ["Modular layout", "Washable covers", "Corner reinforcement"],
    dimensions: "10 ft × 6 ft × 32 in",
    image:
      "https://images.unsplash.com/photo-1493663284031-d7a3fdbc6a1e?w=800&q=80",
    featured: true,
  },
  {
    id: "urban-l-sectional",
    name: "Urban L-Sectional",
    category: "Sectionals",
    description:
      "Compact L-shaped sectional for modern homes with deep seats and clean lines.",
    features: ["Space-saving", "Pocket spring base", "Stain-resistant fabric"],
    dimensions: "8 ft × 5 ft × 30 in",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  },
  {
    id: "custom-bespoke",
    name: "Custom Sofa / Recliner",
    category: "Custom",
    description:
      "Share your dimensions, fabric, and recliner type — we manufacture exactly to your specification.",
    features: ["Any size", "Your fabric choice", "On-site measurement available"],
    dimensions: "Made to measure",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  },
];
