# Lscr-102 Pass 32: `0x0240` and `0x0080..0x0081` Stop-Map

Purpose:
- close the next two narrow `Lscr-102` windows after the block `43264` packet floor
- distinguish one exhausted carried-rhs seam (`0x0240`) from one named-but-still-unassigned tail seam (`0x0080..0x0081`)

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.stack-faithful.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass-block34244-table.md`

## Block 3 / `RaceEngine_parseConfig` / `0x0240`

Current deliverable line:

```text
tqArray = param_xmlparser -- 0x0240
```

Corroboration:

```text
stack-faithful.lingo: id_50 = param_xmlparser -- 0x0240
rebuilt-faithful-full.js: this.__assign(block, "id_50", "param_xmlparser", "0x0240");
blocks.lingo/js: stable lhs family is tqArray immediately before the typed attribute batch continues
```

Decision:
- keep `tqArray = param_xmlparser -- 0x0240` unchanged

Why:
- the rhs is already at the strict floor for the current local evidence
- the stricter local block surfaces do not expose a cleaner named source than `param_xmlparser`
- the parallel `xmlparser.initBoost.<field>` interpretation belongs to the repeated attribute chain, not to a cleaner replacement for this rhs

Result:
- `0x0240` is exhausted for now as a carried-rhs seam, not a lift candidate

## Block 10 / `RaceEngine_lookupTorque` / `0x0080..0x0081`

Current strict tail:

```text
posTq = tqArray[parseInt((rpm / c100))] -- 0x006E
-- unresolved tail stack: [(posTq + c200), 0.8758]
0.8758 -- 0x0081
```

Strict local evidence:

```text
blocks.lingo/js names: rpm, undefined, idleRPM, c10000, posTq, tqArray, parseInt, c100, negTq, c200
blocks.lingo/js tail: no exposed assignment target after posTq lookup; only the remaining stack pair survives
pass-block34244-table.md: payload id 8 = negTq
```

Broader corroboration:

```text
reconstructed.lingo / rebuilt-faithful-full.js suggest: negTq = posTq + c200
```

Decision:
- do not promote `negTq = posTq + c200`
- do tighten the blocker wording so the deliverable/report say this is a `negTq`-family carry seam rather than a generic helper hint

Why:
- `pass-block34244-table.md` proves the block vocabulary includes `negTq`
- the stricter local tail still does not expose the assignment target at `0x0080`
- that means the name family is corroborated, but the executable assignment is still not byte-backed at the strict layer

Result:
- `0x0080..0x0081` is now a better-described stop-map:
  - named `negTq` family confirmed
  - assignment target still not promotable
