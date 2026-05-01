// Lscr-93 rebuilt-faithful JS
// scriptNumber: 1, castID: 65537
//
// Visible handler: exitFrame
//   Bytecode: pushcons 1, pushcons 2, unk26
//   Dispatches to embedded block 1 (offset 412, codeLen 11982)
//
// Embedded block 1: network callback dispatcher
//   159 action spans, 2 embedded case tables
//   Full source in Lscr-93.rebuilt-faithful.lingo

export const Lscr93 = Object.freeze({
  chunk: "Lscr-93.json",
  scriptNumber: 1,
  castID: 65537,
  handlers: Object.freeze([
    Object.freeze({
      name: "exitFrame",
      argumentCount: 0,
      bytecode: Object.freeze([
        Object.freeze({ pos: 0, op: "pushcons", operand: 1 }),
        Object.freeze({ pos: 2, op: "pushcons", operand: 2 }),
        Object.freeze({ pos: 4, op: "unk26", note: "dispatch to embedded block 1" }),
      ]),
    }),
  ]),
  embeddedBlocks: Object.freeze([
    Object.freeze({
      index: 0,
      offset: 0,
      length: 412,
      codeLen: 25,
      note: "exitFrame prologue / global registration stub",
      names: ["_global", "gNetID", "checkedForOneClient", "checkProcessResult"],
    }),
    Object.freeze({
      index: 1,
      offset: 412,
      length: 33588,
      codeLen: 11982,
      note: "network callback dispatcher - 159 action spans",
      primaryCaseTable: Object.freeze({
        offset: "0x0232",
        subject: "_global.gNetID[_global][VOID]",
        defaultTarget: "0x2BD6",
        armCount: 155,
      }),
      secondaryCaseTable: Object.freeze({
        offset: "0x2C20",
        subject: "_global.gNetID[_global][VOID]",
        defaultTarget: "0x2C38",
        arms: ["gettotalnewmail", "getemaillist", "getavatarage", "getteamavatarage"],
      }),
      fileNetIDCaseTable: Object.freeze({
        offset: "0x2D5B",
        subject: "_global.fileNetID[_global][VOID]",
        defaultTarget: "0x2E46",
        arms: ["avatars", "teamavatars", "ugg", "cache", "installer"],
      }),
    }),
  ]),
});
