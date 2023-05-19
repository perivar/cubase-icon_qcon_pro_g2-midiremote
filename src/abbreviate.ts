// Abbreviate strings in style of R: Abbreviate
// Copyright (c) 2015 Paul Pflugradt Licensed under the MIT license.
// https://github.com/paulpflug/abbreviate/blob/master/src/index.coffee

const regexes = [/[\s\-_,]/, /[\W]/, /[aieouäöü]/, /[a-z]/, /[AIEOUÄÖÜ]/, /[A-Z0-9]/];
const digraphs = ['ch', 'gh', 'gn', 'kn', 'ph', 'qu', 'sh', 'th', 'wh', 'wr'];
const diblends = [
    'bl',
    'br',
    'cl',
    'cr',
    'fl',
    'fr',
    'gl',
    'gr',
    'pl',
    'pr',
    'sc',
    'sl',
    'sm',
    'sn',
    'sp',
    'st',
];
const trigraphs = ['chr', 'sch'];
const triblends = ['shr', 'spl', 'spr', 'squ', 'str', 'thr'];

export const abbreviate = (
    str: string,
    arg: { length?: number; keepSeparators?: boolean; strict?: boolean }
) => {
    let length = arg.length;
    let keepSeparators = arg.keepSeparators;
    let strict = arg.strict;

    if (length == null) {
        length = 3;
    }

    if (keepSeparators == null) {
        keepSeparators = false;
    }

    if (strict == null) {
        strict = true;
    }

    if (length <= 0 && strict) {
        return '';
    }

    if (length >= str.length) {
        return str;
    }

    str = str.replace(/^[\s\-_,]+/, '').replace(/[\s\-_,]+$/, '');

    if (length >= str.length) {
        return str;
    }

    let chars = str.split('');
    let pos = 1;
    const order = [pos];
    let orderedCount = 1;
    let word = 1;
    const words = [1];
    let sep = 0;
    let newWord = false;
    let found = false;

    // forward search for word beginnings
    let i = 1;
    while (i < chars.length) {
        order.push(0);
        if (chars[i].search(regexes[0]) > -1) {
            words.push(0);
            newWord = true;
            sep++;
        } else {
            if (newWord) {
                newWord = false;
                word++;
                pos++;
                order[i] = pos;
                orderedCount++;

                // search for trigraphs/triblends
                // modified from original +2 to -2
                if (i < chars.length - 2) {
                    const ref = trigraphs.concat(triblends);
                    for (let k = 0, len = ref.length; k < len; k++) {
                        const tri = ref[k];
                        if (
                            tri[0] === chars[i].toLowerCase() &&
                            tri[1] === chars[i + 1].toLowerCase() &&
                            tri[2] === chars[i + 2].toLowerCase()
                        ) {
                            found = true;
                            break;
                        }
                    }
                }

                if (found) {
                    found = false;
                    pos++;
                    order.push(pos);
                    orderedCount++;
                    pos++;
                    order.push(pos);
                    orderedCount++;
                    words.push(word);
                    words.push(word);
                    i++;
                    i++;

                    // search for digraphs/diblends
                    // modified from original +1 to -1
                } else if (i < chars.length - 1) {
                    const ref1 = digraphs.concat(diblends);
                    for (let l = 0, len1 = ref1.length; l < len1; l++) {
                        const di = ref1[l];
                        if (
                            di[0] === chars[i].toLowerCase() &&
                            di[1] === chars[i + 1].toLowerCase()
                        ) {
                            found = true;
                            break;
                        }
                    }
                    if (found) {
                        found = false;
                        pos++;
                        order.push(pos);
                        orderedCount++;
                        words.push(word);
                        i++;
                    }
                }
            }
            words.push(word);
        }
        i++;
    }

    if (!strict) {
        let should = word;
        if (keepSeparators) {
            should += sep;
        }
        if (length < should) {
            length = should;
        }
    }

    // backward search for seperators
    if (keepSeparators) {
        i = 0;
        while (i < chars.length) {
            if (words[i] === 0) {
                order[i] = pos;
                orderedCount++;
                pos++;
            }
            i++;
        }
        pos = chars.length;
    } else {
        pos = chars.length;
        i = chars.length;
        while (i > 0) {
            i--;
            if (words[i] === 0) {
                order[i] = pos;
                orderedCount++;
                pos--;
            }
        }
    }

    // backward search for remaining chars
    let j = 1;
    let unfinished = true;
    while (j < regexes.length && unfinished) {
        i = chars.length;
        while (i > 0) {
            i--;
            if (!(order[i] > 0)) {
                if (chars[i].search(regexes[j]) > -1) {
                    order[i] = pos;
                    orderedCount++;
                    pos--;
                    if (orderedCount === chars.length) {
                        unfinished = false;
                        break;
                    }
                }
            }
        }
        j++;
    }

    // map selected chars
    chars = chars.map(function (val, i2) {
        if (length && order[i2] <= length) {
            return val;
        } else {
            return '';
        }
    });

    return chars.join('');
};
