## Lscr-109 Block 0

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\10-connection-script.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `0`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `0`, length `140`.
- File offset `408`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
00 00 24 70
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 14 00 00 00 0f 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 01 7d 00 02 7d 00 03 7d 00 04 00 00 00 00 00 05 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00 08 00 00 00 46 75 6e 63 74 69 6f 6e 01 00 00 00 00 00 00 00 0d 00 00 00 63 00 6f 00 6e 00 6e 00
```

Recovered structured records (`kind = 4` UTF-16LE):
- no clean `kind = 4` inventory was recovered in this pass

Recovered mixed string-shaped records (`kind = 0/1`):
- payload offset `40`: id `0`, kind `1`, encoding `latin1`, char len `8`, byte span `52..59`, `Function`
- payload offset `60`: id `1`, kind `0`, encoding `utf16le`, char len `13`, byte span `72..97`, `connectSocket`

Rejected mixed string-shaped candidates:
- payload offset `32`, id `5`, kind `0`, len `0`, reason: non-positive length
- payload offset `96`, id `116`, kind `0`, len `0`, reason: non-positive length
- payload offset `108`, id `1`, kind `0`, len `2`, byte span `120..123`, reason: decoded UTF-16LE text contains non-printable or non-ASCII characters, sample ``

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\10-connection-script.js`
- exported handlers: `connectSocket`, `sockConnTimeout`, `socketMessageHandler`, `executeCall`, `ssm`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

