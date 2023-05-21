// alternative to Object.entries polyfill
// https://stackoverflow.com/questions/45849831/object-entries-alternative-for-internet-explorer-and-reactjs
export const getObjectEntries = <T>(obj: { [s: string]: T }): [string, T][] => {
  return Object.keys(obj).map((key) => [key, obj[key]]);
};

// alternative to Array.entries polyfill
export const getArrayEntries = <T>(obj: Array<T>): [number, T][] => {
  const keys: [number, T][] = [];
  for (let i = 0; i < obj.length; i++) {
    keys.push([i, obj[i]]);
  }
  return keys;
};

// alternative to Object.assign polyfill
// for a recursive method use one of the methods here:
// https://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically
//
// Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
// returns a new object based on obj1 and obj2
export const mergeOptions = (obj1: any, obj2: any, obj3?: any, obj4?: any) => {
  const resObj: any = {};
  for (const attrName in obj1) {
    resObj[attrName] = obj1[attrName];
  }
  for (const attrName in obj2) {
    resObj[attrName] = obj2[attrName];
  }
  if (obj3) {
    for (const attrName in obj3) {
      resObj[attrName] = obj3[attrName];
    }
  }
  if (obj4) {
    for (const attrName in obj4) {
      resObj[attrName] = obj4[attrName];
    }
  }
  return resObj;
};
