/**
 * decode_blocks.mjs
 *
 * Decodes the embedded hidden-VM bytecode blocks from every Lscr-*.bin file.
 * For each chunk, reads the JSON (for block offsets/lengths and string tables),
 * reads the bin (for raw bytecode), decodes each block's instruction stream
 * using the known hidden-VM opcode table, and writes:
 *
 *   <chunkBase>.blocks.lingo   — Lingo-style pseudocode for all blocks
 *   <chunkBase>.blocks.js      — JS translation of all blocks
 *
 * Run from the "Lingo Stuff" directory:
 *   node tools/decode_blocks.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WORKSPACE = path.resolve(__dirname, "..");

// ---------------------------------------------------------------------------
// Block header constants
// ---------------------------------------------------------------------------
const MARKER = Buffer.from([0x03, 0x00, 0xad, 0xde]);
const HEADER_SIZE = 16; // marker(4) + word0(4) + word1(4) + word2(4)

// ---------------------------------------------------------------------------
// String table parser
// Reads UTF-16LE kind=4 records from the payload after the instruction region.
// Returns Map<id, string>
// ---------------------------------------------------------------------------
function parseStringTable(payload) {
  const table = new Map();
  // Scan for kind=4 records: [id:4LE][kind:4LE][len:4LE][data:len*2]
  for (let i = 0; i <= payload.length - 12; i += 4) {
    const id   = payload.readUInt32LE(i);
    const kind = payload.readUInt32LE(i + 4);
    const len  = payload.readUInt32LE(i + 8);
    if (kind !== 4) continue;
    if (id > 4096) continue;
    if (len <= 0 || len > 256) continue;
    const byteLen = len * 2;
    const dataStart = i + 12;
    const dataEnd = dataStart + byteLen;
    if (dataEnd > payload.length) continue;
    const text = payload.subarray(dataStart, dataEnd).toString("utf16le").replace(/\u0000+$/, "");
    if (!/^[\x20-\x7e\u0000-\u001f]*$/.test(text) && !/^[\x20-\x7e]+$/.test(text)) continue;
    if (!/^[\x20-\x7e]+$/.test(text)) continue;
    table.set(id, text);
  }
  // Also scan kind=0 (UTF-16LE) and kind=1 (ASCII) for block-0 style tables
  for (let i = 0; i <= payload.length - 12; i += 4) {
    const id   = payload.readUInt32LE(i);
    const kind = payload.readUInt32LE(i + 4);
    const len  = payload.readUInt32LE(i + 8);
    if (kind !== 0 && kind !== 1) continue;
    if (id > 4096) continue;
    if (len <= 0 || len > 256) continue;
    if (table.has(id)) continue; // prefer kind=4
    if (kind === 0) {
      const byteLen = len * 2;
      const dataStart = i + 12;
      const dataEnd = dataStart + byteLen;
      if (dataEnd > payload.length) continue;
      const text = payload.subarray(dataStart, dataEnd).toString("utf16le").replace(/\u0000+$/, "");
      if (!/^[\x20-\x7e]+$/.test(text)) continue;
      table.set(id, text);
    } else {
      const dataStart = i + 12;
      const dataEnd = dataStart + len;
      if (dataEnd > payload.length) continue;
      const text = payload.subarray(dataStart, dataEnd).toString("latin1").replace(/\u0000+$/, "");
      if (!/^[\x20-\x7e]+$/.test(text)) continue;
      table.set(id, text);
    }
  }
  return table;
}

// ---------------------------------------------------------------------------
// Hidden-VM decoder
// ---------------------------------------------------------------------------

/**
 * Decode a block's instruction stream into an array of statement strings.
 * @param {Buffer} code  - raw instruction bytes (after the 16-byte header)
 * @param {number} codeLen - number of instruction bytes (headerWord0)
 * @param {Map<number,string>} names - string table for this block
 * @param {string} blockLabel - for comments
 */
function decodeBlock(code, codeLen, names, blockLabel) {
  const stmts = [];
  const stack = [];
  let i = 0;

  function name(id) {
    return names.get(id) ?? `id_${id}`;
  }

  function pop() {
    return stack.pop() ?? "?";
  }

  function push(v) {
    stack.push(v);
  }

  function readU16() {
    if (i + 2 > codeLen) return 0;
    const v = (code[i] << 8) | code[i + 1];
    i += 2;
    return v;
  }

  function readU16LE() {
    if (i + 2 > codeLen) return 0;
    const v = code.readUInt16LE(i);
    i += 2;
    return v;
  }

  function readU8() {
    if (i >= code.length) return 0;
    return code[i++];
  }

  function flush() {
    // Emit any leftover stack items as expression statements
    while (stack.length > 0) {
      stmts.push(`  ${stack.pop()}`);
    }
  }

  function emit(s) {
    flush();
    stmts.push(`  ${s}`);
  }

  while (i < codeLen) {
    const pos = i;
    const op = code[i++];

    switch (op) {
      // ---- Push constants ----
      case 0x41: // push null/void/me
        push("null");
        break;
      case 0x3E: // push true / false (used as "not me" = false in init)
        push("false");
        break;
      case 0x42: // push 0
        push("0");
        break;
      case 0x43: // push 1
        push("1");
        break;
      case 0x58: { // push 16-bit big-endian integer
        const hi = readU8();
        const lo = readU8();
        push(String((hi << 8) | lo));
        break;
      }
      case 0x83: { // push 24-bit big-endian integer
        const b0 = readU8();
        const b1 = readU8();
        const b2 = readU8();
        push(String((b0 << 16) | (b1 << 8) | b2));
        break;
      }
      case 0x3C: { // push float constant by index (3 bytes: 0x00, hi, lo)
        readU8(); // always 0x00
        const idx = readU8();
        // Float constants are stored in the block's float table — we don't
        // have a separate float table, so emit as a named constant
        push(`c_${idx}`);
        break;
      }

      // ---- Load / store ----
      case 0x3B: { // load global/external by name index
        const id = readU16();
        push(name(id));
        break;
      }
      case 0x35: { // property/member access: stack.top.property
        const id = readU16();
        const obj = pop();
        push(`${obj}.${name(id)}`);
        break;
      }
      case 0x36: { // store to local variable by name index
        const id = readU16();
        const val = pop();
        emit(`${name(id)} = ${val}`);
        break;
      }
      case 0x3D: { // store to temp/local (like 36 but different scope)
        const id = readU16();
        const val = pop();
        push(`${name(id)}`); // leaves the name on stack for chained use
        break;
      }
      case 0x56: { // load local variable
        const id = readU16();
        push(name(id));
        break;
      }
      case 0x57: { // store local variable
        const id = readU16();
        const val = pop();
        emit(`${name(id)} = ${val}`);
        break;
      }
      case 0x54: { // load parameter
        const id = readU16();
        push(`param_${name(id)}`);
        break;
      }
      case 0x80: { // method call: obj.Function(id)
        const id = readU16();
        const obj = pop();
        push(`${obj}.Function(${name(id)})`);
        break;
      }

      // ---- Dereference / call ----
      case 0x39: { // dereference: get value of reference (call with 0 args)
        const ref = pop();
        push(`${ref}()`);
        break;
      }
      case 0x3A: { // call with N args: fn(arg1, arg2, ...)
        const argc = readU16();
        const args = [];
        for (let k = 0; k < argc; k++) args.unshift(pop());
        const fn = pop();
        push(`${fn}(${args.join(", ")})`);
        break;
      }

      // ---- Arithmetic / logic ----
      case 0x1B: { // add
        const b = pop(); const a = pop();
        push(`(${a} + ${b})`);
        break;
      }
      case 0x1A: { // subtract
        const b = pop(); const a = pop();
        push(`(${a} - ${b})`);
        break;
      }
      case 0x1D: { // multiply
        const b = pop(); const a = pop();
        push(`(${a} * ${b})`);
        break;
      }
      case 0x1E: { // divide
        const b = pop(); const a = pop();
        push(`(${a} / ${b})`);
        break;
      }
      case 0x22: { // modulo
        const b = pop(); const a = pop();
        push(`(${a} % ${b})`);
        break;
      }
      case 0x34: { // equality test (==)
        const b = pop(); const a = pop();
        push(`(${a} == ${b})`);
        break;
      }
      case 0x33: { // not equal
        const b = pop(); const a = pop();
        push(`(${a} != ${b})`);
        break;
      }
      case 0x16: { // greater than or equal (comparison)
        const b = pop(); const a = pop();
        push(`(${a} >= ${b})`);
        break;
      }
      case 0x0C: { // greater than
        const b = pop(); const a = pop();
        push(`(${a} > ${b})`);
        break;
      }
      case 0x13: { // less than
        const b = pop(); const a = pop();
        push(`(${a} < ${b})`);
        break;
      }
      case 0x0B: { // logical or
        const b = pop(); const a = pop();
        push(`(${a} || ${b})`);
        break;
      }
      case 0x44: { // logical or (alternate)
        const b = pop(); const a = pop();
        push(`(${a} || ${b})`);
        break;
      }
      case 0x45: { // logical and
        const b = pop(); const a = pop();
        push(`(${a} && ${b})`);
        break;
      }
      case 0x37: { // logical not
        const a = pop();
        push(`!${a}`);
        break;
      }
      case 0x3F: { // negate / logical not
        const a = pop();
        push(`!${a}`);
        break;
      }
      case 0x0A: { // string concat / add
        const b = pop(); const a = pop();
        push(`(${a} + ${b})`);
        break;
      }

      // ---- Control flow ----
      case 0x12: { // conditional branch: if not (cond) jump forward
        // Format: 12 07 00 NN  (3 bytes after opcode)
        const b1 = readU8(); // 07
        const b2 = readU8(); // 00
        const dist = readU8(); // jump distance in bytes
        const cond = pop();
        const target = i + dist;
        emit(`if (${cond}) { /* else goto @${target} */ }`);
        break;
      }
      case 0x06: { // unconditional short jump
        const dist = readU8();
        emit(`// goto @${i + dist}`);
        break;
      }
      case 0x07: { // unconditional long jump (2-byte distance)
        const hi = readU8();
        const lo = readU8();
        const dist = (hi << 8) | lo;
        emit(`// goto @${i + dist}`);
        break;
      }

      // ---- Statement / block control ----
      case 0x51: { // statement end / pop result
        const val = pop();
        if (val && val !== "null" && val !== "false" && val !== "0") {
          emit(`${val}`);
        }
        break;
      }
      case 0x02: { // statement terminator (block-0 style)
        flush();
        break;
      }
      case 0x00: { // no-op / padding
        break;
      }
      case 0x01: { // unknown — appears after 3D in block-3
        break;
      }
      case 0x23: { // unknown — appears after 3D in block-3
        break;
      }

      // ---- Function prologue ----
      case 0x7D: { // function prologue / import setup
        const id = readU16();
        emit(`// prologue: ${name(id)}`);
        break;
      }

      default: {
        // Unknown opcode — emit as comment
        stmts.push(`  // [0x${pos.toString(16).padStart(4,"0")}] op_${op.toString(16).padStart(2,"0")}`);
        break;
      }
    }
  }

  flush();
  return stmts;
}

// ---------------------------------------------------------------------------
// Block extractor
// ---------------------------------------------------------------------------

/**
 * Extract and decode all embedded blocks from a chunk.
 * Returns array of { handlerName, blockOffset, blockLength, stmts, names }
 */
function decodeChunkBlocks(chunkJson, binBuffer) {
  const literalsDataOffset = chunkJson.literalsDataOffset;
  const blocks = chunkJson.literals?.[0]?.embeddedCodeBlocks ?? [];
  const handlers = chunkJson.handlers ?? [];

  // Build handler → block index map
  const handlerByBlockIndex = new Map();
  for (const h of handlers) {
    if (h.dispatchBlockIndex !== undefined) {
      handlerByBlockIndex.set(h.dispatchBlockIndex, h.name);
    }
  }

  const results = [];

  for (let bi = 0; bi < blocks.length; bi++) {
    const block = blocks[bi];
    const fileOffset = literalsDataOffset + block.offset;

    // Find the marker
    const slice = binBuffer.subarray(fileOffset, fileOffset + block.length);
    const markerIdx = slice.indexOf(MARKER);
    if (markerIdx < 0) {
      results.push({
        handlerName: handlerByBlockIndex.get(bi) ?? `block_${bi}`,
        blockOffset: block.offset,
        blockLength: block.length,
        stmts: ["  // marker not found"],
        names: new Map(),
      });
      continue;
    }

    const headerStart = markerIdx + 4;
    if (headerStart + 12 > slice.length) {
      results.push({
        handlerName: handlerByBlockIndex.get(bi) ?? `block_${bi}`,
        blockOffset: block.offset,
        blockLength: block.length,
        stmts: ["  // header truncated"],
        names: new Map(),
      });
      continue;
    }

    const codeLen = slice.readUInt32LE(headerStart); // headerWord0 = instruction byte count
    // const word1 = slice.readUInt32LE(headerStart + 4);
    // const word2 = slice.readUInt32LE(headerStart + 8);

    const codeStart = headerStart + 12;
    const code = slice.subarray(codeStart, codeStart + codeLen);
    const payload = slice.subarray(codeStart); // full payload for string table

    const names = parseStringTable(payload);

    // Also use the JSON-provided string hints
    if (block.strings) {
      for (const s of block.strings) {
        // These are ASCII strings at known offsets — add them to names by
        // scanning the names map for gaps
        // We don't have IDs for these, but we can use them as fallback
      }
    }

    const handlerName = handlerByBlockIndex.get(bi) ?? `block_${bi}`;
    const stmts = decodeBlock(code, codeLen, names, `${handlerName}[${bi}]`);

    results.push({
      handlerName,
      blockOffset: block.offset,
      blockLength: block.length,
      codeLen,
      names,
      stmts,
    });
  }

  return results;
}

// ---------------------------------------------------------------------------
// Output formatters
// ---------------------------------------------------------------------------

function buildLingoOutput(chunkBase, chunkJson, decodedBlocks) {
  const lines = [];
  lines.push(`-- ${chunkBase} embedded block decompile`);
  lines.push(`-- scriptNumber: ${chunkJson.scriptNumber}`);
  lines.push(`-- ${decodedBlocks.length} blocks`);
  lines.push("");

  for (const blk of decodedBlocks) {
    lines.push(`on ${blk.handlerName}`);
    lines.push(`  -- block offset=${blk.blockOffset} length=${blk.blockLength} codeLen=${blk.codeLen ?? "?"}`);

    if (blk.names.size > 0) {
      lines.push(`  -- names: ${[...blk.names.entries()].map(([k,v]) => `${k}=${v}`).join(", ")}`);
    }

    for (const stmt of blk.stmts) {
      lines.push(stmt);
    }
    lines.push("end");
    lines.push("");
  }

  return lines.join("\n");
}

function buildJSOutput(chunkBase, chunkJson, decodedBlocks) {
  const lines = [];
  lines.push(`// ${chunkBase} — embedded block decompile`);
  lines.push(`// scriptNumber: ${chunkJson.scriptNumber}, ${decodedBlocks.length} blocks`);
  lines.push(`// Auto-generated by tools/decode_blocks.mjs`);
  lines.push("");

  for (const blk of decodedBlocks) {
    lines.push(`export function ${blk.handlerName}() {`);
    lines.push(`  // block offset=${blk.blockOffset} length=${blk.blockLength} codeLen=${blk.codeLen ?? "?"}`);

    if (blk.names.size > 0) {
      const nameList = [...blk.names.entries()].map(([k,v]) => `${k}:${v}`).join(", ");
      lines.push(`  // names: ${nameList}`);
    }

    for (const stmt of blk.stmts) {
      // Convert Lingo-style to JS
      let js = stmt;
      js = js.replace(/ <> /g, " !== ");
      js = js.replace(/ & /g, " + ");
      lines.push(js);
    }

    lines.push("}");
    lines.push("");
  }

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function findChunkJsonFiles() {
  return fs
    .readdirSync(WORKSPACE)
    .filter((name) => /^Lscr-\d+\.json$/.test(name))
    .sort((a, b) => {
      const na = parseInt(a.match(/\d+/)[0]);
      const nb = parseInt(b.match(/\d+/)[0]);
      return na - nb;
    });
}

const jsonFiles = findChunkJsonFiles();
console.log(`Found ${jsonFiles.length} chunk JSON files.\n`);

const results = [];

for (const jsonFile of jsonFiles) {
  const chunkBase = jsonFile.replace(/\.json$/, "");
  const jsonPath = path.join(WORKSPACE, jsonFile);
  const binPath = path.join(WORKSPACE, `${chunkBase}.bin`);

  if (!fs.existsSync(binPath)) {
    console.log(`  ${chunkBase}: no .bin file, skipping`);
    continue;
  }

  let chunkJson, binBuffer;
  try {
    chunkJson = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    binBuffer = fs.readFileSync(binPath);
  } catch (err) {
    console.error(`  ERROR reading ${chunkBase}: ${err.message}`);
    continue;
  }

  const blocks = chunkJson.literals?.[0]?.embeddedCodeBlocks ?? [];
  if (blocks.length === 0) {
    console.log(`  ${chunkBase}: no embedded blocks`);
    continue;
  }

  try {
    const decodedBlocks = decodeChunkBlocks(chunkJson, binBuffer);

    const lingoPath = path.join(WORKSPACE, `${chunkBase}.blocks.lingo`);
    const jsPath = path.join(WORKSPACE, `${chunkBase}.blocks.js`);

    fs.writeFileSync(lingoPath, buildLingoOutput(chunkBase, chunkJson, decodedBlocks), "utf8");
    fs.writeFileSync(jsPath, buildJSOutput(chunkBase, chunkJson, decodedBlocks), "utf8");

    const totalStmts = decodedBlocks.reduce((s, b) => s + b.stmts.length, 0);
    console.log(`  ${chunkBase}: ${blocks.length} blocks, ${totalStmts} statements → wrote .blocks.lingo + .blocks.js`);
    results.push({ chunkBase, blocks: blocks.length, stmts: totalStmts, status: "ok" });
  } catch (err) {
    console.error(`  ERROR processing ${chunkBase}: ${err.message}`);
    console.error(err.stack);
    results.push({ chunkBase, status: "error", error: err.message });
  }
}

console.log("\nDone.");
const summaryPath = path.join(WORKSPACE, "tools", "decode-blocks-summary.json");
fs.writeFileSync(summaryPath, JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 2), "utf8");
console.log(`Summary: ${summaryPath}`);
