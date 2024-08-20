function deepCopy(obj, hash = new WeakMap()) {
    if (obj === null) return null
    if (typeof obj !== 'object') return obj
    if (obj instanceof Date) return new Date(obj)
    if (obj instanceof RegExp) return new RegExp(obj)
    if (hash.has(obj)) return hash.get(obj)
    let res = Array.isArray(obj) ? [] : {}
    hash.set(obj, res)

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            res[key] = deepCopy(obj[key], hash)
        }
    }

    let symbolKeys = Object.getOwnPropertySymbols(obj)
    for (let i = 0; i < symbolKeys.length; i++) {
        if (obj.hasOwnProperty(symbolKeys[i])) {
            res[symbolKeys[i]] = deepCopy(obj[symbolKeys[i]], hash)
        }
    }
    return res
}

let obj = {
    a: {
        b: Symbol(1)
    },
    c: new Date(),
    d: /abc/,
    e: [1, 2, 3],
    f: function () {
    },
    k:1,
    h: {
        v: 355
    }
}

console.log(deepCopy(obj))