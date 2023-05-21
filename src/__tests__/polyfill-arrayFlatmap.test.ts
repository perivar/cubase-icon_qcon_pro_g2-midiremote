// first undefine the method
Object.defineProperty(Array.prototype, "flatMap", {
  configurable: true,
  enumerable: true,
  value: undefined,
});

import "../polyfill/arrayFlatMap";

test("Array.flatMap", () => {
  expect([].flatMap((it) => it)).toStrictEqual([]);
  expect([1, 2, 3].flatMap((it) => it)).toStrictEqual([1, 2, 3]);
  expect([1, 2, 3].flatMap((it) => [it, it])).toStrictEqual([1, 1, 2, 2, 3, 3]);
  expect([1, 2, 3].flatMap((it) => [[it], [it]])).toStrictEqual([[1], [1], [2], [2], [3], [3]]);
  expect([1, [2, 3]].flatMap(() => 1)).toStrictEqual([1, 1]);
});
