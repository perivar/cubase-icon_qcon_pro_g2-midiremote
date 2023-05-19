declare global {
    interface ArrayConstructor {
        entries<T>(obj: Array<T>): [number, T][];
    }
}

// PIN Array.entries polyfill
if (!Array.entries) {
    Array.entries = function <T>(obj: Array<T>): [number, T][] {
        const keys: [number, T][] = [];
        for (let i = 0; i < obj.length; i++) {
            keys.push([i, obj[i]]);
        }
        return keys;
    };
}

export {};
