# Lscr-93 Pass 23 Normalized Callback Signature Surface

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`

Scope:
- This pass groups the visible `sprite(flashSP).<callback>(...)` sites by
  normalized top-level argument tuple.
- Normalization here is narrow:
  - `checkedForOneClient.getAProp("x")` becomes `x`
  - visible wrappers such as `escape(...)`, queue selectors, string literals,
    `TRUE`, `VOID`, `id_195`, and `netError.!ATTRIBUTES.*` stay visible
- This pass is only a tuple-surface pass. It does not try to distinguish raw
  property-key tokens from literal tokens when the normalized text is the same.

## Whole-File Count

Across the `206` visible `sprite(flashSP)` callback call sites, the current
lift exposes exactly `51` distinct normalized top-level argument signatures.

Distinct signature count by arity:

- arity `1` -> `4` distinct signatures
- arity `2` -> `27` distinct signatures
- arity `3` -> `13` distinct signatures
- arity `4` -> `4` distinct signatures
- arity `5` -> `1` distinct signature
- arity `6` -> `1` distinct signature
- arity `7` -> `1` distinct signature

So the callback surface is not only front-loaded by arity, it is also
front-loaded by repeated tuple shape.

## Unary Signature Surface

Only `4` distinct normalized unary signatures appear in the entire file:

- `s` -> `72` call sites
- `d` -> `37` call sites
- `c` -> `1` call site
- `d1` -> `1` call site

The two dominant unary signatures therefore account for `109 / 111` unary
callback sites.

Visible singleton oddballs:

- `getNominateCountCB(checkedForOneClient.getAProp("c")) -- 0x264F`
- `engineBuyPartCB(checkedForOneClient.getAProp("d1")) -- 0x1684`

This is the strongest whole-file proof that unary callback fanout is almost
entirely a two-signature surface: `s` and `d`.

## Binary Signature Surface

Binary callbacks expose `27` distinct normalized signatures, but only a few
repeat heavily.

Repeated binary signatures:

- `s | d` -> `28`
- `TRUE | d` -> `6`
- `s | b` -> `6`
- `d | d1` -> `3`
- `s | m` -> `3`
- `s | e` -> `3`
- `TRUE | b` -> `2`
- `c | d` -> `2`
- `e | d` -> `2`
- `s | id_195` -> `2`
- `s | escape(d)` -> `2`

Everything else in the binary bucket is a singleton visible signature.

That means the binary surface has a broad long tail, but it still clusters
hard around:

- `s | d`
- `TRUE | d`
- `s | b`

## Ternary Signature Surface

The ternary bucket has `13` distinct signatures, and every one is a singleton:

- `_global.gNetID[_global][VOID] | s | d`
- `c | d1 | d`
- `c | s | b`
- `e | d1 | d`
- `e | TRUE | b`
- `m | d1 | d`
- `m | TRUE | b`
- `oid | n | t`
- `s | b | d`
- `s | b | i`
- `s | b | id_195`
- `s | id_195 | d`
- `TRUE | d | b`

So the whole-file ternary surface is structurally sparse. No normalized
ternary tuple repeats.

## Four-Arg And Higher Signatures

The arity `4+` surface is completely singleton at the normalized signature
level.

Arity `4`:

- `s | d | at | am`
- `s | m | i | t`
- `s | VOID | VOID | i`
- `TRUE | p | t | i`

Arity `5`:

- `s | h | m | p | d`

Arity `6`:

- `s | m | p | ma | va | d`

Arity `7`:

- `s | b | netError.!ATTRIBUTES.e | netError.!ATTRIBUTES.u | netError.!ATTRIBUTES.ad | netError.!ATTRIBUTES.sl | netError.!ATTRIBUTES.n`

This makes the high-arity callback surface maximally non-redundant under the
current normalization.

## String And Queue Singleton Surface

The normalized signature list also keeps the visible string-heavy and
queue-heavy outliers distinct:

- `_global.gNetID[_global][VOID] | s | d` -> `genericWebCB(...) -- 0x2C0D`
- `"Protocol Error" | ... " (Error: 010)"` -> `showConnectionErrorCB(...)`
- `"Protocol Error" | ... " (Error: 001)"` -> `showConnectionErrorCB(...)`
- `"Protocol Error" | ... " (Error: 002)"` -> `showConnectionErrorCB(...)`
- `"Session Timed Out" | ... _global.lastAction` -> `showConnectionErrorCB(...)`

These do not merge with the ordinary property-driven tuple families.

## Boundary

This pass intentionally collapses raw property access syntax into short tokens
like `s`, `d`, `b`, `d1`, `c`, `m`, `e`, `i`, `p`, `t`.

That means this pass is good for repeated visible tuple shape, but not for raw
source-type distinction. For example:

- a normalized token such as `c` may come from `getAProp("c")`
- a visible token such as `c` may also appear as a raw literal in other lines

The next raw-source pass has to keep that distinction explicit.
