/* eslint-disable es/no-object-entries */
declare global {
  // https://github.com/microsoft/TypeScript/blob/v4.6.2/lib/lib.es2017.object.d.ts#L34-L44
  interface ObjectConstructor {
    entries<T>(o: { [s: string]: T }): [string, T][];
  }
}

// PIN Object.entries polyfill
// https://stackoverflow.com/questions/45849831/object-entries-alternative-for-internet-explorer-and-reactjs
if (!Object.entries) {
  // Object.entries = function <T>(obj: { [s: string]: T }): [string, T][] {
  //     return Object.keys(obj).reduce(function (arr: [string, T][], key: string) {
  //         arr.push([key, obj[key]]);
  //         return arr;
  //     }, []);
  // };

  Object.entries = function <T>(obj: { [s: string]: T }): [string, T][] {
    const ownProps = Object.keys(obj);
    let i = ownProps.length;
    const resArray = new Array(i); // preallocate the Array

    while (i--) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    }

    return resArray;
  };
}

export {};
