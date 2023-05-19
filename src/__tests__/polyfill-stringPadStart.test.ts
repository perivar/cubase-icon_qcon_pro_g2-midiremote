// first undefine the method
Object.defineProperty(String.prototype, 'padStart', {
    configurable: true,
    enumerable: true,
    value: undefined,
});

import '../polyfill/stringPadStart';

test('String.padStart', () => {
    expect('abc'.padStart(5)).toStrictEqual('  abc');
    expect('abc'.padStart(4, 'de')).toStrictEqual('dabc');
    expect('abc'.padStart(5, '_')).toStrictEqual('__abc');
    expect(''.padStart(0)).toStrictEqual('');
    expect('foo'.padStart(1)).toStrictEqual('foo');
    expect('foo'.padStart(5, '')).toStrictEqual('  foo');
});
