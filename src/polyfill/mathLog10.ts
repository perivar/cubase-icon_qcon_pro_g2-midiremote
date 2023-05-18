declare global {
    interface Math {
        log10(x: number): number
    }
}

// PIN Math.log10 polyfill
if (!Math.log10) {
    Math.log10 = function (x: number): number {
        return Math.log(x) / Math.LN10
    }
}

export {}
