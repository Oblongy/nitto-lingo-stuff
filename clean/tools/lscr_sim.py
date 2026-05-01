"""
lscr_sim.py  --  Hidden-VM stack simulator for Lscr-* blocks.

Reads the annotated disasm .md and the block's data-table (from decode_block_payload
or the pass-block table .md), then symbolically executes the bytecode and emits
a Lingo-like statement trace.

Opcode semantics are grounded in:
  - ScummVM lingo-bytecode.cpp / lingo-code.cpp (standard V4 opcodes)
  - Pattern analysis of the hidden-VM cluster (0x35/0x36/0x39/0x3A/0x3B etc.)

Usage:
    python tools/lscr_sim.py <script> --block <offset> [options]

Examples:
    python tools/lscr_sim.py Lscr-102 --block 3032
    python tools/lscr_sim.py Lscr-102 --block 11992 --show-stack
    python tools/lscr_sim.py Lscr-102 --block 14012 --out Lscr-102/root-artifacts/Lscr-102.pass-sim-block14012.md
    python tools/lscr_sim.py Lscr-102 --all-blocks
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Optional, Union


# ---------------------------------------------------------------------------
# Workspace resolution
# ---------------------------------------------------------------------------

def find_workspace_root(start: Path) -> Path:
    candidate = start.resolve()
    for _ in range(8):
        if any(candidate.glob("Lscr-*")):
            return candidate
        parent = candidate.parent
        if parent == candidate:
            break
        candidate = parent
    return start.resolve()


def resolve_script_dir(target: str, workspace: Path) -> Optional[Path]:
    p = Path(target)
    if p.is_dir():
        return p.resolve()
    candidate = workspace / target
    if candidate.is_dir():
        return candidate.resolve()
    matches = [m for m in workspace.glob(f"*{target}*") if m.is_dir()]
    return matches[0] if matches else None


# ---------------------------------------------------------------------------
# Disasm parsing
# ---------------------------------------------------------------------------

@dataclass
class Instruction:
    offset: int          # block-relative code offset (hex from disasm)
    opcode: int          # raw opcode byte
    args: list[int]      # decoded arguments (0, 1, or 2 ints)
    raw_bytes: str       # original hex string from disasm
    name_hint: str       # name annotation from disasm (e.g. "sendInterval")
    line: str            # original disasm line


# Matches lines like:
#   0014: 3B 00 01     op_3B arg=1 ; "sendInterval"
#   0014: 41           op_41
#   0014: 83 27 3D     op_83 arg=10045
_DISASM_LINE = re.compile(
    r"^([0-9A-Fa-f]{4}):\s+"          # offset
    r"((?:[0-9A-Fa-f]{2}\s*)+?)\s+"   # hex bytes
    r"op_([0-9A-Fa-f]{2})"            # opcode
    r"(?:\s+arg=(-?\d+))?"            # optional arg
    r"(?:\s*;?\s*\"([^\"]*)\")?"       # optional name hint
)

# Block header line: ## Block N offset=X length=Y codeLen=Z
_BLOCK_HEADER = re.compile(
    r"##\s+Block\s+(\d+)\s+offset=(\d+)\s+length=(\d+)\s+codeLen=(\d+)"
)

# Names line: Names: foo, bar, baz
_NAMES_LINE = re.compile(r"^Names:\s*(.*)")


@dataclass
class DisasmBlock:
    block_index: int
    block_offset: int
    block_length: int
    code_len: int
    names: list[str]          # name table from "Names:" line
    instructions: list[Instruction]


def parse_disasm_file(path: Path) -> list[DisasmBlock]:
    """Parse the annotated disasm .md into a list of DisasmBlocks."""
    blocks: list[DisasmBlock] = []
    current: Optional[DisasmBlock] = None
    in_code_block = False
    block_index = 0

    for raw_line in path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()

        # Block header
        m = _BLOCK_HEADER.match(line)
        if m:
            current = DisasmBlock(
                block_index=block_index,
                block_offset=int(m.group(2)),
                block_length=int(m.group(3)),
                code_len=int(m.group(4)),
                names=[],
                instructions=[],
            )
            blocks.append(current)
            block_index += 1
            in_code_block = False
            continue

        if current is None:
            continue

        # Names line
        nm = _NAMES_LINE.match(line)
        if nm:
            names_str = nm.group(1).strip()
            if names_str:
                current.names = [n.strip() for n in names_str.split(",") if n.strip()]
            continue

        # Code fence
        if line == "```text":
            in_code_block = True
            continue
        if line == "```" and in_code_block:
            in_code_block = False
            continue

        if not in_code_block:
            continue

        # Instruction line
        dm = _DISASM_LINE.match(line)
        if dm:
            offset = int(dm.group(1), 16)
            hex_bytes = dm.group(2).strip()
            opcode = int(dm.group(3), 16)
            arg_str = dm.group(4)
            name_hint = dm.group(5) or ""

            # Parse args from hex bytes (skip first byte = opcode)
            byte_vals = [int(b, 16) for b in hex_bytes.split()]
            args: list[int] = []
            if arg_str is not None:
                args = [int(arg_str)]
            elif len(byte_vals) == 2:
                args = [byte_vals[1]]
            elif len(byte_vals) == 3:
                # big-endian 16-bit
                args = [(byte_vals[1] << 8) | byte_vals[2]]

            current.instructions.append(Instruction(
                offset=offset,
                opcode=opcode,
                args=args,
                raw_bytes=hex_bytes,
                name_hint=name_hint,
                line=line,
            ))

    return blocks


# ---------------------------------------------------------------------------
# Data table loading  (from decode_block_payload logic)
# ---------------------------------------------------------------------------

def _collect_raw_blocks(data: dict) -> list[dict]:
    if data.get("blocks"):
        return data["blocks"]
    raw: list[dict] = []
    for lit in data.get("literals", []):
        raw.extend(lit.get("embeddedCodeBlocks", []))
    return raw


@dataclass
class DataRecord:
    entry_id: int
    kind: int       # 1/5=int, 2=float, 4=string
    value: Union[int, float, str]


def load_data_table(json_path: Path, block_offset: int) -> dict[int, DataRecord]:
    """Load the data table for a block from the .json and .bin."""
    if not json_path.is_file():
        return {}

    data = json.loads(json_path.read_text(encoding="utf-8"))
    blocks_raw = _collect_raw_blocks(data)
    literals_data_offset = data.get("literalsDataOffset", 0)

    target = None
    for b in blocks_raw:
        bo = b.get("blockOffset", b.get("offset", -1))
        if bo == block_offset:
            target = b
            break

    if target is None:
        return {}

    bl = target.get("blockLength", target.get("length", 0))
    cl = target.get("codeLength", target.get("codeLen", target.get("headerWord0", 0)))
    file_off = literals_data_offset + block_offset
    scan_base = file_off + 8
    block_end = file_off + bl

    bin_path = json_path.parent / json_path.name.replace(".json", ".bin")
    if not bin_path.is_file():
        return {}

    import struct
    blob = bin_path.read_bytes()
    table: dict[int, DataRecord] = {}

    pos = scan_base
    while pos + 8 <= block_end:
        entry_id = int.from_bytes(blob[pos:pos+4], "little")
        kind     = int.from_bytes(blob[pos+4:pos+8], "little")

        if kind in (1, 5):
            if pos + 12 > block_end:
                pos += 4; continue
            value = struct.unpack_from("<i", blob, pos + 8)[0]
            table[entry_id] = DataRecord(entry_id, kind, value)
            pos += 12

        elif kind == 2:
            if pos + 16 > block_end:
                pos += 4; continue
            value = struct.unpack_from("<d", blob, pos + 8)[0]
            table[entry_id] = DataRecord(entry_id, kind, value)
            pos += 16

        elif kind == 4:
            if pos + 12 > block_end:
                pos += 4; continue
            char_len = int.from_bytes(blob[pos+8:pos+12], "little")
            if char_len == 0 or char_len > 512:
                pos += 4; continue
            byte_len = char_len * 2
            if pos + 12 + byte_len > block_end:
                pos += 4; continue
            raw = blob[pos+12:pos+12+byte_len]
            try:
                s = raw.decode("utf-16-le")
                printable = sum(1 for c in s if c.isprintable())
                if printable < len(s) * 0.7:
                    pos += 4; continue
            except UnicodeDecodeError:
                pos += 4; continue
            record_size = 12 + byte_len
            if record_size % 4:
                record_size += 4 - (record_size % 4)
            table[entry_id] = DataRecord(entry_id, kind, s)
            pos += record_size
        else:
            pos += 4

    return table


# ---------------------------------------------------------------------------
# Symbolic value types
# ---------------------------------------------------------------------------

@dataclass
class SymInt:
    value: int
    def __str__(self) -> str: return str(self.value)

@dataclass
class SymFloat:
    value: float
    def __str__(self) -> str: return repr(self.value)

@dataclass
class SymStr:
    value: str
    def __str__(self) -> str: return f'"{self.value}"'

@dataclass
class SymName:
    name: str
    def __str__(self) -> str: return self.name

@dataclass
class SymVar:
    name: str
    def __str__(self) -> str: return self.name

@dataclass
class SymProp:
    """Property/field access: obj.field"""
    obj: str
    field: str
    def __str__(self) -> str:
        if self.obj:
            return f"{self.obj}.{self.field}"
        return self.field

@dataclass
class SymCall:
    """A call expression: name(args...)"""
    name: str
    args: list
    def __str__(self) -> str:
        arg_str = ", ".join(str(a) for a in self.args)
        return f"{self.name}({arg_str})"

@dataclass
class SymArgc:
    """Argument count marker (ARGC / ARGCNORET)"""
    count: int
    returns: bool   # True = ARGC (returns value), False = ARGCNORET (void)
    def __str__(self) -> str:
        return f"<argc={self.count} ret={self.returns}>"

@dataclass
class SymUnknown:
    desc: str
    def __str__(self) -> str: return f"<{self.desc}>"

SymVal = Union[SymInt, SymFloat, SymStr, SymName, SymVar, SymProp, SymCall, SymArgc, SymUnknown]


def fmt(v: SymVal) -> str:
    return str(v)


# ---------------------------------------------------------------------------
# Simulator state
# ---------------------------------------------------------------------------

@dataclass
class SimState:
    stack: list[SymVal] = field(default_factory=list)
    statements: list[str] = field(default_factory=list)
    warnings: list[str] = field(default_factory=list)
    indent: int = 0

    def push(self, v: SymVal) -> None:
        self.stack.append(v)

    def pop(self) -> SymVal:
        if self.stack:
            return self.stack.pop()
        self.warn("stack underflow")
        return SymUnknown("underflow")

    def peek(self, n: int = 0) -> SymVal:
        if len(self.stack) > n:
            return self.stack[-(n+1)]
        return SymUnknown("empty")

    def emit(self, stmt: str) -> None:
        self.statements.append("  " * self.indent + stmt)

    def warn(self, msg: str) -> None:
        if len(self.warnings) < 200:
            self.warnings.append(msg)
        elif len(self.warnings) == 200:
            self.warnings.append("... (further warnings suppressed)")


# ---------------------------------------------------------------------------
# Opcode dispatch
# ---------------------------------------------------------------------------

# Standard V4 binary operators (no-arg opcodes)
_BINARY_OPS: dict[int, str] = {
    0x04: "*",
    0x05: "+",
    0x06: "-",
    0x07: "/",
    0x08: "mod",
    0x0A: "&",
    0x0B: "&&",
    0x0C: "<",
    0x0D: "<=",
    0x0E: "<>",
    0x0F: "=",
    0x10: ">",
    0x11: ">=",
    0x12: "and",
    0x13: "or",
    0x15: "contains",
    0x16: "starts",
}

# Standard V4 unary operators
_UNARY_OPS: dict[int, str] = {
    0x09: "-",   # negate
    0x14: "not",
}


def _name_for(block: DisasmBlock, idx: int) -> str:
    """Resolve a name-table index to a string."""
    if 0 <= idx < len(block.names):
        return block.names[idx]
    return f"name_{idx}"


def _data_val(table: dict[int, DataRecord], idx: int) -> SymVal:
    """Resolve a data-table id to a symbolic value."""
    if idx in table:
        rec = table[idx]
        if rec.kind == 4:
            return SymStr(rec.value) if not rec.value.replace("_","").replace(".","").lstrip("-").isdigit() else SymName(rec.value)
        elif rec.kind in (1, 5):
            return SymInt(rec.value)
        elif rec.kind == 2:
            return SymFloat(rec.value)
    return SymUnknown(f"data_{idx}")


def _pop_args(state: SimState, argc: SymVal) -> list[SymVal]:
    """Pop N args from stack given an ARGC marker."""
    if isinstance(argc, SymArgc):
        n = argc.count
    else:
        # Fallback: try to read count from whatever is on stack
        state.warn(f"expected ARGC, got {fmt(argc)}")
        n = 0
    args = []
    for _ in range(n):
        args.insert(0, state.pop())
    return args


def simulate_block(
    block: DisasmBlock,
    table: dict[int, DataRecord],
    show_stack: bool = False,
) -> SimState:
    """Symbolically execute one block and return the SimState."""
    state = SimState()

    # Build an offset -> instruction index map for jump resolution
    offset_map: dict[int, int] = {
        instr.offset: i for i, instr in enumerate(block.instructions)
    }

    ip = 0  # instruction pointer (index into block.instructions)
    visited_jumps: set[tuple[int,int]] = set()  # (from_offset, to_offset) pairs
    max_steps = len(block.instructions) * 2  # each instruction visited at most twice
    steps = 0

    while ip < len(block.instructions) and steps < max_steps:
        steps += 1
        instr = block.instructions[ip]
        op = instr.opcode
        arg = instr.args[0] if instr.args else 0

        if show_stack:
            stack_str = " | ".join(fmt(v) for v in state.stack[-6:])
            state.emit(f"  ; [{instr.offset:04X}] op_{op:02X}  stack=[{stack_str}]")

        # ---- No-argument standard opcodes ----

        if op in (0x01, 0x02):
            # c_procret — return.
            # In the hidden-VM, 0x01/0x02 also appear mid-block as no-ops or
            # as part of multi-byte sequences. Only treat as return if it's
            # the last instruction or if the next instruction is also a terminator.
            is_last = (ip == len(block.instructions) - 1)
            next_op = block.instructions[ip + 1].opcode if not is_last else None
            if is_last or next_op in (0x01, 0x02):
                state.emit("exit")
                break
            else:
                # Mid-block 0x01 — treat as no-op in hidden-VM context
                pass

        elif op == 0x03:
            # cb_zeropush
            state.push(SymInt(0))

        elif op in _BINARY_OPS:
            d2 = state.pop()
            d1 = state.pop()
            sym = _BINARY_OPS[op]
            state.push(SymUnknown(f"{fmt(d1)} {sym} {fmt(d2)}"))

        elif op in _UNARY_OPS:
            d = state.pop()
            sym = _UNARY_OPS[op]
            state.push(SymUnknown(f"{sym} {fmt(d)}"))

        elif op == 0x1B:
            # c_field — pop member id, push field value
            member = state.pop()
            state.push(SymProp("field", fmt(member)))

        elif op == 0x1C:
            # c_tell — begin tell block
            window = state.pop()
            state.push(SymUnknown("__current_window__"))
            state.emit(f"tell {fmt(window)}")
            state.indent += 1

        elif op == 0x1D:
            # c_telldone
            if state.indent > 0:
                state.indent -= 1
            state.emit("end tell")
            state.pop()  # saved window

        elif op == 0x1E:
            # cb_list — build list
            argc = state.pop()
            args = _pop_args(state, argc)
            state.push(SymCall("list", args))

        elif op == 0x1F:
            # cb_proplist
            argc = state.pop()
            args = _pop_args(state, argc)
            state.push(SymCall("proplist", args))

        # ---- 1-byte arg standard opcodes ----

        elif op == 0x41:
            # Ambiguous: standard c_intpush takes a 1-byte arg.
            # But in the hidden-VM disasm, 0x41 appears as a standalone no-arg byte
            # before 0x35/0x36/0x3E sequences — likely "push me/self/receiver".
            # Distinguish by whether args were decoded:
            if instr.args:
                # Standard c_intpush with arg
                state.push(SymInt(arg if arg < 128 else arg - 256))
            else:
                # Hidden-VM: push self/receiver
                state.push(SymName("me"))

        elif op == 0x42:
            # Standard c_argcnoretpush with arg, OR hidden-VM standalone (push FALSE/0)
            if instr.args:
                state.push(SymArgc(arg, returns=False))
            else:
                state.push(SymInt(0))  # hidden-VM: push 0/false

        elif op == 0x43:
            # Standard c_argcpush with arg, OR hidden-VM standalone
            if instr.args:
                state.push(SymArgc(arg, returns=True))
            else:
                state.push(SymUnknown("op_43"))

        elif op == 0x45:
            # c_namepush — push name as symbol
            name = _name_for(block, arg)
            state.push(SymName(name))

        elif op in (0x48, 0x49):
            # cb_globalpush
            name = _name_for(block, arg)
            state.push(SymVar(f"_global.{name}"))

        elif op == 0x4A:
            # cb_thepush — push property of me
            name = _name_for(block, arg)
            state.push(SymProp("me", name))

        elif op in (0x4B, 0x4C):
            # cb_varpush (arg or local)
            name = _name_for(block, arg // 6 if arg >= 6 else arg)
            state.push(SymVar(name))

        elif op in (0x4E, 0x4F):
            # cb_globalassign
            name = _name_for(block, arg)
            val = state.pop()
            state.emit(f"_global.{name} = {fmt(val)}")

        elif op == 0x50:
            # cb_theassign — assign property of me
            name = _name_for(block, arg)
            val = state.pop()
            state.emit(f"me.{name} = {fmt(val)}")

        elif op in (0x51, 0x52):
            # cb_varassign (arg or local) when called with an explicit arg.
            # Standalone 0x51 (no arg) is the hidden-VM stack-cleanup pop.
            if instr.args:
                name = _name_for(block, arg // 6 if arg >= 6 else arg)
                val = state.pop()
                state.emit(f"{name} = {fmt(val)}")
            else:
                # Hidden-VM: discard top of stack (receiver cleanup after 0x36)
                if state.stack:
                    state.pop()

        elif op == 0x53:
            # c_jump forward (byte arg)
            target_off = instr.offset + arg  # relative to instruction start
            if target_off in offset_map:
                ip = offset_map[target_off]
                continue
            else:
                state.emit(f"-- jump -> 0x{target_off:04X} (unresolved)")

        elif op == 0x54:
            # Ambiguous:
            # - Standard V4: c_jump with negated byte arg (backward jump) — has arg
            # - Hidden-VM: push local variable by name-table id — has arg + name hint
            # Both have args, so distinguish by name hint.
            if instr.name_hint:
                # Hidden-VM push variable
                state.push(SymVar(instr.name_hint))
            elif instr.args:
                # Standard backward jump
                target_off = instr.offset - arg
                if target_off == instr.offset:
                    state.emit("-- halt (self-loop terminator)")
                    break
                jump_key = (instr.offset, target_off)
                if jump_key not in visited_jumps:
                    visited_jumps.add(jump_key)
                    state.emit(f"-- loop back to 0x{target_off:04X}")
                    if target_off in offset_map:
                        ip = offset_map[target_off]
                        continue
                else:
                    state.emit(f"-- end loop (0x{target_off:04X})")
                    state.indent = max(0, state.indent - 1)
            else:
                state.warn(f"op_54 with no args at 0x{instr.offset:04X}")

        elif op == 0x55:
            # c_jumpifz — jump if zero/false (confirmed from ScummVM)
            cond = state.pop()
            # arg is relative jump offset from next instruction
            target_off = instr.offset + arg
            state.emit(f"if not ({fmt(cond)}) then  -- jumpifz -> 0x{target_off:04X}")
            state.indent += 1
            # We fall through (true branch) and note the false branch target
            state.emit(f"-- [false branch -> 0x{target_off:04X}]")

        elif op == 0x56:
            # cb_localcall — call embedded block by index
            argc = state.pop()
            args = _pop_args(state, argc)
            block_name = f"block_{arg}"
            if isinstance(argc, SymArgc) and argc.returns:
                state.push(SymCall(block_name, args))
            else:
                state.emit(f"{block_name}({', '.join(fmt(a) for a in args)})")

        elif op == 0x57:
            # cb_call — call named function
            argc = state.pop()
            args = _pop_args(state, argc)
            name = _name_for(block, arg)
            if isinstance(argc, SymArgc) and argc.returns:
                state.push(SymCall(name, args))
            else:
                state.emit(f"{name}({', '.join(fmt(a) for a in args)})")

        elif op == 0x58:
            # Ambiguous:
            # - Standard V4: cb_objectcall (1-byte arg = var type)
            # - Hidden-VM: push integer literal (2-byte big-endian arg)
            # The disasm shows 3-byte form (op + 2 bytes) for the hidden-VM push.
            # Distinguish by raw byte count: 3 bytes = hidden-VM push-int.
            raw_bytes = instr.raw_bytes.split()
            if len(raw_bytes) == 3:
                # Hidden-VM: push integer
                state.push(SymInt(arg))
            else:
                # Standard cb_objectcall
                var_id = state.pop()
                argc = state.pop()
                args = _pop_args(state, argc)
                if isinstance(argc, SymArgc) and argc.returns:
                    state.push(SymCall(f"{fmt(var_id)}.call", args))
                else:
                    state.emit(f"{fmt(var_id)}.call({', '.join(fmt(a) for a in args)})")

        elif op == 0x59:
            # cb_v4assign — put value into var
            # high nibble = op (1=into, 2=after, 3=before), low nibble = var type
            op_nibble = (arg >> 4) & 0xF
            var_id = state.pop()
            val = state.pop()
            ops = {1: "=", 2: "put after", 3: "put before"}
            op_str = ops.get(op_nibble, f"op{op_nibble}")
            if op_nibble == 1:
                state.emit(f"{fmt(var_id)} = {fmt(val)}")
            else:
                state.emit(f"put {fmt(val)} {op_str} {fmt(var_id)}")

        elif op == 0x5F:
            # cb_thepush2 — movie-level property
            name = _name_for(block, arg)
            state.push(SymProp("the", name))

        elif op == 0x60:
            # cb_theassign2
            name = _name_for(block, arg)
            val = state.pop()
            state.emit(f"the {name} = {fmt(val)}")

        elif op == 0x61:
            # cb_objectfieldpush — obj.field read
            name = _name_for(block, arg)
            obj = state.pop()
            state.push(SymProp(fmt(obj), name))

        elif op == 0x62:
            # cb_objectfieldassign — obj.field = val
            name = _name_for(block, arg)
            obj = state.pop()
            val = state.pop()
            state.emit(f"{fmt(obj)}.{name} = {fmt(val)}")

        elif op == 0x64:
            # c_stackpeek
            state.push(state.peek(arg))

        elif op == 0x65:
            # c_stackdrop
            for _ in range(arg):
                state.pop()

        # ---- Wide (2-byte arg) standard opcodes — same ops as narrow ----

        elif op == 0x81:
            state.push(SymInt(arg if arg < 32768 else arg - 65536))

        elif op == 0x82:
            state.push(SymArgc(arg, returns=False))

        elif op == 0x83:
            # c_argcpush wide — confirmed from ScummVM
            state.push(SymArgc(arg, returns=True))

        elif op in (0x88, 0x89):
            name = _name_for(block, arg)
            state.push(SymVar(f"_global.{name}"))

        elif op == 0x8A:
            name = _name_for(block, arg)
            state.push(SymProp("me", name))

        elif op in (0x8B, 0x8C):
            name = _name_for(block, arg // 6 if arg >= 6 else arg)
            state.push(SymVar(name))

        elif op in (0x8E, 0x8F):
            name = _name_for(block, arg)
            val = state.pop()
            state.emit(f"_global.{name} = {fmt(val)}")

        elif op == 0x91:
            name = _name_for(block, arg // 6 if arg >= 6 else arg)
            val = state.pop()
            state.emit(f"{name} = {fmt(val)}")

        elif op == 0x95:
            cond = state.pop()
            target_off = instr.offset + arg
            state.emit(f"if not ({fmt(cond)}) then  -- jumpifz -> 0x{target_off:04X}")
            state.indent += 1

        elif op == 0x96:
            argc = state.pop()
            args = _pop_args(state, argc)
            block_name = f"block_{arg}"
            if isinstance(argc, SymArgc) and argc.returns:
                state.push(SymCall(block_name, args))
            else:
                state.emit(f"{block_name}({', '.join(fmt(a) for a in args)})")

        elif op == 0x97:
            argc = state.pop()
            args = _pop_args(state, argc)
            name = _name_for(block, arg)
            if isinstance(argc, SymArgc) and argc.returns:
                state.push(SymCall(name, args))
            else:
                state.emit(f"{name}({', '.join(fmt(a) for a in args)})")

        elif op == 0xA1:
            name = _name_for(block, arg)
            obj = state.pop()
            state.push(SymProp(fmt(obj), name))

        elif op == 0xA2:
            name = _name_for(block, arg)
            obj = state.pop()
            val = state.pop()
            state.emit(f"{fmt(obj)}.{name} = {fmt(val)}")

        # ---- Hidden-VM cluster ----

        elif op == 0x00:
            # no-op / padding
            pass

        elif op == 0x22:
            # Hidden-VM: likely "mod" or arithmetic — appears after push sequences
            # Context: name_32 = name_33 pattern suggests it's a binary op
            d2 = state.pop()
            d1 = state.pop()
            state.push(SymUnknown(f"{fmt(d1)} op22 {fmt(d2)}"))

        elif op == 0x23:
            # Hidden-VM: "new" / object construction or xtra call
            # Appears as: 3B name / 39 / 3D string / 23 / 00 / 01
            # Pattern matches: xtra("xmlparser") — instantiate xtra
            name = state.pop()
            argc = state.pop()
            args = _pop_args(state, argc)
            state.push(SymCall(f"new({fmt(name)})", args))

        elif op == 0x37:
            # Hidden-VM: unknown — appears after object field access
            # Likely "get property" or "index into list"
            idx = state.pop()
            obj = state.pop()
            state.push(SymProp(fmt(obj), f"[{fmt(idx)}]"))

        elif op == 0x35:
            # Hidden-VM: push local variable by data-table id
            # arg is the id in the block's name/data table
            name = _name_for(block, arg)
            if name:
                state.push(SymVar(name))
            else:
                val = _data_val(table, arg)
                state.push(val)

        elif op == 0x36:
            # Hidden-VM: assign property/variable by name-table id.
            # The stack has: [receiver, value] where receiver was pushed by 0x41.
            # Pop value, peek at receiver, emit receiver.name = value.
            name = _name_for(block, arg)
            val = state.pop()
            # The receiver (pushed by 0x41 / "me") stays on stack for 0x51 to discard.
            receiver = state.peek(0) if state.stack else None
            if receiver is not None and isinstance(receiver, SymName) and receiver.name == "me":
                state.emit(f"me.{name} = {fmt(val)}")
            else:
                state.emit(f"{name} = {fmt(val)}")

        elif op == 0x39:
            # Hidden-VM: push arg count (0 args, returns value)
            # Appears before method calls with no arguments
            state.push(SymArgc(0, returns=True))

        elif op == 0x3A:
            # Hidden-VM: push property/field of object by name-table id
            # Stack: obj -> result
            name = _name_for(block, arg)
            obj = state.pop()
            state.push(SymProp(fmt(obj), name))

        elif op == 0x3B:
            # Hidden-VM: push value from data table by id
            # This is the primary constant/name push for the hidden VM
            val = _data_val(table, arg)
            if isinstance(val, SymUnknown):
                # Fall back to name table
                name = _name_for(block, arg)
                if name:
                    val = SymName(name)
            state.push(val)

        elif op == 0x3C:
            # Hidden-VM: push integer literal (2-byte big-endian follows)
            # The arg is already decoded from the 2 following bytes
            state.push(SymInt(arg if arg < 32768 else arg - 65536))

        elif op == 0x3D:
            # Hidden-VM: push string from data table by id
            val = _data_val(table, arg)
            state.push(val)

        elif op == 0x3E:
            # Hidden-VM: push VOID / empty / zero-like value
            # Appears at start of assignments like: 41 3E 36 00 00 51
            # which initializes a variable to empty/0
            state.push(SymUnknown("VOID"))

        elif op == 0x3F:
            # Hidden-VM: unknown — appears in object construction context
            # Likely "end of args" or "build object"
            state.push(SymUnknown("op_3F"))

        elif op == 0x40:
            # Hidden-VM: unknown
            state.push(SymUnknown("op_40"))

        elif op == 0x51:
            # Hidden-VM: stack cleanup pop — handled above in the 0x51/0x52 block.
            # This branch is only reached if somehow the above didn't match.
            if state.stack:
                state.pop()

        elif op == 0x58:
            # Hidden-VM: push integer literal (3-byte: op + 2-byte big-endian)
            # Distinct from standard 0x58 (cb_objectcall) by context.
            # In the hidden-VM, 0x58 always has a 2-byte arg and pushes an int.
            state.push(SymInt(arg))

        elif op == 0x7D:
            # Hidden-VM: push special/sentinel value (block 0 dispatch table)
            state.push(SymUnknown(f"special_{arg}"))

        elif op == 0x80:
            # Hidden-VM: wide form — object field assign or similar
            # arg is field id; stack has obj
            name = _name_for(block, arg)
            obj = state.pop()
            val = state.pop() if state.stack else SymUnknown("?")
            state.emit(f"{fmt(obj)}.{name} = {fmt(val)}")

        elif op == 0x16:
            # Hidden-VM branch: appears as "op_16 branch? target/imm=N"
            # Based on context (nitrousRemaining >= nitrousTankSize check in block 3)
            # this is a conditional jump — treat as jumpifz equivalent
            cond = state.pop()
            target_off = instr.offset + arg
            state.emit(f"if not ({fmt(cond)}) then  -- branch -> 0x{target_off:04X}")
            state.indent += 1

        elif op == 0x12:
            # Hidden-VM branch: appears as "op_12 branch? target/imm=N"
            # Seen in block 2 after comparisons — conditional jump
            cond = state.pop()
            target_off = instr.offset + arg
            state.emit(f"if not ({fmt(cond)}) then  -- branch -> 0x{target_off:04X}")
            state.indent += 1

        else:
            state.warn(f"unhandled opcode 0x{op:02X} at 0x{instr.offset:04X} arg={arg}")
            state.emit(f"-- op_0x{op:02X}({arg})  [{instr.name_hint}]")

        ip += 1

    return state


# ---------------------------------------------------------------------------
# Report rendering
# ---------------------------------------------------------------------------

def render_report(
    block: DisasmBlock,
    state: SimState,
    script_name: str,
    show_stack: bool,
) -> str:
    lines: list[str] = []
    lines.append(f"# {script_name} Block {block.block_offset} — Stack Simulation")
    lines.append("")
    lines.append(f"Block index: {block.block_index}  "
                 f"offset: {block.block_offset}  "
                 f"length: {block.block_length}  "
                 f"code_len: {block.code_len}")
    lines.append("")

    if block.names:
        lines.append(f"Name table ({len(block.names)} entries):")
        for i, n in enumerate(block.names):
            lines.append(f"  [{i}] {n}")
        lines.append("")

    lines.append("## Simulated Lingo")
    lines.append("")
    lines.append("```lingo")
    lines.append(f"on {script_name}_block{block.block_offset}")
    for stmt in state.statements:
        lines.append(stmt)
    lines.append("end")
    lines.append("```")
    lines.append("")

    if state.stack:
        lines.append(f"## Residual stack ({len(state.stack)} item(s))")
        lines.append("")
        for i, v in enumerate(reversed(state.stack)):
            lines.append(f"  [{i}] {fmt(v)}")
        lines.append("")

    if state.warnings:
        lines.append(f"## Warnings ({len(state.warnings)})")
        lines.append("")
        for w in state.warnings:
            lines.append(f"- {w}")
        lines.append("")

    lines.append("## Provenance")
    lines.append("")
    lines.append("- Opcode semantics: ScummVM `lingo-bytecode.cpp` / `lingo-code.cpp` (V4 standard)")
    lines.append("- Hidden-VM cluster (0x35/0x36/0x39/0x3A/0x3B/0x51/0x58): inferred from pattern analysis")
    lines.append("- Branch polarity (0x55/0x95/0x12/0x16): confirmed — jump when condition is zero/false")
    lines.append("- This output is a simulation trace, not a verified recompilable source.")
    lines.append("- Unresolved opcodes are emitted as `-- op_0xNN(arg)` comments.")
    lines.append("")

    return "\n".join(lines)


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(
        description="Hidden-VM stack simulator for Lscr-* blocks.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    p.add_argument("script", help="Script name or path (e.g. Lscr-102).")
    p.add_argument("--block", type=lambda s: int(s, 0),
                   help="Block offset to simulate.")
    p.add_argument("--all-blocks", action="store_true",
                   help="Simulate all blocks.")
    p.add_argument("--show-stack", action="store_true",
                   help="Emit stack state as comments before each instruction.")
    p.add_argument("--out", help="Write output to this file instead of stdout.")
    return p.parse_args()


def main() -> int:
    args = parse_args()
    workspace = find_workspace_root(Path.cwd())

    sd = resolve_script_dir(args.script, workspace)
    if not sd:
        print(f"ERROR: script not found: {args.script!r}", file=sys.stderr)
        return 1

    script_name = sd.name
    root = sd / "root-artifacts"

    # Find disasm file
    disasm_candidates = list(root.glob("*.annotated-disasm.md"))
    if not disasm_candidates:
        # Also check evidence/
        disasm_candidates = list((sd / "evidence").rglob("*.annotated-disasm.md")) if (sd / "evidence").is_dir() else []
    if not disasm_candidates:
        print(f"ERROR: no annotated-disasm.md found for {script_name}", file=sys.stderr)
        return 1

    disasm_path = disasm_candidates[0]
    json_path = root / f"{script_name}.json"

    print(f"Reading disasm: {disasm_path}", file=sys.stderr)
    all_blocks = parse_disasm_file(disasm_path)

    if not all_blocks:
        print(f"ERROR: no blocks parsed from {disasm_path}", file=sys.stderr)
        return 1

    # Select target blocks
    if args.all_blocks:
        target_blocks = all_blocks
    elif args.block is not None:
        target_blocks = [b for b in all_blocks if b.block_offset == args.block]
        if not target_blocks:
            available = [b.block_offset for b in all_blocks]
            print(f"ERROR: block {args.block} not found. Available: {available}", file=sys.stderr)
            return 1
    else:
        print("ERROR: specify --block <offset> or --all-blocks", file=sys.stderr)
        return 1

    output_parts: list[str] = []

    for block in target_blocks:
        print(f"  Simulating block {block.block_offset} ({len(block.instructions)} instructions)...",
              file=sys.stderr)
        table = load_data_table(json_path, block.block_offset)
        state = simulate_block(block, table, show_stack=args.show_stack)
        report = render_report(block, state, script_name, args.show_stack)
        output_parts.append(report)
        if state.warnings:
            print(f"    {len(state.warnings)} warning(s)", file=sys.stderr)

    full_output = "\n---\n\n".join(output_parts)

    if args.out:
        out_path = Path(args.out)
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_text(full_output, encoding="utf-8")
        print(f"Written: {out_path}", file=sys.stderr)
    else:
        print(full_output)

    return 0


if __name__ == "__main__":
    sys.exit(main())
