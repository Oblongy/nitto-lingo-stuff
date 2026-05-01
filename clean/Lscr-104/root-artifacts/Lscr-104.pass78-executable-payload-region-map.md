# Lscr-104 Pass 78: Executable-versus-Payload Region Map

Purpose:
- Separate executable bytes from payload/name-record bytes automatically for the two late helper blocks.
- Keep the cross-block `returnValue` spill explicit as a region boundary rather than a prose-only note.

Source class:
- Raw bytes: `Lscr-104.bin`
- Corroboration only: existing pass-block tables and readable deliverables

## Block 25976

### marker `30588..30603`
```text
777C: 03 00 AD DE 0B 00 00 00 00 00 00 00 96 00 00 00
```

### code `30604..30614`
```text
778C: 3B 00 00 35 00 01 39 3A 00 00 51
```

### alignment `30615..30615`
```text
7797: 00
```

### payload count dword `30616..30619`
```text
7798: 02 00 00 00
```

### first name-record header `30620..30631`
```text
779C: 00 00 00 00 04 00 00 00 07 00 00 00
```

### first UTF-16LE _player bytes `30632..30645`
```text
77A8: 5F 00 70 00 6C 00 61 00 79 00 65 00 72 00
```

### UTF-16LE quit bytes `30660..30667`
```text
77C4: 71 00 75 00 69 00 74 00
```

### detached spill fragment `30784..30803`
```text
7840: 02 00 00 00 01 00 00 00 0B 00 00 00 72 65 74 75
7850: 72 6E 56 61
```

### cross-block spill tail `30804..30807`
```text
7854: 6C 75 65 00
```

## Block 26196

### marker `30808..30823`
```text
7858: 03 00 AD DE 28 00 00 00 00 00 00 00 96 00 00 00
```

### code `30824..30863`
```text
7868: 42 57 00 00 51 3B 00 00 35 00 01 35 00 02 39 3B
7878: 00 03 35 00 04 3A 00 01 3C 00 05 13 07 00 08 43
7888: 57 00 00 51 56 00 00 05
```

### payload count dword `30864..30867`
```text
7890: 06 00 00 00
```

### first name-record header `30868..30879`
```text
7894: 00 00 00 00 04 00 00 00 07 00 00 00
```

### first UTF-16LE _player bytes `30880..30893`
```text
78A0: 5F 00 70 00 6C 00 61 00 79 00 65 00 72 00
```
