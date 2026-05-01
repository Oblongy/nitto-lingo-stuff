# Lscr-102 Pass 22: Hotspot Stack-Trace Windows (Block-Scoped Refresh)

Purpose:
- Build stricter hotspot views for the known blocker windows in blocks `14012`, `37252`, and `43264`.
- Align four evidence classes without inventing lhs names:
  - block-scoped annotated bytes
  - pass-block table rows
  - stricter surface rows (`Lscr-102.blocks.lingo`, `Lscr-102.blocks.js`, `Lscr-102.block08-islands.js`)
  - broader faithful rows (`Lscr-102.rebuilt-faithful-full.js`) for contrast only
- Prevent same-offset cross-hits. All offsets in this file are block-local and only valid inside the named block section.

Source classes:
- Raw bytes: `Lscr-102.annotated-disasm.md`
- Table rows: `Lscr-102.pass-block14012-table.md`, `Lscr-102.pass-block37252-table.md`, `Lscr-102.pass-block43264-table.md`
- Stricter surface rows: `Lscr-102.block08-islands.js`, `Lscr-102.blocks.lingo`, `Lscr-102.blocks.js`
- Broader contrast only: `Lscr-102.rebuilt-faithful-full.js`

## Block 14012 (`RaceEngine_runFrame`)

Hotspots:
- `0x1135`
- `0x11C5`

### Table rows
Source: `Lscr-102.pass-block14012-table.md:175-179`

```text
- payload offset `11880`: id `143`, kind `4`, len `3`, `INT`
- payload offset `11900`: id `144`, kind `4`, len `10`, `timeAnchor`
- payload offset `11932`: id `145`, kind `4`, len `5`, `KDONE`
- payload offset `11956`: id `146`, kind `4`, len `13`, `createMd5Hash`
- payload offset `11996`: id `147`, kind `4`, len `4`, `RINT`
```

### Annotated bytes
Source: `Lscr-102.annotated-disasm.md:3725-3746`, `:3790-3794`

```text
112D: 35 00 65     op_35 arg=101 ; "rt"
1130: 41           op_41
1131: 35 00 01     op_35 arg=1 ; "c1"
1134: 22           op_22
1135: 13 07 00 23  op_13 branch? target/imm=35
1139: 3B 00 8F     op_3B arg=143 ; "INT"
113C: 39           op_39
113D: 41           op_41
113E: 35 00 57     op_35 arg=87 ; "s"
1153: 1C           op_1C
1154: 83 3A 00     op_83 arg=14848
1157: 04           op_04
1158: 51           op_51
1159: 3B 00 91     op_3B arg=145 ; "KDONE"
115C: 39           op_39

11BD: 35 00 65     op_35 arg=101 ; "rt"
11C0: 41           op_41
11C1: 35 00 01     op_35 arg=1 ; "c1"
11C4: 22           op_22
11C5: 13 07 00 17  op_13 branch? target/imm=23
11C9: 3B 00 93     op_3B arg=147 ; "RINT"
```

### Stricter surface rows
Source: `Lscr-102.block08-islands.js:2970-2987`, `:3015-3017`

```text
island_383() {
  const island = { index: 383, start: "0x112C", end: "0x1139" };
  this.__record(island, "branch", "if not (/*stack*/ <> (rt mod c1)) then goto 0x115C", "0x1135");
}

island_384() {
  const island = { index: 384, start: "0x1139", end: "0x1159" };
  this.__record(island, "unresolved", "0x04 stack=[INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), 1.4848]", "0x1157");
  this.__record(island, "expr", "1.4848", "0x1158");
  this.__record(island, "stackTail", "INT | s | carV | carAccel | _system | (milliseconds - timeAnchor)", "0x1159");
}

island_385() {
  const island = { index: 385, start: "0x1159", end: "0x115C" };
  this.__record(island, "stackTail", "KDONE", "0x115C");
}

island_390() {
  const island = { index: 390, start: "0x11BC", end: "0x11C9" };
  this.__record(island, "branch", "if not (/*stack*/ <> (rt mod c1)) then goto 0x11E0", "0x11C5");
}
```

### Broader faithful rows
Source: `Lscr-102.rebuilt-faithful-full.js:1508-1515`

```text
this.__branch(block, "if not (/*stack*/ <> (rt mod c1)) then -- jump 35", "0x1135");
this.__unresolved(block, "0x04 unresolved stack=[INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), 1.4848]", "0x1157");
this.__branch(block, "if not (KDONE <> (rt mod c1)) then -- jump 23", "0x11C5");
```

### Safe conclusions
- `0x1135` is block-scoped to island `383` (`0x112C..0x1139`), and the strict island trace still records the lhs as `/*stack*/`.
- `KDONE` is real as payload id `145`, but the named `KDONE` load does not appear until separate island `385` (`0x1159..0x115C`) after the `0x1135` branch target.
- `0x11C5` is block-scoped to island `390` (`0x11BC..0x11C9`), and the strict island trace still records its lhs as `/*stack*/`.
- `rebuilt-faithful-full.js` carries `KDONE` into the `0x11C5` guard, but the stricter raw island surface does not prove that carry. Keep the contradiction explicit.

## Block 37252 (`RaceEngine_createMd5Hash`)

Hotspot:
- `0x0145`, `0x016F..0x0174`

### Same-offset collision to exclude
Source: `Lscr-102.blocks.lingo:1962-1964`, `:2049-2058`

```text
on block_9
  -- block offset=31980 length=2264 codeLen=710

  ?
  null
  airFlowLimit = c1
  ?
  // goto @368
  // [0x0170] op_18
  // [0x0178] op_1c
  c1
  stockBoost = null.overallAirFlowLimit
  ?
```

This packet belongs to block `31980`, not block `37252`. Do not reuse it for block `16` just because the local offsets collide.

### Table rows
Source: `Lscr-102.pass-block37252-table.md:62-75`

```text
- payload offset `1320`: id `29`, kind `4`, len `8`, `lightTO1`
- payload offset `1392`: id `31`, kind `4`, len `7`, `timeout`
- payload offset `1460`: id `34`, kind `4`, len `6`, `symbol`
- payload offset `1484`: id `35`, kind `4`, len `8`, `runLight`
- payload offset `1648`: id `41`, kind `4`, len `2`, `HT`
- payload offset `1664`: id `42`, kind `4`, len `7`, `HTREADY`
```

### Annotated bytes
Source: `Lscr-102.annotated-disasm.md:6329-6338`

```text
0169: 3A 00 01     op_3A arg=1 ; "c0"
016C: 41           op_41
016D: 23           op_23
016E: 00           op_00
016F: 04           op_04
0170: 36 00 1D     op_36 arg=29 ; "lightTO1"
0173: 51           op_51
0174: 06 00 7B     op_06 jump?/imm=123
0177: 41           op_41
0178: 35 00 1B     op_35 arg=27 ; "btd"
```

### Stricter surface rows
Source: `Lscr-102.blocks.lingo:2328-2330`, `:2384-2395`
Mirror: `Lscr-102.blocks.js:2328-2330`, `:2384-2395`

```text
on block_16
  -- block offset=37252 length=2068 codeLen=539
  -- names: ... 27=btd, 29=lightTO1, 31=timeout, 34=symbol, 35=runLight ...

null.lightTO1
// goto @4898
// [0x011c] op_0f
null.lightTO1.forget()()
null
stagingLightPos1 = null.c0
?
// [0x015b] op_04
(((p % null.btd) * null.c1000) + (null.c1000 / null.startLightTimer))(runLight)
null
lightTO1 = null
?
```

### Broader faithful rows
Source: `Lscr-102.rebuilt-faithful-full.js:1988-1992`

```text
this.__expr(block, "lightTO1", "0x0145");
this.__unresolved(block, "0x04 unresolved stack=[lightDelayTO, VOID_SENTINEL, lightDelayTO, (raceType = RIVAL), (raceType = CTQ), lightTO1, VOID_SENTINEL, timeout, ((((p mod btd) * c1000) + (c1000 / c2)) ^ symbol(runLight))]", "0x016F");
this.__assign(block, "lightTO1", "((((p mod btd) * c1000) + (c1000 / c2)) ^ symbol(runLight))", "0x0170");
this.__expr(block, "timeout", "0x0173");
this.__unresolved(block, "jump 123", "0x0174");
```

### Safe conclusions
- Block `37252` does have a real block-scoped raw slice at `0x016F..0x0174`; use that slice, not any same-offset hit from another block.
- The strict block `16` surface proves an unnamed `lightTO1` / `timeout` handoff cluster, but it does not independently expose `lightTO1` at `0x0145` or `timeout` at `0x0173` as standalone readable executable rows.
- The broader faithful rows can still be used as contrast, but not as proof that the strict block surface has reached the same boundary.

## Block 43264 (`RaceEngine_buildMd5Source`)

Hotspots:
- `0x05F4..0x05F5`
- `0x064C..0x0663`

### Table rows
Source: `Lscr-102.pass-block43264-table.md:125-133`

```text
- payload offset `4092`: id `92`, kind `4`, len `6`, `nogood`
- payload offset `4116`: id `93`, kind `4`, len `13`, `goodCounterRT`
- payload offset `4196`: id `95`, kind `4`, len `12`, `badCounterRT`
- payload offset `4264`: id `97`, kind `4`, len `12`, `badCounterET`
- payload offset `4300`: id `98`, kind `4`, len `4`, `xtra`
- payload offset `4320`: id `99`, kind `4`, len `7`, `caluMD5`
- payload offset `4348`: id `100`, kind `4`, len `12`, `getStringMD5`
```

### Annotated bytes
Source: `Lscr-102.annotated-disasm.md:7918-7969`

```text
05F4: 51           op_51
05F5: 06 00 4A     op_06 jump?/imm=74

063E: 51           op_51
063F: 3B 00 62     op_3B arg=98 ; "xtra"
0642: 39           op_39
0643: 3D 00 63     op_3D arg=99 ; "caluMD5"
0646: 23           op_23
0647: 00           op_00
0648: 01           op_01
0649: 57 00 02     op_57 arg=2 ; ","
064C: 51           op_51
064D: 56 00 02     op_56 arg=2 ; ","
0650: 35 00 64     op_35 arg=100 ; "getStringMD5"
0653: 39           op_39
0654: 56 00 00     op_56 arg=0 ; ""
0657: 3A 00 01     op_3A arg=1 ; "stockRedLine"
065A: 57 00 00     op_57 arg=0 ; ""
065D: 51           op_51
065E: 42           op_42
065F: 51           op_51
0660: 56 00 00     op_56 arg=0 ; ""
0663: 05           op_05
```

### Stricter surface rows
Source: `Lscr-102.blocks.lingo:2929-2938`
Mirror: `Lscr-102.blocks.js:2929-2938`

```text
// goto @1582
id_0 = (? + nogood)
?
, = caluMD5
?
id_0 = ,.getStringMD5()(id_0)
?
// [0x064f] op_05
id_0
```

### Broader faithful rows
Source: `Lscr-102.rebuilt-faithful-full.js:2281-2295`

```text
this.__expr(block, "(goodCounterRT = VOID)", "0x05F4");
this.__unresolved(block, "jump 74", "0x05F5");
this.__expr(block, "\",\" = (xtra ^ caluMD5)", "0x0649");
this.__expr(block, "badCounterET", "0x064C");
this.__assign(block, "EMPTY", "getStringMD5(EMPTY)", "0x065A");
this.__expr(block, "\",\"", "0x065D");
this.__expr(block, "0", "0x065F");
this.__expr(block, "EMPTY", "0x0663");
```

### Safe conclusions
- The raw gate edge at `0x05F4..0x05F5` stays a minimal unresolved core: `op_51` followed by jump `74`.
- The strict block `19` tail surface stops at the row packet ending `// [0x064f] op_05` and trailing `id_0`.
- The block-scoped annotated bytes continue beyond that compressed strict packet through `064F: 1D`, `065A: 57 00 00`, and `0663: 05`.
- The broader faithful rows reach `0x065A` and `0x0663`, but the strict block surface does not independently prove those as readable executable rows.

## Current hotspot rules

- Treat all local offsets as block-scoped. The same `0x0170` can legitimately occur in different blocks with unrelated meaning.
- Prefer `block08-islands.js` over broader helper carries for `14012` guard lhs ownership.
- Prefer `blocks.lingo` / `blocks.js` block ownership over same-offset grep hits when building strict surfaces for `37252`.
- Use `rebuilt-faithful-full.js` only as broader contrast after the strict block-scoped rows are pinned.
