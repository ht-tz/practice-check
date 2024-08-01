function add(...args1) {
    let p1 = args1
    const addFn = (...args2) => {
        p1 = [...p1, ...args2]
        return addFn
    }
    addFn.valueOf = function () {
        let sum = p1.reduce((acc, cur) => acc + cur, 0)
        return sum
    }
    return addFn
}

console.log(add(1)(2)(3)(4).valueOf()) // 10