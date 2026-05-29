/** Local images in `public/images/` — bundled with deploy, no external CDN dependency. */

export const galleryImages = {
  livingRoomHero: "/images/gallery/living-room-hero.jpg",
  sectionalModern: "/images/gallery/sectional-modern.jpg",
  sofaGreen: "/images/gallery/sofa-green.jpg",
  chairAccent: "/images/gallery/chair-accent.jpg",
  livingRoomWarm: "/images/gallery/living-room-warm.jpg",
  sofaNeutral: "/images/gallery/sofa-neutral.jpg",
  livingRoomOpen: "/images/gallery/living-room-open.jpg",
  loungeSunlit: "/images/gallery/lounge-sunlit.jpg",
  interiorDesigner: "/images/gallery/interior-designer.jpg",
  sofaLuxury: "/images/gallery/sofa-luxury.jpg",
  livingMinimal: "/images/gallery/living-minimal.jpg",
  workshopBuild: "/images/gallery/workshop-build.jpg",
  officeCraft: "/images/gallery/office-craft.jpg",
  detailStitch: "/images/gallery/detail-stitch.jpg",
  fabricInterior: "/images/gallery/fabric-interior.jpg",
} as const;

export const productImages = {
  dualRecliner: "/images/products/dual-recliner.jpg",
  singleRecliner: "/images/products/single-recliner.jpg",
  chesterSofa: "/images/products/chester-sofa.jpg",
  twoSeater: "/images/products/two-seater.jpg",
  familySectional: "/images/products/family-sectional.jpg",
  urbanSectional: "/images/products/urban-sectional.jpg",
  customFabric: "/images/products/custom-fabric.jpg",
} as const;

export const siteImages = {
  hero: galleryImages.livingRoomHero,
  workshop: galleryImages.workshopBuild,
} as const;
