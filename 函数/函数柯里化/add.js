function add(...args1) {
    let params = args1
    const _add = function (...args2) {
        params = params.concat(args2)
        return _add
    }

    _add.valueOf = function () {
        return params.reduce((a, b) => a + b, 0)
    }
    return _add
}

let sum = add(2, 3)(4)(5)
console.log(sum.valueOf())