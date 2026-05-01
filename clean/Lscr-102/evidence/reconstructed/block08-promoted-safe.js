"use strict";

// Lscr-102 block 8 promotion-safe island appendix.
// These entries contain no unresolved opcode and no stack-hole expression.

class Lscr102Block08PromotedSafe {
  constructor(host = {}) {
    this.host = host;
    this.trace = [];
  }

  __line(island, kind, value, offset) {
    this.trace.push({ island, kind, value, offset });
    return value;
  }

  runPromotedBlock08() {
    this.island_000();
    this.island_002();
    this.island_005();
    this.island_008();
    this.island_009();
    this.island_012();
    this.island_014();
    this.island_015();
    this.island_019();
    this.island_020();
    this.island_021();
    this.island_024();
    this.island_026();
    this.island_027();
    this.island_028();
    this.island_029();
    this.island_030();
    this.island_033();
    this.island_034();
    this.island_035();
    this.island_036();
    this.island_037();
    this.island_038();
    this.island_039();
    this.island_040();
    this.island_041();
    this.island_042();
    this.island_043();
    this.island_044();
    this.island_045();
    this.island_046();
    this.island_047();
    this.island_048();
    this.island_049();
    this.island_050();
    this.island_051();
    this.island_052();
    this.island_053();
    this.island_055();
    this.island_058();
    this.island_059();
    this.island_061();
    this.island_062();
    this.island_063();
    this.island_064();
    this.island_065();
    this.island_066();
    this.island_068();
    this.island_069();
    this.island_070();
    this.island_071();
    this.island_072();
    this.island_073();
    this.island_074();
    this.island_076();
    this.island_077();
    this.island_078();
    this.island_079();
    this.island_080();
    this.island_081();
    this.island_082();
    this.island_083();
    this.island_085();
    this.island_086();
    this.island_087();
    this.island_088();
    this.island_089();
    this.island_090();
    this.island_091();
    this.island_092();
    this.island_093();
    this.island_094();
    this.island_096();
    this.island_098();
    this.island_099();
    this.island_100();
    this.island_101();
    this.island_103();
    this.island_104();
    this.island_105();
    this.island_106();
    this.island_107();
    this.island_108();
    this.island_109();
    this.island_110();
    this.island_111();
    this.island_112();
    this.island_113();
    this.island_115();
    this.island_116();
    this.island_117();
    this.island_118();
    this.island_119();
    this.island_120();
    this.island_121();
    this.island_122();
    this.island_123();
    this.island_124();
    this.island_125();
    this.island_126();
    this.island_127();
    this.island_128();
    this.island_129();
    this.island_130();
    this.island_131();
    this.island_132();
    this.island_134();
    this.island_136();
    this.island_137();
    this.island_138();
    this.island_140();
    this.island_141();
    this.island_142();
    this.island_143();
    this.island_144();
    this.island_145();
    this.island_146();
    this.island_147();
    this.island_148();
    this.island_149();
    this.island_150();
    this.island_151();
    this.island_152();
    this.island_153();
    this.island_154();
    this.island_155();
    this.island_156();
    this.island_157();
    this.island_158();
    this.island_159();
    this.island_160();
    this.island_161();
    this.island_162();
    this.island_163();
    this.island_164();
    this.island_165();
    this.island_166();
    this.island_167();
    this.island_168();
    this.island_169();
    this.island_170();
    this.island_171();
    this.island_172();
    this.island_173();
    this.island_174();
    this.island_175();
    this.island_176();
    this.island_177();
    this.island_178();
    this.island_179();
    this.island_180();
    this.island_181();
    this.island_182();
    this.island_183();
    this.island_184();
    this.island_185();
    this.island_186();
    this.island_187();
    this.island_188();
    this.island_190();
    this.island_192();
    this.island_193();
    this.island_194();
    this.island_195();
    this.island_197();
    this.island_198();
    this.island_199();
    this.island_200();
    this.island_201();
    this.island_202();
    this.island_203();
    this.island_204();
    this.island_205();
    this.island_206();
    this.island_207();
    this.island_209();
    this.island_210();
    this.island_211();
    this.island_212();
    this.island_213();
    this.island_214();
    this.island_215();
    this.island_216();
    this.island_217();
    this.island_218();
    this.island_219();
    this.island_222();
    this.island_223();
    this.island_224();
    this.island_225();
    this.island_226();
    this.island_227();
    this.island_228();
    this.island_229();
    this.island_230();
    this.island_231();
    this.island_232();
    this.island_233();
    this.island_235();
    this.island_237();
    this.island_238();
    this.island_239();
    this.island_240();
    this.island_241();
    this.island_242();
    this.island_243();
    this.island_244();
    this.island_245();
    this.island_246();
    this.island_247();
    this.island_249();
    this.island_250();
    this.island_251();
    this.island_252();
    this.island_253();
    this.island_254();
    this.island_255();
    this.island_256();
    this.island_257();
    this.island_258();
    this.island_260();
    this.island_261();
    this.island_262();
    this.island_263();
    this.island_264();
    this.island_265();
    this.island_266();
    this.island_267();
    this.island_268();
    this.island_269();
    this.island_270();
    this.island_271();
    this.island_272();
    this.island_273();
    this.island_274();
    this.island_275();
    this.island_276();
    this.island_277();
    this.island_278();
    this.island_280();
    this.island_281();
    this.island_283();
    this.island_284();
    this.island_285();
    this.island_286();
    this.island_287();
    this.island_288();
    this.island_289();
    this.island_290();
    this.island_291();
    this.island_292();
    this.island_293();
    this.island_294();
    this.island_295();
    this.island_296();
    this.island_297();
    this.island_299();
    this.island_300();
    this.island_301();
    this.island_302();
    this.island_303();
    this.island_305();
    this.island_306();
    this.island_307();
    this.island_309();
    this.island_310();
    this.island_311();
    this.island_313();
    this.island_314();
    this.island_315();
    this.island_317();
    this.island_318();
    this.island_319();
    this.island_321();
    this.island_324();
    this.island_325();
    this.island_326();
    this.island_327();
    this.island_328();
    this.island_329();
    this.island_330();
    this.island_331();
    this.island_332();
    this.island_333();
    this.island_334();
    this.island_335();
    this.island_336();
    this.island_337();
    this.island_338();
    this.island_339();
    this.island_340();
    this.island_341();
    this.island_342();
    this.island_343();
    this.island_344();
    this.island_345();
    this.island_346();
    this.island_348();
    this.island_349();
    this.island_351();
    this.island_352();
    this.island_354();
    this.island_355();
    this.island_357();
    this.island_358();
    this.island_360();
    this.island_361();
    this.island_363();
    this.island_364();
    this.island_366();
    this.island_367();
    this.island_369();
    this.island_370();
    this.island_372();
    this.island_373();
    this.island_375();
    this.island_376();
    this.island_377();
    this.island_379();
    this.island_380();
    this.island_382();
    this.island_383();
    this.island_384();
    this.island_386();
    this.island_387();
    this.island_389();
    this.island_390();
    this.island_391();
    this.island_392();
    this.island_393();
    this.island_394();
    this.island_396();
    this.island_397();
    this.island_398();
    this.island_399();
    this.island_401();
    this.island_402();
    this.island_403();
    this.island_404();
    this.island_405();
    this.island_406();
    this.island_407();
    this.island_408();
    this.island_409();
    this.island_411();
    this.island_412();
    this.island_414();
    this.island_415();
    this.island_416();
    this.island_418();
    this.island_419();
    this.island_420();
    this.island_422();
    this.island_423();
    this.island_424();
    this.island_425();
    this.island_426();
    this.island_427();
    this.island_428();
    this.island_429();
    this.island_430();
    this.island_431();
    this.island_432();
    this.island_433();
    this.island_434();
    this.island_436();
    this.island_437();
    this.island_439();
    this.island_440();
    this.island_442();
    this.island_443();
    this.island_445();
    this.island_446();
    this.island_448();
    this.island_449();
    this.island_451();
    this.island_452();
    this.island_454();
    this.island_455();
    this.island_457();
    this.island_458();
    this.island_460();
    this.island_461();
    this.island_463();
    this.island_464();
    this.island_465();
    this.island_466();
    this.island_467();
    this.island_468();
    this.island_469();
    this.island_470();
    this.island_471();
    this.island_472();
    this.island_473();
    this.island_474();
    this.island_475();
    this.island_476();
    this.island_478();
    this.island_479();
    this.island_480();
    this.island_481();
    this.island_482();
    this.island_483();
    this.island_484();
    this.island_486();
    this.island_487();
    this.island_489();
    this.island_490();
    this.island_491();
    this.island_492();
    this.island_493();
    this.island_495();
    this.island_496();
    this.island_497();
    this.island_498();
    this.island_499();
    this.island_501();
    this.island_503();
    this.island_504();
    this.island_505();
    this.island_506();
    this.island_507();
    this.island_509();
    this.island_510();
    this.island_511();
    this.island_512();
    this.island_513();
    this.island_515();
    this.island_516();
    this.island_517();
    this.island_519();
    this.island_520();
    this.island_521();
    this.island_522();
    this.island_523();
    this.island_524();
    this.island_525();
    this.island_526();
    this.island_527();
    this.island_528();
    this.island_530();
    this.island_531();
    this.island_532();
    this.island_533();
    this.island_534();
    this.island_535();
    this.island_536();
    this.island_537();
    this.island_538();
    this.island_539();
    this.island_541();
    this.island_542();
    this.island_543();
    this.island_544();
    this.island_545();
    this.island_546();
    this.island_547();
    this.island_548();
    this.island_549();
    this.island_550();
    this.island_552();
    this.island_553();
    this.island_554();
    this.island_555();
    this.island_556();
    this.island_557();
    this.island_558();
    this.island_559();
    this.island_561();
    this.island_562();
    this.island_564();
    this.island_565();
    this.island_566();
    this.island_567();
    this.island_568();
    this.island_569();
    this.island_570();
    this.island_571();
    this.island_572();
    this.island_574();
    this.island_575();
    this.island_577();
    this.island_578();
    this.island_581();
    this.island_582();
    return this.trace;
  }

  island_000() {
    const island = { index: 0, start: "0x0014", end: "0x0017" };
    this.__line(island, "stackTail", "param_c0", "0x0017");
    return this.trace;
  }

  island_002() {
    const island = { index: 2, start: "0x0018", end: "0x001B" };
    this.__line(island, "stackTail", "c0", "0x001B");
    return this.trace;
  }

  island_005() {
    const island = { index: 5, start: "0x0020", end: "0x0023" };
    this.__line(island, "stackTail", "c0", "0x0023");
    return this.trace;
  }

  island_008() {
    const island = { index: 8, start: "0x0027", end: "0x002A" };
    this.__line(island, "jump", "jump 22", "0x0027");
    return this.trace;
  }

  island_009() {
    const island = { index: 9, start: "0x002A", end: "0x002D" };
    this.__line(island, "stackTail", "param_c0", "0x002D");
    return this.trace;
  }

  island_012() {
    const island = { index: 12, start: "0x0035", end: "0x003C" };
    this.__line(island, "assign", "c0 = c1", "0x0039");
    return this.trace;
  }

  island_014() {
    const island = { index: 14, start: "0x003D", end: "0x0049" };
    this.__line(island, "branch", "if not (timeFromLastFrame > c0) then goto 0x0050", "0x0045");
    return this.trace;
  }

  island_015() {
    const island = { index: 15, start: "0x0049", end: "0x0050" };
    this.__line(island, "stackTail", "_system | milliseconds", "0x0050");
    return this.trace;
  }

  island_019() {
    const island = { index: 19, start: "0x005F", end: "0x0068" };
    this.__line(island, "assign", "theActualTime = theTime", "0x0064");
    return this.trace;
  }

  island_020() {
    const island = { index: 20, start: "0x0068", end: "0x0074" };
    this.__line(island, "branch", "if not (theTime > c0_2) then jump 12", "0x0070");
    return this.trace;
  }

  island_021() {
    const island = { index: 21, start: "0x0074", end: "0x007C" };
    this.__line(island, "assign", "theTime = c0_2", "0x0079");
    return this.trace;
  }

  island_024() {
    const island = { index: 24, start: "0x007F", end: "0x0088" };
    this.__line(island, "stackTail", "(avgFps * fpsCount)", "0x0088");
    return this.trace;
  }

  island_026() {
    const island = { index: 26, start: "0x0096", end: "0x00A1" };
    this.__line(island, "assign", "timeFromLastFrame = milliseconds", "0x009D");
    this.__line(island, "expr", "_system", "0x00A0");
    return this.trace;
  }

  island_027() {
    const island = { index: 27, start: "0x00A1", end: "0x00AA" };
    this.__line(island, "expr", "calculateExtraHpi()", "0x00A9");
    return this.trace;
  }

  island_028() {
    const island = { index: 28, start: "0x00AA", end: "0x00CC" };
    this.__line(island, "assign", "c0 = 0.7451", "0x00C8");
    this.__line(island, "expr", "(theTime * theTime)", "0x00CB");
    this.__line(island, "stackTail", "(carV * theTime) | (c0_5 * carAccel)", "0x00CC");
    return this.trace;
  }

  island_029() {
    const island = { index: 29, start: "0x00CC", end: "0x00D8" };
    this.__line(island, "branch", "if not (gearValue = c0) then jump 718", "0x00D4");
    return this.trace;
  }

  island_030() {
    const island = { index: 30, start: "0x00D8", end: "0x00EA" };
    this.__line(island, "stackTail", "((hpi + boostCreatedPower) + systemPower) | ECUtune", "0x00EA");
    return this.trace;
  }

  island_033() {
    const island = { index: 33, start: "0x010E", end: "0x0125" };
    this.__line(island, "assign", "timeFromLastFrame = (((NOS * rpm) / stockRedLine) / c1_25)", "0x0121");
    return this.trace;
  }

  island_034() {
    const island = { index: 34, start: "0x0125", end: "0x0130" };
    this.__line(island, "branch", "if not (timeFromLastFrame > NOS) then jump 11", "0x012C");
    return this.trace;
  }

  island_035() {
    const island = { index: 35, start: "0x0130", end: "0x0138" };
    this.__line(island, "assign", "timeFromLastFrame = NOS", "0x0134");
    return this.trace;
  }

  island_036() {
    const island = { index: 36, start: "0x0138", end: "0x014B" };
    this.__line(island, "expr", "((hp * c1) - 0.6966)", "0x014A");
    this.__line(island, "stackTail", "hp", "0x014B");
    return this.trace;
  }

  island_037() {
    const island = { index: 37, start: "0x014B", end: "0x0163" };
    this.__line(island, "assign", "nitrousRemaining = (nitrousRemaining - ((NOS / c10000) * c2))", "0x015F");
    return this.trace;
  }

  island_038() {
    const island = { index: 38, start: "0x0163", end: "0x0183" };
    this.__line(island, "expr", "runEngineNOSCB(((nitrousRemaining / nitrousTankSize) * c100))", "0x0182");
    this.__line(island, "stackTail", "sprite(flashSP)", "0x0183");
    return this.trace;
  }

  island_039() {
    const island = { index: 39, start: "0x0183", end: "0x0186" };
    this.__line(island, "jump", "jump 21", "0x0183");
    return this.trace;
  }

  island_040() {
    const island = { index: 40, start: "0x0186", end: "0x0198" };
    this.__line(island, "assign", "hp = (hp + (hp * c1))", "0x0194");
    return this.trace;
  }

  island_041() {
    const island = { index: 41, start: "0x0198", end: "0x01A5" };
    this.__line(island, "assign", "hp = (hp * param_c0)", "0x01A1");
    return this.trace;
  }

  island_042() {
    const island = { index: 42, start: "0x01A5", end: "0x01B6" };
    this.__line(island, "branch", "if not (rpm > (revLimiter + c200)) then jump 17", "0x01B2");
    return this.trace;
  }

  island_043() {
    const island = { index: 43, start: "0x01B6", end: "0x01C4" };
    this.__line(island, "assign", "hp = (hp / c2)", "0x01C0");
    return this.trace;
  }

  island_044() {
    const island = { index: 44, start: "0x01C4", end: "0x01D6" };
    this.__line(island, "assign", "theTime = ((hp * tqFlyFactor) / rpm)", "0x01D2");
    return this.trace;
  }

  island_045() {
    const island = { index: 45, start: "0x01D6", end: "0x01EC" };
    this.__line(island, "assign", "_system = (((theTime * gr) * fgr) * rpmGearConversion)", "0x01E8");
    return this.trace;
  }

  island_046() {
    const island = { index: 46, start: "0x01EC", end: "0x01F8" };
    this.__line(island, "assign", "milliseconds = (_system / r)", "0x01F4");
    return this.trace;
  }

  island_047() {
    const island = { index: 47, start: "0x01F8", end: "0x0205" };
    this.__line(island, "assign", "c1000 = (negTq * c9)", "0x0201");
    return this.trace;
  }

  island_048() {
    const island = { index: 48, start: "0x0205", end: "0x0218" };
    this.__line(island, "jump", "branch 20801", "0x0215");
    this.__line(island, "stackTail", "param_c0 | (stockRedLine + c1000) | 0.7511", "0x0218");
    return this.trace;
  }

  island_049() {
    const island = { index: 49, start: "0x0218", end: "0x0233" };
    this.__line(island, "assign", "id_16693 = 0.5639", "0x0227");
    this.__line(island, "branch", "if not ((theActualTime - c299) < theActualTime) then goto 0x003C", "0x022F");
    this.__line(island, "stackTail", "rpm", "0x0233");
    return this.trace;
  }

  island_050() {
    const island = { index: 50, start: "0x0233", end: "0x023E" };
    this.__line(island, "assign", "c0_2 = (milliseconds - c1000)", "0x023A");
    return this.trace;
  }

  island_051() {
    const island = { index: 51, start: "0x023E", end: "0x0249" };
    this.__line(island, "branch", "if not (c0_2 > c0) then goto 0x026C", "0x0245");
    return this.trace;
  }

  island_052() {
    const island = { index: 52, start: "0x0249", end: "0x0269" };
    this.__line(island, "assign", "c1000 = (rpm + (((theActualTime - c300) * 0.7299) / c300))", "0x0265");
    this.__line(island, "expr", "c0_2", "0x0268");
    this.__line(island, "stackTail", "c1000", "0x0269");
    return this.trace;
  }

  island_053() {
    const island = { index: 53, start: "0x0269", end: "0x026C" };
    this.__line(island, "jump", "jump 0x027D", "0x0269");
    return this.trace;
  }

  island_055() {
    const island = { index: 55, start: "0x027A", end: "0x027D" };
    this.__line(island, "stackTail", "c1000", "0x027D");
    return this.trace;
  }

  island_058() {
    const island = { index: 58, start: "0x0290", end: "0x0298" };
    this.__line(island, "assign", "c1000 = c0", "0x0294");
    return this.trace;
  }

  island_059() {
    const island = { index: 59, start: "0x0298", end: "0x029B" };
    this.__line(island, "stackTail", "milliseconds", "0x029B");
    return this.trace;
  }

  island_061() {
    const island = { index: 61, start: "0x02A3", end: "0x02B5" };
    this.__line(island, "expr", "0.7767", "0x02B4");
    this.__line(island, "stackTail", "avgFps | (w / g)", "0x02B5");
    return this.trace;
  }

  island_062() {
    const island = { index: 62, start: "0x02B5", end: "0x02C1" };
    this.__line(island, "branch", "if not (rpm > revLimiter) then jump 11", "0x02BD");
    return this.trace;
  }

  island_063() {
    const island = { index: 63, start: "0x02C1", end: "0x02C9" };
    this.__line(island, "assign", "fpsCount = revLimiterDeceleration", "0x02C5");
    return this.trace;
  }

  island_064() {
    const island = { index: 64, start: "0x02C9", end: "0x02D0" };
    this.__line(island, "jump", "branch 15", "0x02CD");
    this.__line(island, "stackTail", "brake", "0x02D0");
    return this.trace;
  }

  island_065() {
    const island = { index: 65, start: "0x02D0", end: "0x02D9" };
    this.__line(island, "assign", "carAccel = brakeDecleration", "0x02D5");
    return this.trace;
  }

  island_066() {
    const island = { index: 66, start: "0x02D9", end: "0x02DC" };
    this.__line(island, "jump", "jump 13", "0x02D9");
    return this.trace;
  }

  island_068() {
    const island = { index: 68, start: "0x02E6", end: "0x02F9" };
    this.__line(island, "assign", "carV = (carV + (carAccel * theTime))", "0x02F5");
    return this.trace;
  }

  island_069() {
    const island = { index: 69, start: "0x02F9", end: "0x0305" };
    this.__line(island, "branch", "if not (carV <= c0) then jump 21", "0x0301");
    return this.trace;
  }

  island_070() {
    const island = { index: 70, start: "0x0305", end: "0x030E" };
    this.__line(island, "assign", "carAccel = c0", "0x030A");
    return this.trace;
  }

  island_071() {
    const island = { index: 71, start: "0x030E", end: "0x0317" };
    this.__line(island, "assign", "carV = c0", "0x0313");
    return this.trace;
  }

  island_072() {
    const island = { index: 72, start: "0x0317", end: "0x0320" };
    this.__line(island, "assign", "speedoV = carV", "0x031C");
    return this.trace;
  }

  island_073() {
    const island = { index: 73, start: "0x0320", end: "0x0332" };
    this.__line(island, "assign", "engineV = (engineV + (fpsCount * theTime))", "0x032E");
    return this.trace;
  }

  island_074() {
    const island = { index: 74, start: "0x0332", end: "0x0337" };
    this.__line(island, "stackTail", "engineV", "0x0337");
    return this.trace;
  }

  island_076() {
    const island = { index: 76, start: "0x033E", end: "0x0347" };
    this.__line(island, "assign", "engineV = c5", "0x0343");
    return this.trace;
  }

  island_077() {
    const island = { index: 77, start: "0x0347", end: "0x034A" };
    this.__line(island, "jump", "jump 0x0018", "0x0347");
    return this.trace;
  }

  island_078() {
    const island = { index: 78, start: "0x034A", end: "0x0356" };
    this.__line(island, "branch", "if not (engineV > c100) then jump 12", "0x0352");
    return this.trace;
  }

  island_079() {
    const island = { index: 79, start: "0x0356", end: "0x035F" };
    this.__line(island, "assign", "engineV = c100", "0x035B");
    return this.trace;
  }

  island_080() {
    const island = { index: 80, start: "0x035F", end: "0x0389" };
    this.__line(island, "expr", "0.7478", "0x0388");
    this.__line(island, "stackTail", "engineV | (gConvSlipA * r) | ((0.7811 * gr) * c50) | (fgr * rpmGearConversion)", "0x0389");
    return this.trace;
  }

  island_081() {
    const island = { index: 81, start: "0x0389", end: "0x0392" };
    this.__line(island, "expr", "getTorque()", "0x0391");
    return this.trace;
  }

  island_082() {
    const island = { index: 82, start: "0x0392", end: "0x03A0" };
    this.__line(island, "assign", "mph = (carV * vToMph)", "0x039C");
    return this.trace;
  }

  island_083() {
    const island = { index: 83, start: "0x03A0", end: "0x03A3" };
    this.__line(island, "jump", "jump 0x0647", "0x03A0");
    return this.trace;
  }

  island_085() {
    const island = { index: 85, start: "0x03B3", end: "0x03BB" };
    this.__line(island, "assign", "c0 = c0", "0x03B7");
    return this.trace;
  }

  island_086() {
    const island = { index: 86, start: "0x03BB", end: "0x03CE" };
    this.__line(island, "assign", "hp = ((posTq * rpm) / tqFlyFactor)", "0x03CA");
    return this.trace;
  }

  island_087() {
    const island = { index: 87, start: "0x03CE", end: "0x03EF" };
    this.__line(island, "assign", "c1 = (((((hpi + boostCreatedPower) + systemPower) + ECUtune) + compressionPowerDelta) - engineDamage)", "0x03EB");
    return this.trace;
  }

  island_088() {
    const island = { index: 88, start: "0x03EF", end: "0x03F8" };
    this.__line(island, "branch", "if not (raceGas > VOID) then goto 0x005C", "0x03F4");
    return this.trace;
  }

  island_089() {
    const island = { index: 89, start: "0x03F8", end: "0x040F" };
    this.__line(island, "assign", "calculateExtraHpi = (((c5 * theActualTime) * hp) / c1000)", "0x040B");
    return this.trace;
  }

  island_090() {
    const island = { index: 90, start: "0x040F", end: "0x041A" };
    this.__line(island, "branch", "if not (calculateExtraHpi > raceGas) then goto 0x043B", "0x0416");
    return this.trace;
  }

  island_091() {
    const island = { index: 91, start: "0x041A", end: "0x042F" };
    this.__line(island, "assign", "c1 = (c1 + ((c0_02 * raceGas) / calculateExtraHpi))", "0x042B");
    return this.trace;
  }

  island_092() {
    const island = { index: 92, start: "0x042F", end: "0x0435" };
    this.__line(island, "assign", "raceGas = VOID", "0x0431");
    return this.trace;
  }

  island_093() {
    const island = { index: 93, start: "0x0435", end: "0x0438" };
    this.__line(island, "jump", "jump 28", "0x0435");
    return this.trace;
  }

  island_094() {
    const island = { index: 94, start: "0x0438", end: "0x043B" };
    this.__line(island, "stackTail", "c1", "0x043B");
    return this.trace;
  }

  island_096() {
    const island = { index: 96, start: "0x0444", end: "0x0451" };
    this.__line(island, "assign", "raceGas = (raceGas - calculateExtraHpi)", "0x044D");
    return this.trace;
  }

  island_098() {
    const island = { index: 98, start: "0x0466", end: "0x047D" };
    this.__line(island, "assign", "timeFromLastFrame = (((NOS * rpm) / stockRedLine) / c1_25)", "0x0479");
    return this.trace;
  }

  island_099() {
    const island = { index: 99, start: "0x047D", end: "0x0488" };
    this.__line(island, "branch", "if not (timeFromLastFrame > NOS) then jump 11", "0x0484");
    return this.trace;
  }

  island_100() {
    const island = { index: 100, start: "0x0488", end: "0x0490" };
    this.__line(island, "assign", "timeFromLastFrame = NOS", "0x048C");
    return this.trace;
  }

  island_101() {
    const island = { index: 101, start: "0x0490", end: "0x04A1" };
    this.__line(island, "expr", "2.2016", "0x04A0");
    this.__line(island, "stackTail", "hp | (hp * c1)", "0x04A1");
    return this.trace;
  }

  island_103() {
    const island = { index: 103, start: "0x04A7", end: "0x04BF" };
    this.__line(island, "assign", "nitrousRemaining = (nitrousRemaining - ((NOS / c10000) * c2))", "0x04BB");
    return this.trace;
  }

  island_104() {
    const island = { index: 104, start: "0x04BF", end: "0x04DF" };
    this.__line(island, "expr", "runEngineNOSCB(((nitrousRemaining / nitrousTankSize) * c100))", "0x04DE");
    this.__line(island, "stackTail", "sprite(flashSP)", "0x04DF");
    return this.trace;
  }

  island_105() {
    const island = { index: 105, start: "0x04DF", end: "0x04E2" };
    this.__line(island, "jump", "jump 21", "0x04DF");
    return this.trace;
  }

  island_106() {
    const island = { index: 106, start: "0x04E2", end: "0x04F4" };
    this.__line(island, "assign", "hp = (hp + (hp * c1))", "0x04F0");
    return this.trace;
  }

  island_107() {
    const island = { index: 107, start: "0x04F4", end: "0x0511" };
    this.__line(island, "assign", "hp = ((c100 - detuneHp) * (0.7489 / c100))", "0x050D");
    this.__line(island, "expr", "param_c0", "0x0510");
    this.__line(island, "stackTail", "hp", "0x0511");
    return this.trace;
  }

  island_108() {
    const island = { index: 108, start: "0x0511", end: "0x0523" };
    this.__line(island, "assign", "theTime = ((hp * tqFlyFactor) / rpm)", "0x051F");
    return this.trace;
  }

  island_109() {
    const island = { index: 109, start: "0x0523", end: "0x0539" };
    this.__line(island, "assign", "_system = (((theTime * gr) * fgr) * rpmGearConversion)", "0x0535");
    return this.trace;
  }

  island_110() {
    const island = { index: 110, start: "0x0539", end: "0x0545" };
    this.__line(island, "assign", "milliseconds = (_system / r)", "0x0541");
    return this.trace;
  }

  island_111() {
    const island = { index: 111, start: "0x0545", end: "0x0551" };
    this.__line(island, "assign", "carV = (param_c0 * c8)", "0x054D");
    return this.trace;
  }

  island_112() {
    const island = { index: 112, start: "0x0551", end: "0x0559" };
    this.__line(island, "assign", "c0_5 = c0", "0x0555");
    return this.trace;
  }

  island_113() {
    const island = { index: 113, start: "0x0559", end: "0x0564" };
    this.__line(island, "branch", "if not (carV < c1) then jump 22", "0x0560");
    return this.trace;
  }

  island_115() {
    const island = { index: 115, start: "0x0577", end: "0x0589" };
    this.__line(island, "assign", "carAccel = ((w * c0_005) * carAccel)", "0x0585");
    return this.trace;
  }

  island_116() {
    const island = { index: 116, start: "0x0589", end: "0x059A" };
    this.__line(island, "assign", "gearValue = ((c0_016 * w) + c0_5)", "0x0596");
    return this.trace;
  }

  island_117() {
    const island = { index: 117, start: "0x059A", end: "0x05A5" };
    this.__line(island, "branch", "if not (gearValue < c0) then jump 11", "0x05A1");
    return this.trace;
  }

  island_118() {
    const island = { index: 118, start: "0x05A5", end: "0x05AD" };
    this.__line(island, "assign", "gearValue = c0", "0x05A9");
    return this.trace;
  }

  island_119() {
    const island = { index: 119, start: "0x05AD", end: "0x05C4" };
    this.__line(island, "assign", "hpi = ((carV * carV) + 0.751)", "0x05C0");
    this.__line(island, "expr", "DAfp", "0x05C3");
    return this.trace;
  }

  island_120() {
    const island = { index: 120, start: "0x05C4", end: "0x05CF" };
    this.__line(island, "branch", "if not (hpi < c0) then goto 0x05DA", "0x05CB");
    return this.trace;
  }

  island_121() {
    const island = { index: 121, start: "0x05CF", end: "0x05D7" };
    this.__line(island, "assign", "hpi = c0", "0x05D3");
    return this.trace;
  }

  island_122() {
    const island = { index: 122, start: "0x05D7", end: "0x05DA" };
    this.__line(island, "stackTail", "milliseconds", "0x05DA");
    return this.trace;
  }

  island_123() {
    const island = { index: 123, start: "0x05DA", end: "0x05E7" };
    this.__line(island, "expr", "0.7255", "0x05E6");
    this.__line(island, "stackTail", "(gearValue + hpi)", "0x05E7");
    return this.trace;
  }

  island_124() {
    const island = { index: 124, start: "0x05E7", end: "0x05F4" };
    this.__line(island, "assign", "boostCreatedPower = (carV * vToMph)", "0x05F0");
    return this.trace;
  }

  island_125() {
    const island = { index: 125, start: "0x05F4", end: "0x05FC" };
    this.__line(island, "assign", "systemPower = UsInit", "0x05F8");
    return this.trace;
  }

  island_126() {
    const island = { index: 126, start: "0x05FC", end: "0x0605" };
    this.__line(island, "branch", "if not (tireStick > VOID) then goto 0x0014", "0x0601");
    return this.trace;
  }

  island_127() {
    const island = { index: 127, start: "0x0605", end: "0x0616" };
    this.__line(island, "assign", "systemPower = (systemPower + (UsInit * c0_05))", "0x0612");
    return this.trace;
  }

  island_128() {
    const island = { index: 128, start: "0x0616", end: "0x061E" };
    this.__line(island, "assign", "ECUtune = UkInit", "0x061A");
    return this.trace;
  }

  island_129() {
    const island = { index: 129, start: "0x061E", end: "0x0629" };
    this.__line(island, "branch", "if not (boostCreatedPower > c0) then goto 0x0672", "0x0625");
    return this.trace;
  }

  island_130() {
    const island = { index: 130, start: "0x0629", end: "0x0635" };
    this.__line(island, "assign", "compressionPowerDelta = (boostCreatedPower / c100)", "0x0631");
    return this.trace;
  }

  island_131() {
    const island = { index: 131, start: "0x0635", end: "0x0640" };
    this.__line(island, "branch", "if not (compressionPowerDelta > c1) then goto 0x064B", "0x063C");
    return this.trace;
  }

  island_132() {
    const island = { index: 132, start: "0x0640", end: "0x0647" };
    this.__line(island, "assign", "compressionPowerDelta = c1", "0x0644");
    return this.trace;
  }

  island_134() {
    const island = { index: 134, start: "0x0648", end: "0x064B" };
    this.__line(island, "stackTail", "compressionPowerDelta", "0x064B");
    return this.trace;
  }

  island_136() {
    const island = { index: 136, start: "0x0654", end: "0x065F" };
    this.__line(island, "assign", "systemPower = (systemPower + compressionPowerDelta)", "0x065B");
    return this.trace;
  }

  island_137() {
    const island = { index: 137, start: "0x065F", end: "0x066F" };
    this.__line(island, "assign", "ECUtune = (ECUtune - (compressionPowerDelta * c0_09))", "0x066B");
    return this.trace;
  }

  island_138() {
    const island = { index: 138, start: "0x066F", end: "0x0672" };
    this.__line(island, "stackTail", "ECUtune", "0x0672");
    return this.trace;
  }

  island_140() {
    const island = { index: 140, start: "0x067A", end: "0x0682" };
    this.__line(island, "assign", "ECUtune = c0_6", "0x067E");
    return this.trace;
  }

  island_141() {
    const island = { index: 141, start: "0x0682", end: "0x0689" };
    this.__line(island, "jump", "branch 0x06EF", "0x0686");
    this.__line(island, "stackTail", "slip", "0x0689");
    return this.trace;
  }

  island_142() {
    const island = { index: 142, start: "0x0689", end: "0x06B1" };
    this.__line(island, "expr", "0.7734", "0x06B0");
    this.__line(island, "stackTail", "avgFps | ((ECUtune * N) / 0.5639) | (ECUtune * N) | (w / g)", "0x06B1");
    return this.trace;
  }

  island_143() {
    const island = { index: 143, start: "0x06B1", end: "0x06B4" };
    this.__line(island, "jump", "jump 0x06EC", "0x06B1");
    return this.trace;
  }

  island_144() {
    const island = { index: 144, start: "0x06B4", end: "0x06C7" };
    this.__line(island, "expr", "0.7734", "0x06C6");
    this.__line(island, "stackTail", "avgFps | (w / g)", "0x06C7");
    return this.trace;
  }

  island_145() {
    const island = { index: 145, start: "0x06C7", end: "0x06D0" };
    this.__line(island, "assign", "speedoV = carV", "0x06CC");
    return this.trace;
  }

  island_146() {
    const island = { index: 146, start: "0x06D0", end: "0x06D6" };
    this.__line(island, "assign", "slip = 0", "0x06D2");
    return this.trace;
  }

  island_147() {
    const island = { index: 147, start: "0x06D6", end: "0x06E9" };
    this.__line(island, "expr", "runEngineTractionLightCB(0)", "0x06E8");
    this.__line(island, "stackTail", "sprite(flashSP)", "0x06E9");
    return this.trace;
  }

  island_148() {
    const island = { index: 148, start: "0x06E9", end: "0x06EC" };
    this.__line(island, "jump", "jump 0x0758", "0x06E9");
    return this.trace;
  }

  island_149() {
    const island = { index: 149, start: "0x06EC", end: "0x06EF" };
    this.__line(island, "stackTail", "avgFps", "0x06EF");
    return this.trace;
  }

  island_150() {
    const island = { index: 150, start: "0x06EF", end: "0x0726" };
    this.__line(island, "expr", "0.7734", "0x0725");
    this.__line(island, "stackTail", "((systemPower * N) = 0.5701) | (carV + c2) | 1.6693[id_5127] | (systemPower * N) | (w / g)", "0x0726");
    return this.trace;
  }

  island_151() {
    const island = { index: 151, start: "0x0726", end: "0x072C" };
    this.__line(island, "assign", "slip = 1", "0x0728");
    return this.trace;
  }

  island_152() {
    const island = { index: 152, start: "0x072C", end: "0x073F" };
    this.__line(island, "expr", "runEngineTractionLightCB(1)", "0x073E");
    this.__line(island, "stackTail", "sprite(flashSP)", "0x073F");
    return this.trace;
  }

  island_153() {
    const island = { index: 153, start: "0x073F", end: "0x0742" };
    this.__line(island, "jump", "jump 0x0758", "0x073F");
    return this.trace;
  }

  island_154() {
    const island = { index: 154, start: "0x0742", end: "0x0755" };
    this.__line(island, "expr", "0.7734", "0x0754");
    this.__line(island, "stackTail", "avgFps | (w / g)", "0x0755");
    return this.trace;
  }

  island_155() {
    const island = { index: 155, start: "0x0755", end: "0x0758" };
    this.__line(island, "stackTail", "avgFps", "0x0758");
    return this.trace;
  }

  island_156() {
    const island = { index: 156, start: "0x0758", end: "0x0767" };
    this.__line(island, "expr", "((w / g) <= 0.7767)", "0x0766");
    return this.trace;
  }

  island_157() {
    const island = { index: 157, start: "0x0767", end: "0x077F" };
    this.__line(island, "branch", "if not (carAccel < c0) then goto 0x0017", "0x077B");
    this.__line(island, "stackTail", "(carV < c3)", "0x077F");
    return this.trace;
  }

  island_158() {
    const island = { index: 158, start: "0x077F", end: "0x0788" };
    this.__line(island, "assign", "carAccel = c0", "0x0784");
    return this.trace;
  }

  island_159() {
    const island = { index: 159, start: "0x0788", end: "0x0790" };
    this.__line(island, "assign", "engineDamage = c0", "0x078C");
    return this.trace;
  }

  island_160() {
    const island = { index: 160, start: "0x0790", end: "0x0793" };
    this.__line(island, "jump", "jump 0x0018", "0x0790");
    return this.trace;
  }

  island_161() {
    const island = { index: 161, start: "0x0793", end: "0x079F" };
    this.__line(island, "branch", "if not (carV < c0) then jump 12", "0x079B");
    return this.trace;
  }

  island_162() {
    const island = { index: 162, start: "0x079F", end: "0x07A8" };
    this.__line(island, "assign", "carV = c0", "0x07A4");
    return this.trace;
  }

  island_163() {
    const island = { index: 163, start: "0x07A8", end: "0x07B4" };
    this.__line(island, "branch", "if not (rpm > revLimiter) then goto 0x0014", "0x07B0");
    return this.trace;
  }

  island_164() {
    const island = { index: 164, start: "0x07B4", end: "0x07BD" };
    this.__line(island, "assign", "carAccel = revLimiterDeceleration", "0x07B9");
    return this.trace;
  }

  island_165() {
    const island = { index: 165, start: "0x07BD", end: "0x07C5" };
    this.__line(island, "assign", "engineDamage = revLimiterDeceleration", "0x07C1");
    return this.trace;
  }

  island_166() {
    const island = { index: 166, start: "0x07C5", end: "0x07CC" };
    this.__line(island, "jump", "branch 58", "0x07C9");
    this.__line(island, "stackTail", "brake", "0x07CC");
    return this.trace;
  }

  island_167() {
    const island = { index: 167, start: "0x07CC", end: "0x07D5" };
    this.__line(island, "assign", "carAccel = brakeDecleration", "0x07D1");
    return this.trace;
  }

  island_168() {
    const island = { index: 168, start: "0x07D5", end: "0x07DD" };
    this.__line(island, "assign", "engineDamage = brakeDecleration", "0x07D9");
    return this.trace;
  }

  island_169() {
    const island = { index: 169, start: "0x07DD", end: "0x07E9" };
    this.__line(island, "branch", "if not (carV < c2) then jump 29", "0x07E5");
    return this.trace;
  }

  island_170() {
    const island = { index: 170, start: "0x07E9", end: "0x07F2" };
    this.__line(island, "assign", "carAccel = c0", "0x07EE");
    return this.trace;
  }

  island_171() {
    const island = { index: 171, start: "0x07F2", end: "0x07FA" };
    this.__line(island, "assign", "engineDamage = c0", "0x07F6");
    return this.trace;
  }

  island_172() {
    const island = { index: 172, start: "0x07FA", end: "0x0803" };
    this.__line(island, "assign", "carV = c0", "0x07FF");
    return this.trace;
  }

  island_173() {
    const island = { index: 173, start: "0x0803", end: "0x0816" };
    this.__line(island, "assign", "carV = (carV + (carAccel * theTime))", "0x0812");
    return this.trace;
  }

  island_174() {
    const island = { index: 174, start: "0x0816", end: "0x0828" };
    this.__line(island, "assign", "speedoV = (speedoV + (engineDamage * theTime))", "0x0824");
    return this.trace;
  }

  island_175() {
    const island = { index: 175, start: "0x0828", end: "0x0839" };
    this.__line(island, "branch", "if not ((carV + c10) < speedoV) then jump 12", "0x0835");
    return this.trace;
  }

  island_176() {
    const island = { index: 176, start: "0x0839", end: "0x083F" };
    this.__line(island, "assign", "tireScrub = 1", "0x083B");
    return this.trace;
  }

  island_177() {
    const island = { index: 177, start: "0x083F", end: "0x0842" };
    this.__line(island, "jump", "jump 9", "0x083F");
    return this.trace;
  }

  island_178() {
    const island = { index: 178, start: "0x0842", end: "0x0848" };
    this.__line(island, "assign", "tireScrub = 0", "0x0844");
    return this.trace;
  }

  island_179() {
    const island = { index: 179, start: "0x0848", end: "0x0859" };
    this.__line(island, "branch", "if not ((carV + c0_015) < speedoV) then goto 0x00EA", "0x0855");
    return this.trace;
  }

  island_180() {
    const island = { index: 180, start: "0x0859", end: "0x0866" };
    this.__line(island, "assign", "isNos = (speedoV - carV)", "0x0862");
    return this.trace;
  }

  island_181() {
    const island = { index: 181, start: "0x0866", end: "0x0871" };
    this.__line(island, "branch", "if not (isNos < c0_02) then jump 11", "0x086D");
    return this.trace;
  }

  island_182() {
    const island = { index: 182, start: "0x0871", end: "0x0879" };
    this.__line(island, "assign", "isNos = c0", "0x0875");
    return this.trace;
  }

  island_183() {
    const island = { index: 183, start: "0x0879", end: "0x0880" };
    this.__line(island, "jump", "branch 0x005D", "0x087D");
    this.__line(island, "stackTail", "slip", "0x0880");
    return this.trace;
  }

  island_184() {
    const island = { index: 184, start: "0x0880", end: "0x0897" };
    this.__line(island, "assign", "nitrousRemaining = (0.7299 / c200)", "0x0893");
    this.__line(island, "expr", "(ECUtune * N)", "0x0896");
    this.__line(island, "stackTail", "avgFps", "0x0897");
    return this.trace;
  }

  island_185() {
    const island = { index: 185, start: "0x0897", end: "0x08A2" };
    this.__line(island, "branch", "if not (nitrousRemaining < c0) then goto 0x08B0", "0x089E");
    return this.trace;
  }

  island_186() {
    const island = { index: 186, start: "0x08A2", end: "0x08AA" };
    this.__line(island, "assign", "nitrousRemaining = c0", "0x08A6");
    return this.trace;
  }

  island_187() {
    const island = { index: 187, start: "0x08AA", end: "0x08AD" };
    this.__line(island, "jump", "jump 22", "0x08AA");
    return this.trace;
  }

  island_188() {
    const island = { index: 188, start: "0x08AD", end: "0x08B0" };
    this.__line(island, "stackTail", "nitrousRemaining", "0x08B0");
    return this.trace;
  }

  island_190() {
    const island = { index: 190, start: "0x08B8", end: "0x08C0" };
    this.__line(island, "assign", "nitrousRemaining = c1", "0x08BC");
    return this.trace;
  }

  island_192() {
    const island = { index: 192, start: "0x08D7", end: "0x08DA" };
    this.__line(island, "jump", "jump 0x0940", "0x08D7");
    return this.trace;
  }

  island_193() {
    const island = { index: 193, start: "0x08DA", end: "0x08E7" };
    this.__line(island, "assign", "NOS = (clutchFeather + c0_18)", "0x08E3");
    return this.trace;
  }

  island_194() {
    const island = { index: 194, start: "0x08E7", end: "0x08F8" };
    this.__line(island, "assign", "speedoV = (speedoV - (NOS * isNos))", "0x08F4");
    return this.trace;
  }

  island_195() {
    const island = { index: 195, start: "0x08F8", end: "0x0922" };
    this.__line(island, "branch", "if not ((rpm / redLine) < (c8 / c10)) then goto 0x0940", "0x091E");
    this.__line(island, "stackTail", "((param_c0 > c0) > (mph = VOID))", "0x0922");
    return this.trace;
  }

  island_197() {
    const island = { index: 197, start: "0x093D", end: "0x0940" };
    this.__line(island, "jump", "jump 12", "0x093D");
    return this.trace;
  }

  island_198() {
    const island = { index: 198, start: "0x0940", end: "0x0949" };
    this.__line(island, "assign", "speedoV = carV", "0x0945");
    return this.trace;
  }

  island_199() {
    const island = { index: 199, start: "0x0949", end: "0x0973" };
    this.__line(island, "expr", "0.7478", "0x0972");
    this.__line(island, "stackTail", "speedoV | (gConvSlipA * r) | ((0.7811 * gr) * c50) | (fgr * rpmGearConversion)", "0x0973");
    return this.trace;
  }

  island_200() {
    const island = { index: 200, start: "0x0973", end: "0x097C" };
    this.__line(island, "expr", "getTorque()", "0x097B");
    return this.trace;
  }

  island_201() {
    const island = { index: 201, start: "0x097C", end: "0x0983" };
    this.__line(island, "jump", "branch 41", "0x0980");
    this.__line(island, "stackTail", "slip", "0x0983");
    return this.trace;
  }

  island_202() {
    const island = { index: 202, start: "0x0983", end: "0x0991" };
    this.__line(island, "assign", "mph = (speedoV * vToMph)", "0x098D");
    return this.trace;
  }

  island_203() {
    const island = { index: 203, start: "0x0991", end: "0x099D" };
    this.__line(island, "branch", "if not (mph < c0_02) then goto 0x09A9", "0x0999");
    return this.trace;
  }

  island_204() {
    const island = { index: 204, start: "0x099D", end: "0x09A6" };
    this.__line(island, "assign", "mph = c0_02", "0x09A2");
    return this.trace;
  }

  island_205() {
    const island = { index: 205, start: "0x09A6", end: "0x09A9" };
    this.__line(island, "jump", "jump 0x09BA", "0x09A6");
    return this.trace;
  }

  island_206() {
    const island = { index: 206, start: "0x09A9", end: "0x09B7" };
    this.__line(island, "assign", "mph = (carV * vToMph)", "0x09B3");
    return this.trace;
  }

  island_207() {
    const island = { index: 207, start: "0x09B7", end: "0x09BA" };
    this.__line(island, "stackTail", "c0", "0x09BA");
    return this.trace;
  }

  island_209() {
    const island = { index: 209, start: "0x09C2", end: "0x09CF" };
    this.__line(island, "jump", "branch 16693", "0x09CC");
    this.__line(island, "stackTail", "(gearValue = -1)", "0x09CF");
    return this.trace;
  }

  island_210() {
    const island = { index: 210, start: "0x09CF", end: "0x09D4" };
    this.__line(island, "jump", "branch 14", "0x09D1");
    return this.trace;
  }

  island_211() {
    const island = { index: 211, start: "0x09D4", end: "0x09DC" };
    this.__line(island, "assign", "c0 = c0", "0x09D8");
    return this.trace;
  }

  island_212() {
    const island = { index: 212, start: "0x09DC", end: "0x09DF" };
    this.__line(island, "jump", "jump 11", "0x09DC");
    return this.trace;
  }

  island_213() {
    const island = { index: 213, start: "0x09DF", end: "0x09E7" };
    this.__line(island, "assign", "c0 = c0_02", "0x09E3");
    return this.trace;
  }

  island_214() {
    const island = { index: 214, start: "0x09E7", end: "0x09F2" };
    this.__line(island, "branch", "if not (gearValue = -1) then jump 19", "0x09EE");
    return this.trace;
  }

  island_215() {
    const island = { index: 215, start: "0x09F2", end: "0x09FF" };
    this.__line(island, "assign", "s = (s - c0)", "0x09FB");
    return this.trace;
  }

  island_216() {
    const island = { index: 216, start: "0x09FF", end: "0x0A02" };
    this.__line(island, "jump", "jump 16", "0x09FF");
    return this.trace;
  }

  island_217() {
    const island = { index: 217, start: "0x0A02", end: "0x0A0F" };
    this.__line(island, "assign", "s = (s + c0)", "0x0A0B");
    return this.trace;
  }

  island_218() {
    const island = { index: 218, start: "0x0A0F", end: "0x0A2C" };
    this.__line(island, "assign", "s = (floor((s * c1000)) / c1000)", "0x0A28");
    this.__line(island, "expr", "Math", "0x0A2B");
    return this.trace;
  }

  island_219() {
    const island = { index: 219, start: "0x0A2C", end: "0x0A33" };
    this.__line(island, "jump", "branch 0x0138", "0x0A30");
    this.__line(island, "stackTail", "staging", "0x0A33");
    return this.trace;
  }

  island_222() {
    const island = { index: 222, start: "0x0A4A", end: "0x0A53" };
    this.__line(island, "assign", "mph = c0", "0x0A4F");
    return this.trace;
  }

  island_223() {
    const island = { index: 223, start: "0x0A53", end: "0x0A5C" };
    this.__line(island, "assign", "carAccel = c0", "0x0A58");
    return this.trace;
  }

  island_224() {
    const island = { index: 224, start: "0x0A5C", end: "0x0A65" };
    this.__line(island, "assign", "carV = c0", "0x0A61");
    return this.trace;
  }

  island_225() {
    const island = { index: 225, start: "0x0A65", end: "0x0A68" };
    this.__line(island, "jump", "jump 0x0B68", "0x0A65");
    return this.trace;
  }

  island_226() {
    const island = { index: 226, start: "0x0A68", end: "0x0A74" };
    this.__line(island, "branch", "if not (s > c5) then goto 0x002A", "0x0A70");
    return this.trace;
  }

  island_227() {
    const island = { index: 227, start: "0x0A74", end: "0x0A7D" };
    this.__line(island, "assign", "s = c5", "0x0A79");
    return this.trace;
  }

  island_228() {
    const island = { index: 228, start: "0x0A7D", end: "0x0A86" };
    this.__line(island, "assign", "mph = c0", "0x0A82");
    return this.trace;
  }

  island_229() {
    const island = { index: 229, start: "0x0A86", end: "0x0A8F" };
    this.__line(island, "assign", "carAccel = c0", "0x0A8B");
    return this.trace;
  }

  island_230() {
    const island = { index: 230, start: "0x0A8F", end: "0x0A98" };
    this.__line(island, "assign", "carV = c0", "0x0A94");
    return this.trace;
  }

  island_231() {
    const island = { index: 231, start: "0x0A98", end: "0x0A9B" };
    this.__line(island, "jump", "jump 0x0B68", "0x0A98");
    return this.trace;
  }

  island_232() {
    const island = { index: 232, start: "0x0A9B", end: "0x0AA0" };
    this.__line(island, "assign", "rpm = 0", "0x0A9C");
    return this.trace;
  }

  island_233() {
    const island = { index: 233, start: "0x0AA0", end: "0x0AA5" };
    this.__line(island, "assign", "stockRedLine = 0", "0x0AA1");
    return this.trace;
  }

  island_235() {
    const island = { index: 235, start: "0x0ABE", end: "0x0AC3" };
    this.__line(island, "assign", "rpm = 1", "0x0ABF");
    return this.trace;
  }

  island_237() {
    const island = { index: 237, start: "0x0ADC", end: "0x0AE1" };
    this.__line(island, "assign", "stockRedLine = 1", "0x0ADD");
    return this.trace;
  }

  island_238() {
    const island = { index: 238, start: "0x0AE1", end: "0x0AF7" };
    this.__line(island, "branch", "if not (staged <> stockRedLine) then goto 0x0B68", "0x0AF3");
    this.__line(island, "stackTail", "(preStaged <> rpm)", "0x0AF7");
    return this.trace;
  }

  island_239() {
    const island = { index: 239, start: "0x0AF7", end: "0x0AFF" };
    this.__line(island, "assign", "preStaged = rpm", "0x0AFB");
    return this.trace;
  }

  island_240() {
    const island = { index: 240, start: "0x0AFF", end: "0x0B07" };
    this.__line(island, "assign", "staged = stockRedLine", "0x0B03");
    return this.trace;
  }

  island_241() {
    const island = { index: 241, start: "0x0B07", end: "0x0B0F" };
    this.__line(island, "jump", "jump 22016", "0x0B0C");
    this.__line(island, "stackTail", "stockRedLine", "0x0B0F");
    return this.trace;
  }

  island_242() {
    const island = { index: 242, start: "0x0B0F", end: "0x0B13" };
    this.__line(island, "jump", "branch 0x0023", "0x0B10");
    return this.trace;
  }

  island_243() {
    const island = { index: 243, start: "0x0B13", end: "0x0B30" };
    this.__line(island, "assign", "lightDelayTO = timeout(lightDelayTO).new(5000, symbol(stagedAndReady))", "0x0B2C");
    return this.trace;
  }

  island_244() {
    const island = { index: 244, start: "0x0B30", end: "0x0B33" };
    this.__line(island, "jump", "jump 0x0B4F", "0x0B30");
    return this.trace;
  }

  island_245() {
    const island = { index: 245, start: "0x0B33", end: "0x0B40" };
    this.__line(island, "marker", "0x62", "0x0B3B");
    this.__line(island, "branch", "if not (lightDelayTO = VOID_SENTINEL) then goto 0x0B4F", "0x0B3C");
    return this.trace;
  }

  island_246() {
    const island = { index: 246, start: "0x0B40", end: "0x0B4C" };
    this.__line(island, "expr", "forget()", "0x0B4B");
    this.__line(island, "stackTail", "lightDelayTO", "0x0B4C");
    return this.trace;
  }

  island_247() {
    const island = { index: 247, start: "0x0B4C", end: "0x0B4F" };
    this.__line(island, "stackTail", "sprite", "0x0B4F");
    return this.trace;
  }

  island_249() {
    const island = { index: 249, start: "0x0B65", end: "0x0B68" };
    this.__line(island, "jump", "jump 0x0CA7", "0x0B65");
    return this.trace;
  }

  island_250() {
    const island = { index: 250, start: "0x0B68", end: "0x0B73" };
    this.__line(island, "branch", "if not (rt = undefined) then goto 0x0337", "0x0B6F");
    return this.trace;
  }

  island_251() {
    const island = { index: 251, start: "0x0B73", end: "0x0B7F" };
    this.__line(island, "branch", "if not (theActualTime > lagThreshold) then goto 0x0014", "0x0B7B");
    return this.trace;
  }

  island_252() {
    const island = { index: 252, start: "0x0B7F", end: "0x0B8D" };
    this.__line(island, "assign", "badCounterRT = (badCounterRT + theActualTime)", "0x0B89");
    return this.trace;
  }

  island_253() {
    const island = { index: 253, start: "0x0B8D", end: "0x0B90" };
    this.__line(island, "jump", "jump 17", "0x0B8D");
    return this.trace;
  }

  island_254() {
    const island = { index: 254, start: "0x0B90", end: "0x0B9E" };
    this.__line(island, "assign", "goodCounterRT = (goodCounterRT + theActualTime)", "0x0B9A");
    return this.trace;
  }

  island_255() {
    const island = { index: 255, start: "0x0B9E", end: "0x0BAA" };
    this.__line(island, "branch", "if not (s >= c0) then goto 0x0EA7", "0x0BA6");
    return this.trace;
  }

  island_256() {
    const island = { index: 256, start: "0x0BAA", end: "0x0BB2" };
    this.__line(island, "assign", "c1_25 = c0", "0x0BAE");
    return this.trace;
  }

  island_257() {
    const island = { index: 257, start: "0x0BB2", end: "0x0BBD" };
    this.__line(island, "assign", "timeStartLine = milliseconds", "0x0BB9");
    this.__line(island, "expr", "_system", "0x0BBC");
    return this.trace;
  }

  island_258() {
    const island = { index: 258, start: "0x0BBD", end: "0x0BC9" };
    this.__line(island, "branch", "if not (timeGreen = c0) then goto 0x0C8F", "0x0BC5");
    return this.trace;
  }

  island_260() {
    const island = { index: 260, start: "0x0BD3", end: "0x0BEB" };
    this.__line(island, "expr", "runEngineSetLightOnCB(p, red)", "0x0BEA");
    this.__line(island, "stackTail", "sprite(flashSP)", "0x0BEB");
    return this.trace;
  }

  island_261() {
    const island = { index: 261, start: "0x0BEB", end: "0x0BF6" };
    this.__line(island, "branch", "if not (raceType = KOTH) then jump 22", "0x0BF2");
    return this.trace;
  }

  island_262() {
    const island = { index: 262, start: "0x0BF6", end: "0x0C06" };
    this.__line(island, "expr", "KRT((KRT mod c1), EMPTY)", "0x0C05");
    return this.trace;
  }

  island_263() {
    const island = { index: 263, start: "0x0C06", end: "0x0C09" };
    this.__line(island, "jump", "jump 0x0C8C", "0x0C06");
    return this.trace;
  }

  island_264() {
    const island = { index: 264, start: "0x0C09", end: "0x0C14" };
    this.__line(island, "branch", "if not (raceType = QM) then jump 22", "0x0C10");
    return this.trace;
  }

  island_265() {
    const island = { index: 265, start: "0x0C14", end: "0x0C24" };
    this.__line(island, "expr", "RRT((RRT mod c1), EMPTY)", "0x0C23");
    return this.trace;
  }

  island_266() {
    const island = { index: 266, start: "0x0C24", end: "0x0C27" };
    this.__line(island, "jump", "jump 0x0C8C", "0x0C24");
    return this.trace;
  }

  island_267() {
    const island = { index: 267, start: "0x0C27", end: "0x0C3D" };
    this.__line(island, "branch", "if not (raceType = TEAMRIVAL) then jump 22", "0x0C39");
    this.__line(island, "stackTail", "(raceType = RIVAL)", "0x0C3D");
    return this.trace;
  }

  island_268() {
    const island = { index: 268, start: "0x0C3D", end: "0x0C4D" };
    this.__line(island, "expr", "RIVRT((RIVRT mod c1), EMPTY)", "0x0C4C");
    return this.trace;
  }

  island_269() {
    const island = { index: 269, start: "0x0C4D", end: "0x0C50" };
    this.__line(island, "jump", "jump 0x0C8C", "0x0C4D");
    return this.trace;
  }

  island_270() {
    const island = { index: 270, start: "0x0C50", end: "0x0C5B" };
    this.__line(island, "branch", "if not (raceType = HTQ) then jump 22", "0x0C57");
    return this.trace;
  }

  island_271() {
    const island = { index: 271, start: "0x0C5B", end: "0x0C6B" };
    this.__line(island, "expr", "HTQRT((HTQRT mod c1), EMPTY)", "0x0C6A");
    return this.trace;
  }

  island_272() {
    const island = { index: 272, start: "0x0C6B", end: "0x0C6E" };
    this.__line(island, "jump", "jump 0x0C8C", "0x0C6B");
    return this.trace;
  }

  island_273() {
    const island = { index: 273, start: "0x0C6E", end: "0x0C79" };
    this.__line(island, "branch", "if not (raceType = HT) then goto 0x0C8C", "0x0C75");
    return this.trace;
  }

  island_274() {
    const island = { index: 274, start: "0x0C79", end: "0x0C89" };
    this.__line(island, "expr", "HTRT((HTRT mod c1), EMPTY)", "0x0C88");
    return this.trace;
  }

  island_275() {
    const island = { index: 275, start: "0x0C89", end: "0x0C8C" };
    this.__line(island, "jump", "jump 0x0E78", "0x0C89");
    return this.trace;
  }

  island_276() {
    const island = { index: 276, start: "0x0C8C", end: "0x0C8F" };
    this.__line(island, "stackTail", "_system", "0x0C8F");
    return this.trace;
  }

  island_277() {
    const island = { index: 277, start: "0x0C8F", end: "0x0C96" };
    this.__line(island, "assign", "hp = milliseconds", "0x0C92");
    return this.trace;
  }

  island_278() {
    const island = { index: 278, start: "0x0C96", end: "0x0CA6" };
    this.__line(island, "jump", "jump 7734", "0x0CA3");
    this.__line(island, "stackTail", "(hp - timeGreen) | 1.6693", "0x0CA6");
    return this.trace;
  }

  island_280() {
    const island = { index: 280, start: "0x0CA7", end: "0x0CA9" };
    this.__line(island, "marker", "0x65", "0x0CA7");
    return this.trace;
  }

  island_281() {
    const island = { index: 281, start: "0x0CA9", end: "0x0CB5" };
    this.__line(island, "branch", "if not (rt < c0_5) then jump 198", "0x0CB1");
    return this.trace;
  }

  island_283() {
    const island = { index: 283, start: "0x0CBF", end: "0x0CCA" };
    this.__line(island, "branch", "if not (raceType = KOTH) then jump 22", "0x0CC6");
    return this.trace;
  }

  island_284() {
    const island = { index: 284, start: "0x0CCA", end: "0x0CDA" };
    this.__line(island, "expr", "KRT((KRT mod c1), EMPTY)", "0x0CD9");
    return this.trace;
  }

  island_285() {
    const island = { index: 285, start: "0x0CDA", end: "0x0CDD" };
    this.__line(island, "jump", "jump 0x0D60", "0x0CDA");
    return this.trace;
  }

  island_286() {
    const island = { index: 286, start: "0x0CDD", end: "0x0CE8" };
    this.__line(island, "branch", "if not (raceType = QM) then jump 22", "0x0CE4");
    return this.trace;
  }

  island_287() {
    const island = { index: 287, start: "0x0CE8", end: "0x0CF8" };
    this.__line(island, "expr", "RRT((RRT mod c1), EMPTY)", "0x0CF7");
    return this.trace;
  }

  island_288() {
    const island = { index: 288, start: "0x0CF8", end: "0x0CFB" };
    this.__line(island, "jump", "jump 0x0D60", "0x0CF8");
    return this.trace;
  }

  island_289() {
    const island = { index: 289, start: "0x0CFB", end: "0x0D11" };
    this.__line(island, "branch", "if not (raceType = TEAMRIVAL) then jump 22", "0x0D0D");
    this.__line(island, "stackTail", "(raceType = RIVAL)", "0x0D11");
    return this.trace;
  }

  island_290() {
    const island = { index: 290, start: "0x0D11", end: "0x0D21" };
    this.__line(island, "expr", "RIVRT((RIVRT mod c1), EMPTY)", "0x0D20");
    return this.trace;
  }

  island_291() {
    const island = { index: 291, start: "0x0D21", end: "0x0D24" };
    this.__line(island, "jump", "jump 0x0D60", "0x0D21");
    return this.trace;
  }

  island_292() {
    const island = { index: 292, start: "0x0D24", end: "0x0D2F" };
    this.__line(island, "branch", "if not (raceType = HTQ) then jump 22", "0x0D2B");
    return this.trace;
  }

  island_293() {
    const island = { index: 293, start: "0x0D2F", end: "0x0D3F" };
    this.__line(island, "expr", "HTQRT((HTQRT mod c1), EMPTY)", "0x0D3E");
    return this.trace;
  }

  island_294() {
    const island = { index: 294, start: "0x0D3F", end: "0x0D42" };
    this.__line(island, "jump", "jump 0x0D60", "0x0D3F");
    return this.trace;
  }

  island_295() {
    const island = { index: 295, start: "0x0D42", end: "0x0D4D" };
    this.__line(island, "branch", "if not (raceType = HT) then goto 0x0D60", "0x0D49");
    return this.trace;
  }

  island_296() {
    const island = { index: 296, start: "0x0D4D", end: "0x0D5D" };
    this.__line(island, "expr", "HTRT((HTRT mod c1), EMPTY)", "0x0D5C");
    return this.trace;
  }

  island_297() {
    const island = { index: 297, start: "0x0D5D", end: "0x0D60" };
    this.__line(island, "stackTail", "sprite", "0x0D60");
    return this.trace;
  }

  island_299() {
    const island = { index: 299, start: "0x0D75", end: "0x0D78" };
    this.__line(island, "jump", "jump 0x0E78", "0x0D75");
    return this.trace;
  }

  island_300() {
    const island = { index: 300, start: "0x0D78", end: "0x0D81" };
    this.__line(island, "branch", "if not (badCounterRT > VOID) then jump 19", "0x0D7D");
    return this.trace;
  }

  island_301() {
    const island = { index: 301, start: "0x0D81", end: "0x0D91" };
    this.__line(island, "assign", "c1_25 = lagTimeAddition(badCounterRT)", "0x0D8D");
    return this.trace;
  }

  island_302() {
    const island = { index: 302, start: "0x0D91", end: "0x0D9C" };
    this.__line(island, "branch", "if not (raceType = KOTH) then jump 36", "0x0D98");
    return this.trace;
  }

  island_303() {
    const island = { index: 303, start: "0x0D9C", end: "0x0DAF" };
    this.__line(island, "jump", "jump 0x1E56", "0x0DAC");
    this.__line(island, "stackTail", "KRT | (hp - timeGreen) | 1.6693", "0x0DAF");
    return this.trace;
  }

  island_305() {
    const island = { index: 305, start: "0x0DBA", end: "0x0DBD" };
    this.__line(island, "jump", "jump 0x0E78", "0x0DBA");
    return this.trace;
  }

  island_306() {
    const island = { index: 306, start: "0x0DBD", end: "0x0DC8" };
    this.__line(island, "branch", "if not (raceType = QM) then jump 36", "0x0DC4");
    return this.trace;
  }

  island_307() {
    const island = { index: 307, start: "0x0DC8", end: "0x0DDB" };
    this.__line(island, "jump", "jump 0x1E56", "0x0DD8");
    this.__line(island, "stackTail", "RRT | (hp - timeGreen) | 1.6693", "0x0DDB");
    return this.trace;
  }

  island_309() {
    const island = { index: 309, start: "0x0DE6", end: "0x0DE9" };
    this.__line(island, "jump", "jump 0x0E78", "0x0DE6");
    return this.trace;
  }

  island_310() {
    const island = { index: 310, start: "0x0DE9", end: "0x0DFF" };
    this.__line(island, "branch", "if not (raceType = TEAMRIVAL) then jump 36", "0x0DFB");
    this.__line(island, "stackTail", "(raceType = RIVAL)", "0x0DFF");
    return this.trace;
  }

  island_311() {
    const island = { index: 311, start: "0x0DFF", end: "0x0E12" };
    this.__line(island, "jump", "jump 0x1E56", "0x0E0F");
    this.__line(island, "stackTail", "RIVRT | (hp - timeGreen) | 1.6693", "0x0E12");
    return this.trace;
  }

  island_313() {
    const island = { index: 313, start: "0x0E1D", end: "0x0E20" };
    this.__line(island, "jump", "jump 0x0E78", "0x0E1D");
    return this.trace;
  }

  island_314() {
    const island = { index: 314, start: "0x0E20", end: "0x0E2B" };
    this.__line(island, "branch", "if not (raceType = HTQ) then jump 36", "0x0E27");
    return this.trace;
  }

  island_315() {
    const island = { index: 315, start: "0x0E2B", end: "0x0E3E" };
    this.__line(island, "jump", "jump 0x1E56", "0x0E3B");
    this.__line(island, "stackTail", "HTQRT | (hp - timeGreen) | 1.6693", "0x0E3E");
    return this.trace;
  }

  island_317() {
    const island = { index: 317, start: "0x0E49", end: "0x0E4C" };
    this.__line(island, "jump", "jump 0x0E78", "0x0E49");
    return this.trace;
  }

  island_318() {
    const island = { index: 318, start: "0x0E4C", end: "0x0E57" };
    this.__line(island, "branch", "if not (raceType = HT) then goto 0x0E78", "0x0E53");
    return this.trace;
  }

  island_319() {
    const island = { index: 319, start: "0x0E57", end: "0x0E6A" };
    this.__line(island, "jump", "jump 0x1E56", "0x0E67");
    this.__line(island, "stackTail", "HTRT | (hp - timeGreen) | 1.6693", "0x0E6A");
    return this.trace;
  }

  island_321() {
    const island = { index: 321, start: "0x0E75", end: "0x0E78" };
    this.__line(island, "stackTail", "sprite", "0x0E78");
    return this.trace;
  }

  island_324() {
    const island = { index: 324, start: "0x0EA4", end: "0x0EA7" };
    this.__line(island, "jump", "jump 0x002E", "0x0EA4");
    return this.trace;
  }

  island_325() {
    const island = { index: 325, start: "0x0EA7", end: "0x0EB3" };
    this.__line(island, "branch", "if not (theActualTime > lagThreshold) then goto 0x0014", "0x0EAF");
    return this.trace;
  }

  island_326() {
    const island = { index: 326, start: "0x0EB3", end: "0x0EC1" };
    this.__line(island, "assign", "badCounterET = (badCounterET + theActualTime)", "0x0EBD");
    return this.trace;
  }

  island_327() {
    const island = { index: 327, start: "0x0EC1", end: "0x0EC4" };
    this.__line(island, "jump", "jump 17", "0x0EC1");
    return this.trace;
  }

  island_328() {
    const island = { index: 328, start: "0x0EC4", end: "0x0ED2" };
    this.__line(island, "assign", "goodCounterET = (goodCounterET + theActualTime)", "0x0ECE");
    return this.trace;
  }

  island_329() {
    const island = { index: 329, start: "0x0ED2", end: "0x0EDE" };
    this.__line(island, "branch", "if not (s >= c1320) then jump 1704", "0x0EDA");
    return this.trace;
  }

  island_330() {
    const island = { index: 330, start: "0x0EDE", end: "0x0EE9" };
    this.__line(island, "branch", "if not (et = undefined) then goto 0x1583", "0x0EE5");
    return this.trace;
  }

  island_331() {
    const island = { index: 331, start: "0x0EE9", end: "0x0EF3" };
    this.__line(island, "assign", "hp = milliseconds", "0x0EEF");
    this.__line(island, "expr", "_system", "0x0EF2");
    return this.trace;
  }

  island_332() {
    const island = { index: 332, start: "0x0EF3", end: "0x0F03" };
    this.__line(island, "jump", "jump 7734", "0x0F00");
    this.__line(island, "stackTail", "(hp - timeStartLine) | 1.6693", "0x0F03");
    return this.trace;
  }

  island_333() {
    const island = { index: 333, start: "0x0F03", end: "0x0F23" };
    this.__line(island, "marker", "0x82 id_20801", "0x0F04");
    this.__line(island, "assign", "ts = (floor((mph * c100)) / c100)", "0x0F1F");
    this.__line(island, "expr", "Math", "0x0F22");
    return this.trace;
  }

  island_334() {
    const island = { index: 334, start: "0x0F23", end: "0x0F49" };
    this.__line(island, "assign", "c10000 = (floor((((pistonDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100)", "0x0F45");
    this.__line(island, "expr", "Math", "0x0F48");
    return this.trace;
  }

  island_335() {
    const island = { index: 335, start: "0x0F49", end: "0x0F6F" };
    this.__line(island, "assign", "c2 = (floor((((rodDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100)", "0x0F6B");
    this.__line(island, "expr", "Math", "0x0F6E");
    return this.trace;
  }

  island_336() {
    const island = { index: 336, start: "0x0F6F", end: "0x0F95" };
    this.__line(island, "assign", "sprite = (floor((((valveDamage / partBreakPoint) / valveNumber) * c10000)) / c100)", "0x0F91");
    this.__line(island, "expr", "Math", "0x0F94");
    return this.trace;
  }

  island_337() {
    const island = { index: 337, start: "0x0F95", end: "0x0FB6" };
    this.__line(island, "assign", "flashSP = (floor(((headGasketDamage / partBreakPoint) * c10000)) / c100)", "0x0FB2");
    this.__line(island, "expr", "Math", "0x0FB5");
    return this.trace;
  }

  island_338() {
    const island = { index: 338, start: "0x0FB6", end: "0x0FD7" };
    this.__line(island, "assign", "runEngineNOSCB = (floor(((engineBlockDamage / partBreakPoint) * c10000)) / c100)", "0x0FD3");
    this.__line(island, "expr", "Math", "0x0FD6");
    return this.trace;
  }

  island_339() {
    const island = { index: 339, start: "0x0FD7", end: "0x0FF3" };
    this.__line(island, "assign", "nitrousTankSize = (floor((oilDamage * c10000)) / c100)", "0x0FEF");
    this.__line(island, "expr", "Math", "0x0FF2");
    return this.trace;
  }

  island_340() {
    const island = { index: 340, start: "0x0FF3", end: "0x100F" };
    this.__line(island, "assign", "c100 = (floor((oilFilterDamage * c10000)) / c100)", "0x100B");
    this.__line(island, "expr", "Math", "0x100E");
    return this.trace;
  }

  island_341() {
    const island = { index: 341, start: "0x100F", end: "0x102B" };
    this.__line(island, "assign", "revLimiter = (floor((coolantDamage * c10000)) / c100)", "0x1027");
    this.__line(island, "expr", "Math", "0x102A");
    return this.trace;
  }

  island_342() {
    const island = { index: 342, start: "0x102B", end: "0x1047" };
    this.__line(island, "assign", "c200 = (floor((nitrousRemaining * c100)) / c100)", "0x1043");
    this.__line(island, "expr", "Math", "0x1046");
    return this.trace;
  }

  island_343() {
    const island = { index: 343, start: "0x1047", end: "0x1063" };
    this.__line(island, "assign", "tqFlyFactor = (floor((raceGas * c100)) / c100)", "0x105F");
    this.__line(island, "expr", "Math", "0x1062");
    return this.trace;
  }

  island_344() {
    const island = { index: 344, start: "0x1063", end: "0x106E" };
    this.__line(island, "branch", "if not (c10000 > c100) then goto 0x1079", "0x106A");
    return this.trace;
  }

  island_345() {
    const island = { index: 345, start: "0x106E", end: "0x1076" };
    this.__line(island, "assign", "c10000 = c100", "0x1072");
    return this.trace;
  }

  island_346() {
    const island = { index: 346, start: "0x1076", end: "0x1079" };
    this.__line(island, "stackTail", "c2", "0x1079");
    return this.trace;
  }

  island_348() {
    const island = { index: 348, start: "0x1081", end: "0x1089" };
    this.__line(island, "assign", "c2 = c100", "0x1085");
    return this.trace;
  }

  island_349() {
    const island = { index: 349, start: "0x1089", end: "0x108C" };
    this.__line(island, "stackTail", "sprite", "0x108C");
    return this.trace;
  }

  island_351() {
    const island = { index: 351, start: "0x1094", end: "0x109C" };
    this.__line(island, "assign", "sprite = c100", "0x1098");
    return this.trace;
  }

  island_352() {
    const island = { index: 352, start: "0x109C", end: "0x109F" };
    this.__line(island, "stackTail", "flashSP", "0x109F");
    return this.trace;
  }

  island_354() {
    const island = { index: 354, start: "0x10A7", end: "0x10AF" };
    this.__line(island, "assign", "flashSP = c100", "0x10AB");
    return this.trace;
  }

  island_355() {
    const island = { index: 355, start: "0x10AF", end: "0x10B2" };
    this.__line(island, "stackTail", "runEngineNOSCB", "0x10B2");
    return this.trace;
  }

  island_357() {
    const island = { index: 357, start: "0x10BA", end: "0x10C2" };
    this.__line(island, "assign", "runEngineNOSCB = c100", "0x10BE");
    return this.trace;
  }

  island_358() {
    const island = { index: 358, start: "0x10C2", end: "0x10C5" };
    this.__line(island, "stackTail", "nitrousTankSize", "0x10C5");
    return this.trace;
  }

  island_360() {
    const island = { index: 360, start: "0x10CD", end: "0x10D5" };
    this.__line(island, "assign", "nitrousTankSize = c100", "0x10D1");
    return this.trace;
  }

  island_361() {
    const island = { index: 361, start: "0x10D5", end: "0x10D8" };
    this.__line(island, "stackTail", "c100", "0x10D8");
    return this.trace;
  }

  island_363() {
    const island = { index: 363, start: "0x10E0", end: "0x10E8" };
    this.__line(island, "assign", "c100 = c100", "0x10E4");
    return this.trace;
  }

  island_364() {
    const island = { index: 364, start: "0x10E8", end: "0x10EB" };
    this.__line(island, "stackTail", "revLimiter", "0x10EB");
    return this.trace;
  }

  island_366() {
    const island = { index: 366, start: "0x10F3", end: "0x10FB" };
    this.__line(island, "assign", "revLimiter = c100", "0x10F7");
    return this.trace;
  }

  island_367() {
    const island = { index: 367, start: "0x10FB", end: "0x10FE" };
    this.__line(island, "stackTail", "c200", "0x10FE");
    return this.trace;
  }

  island_369() {
    const island = { index: 369, start: "0x1106", end: "0x110E" };
    this.__line(island, "assign", "c200 = c100", "0x110A");
    return this.trace;
  }

  island_370() {
    const island = { index: 370, start: "0x110E", end: "0x1111" };
    this.__line(island, "stackTail", "tqFlyFactor", "0x1111");
    return this.trace;
  }

  island_372() {
    const island = { index: 372, start: "0x1119", end: "0x1121" };
    this.__line(island, "assign", "tqFlyFactor = c100", "0x111D");
    return this.trace;
  }

  island_373() {
    const island = { index: 373, start: "0x1121", end: "0x112C" };
    this.__line(island, "branch", "if not (raceType = KOTH) then goto 0x0088", "0x1128");
    return this.trace;
  }

  island_375() {
    const island = { index: 375, start: "0x1139", end: "0x1159" };
    this.__line(island, "marker", "0x04", "0x1157");
    this.__line(island, "expr", "1.4848", "0x1158");
    this.__line(island, "stackTail", "INT | s | carV | carAccel | _system | (milliseconds - timeAnchor)", "0x1159");
    return this.trace;
  }

  island_376() {
    const island = { index: 376, start: "0x1159", end: "0x115C" };
    this.__line(island, "stackTail", "KDONE", "0x115C");
    return this.trace;
  }

  island_377() {
    const island = { index: 377, start: "0x115C", end: "0x116C" };
    this.__line(island, "jump", "jump 0x1E41", "0x1169");
    this.__line(island, "stackTail", "(hp - timeStartLine) | 1.6693", "0x116C");
    return this.trace;
  }

  island_379() {
    const island = { index: 379, start: "0x11AE", end: "0x11B1" };
    this.__line(island, "jump", "jump 0x1583", "0x11AE");
    return this.trace;
  }

  island_380() {
    const island = { index: 380, start: "0x11B1", end: "0x11BC" };
    this.__line(island, "branch", "if not (raceType = QM) then goto 0x007C", "0x11B8");
    return this.trace;
  }

  island_382() {
    const island = { index: 382, start: "0x11C9", end: "0x11DD" };
    this.__line(island, "expr", "RINT(s, carV, carAccel)", "0x11DC");
    return this.trace;
  }

  island_383() {
    const island = { index: 383, start: "0x11DD", end: "0x11E0" };
    this.__line(island, "stackTail", "RDONE", "0x11E0");
    return this.trace;
  }

  island_384() {
    const island = { index: 384, start: "0x11E0", end: "0x11F0" };
    this.__line(island, "jump", "jump 0x1E41", "0x11ED");
    this.__line(island, "stackTail", "(hp - timeStartLine) | 1.6693", "0x11F0");
    return this.trace;
  }

  island_386() {
    const island = { index: 386, start: "0x1232", end: "0x1235" };
    this.__line(island, "jump", "jump 0x1583", "0x1232");
    return this.trace;
  }

  island_387() {
    const island = { index: 387, start: "0x1235", end: "0x124B" };
    this.__line(island, "branch", "if not (raceType = TEAMRIVAL) then jump 190", "0x1247");
    this.__line(island, "stackTail", "(raceType = RIVAL)", "0x124B");
    return this.trace;
  }

  island_389() {
    const island = { index: 389, start: "0x1258", end: "0x1278" };
    this.__line(island, "marker", "0x04", "0x1276");
    this.__line(island, "expr", "1.4848", "0x1277");
    this.__line(island, "stackTail", "INT | s | carV | carAccel | _system | (milliseconds - timeAnchor)", "0x1278");
    return this.trace;
  }

  island_390() {
    const island = { index: 390, start: "0x1278", end: "0x127B" };
    this.__line(island, "stackTail", "Math", "0x127B");
    return this.trace;
  }

  island_391() {
    const island = { index: 391, start: "0x127B", end: "0x129E" };
    this.__line(island, "assign", "gr = (floor((((beforePistonDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100)", "0x129A");
    return this.trace;
  }

  island_392() {
    const island = { index: 392, start: "0x129E", end: "0x12A6" };
    this.__line(island, "assign", "thePD = c10000", "0x12A2");
    return this.trace;
  }

  island_393() {
    const island = { index: 393, start: "0x12A6", end: "0x12AE" };
    this.__line(island, "assign", "theBPD = gr", "0x12AA");
    return this.trace;
  }

  island_394() {
    const island = { index: 394, start: "0x12AE", end: "0x12C1" };
    this.__line(island, "jump", "jump 0x1E41", "0x12BE");
    this.__line(island, "stackTail", "RIVDONE | (hp - timeStartLine) | 1.6693", "0x12C1");
    return this.trace;
  }

  island_396() {
    const island = { index: 396, start: "0x1303", end: "0x1306" };
    this.__line(island, "jump", "jump 0x1583", "0x1303");
    return this.trace;
  }

  island_397() {
    const island = { index: 397, start: "0x1306", end: "0x1311" };
    this.__line(island, "branch", "if not (raceType = CT) then jump 306", "0x130D");
    return this.trace;
  }

  island_398() {
    const island = { index: 398, start: "0x1311", end: "0x132B" };
    this.__line(island, "expr", "ctFinishCB(et, ts)", "0x132A");
    this.__line(island, "stackTail", "sprite(flashSP)", "0x132B");
    return this.trace;
  }

  island_399() {
    const island = { index: 399, start: "0x132B", end: "0x1344" };
    this.__line(island, "jump", "jump 0x1E83", "0x1341");
    this.__line(island, "stackTail", "executeCall | ctst | \"et=\" | (hp - timeStartLine) | 1.6693", "0x1344");
    return this.trace;
  }

  island_401() {
    const island = { index: 401, start: "0x143D", end: "0x1440" };
    this.__line(island, "jump", "jump 0x1583", "0x143D");
    return this.trace;
  }

  island_402() {
    const island = { index: 402, start: "0x1440", end: "0x144B" };
    this.__line(island, "branch", "if not (raceType = CTQ) then goto 0x0020", "0x1447");
    return this.trace;
  }

  island_403() {
    const island = { index: 403, start: "0x144B", end: "0x1465" };
    this.__line(island, "expr", "ctFinishCB(et, ts)", "0x1464");
    this.__line(island, "stackTail", "sprite(flashSP)", "0x1465");
    return this.trace;
  }

  island_404() {
    const island = { index: 404, start: "0x1465", end: "0x1468" };
    this.__line(island, "jump", "jump 0x1583", "0x1465");
    return this.trace;
  }

  island_405() {
    const island = { index: 405, start: "0x1468", end: "0x1473" };
    this.__line(island, "branch", "if not (raceType = P) then goto 0x0020", "0x146F");
    return this.trace;
  }

  island_406() {
    const island = { index: 406, start: "0x1473", end: "0x148D" };
    this.__line(island, "expr", "practiceFinishCB(et, ts)", "0x148C");
    this.__line(island, "stackTail", "sprite(flashSP)", "0x148D");
    return this.trace;
  }

  island_407() {
    const island = { index: 407, start: "0x148D", end: "0x1490" };
    this.__line(island, "jump", "jump 0x1583", "0x148D");
    return this.trace;
  }

  island_408() {
    const island = { index: 408, start: "0x1490", end: "0x149B" };
    this.__line(island, "branch", "if not (raceType = HTQ) then jump 91", "0x1497");
    return this.trace;
  }

  island_409() {
    const island = { index: 409, start: "0x149B", end: "0x14AE" };
    this.__line(island, "jump", "jump 0x1E41", "0x14AB");
    this.__line(island, "stackTail", "HTQD | (hp - timeStartLine) | 1.6693", "0x14AE");
    return this.trace;
  }

  island_411() {
    const island = { index: 411, start: "0x14F0", end: "0x14F3" };
    this.__line(island, "jump", "jump 0x1583", "0x14F0");
    return this.trace;
  }

  island_412() {
    const island = { index: 412, start: "0x14F3", end: "0x14FE" };
    this.__line(island, "branch", "if not (raceType = HT) then goto 0x1583", "0x14FA");
    return this.trace;
  }

  island_414() {
    const island = { index: 414, start: "0x150B", end: "0x152B" };
    this.__line(island, "marker", "0x04", "0x1529");
    this.__line(island, "expr", "1.4848", "0x152A");
    this.__line(island, "stackTail", "INT | s | carV | carAccel | _system | (milliseconds - timeAnchor)", "0x152B");
    return this.trace;
  }

  island_415() {
    const island = { index: 415, start: "0x152B", end: "0x152E" };
    this.__line(island, "stackTail", "HTD", "0x152E");
    return this.trace;
  }

  island_416() {
    const island = { index: 416, start: "0x152E", end: "0x153E" };
    this.__line(island, "jump", "jump 0x1E41", "0x153B");
    this.__line(island, "stackTail", "(hp - timeStartLine) | 1.6693", "0x153E");
    return this.trace;
  }

  island_418() {
    const island = { index: 418, start: "0x1580", end: "0x1583" };
    this.__line(island, "jump", "jump 0x028C", "0x1580");
    return this.trace;
  }

  island_419() {
    const island = { index: 419, start: "0x1583", end: "0x1597" };
    this.__line(island, "jump", "branch 632", "0x1594");
    this.__line(island, "stackTail", "((s >= c760) and isMidMd5sent)", "0x1597");
    return this.trace;
  }

  island_420() {
    const island = { index: 420, start: "0x1597", end: "0x159D" };
    this.__line(island, "assign", "isMidMd5sent = 1", "0x1599");
    return this.trace;
  }

  island_422() {
    const island = { index: 422, start: "0x15DF", end: "0x1605" };
    this.__line(island, "assign", "c10000 = (floor((((pistonDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100)", "0x1601");
    this.__line(island, "expr", "Math", "0x1604");
    return this.trace;
  }

  island_423() {
    const island = { index: 423, start: "0x1605", end: "0x162B" };
    this.__line(island, "assign", "c2 = (floor((((rodDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100)", "0x1627");
    this.__line(island, "expr", "Math", "0x162A");
    return this.trace;
  }

  island_424() {
    const island = { index: 424, start: "0x162B", end: "0x1651" };
    this.__line(island, "assign", "sprite = (floor((((valveDamage / partBreakPoint) / valveNumber) * c10000)) / c100)", "0x164D");
    this.__line(island, "expr", "Math", "0x1650");
    return this.trace;
  }

  island_425() {
    const island = { index: 425, start: "0x1651", end: "0x1672" };
    this.__line(island, "assign", "flashSP = (floor(((headGasketDamage / partBreakPoint) * c10000)) / c100)", "0x166E");
    this.__line(island, "expr", "Math", "0x1671");
    return this.trace;
  }

  island_426() {
    const island = { index: 426, start: "0x1672", end: "0x1693" };
    this.__line(island, "assign", "runEngineNOSCB = (floor(((engineBlockDamage / partBreakPoint) * c10000)) / c100)", "0x168F");
    this.__line(island, "expr", "Math", "0x1692");
    return this.trace;
  }

  island_427() {
    const island = { index: 427, start: "0x1693", end: "0x16AF" };
    this.__line(island, "assign", "nitrousTankSize = (floor((oilDamage * c10000)) / c100)", "0x16AB");
    this.__line(island, "expr", "Math", "0x16AE");
    return this.trace;
  }

  island_428() {
    const island = { index: 428, start: "0x16AF", end: "0x16CB" };
    this.__line(island, "assign", "c100 = (floor((oilFilterDamage * c10000)) / c100)", "0x16C7");
    this.__line(island, "expr", "Math", "0x16CA");
    return this.trace;
  }

  island_429() {
    const island = { index: 429, start: "0x16CB", end: "0x16E7" };
    this.__line(island, "assign", "revLimiter = (floor((coolantDamage * c10000)) / c100)", "0x16E3");
    this.__line(island, "expr", "Math", "0x16E6");
    return this.trace;
  }

  island_430() {
    const island = { index: 430, start: "0x16E7", end: "0x1703" };
    this.__line(island, "assign", "c200 = (floor((nitrousRemaining * c100)) / c100)", "0x16FF");
    this.__line(island, "expr", "Math", "0x1702");
    return this.trace;
  }

  island_431() {
    const island = { index: 431, start: "0x1703", end: "0x171F" };
    this.__line(island, "assign", "tqFlyFactor = (floor((raceGas * c100)) / c100)", "0x171B");
    this.__line(island, "expr", "Math", "0x171E");
    return this.trace;
  }

  island_432() {
    const island = { index: 432, start: "0x171F", end: "0x172A" };
    this.__line(island, "branch", "if not (c10000 > c100) then goto 0x1735", "0x1726");
    return this.trace;
  }

  island_433() {
    const island = { index: 433, start: "0x172A", end: "0x1732" };
    this.__line(island, "assign", "c10000 = c100", "0x172E");
    return this.trace;
  }

  island_434() {
    const island = { index: 434, start: "0x1732", end: "0x1735" };
    this.__line(island, "stackTail", "c2", "0x1735");
    return this.trace;
  }

  island_436() {
    const island = { index: 436, start: "0x173D", end: "0x1745" };
    this.__line(island, "assign", "c2 = c100", "0x1741");
    return this.trace;
  }

  island_437() {
    const island = { index: 437, start: "0x1745", end: "0x1748" };
    this.__line(island, "stackTail", "sprite", "0x1748");
    return this.trace;
  }

  island_439() {
    const island = { index: 439, start: "0x1750", end: "0x1758" };
    this.__line(island, "assign", "sprite = c100", "0x1754");
    return this.trace;
  }

  island_440() {
    const island = { index: 440, start: "0x1758", end: "0x175B" };
    this.__line(island, "stackTail", "flashSP", "0x175B");
    return this.trace;
  }

  island_442() {
    const island = { index: 442, start: "0x1763", end: "0x176B" };
    this.__line(island, "assign", "flashSP = c100", "0x1767");
    return this.trace;
  }

  island_443() {
    const island = { index: 443, start: "0x176B", end: "0x176E" };
    this.__line(island, "stackTail", "runEngineNOSCB", "0x176E");
    return this.trace;
  }

  island_445() {
    const island = { index: 445, start: "0x1776", end: "0x177E" };
    this.__line(island, "assign", "runEngineNOSCB = c100", "0x177A");
    return this.trace;
  }

  island_446() {
    const island = { index: 446, start: "0x177E", end: "0x1781" };
    this.__line(island, "stackTail", "nitrousTankSize", "0x1781");
    return this.trace;
  }

  island_448() {
    const island = { index: 448, start: "0x1789", end: "0x1791" };
    this.__line(island, "assign", "nitrousTankSize = c100", "0x178D");
    return this.trace;
  }

  island_449() {
    const island = { index: 449, start: "0x1791", end: "0x1794" };
    this.__line(island, "stackTail", "c100", "0x1794");
    return this.trace;
  }

  island_451() {
    const island = { index: 451, start: "0x179C", end: "0x17A4" };
    this.__line(island, "assign", "c100 = c100", "0x17A0");
    return this.trace;
  }

  island_452() {
    const island = { index: 452, start: "0x17A4", end: "0x17A7" };
    this.__line(island, "stackTail", "revLimiter", "0x17A7");
    return this.trace;
  }

  island_454() {
    const island = { index: 454, start: "0x17AF", end: "0x17B7" };
    this.__line(island, "assign", "revLimiter = c100", "0x17B3");
    return this.trace;
  }

  island_455() {
    const island = { index: 455, start: "0x17B7", end: "0x17BA" };
    this.__line(island, "stackTail", "c200", "0x17BA");
    return this.trace;
  }

  island_457() {
    const island = { index: 457, start: "0x17C2", end: "0x17CA" };
    this.__line(island, "assign", "c200 = c100", "0x17C6");
    return this.trace;
  }

  island_458() {
    const island = { index: 458, start: "0x17CA", end: "0x17CD" };
    this.__line(island, "stackTail", "tqFlyFactor", "0x17CD");
    return this.trace;
  }

  island_460() {
    const island = { index: 460, start: "0x17D5", end: "0x17DD" };
    this.__line(island, "assign", "tqFlyFactor = c100", "0x17D9");
    return this.trace;
  }

  island_461() {
    const island = { index: 461, start: "0x17DD", end: "0x17E0" };
    this.__line(island, "stackTail", "M", "0x17E0");
    return this.trace;
  }

  island_463() {
    const island = { index: 463, start: "0x180C", end: "0x1819" };
    this.__line(island, "assign", "fgr = (boostPsi - stockBoost)", "0x1815");
    return this.trace;
  }

  island_464() {
    const island = { index: 464, start: "0x1819", end: "0x1821" };
    this.__line(island, "branch", "if not (fgr < VOID) then jump 8", "0x181D");
    return this.trace;
  }

  island_465() {
    const island = { index: 465, start: "0x1821", end: "0x1826" };
    this.__line(island, "assign", "fgr = VOID", "0x1822");
    return this.trace;
  }

  island_466() {
    const island = { index: 466, start: "0x1826", end: "0x183D" };
    this.__line(island, "assign", "dangerLevel = (dangerLevel + (fgr + (pistonCompressionLevel * c7)))", "0x1839");
    return this.trace;
  }

  island_467() {
    const island = { index: 467, start: "0x183D", end: "0x1849" };
    this.__line(island, "branch", "if not (pistonCompressionLevel < c0) then jump 25", "0x1845");
    return this.trace;
  }

  island_468() {
    const island = { index: 468, start: "0x1849", end: "0x185C" };
    this.__line(island, "assign", "engineDamageRisk = (engineDamageRisk + (pistonCompressionLevel * c1_8))", "0x1858");
    return this.trace;
  }

  island_469() {
    const island = { index: 469, start: "0x185C", end: "0x185F" };
    this.__line(island, "jump", "jump 0x001B", "0x185C");
    return this.trace;
  }

  island_470() {
    const island = { index: 470, start: "0x185F", end: "0x1877" };
    this.__line(island, "assign", "engineDamageRisk = (engineDamageRisk + ((boostPsi * pistonCompressionLevel) * c0_5))", "0x1873");
    return this.trace;
  }

  island_471() {
    const island = { index: 471, start: "0x1877", end: "0x1883" };
    this.__line(island, "branch", "if not (engineDamageRisk < c0) then jump 9", "0x187F");
    return this.trace;
  }

  island_472() {
    const island = { index: 472, start: "0x1883", end: "0x1889" };
    this.__line(island, "assign", "engineDamageRisk = VOID", "0x1885");
    return this.trace;
  }

  island_473() {
    const island = { index: 473, start: "0x1889", end: "0x189A" };
    this.__line(island, "branch", "if not (rpm > (stockRedLine * c1_15)) then goto 0x18B9", "0x1896");
    return this.trace;
  }

  island_474() {
    const island = { index: 474, start: "0x189A", end: "0x18A8" };
    this.__line(island, "assign", "dangerLevel = (dangerLevel * c2)", "0x18A4");
    return this.trace;
  }

  island_475() {
    const island = { index: 475, start: "0x18A8", end: "0x18B6" };
    this.__line(island, "assign", "engineDamageRisk = (engineDamageRisk * c80)", "0x18B2");
    return this.trace;
  }

  island_476() {
    const island = { index: 476, start: "0x18B6", end: "0x18B9" };
    this.__line(island, "stackTail", "timeFromLastFrame", "0x18B9");
    return this.trace;
  }

  island_478() {
    const island = { index: 478, start: "0x18C7", end: "0x18D2" };
    this.__line(island, "branch", "if not (rpmGearConversion > c0) then jump 16", "0x18CE");
    return this.trace;
  }

  island_479() {
    const island = { index: 479, start: "0x18D2", end: "0x18DF" };
    this.__line(island, "assign", "dangerLevel = (dangerLevel + rpmGearConversion)", "0x18DB");
    return this.trace;
  }

  island_480() {
    const island = { index: 480, start: "0x18DF", end: "0x18EB" };
    this.__line(island, "branch", "if not (oilDurability > c0) then goto 0x005D", "0x18E7");
    return this.trace;
  }

  island_481() {
    const island = { index: 481, start: "0x18EB", end: "0x1914" };
    this.__line(island, "assign", "oilDamage = ((rpm / stockRedLine) + (0.7489 / c10000))", "0x1910");
    this.__line(island, "expr", "(oilDamage / ((c100 - oilDurability) ^ 1.6693))", "0x1913");
    return this.trace;
  }

  island_482() {
    const island = { index: 482, start: "0x1914", end: "0x1920" };
    this.__line(island, "branch", "if not (oilDamage >= c100) then jump 15", "0x191C");
    return this.trace;
  }

  island_483() {
    const island = { index: 483, start: "0x1920", end: "0x1929" };
    this.__line(island, "assign", "oilDamage = c100", "0x1925");
    return this.trace;
  }

  island_484() {
    const island = { index: 484, start: "0x1929", end: "0x192C" };
    this.__line(island, "jump", "jump 28", "0x1929");
    return this.trace;
  }

  island_486() {
    const island = { index: 486, start: "0x1945", end: "0x194E" };
    this.__line(island, "assign", "beforeDangerLevel = dangerLevel", "0x194A");
    return this.trace;
  }

  island_487() {
    const island = { index: 487, start: "0x194E", end: "0x195A" };
    this.__line(island, "branch", "if not (radiatorDurability > c0) then jump 28", "0x1956");
    return this.trace;
  }

  island_489() {
    const island = { index: 489, start: "0x1973", end: "0x197F" };
    this.__line(island, "branch", "if not (oilFilterDurability > c0) then goto 0x005D", "0x197B");
    return this.trace;
  }

  island_490() {
    const island = { index: 490, start: "0x197F", end: "0x19A8" };
    this.__line(island, "assign", "oilFilterDamage = ((rpm / stockRedLine) + (0.7489 / c10000))", "0x19A4");
    this.__line(island, "expr", "(oilFilterDamage / ((c100 - oilFilterDurability) ^ 1.6693))", "0x19A7");
    return this.trace;
  }

  island_491() {
    const island = { index: 491, start: "0x19A8", end: "0x19B4" };
    this.__line(island, "branch", "if not (oilFilterDamage >= c100) then jump 15", "0x19B0");
    return this.trace;
  }

  island_492() {
    const island = { index: 492, start: "0x19B4", end: "0x19BD" };
    this.__line(island, "assign", "oilFilterDamage = c100", "0x19B9");
    return this.trace;
  }

  island_493() {
    const island = { index: 493, start: "0x19BD", end: "0x19C0" };
    this.__line(island, "jump", "jump 28", "0x19BD");
    return this.trace;
  }

  island_495() {
    const island = { index: 495, start: "0x19D9", end: "0x19E5" };
    this.__line(island, "branch", "if not (coolantDurability > c0) then goto 0x1A42", "0x19E1");
    return this.trace;
  }

  island_496() {
    const island = { index: 496, start: "0x19E5", end: "0x1A0E" };
    this.__line(island, "assign", "coolantDamage = ((rpm / stockRedLine) + (0.7489 / c10000))", "0x1A0A");
    this.__line(island, "expr", "(coolantDamage / ((c100 - coolantDurability) ^ 1.6693))", "0x1A0D");
    return this.trace;
  }

  island_497() {
    const island = { index: 497, start: "0x1A0E", end: "0x1A1A" };
    this.__line(island, "branch", "if not (coolantDamage >= c100) then jump 15", "0x1A16");
    return this.trace;
  }

  island_498() {
    const island = { index: 498, start: "0x1A1A", end: "0x1A23" };
    this.__line(island, "assign", "coolantDamage = c100", "0x1A1F");
    return this.trace;
  }

  island_499() {
    const island = { index: 499, start: "0x1A23", end: "0x1A26" };
    this.__line(island, "jump", "jump 0x1A42", "0x1A23");
    return this.trace;
  }

  island_501() {
    const island = { index: 501, start: "0x1A3F", end: "0x1A42" };
    this.__line(island, "stackTail", "r", "0x1A42");
    return this.trace;
  }

  island_503() {
    const island = { index: 503, start: "0x1A43", end: "0x1A47" };
    this.__line(island, "expr", "negTq", "0x1A46");
    return this.trace;
  }

  island_504() {
    const island = { index: 504, start: "0x1A47", end: "0x1A53" };
    this.__line(island, "branch", "if not (pistonDurability < dangerLevel) then jump 19", "0x1A4F");
    return this.trace;
  }

  island_505() {
    const island = { index: 505, start: "0x1A53", end: "0x1A60" };
    this.__line(island, "assign", "r = (dangerLevel * c0_95)", "0x1A5C");
    return this.trace;
  }

  island_506() {
    const island = { index: 506, start: "0x1A60", end: "0x1A63" };
    this.__line(island, "jump", "jump 16", "0x1A60");
    return this.trace;
  }

  island_507() {
    const island = { index: 507, start: "0x1A63", end: "0x1A70" };
    this.__line(island, "assign", "r = (pistonDurability * c0_95)", "0x1A6C");
    return this.trace;
  }

  island_509() {
    const island = { index: 509, start: "0x1A82", end: "0x1A86" };
    this.__line(island, "expr", "c9", "0x1A85");
    return this.trace;
  }

  island_510() {
    const island = { index: 510, start: "0x1A86", end: "0x1A92" };
    this.__line(island, "branch", "if not (pistonDurability < beforeDangerLevel) then jump 19", "0x1A8E");
    return this.trace;
  }

  island_511() {
    const island = { index: 511, start: "0x1A92", end: "0x1A9F" };
    this.__line(island, "assign", "c9 = (beforeDangerLevel * c0_95)", "0x1A9B");
    return this.trace;
  }

  island_512() {
    const island = { index: 512, start: "0x1A9F", end: "0x1AA2" };
    this.__line(island, "jump", "jump 16", "0x1A9F");
    return this.trace;
  }

  island_513() {
    const island = { index: 513, start: "0x1AA2", end: "0x1AAF" };
    this.__line(island, "assign", "c9 = (pistonDurability * c0_95)", "0x1AAB");
    return this.trace;
  }

  island_515() {
    const island = { index: 515, start: "0x1AC1", end: "0x1ACC" };
    this.__line(island, "branch", "if not (c299 < c0) then goto 0x1AD7", "0x1AC8");
    return this.trace;
  }

  island_516() {
    const island = { index: 516, start: "0x1ACC", end: "0x1AD4" };
    this.__line(island, "assign", "c299 = c0", "0x1AD0");
    return this.trace;
  }

  island_517() {
    const island = { index: 517, start: "0x1AD4", end: "0x1AD7" };
    this.__line(island, "stackTail", "negTq", "0x1AD7");
    return this.trace;
  }

  island_519() {
    const island = { index: 519, start: "0x1ADF", end: "0x1AE7" };
    this.__line(island, "assign", "negTq = c0", "0x1AE3");
    return this.trace;
  }

  island_520() {
    const island = { index: 520, start: "0x1AE7", end: "0x1B07" };
    this.__line(island, "assign", "pistonDamage = (pistonDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1B03");
    return this.trace;
  }

  island_521() {
    const island = { index: 521, start: "0x1B07", end: "0x1B27" };
    this.__line(island, "assign", "beforePistonDamage = (beforePistonDamage + (((engineDamageRisk / c100) * c299) + (c299 * c0_05)))", "0x1B23");
    return this.trace;
  }

  island_522() {
    const island = { index: 522, start: "0x1B27", end: "0x1B3F" };
    this.__line(island, "assign", "pistonBroken = floor((pistonDamage / partBreakPoint))", "0x1B3B");
    this.__line(island, "expr", "Math", "0x1B3E");
    return this.trace;
  }

  island_523() {
    const island = { index: 523, start: "0x1B3F", end: "0x1B4B" };
    this.__line(island, "branch", "if not (pistonBroken > cylinderNumber) then jump 12", "0x1B47");
    return this.trace;
  }

  island_524() {
    const island = { index: 524, start: "0x1B4B", end: "0x1B54" };
    this.__line(island, "assign", "pistonBroken = cylinderNumber", "0x1B50");
    return this.trace;
  }

  island_525() {
    const island = { index: 525, start: "0x1B54", end: "0x1B60" };
    this.__line(island, "branch", "if not (rodDurability < dangerLevel) then jump 19", "0x1B5C");
    return this.trace;
  }

  island_526() {
    const island = { index: 526, start: "0x1B60", end: "0x1B6D" };
    this.__line(island, "assign", "r = (dangerLevel * c0_95)", "0x1B69");
    return this.trace;
  }

  island_527() {
    const island = { index: 527, start: "0x1B6D", end: "0x1B70" };
    this.__line(island, "jump", "jump 16", "0x1B6D");
    return this.trace;
  }

  island_528() {
    const island = { index: 528, start: "0x1B70", end: "0x1B7D" };
    this.__line(island, "assign", "r = (rodDurability * c0_95)", "0x1B79");
    return this.trace;
  }

  island_530() {
    const island = { index: 530, start: "0x1B8F", end: "0x1B9A" };
    this.__line(island, "branch", "if not (negTq < c0) then jump 11", "0x1B96");
    return this.trace;
  }

  island_531() {
    const island = { index: 531, start: "0x1B9A", end: "0x1BA2" };
    this.__line(island, "assign", "negTq = c0", "0x1B9E");
    return this.trace;
  }

  island_532() {
    const island = { index: 532, start: "0x1BA2", end: "0x1BC2" };
    this.__line(island, "assign", "rodDamage = (rodDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1BBE");
    return this.trace;
  }

  island_533() {
    const island = { index: 533, start: "0x1BC2", end: "0x1BDA" };
    this.__line(island, "assign", "rodBroken = floor((rodDamage / partBreakPoint))", "0x1BD6");
    this.__line(island, "expr", "Math", "0x1BD9");
    return this.trace;
  }

  island_534() {
    const island = { index: 534, start: "0x1BDA", end: "0x1BE6" };
    this.__line(island, "branch", "if not (rodBroken > cylinderNumber) then jump 12", "0x1BE2");
    return this.trace;
  }

  island_535() {
    const island = { index: 535, start: "0x1BE6", end: "0x1BEF" };
    this.__line(island, "assign", "rodBroken = cylinderNumber", "0x1BEB");
    return this.trace;
  }

  island_536() {
    const island = { index: 536, start: "0x1BEF", end: "0x1BFB" };
    this.__line(island, "branch", "if not (valveDurability < dangerLevel) then jump 19", "0x1BF7");
    return this.trace;
  }

  island_537() {
    const island = { index: 537, start: "0x1BFB", end: "0x1C08" };
    this.__line(island, "assign", "r = (dangerLevel * c0_95)", "0x1C04");
    return this.trace;
  }

  island_538() {
    const island = { index: 538, start: "0x1C08", end: "0x1C0B" };
    this.__line(island, "jump", "jump 16", "0x1C08");
    return this.trace;
  }

  island_539() {
    const island = { index: 539, start: "0x1C0B", end: "0x1C18" };
    this.__line(island, "assign", "r = (valveDurability * c0_95)", "0x1C14");
    return this.trace;
  }

  island_541() {
    const island = { index: 541, start: "0x1C2A", end: "0x1C35" };
    this.__line(island, "branch", "if not (negTq < c0) then jump 11", "0x1C31");
    return this.trace;
  }

  island_542() {
    const island = { index: 542, start: "0x1C35", end: "0x1C3D" };
    this.__line(island, "assign", "negTq = c0", "0x1C39");
    return this.trace;
  }

  island_543() {
    const island = { index: 543, start: "0x1C3D", end: "0x1C5D" };
    this.__line(island, "assign", "valveDamage = (valveDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1C59");
    return this.trace;
  }

  island_544() {
    const island = { index: 544, start: "0x1C5D", end: "0x1C75" };
    this.__line(island, "assign", "valveBroken = floor((valveDamage / partBreakPoint))", "0x1C71");
    this.__line(island, "expr", "Math", "0x1C74");
    return this.trace;
  }

  island_545() {
    const island = { index: 545, start: "0x1C75", end: "0x1C81" };
    this.__line(island, "branch", "if not (valveBroken > valveNumber) then jump 12", "0x1C7D");
    return this.trace;
  }

  island_546() {
    const island = { index: 546, start: "0x1C81", end: "0x1C8A" };
    this.__line(island, "assign", "valveBroken = valveNumber", "0x1C86");
    return this.trace;
  }

  island_547() {
    const island = { index: 547, start: "0x1C8A", end: "0x1C96" };
    this.__line(island, "branch", "if not (engineBlockDurability < dangerLevel) then jump 19", "0x1C92");
    return this.trace;
  }

  island_548() {
    const island = { index: 548, start: "0x1C96", end: "0x1CA3" };
    this.__line(island, "assign", "r = (dangerLevel * c0_95)", "0x1C9F");
    return this.trace;
  }

  island_549() {
    const island = { index: 549, start: "0x1CA3", end: "0x1CA6" };
    this.__line(island, "jump", "jump 16", "0x1CA3");
    return this.trace;
  }

  island_550() {
    const island = { index: 550, start: "0x1CA6", end: "0x1CB3" };
    this.__line(island, "assign", "r = (engineBlockDurability * c0_95)", "0x1CAF");
    return this.trace;
  }

  island_552() {
    const island = { index: 552, start: "0x1CC5", end: "0x1CD0" };
    this.__line(island, "branch", "if not (negTq < c0) then jump 11", "0x1CCC");
    return this.trace;
  }

  island_553() {
    const island = { index: 553, start: "0x1CD0", end: "0x1CD8" };
    this.__line(island, "assign", "negTq = c0", "0x1CD4");
    return this.trace;
  }

  island_554() {
    const island = { index: 554, start: "0x1CD8", end: "0x1CF8" };
    this.__line(island, "assign", "engineBlockDamage = (engineBlockDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1CF4");
    return this.trace;
  }

  island_555() {
    const island = { index: 555, start: "0x1CF8", end: "0x1D10" };
    this.__line(island, "assign", "engineBlockBroken = floor((engineBlockDamage / partBreakPoint))", "0x1D0C");
    this.__line(island, "expr", "Math", "0x1D0F");
    return this.trace;
  }

  island_556() {
    const island = { index: 556, start: "0x1D10", end: "0x1D1C" };
    this.__line(island, "branch", "if not (engineBlockBroken > c1) then jump 12", "0x1D18");
    return this.trace;
  }

  island_557() {
    const island = { index: 557, start: "0x1D1C", end: "0x1D25" };
    this.__line(island, "assign", "engineBlockBroken = c1", "0x1D21");
    return this.trace;
  }

  island_558() {
    const island = { index: 558, start: "0x1D25", end: "0x1D31" };
    this.__line(island, "branch", "if not (headGasketDurability < dangerLevel) then jump 19", "0x1D2D");
    return this.trace;
  }

  island_559() {
    const island = { index: 559, start: "0x1D31", end: "0x1D3A" };
    this.__line(island, "stackTail", "(dangerLevel * c0_95)", "0x1D3A");
    return this.trace;
  }

  island_561() {
    const island = { index: 561, start: "0x1D3E", end: "0x1D41" };
    this.__line(island, "jump", "jump 16", "0x1D3E");
    return this.trace;
  }

  island_562() {
    const island = { index: 562, start: "0x1D41", end: "0x1D4E" };
    this.__line(island, "assign", "r = (headGasketDurability * c0_95)", "0x1D4A");
    return this.trace;
  }

  island_564() {
    const island = { index: 564, start: "0x1D60", end: "0x1D6B" };
    this.__line(island, "branch", "if not (negTq < c0) then jump 11", "0x1D67");
    return this.trace;
  }

  island_565() {
    const island = { index: 565, start: "0x1D6B", end: "0x1D73" };
    this.__line(island, "assign", "negTq = c0", "0x1D6F");
    return this.trace;
  }

  island_566() {
    const island = { index: 566, start: "0x1D73", end: "0x1D93" };
    this.__line(island, "assign", "headGasketDamage = (headGasketDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1D8F");
    return this.trace;
  }

  island_567() {
    const island = { index: 567, start: "0x1D93", end: "0x1DAB" };
    this.__line(island, "assign", "headGasketBroken = floor((headGasketDamage / partBreakPoint))", "0x1DA7");
    this.__line(island, "expr", "Math", "0x1DAA");
    return this.trace;
  }

  island_568() {
    const island = { index: 568, start: "0x1DAB", end: "0x1DB7" };
    this.__line(island, "branch", "if not (headGasketBroken > c1) then jump 12", "0x1DB3");
    return this.trace;
  }

  island_569() {
    const island = { index: 569, start: "0x1DB7", end: "0x1DC0" };
    this.__line(island, "assign", "headGasketBroken = c1", "0x1DBC");
    return this.trace;
  }

  island_570() {
    const island = { index: 570, start: "0x1DC0", end: "0x1E05" };
    this.__line(island, "assign", "engineDamage = ((((((pistonBroken / cylinderNumber) * c0_4) + ((valveBroken / valveNumber) * c0_2)) + ((rodBroken / cylinderNumber) * c0_1)) + (headGasketBroken * c0_1)) + (engineBlockBroken * c0_4))", "0x1E01");
    return this.trace;
  }

  island_571() {
    const island = { index: 571, start: "0x1E05", end: "0x1E11" };
    this.__line(island, "branch", "if not (engineDamage > c0_65) then jump 12", "0x1E0D");
    return this.trace;
  }

  island_572() {
    const island = { index: 572, start: "0x1E11", end: "0x1E1A" };
    this.__line(island, "assign", "engineDamage = c0_65", "0x1E16");
    return this.trace;
  }

  island_574() {
    const island = { index: 574, start: "0x1E2E", end: "0x1E34" };
    this.__line(island, "assign", "isEngineLightOn = 1", "0x1E30");
    return this.trace;
  }

  island_575() {
    const island = { index: 575, start: "0x1E34", end: "0x1E41" };
    this.__line(island, "stackTail", "sprite(flashSP) | runEngineDamageLightCB", "0x1E41");
    return this.trace;
  }

  island_577() {
    const island = { index: 577, start: "0x1E46", end: "0x1E4F" };
    this.__line(island, "branch", "if not (timeAnchor > VOID) then goto 0x1E83", "0x1E4B");
    return this.trace;
  }

  island_578() {
    const island = { index: 578, start: "0x1E4F", end: "0x1E56" };
    this.__line(island, "stackTail", "sprite | flashSP", "0x1E56");
    return this.trace;
  }

  island_581() {
    const island = { index: 581, start: "0x1E7D", end: "0x1E80" };
    this.__line(island, "jump", "jump 0x0026", "0x1E7D");
    return this.trace;
  }

  island_582() {
    const island = { index: 582, start: "0x1E80", end: "0x1E83" };
    this.__line(island, "stackTail", "sprite", "0x1E83");
    return this.trace;
  }

}

module.exports = { Lscr102Block08PromotedSafe };
