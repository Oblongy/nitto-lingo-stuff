import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WORKSPACE = path.resolve(__dirname, "..");

const files = fs.readdirSync(WORKSPACE).filter(f => f.endsWith(".blocks.js"));
const counts = {};
for (const f of files) {
  const txt = fs.readFileSync(path.join(WORKSPACE, f), "utf8");
  for (const m of txt.matchAll(/op_([0-9a-f]{2})\b/g)) {
    counts[m[1]] = (counts[m[1]] || 0) + 1;
  }
}
const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
console.log("Top unknown opcodes:");
sorted.slice(0, 50).forEach(([op, n]) => console.log(`  0x${op}: ${n}`));
