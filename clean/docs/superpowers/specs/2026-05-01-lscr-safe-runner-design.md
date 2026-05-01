# LSCR Safe Runner Design

## Goal

Create a generic Python runner for any `clean\Lscr-*` folder that automates evidence discovery and report refresh without inventing source or mutating `rightful.ls`.

The script must support the current FFDec/export discipline:

- exported chunk artifacts remain the only source of truth
- unresolved regions stay explicit
- report updates must cite exact artifact families already on disk
- no automatic promotion of readable source beyond what existing byte-backed artifacts already prove

## Scope

The first version is a safe runner only.

It will:

- scan one or more `clean\Lscr-*` folders
- discover raw evidence and generated pass artifacts under `root-artifacts`
- optionally run existing helper scripts when their inputs exist
- build a normalized artifact index for each script
- update `final-clean\Lscr-XXX\Lscr-XXX.mechanical-report.md`
- preserve unmanaged report prose

It will not:

- edit `final-clean\Lscr-XXX\rightful.ls`
- invent new handler names, symbols, or semantics
- rewrite reports from scratch
- claim readable code where only packet-role evidence exists

## Inputs

Per script, the runner reads:

- `clean\Lscr-XXX\root-artifacts\*`
- `clean\Lscr-XXX\evidence\*` when present
- `clean\Lscr-XXX\rightful.ls` when present
- `final-clean\Lscr-XXX\Lscr-XXX.mechanical-report.md`

Shared helper inputs:

- `clean\tools\build_stronger_intermediates.py`
- `clean\tools\split_block_regions.py`

## Outputs

Per script, the runner may write:

- refreshed helper-generated artifacts under `clean\Lscr-XXX\root-artifacts`
- updated managed sections inside `final-clean\Lscr-XXX\Lscr-XXX.mechanical-report.md`

The runner must not write any other deliverable file in version 1.

## Behavior

### 1. Script discovery

The runner accepts:

- a specific script path like `clean\Lscr-102`
- a script name like `Lscr-102`
- or no target, in which case it scans all `clean\Lscr-*`

### 2. Artifact discovery

For each script, the runner indexes:

- base artifacts:
  - `*.json`
  - `*.blocks.lingo`
  - `*.blocks.js`
  - `*.annotated-disasm.md`
  - `*.all-block-tables.tsv`
- block tables:
  - `pass-block*.md`
- pass artifacts:
  - `pass*.md`
  - `bin-only.pass*.md`
- corroboration mirrors:
  - `rebuilt-faithful*.js`
  - `reconstructed*.lingo`
  - `stack-faithful*.lingo`

The index is filename-driven and must not infer semantics from missing files.

### 3. Helper execution

The runner may invoke the existing helper scripts only when their expected inputs exist.

Version 1 helper policy:

- run helpers only when explicitly enabled by flag
- default is read-only indexing plus report update

This keeps the first cut safe and repeatable.

### 4. Report update model

The runner updates only managed sections inside the mechanical report.

Managed sections:

- raw-evidence artifact lists
- block-level corroboration lists
- unresolved section addenda generated from indexed artifact families

The runner must use stable markers such as:

- `<!-- BEGIN AUTO:RAW-EVIDENCE -->`
- `<!-- END AUTO:RAW-EVIDENCE -->`

If markers do not yet exist, version 1 may insert them into known report sections once and then maintain them on later runs.

Everything outside managed markers must be preserved byte-for-byte.

### 5. Provenance rules

The runner may only emit:

- artifact paths
- exact pass filenames
- exact block numbers
- exact offsets when already present in indexed artifacts

The runner must not synthesize:

- new readable code
- new handler names
- new symbolic interpretations
- “cleaned up” semantics from broader helper layers

## CLI

Planned entrypoint:

`python clean\tools\run_lscr_pipeline.py [target] [--refresh-helpers] [--write-report] [--dry-run]`

Planned flags:

- `target`
  - optional
  - script name or path
- `--refresh-helpers`
  - run helper scripts when safe
- `--write-report`
  - apply report updates
- `--dry-run`
  - print discovered actions without writing

Default mode:

- discover artifacts
- compute report patch plan
- no writes unless `--write-report` is passed

## Internal structure

Planned modules inside one script for version 1:

- path resolution
- artifact discovery
- helper invocation
- report section rendering
- managed-section patching

If the file grows too large, later versions can split helpers into separate modules.

## Failure handling

The runner must fail soft per script.

If one script is missing inputs:

- record the missing path
- skip unsafe steps
- continue with the next script

If a report file is missing:

- log that it was not found
- do not create a new report in version 1

If a helper script fails:

- capture stderr/stdout summary
- do not continue to write helper-derived report content for that step

## Verification

Version 1 is complete when:

- it can scan `clean\Lscr-102`
- it can produce a dry-run action summary
- it can update only managed report regions in `final-clean\Lscr-102\Lscr-102.mechanical-report.md`
- it leaves `rightful.ls` untouched
- it works generically for at least one additional `clean\Lscr-*` folder without hardcoded `Lscr-102` assumptions

## Out of scope for version 1

- automatic `rightful.ls` edits
- automatic JS mirror regeneration
- promotion of packet-role evidence into readable code
- report prose generation beyond managed evidence sections

## Follow-up phase

After the safe runner is stable, a guarded-transform phase can be added for explicitly whitelisted edits such as:

- terminator-only residue removal
- packet-role annotation tightening
- exact sink-token decompositions already proven by existing artifacts

Those guarded transforms must remain opt-in and separately reviewable.
