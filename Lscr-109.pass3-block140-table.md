## Lscr-109 Pass 3

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Scope:
- This pass documents embedded block `140`, the block referenced by the visible
  `sockConnTimeout` dispatcher stub in `Lscr-109.json`.
- No opcode semantics are assigned beyond exact byte preservation.

Dispatch anchor from `Lscr-109.json`:
- handler name: `sockConnTimeout`
- `dispatchBlockOffset = 140`
- `dispatchBlockLength = 1288`
- visible handler bytecode:
  - `[0] pushcons 1`
  - `[2] pushcons 3`
  - `[4] unk26`

Marker alignment:
- The block begins at file offset `548` (`408 + 140`).
- The first four bytes at that file offset are:

```text
FF FF 00 00
```

- The hidden-block marker begins four bytes later, at file offset `552`:

```text
03 00 AD DE 9B 00 00 00 00 00 00 00 96 00 00 00
```

Decoded header words:
- marker: `03 00 AD DE`
- `headerWord0 = 155`
- `headerWord1 = 0`
- `headerWord2 = 150`

First instruction-region bytes after the 20-byte header:

```text
3D 00 01 58 C3 50 3B 00 02 39 3D 00 03 3A 00 01
3F 23 00 04 51 3B 00 04 3B 00 06 39 3D 00 07 23
00 01 36 00 05 51 3B 00 04 35 00 05 35 00 08 39
3B 00 02 39 3D 00 09 3A 00 01 3B 00 0A 39 3D 00
```

Recovered `kind = 4` UTF-16LE string records from this block payload:
- payload offset `176`: id `0`, `timeout`
- payload offset `204`: id `1`, `sockConnTO`
- payload offset `236`: id `2`, `symbol`
- payload offset `260`: id `3`, `sockConnTimeout`
- payload offset `304`: id `4`, `_global`
- payload offset `332`: id `5`, `gMultiuserInstance`
- payload offset `380`: id `6`, `xtra`
- payload offset `400`: id `7`, `Multiuser`
- payload offset `432`: id `8`, `setNetMessageHandler`
- payload offset `484`: id `9`, `socketMessageHandler`
- payload offset `536`: id `10`, `script`
- payload offset `560`: id `11`, `Connection Script`
- payload offset `608`: id `12`, `connectToNetServer`
- payload offset `656`: id `13`, `Rick`
- payload offset `676`: id `14`, `MySecret`
- payload offset `704`: id `15`, `socketURL`
- payload offset `736`: id `16`, `CieServer`
- payload offset `768`: id `17`, `sprite`
- payload offset `792`: id `18`, `flashSP`
- payload offset `820`: id `19`, `showConnectionErrorCB`
- payload offset `876`: id `20`, `Connection Error`
- payload offset `1088`: id `22`, `)`

Recovered UTF-16LE message fragment preceding id `22`:

```text
Connection could not be established. Please check your firewall. (Error: 004-
```

This text was recovered from the payload region immediately before the id `22`
record. The trailing portion after `004-` is not resolved into a clean UTF-16LE
string by this pass.

Evidence-only observations:
- This block contains both the timeout handler name `sockConnTimeout` and the
  callback name `socketMessageHandler`.
- The same block also contains `setNetMessageHandler`, `connectToNetServer`,
  `socketURL`, `CieServer`, `showConnectionErrorCB`, and `Connection Error`.
- The strings `Rick` and `MySecret` are present as distinct UTF-16LE records in
  this block.

Unresolved:
- The role of the leading four bytes `FF FF 00 00` before the marker is not
  resolved by this pass.
- id `21` was not recovered as a clean `kind = 4` UTF-16LE record.
- The exact continuation of the error text after `004-` is not resolved here.
- Opcodes such as `3D`, `58`, `50`, `3B`, `39`, `3A`, `3F`, `51`, `23`, `36`,
  and `35` remain unresolved in this pass.
