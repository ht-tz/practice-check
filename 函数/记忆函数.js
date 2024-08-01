function memorize(fn) {
    let obj = {};
    return function (n) {
        if (obj[n] === undefined) {
            obj[n] = fn(n)
        }
        return obj[n]
    }

}

const sum = (a, b) => {
    return a + b
}

let fb = memorize(sum(3,8))
console.log(fb(2));