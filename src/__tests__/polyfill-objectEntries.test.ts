/* eslint-disable es/no-object-entries */
// first undefine the method
Object.defineProperty(Object, "entries", {
  configurable: true,
  enumerable: true,
  value: undefined,
});

import "../polyfill/objectEntries";

test("Object.entries", () => {
  expect(Object.entries({ q: 1, w: 2, e: 3 })).toStrictEqual([
    ["q", 1],
    ["w", 2],
    ["e", 3],
  ]);

  expect(Object.entries(new String("qwe"))).toStrictEqual([
    ["0", "q"],
    ["1", "w"],
    ["2", "e"],
  ]);
});
