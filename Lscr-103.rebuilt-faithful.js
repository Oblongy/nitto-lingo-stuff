export const Lscr103LingoSource = `on runEngineStart
  -- unk26
end

on runEngineStop
  -- unk26
end

on runEngine
  -- unk26
end

on runEngineGaugeInit
  -- unk26
end

on runEngineGearUp
  -- unk26
end

on runEngineGearDown
  -- unk26
end

on runEngineSetBrake
  -- unk26
end

on runEngineSetClutch
  -- unk26
end

on runEngineSetNOS
  -- unk26
end

on runEngineDyno
  -- unk26
end`;

export const Lscr103 = Object.freeze({
  chunk: "Lscr-103.json",
  scriptNumber: 3,
  handlers: Object.freeze([
    Object.freeze({
      name: "runEngineStart",
      lingo: "on runEngineStart\n  -- unk26\nend",
      instructions: Object.freeze([
        Object.freeze({ offset: 0, op: "pushcons", operand: 1 }),
        Object.freeze({ offset: 2, op: "pushcons", operand: 2 }),
        Object.freeze({ offset: 4, op: "unk26", note: "-- unk26" }),
      ]),
    }),
    Object.freeze({
      name: "runEngineStop",
      lingo: "on runEngineStop\n  -- unk26\nend",
      instructions: Object.freeze([
        Object.freeze({ offset: 0, op: "pushcons", operand: 1 }),
        Object.freeze({ offset: 2, op: "pushcons", operand: 3 }),
        Object.freeze({ offset: 4, op: "unk26", note: "-- unk26" }),
      ]),
    }),
    Object.freeze({
      name: "runEngine",
      lingo: "on runEngine\n  -- unk26\nend",
      instructions: Object.freeze([
        Object.freeze({ offset: 0, op: "pushcons", operand: 1 }),
        Object.freeze({ offset: 2, op: "pushcons", operand: 4 }),
        Object.freeze({ offset: 4, op: "unk26", note: "-- unk26" }),
      ]),
    }),
    Object.freeze({
      name: "runEngineGaugeInit",
      lingo: "on runEngineGaugeInit\n  -- unk26\nend",
      instructions: Object.freeze([
        Object.freeze({ offset: 0, op: "pushcons", operand: 1 }),
        Object.freeze({ offset: 2, op: "pushcons", operand: 5 }),
        Object.freeze({ offset: 4, op: "unk26", note: "-- unk26" }),
      ]),
    }),
    Object.freeze({
      name: "runEngineGearUp",
      lingo: "on runEngineGearUp\n  -- unk26\nend",
      instructions: Object.freeze([
        Object.freeze({ offset: 0, op: "pushcons", operand: 1 }),
        Object.freeze({ offset: 2, op: "pushcons", operand: 6 }),
        Object.freeze({ offset: 4, op: "unk26", note: "-- unk26" }),
      ]),
    }),
    Object.freeze({
      name: "runEngineGearDown",
      lingo: "on runEngineGearDown\n  -- unk26\nend",
      instructions: Object.freeze([
        Object.freeze({ offset: 0, op: "pushcons", operand: 1 }),
        Object.freeze({ offset: 2, op: "pushcons", operand: 7 }),
        Object.freeze({ offset: 4, op: "unk26", note: "-- unk26" }),
      ]),
    }),
    Object.freeze({
      name: "runEngineSetBrake",
      lingo: "on runEngineSetBrake\n  -- unk26\nend",
      instructions: Object.freeze([
        Object.freeze({ offset: 0, op: "pushcons", operand: 1 }),
        Object.freeze({ offset: 2, op: "pushcons", operand: 8 }),
        Object.freeze({ offset: 4, op: "unk26", note: "-- unk26" }),
      ]),
    }),
    Object.freeze({
      name: "runEngineSetClutch",
      lingo: "on runEngineSetClutch\n  -- unk26\nend",
      instructions: Object.freeze([
        Object.freeze({ offset: 0, op: "pushcons", operand: 1 }),
        Object.freeze({ offset: 2, op: "pushcons", operand: 9 }),
        Object.freeze({ offset: 4, op: "unk26", note: "-- unk26" }),
      ]),
    }),
    Object.freeze({
      name: "runEngineSetNOS",
      lingo: "on runEngineSetNOS\n  -- unk26\nend",
      instructions: Object.freeze([
        Object.freeze({ offset: 0, op: "pushcons", operand: 1 }),
        Object.freeze({ offset: 2, op: "pushcons", operand: 10 }),
        Object.freeze({ offset: 4, op: "unk26", note: "-- unk26" }),
      ]),
    }),
    Object.freeze({
      name: "runEngineDyno",
      lingo: "on runEngineDyno\n  -- unk26\nend",
      instructions: Object.freeze([
        Object.freeze({ offset: 0, op: "pushcons", operand: 1 }),
        Object.freeze({ offset: 2, op: "pushcons", operand: 11 }),
        Object.freeze({ offset: 4, op: "unk26", note: "-- unk26" }),
      ]),
    })
  ]),
});
