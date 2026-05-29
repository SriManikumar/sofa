import { productImages } from "@/data/images";

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
    image: productImages.dualRecliner,
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
    image: productImages.singleRecliner,
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
    image: productImages.chesterSofa,
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
    image: productImages.twoSeater,
  },
  {
    id: "family-sectional",
    name: "Family Sectional",
    category: "Sectionals",
    description:
      "Modular L-shaped sectional for large living rooms — left or right chaise configuration.",
    features: ["Modular layout", "Washable covers", "Corner reinforcement"],
    dimensions: "10 ft × 6 ft × 32 in",
    image: productImages.familySectional,
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
    image: productImages.urbanSectional,
  },
  {
    id: "custom-bespoke",
    name: "Custom Sofa / Recliner",
    category: "Custom",
    description:
      "Share your dimensions, fabric, and recliner type — we manufacture exactly to your specification.",
    features: ["Any size", "Your fabric choice", "On-site measurement available"],
    dimensions: "Made to measure",
    image: productImages.customFabric,
  },
];
