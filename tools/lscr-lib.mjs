import fs from "node:fs";
import path from "node:path";

export const MARKER_BYTES = Buffer.from([0x03, 0x00, 0xad, 0xde]);

export function readJson(absPath) {
  return JSON.parse(fs.readFileSync(absPath, "utf8"));
}

export function readBuffer(absPath) {
  return fs.readFileSync(absPath);
}

export function ensureParentDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

export function findMarkerIndex(blockSlice) {
  return blockSlice.indexOf(MARKER_BYTES);
}

export function toHex(bufferLike) {
  return Buffer.from(bufferLike).toString("hex").replace(/(..)/g, "$1 ").trim();
}

export function readEmbeddedBlock(binBuffer, literalsDataOffset, block) {
  const blockFileOffset = literalsDataOffset + block.offset;
  const blockEnd = blockFileOffset + block.length;
  if (blockEnd > binBuffer.length) {
    throw new Error(
      `block at offset ${block.offset} (len ${block.length}) extends past buffer end (${binBuffer.length})`
    );
  }
  return {
    blockFileOffset,
    blockSlice: binBuffer.subarray(blockFileOffset, blockEnd),
  };
}

export function scanKind4Utf16Records(payload, { maxChars = 64 } = {}) {
  const recovered = [];
  const rejected = [];
  for (let i = 0; i <= payload.length - 12; i += 4) {
    const id = payload.readUInt32LE(i);
    const kind = payload.readUInt32LE(i + 4);
    const len = payload.readUInt32LE(i + 8);
    if (kind !== 4) continue;
    if (id > 4096) continue;
    if (len <= 0) {
      rejected.push({
        relOffset: i,
        id,
        kind,
        len,
        reason: "non-positive length",
      });
      continue;
    }
    if (len > maxChars) {
      rejected.push({
        relOffset: i,
        id,
        kind,
        len,
        reason: `length exceeds maxChars ${maxChars}`,
      });
      continue;
    }
    const byteLen = len * 2;
    const dataStart = i + 12;
    const dataEnd = dataStart + byteLen;
    if (dataEnd > payload.length) {
      rejected.push({
        relOffset: i,
        id,
        kind,
        len,
        byteSpan: `${dataStart}..${dataEnd - 1}`,
        reason: "decoded byte span runs past payload end",
      });
      continue;
    }
    const text = payload
      .subarray(dataStart, dataEnd)
      .toString("utf16le")
      .replace(/\u0000+$/g, "");
    if (!/^[\x20-\x7e]+$/.test(text)) {
      rejected.push({
        relOffset: i,
        id,
        kind,
        len,
        byteSpan: `${dataStart}..${dataEnd - 1}`,
        reason: "decoded text contains non-printable or non-ASCII characters",
        sample: text.slice(0, 32),
      });
      continue;
    }
    recovered.push({
      relOffset: i,
      id,
      kind,
      len,
      byteSpanStart: dataStart,
      byteSpanEnd: dataEnd - 1,
      text,
    });
  }
  return { recovered, rejected };
}

export function extractLooseUtf16Fragments(payload, { minLength = 24 } = {}) {
  const text = payload.toString("utf16le");
  const matches = text.match(/[\x20-\x7e][\x20-\x7e\s().,:;'"?!\-_/]{23,}/g) ?? [];
  return [...new Set(matches.map((entry) => entry.trim()).filter((entry) => entry.length >= minLength))];
}

export function scanMixedStringRecords(payload, { maxChars = 64 } = {}) {
  const recovered = [];
  const rejected = [];

  function shouldIgnoreMixedCandidate(candidate) {
    if (candidate.reason === "non-positive length" && candidate.id === 0) return true;
    if (
      candidate.reason?.includes("non-printable") &&
      typeof candidate.len === "number" &&
      candidate.len <= 1 &&
      candidate.id <= 16
    ) {
      return true;
    }
    if (
      candidate.reason?.includes("runs past payload end") &&
      typeof candidate.relOffset === "number" &&
      candidate.relOffset >= payload.length - 24
    ) {
      return true;
    }
    return false;
  }

  function pushRejected(candidate) {
    if (shouldIgnoreMixedCandidate(candidate)) return;
    rejected.push(candidate);
  }

  for (let i = 0; i <= payload.length - 12; i += 4) {
    const id = payload.readUInt32LE(i);
    const kind = payload.readUInt32LE(i + 4);
    const len = payload.readUInt32LE(i + 8);
    if (![0, 1].includes(kind)) continue;
    if (id > 4096) continue;
    if (len <= 0) {
      pushRejected({ relOffset: i, id, kind, len, reason: "non-positive length" });
      continue;
    }
    if (len > maxChars) {
      pushRejected({ relOffset: i, id, kind, len, reason: `length exceeds maxChars ${maxChars}` });
      continue;
    }

    let byteLen;
    let text;
    let encoding;
    if (kind === 0) {
      byteLen = len * 2;
      const dataStart = i + 12;
      const dataEnd = dataStart + byteLen;
      if (dataEnd > payload.length) {
        pushRejected({
          relOffset: i,
          id,
          kind,
          len,
          byteSpan: `${dataStart}..${dataEnd - 1}`,
          reason: "UTF-16LE byte span runs past payload end",
        });
        continue;
      }
      text = payload.subarray(dataStart, dataEnd).toString("utf16le").replace(/\u0000+$/g, "");
      encoding = "utf16le";
      if (!/^[\x20-\x7e]+$/.test(text)) {
        pushRejected({
          relOffset: i,
          id,
          kind,
          len,
          byteSpan: `${dataStart}..${dataEnd - 1}`,
          reason: "decoded UTF-16LE text contains non-printable or non-ASCII characters",
          sample: text.slice(0, 32),
        });
        continue;
      }
      recovered.push({
        relOffset: i,
        id,
        kind,
        len,
        encoding,
        byteSpanStart: dataStart,
        byteSpanEnd: dataEnd - 1,
        text,
      });
      continue;
    }

    byteLen = len;
    const dataStart = i + 12;
    const dataEnd = dataStart + byteLen;
    if (dataEnd > payload.length) {
      pushRejected({
        relOffset: i,
        id,
        kind,
        len,
        byteSpan: `${dataStart}..${dataEnd - 1}`,
        reason: "ASCII byte span runs past payload end",
      });
      continue;
    }
    text = payload.subarray(dataStart, dataEnd).toString("latin1").replace(/\u0000+$/g, "");
    encoding = "latin1";
    if (!/^[\x20-\x7e]+$/.test(text)) {
      pushRejected({
        relOffset: i,
        id,
        kind,
        len,
        byteSpan: `${dataStart}..${dataEnd - 1}`,
        reason: "decoded ASCII text contains non-printable or non-ASCII characters",
        sample: text.slice(0, 32),
      });
      continue;
    }
    recovered.push({
      relOffset: i,
      id,
      kind,
      len,
      encoding,
      byteSpanStart: dataStart,
      byteSpanEnd: dataEnd - 1,
      text,
    });
  }

  return { recovered, rejected };
}

export function formatRecoveredStringTableRows(rows) {
  return rows
    .map(
      (row) =>
        `- payload offset \`${row.relOffset}\`: id \`${row.id}\`, kind \`${row.kind}\`, char len \`${row.len}\`, byte span \`${row.byteSpanStart}..${row.byteSpanEnd}\`, \`${row.text}\``
    )
    .join("\n");
}

export function formatRejectedStringTableRows(rows) {
  return rows
    .map((row) => {
      const parts = [
        `- payload offset \`${row.relOffset}\``,
        `id \`${row.id}\``,
        `kind \`${row.kind}\``,
        `len \`${row.len}\``,
      ];
      if (row.byteSpan) parts.push(`byte span \`${row.byteSpan}\``);
      parts.push(`reason: ${row.reason}`);
      if (row.sample) parts.push(`sample \`${row.sample}\``);
      return parts.join(", ");
    })
    .join("\n");
}

export function formatRecoveredMixedStringRows(rows) {
  return rows
    .map(
      (row) =>
        `- payload offset \`${row.relOffset}\`: id \`${row.id}\`, kind \`${row.kind}\`, encoding \`${row.encoding}\`, char len \`${row.len}\`, byte span \`${row.byteSpanStart}..${row.byteSpanEnd}\`, \`${row.text}\``
    )
    .join("\n");
}

export function listSiblingRewriteFiles(workspaceDir) {
  const dir = path.join(workspaceDir, "js_rewrite");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".js"))
    .map((name) => path.join(dir, name));
}

export function extractExportedFunctionNames(jsSource) {
  return [...jsSource.matchAll(/export function ([A-Za-z0-9_]+)/g)].map((match) => match[1]);
}
