declare global {
  interface Array<T> {
    flatMap<U, This = undefined>(
      callback: (this: This, value: T, index: number, array: T[]) => U | U[],
      thisArg?: This
    ): U[];
  }
}

// PIN Array.flatMap polyfill
if (!Array.prototype.flatMap) {
  // https://estada.ch/2019/6/10/javascript-arrayprototypeflatmap-polyfill/
  Array.prototype.flatMap = function <U, T, This = undefined>(
    callback: (this: This, value: T, index: number, array: T[]) => U | U[],
    thisArg?: This
  ): U[] {
    const self = thisArg || this;
    if (self === null) {
      throw new TypeError('Array.prototype.flatMap ' + 'called on null or undefined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    let list: U[] = [];

    // 1. Let O be ? ToObject(this value).
    const o = Object(self);

    // 2. Let len be ? ToLength(? Get(O, "length")).
    const len = o.length >>> 0;

    for (let i = 0; i < len; ++i) {
      if (i in o) {
        const part_list = callback.call(self as This, o[i], i, o);
        list = list.concat(part_list);
      }
    }

    return list;

    // https://stackoverflow.com/questions/69091407/use-an-alternate-for-flatmap-in-javascript
    /*
        const self = thisArg || this;
        const result = [];

        for (let i = 0; i < this.length; ++i) {
            let item = callback.call(self as This, this[i], i, this);

            if (!Array.isArray(item)) {
                item = [item];
            }

            for (let j = 0; j < item.length; ++j) {
                result.push(item[j]);
            }
        }

        return result;
        */
  };
}

export {};
