import { mkdir, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");

/** Unsplash IDs verified with HTTP HEAD (200). */
const photos = {
  livingRoomHero: "photo-1618221195710-dd6b41faaea6",
  livingRoomWarm: "photo-1618220179428-22790b461013",
  sectionalModern: "photo-1600607687644-c7171b42498f",
  livingRoomOpen: "photo-1600585154340-be6161a56a0c",
  loungeSunlit: "photo-1600607687939-ce8a6c25118c",
  sofaGreen: "photo-1555041469-a586c61ea9bc",
  sofaNeutral: "photo-1567538096630-e0c55bd6374c",
  chairAccent: "photo-1586023492125-27b2c045efd7",
  reclinerSingle: "photo-1592078615290-033ee584e267",
  reclinerLiving: "photo-1578683010236-d716f9a3f461",
  sofaLuxury: "photo-1598300042247-d088f8ab3a91",
  interiorDesigner: "photo-1617806118233-18e1de247200",
  livingMinimal: "photo-1550254478-ead40cc54513",
  fabricInterior: "photo-1616486338812-3dadae4b4ace",
  workshopBuild: "photo-1503387762-592deb58ef4e",
  officeCraft: "photo-1454165804606-c3d57bc86b40",
  detailStitch: "photo-1615529328331-f8917597711f",
};

const downloads = [
  ...[
    ["living-room-hero.jpg", "livingRoomHero", 1400],
    ["sectional-modern.jpg", "sectionalModern", 1400],
    ["sofa-green.jpg", "sofaGreen", 1400],
    ["chair-accent.jpg", "chairAccent", 1400],
    ["living-room-warm.jpg", "livingRoomWarm", 1400],
    ["sofa-neutral.jpg", "sofaNeutral", 1400],
    ["living-room-open.jpg", "livingRoomOpen", 1400],
    ["lounge-sunlit.jpg", "loungeSunlit", 1400],
    ["interior-designer.jpg", "interiorDesigner", 1400],
    ["sofa-luxury.jpg", "sofaLuxury", 1400],
    ["living-minimal.jpg", "livingMinimal", 1400],
    ["workshop-build.jpg", "workshopBuild", 1200],
    ["office-craft.jpg", "officeCraft", 1200],
    ["detail-stitch.jpg", "detailStitch", 1200],
    ["fabric-interior.jpg", "fabricInterior", 1200],
  ].map(([file, key, w]) => ({
    dest: join(publicDir, "images", "gallery", file),
    photo: photos[key],
    width: w,
  })),
  ...[
    ["dual-recliner.jpg", "reclinerLiving", 1000],
    ["single-recliner.jpg", "reclinerSingle", 1000],
    ["chester-sofa.jpg", "sofaGreen", 1000],
    ["two-seater.jpg", "sofaNeutral", 1000],
    ["family-sectional.jpg", "sectionalModern", 1000],
    ["urban-sectional.jpg", "chairAccent", 1000],
    ["custom-fabric.jpg", "fabricInterior", 1000],
  ].map(([file, key, w]) => ({
    dest: join(publicDir, "images", "products", file),
    photo: photos[key],
    width: w,
  })),
];

function unsplashDownloadUrl(photoId, width) {
  return `https://images.unsplash.com/${photoId}?w=${width}&q=85&auto=format&fit=crop`;
}

async function downloadOne({ dest, photo, width }) {
  const url = unsplashDownloadUrl(photo, width);
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) {
    throw new Error(`${res.status} ${url}`);
  }
  await mkdir(dirname(dest), { recursive: true });
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log("OK", dest.replace(publicDir, "").replace(/\\/g, "/"));
}

let failed = 0;
for (const item of downloads) {
  try {
    await downloadOne(item);
  } catch (e) {
    console.error("FAIL", item.dest, e.message);
    failed++;
  }
}
console.log(`Done: ${downloads.length - failed}/${downloads.length}`);
process.exit(failed > 0 ? 1 : 0);
