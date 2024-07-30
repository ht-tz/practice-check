// 判断类型， 正则和日期直接返回新对象
// 空或者非对象，直接返回原值
// 考虑循环引用，判读hash中如果有值就直接返回 hash中的值
// 新建一个对象加入hash
// 遍历原对象，判断类型，如果是对象，则递归调用深拷贝函数，否则直接赋值
function isObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
}

function deepClone(obj, hash = new WeakMap()) {
    if (obj instanceof RegExp) return new RegExp(obj)
    if (obj instanceof Date) return new Date(obj)
    if (!isObject(obj)) {
        return obj
    }
    // 循环引用的情况
    if (hash.has(obj)) return hash.get(obj)
    // Array new Array() obj  = new Object()
    // 处理对象和数组
    let result = Array.isArray(obj) ? [] : {}
    hash.set(obj, result)

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key], hash)
        }
    }

    let symbols = Object.getOwnPropertySymbols(obj)
    for (let i = 0; i < symbols.length; i++) {
        if (obj.hasOwnProperty(symbols[i])) {
            result[symbols[i]] = deepClone(obj[symbols[i]], hash)
        }
    }
    return result
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


let b = deepClone(obj);
console.log(b);