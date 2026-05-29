export type GalleryItem = {
  id: string;
  title: string;
  category: "Workshop" | "Finished" | "Detail";
  image: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "workshop-1",
    title: "Frame assembly",
    category: "Workshop",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  },
  {
    id: "finished-1",
    title: "Living room install",
    category: "Finished",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    id: "detail-1",
    title: "Stitching detail",
    category: "Detail",
    image:
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80",
  },
  {
    id: "workshop-2",
    title: "Upholstery bench",
    category: "Workshop",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    id: "finished-2",
    title: "Sectional delivery",
    category: "Finished",
    image:
      "https://images.unsplash.com/photo-1616137467421-6583755496c2?w=800&q=80",
  },
  {
    id: "detail-2",
    title: "Fabric selection",
    category: "Detail",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  },
  {
    id: "finished-3",
    title: "Chesterfield finish",
    category: "Finished",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    id: "workshop-3",
    title: "Quality check",
    category: "Workshop",
    image:
      "https://images.unsplash.com/photo-1589939705383-27ae3b7f4a0a?w=800&q=80",
  },
];
