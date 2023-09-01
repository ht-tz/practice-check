function deepClone(obj, hash = new WeakMap()) {

    if (obj instanceof Date) {
        return new Date(obj)
    }
    if (obj instanceof RegExp) {
        return new RegExp(obj)
    }

    if (typeof obj === 'function') {
        return obj
    }

    if (obj instanceof Map) {
        return new Map([...obj])
    }

    if (obj instanceof Set) {
        return new Set([...obj])

    }
    if (!isObject(obj)) {
        return obj
    }

    if (hash.has(obj)) {
        return hash.get(obj)
    }

    let newObj = Array.isArray(obj) ? [] : {}
    hash.set(obj, newObj)

    //处理symbolkey 
    let symbolkeys = Object.getOwnPropertySymbols(obj)

    if (symbolkeys.length) {
        for (let symbolkey of symbolkeys) {
            newObj[symbolkey] = deepClone(obj[symbolkey], hash)
        }
    }

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key], hash)

        }
    }
    return newObj;
}

//    测试代码
let s1 = Symbol("aaa")
let s2 = Symbol("bbb")

const obj = {
    name: "why",
    age: 18,
    friend: {
        name: "james",
        address: {
            city: "广州"
        }
    },
    // 数组类型
    hobbies: ["abc", "cba", "nba"],
    // 函数类型
    foo: function (m, n) {
        console.log("foo function")
        console.log("100代码逻辑")
        return 123
    },
    // Symbol作为key和value
    [s1]: "abc",
    s2: s2,
    // Set/Map
    set: new Set(["aaa", "bbb", "ccc"]),
    map: new Map([["aaa", "abc"], ["bbb", "cba"]])
}

obj.info = obj

const newObj = deepClone(obj)
console.log(newObj === obj)

obj.friend.name = "kobe"
obj.friend.address.city = "成都"
console.log(newObj)
console.log(newObj.s2 === obj.s2)

console.log(newObj.info.info.info)
function isObject(value) {
    let type = typeof value;
    return (value !== null) && (type === 'object' || type === 'function')
}