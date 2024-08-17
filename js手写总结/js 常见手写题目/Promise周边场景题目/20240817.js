// const delay = (timeout) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(timeout)
//         }, timeout)
//     })
// }
//
//
// async function retry(fn, attempt, timeout, cache) {
//     let count = 0
//     while (count < attempt) {
//         try {
//             return await Promise.race([fn, delay(timeout)])
//         } catch (e) {
//             count++
//             console.log(`attempt${count} failed! ${e}`)
//             if (count === attempt) {
//                 return cache
//             }
//         }
//     }
// }
//
// let num =  3
// let atp =5
//  let p = Promise.reject(new Error('error'))
// let cacheData = "cache"
//
//  retry(p, atp, 3000, cacheData).then(res =>{
//      console.log(res)
//  }).catch(e=>{
//      console.log(e)
//  })

function isType(obj) {
    let typeStr = Object.prototype.toString.call(obj)
    return typeStr.slice(8, -1).toLowerCase()
}

console.log(isType(4))

function deepClone(obj, hash = new WeakMap()) {
    if (obj instanceof RegExp) return new RegExp(obj)
    if (obj instanceof Date) return new Date(obj)
    if (obj === null || isType(obj) !== 'object') return obj
    if (hash.has(obj)) return hash.get(obj)

    let newObj = Array.isArray(obj) ? [] : {}
    hash.set(obj, newObj)

    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            newObj[key] = deepClone(obj[key], hash)
    }

    let symbolKeys = Object.getOwnPropertySymbols(obj)
    for (let i = 0; i < symbolKeys.length; i++) {
        if (obj.hasOwnProperty(symbolKeys[i])) {
            newObj[symbolKeys[i]] = deepClone(obj[symbolKeys[i]], hash)
        }
    }
    return newObj
}

let obj1 = {
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


let b = deepClone(obj1);
console.log(b);

//JSON.stringfy
// function


let obj = {
    a: function () {  //丢失
        return 1
    },
    b: Symbol(1), // 丢失
    c: /a/, // 转换为空对象{}
    d: new Date(),  //转换为字符串
    e: undefined, // 丢失
}
// bigInt也会丢失

console.log(JSON.parse(JSON.stringify(obj)))