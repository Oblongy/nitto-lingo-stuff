# ScummVM Lingo V4 Opcode Reference

Source: ScummVM `engines/director/lingo/lingo-bytecode.cpp` and `lingo-code.cpp`
Retrieved: 2026-05-01

This is the ground-truth opcode table for Director V4 bytecode (the format used
by LSCR chunks). The hidden-VM opcodes in these scripts are a superset of this
table — opcodes not listed here are extensions.

---

## Encoding convention

Opcodes `0x01..0x3F` take no argument (1 byte total).
Opcodes `0x41..0x7F` take a **1-byte** argument (2 bytes total).
Opcodes `0x81..0xBF` take a **2-byte big-endian** argument (3 bytes total).

The wide variants (`0x81+`) are the same operation as the narrow variants
(`0x41+`) with a larger argument. `0x80` is **not** a standard opcode —
anything in your disasm at `0x80` is a hidden-VM extension.

---

## No-argument opcodes (0x01–0x3F)

| Opcode | ScummVM name | Stack effect | Lingo equivalent |
|--------|-------------|--------------|-----------------|
| `0x01` | `c_procret` | clears frame | `exit` / return from handler |
| `0x02` | `c_procret` | clears frame | (same — duplicate entry) |
| `0x03` | `cb_zeropush` | push 0 | push integer `0` |
| `0x04` | `c_mul` | pop d2, pop d1, push d1*d2 | `*` |
| `0x05` | `c_add` | pop d2, pop d1, push d1+d2 | `+` |
| `0x06` | `c_sub` | pop d2, pop d1, push d1-d2 | `-` |
| `0x07` | `c_div` | pop d2, pop d1, push d1/d2 | `/` |
| `0x08` | `c_mod` | pop d2, pop d1, push d1 mod d2 | `mod` |
| `0x09` | `c_negate` | pop d, push -d | unary `-` |
| `0x0A` | `c_ampersand` | pop d2, pop d1, push d1&d2 | `&` (concat no space) |
| `0x0B` | `c_concat` | pop d2, pop d1, push d1&&d2 | `&&` (concat with space) |
| `0x0C` | `c_lt` | pop d2, pop d1, push d1<d2 | `<` |
| `0x0D` | `c_le` | pop d2, pop d1, push d1<=d2 | `<=` |
| `0x0E` | `c_neq` | pop d2, pop d1, push d1<>d2 | `<>` |
| `0x0F` | `c_eq` | pop d2, pop d1, push d1=d2 | `=` |
| `0x10` | `c_gt` | pop d2, pop d1, push d1>d2 | `>` |
| `0x11` | `c_ge` | pop d2, pop d1, push d1>=d2 | `>=` |
| `0x12` | `c_and` | pop d2, pop d1, push d1&&d2 | `and` |
| `0x13` | `c_or` | pop d2, pop d1, push d1\|\|d2 | `or` |
| `0x14` | `c_not` | pop d, push !d | `not` |
| `0x15` | `c_contains` | pop d2, pop d1, push d1 contains d2 | `contains` |
| `0x16` | `c_starts` | pop d2, pop d1, push d1 starts d2 | `starts` |
| `0x17` | `c_of` | pops 8 chunk bounds + src, pushes chunk value | chunk expression eval |
| `0x18` | `cb_hilite` | pops field+chunk | `hilite` |
| `0x19` | `c_intersects` | pop d2, pop d1, push bool | `intersects` |
| `0x1A` | `c_within` | pop d2, pop d1, push bool | `within` |
| `0x1B` | `c_field` | pop member id, push field value | `field` reference |
| `0x1C` | `c_tell` | pop window, push current window | `tell <window>` begin |
| `0x1D` | `c_telldone` | pop saved window, restore | end of `tell` block |
| `0x1E` | `cb_list` | pops ARGC, pops N items, pushes list | `[item, item, ...]` |
| `0x1F` | `cb_proplist` | pops ARGC, pops N pairs, pushes proplist | `[prop: val, ...]` |

---

## 1-byte argument opcodes (0x41–0x66) — narrow variants

| Opcode | ScummVM name | Arg | Stack effect | Lingo equivalent |
|--------|-------------|-----|--------------|-----------------|
| `0x41` | `c_intpush` | int8 | push signed byte as int | push literal int |
| `0x42` | `c_argcnoretpush` | uint8 | push ARGCNORET(n) | arg count for void call |
| `0x43` | `c_argcpush` | uint8 | push ARGC(n) | arg count for value call |
| `0x44` | *(push constant)* | uint8 | push constant[arg] | push literal from const table |
| `0x45` | `c_namepush` | uint8 → name | push symbol | push name as symbol |
| `0x46` | `cb_varrefpush` | uint8 → name | push SYMBOL(name) | push variable reference |
| `0x48` | `cb_globalpush` | uint8 → name | push global value | `_global.name` read |
| `0x49` | `cb_globalpush` | uint8 → name | push global value | (same) |
| `0x4A` | `cb_thepush` | uint8 → name | push property value | `me.name` read |
| `0x4B` | `cb_varpush` | uint8 → name (arg) | push arg value | read function argument |
| `0x4C` | `cb_varpush` | uint8 → name (local) | push local value | read local variable |
| `0x4E` | `cb_globalassign` | uint8 → name | pop → global | `_global.name = value` |
| `0x4F` | `cb_globalassign` | uint8 → name | pop → global | (same) |
| `0x50` | `cb_theassign` | uint8 → name | pop → property | `me.name = value` |
| `0x51` | `cb_varassign` | uint8 → name (arg) | pop → arg | assign function argument |
| `0x52` | `cb_varassign` | uint8 → name (local) | pop → local | assign local variable |
| `0x53` | `c_jump` | int8 | pc += arg - 2 | unconditional jump (forward) |
| `0x54` | `c_jump` | int8 (negated) | pc -= \|arg\| | unconditional jump (backward) |
| `0x55` | `c_jumpifz` | int8 | pop; if 0: pc += arg-2 | `if not condition then jump` |
| `0x56` | `cb_localcall` | uint8 | pop ARGC, call local fn[arg] | call embedded block by index |
| `0x57` | `cb_call` | uint8 → name | pop ARGC, call name | call named handler |
| `0x58` | `cb_objectcall` | uint8 | pop varId, pop ARGC, call method | object method call |
| `0x59` | `cb_v4assign` | uint8 | pop varId, pop value, assign | `put value into var` |
| `0x5A` | `cb_v4assign2` | uint8 | pop varId, pop value, assign chunk | `put value into chunk of var` |
| `0x5B` | `cb_delete` | uint8 | pop varId, delete chunk | `delete chunk of var` |
| `0x5C` | `cb_v4theentitypush` | uint8 | pop firstArg, push entity | `the entity of sprite N` |
| `0x5D` | `cb_v4theentityassign` | uint8 | pop firstArg, pop value, set entity | `set the entity of sprite N` |
| `0x5F` | `cb_thepush2` | uint8 → name | push movie-level property | `the movieName` etc. |
| `0x60` | `cb_theassign2` | uint8 → name | pop → movie-level property | `set the movieName` etc. |
| `0x61` | `cb_objectfieldpush` | uint8 → name | pop obj, push obj.name | `obj.property` read |
| `0x62` | `cb_objectfieldassign` | uint8 → name | pop obj, pop val, obj.name=val | `obj.property = value` |
| `0x63` | `cb_call` | uint8 → name | (tell-context call) | call within `tell` block |
| `0x64` | `c_stackpeek` | uint8 | push copy of stack[top-arg] | non-destructive stack read |
| `0x65` | `c_stackdrop` | uint8 | pop N items | discard N stack values |
| `0x66` | `cb_v4theentitynamepush` | uint8 → name | push named entity | `the systemDate` etc. |

---

## 2-byte argument opcodes (0x81–0xA6) — wide variants

Same operations as the narrow variants above, with a 2-byte big-endian argument
instead of 1-byte. Map: wide opcode = narrow opcode + 0x40.

| Wide | Narrow | Operation |
|------|--------|-----------|
| `0x81` | `0x41` | `c_intpush` (int16) |
| `0x82` | `0x42` | `c_argcnoretpush` (uint16) |
| `0x83` | `0x43` | `c_argcpush` (uint16) |
| `0x84` | `0x44` | push constant (uint16 index) |
| `0x85` | `0x45` | `c_namepush` |
| `0x86` | `0x46` | `cb_varrefpush` |
| `0x88` | `0x48` | `cb_globalpush` |
| `0x89` | `0x49` | `cb_globalpush` |
| `0x8A` | `0x4A` | `cb_thepush` |
| `0x8B` | `0x4B` | `cb_varpush` (arg) |
| `0x8C` | `0x4C` | `cb_varpush` (local) |
| `0x8E` | `0x4E` | `cb_globalassign` |
| `0x8F` | `0x4F` | `cb_globalassign` |
| `0x90` | `0x50` | `cb_theassign` |
| `0x91` | `0x51` | `cb_varassign` (arg) |
| `0x92` | `0x52` | `cb_varassign` (local) |
| `0x93` | `0x53` | `c_jump` (int16, forward) |
| `0x94` | `0x54` | `c_jump` (int16, backward) |
| `0x95` | `0x55` | `c_jumpifz` (int16) |
| `0x96` | `0x56` | `cb_localcall` (uint16) |
| `0x97` | `0x57` | `cb_call` |
| `0x98` | `0x58` | `cb_objectcall` |
| `0x99` | `0x59` | `cb_v4assign` |
| `0x9A` | `0x5A` | `cb_v4assign2` |
| `0x9C` | `0x5C` | `cb_v4theentitypush` |
| `0x9D` | `0x5D` | `cb_v4theentityassign` |
| `0x9F` | `0x5F` | `cb_thepush2` |
| `0xA0` | `0x60` | `cb_theassign2` |
| `0xA1` | `0x61` | `cb_objectfieldpush` |
| `0xA2` | `0x62` | `cb_objectfieldassign` |
| `0xA3` | `0x63` | `cb_call` (tell-context) |
| `0xA4` | `0x64` | `c_stackpeek` |
| `0xA5` | `0x65` | `c_stackdrop` |
| `0xA6` | `0x66` | `cb_v4theentitynamepush` |

---

## Key semantics for pass work

### Branch polarity — confirmed

`c_jumpifz` (0x55 / 0x95): pops the top of stack, jumps **if the value is zero
(false)**. The condition on the stack is the result of the preceding comparison.

```
-- bytecode pattern:
--   <push a>
--   <push b>
--   0x0F  (c_eq)       -- pushes 1 if equal, 0 if not
--   0x55 offset        -- jumps if result == 0, i.e. jumps if NOT equal
-- Lingo equivalent:
if a = b then
  -- fall-through (no jump)
else
  -- jump target
end if
```

### Argument count protocol

Before any call, push an ARGC or ARGCNORET datum:
- `c_argcpush` (0x43/0x83): call expects a **return value**
- `c_argcnoretpush` (0x42/0x82): call is a **void command** (no return value)

The called handler pops this datum to know how many args to consume.

### Variable access (0x4B/0x4C/0x51/0x52)

The `cb_varpush` / `cb_varassign` opcodes take a byte argument that is a
**byte offset into the function's arg/local name table**, not a direct index.
For D4: stride = 6 bytes per entry, so arg index = byte_offset / 6.
For D5+: stride = 8 bytes per entry.

### cb_v4assign (0x59) argument encoding

The byte argument encodes two nibbles:
- High nibble (bits 7-4): operation — `1` = put into, `2` = put after, `3` = put before
- Low nibble (bits 3-0): variable type — `1/2` = global, `3` = property, `4` = arg, `5` = local, `6` = field

### Stack order for binary operators

All binary ops pop **d2 first, then d1**, and compute `d1 OP d2`:
```
push a    -- d1
push b    -- d2
c_sub     -- pops b (d2), pops a (d1), pushes a - b
```

### c_stackpeek / c_stackdrop (0x64/0x65)

`c_stackpeek N`: pushes a **copy** of the value N positions from the top
(0 = top). Non-destructive.

`c_stackdrop N`: pops and discards N values from the top.

---

## Opcodes not in the standard table (hidden-VM extensions)

These appear in the LSCR disasm but have no entry in the ScummVM V4 table.
They are specific to this game's hidden VM layer.

| Opcode | Observed in disasm | Current hypothesis |
|--------|-------------------|-------------------|
| `0x00` | block 0 | no-op / padding |
| `0x3B` | many blocks | push from data table by index (wide: 2-byte arg) |
| `0x35` | many blocks | push local/property by table index |
| `0x36` | many blocks | assign local/property by table index |
| `0x39` | block 0 | unknown — appears before object construction |
| `0x3A` | block 8 | unknown |
| `0x3C` | block 1 | unknown |
| `0x3E` | block 1 | unknown |
| `0x41` | block 8 | (overlaps standard — context-dependent) |
| `0x7D` | block 0 | push special/sentinel value |
| `0x80` | many blocks | wide form of hidden-VM op (not standard `0x80`) |
| `0x83` | many blocks | confirmed: `c_argcpush` (wide, standard) |

The `0x3B` / `0x35` / `0x36` cluster is the most important unresolved group.
Given the data table structure (id → kind → value records), `0x3B` likely
pushes a value from the block's data table by id, and `0x35`/`0x36` are
local variable push/assign using the same id space.

---

## Sources

- [ScummVM lingo-bytecode.cpp](https://raw.githubusercontent.com/scummvm/scummvm/master/engines/director/lingo/lingo-bytecode.cpp)
- [ScummVM lingo-code.cpp](https://raw.githubusercontent.com/scummvm/scummvm/master/engines/director/lingo/lingo-code.cpp)
- [Earthquake Project format notes](https://github.com/Earthquake-Project/Format-Documentation/blob/master/structure/scripting/FormatNotes_Scripts.txt)
