/**
 * probe_opcodes.mjs
 *
 * For each unknown opcode, extract the surrounding bytes from the actual
 * block bytecode to determine operand sizes and semantics.
 * Cross-references against the auto-decompile output.
 *
 * Run from "Lingo Stuff":
 *   node tools/probe_opcodes.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WORKSPACE = path.resolve(__dirname, "..");

const MARKER = Buffer.from([0x03, 0x00, 0xad, 0xde]);

// Opcodes we want to probe — top unknowns
const PROBE_OPS = new Set([
  0x1c, 0x14, 0x04, 0x03, 0x55, 0x15, 0x17, 0x05,
  0x11, 0x18, 0x0f, 0x19, 0x20, 0x09, 0x10, 0x25,
  0x08, 0x0e, 0x6d, 0x64, 0x59, 0x75, 0x82, 0x6c,
  0x29, 0x47, 0x0d, 0x74, 0x85, 0x21, 0x1f, 0x26,
  0x24, 0x30, 0x7f, 0x66, 0x79, 0x27, 0x71, 0x40,
]);

function extractBlock(binBuffer, literalsDataOffset, block) {
  const fileOffset = literalsDataOffset + block.offset;
  const slice = binBuffer.subarray(fileOffset, fileOffset + block.length);
  const markerIdx = slice.indexOf(MARKER);
  if (markerIdx < 0) return null;
  const headerStart = markerIdx + 4;
  if (headerStart + 12 > slice.length) return null;
  const codeLen = slice.readUInt32LE(headerStart);
  const codeStart = headerStart + 12;
  return { code: slice.subarray(codeStart, codeStart + codeLen), codeLen };
}

function hex(b) { return b.toString(16).padStart(2, "0"); }
function hexBytes(buf, start, len) {
  const end = Math.min(start + len, buf.length);
  return Array.from(buf.subarray(start, end), b => hex(b)).join(" ");
}

// Known operand sizes for already-decoded opcodes (to skip them)
const KNOWN_OPS = new Map([
  [0x41, 0], [0x3e, 0], [0x42, 0], [0x43, 0],
  [0x58, 2], [0x83, 3],
  [0x3b, 2], [0x35, 2], [0x36, 2], [0x3d, 2],
  [0x56, 2], [0x57, 2], [0x54, 2], [0x80, 2],
  [0x39, 0], [0x3a, 2], [0x3c, 2],
  [0x1b, 0], [0x1a, 0], [0x1d, 0], [0x1e, 0], [0x22, 0],
  [0x34, 0], [0x33, 0], [0x16, 0], [0x0c, 0], [0x13, 0],
  [0x0b, 0], [0x44, 0], [0x45, 0], [0x37, 0], [0x3f, 0],
  [0x0a, 0], [0x51, 0], [0x02, 0], [0x00, 0], [0x01, 0],
  [0x23, 0], [0x7d, 2],
  [0x12, 3], // 12 07 00 NN
  [0x06, 1], [0x07, 2],
]);

const results = {};

function findChunkJsonFiles() {
  return fs.readdirSync(WORKSPACE)
    .filter(f => /^Lscr-\d+\.json$/.test(f))
    .sort((a, b) => parseInt(a) - parseInt(b));
}

for (const jsonFile of findChunkJsonFiles()) {
  const chunkBase = jsonFile.replace(/\.json$/, "");
  const jsonPath = path.join(WORKSPACE, jsonFile);
  const binPath = path.join(WORKSPACE, `${chunkBase}.bin`);
  if (!fs.existsSync(binPath)) continue;

  const chunkJson = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  const binBuffer = fs.readFileSync(binPath);
  const blocks = chunkJson.literals?.[0]?.embeddedCodeBlocks ?? [];
  const literalsDataOffset = chunkJson.literalsDataOffset;

  for (let bi = 0; bi < blocks.length; bi++) {
    const extracted = extractBlock(binBuffer, literalsDataOffset, blocks[bi]);
    if (!extracted) continue;
    const { code, codeLen } = extracted;

    let i = 0;
    while (i < codeLen) {
      const op = code[i];

      if (PROBE_OPS.has(op)) {
        const context = hexBytes(code, Math.max(0, i - 4), 16);
        const key = hex(op);
        if (!results[key]) results[key] = [];
        if (results[key].length < 8) {
          results[key].push({
            chunk: chunkBase,
            block: bi,
            offset: i,
            context,
          });
        }
        i++;
        continue;
      }

      if (KNOWN_OPS.has(op)) {
        i += 1 + KNOWN_OPS.get(op);
      } else {
        i++;
      }
    }
  }
}

// Print results
for (const [op, occurrences] of Object.entries(results).sort()) {
  console.log(`\n=== op_${op} (${occurrences.length} samples) ===`);
  for (const o of occurrences) {
    console.log(`  ${o.chunk} block${o.block} @${o.offset.toString(16).padStart(4,"0")}: ${o.context}`);
  }
}
