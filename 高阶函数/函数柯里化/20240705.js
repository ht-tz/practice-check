function curried(fn) {
    return function curry(...args1) {
        if (args1.length < fn.length) {
            return function (...args2) {
                return curry(...args1.concat([...args2]))
            }
        } else {
           return fn(...args1)
        }
    }
}

function add(a, b, c) {
    return a + b + c
}

let sum = curried(add)

console.log(sum(1,2)(3)) // 6