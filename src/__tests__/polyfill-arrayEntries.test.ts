// first undefine the method
Object.defineProperty(Array.prototype, 'entries', {
    configurable: true,
    enumerable: true,
    value: undefined,
});

import '../polyfill/arrayEntries';

class ClassVariable {
    numberVar: number;
    stringVar: string;

    constructor(numVar: number, strVar: string) {
        this.numberVar = numVar;
        this.stringVar = strVar;
    }

    set(numVar: number, strVar: string) {
        this.numberVar = numVar;
        this.stringVar = strVar;
    }

    get() {
        return [this.numberVar, this.stringVar];
    }
}

const elements: ClassVariable[] = [];
for (let index = 0; index < 5; index++) {
    elements.push(new ClassVariable(index, index.toString()));
}

test('Array.entries', () => {
    const entries: [number, ClassVariable][] = Array.entries(elements);

    expect(entries).toEqual([
        [0, { numberVar: 0, stringVar: '0' }],
        [1, { numberVar: 1, stringVar: '1' }],
        [2, { numberVar: 2, stringVar: '2' }],
        [3, { numberVar: 3, stringVar: '3' }],
        [4, { numberVar: 4, stringVar: '4' }],
    ]);
});
