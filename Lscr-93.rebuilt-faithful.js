export const Lscr93LingoSource = `on exitFrame
  -- unk26
end`;

export const Lscr93 = Object.freeze({
  chunk: "Lscr-93.json",
  scriptNumber: 1,
  handlers: Object.freeze([
    Object.freeze({
      name: "exitFrame",
      lingo: "on exitFrame\n  -- unk26\nend",
      instructions: Object.freeze([
        Object.freeze({ offset: 0, op: "pushcons", operand: 1 }),
        Object.freeze({ offset: 2, op: "pushcons", operand: 2 }),
        Object.freeze({ offset: 4, op: "unk26", note: "-- unk26" }),
      ]),
    })
  ]),
});
