# Lscr-93 Pass 28 Bridge-State Lifecycle

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.block1.annotated-disasm.md`

Scope:
- This pass isolates the small set of visible state carriers that bridge the
  top poll loop into the later callback/helper surface.
- It focuses on:
  - `checkedForOneClient`
  - `checkProcessResult`
  - `netDone`
  - `netError`
  - `lastAction`
  - `guid`
  - `_global`
  - `cursor`

## `checkedForOneClient`

Visible write lifecycle:

- `checkedForOneClient = TRUE -- 0x0033`
- `checkedForOneClient = (("propList(" & netDone) & ")") -- 0x0101`
- `checkedForOneClient = (("propList(" & netDone) & ")") -- 0x0180`

Visible read surface is much broader, but the write surface is only these
three sites.

That means the whole-file visible lifecycle is:

1. early sentinel/value seed as `TRUE`
2. first `propList(...)` string build from `netDone`
3. second `propList(...)` string build after the visible `decrypt(netDone)`
   step

This is the tightest direct-write lifecycle for `checkedForOneClient` the
current export supports.

## `netDone`

Visible write lifecycle:

- `netDone = netTextResult(_global.gNetID[_global]) -- 0x00EA`
- `netDone = decrypt(netDone) -- 0x012B`

So `netDone` is only visibly written twice:

1. raw queue text extraction from `gNetID`
2. one visible transform pass through `decrypt(...)`

After that, it feeds the repeated `propList(...)` string-build assignments to
`checkedForOneClient`.

## `checkProcessResult`

Visible write lifecycle:

- `checkProcessResult = new xtra("xmlparser") -- 0x04AD`
- `checkProcessResult = VOID -- 0x04E1`
- `checkProcessResult = new xtra("xmlparser") -- 0x1113`
- `checkProcessResult = VOID -- 0x1143`

So the visible lifecycle is exactly two constructor/reset pairs.

Each constructor pair then feeds one parse branch:

- first branch:
  - `parseString(getAProp("d")) -- 0x04C8`
  - `fetchCacheXMLDone(makeList().n2) -- 0x04DF`

- second branch:
  - `parseString(getAProp("d")) -- 0x112E`
  - `netError = makeList().n2 -- 0x113E`

This is a very tight bridge-state surface. `checkProcessResult` is not a
general-purpose long-lived variable in the current lift; it is a short-lived
two-branch parser holder.

## `netError`

Visible direct write surface:

- `netError = checkProcessResult.makeList().n2 -- 0x113E`

That is the only visible direct write to `netError`.

After that, the file exposes `netError` through only a few later surfaces:

- `garageDynoBuyCB(... netError.!ATTRIBUTES.* ...) -- 0x119F`
- queue error gates such as `netError(_global.fileNetID[_global][netDone])`
- late connection error build at `0x2C78`

So the visible lifecycle is:

1. one parser-derived assignment
2. later attribute/error probing

## `lastAction`

Visible write surface:

- `lastAction = _global.gNetID[_global][VOID] -- 0x2C9E`

Visible read surface:

- `showConnectionErrorCB("Session Timed Out", ... _global.lastAction) -- 0x021C`

That creates a real whole-file contradiction in lift order:

- the read is visible very early
- the write is visible very late

This pass does not resolve whether that is:

- loop-order behavior across frames,
- stale retained state,
- or a lift-order artifact

It only keeps the visible read/write split explicit.

## `guid`

Visible writes:

- `guid = checkedForOneClient.getAProp("guid") -- 0x0546`
- `guid = checkedForOneClient.getAProp("sk") -- 0x20DA`

This is one of the strongest explicit duplicate-target contradictions in the
whole file.

The export shows one target name and two different visible property sources:

- `"guid"`
- `"sk"`

This pass leaves that contradiction unresolved on purpose.

## `_global`

Visible direct writes:

- `_global = VOID -- 0x0084`
- `_global = VOID -- 0x2CC0`

And there are no visible dotted `_global.* = ...` assignment lines in the
current lift.

So the visible `_global` write lifecycle is extremely narrow:

- two bare resets
- no explicit dotted field writes

That is an important whole-file constraint on the current mechanical surface.

## `cursor`

Visible late write lifecycle:

- `cursor = agreetoterms -- 0x2E8E`
- `cursor = TRUE -- 0x2EBE`
- `cursor = -1 -- 0x2ED2`

This is a tiny late UI-state cluster, separate from the earlier bridge/parser
state carriers.

## Tightest Whole-File Split

The visible bridge-state lifecycle breaks into three groups:

- response bridge carriers:
  - `checkedForOneClient`
  - `netDone`
  - `checkProcessResult`
  - `netError`

- queue/history carrier:
  - `lastAction`

- late/local state oddballs:
  - `guid`
  - `_global`
  - `cursor`

That is tighter than treating all assignments as one flat state surface. Only a
very small subset of targets actually participate in the response-to-callback
bridge.

## Preserved Constraint

This pass does not rename or normalize any of these targets beyond the exact
visible lift names, and it does not resolve the visible contradictions around:

- `guid` receiving both `"guid"` and `"sk"`
- `lastAction` being read earlier than it is visibly written
- the meaning of bare `_global = VOID`

Those contradictions remain exported facts, not defects to silently smooth
over.
