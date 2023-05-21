/* eslint-disable es5/no-es6-static-methods */
// first undefine the method
Object.defineProperty(Object, 'assign', {
  configurable: true,
  enumerable: true,
  value: undefined,
});

import '../polyfill/objectAssign';

test('Object.assign', () => {
  expect(Object.assign({}, { q: 1 }, { w: 2 })).toStrictEqual({ q: 1, w: 2 });
  expect(Object.assign({}, 'qwe')).toStrictEqual({ 0: 'q', 1: 'w', 2: 'e' });
});
