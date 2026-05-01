# Lscr-107 Pass 14: Repeated Store-Chain Templates

Purpose:
- Extract repeated raw store-chain families for `startMovie` block `152` and embedded block `4716`.
- Distinguish exact repeated templates from singleton chains without changing readable body text.

Source class:
- Raw bytes: `Lscr-107.bin`
- Corroboration only: existing pass-block tables and readable deliverables

## block 152 direct receiver-to-missing-id store

Template shape: `3b 00 02 3d 00 0b 36 00 nn 51`

| Instance | Block-relative window | File window | Raw bytes |
|---|---|---|---|
| `_global.lastAction = id_11` | `0x0048..0x0053` | `0x03B8..0x03C3` | `3b 00 02 3d 00 0b 36 00 0a 51 3b 00` |
| `_global.socketBuffer = id_11` | `0x00B5..0x00BC` | `0x0425..0x042C` | `00 1b 39 3a 00 00 51 3b` |
| `_global.facebookToken = id_11` | `0x00EA..0x00F1` | `0x045A..0x0461` | `51 3b 00 02 3d 00 0b 36` |
| `_global.facebookID = id_11` | `0x00F4..0x00FB` | `0x0464..0x046B` | `51 3b 00 02 3d 00 0b 36` |
| `_global.facebookSessionSecret = id_11` | `0x00FE..0x0105` | `0x046E..0x0475` | `51 00 24 00 00 00 00 00` |
| `_global.facebookSessionKey = id_11` | `0x0108..0x010F` | `0x0478..0x047F` | `04 00 00 00 10 00 00 00` |

## block 152 direct receiver-to-literal-or-string-id store

Template shape: `3b 00 02 3d 00 nn 36 00 mm 51`

| Instance | Block-relative window | File window | Raw bytes |
|---|---|---|---|
| `mainURL` | `0x0065..0x006C` | `0x03D5..0x03DC` | `3d 00 0f 1b 36 00 0e 51` |
| `cacheURL` | `0x008D..0x0094` | `0x03FD..0x0404` | `51 3b 00 02 3d 00 16 36` |
| `socketURL` | `0x0097..0x009E` | `0x0407..0x040E` | `51 3b 00 02 3d 00 18 36` |
| `uggURL` | `0x00A1..0x00A8` | `0x0411..0x0418` | `51 3b 00 02 3d 00 0b 36` |
| `exeName` | `0x00AB..0x00B2` | `0x041B..0x0422` | `51 3b 00 02 43 36 00 1a` |

## block 152 receiver-plus-Array-constructor

Template shape: `3b 00 02 3b 00 08 39 23 00 00 36 00 nn 51`

| Instance | Block-relative window | File window | Raw bytes |
|---|---|---|---|
| `gNetID = Array()` | `0x003F..0x004A` | `0x03AF..0x03BA` | `08 39 23 00 00 36 00 09 51 3b 00 02` |
| `fileNetID = Array()` | `0x004B..0x0056` | `0x03BB..0x03C6` | `3d 00 0b 36 00 0a 51 3b 00 02 3d 00` |

## block 4716 direct receiver-to-missing-id store

Template shape: `3b 00 00 3d 00 02 36 00 nn 51`

| Instance | Block-relative window | File window | Raw bytes |
|---|---|---|---|
| `_global.facebookToken = id_2` | `0x0006..0x000F` | `0x154A..0x1553` | `36 00 01 51 3b 00 00 3d 00 02` |
| `_global.facebookID = id_2` | `0x0010..0x0019` | `0x1554..0x155D` | `36 00 03 51 3b 00 00 3d 00 02` |
| `_global.facebookSessionSecret = id_2` | `0x001A..0x0023` | `0x155E..0x1567` | `36 00 04 51 3b 00 00 3d 00 02` |
| `_global.facebookSessionKey = id_2` | `0x0024..0x002D` | `0x1568..0x1571` | `36 00 05 51 06 00 00 00 00 00` |

Singleton chains kept separate:
- `aid = VOID`
- `isEnc = 1`
- `isConnected = 0`
- `_global.mainURL` reference forms (`gameURL`, `avatarMainURL`), which share only a prefix and then diverge
