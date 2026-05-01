## Lscr-102 pass44: clean.js corroboration audit

Purpose:
- compare `rightful.clean.js` against the byte-backed reconstruction layers for selected blocks
- keep corroboration separate from strict raw-backed deliverable truth

Compared file:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\rightful.clean.js`

Primary byte-backed comparators:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\rightful.ls`

## Block 03: `RaceEngine_parseConfig`

Observed in `rightful.clean.js`:
- `const attrs = parsed.getAProp("!ATTRIBUTES");`
- `this.hpi = parseInt(attrs.getAProp("hpi"), 10);`
- `this.stockRedLine = parseInt(attrs.getAProp("stockRedLine"), 10);`
- `this.redLine = parseInt(attrs.getAProp("redLine"), 10);`
- `this.revLimiter = parseInt(attrs.getAProp("revLimiter"), 10);`
- `this.nitrousRemaining = parseFloat(attrs.getAProp("nitrousRemaining"));`
- `this.nitrousTankSize = parseFloat(attrs.getAProp("nitrousTankSize"));`

Decision:
- useful corroboration only

Why:
- strict block `5972` still delivers the lower abstraction layer:
  - direct `!ATTRIBUTES(...)` sink rows
  - single-letter local carriers
- `rightful.clean.js` is already a normalized helper-side rewrite:
  - `attrs.getAProp(...)`
  - spelled-out config field names
- that rewrite is useful for mapping hypotheses, but it is not the strict raw-backed deliverable layer

## Block 07: `RaceEngine_stageDistance`

Observed in `rightful.clean.js`:

```js
RaceEngine_stageDistance() {
  if (this.staging) {
    this.rt = this._system().milliseconds - this.timeAnchor;
  }
  if (this.carV >= 1320) {
    this.carAccel = 0;
  }
  return this.rt;
}
```

Decision:
- not an exact corroboration for the current packet work

Why:
- strict/fairly-faithful block `11992` still preserves:
  - compact `raceType` compare ladder
  - unresolved `STG` call-head packet at `0x0075`
  - later clean `STG(s, carV, carAccel) -- 0x008C`
- `rightful.clean.js` omits that packet structure entirely and presents a higher-level simplification
- therefore block `07` clean.js must not be treated as mechanical proof for the current deliverable seam

## Block 08: `RaceEngine_runFrame`

Observed in `rightful.clean.js`:
- `this.avgFps = ((this.avgFps * this.fpsCount) + this.theActualTime) / 1.6682;`
- `this.rpm = this.rpm + (((this.theActualTime - this.c300) * 0.7299) / this.c300);`
- `this.tireScrub = (this.carV + 10) < this.speedoV ? 1 : 0;`

Decision:
- good corroboration for already-promoted math clusters

Why:
- those constants and assignments also appear in the byte-backed `__stack_Lscr102_block08` trace
- clean.js still remains a corroborating mirror rather than the source of truth

## Block 18: `RaceEngine_runLight`

Observed in `rightful.clean.js`:
- `this.sprite(this.flashSP)?.runEngineSetLightOnCB?.(name, this.amber1);`
- `this.sprite(this.flashSP)?.runEngineSetLightOnCB?.(name, this.amber2);`
- `this.sprite(this.flashSP)?.runEngineSetLightOnCB?.(name, this.amber3);`
- `this.sprite(this.flashSP)?.runEngineSetLightOnCB?.(name, this.green);`
- `this.sprite(this.flashSP)?.raceStartTimeCB?.();`

Decision:
- useful callback corroboration only

Why:
- block `18` byte-backed traces already prove the case/jump structure and callback family
- clean.js confirms the same callback destinations, but it is still a normalized higher-level mirror

## Result

- `rightful.clean.js` is a mixed corroboration layer:
  - block `03`: useful field-name mapping corroboration, but broader than the strict direct `!ATTRIBUTES(...)` layer
  - block `07`: not an exact corroboration; it simplifies away the live packet seam
  - block `08`: good corroboration for already-promoted constant/math clusters
  - block `18`: good corroboration for callback destinations

- do not treat `rightful.clean.js` as uniformly mechanical or byte-perfect for final-source promotion
