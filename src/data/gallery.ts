import { galleryImages } from "@/data/images";

export type GalleryItem = {
  id: string;
  title: string;
  category: "Workshop" | "Finished" | "Detail";
  image: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "finished-1",
    title: "Luxury living room suite",
    category: "Finished",
    image: galleryImages.livingRoomHero,
  },
  {
    id: "finished-2",
    title: "Modern sectional install",
    category: "Finished",
    image: galleryImages.sectionalModern,
  },
  {
    id: "finished-3",
    title: "Velvet chesterfield finish",
    category: "Finished",
    image: galleryImages.sofaGreen,
  },
  {
    id: "finished-4",
    title: "Contemporary lounge setting",
    category: "Finished",
    image: galleryImages.chairAccent,
  },
  {
    id: "finished-5",
    title: "Sunlit designer living room",
    category: "Finished",
    image: galleryImages.livingRoomWarm,
  },
  {
    id: "finished-6",
    title: "Premium neutral sofa",
    category: "Finished",
    image: galleryImages.sofaNeutral,
  },
  {
    id: "finished-7",
    title: "Elegant open-plan lounge",
    category: "Finished",
    image: galleryImages.livingRoomOpen,
  },
  {
    id: "finished-8",
    title: "Statement velvet sofa",
    category: "Finished",
    image: galleryImages.loungeSunlit,
  },
  {
    id: "finished-9",
    title: "Architectural living space",
    category: "Finished",
    image: galleryImages.interiorDesigner,
  },
  {
    id: "finished-10",
    title: "Recliner-ready family room",
    category: "Finished",
    image: galleryImages.sofaLuxury,
  },
  {
    id: "finished-11",
    title: "Minimal luxury seating",
    category: "Finished",
    image: galleryImages.livingMinimal,
  },
  {
    id: "workshop-1",
    title: "Frame assembly",
    category: "Workshop",
    image: galleryImages.workshopBuild,
  },
  {
    id: "workshop-2",
    title: "Upholstery bench",
    category: "Workshop",
    image: galleryImages.officeCraft,
  },
  {
    id: "detail-1",
    title: "Stitching detail",
    category: "Detail",
    image: galleryImages.detailStitch,
  },
  {
    id: "detail-2",
    title: "Fabric selection",
    category: "Detail",
    image: galleryImages.fabricInterior,
  },
];
