import fs from 'fs';

const bin = fs.readFileSync('Lscr-102/root-artifacts/Lscr-102.bin');

// Block 1 (constantsTable): file offset 0x200, codeLen=456
// Table starts at 0x200 + 20 (header) + 456 (instructions) = 0x3DC
const tableStart = 0x03dc;

let pos = tableStart;
const totalEntries = bin.readUInt32LE(pos); pos += 4;
console.log(`Entry count: ${totalEntries}`);
console.log('');

for (let i = 0; i < totalEntries; i++) {
  const idx  = bin.readUInt32LE(pos); pos += 4;
  const kind = bin.readUInt32LE(pos); pos += 4;

  if (kind === 1) {
    // int32 little-endian
    const value = bin.readInt32LE(pos);
    console.log(`  [${idx}] int32 = ${value}  (bytes: ${bin.slice(pos,pos+4).toString('hex')})`);
    pos += 4;
  } else if (kind === 5) {
    // also int32 (different signedness or subtype)
    const value = bin.readInt32LE(pos);
    console.log(`  [${idx}] int32(k5) = ${value}  (bytes: ${bin.slice(pos,pos+4).toString('hex')})`);
    pos += 4;
  } else if (kind === 2) {
    // float64 little-endian (IEEE 754 double)
    const valueLE = bin.readDoubleLE(pos);
    const bytes   = bin.slice(pos, pos + 8).toString('hex');
    console.log(`  [${idx}] float64 = ${valueLE}  (bytes: ${bytes})`);
    pos += 8;
  } else if (kind === 4) {
    // UTF-16LE string: 4-byte char count, then chars*2 bytes, padded to 4-byte boundary
    const charLen  = bin.readUInt32LE(pos); pos += 4;
    const strBytes = bin.slice(pos, pos + charLen * 2);
    const value    = strBytes.toString('utf16le');
    console.log(`  [${idx}] string = "${value}"`);
    pos += charLen * 2;
    // pad to 4-byte boundary
    if (pos % 4 !== 0) pos += 4 - (pos % 4);
  } else {
    console.log(`  [${idx}] UNKNOWN kind=${kind} at pos=0x${pos.toString(16)}`);
    console.log(`         next bytes: ${bin.slice(pos, pos+16).toString('hex')}`);
    break;
  }
}
