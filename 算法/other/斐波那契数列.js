// 斐波那契数列

function fibonacci(n) {
    if (n < 1) throw TypeError("输入参数有误")
    if (n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n  - 2)
}

console.log(fibonacci(3))

//记忆函数
function memory(fn) {
    let obj = {};
    return function (n) {
        if (obj[n] === undefined) {
            obj[n] = fn(n)
            return obj[n];
        }
    }
}

let fb =memory(fibonacci)
console.log(fb(3))
