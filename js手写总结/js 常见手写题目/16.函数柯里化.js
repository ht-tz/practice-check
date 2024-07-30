function curry(fn) {
    return function curried(...args) {
        if (args.length < fn.length) {
            return function (...args1) {
                return curried(...args, ...args1)
            }
        } else {
            return fn.apply(this,args)
        }
    }
}

// 函数柯里化：将一个多参数函数转换成多个单参数函数，并且返回一个接受余下参数的函数

const sum = (a, b, c) => {
    return a + b + c
}

const curriedSum = curry(sum)
console.log(curriedSum(1)(2)(3))