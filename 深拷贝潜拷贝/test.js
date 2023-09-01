function isObject(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1) === "Object"
}

function deepClone(obj, hash = new WeakMap()) {
    if (obj === null) return obj;
    if (obj instanceof Date) return new Date(obj)
    if (obj instanceof RegExp) return new RegExp(obj)
    if (!isObject(obj)) return obj
    let newObj = Array.isArray(obj) ? [] : {}
    if (hash.has(obj)) return hash.has(obj)
    let symbolKeys = Object.getOwnPropertySymbols(obj)
    if (symbolKeys && symbolKeys.length > 0) {
        symbolKeys.forEach(el => {
            if (isObject(obj[el])) {
                newObj[el] = deepClone(obj[el], hash)
            } else {
                newObj[el] = obj[el]
            }
        })
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (isObject(obj[key])) {
                newObj[key] = deepClone(obj[key])
            } else {
                newObj[key] = obj[key]
            }
        }
    }
    return newObj;
}

let obj = {
    name: "hl",
    book: {
        title: "You Don't Know JS",
        price: "45"
    },
    a1: undefined,
    a2: null,
    a8: Symbol(1),
    a3: 123
}

const sys1 = Symbol(1)
obj[sys1] = 'test'
console.log(deepClone(obj))

{
    
}
