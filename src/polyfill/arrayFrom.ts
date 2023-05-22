/* eslint-disable es/no-array-from */
declare global {
  interface ArrayConstructor {
    from<T>(arrayLike: ArrayLike<T>): Array<T>;
    // from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): Array<U>
  }
}

// PIN Array.from polyfill
if (!Array.from) {
  // https://stackoverflow.com/questions/36810940/alternative-or-polyfill-for-array-from-on-the-internet-explorer
  Array.from = function <T>(arrayLike: ArrayLike<T>): Array<T> {
    // shorthand
    // return Array.prototype.slice.call(arrayLike)

    const result = [];

    for (let i = 0; i < arrayLike.length; i++) {
      result[i] = arrayLike[i];
    }

    return result;
  };
}

export {};
