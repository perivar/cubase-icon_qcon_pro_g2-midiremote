declare global {
  interface String {
    padStart(targetLength: number, padString: string): string;
  }
}

// PIN String.prototype.padStart polyfill
if (!String.prototype.padStart) {
  String.prototype.padStart = function (targetLength: number, padString: string) {
    targetLength = Math.floor(targetLength) || 0;
    if (targetLength < this.length) return String(this);

    padString = padString ? String(padString) : " ";

    let pad = "";
    const len = targetLength - this.length;
    let i = 0;
    while (pad.length < len) {
      if (!padString[i]) {
        i = 0;
      }
      pad += padString[i];
      i++;
    }

    return pad + String(this).slice(0);
  };
}

export {};
