declare global {
    interface Object {
        assign(target: any, ...rest: any): any
    }
}

// PIN Object.assign polyfill
if (!Object.assign) {
    Object.assign = function (target: any) {
        const to = Object(target)

        // .length of function is 2
        for (let index = 1; index < arguments.length; index++) {
            const source = arguments[index]

            if (source != null) {
                // Skip over if undefined or null
                if (!source) continue

                for (const key in source) {
                    // Avoid bugs when hasOwnProperty is shadowed
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        to[key] = source[key]
                    }
                }
            }
        }
        return to
    }
}

export {}
