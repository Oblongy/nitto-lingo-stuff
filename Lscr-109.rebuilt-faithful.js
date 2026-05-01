export const Lscr109LingoSource = `on connectSocket
  -- unk26
end

on sockConnTimeout
  -- unk26
end

on socketMessageHandler
  -- unk26
end

on executeCall
  -- unk26
end

on ssm
  -- unk26
end`;

export const Lscr109 = Object.freeze({
  chunk: "Lscr-109.json",
  scriptNumber: 9,
  handlersCount: 5,
  handlers: Object.freeze([
    Object.freeze({
      name: "connectSocket",
      dispatchBlockOffset: 0,
      dispatchBlockLength: 140,
      compiledLen: 5,
      compiledOffset: 322,
      stackHeight: 2,
      unknown2: 0,
      lingo: "on connectSocket\n  -- unk26\nend",
      instructions: Object.freeze([
        Object.freeze({ offset: 0, op: "pushcons", operand: 1 }),
        Object.freeze({ offset: 2, op: "pushcons", operand: 2 }),
        Object.freeze({ offset: 4, op: "unk26", note: "-- unk26" }),
      ]),
    }),
    Object.freeze({
      name: "sockConnTimeout",
      dispatchBlockOffset: 140,
      dispatchBlockLength: 1288,
      compiledLen: 5,
      compiledOffset: 328,
      stackHeight: 2,
      unknown2: 10,
      lingo: "on sockConnTimeout\n  -- unk26\nend",
      instructions: Object.freeze([
        Object.freeze({ offset: 0, op: "pushcons", operand: 1 }),
        Object.freeze({ offset: 2, op: "pushcons", operand: 3 }),
        Object.freeze({ offset: 4, op: "unk26", note: "-- unk26" }),
      ]),
    }),
    Object.freeze({
      name: "socketMessageHandler",
      dispatchBlockOffset: 1428,
      dispatchBlockLength: 1456,
      compiledLen: 5,
      compiledOffset: 334,
      stackHeight: 2,
      unknown2: 25,
      lingo: "on socketMessageHandler\n  -- unk26\nend",
      instructions: Object.freeze([
        Object.freeze({ offset: 0, op: "pushcons", operand: 1 }),
        Object.freeze({ offset: 2, op: "pushcons", operand: 4 }),
        Object.freeze({ offset: 4, op: "unk26", note: "-- unk26" }),
      ]),
    }),
    Object.freeze({
      name: "executeCall",
      dispatchBlockOffset: 2884,
      dispatchBlockLength: 3024,
      compiledLen: 5,
      compiledOffset: 340,
      stackHeight: 2,
      unknown2: 83,
      lingo: "on executeCall\n  -- unk26\nend",
      instructions: Object.freeze([
        Object.freeze({ offset: 0, op: "pushcons", operand: 1 }),
        Object.freeze({ offset: 2, op: "pushcons", operand: 5 }),
        Object.freeze({ offset: 4, op: "unk26", note: "-- unk26" }),
      ]),
    }),
    Object.freeze({
      name: "ssm",
      dispatchBlockOffset: 5908,
      dispatchBlockLength: 2528,
      compiledLen: 5,
      compiledOffset: 346,
      stackHeight: 2,
      unknown2: 137,
      lingo: "on ssm\n  -- unk26\nend",
      instructions: Object.freeze([
        Object.freeze({ offset: 0, op: "pushcons", operand: 1 }),
        Object.freeze({ offset: 2, op: "pushcons", operand: 6 }),
        Object.freeze({ offset: 4, op: "unk26", note: "-- unk26" }),
      ]),
    }),
  ]),
  embeddedCodeBlocks: Object.freeze([
    Object.freeze({ offset: 0, length: 140, headerWord0: 20, headerWord1: 15, headerWord2: 150 }),
    Object.freeze({ offset: 140, length: 1288, headerWord0: 155, headerWord1: 0, headerWord2: 150 }),
    Object.freeze({ offset: 1428, length: 1456, headerWord0: 205, headerWord1: 0, headerWord2: 150 }),
    Object.freeze({ offset: 2884, length: 3024, headerWord0: 612, headerWord1: 0, headerWord2: 150 }),
    Object.freeze({ offset: 5908, length: 2528, headerWord0: 638, headerWord1: 0, headerWord2: 150 }),
    Object.freeze({ offset: 8436, length: 892, headerWord0: 146, headerWord1: 0, headerWord2: 150 }),
  ]),
});
