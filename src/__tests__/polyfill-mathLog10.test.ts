// first undefine the method
Object.defineProperty(Math, "log10", {
  configurable: true,
  enumerable: true,
  value: undefined,
});

import "../polyfill/mathLog10";

test("Math.log10", () => {
  expect(Math.log10(0.1)).toBeCloseTo(-1, 15);
  expect(Math.log10(0.5)).toBeCloseTo(-0.3010299956639812, 15);
  expect(Math.log10(1.5)).toBeCloseTo(0.17609125905568124, 15);
  expect(Math.log10(5)).toBeCloseTo(0.6989700043360189, 15);
  expect(Math.log10(50)).toBeCloseTo(1.6989700043360187, 15);
  expect(Math.log10(1000)).toBeCloseTo(3, 15);
});
