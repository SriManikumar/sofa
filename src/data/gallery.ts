export type GalleryItem = {
  id: string;
  title: string;
  category: "Workshop" | "Finished" | "Detail";
  image: string;
};

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format&fit=crop`;

export const galleryItems: GalleryItem[] = [
  {
    id: "finished-1",
    title: "Luxury living room suite",
    category: "Finished",
    image: img("photo-1618221195710-dd6b41faaea6"),
  },
  {
    id: "finished-2",
    title: "Modern sectional install",
    category: "Finished",
    image: img("photo-1616137467421-6583755496c2"),
  },
  {
    id: "finished-3",
    title: "Velvet chesterfield finish",
    category: "Finished",
    image: img("photo-1555041469-a586c61ea9bc"),
  },
  {
    id: "finished-4",
    title: "Contemporary lounge setting",
    category: "Finished",
    image: img("photo-1586023492125-27b2c045efd7"),
  },
  {
    id: "finished-5",
    title: "Sunlit designer living room",
    category: "Finished",
    image: img("photo-1493663284031-b7e3aefcae8a"),
  },
  {
    id: "finished-6",
    title: "Premium neutral sofa",
    category: "Finished",
    image: img("photo-1567538096630-974a05468fb4"),
  },
  {
    id: "finished-7",
    title: "Elegant open-plan lounge",
    category: "Finished",
    image: img("photo-1631679706809-a01e06cea9dd"),
  },
  {
    id: "finished-8",
    title: "Statement velvet sofa",
    category: "Finished",
    image: img("photo-1617098907769-ee66e653f4dd"),
  },
  {
    id: "finished-9",
    title: "Architectural living space",
    category: "Finished",
    image: img("photo-1524758631624-e282452e3eb8"),
  },
  {
    id: "finished-10",
    title: "Recliner-ready family room",
    category: "Finished",
    image: img("photo-1631049307264-da0ec9b70304"),
  },
  {
    id: "finished-11",
    title: "Minimal luxury seating",
    category: "Finished",
    image: img("photo-1631049235174-61d2028d1311"),
  },
  {
    id: "workshop-1",
    title: "Frame assembly",
    category: "Workshop",
    image: img("photo-1503387762-592deb58ef4e", 800),
  },
  {
    id: "workshop-2",
    title: "Upholstery bench",
    category: "Workshop",
    image: img("photo-1454165804606-c3d57bc86b40", 800),
  },
  {
    id: "detail-1",
    title: "Stitching detail",
    category: "Detail",
    image: img("photo-1615529328331-f8917597711f", 800),
  },
  {
    id: "detail-2",
    title: "Fabric selection",
    category: "Detail",
    image: img("photo-1616486338812-3dadae4b4ace", 800),
  },
];
