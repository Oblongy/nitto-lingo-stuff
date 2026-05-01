# LSCR Completion Script Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a local analyzer and batch runner that keep generating per-block LSCR pass files until every hidden block in a chunk has dedicated string/table inventory coverage.

**Architecture:** Use one focused analyzer module for single-chunk parsing and one batch runner for workspace-wide completion checks. The analyzer owns JSON/bin loading, block extraction, coverage detection, sibling-artifact lookup, and deterministic markdown output; the batch runner only discovers chunks, invokes the analyzer, and summarizes completion state.

**Tech Stack:** Node ESM (`.mjs`), local filesystem, JSON parsing, binary buffer parsing, markdown output

---

### Task 1: Create shared LSCR parsing helpers

**Files:**
- Create: `C:\Users\Dilldo\Nitto\Lingo Stuff\tools\lscr-lib.mjs`
- Test: `C:\Users\Dilldo\Nitto\Lingo Stuff\tools\analyze_lscr_chunk.mjs`

- [ ] **Step 1: Create the `tools` directory if it does not exist**

Run: `New-Item -ItemType Directory -Force 'C:\Users\Dilldo\Nitto\Lingo Stuff\tools'`
Expected: directory exists with no error

- [ ] **Step 2: Write the shared helper module**

```js
import fs from "node:fs";
import path from "node:path";

export const MARKER_BYTES = Buffer.from([0x03, 0x00, 0xad, 0xde]);

export function readJson(absPath) {
  return JSON.parse(fs.readFileSync(absPath, "utf8"));
}

export function readBuffer(absPath) {
  return fs.readFileSync(absPath);
}

export function findMarkerIndex(blockSlice) {
  return blockSlice.indexOf(MARKER_BYTES);
}

export function toHex(bufferLike) {
  return Array.from(bufferLike, (b) => b.toString(16).padStart(2, "0")).join(" ");
}

export function extractKind4Utf16Strings(payload, { maxChars = 64 } = {}) {
  const rows = [];
  for (let i = 0; i <= payload.length - 12; i += 1) {
    const id = payload.readUInt32LE(i);
    const kind = payload.readUInt32LE(i + 4);
    const len = payload.readUInt32LE(i + 8);
    if (kind !== 4) continue;
    if (len <= 0 || len > maxChars) continue;
    const byteLen = len * 2;
    if (i + 12 + byteLen > payload.length) continue;
    const text = payload.subarray(i + 12, i + 12 + byteLen).toString("utf16le").replace(/\u0000+$/g, "");
    if (!/^[\x20-\x7e]+$/.test(text)) continue;
    rows.push({ relOffset: i, id, kind, len, text });
  }
  return rows;
}

export function extractLooseUtf16Fragments(payload, { minLength = 24 } = {}) {
  const text = payload.toString("utf16le");
  const matches = text.match(/[\x20-\x7e][\x20-\x7e\s().,:;'\"?!\-_/]{23,}/g) ?? [];
  return [...new Set(matches.map((entry) => entry.trim()).filter((entry) => entry.length >= minLength))];
}

export function readEmbeddedBlock(binBuffer, literalsDataOffset, block) {
  const blockFileOffset = literalsDataOffset + block.offset;
  return {
    blockFileOffset,
    blockSlice: binBuffer.subarray(blockFileOffset, blockFileOffset + block.length),
  };
}

export function formatStringTableRows(rows) {
  return rows.map((row) => `- payload offset \`${row.relOffset}\`: id \`${row.id}\`, \`${row.text}\``).join("\n");
}

export function ensureParentDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}
```

- [ ] **Step 3: Verify the helper file exists and is readable**

Run: `Get-Content 'C:\Users\Dilldo\Nitto\Lingo Stuff\tools\lscr-lib.mjs' | Select-Object -First 20`
Expected: shows the exported helper functions and marker constant

### Task 2: Implement single-chunk analyzer

**Files:**
- Create: `C:\Users\Dilldo\Nitto\Lingo Stuff\tools\analyze_lscr_chunk.mjs`
- Modify: `C:\Users\Dilldo\Nitto\Lingo Stuff\tools\lscr-lib.mjs`
- Test: `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.json`

- [ ] **Step 1: Write the chunk analyzer entrypoint**

```js
import fs from "node:fs";
import path from "node:path";
import {
  ensureParentDir,
  extractKind4Utf16Strings,
  extractLooseUtf16Fragments,
  findMarkerIndex,
  formatStringTableRows,
  readBuffer,
  readEmbeddedBlock,
  readJson,
  toHex,
} from "./lscr-lib.mjs";

const cwd = process.cwd();
const chunkBase = process.argv[2];

if (!chunkBase) {
  console.error("Usage: node tools/analyze_lscr_chunk.mjs Lscr-109");
  process.exit(1);
}

const jsonPath = path.join(cwd, `${chunkBase}.json`);
const binPath = path.join(cwd, `${chunkBase}.bin`);
const chunkJson = readJson(jsonPath);
const chunkBin = readBuffer(binPath);
const blocks = chunkJson.literals?.[0]?.embeddedCodeBlocks ?? [];

function getExistingPassContent() {
  return fs.readdirSync(cwd)
    .filter((name) => name.startsWith(`${chunkBase}.pass`) && name.endsWith(".md"))
    .map((name) => ({
      name,
      text: fs.readFileSync(path.join(cwd, name), "utf8"),
    }));
}

function hasCoverage(existingPasses, blockOffset) {
  return existingPasses.some((entry) => entry.text.includes(`offset \`${blockOffset}\``) || entry.text.includes(`block ${blockOffset}`) || entry.name.includes(`block${blockOffset}`));
}
```

- [ ] **Step 2: Add deterministic pass file generation for uncovered blocks**

```js
function buildPassFileName(index, blockOffset) {
  return `${chunkBase}.pass${index}-block${blockOffset}-table.md`;
}

function buildPassMarkdown({ passNumber, block, blockFileOffset, markerIndex, headerHex, opcodeHex, rows, fragments }) {
  const lines = [
    `## ${chunkBase} Pass ${passNumber}`,
    "",
    "Sources used:",
    `- \`${binPath}\``,
    `- \`${jsonPath}\``,
    "",
    "Scope:",
    `- This pass documents embedded block \`${block.offset}\`.`,
    "- No opcode semantics are inferred by this pass.",
    "",
    "Raw header evidence:",
    `- JSON block offset \`${block.offset}\`, length \`${block.length}\`.`,
    `- File offset \`${blockFileOffset}\`.`,
    `- Marker-relative offset inside block slice \`${markerIndex}\`.`,
    "",
    "Marker bytes:",
    "```text",
    headerHex,
    "```",
    "",
    "First instruction-region bytes:",
    "```text",
    opcodeHex,
    "```",
    "",
  ];

  if (rows.length > 0) {
    lines.push("Recovered `kind = 4` UTF-16LE string records:");
    lines.push(formatStringTableRows(rows));
    lines.push("");
  } else {
    lines.push("Recovered `kind = 4` UTF-16LE string records:");
    lines.push("- no clean `kind = 4` inventory was recovered in this pass");
    lines.push("");
  }

  if (fragments.length > 0) {
    lines.push("Recovered loose UTF-16LE message fragments:");
    for (const fragment of fragments) lines.push(`- \`${fragment}\``);
    lines.push("");
  }

  lines.push("Unresolved:");
  lines.push("- Opcode meanings remain unresolved in this pass.");
  lines.push("- Any bytes not represented above remain byte-backed but uninterpreted.");
  lines.push("");
  return lines.join("\n");
}
```

- [ ] **Step 3: Finish the analyzer run loop and output summary**

```js
const existingPasses = getExistingPassContent();
let nextPassNumber = existingPasses.length + 1;
const written = [];

for (const block of blocks) {
  if (hasCoverage(existingPasses, block.offset)) continue;
  const { blockFileOffset, blockSlice } = readEmbeddedBlock(chunkBin, chunkJson.literalsDataOffset, block);
  const markerIndex = findMarkerIndex(blockSlice);
  const payload = markerIndex >= 0 ? blockSlice.subarray(markerIndex + 4) : blockSlice;
  const headerHex = markerIndex >= 0 ? toHex(blockSlice.subarray(markerIndex, Math.min(blockSlice.length, markerIndex + 16))) : "marker not found";
  const opcodeStart = markerIndex >= 0 ? markerIndex + 20 : 0;
  const opcodeHex = toHex(blockSlice.subarray(opcodeStart, Math.min(blockSlice.length, opcodeStart + 64)));
  const rows = extractKind4Utf16Strings(payload);
  const fragments = extractLooseUtf16Fragments(payload);
  const fileName = buildPassFileName(nextPassNumber, block.offset);
  const filePath = path.join(cwd, fileName);
  const markdown = buildPassMarkdown({
    passNumber: nextPassNumber,
    block,
    blockFileOffset,
    markerIndex,
    headerHex,
    opcodeHex,
    rows,
    fragments,
  });
  ensureParentDir(filePath);
  fs.writeFileSync(filePath, markdown, "utf8");
  written.push({ fileName, blockOffset: block.offset });
  nextPassNumber += 1;
}

console.log(JSON.stringify({
  chunkBase,
  embeddedBlockCount: blocks.length,
  written,
  existingPassCount: existingPasses.length,
}, null, 2));
```

- [ ] **Step 4: Run the analyzer against `Lscr-109`**

Run: `node 'C:\Users\Dilldo\Nitto\Lingo Stuff\tools\analyze_lscr_chunk.mjs' Lscr-109`
Expected: JSON summary showing new `passN-block<offset>-table.md` files for any uncovered `Lscr-109` blocks

### Task 3: Add baseline artifact generation when missing

**Files:**
- Modify: `C:\Users\Dilldo\Nitto\Lingo Stuff\tools\analyze_lscr_chunk.mjs`
- Test: `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-107.json`

- [ ] **Step 1: Add visible-stub output generation helpers**

```js
function maybeWriteStubArtifacts(chunkJson) {
  const lingoPath = path.join(cwd, `${chunkBase}.reconstructed.lingo`);
  const jsPath = path.join(cwd, `${chunkBase}.rebuilt-faithful.js`);
  if (!fs.existsSync(lingoPath)) {
    const lingo = chunkJson.handlers.map((handler) => `on ${handler.name}\n  -- unk26\nend`).join("\n\n");
    fs.writeFileSync(lingoPath, `${lingo}\n`, "utf8");
  }
  if (!fs.existsSync(jsPath)) {
    const handlerRows = chunkJson.handlers.map((handler) => `    Object.freeze({ name: "${handler.name}", lingo: "on ${handler.name}\\n  -- unk26\\nend" })`).join(",\n");
    const js = `export const ${chunkBase.replace(/-/g, "")} = Object.freeze({\n  scriptNumber: ${chunkJson.scriptNumber},\n  handlers: Object.freeze([\n${handlerRows}\n  ]),\n});\n`;
    fs.writeFileSync(jsPath, js, "utf8");
  }
}
```

- [ ] **Step 2: Invoke stub generation before hidden-block processing**

```js
maybeWriteStubArtifacts(chunkJson);
```

- [ ] **Step 3: Run the analyzer on a chunk that already has stub artifacts**

Run: `node 'C:\Users\Dilldo\Nitto\Lingo Stuff\tools\analyze_lscr_chunk.mjs' Lscr-107`
Expected: no overwrite of existing stub files; analyzer only reports block-pass coverage behavior

### Task 4: Implement batch completion runner

**Files:**
- Create: `C:\Users\Dilldo\Nitto\Lingo Stuff\tools\batch_complete_lscr.mjs`
- Test: `C:\Users\Dilldo\Nitto\Lingo Stuff\tools\analyze_lscr_chunk.mjs`

- [ ] **Step 1: Write workspace scan logic**

```js
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { readJson } from "./lscr-lib.mjs";

const cwd = process.cwd();
const chunkBases = fs.readdirSync(cwd)
  .filter((name) => /^Lscr-\d+\.json$/.test(name))
  .map((name) => name.replace(/\.json$/, ""))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const results = [];
for (const chunkBase of chunkBases) {
  const json = readJson(path.join(cwd, `${chunkBase}.json`));
  const expected = json.literals?.[0]?.embeddedCodeBlocks?.length ?? 0;
  const child = spawnSync(process.execPath, [path.join(cwd, "tools", "analyze_lscr_chunk.mjs"), chunkBase], {
    cwd,
    encoding: "utf8",
  });
  results.push({
    chunkBase,
    expectedHiddenBlocks: expected,
    status: child.status,
    stdout: child.stdout.trim(),
    stderr: child.stderr.trim(),
  });
}
```

- [ ] **Step 2: Add a deterministic run summary file**

```js
const summaryPath = path.join(cwd, "tools", "lscr-completion-summary.json");
fs.writeFileSync(summaryPath, JSON.stringify({
  scannedAt: new Date().toISOString(),
  results,
}, null, 2));
console.log(summaryPath);
```

- [ ] **Step 3: Run the batch script**

Run: `node 'C:\Users\Dilldo\Nitto\Lingo Stuff\tools\batch_complete_lscr.mjs'`
Expected: summary file path printed and `tools\lscr-completion-summary.json` created

### Task 5: Verify `Lscr-109` completion coverage

**Files:**
- Modify: `C:\Users\Dilldo\Nitto\Lingo Stuff\tools\analyze_lscr_chunk.mjs`
- Test: `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.pass*.md`

- [ ] **Step 1: Add block-offset-aware coverage detection**

```js
function hasCoverage(existingPasses, blockOffset) {
  const offsetToken = `block \\`${blockOffset}\\``;
  const offsetToken2 = `block ${blockOffset}`;
  const offsetToken3 = `offset \\`${blockOffset}\\``;
  const fileToken = `block${blockOffset}`;
  return existingPasses.some((entry) =>
    entry.name.includes(fileToken) ||
    entry.text.includes(offsetToken) ||
    entry.text.includes(offsetToken2) ||
    entry.text.includes(offsetToken3)
  );
}
```

- [ ] **Step 2: Re-run `Lscr-109` and inspect coverage**

Run: `node 'C:\Users\Dilldo\Nitto\Lingo Stuff\tools\analyze_lscr_chunk.mjs' Lscr-109`
Expected: no duplicate block-pass files for offsets already covered; missing offsets only are emitted

- [ ] **Step 3: Confirm `Lscr-109` has dedicated coverage for hidden blocks `140`, `1428`, `2884`, `5908`, and `8436`**

Run: `Get-ChildItem 'C:\Users\Dilldo\Nitto\Lingo Stuff' -Filter 'Lscr-109.pass*.md' | Select-Object Name`
Expected: file list includes block-specific passes covering all five offsets

### Task 6: Final verification and handoff

**Files:**
- Test: `C:\Users\Dilldo\Nitto\Lingo Stuff\tools\lscr-completion-summary.json`

- [ ] **Step 1: Run the full batch workflow twice**

Run: `node 'C:\Users\Dilldo\Nitto\Lingo Stuff\tools\batch_complete_lscr.mjs'`
Expected: first run fills uncovered blocks where possible

Run: `node 'C:\Users\Dilldo\Nitto\Lingo Stuff\tools\batch_complete_lscr.mjs'`
Expected: second run does not create duplicate block pass files for already covered blocks

- [ ] **Step 2: Inspect the summary output**

Run: `Get-Content 'C:\Users\Dilldo\Nitto\Lingo Stuff\tools\lscr-completion-summary.json'`
Expected: JSON summary listing chunks scanned, analyzer exit status, and per-chunk output summary

- [ ] **Step 3: Commit**

```bash
git add tools/lscr-lib.mjs tools/analyze_lscr_chunk.mjs tools/batch_complete_lscr.mjs docs/superpowers/specs/2026-04-29-lscr-completion-script-design.md docs/superpowers/plans/2026-04-29-lscr-completion-script.md
git commit -m "feat: automate lscr hidden block pass coverage"
```

Expected: skipped in this workspace if `.git` is absent; note that the workspace is not currently a git repository

## Self-Review

Spec coverage:
- analyzer module covered in Tasks 1-3
- batch runner covered in Task 4
- completion-rule verification covered in Task 5
- rerun/idempotence verification covered in Task 6

Placeholder scan:
- no `TODO` or `TBD` placeholders remain
- each task names exact files and commands

Type consistency:
- analyzer entrypoint remains `tools/analyze_lscr_chunk.mjs`
- batch entrypoint remains `tools/batch_complete_lscr.mjs`
- helper module remains `tools/lscr-lib.mjs`
