# Lscr-104 Pass 81: Late-Helper Cross-Block Spill Boundary

Sources:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-104\root-artifacts\Lscr-104.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-104\root-artifacts\Lscr-104.pass80-block26544-split.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-104\root-artifacts\Lscr-104.pass80-block27184-split.md`

Purpose:
- Pin the late-helper payload spill boundary between block `26544` and embedded block `27184`.
- Keep the first 4 bytes of `27184` classified as payload-side spill completion, not fresh executable evidence.

## Block 26544 payload/code handoff

- marker: file `31156..31171`
- code: file `31172..31214`
- payload count: file `31216..31219` = `08 00 00 00`

Those windows match `Lscr-104.pass80-block26544-split.md` and keep the executable region closed before the payload-side name/payload records begin.

## Late payload-side ASCII tail records before 27184

### `processString`
- header start: file `31716`
- header bytes:
```text
7BE4: 02 00 00 00 03 00 00 00 0D 00 00 00
```
- in-block ASCII bytes:
```text
7BF0: 70 72 6F 63 65 73 73 53 74 72 69 6E 67
```

### `processArray`
- header start: file `31744`
- header bytes:
```text
7C00: 02 00 00 00 05 00 00 00 0C 00 00 00
```
- in-block ASCII bytes:
```text
7C0C: 70 72 6F 63 65 73 73 41 72 72 61 79
```

### `numOfProcesses`
- header start: file `31768`
- header bytes:
```text
7C18: 02 00 00 00 07 00 00 00 0E 00 00 00
```
- in-block ASCII prefix:
```text
7C24: 6E 75 6D 4F 66 50 72 6F 63 65 73 73
```
- spill completion in the next block pre-marker:
```text
7C30: 65 73 00 00
```

## Boundary conclusion

- The `numOfProcesses` payload record begins inside block `26544` and its last 2 text bytes `65 73` plus 2 trailing null bytes occupy file `31792..31795`.
- Those same bytes are the nominal 4-byte pre-marker window for block `27184`.
- The first fresh `27184` marker bytes therefore begin at file `31796`:
```text
7C34: 03 00 AD DE 91 00 00 00 00 00 00 00 96 00 00 00
```

Result:
- `27184` pre-marker `65 73 00 00` is payload-side spill completion from block `26544`, not a helper-local executable fragment.
- No new readable Lingo line follows from this boundary by itself; it narrows provenance only.
