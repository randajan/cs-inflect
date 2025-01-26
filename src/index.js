

const _pattern = /\[.+\]/;
const _cache = new Map();

const parsePattern = placeholder=>{
    if (!placeholder) { return; }
    let cached = _cache.get(placeholder);
    if (!cached) {
        _cache.set(placeholder, cached = placeholder.slice(1, -1).split("|"));
    }
    return cached;
}

const applyPattern = (num, pattern)=>{
    const nn = Math.round(num);
    const n = Math.abs(nn);

    if (nn !== num) { return pattern[0]; } //decimal
    if (n === 1) { return pattern[1]; }
    if (n > 1 && n < 5) { return pattern[2]; }
    return pattern[3];
}

export const csInflect = (str, num, zero=false, maxDecimal=2)=>{
    num = Number(num);
    if (isNaN(num) || (!num && !zero)) { return ""; }

    const placeholder = (str.match(_pattern) || [])[0];
    str = str.replace("#", num.toLocaleString(undefined, { maximumFractionDigits:maxDecimal }));

    if (!placeholder) { return str; }

    const pattern = parsePattern(placeholder);
    const inflected = applyPattern(num, pattern);

    return str.replace(placeholder, inflected || "");
}

export default csInflect;