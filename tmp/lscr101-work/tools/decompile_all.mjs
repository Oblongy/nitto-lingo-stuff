/**
 * decompile_all.mjs
 *
 * Reads every Lscr-*.json in the parent directory, decompiles the bytecode
 * into Lingo source, and writes:
 *   - <chunkBase>.decompiled.lingo
 *   - <chunkBase>.decompiled.js
 *
 * For Lscr-108 (and any chunk with real bytecode), a full stack-based
 * decompile is attempted. For dispatch-stub chunks (pushcons + unk26),
 * the handler signatures are preserved with a clear comment.
 *
 * Run from the "Lingo Stuff" directory:
 *   node tools/decompile_all.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WORKSPACE = path.resolve(__dirname, "..");

// ---------------------------------------------------------------------------
// Known external call name table (from Lscr-108 analysis + js_rewrite/17)
// These are the nameIDs used in extcall opcodes across all scripts.
// ---------------------------------------------------------------------------
const EXTCALL_NAMES = {
  // movie props (setmovieprop / getmovieprop)
  138: "debugPlaybackEnabled",
  // xtra / object calls
  139: "new",
  140: "xtra",
  141: "status",
  142: "quit",
  144: "caluMD5_register",
  145: "gSimInet",
  146: "string",
  147: "baDiskInfo",
  148: "baSysFolder",
  149: "offset",
  150: "char",  // pushsymb #char
  151: "charRange",
  152: "baCpuInfo",
  153: "To3GetMacAddress",
  154: "baReadRegString",
  155: "baComputerName",
  156: "_return_",  // Lingo return-value mechanism
  159: "baFolderExists",
  161: "baCreateFolder",
  162: "baFileList",
  164: "baFileExists",
  165: "baTempFileName",
  166: "baFileAge",
  167: "baDeleteFile",
  168: "baFileDateEx",
  171: "baSetFileDate",
  175: "baRunProgram",
  176: "baWindowList",
  177: "count",
  // movie prop IDs for "set" opcode
  7: "timeoutLength",
  0: "timeoutScript",
  5: "timeoutScript",
  31: "timeoutLength",
  // openfile
  111: "openfile",
};

// Movie property names for setmovieprop/getmovieprop obj values
const MOVIE_PROPS = {
  138: "debugPlaybackEnabled",
  7: "timeoutLength",
  5: "timeoutScript",
  0: "timeoutScript",
  31: "timeoutLength",
};

// ---------------------------------------------------------------------------
// Opcode decompiler
// ---------------------------------------------------------------------------

/**
 * Split a comma-separated argument string, respecting nested parentheses.
 * e.g. 'xtra("simInet"), foo(a, b)' → ['xtra("simInet")', 'foo(a, b)']
 */
function splitArgList(str) {
  if (!str.trim()) return [];
  const parts = [];
  let depth = 0;
  let current = "";
  for (const ch of str) {
    if (ch === "(" || ch === "[") depth++;
    else if (ch === ")" || ch === "]") depth--;
    if (ch === "," && depth === 0) {
      parts.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}

/**
 * Decompile a single handler's bytecode into Lingo source lines.
 * Returns an array of source lines (without the on/end wrapper).
 */
function decompileHandler(handler, literals) {
  const { bytecode, argumentNames = [], localNames = [], globalNameIDs = [] } = handler;

  // Check if this is a dispatch stub (pushcons + unk26)
  if (
    bytecode.length === 3 &&
    bytecode[0].opcode === "pushcons" &&
    bytecode[1].opcode === "pushcons" &&
    bytecode[2].opcode === "unk26"
  ) {
    return ["  -- dispatch stub (embedded block body not decompilable from JSON alone)"];
  }

  // Full stack-based decompile
  const stack = [];
  const lines = [];
  let i = 0;

  // Build a jump target map for labeling
  const jumpTargets = new Set();
  for (const op of bytecode) {
    if (op.opcode === "jmpifz" || op.opcode === "jmp") {
      jumpTargets.add(op.pos + op.obj);
    }
  }

  function getLiteral(idx) {
    if (idx < 0 || idx >= literals.length) return `<lit${idx}>`;
    const lit = literals[idx];
    if (lit.type === 1) {
      // string
      const v = lit.value ?? "";
      return JSON.stringify(v);
    }
    if (lit.type === 4) return `${lit.value}`;
    if (lit.type === 9) return "VOID";
    if (lit.type === 23) return "EMPTY";
    return `<lit${idx}:type${lit.type}>`;
  }

  function getExtName(id) {
    return EXTCALL_NAMES[id] ?? `_ext${id}`;
  }

  function getMovieProp(id) {
    return MOVIE_PROPS[id] ?? `_prop${id}`;
  }

  // We'll do a simple linear pass — no full CFG reconstruction
  // but we handle the common patterns seen in Lscr-108
  while (i < bytecode.length) {
    const op = bytecode[i];

    // Add label if this is a jump target
    if (jumpTargets.has(op.pos)) {
      lines.push(`  -- @${op.pos}:`);
    }

    switch (op.opcode) {
      case "ret":
        // ret always ends the handler; if there's a value on the stack it's the return value
        if (stack.length > 0) {
          lines.push(`  return ${stack.pop()}`);
        } else {
          // only emit explicit return if not the last instruction
          if (i < bytecode.length - 1) {
            lines.push(`  return`);
          }
        }
        break;

      case "pushzero":
        stack.push("0");
        break;

      case "pushint8":
      case "pushint16":
      case "pushint32":
        stack.push(String(op.obj));
        break;

      case "pushcons":
        stack.push(getLiteral(op.obj));
        break;

      case "pushsymb":
        // symbol — used as named argument (e.g. #char)
        stack.push(`#${getExtName(op.obj)}`);
        break;

      case "getlocal": {
        const name = localNames[op.obj] ?? `local${op.obj}`;
        stack.push(name);
        break;
      }

      case "setlocal": {
        const name = localNames[op.obj] ?? `local${op.obj}`;
        const val = stack.pop() ?? "VOID";
        lines.push(`  ${name} = ${val}`);
        break;
      }

      case "getparam": {
        const name = argumentNames[op.obj] ?? `param${op.obj}`;
        stack.push(name);
        break;
      }

      case "getglobal": {
        const name = getExtName(op.obj);
        stack.push(name);
        break;
      }

      case "setglobal": {
        const name = getExtName(op.obj);
        const val = stack.pop() ?? "VOID";
        lines.push(`  ${name} = ${val}`);
        break;
      }

      case "setmovieprop": {
        const prop = getMovieProp(op.obj);
        const val = stack.pop() ?? "VOID";
        lines.push(`  the.${prop} = ${val}`);
        break;
      }

      case "getmovieprop": {
        const prop = getMovieProp(op.obj);
        stack.push(`the.${prop}`);
        break;
      }

      case "getobjprop": {
        const obj = stack.pop() ?? "_obj";
        const prop = getExtName(op.obj);
        stack.push(`${obj}.${prop}`);
        break;
      }

      case "setobjprop": {
        const val = stack.pop() ?? "VOID";
        const obj = stack.pop() ?? "_obj";
        const prop = getExtName(op.obj);
        lines.push(`  ${obj}.${prop} = ${val}`);
        break;
      }

      case "set": {
        // set movie property: stack has [value, propSlot] but we use op.obj for the property
        // The "set" opcode in Director: pushes value, pushes prop-id, then set
        // Looking at lingoXtraInit: pushint32(216000), pushint8(31), set(7)
        // → the.timeoutLength = 216000  (prop slot 7 = timeoutLength, value=216000)
        // The prop slot is on top of stack, value is below
        const propSlot = stack.pop() ?? "0";
        const val = stack.pop() ?? "VOID";
        // op.obj is the property category; propSlot is the specific property index
        // For timeoutLength (slot 31) and timeoutScript (slot 5), we map by propSlot
        const SET_PROP_NAMES = {
          31: "timeoutLength",
          5: "timeoutScript",
          0: "timeoutScript",
          7: "timeoutLength",
        };
        const propName = SET_PROP_NAMES[Number(propSlot)] ?? `_movieprop${propSlot}`;
        lines.push(`  the.${propName} = ${val}`);
        break;
      }

      case "joinstr": {
        const b = stack.pop() ?? '""';
        const a = stack.pop() ?? '""';
        stack.push(`${a} & ${b}`);
        break;
      }

      case "add": {
        const b = stack.pop() ?? "0";
        const a = stack.pop() ?? "0";
        stack.push(`${a} + ${b}`);
        break;
      }

      case "sub": {
        const b = stack.pop() ?? "0";
        const a = stack.pop() ?? "0";
        stack.push(`${a} - ${b}`);
        break;
      }

      case "mul": {
        const b = stack.pop() ?? "0";
        const a = stack.pop() ?? "0";
        stack.push(`${a} * ${b}`);
        break;
      }

      case "div": {
        const b = stack.pop() ?? "0";
        const a = stack.pop() ?? "0";
        stack.push(`${a} / ${b}`);
        break;
      }

      case "eq": {
        const b = stack.pop() ?? "0";
        const a = stack.pop() ?? "0";
        stack.push(`${a} = ${b}`);
        break;
      }

      case "neq": {
        const b = stack.pop() ?? "0";
        const a = stack.pop() ?? "0";
        stack.push(`${a} <> ${b}`);
        break;
      }

      case "gt": {
        const b = stack.pop() ?? "0";
        const a = stack.pop() ?? "0";
        stack.push(`${a} > ${b}`);
        break;
      }

      case "lt": {
        const b = stack.pop() ?? "0";
        const a = stack.pop() ?? "0";
        stack.push(`${a} < ${b}`);
        break;
      }

      case "gte": {
        const b = stack.pop() ?? "0";
        const a = stack.pop() ?? "0";
        stack.push(`${a} >= ${b}`);
        break;
      }

      case "lte": {
        const b = stack.pop() ?? "0";
        const a = stack.pop() ?? "0";
        stack.push(`${a} <= ${b}`);
        break;
      }

      case "jmpifz": {
        // Jump if zero (false). The condition is on the stack.
        // jmpifz obj=N means: if (condition == 0) jump to (current_pos + N)
        // In Lingo: if condition then { fall-through } else { goto target }
        const cond = stack.pop() ?? "0";
        const target = op.pos + op.obj;
        lines.push(`  if not (${cond}) then -- goto @${target}`);
        break;
      }

      case "jmp": {
        const target = op.pos + op.obj;
        lines.push(`  -- goto @${target}`);
        break;
      }

      case "pusharglist": {
        // Collect op.obj args from stack
        const args = [];
        for (let k = 0; k < op.obj; k++) args.unshift(stack.pop() ?? "VOID");
        stack.push(`[${args.join(", ")}]`);
        break;
      }

      case "pusharglistnoret": {
        // Same but marks no-return call
        const args = [];
        for (let k = 0; k < op.obj; k++) args.unshift(stack.pop() ?? "VOID");
        stack.push(`[${args.join(", ")}]`);
        break;
      }

      case "extcall": {
        const fnName = getExtName(op.obj);
        const argList = stack.pop() ?? "[]";
        // Parse the arg list string back
        const argsStr = argList.startsWith("[") ? argList.slice(1, -1) : argList;
        // Check if previous op was pusharglistnoret (no return value — statement, not expression)
        const prevOp = i > 0 ? bytecode[i - 1] : null;
        const noRet = prevOp && prevOp.opcode === "pusharglistnoret";

        // extcall 156 (_return_) is the Lingo return-value mechanism
        if (fnName === "_return_") {
          if (argsStr.trim()) {
            lines.push(`  return ${argsStr}`);
          } else {
            lines.push(`  return`);
          }
          break;
        }

        if (noRet) {
          lines.push(`  ${fnName}(${argsStr})`);
        } else {
          stack.push(`${fnName}(${argsStr})`);
        }
        break;
      }

      case "objcall": {
        // objcall: the arglist contains [object, arg1, arg2, ...]
        // The object is the first element of the arglist (Director VM convention)
        const methodName = getExtName(op.obj);
        const argList = stack.pop() ?? "[]";
        // argList is like "[xtra("simInet")]" or "[obj, arg1, arg2]"
        // Parse: first element is the object, rest are method args
        let argsStr = argList.startsWith("[") ? argList.slice(1, -1) : argList;
        // Split on ", " but be careful of nested parens
        const parts = splitArgList(argsStr);
        if (parts.length === 0) {
          stack.push(`_obj.${methodName}()`);
        } else {
          const obj = parts[0];
          const methodArgs = parts.slice(1).join(", ");
          stack.push(`${obj}.${methodName}(${methodArgs})`);
        }
        break;
      }

      case "unk26":
        lines.push("  -- unk26 (dispatch to embedded block)");
        break;

      default:
        lines.push(`  -- [${op.pos}] ${op.opcode}${op.obj !== undefined ? ` ${op.obj}` : ""}`);
        break;
    }

    i++;
  }

  // Flush any remaining stack items as expressions
  while (stack.length > 0) {
    lines.push(`  -- stack: ${stack.pop()}`);
  }

  return lines;
}

/**
 * Build the Lingo source for a full chunk.
 */
function buildLingoSource(chunkJson) {
  const { handlers, literals = [], globalNameIDs = [], propertyNameIDs = [] } = chunkJson;
  const parts = [];

  // File header comment
  parts.push(`-- Lscr-${chunkJson.scriptNumber} decompiled Lingo`);
  parts.push(`-- scriptNumber: ${chunkJson.scriptNumber}`);
  parts.push(`-- castID: ${chunkJson.castID}`);
  parts.push(`-- handlersCount: ${chunkJson.handlersCount}`);
  parts.push("");

  for (const handler of handlers) {
    const args = handler.argumentNames ?? [];
    const locals = handler.localNames ?? [];
    const globals = handler.globalNameIDs ?? [];

    const argStr = args.length > 0 ? " " + args.join(", ") : "";
    parts.push(`on ${handler.name}${argStr}`);

    // Declare globals
    if (globals.length > 0) {
      // globals are referenced by nameID — we don't have the name table here
      // but the handler already has globalNameIDs resolved in some JSONs
    }

    const bodyLines = decompileHandler(handler, literals);
    for (const line of bodyLines) {
      parts.push(line);
    }

    parts.push("end");
    parts.push("");
  }

  return parts.join("\n");
}

// ---------------------------------------------------------------------------
// Lingo → JS translator
// ---------------------------------------------------------------------------

/**
 * Translate a Lingo handler body (array of lines) to JS.
 * This handles the common patterns seen in the decompiled output.
 */
function lingoLinesToJS(lines) {
  const jsLines = [];

  for (const raw of lines) {
    const line = raw.trimEnd();

    // Comments / labels
    if (line.trim().startsWith("--")) {
      // Convert "-- @N:" labels to JS comment labels
      const labelMatch = line.match(/^\s*-- @(\d+):$/);
      if (labelMatch) {
        jsLines.push(line.replace(/^(\s*)-- @(\d+):$/, "$1// label_$2:"));
        continue;
      }
      // Convert "-- goto @N" to JS comment
      const gotoMatch = line.match(/^\s*-- goto @(\d+)$/);
      if (gotoMatch) {
        jsLines.push(line.replace(/^(\s*)-- goto @(\d+)$/, "$1// goto label_$2"));
        continue;
      }
      jsLines.push(line.replace(/^(\s*)--/, "$1//"));
      continue;
    }

    // "if not (cond) then -- goto @N"  →  if (!(cond)) { /* goto label_N */ }
    const ifGotoMatch = line.match(/^(\s*)if not \((.+)\) then -- goto @(\d+)$/);
    if (ifGotoMatch) {
      const [, indent, cond, target] = ifGotoMatch;
      // Convert Lingo comparison operators in condition
      let jsCond = cond
        .replace(/ <> /g, " !== ")
        .replace(/ = /g, " === ")
        .replace(/ & /g, " + ");
      jsLines.push(`${indent}if (!(${jsCond})) { /* goto label_${target} */ }`);
      continue;
    }

    let js = line;

    // Lingo string concat & → JS +  (but not &&)
    js = js.replace(/ & /g, " + ");

    // Lingo <> → JS !==
    js = js.replace(/ <> /g, " !== ");

    // Lingo assignment: "name = expr" — keep as-is (JS compatible)
    // "return expr" — keep as-is
    // "the.prop = val" — keep as-is

    // Remove Lingo-style return() calls → return val
    js = js.replace(/\breturn\((.+)\)$/, "return $1");

    jsLines.push(js);
  }

  return jsLines;
}

/**
 * Build the JS module source for a full chunk.
 */
function buildJSSource(chunkJson) {
  const { handlers, literals = [] } = chunkJson;
  const chunkBase = `Lscr-${chunkJson.scriptNumber}`;
  const parts = [];

  parts.push(`// ${chunkBase} — decompiled from bytecode`);
  parts.push(`// scriptNumber: ${chunkJson.scriptNumber}, castID: ${chunkJson.castID}`);
  parts.push(`// Auto-generated by tools/decompile_all.mjs`);
  parts.push("");

  // Globals declared at module level
  const globalIDs = chunkJson.globalNameIDs ?? [];
  if (globalIDs.length > 0) {
    for (const id of globalIDs) {
      const name = EXTCALL_NAMES[id] ?? `_global${id}`;
      parts.push(`export let ${name};`);
    }
    parts.push("");
  }

  for (const handler of handlers) {
    const args = handler.argumentNames ?? [];
    const locals = handler.localNames ?? [];

    const argStr = args.join(", ");
    parts.push(`export function ${handler.name}(${argStr}) {`);

    // Declare locals
    if (locals.length > 0) {
      parts.push(`  let ${locals.join(", ")};`);
    }

    const bodyLines = decompileHandler(handler, literals);
    const jsLines = lingoLinesToJS(bodyLines);

    for (const line of jsLines) {
      parts.push(line);
    }

    parts.push("}");
    parts.push("");
  }

  return parts.join("\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function findChunkJsonFiles() {
  return fs
    .readdirSync(WORKSPACE)
    .filter((name) => /^Lscr-\d+\.json$/.test(name))
    .sort((a, b) => {
      const na = parseInt(a.match(/\d+/)[0]);
      const nb = parseInt(b.match(/\d+/)[0]);
      return na - nb;
    });
}

const jsonFiles = findChunkJsonFiles();
console.log(`Found ${jsonFiles.length} chunk JSON files.\n`);

const results = [];

for (const jsonFile of jsonFiles) {
  const chunkBase = jsonFile.replace(/\.json$/, "");
  const jsonPath = path.join(WORKSPACE, jsonFile);

  let chunkJson;
  try {
    chunkJson = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  } catch (err) {
    console.error(`  ERROR reading ${jsonFile}: ${err.message}`);
    results.push({ chunkBase, status: "error", error: err.message });
    continue;
  }

  const lingoPath = path.join(WORKSPACE, `${chunkBase}.decompiled.lingo`);
  const jsPath = path.join(WORKSPACE, `${chunkBase}.decompiled.js`);

  try {
    const lingoSource = buildLingoSource(chunkJson);
    fs.writeFileSync(lingoPath, lingoSource, "utf8");

    const jsSource = buildJSSource(chunkJson);
    fs.writeFileSync(jsPath, jsSource, "utf8");

    const handlerCount = chunkJson.handlers?.length ?? 0;
    const hasRealBytecode = chunkJson.handlers?.some(
      (h) =>
        h.bytecode?.length > 3 ||
        (h.bytecode?.length === 3 && h.bytecode[2]?.opcode !== "unk26")
    );

    console.log(
      `  ${chunkBase}: ${handlerCount} handlers, ${hasRealBytecode ? "REAL bytecode" : "dispatch stubs"} → wrote .lingo + .js`
    );
    results.push({ chunkBase, status: "ok", handlerCount, hasRealBytecode });
  } catch (err) {
    console.error(`  ERROR processing ${chunkBase}: ${err.message}`);
    console.error(err.stack);
    results.push({ chunkBase, status: "error", error: err.message });
  }
}

console.log("\nDone.");
const summaryPath = path.join(WORKSPACE, "tools", "decompile-summary.json");
fs.writeFileSync(summaryPath, JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 2), "utf8");
console.log(`Summary written to ${summaryPath}`);
