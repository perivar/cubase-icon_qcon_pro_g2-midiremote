import { abbreviate } from '../abbreviate';

test('should respect trigraphs and triblends', () => {
    expect(abbreviate('Some Important String', { length: 8 })).toStrictEqual('SmImpStr');
});

test('should remove whitespace first', () => {
    expect(abbreviate('Word1 2Drow', { length: 8 })).toStrictEqual('Wrd12Drw');
});

test('should remove _ and -', () => {
    expect(abbreviate('Word1-2Drow_Word3', { length: 15 })).toStrictEqual('Word12DrowWord3');
});

test('should remove _ and -', () => {
    expect(abbreviate('so write score', { length: 5 })).toStrictEqual('swrsc');
});
