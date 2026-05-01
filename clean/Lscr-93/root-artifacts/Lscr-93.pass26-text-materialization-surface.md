# Lscr-93 Pass 26 Text Materialization Surface

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.block1.annotated-disasm.md`

Scope:
- This pass isolates the visible text/materialization pipeline in `Lscr-93`.
- It focuses on executable transform sites such as `netTextResult`,
  `decrypt`, `propList(...)`, `eval`, `new xtra("xmlparser")`,
  `parseString(...)`, and `makeList().n2`.
- It does not invent what those transforms "really" mean beyond the exported
  surface.

## Executable Transform Counts

Visible executable materialization steps in the current lift:

- `2` `checkProcessResult = new xtra("xmlparser")`
- `2` `checkProcessResult.parseString(checkedForOneClient.getAProp("d"))`
- `1` `fetchCacheXMLDone(checkProcessResult.makeList().n2)`
- `1` `netError = checkProcessResult.makeList().n2`
- `1` `netDone = netTextResult(_global.gNetID[_global])`
- `2` `checkedForOneClient = (("propList(" & netDone) & ")")`
- `2` bare `eval` sites
- `1` `netDone = decrypt(netDone)`
- `1` `trace(netTextResult(_global.checkProcessResult))`
- `1` `CheckNittoProcessesCB(netTextResult(_global.checkProcessResult))`
- `1` `CheckNittoProcessesCB("1")`

So the whole-file materialization surface is not one pipeline. It splits into:

- a process-check text sink
- a `gNetID` text-to-`propList(...)` bridge
- two `xmlparser` / `makeList().n2` parse branches

## Process-Check Text Sink

At the top of the file, `_global.checkProcessResult` is consumed through
`netTextResult(...)` exactly twice:

- `trace(netTextResult(_global.checkProcessResult)) -- 0x005F`
- `CheckNittoProcessesCB(netTextResult(_global.checkProcessResult)) -- 0x0074`

There is also one visible fallback:

- `CheckNittoProcessesCB("1") -- 0x0082`

This is the smallest materialization family in the file: raw text from
`checkProcessResult` goes directly to trace/UI helper sinks rather than through
`propList(...)` or `xmlparser`.

## `gNetID` Text-To-`propList(...)` Bridge

The visible lift shows this sequence:

- `netDone = netTextResult(_global.gNetID[_global]) -- 0x00EA`
- `checkedForOneClient = (("propList(" & netDone) & ")") -- 0x0101`
- `eval -- 0x0104`

Then later in the same top region:

- `netDone = decrypt(netDone) -- 0x012B`
- `checkedForOneClient = (("propList(" & netDone) & ")") -- 0x0180`
- `eval -- 0x0183`

This is the strongest whole-file proof that the `gNetID` second-item text path
has two visible `propList(...)` build/eval attempts, separated by one visible
`decrypt(netDone)` step.

### Raw anchor

Raw `0x00EE..0x0104` in the annotated disassembly shows:

- `op_3B arg=14 ; "eval"`
- string pieces `"propList("` and `")"`
- stored rebuild into `checkedForOneClient`

Raw `0x0121..0x012B` shows:

- `decrypt`
- `56 00 02 ; "netDone"`
- store back into `netDone`

Raw `0x016E..0x0183` then repeats the same `eval` / `propList(` / `netDone`
 / `")"` materialization family a second time.

So the second visible `eval` site is not a transcription duplicate. It is a
separate raw materialization window after the visible decrypt step.

## `xmlparser` Branch Family

The file contains two visible `xmlparser` construction + parse branches.

Visible lift sites:

- `checkProcessResult = new xtra("xmlparser") -- 0x04AD`
- `checkProcessResult.parseString(checkedForOneClient.getAProp("d")) -- 0x04C8`
- `fetchCacheXMLDone(checkProcessResult.makeList().n2) -- 0x04DF`

and later:

- `checkProcessResult = new xtra("xmlparser") -- 0x1113`
- `checkProcessResult.parseString(checkedForOneClient.getAProp("d")) -- 0x112E`
- `netError = checkProcessResult.makeList().n2 -- 0x113E`

### Raw anchor: first branch

Annotated raw `0x04A3..0x04D9` shows:

- `xtra`
- `"xmlparser"`
- `23 00 01` constructor-like application
- store into `checkProcessResult`
- `parseString`
- `getAProp("d")`
- `makeList`
- `... 3F 37 ...`
- `n2`

The visible sink after that branch is:

- `fetchCacheXMLDone(checkProcessResult.makeList().n2)`

### Raw anchor: second branch

Annotated raw `0x1109..0x113E` repeats the same `xtra("xmlparser")` /
`parseString(getAProp("d"))` / `makeList ... n2` family, but the sink is
different:

- `netError = checkProcessResult.makeList().n2`

That second parsed result later feeds the only visible `!ATTRIBUTES` callback
site in the file:

- `garageDynoBuyCB(... netError.!ATTRIBUTES.e ... netError.!ATTRIBUTES.n) -- 0x119F`

So the two `xmlparser` branches share the same visible parse skeleton but fan
out into different downstream sinks.

## Tightest Whole-File Split

The materialization surface in `Lscr-93` breaks into three exported families:

- raw process text:
  - `netTextResult(_global.checkProcessResult)` -> `trace(...)` /
    `CheckNittoProcessesCB(...)`

- queue text to property bag:
  - `netTextResult(gNetID second item)` -> optional `decrypt(netDone)` ->
    `checkedForOneClient = "propList(" & netDone & ")"` -> `eval`

- parser object branches:
  - `new xtra("xmlparser")` -> `parseString(d)` -> `makeList().n2` ->
    either `fetchCacheXMLDone(...)` or `netError = ...`

That is the tightest whole-file transform split the current lift and annotated
raw support without inventing a stronger source-level type system.

## Preserved Constraint

This pass does not claim:

- what exact object type `eval` returns,
- what exact type `makeList().n2` is,
- or what exact encryption gate controls the visible `decrypt(netDone)` path.

Those would be stronger semantic claims than the exported surface supports.
