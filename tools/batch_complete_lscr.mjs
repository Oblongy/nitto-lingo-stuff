import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { readJson } from "./lscr-lib.mjs";

const cwd = process.cwd();

function findChunkBases() {
  return fs
    .readdirSync(cwd)
    .filter((name) => /^Lscr-\d+\.json$/.test(name))
    .map((name) => name.replace(/\.json$/, ""))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

function runAnalyzer(chunkBase) {
  const child = spawnSync(process.execPath, [path.join(cwd, "tools", "analyze_lscr_chunk.mjs"), chunkBase], {
    cwd,
    encoding: "utf8",
    timeout: 30_000,
  });
  if (child.signal === "SIGTERM" || child.status === null) {
    return {
      chunkBase,
      status: -1,
      stdout: "",
      stderr: `analyzer timed out for ${chunkBase}`,
      parsed: null,
    };
  }
  let parsed = null;
  if (child.stdout.trim()) {
    try {
      parsed = JSON.parse(child.stdout);
    } catch {
      parsed = null;
    }
  }
  return {
    chunkBase,
    status: child.status,
    stdout: child.stdout.trim(),
    stderr: child.stderr.trim(),
    parsed,
  };
}

const chunkBases = findChunkBases();
const results = [];

for (const chunkBase of chunkBases) {
  const json = readJson(path.join(cwd, `${chunkBase}.json`));
  const expectedHiddenBlocks = json.literals?.[0]?.embeddedCodeBlocks?.length ?? 0;
  const run = runAnalyzer(chunkBase);
  results.push({
    chunkBase,
    expectedHiddenBlocks,
    completionRuleSatisfied:
      run.status === 0 &&
      Array.isArray(run.parsed?.uncoveredOffsets) &&
      run.parsed.uncoveredOffsets.length === 0 &&
      expectedHiddenBlocks > 0,
    status: run.status,
    uncoveredOffsets: run.parsed?.uncoveredOffsets ?? [],
    written: run.parsed?.written ?? [],
    siblingArtifact: run.parsed?.siblingArtifact ?? null,
    stdout: run.stdout,
    stderr: run.stderr,
  });
}

const summaryPath = path.join(cwd, "tools", "lscr-completion-summary.json");
fs.writeFileSync(
  summaryPath,
  JSON.stringify(
    {
      scannedAt: new Date().toISOString(),
      nodeExecPath: process.execPath,
      results,
    },
    null,
    2
  ),
  "utf8"
);

console.log(summaryPath);
