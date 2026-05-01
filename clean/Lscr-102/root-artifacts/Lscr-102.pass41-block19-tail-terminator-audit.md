## Lscr-102 pass41: block 19 tail terminator audit

Handler:
- `RaceEngine_buildMd5Source`

Source files:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass23-strict-carry-tracer.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass26-block19-strict-packet-audit.md`

Focus window:
- block `43264`
- strict tail packet `0x0649..0x0663`

Raw bytes:

```text
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

Strict block surface:

```text
, = caluMD5
?
id_0 = ,.getStringMD5()(id_0)
?
// [0x064f] op_05
id_0
```

Prior strict-carry rule:
- `pass23-strict-carry-tracer.md` and `pass26-block19-strict-packet-audit.md` already narrowed the safe strict carry to:
  - head `, = caluMD5`
  - compressed tail `id_0 = ,.getStringMD5()(id_0)`
  - trailing `id_0` only

Decision:
- pull back standalone `? -- 0x064C`
- pull back standalone `? -- 0x065D`
- keep `, = caluMD5 -- 0x0649`
- keep `id_0 = ,.getStringMD5()(id_0) -- 0x0650`
- keep trailing `id_0 -- 0x0663`

Why:
- `0x064C` is only raw `op_51`, the packet terminator immediately after the head store at `0x0649`
- `0x065D` is also raw `op_51`, not a named row with independent block-local ownership
- removing those two placeholder rows aligns the deliverable with the older strict-carry stop-map instead of widening it

What remains unresolved:
- the trailing `id_0 -- 0x0663` still stays because the strict block surfaces preserve it, even though the raw tail closes through `op_05`
- broader faithful readings past `0x065A` remain corroboration only and are not promoted
