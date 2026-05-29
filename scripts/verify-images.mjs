import { readFileSync } from "fs";

const imgs = readFileSync("src/data/images.ts", "utf8");
const ids = [...imgs.matchAll(/"(photo-[^"]+)"/g)].map((m) => m[1]);

let bad = 0;
for (const id of ids) {
  const u = `https://images.unsplash.com/${id}?w=800&q=85&auto=format`;
  const r = await fetch(u, { method: "HEAD", redirect: "follow" });
  if (r.status !== 200) {
    console.log("BAD", r.status, id);
    bad++;
  }
}
console.log(`Verified ${ids.length} IDs, failures: ${bad}`);
process.exit(bad > 0 ? 1 : 0);
