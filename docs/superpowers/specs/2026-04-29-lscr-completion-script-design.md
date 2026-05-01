# LSCR Completion Script Design

Date: `2026-04-29`

## Goal

Create a local script workflow that continues analyzing an `Lscr-*.bin` chunk
until every hidden block listed in the matching `Lscr-*.json` file has a
dedicated pass file with recovered string/table inventory.

## Completion Rule

A chunk is complete only when:

- the matching `Lscr-*.json` file contains one or more `embeddedCodeBlocks`
- every hidden block in that list has a dedicated markdown pass file
- each dedicated pass file includes:
  - the block offset
  - marker alignment notes
  - recovered header words
  - at least one byte-backed string/table inventory section

A chunk is not complete merely because it already has:

- a visible dispatcher-stub report
- `reconstructed.lingo`
- `rebuilt-faithful.js`
- one or more partial hidden-block notes

## Evidence Boundary

Primary evidence must come from:

- local `Lscr-*.bin`
- local `Lscr-*.json`

Corroborating local sibling artifacts may also be used when available:

- `js_rewrite\\*.js`
- existing chunk pass files
- other local chunk artifacts in the same workspace

The script must keep these separate:

- byte-backed facts
- sibling-artifact corroboration
- unresolved areas

The script must not invent:

- opcode semantics
- handler logic
- missing table entries
- relationships not directly supported by bytes or explicit sibling-file names

## Recommended Architecture

Use two Node-based scripts:

1. `tools/analyze_lscr_chunk.mjs`
2. `tools/batch_complete_lscr.mjs`

`analyze_lscr_chunk.mjs` responsibilities:

- accept a chunk base name such as `Lscr-109`
- load the matching `.json` and `.bin`
- enumerate `embeddedCodeBlocks`
- identify which blocks already have dedicated pass coverage
- extract block-local evidence for uncovered blocks
- write one pass markdown file per uncovered hidden block
- optionally create baseline stub artifacts if missing

`batch_complete_lscr.mjs` responsibilities:

- scan the workspace for `Lscr-*.json`
- call `analyze_lscr_chunk.mjs` for each chunk
- repeat until no chunk has uncovered hidden blocks in the current workspace run
- write a short run summary listing:
  - chunks scanned
  - blocks covered
  - blocks still unresolved for structural reasons

## Hidden Block Detection

For each `embeddedCodeBlocks` entry in the chunk JSON, the analyzer should:

- use the JSON block offset and length as the canonical anchor
- treat any pre-marker prefix bytes as separate from the hidden-block marker
- locate the actual marker `03 00 AD DE` inside the block slice
- record:
  - file offset
  - block-relative offset
  - marker-relative offset
  - `headerWord0`
  - `headerWord1`
  - `headerWord2`

## Per-Block Extraction

For each uncovered hidden block, the analyzer should recover:

- the first opcode window after the 20-byte header
- UTF-16LE `kind = 4` table records when structurally present
- loose UTF-16LE message fragments when they can be recovered from the bytes
- block-local ids, lengths, and offsets for recovered string records

If no clean table records are present, the pass file should still be written and
must explicitly say:

- no clean `kind = 4` inventory was recovered
- what was tried
- what unresolved byte windows remain

## Naming and File Layout

Place generated files beside the chunk files in the current workspace.

Expected outputs:

- existing baseline style preserved:
  - `Lscr-109.reconstructed.lingo`
  - `Lscr-109.rebuilt-faithful.js`
- new dedicated hidden-block pass style:
  - `Lscr-109.passN-block<offset>-table.md`
  - or another deterministic block-specific name that includes the block offset

Requirement:

- every hidden block must map to exactly one dedicated pass file
- filenames must be deterministic so reruns do not create duplicate variants

## Corroborating Sibling Names

If the analyzer finds a likely sibling rewrite file such as
`js_rewrite\\10-connection-script.js`, it may include a clearly labeled section:

- `Corroborating sibling artifact`

That section may mention matching exported handler names or script titles, but it
must never replace the byte-backed sections.

## Idempotence

The scripts must be rerunnable.

Reruns should:

- reuse existing pass files when they already cover a block
- avoid rewriting files when content is unchanged
- only create new pass files for uncovered blocks

## Error Handling

If a chunk cannot be fully processed, the analyzer should still emit a useful
pass file or summary entry containing:

- the chunk name
- the block offset
- the failure mode
- whether the failure happened in:
  - JSON loading
  - binary slicing
  - marker search
  - string/table extraction

## Testing

Minimum verification for the first implementation:

- run on `Lscr-109`
- confirm block `140`, `1428`, `2884`, `5908`, and `8436` each end with a
  dedicated pass file
- ensure existing `Lscr-109.pass1-faithful-report.md` is not mistaken for full
  hidden-block coverage
- ensure rerunning does not create duplicate pass files for the same block

Secondary verification:

- run a workspace scan and print which `Lscr-*` chunks remain incomplete

## Constraints

- The normal local `node` CLI runtime is known to crash in this workspace, so
  the implementation should keep parsing logic pure and deterministic.
- The workspace is not a git repository, so the design cannot be committed here.
- The script should still be authored as local files in this workspace.

## Recommended First Implementation

Implement:

- `tools/analyze_lscr_chunk.mjs`
- `tools/batch_complete_lscr.mjs`

Start with the current `Lscr-109` format as the reference target, then generalize
to other chunks only after block-specific coverage accounting works.
