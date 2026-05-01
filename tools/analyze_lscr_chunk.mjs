import fs from "node:fs";
import path from "node:path";
import {
  ensureParentDir,
  extractExportedFunctionNames,
  extractLooseUtf16Fragments,
  findMarkerIndex,
  formatRecoveredMixedStringRows,
  formatRecoveredStringTableRows,
  formatRejectedStringTableRows,
  listSiblingRewriteFiles,
  readBuffer,
  readEmbeddedBlock,
  readJson,
  scanMixedStringRecords,
  scanKind4Utf16Records,
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

function readChunkInputs() {
  const chunkJson = readJson(jsonPath);
  const chunkBin = readBuffer(binPath);
  const blocks = chunkJson.literals?.[0]?.embeddedCodeBlocks ?? [];
  return { chunkJson, chunkBin, blocks };
}

function getExistingPassContent() {
  return fs
    .readdirSync(cwd)
    .filter((name) => name.startsWith(`${chunkBase}.pass`) && name.endsWith(".md"))
    .map((name) => ({
      name,
      text: fs.readFileSync(path.join(cwd, name), "utf8"),
    }));
}

function hasCoverage(existingPasses, blockOffset) {
  const exactFileName = buildPassFileName(blockOffset);
  return existingPasses.some((entry) => entry.name === exactFileName);
}

function buildPassFileName(blockOffset) {
  return `${chunkBase}.pass-block${blockOffset}-table.md`;
}

function findCorroboratingSiblingArtifact(handlerNames) {
  const expected = [...handlerNames].sort().join("\n");
  for (const absPath of listSiblingRewriteFiles(cwd)) {
    const source = fs.readFileSync(absPath, "utf8");
    const exported = extractExportedFunctionNames(source);
    if (exported.length === 0) continue;
    if ([...exported].sort().join("\n") === expected) {
      return {
        path: absPath,
        exported,
      };
    }
  }
  return null;
}

function maybeWriteStubArtifacts(chunkJson) {
  const lingoPath = path.join(cwd, `${chunkBase}.reconstructed.lingo`);
  const jsPath = path.join(cwd, `${chunkBase}.rebuilt-faithful.js`);
  if (!fs.existsSync(lingoPath)) {
    const lingo = chunkJson.handlers.map((handler) => `on ${handler.name}\n  -- unk26\nend`).join("\n\n");
    fs.writeFileSync(lingoPath, `${lingo}\n`, "utf8");
  }
  if (!fs.existsSync(jsPath)) {
    const lingoSource = chunkJson.handlers.map((handler) => `on ${handler.name}\n  -- unk26\nend`).join("\n\n");
    const handlerRows = chunkJson.handlers
      .map((handler) => {
        const operand = handler.bytecode?.[1]?.obj ?? null;
        return [
          "    Object.freeze({",
          `      name: "${handler.name}",`,
          `      lingo: "on ${handler.name}\\n  -- unk26\\nend",`,
          "      instructions: Object.freeze([",
          '        Object.freeze({ offset: 0, op: "pushcons", operand: 1 }),',
          `        Object.freeze({ offset: 2, op: "pushcons", operand: ${operand} }),`,
          '        Object.freeze({ offset: 4, op: "unk26", note: "-- unk26" }),',
          "      ]),",
          "    })",
        ].join("\n");
      })
      .join(",\n");
    const js = [
      `export const ${chunkBase.replace(/[^A-Za-z0-9]/g, "")}LingoSource = \`${lingoSource}\`;`,
      "",
      `export const ${chunkBase.replace(/[^A-Za-z0-9]/g, "")} = Object.freeze({`,
      `  chunk: "${chunkBase}.json",`,
      `  scriptNumber: ${chunkJson.scriptNumber},`,
      "  handlers: Object.freeze([",
      handlerRows,
      "  ]),",
      "});",
      "",
    ].join("\n");
    fs.writeFileSync(jsPath, js, "utf8");
  }
}

function buildPassMarkdown({
  block,
  blockFileOffset,
  markerIndex,
  blockSlice,
  recoveredRows,
  rejectedRows,
  mixedRecoveredRows,
  mixedRejectedRows,
  fragments,
  siblingArtifact,
  failure,
}) {
  const markerStart = markerIndex >= 0 ? markerIndex : 0;
  const headerHex =
    markerIndex >= 0
      ? toHex(blockSlice.subarray(markerIndex, Math.min(blockSlice.length, markerIndex + 16)))
      : "marker not found";
  const prefixHex = markerIndex > 0 ? toHex(blockSlice.subarray(0, markerIndex)) : "";
  const opcodeStart = markerIndex >= 0 ? markerIndex + 20 : 0;
  const opcodeHex = toHex(blockSlice.subarray(opcodeStart, Math.min(blockSlice.length, opcodeStart + 64)));

  const lines = [
    `## ${chunkBase} Block ${block.offset}`,
    "",
    "Sources used:",
    `- \`${binPath}\``,
    `- \`${jsonPath}\``,
  ];

  if (siblingArtifact) {
    lines.push(`- \`${siblingArtifact.path}\` (corroborating sibling artifact only)`);
  }

  lines.push(
    "",
    "Scope:",
    `- This pass documents embedded block \`${block.offset}\`.`,
    "- No opcode semantics are inferred by this pass.",
    "",
    "Raw header evidence:",
    `- JSON block offset \`${block.offset}\`, length \`${block.length}\`.`,
    `- File offset \`${blockFileOffset}\`.`
  );

  if (prefixHex) {
    lines.push(`- Pre-marker prefix length \`${markerIndex}\`.`);
    lines.push("", "Pre-marker bytes:", "```text", prefixHex, "```");
  }

  lines.push(
    `- Marker-relative offset inside block slice \`${markerStart}\`.`,
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
    ""
  );

  if (recoveredRows.length > 0) {
    lines.push("Recovered structured records (`kind = 4` UTF-16LE):");
    lines.push(formatRecoveredStringTableRows(recoveredRows));
    lines.push("");
  } else {
    lines.push("Recovered structured records (`kind = 4` UTF-16LE):");
    lines.push("- no clean `kind = 4` inventory was recovered in this pass");
    lines.push("");
  }

  if (rejectedRows.length > 0) {
    lines.push("Rejected candidate records:");
    lines.push(formatRejectedStringTableRows(rejectedRows));
    lines.push("");
  }

  if (mixedRecoveredRows.length > 0) {
    lines.push("Recovered mixed string-shaped records (`kind = 0/1`):");
    lines.push(formatRecoveredMixedStringRows(mixedRecoveredRows));
    lines.push("");
  }

  if (mixedRejectedRows.length > 0) {
    lines.push("Rejected mixed string-shaped candidates:");
    lines.push(formatRejectedStringTableRows(mixedRejectedRows));
    lines.push("");
  }

  if (fragments.length > 0) {
    lines.push("Recovered loose UTF-16LE message fragments:");
    for (const fragment of fragments) {
      lines.push(`- \`${fragment}\``);
    }
    lines.push("");
  }

  if (siblingArtifact) {
    lines.push("Corroborating sibling artifact:");
    lines.push(`- file: \`${siblingArtifact.path}\``);
    lines.push(`- exported handlers: ${siblingArtifact.exported.map((name) => `\`${name}\``).join(", ")}`);
    lines.push("- This section is corroboration only and does not replace byte-backed evidence.");
    lines.push("");
  }

  lines.push("Unresolved:");
  if (failure) {
    lines.push(`- Failure mode: \`${failure}\`.`);
  }
  lines.push("- Opcode meanings remain unresolved in this pass.");
  lines.push("- Any bytes not represented above remain byte-backed but uninterpreted.");
  lines.push("");
  return `${lines.join("\n")}\n`;
}

function writeBlockPass({ block, blockFileOffset, blockSlice, markerIndex, siblingArtifact, failure }) {
  const payload = markerIndex >= 0 ? blockSlice.subarray(markerIndex + 4) : blockSlice;
  const { recovered: recoveredRows, rejected: rejectedRows } = failure
    ? { recovered: [], rejected: [] }
    : scanKind4Utf16Records(payload);
  const { recovered: mixedRecoveredRows, rejected: mixedRejectedRows } = failure
    ? { recovered: [], rejected: [] }
    : scanMixedStringRecords(payload);
  const fragments = failure ? [] : extractLooseUtf16Fragments(payload);
  const fileName = buildPassFileName(block.offset);
  const filePath = path.join(cwd, fileName);
  const markdown = buildPassMarkdown({
    block,
    blockFileOffset,
    markerIndex,
    blockSlice,
    recoveredRows,
    rejectedRows,
    mixedRecoveredRows,
    mixedRejectedRows,
    fragments,
    siblingArtifact,
    failure,
  });
  ensureParentDir(filePath);
  const oldContent = fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : null;
  if (oldContent !== markdown) {
    fs.writeFileSync(filePath, markdown, "utf8");
  }
  return {
    fileName,
    blockOffset: block.offset,
    wrote: oldContent !== markdown,
  };
}

function analyzeChunk() {
  const { chunkJson, chunkBin, blocks } = readChunkInputs();
  maybeWriteStubArtifacts(chunkJson);
  const existingPasses = getExistingPassContent();
  const siblingArtifact = findCorroboratingSiblingArtifact(chunkJson.handlers.map((handler) => handler.name));
  const written = [];
  const coveredOffsets = [];

  for (const block of blocks) {
    if (hasCoverage(existingPasses, block.offset)) {
      coveredOffsets.push(block.offset);
      continue;
    }
    try {
      const { blockFileOffset, blockSlice } = readEmbeddedBlock(chunkBin, chunkJson.literalsDataOffset, block);
      const markerIndex = findMarkerIndex(blockSlice);
      written.push(writeBlockPass({ block, blockFileOffset, blockSlice, markerIndex, siblingArtifact }));
      coveredOffsets.push(block.offset);
    } catch (error) {
      const blockFileOffset = chunkJson.literalsDataOffset + block.offset;
      const blockSlice = chunkBin.subarray(blockFileOffset, blockFileOffset + block.length);
      written.push(
        writeBlockPass({
          block,
          blockFileOffset,
          blockSlice,
          markerIndex: -1,
          siblingArtifact,
          failure: error instanceof Error ? error.message : String(error),
        })
      );
    }
  }

  const allPasses = getExistingPassContent();
  const uncoveredOffsets = blocks.filter((block) => !hasCoverage(allPasses, block.offset)).map((block) => block.offset);

  return {
    chunkBase,
    scriptNumber: chunkJson.scriptNumber,
    embeddedBlockCount: blocks.length,
    coveredOffsets,
    uncoveredOffsets,
    written,
    siblingArtifact: siblingArtifact?.path ?? null,
  };
}

try {
  const result = analyzeChunk();
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(
    JSON.stringify(
      {
        chunkBase,
        error: error instanceof Error ? error.message : String(error),
      },
      null,
      2
    )
  );
  process.exit(1);
}
