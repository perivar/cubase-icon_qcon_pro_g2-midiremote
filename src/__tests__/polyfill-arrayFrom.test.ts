// first undefine the method
Object.defineProperty(Array, 'from', {
    configurable: true,
    enumerable: true,
    value: undefined,
});

import '../polyfill/arrayFrom';

test('Array.from', () => {
    expect(Array.from('text')).toStrictEqual(['t', 'e', 'x', 't']);
    expect(Array.from({ 0: 'a', 1: 'b', 2: 'c', length: 3 })).toStrictEqual(['a', 'b', 'c']);
});
