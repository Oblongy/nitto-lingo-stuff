## Lscr-105 Block 0

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-105.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-105.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\13-socket-server-to-client.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `0`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `0`, length `112`.
- File offset `168`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
00 00 52 f4
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 04 00 00 00 03 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
01 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00 08 00 00 00 46 75 6e 63 74 69 6f 6e 01 00 00 00 00 00 00 00 0a 00 00 00 70 00 72 00 6f 00 63 00 53 00 6f 00 63 00 6b 00 65 00 74 00 01 00 00 00
```

Recovered `kind = 4` UTF-16LE string records:
- no clean `kind = 4` inventory was recovered in this pass

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\13-socket-server-to-client.js`
- exported handlers: `procSocket`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

