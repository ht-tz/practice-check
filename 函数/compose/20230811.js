function compose(...fn) {
    if (!fn.length) return (v) => v
    if (fn.length === 1) return fn[0]
    return fn.reduce((acc, cur) => (...args) => acc(cur(...args)))
}

function fn1(a) {
    return a+2
}
function fn2(b) {
    return b+2
}

const testFn = compose(fn1, fn2)
console.log(testFn(1));