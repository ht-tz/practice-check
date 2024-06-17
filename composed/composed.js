function composed(...funcs) {
    if (funcs.length === 0) return args => args

    if (funcs.length === 1) return funcs[0]
    return funcs.reduceRight((pre, cur) => {
        console.log(pre)
        console.log(cur)
        return function (...args) {
            return cur(pre(...args))
        }
    })
}

const f1 = (x) => x + 4
const f2 = (x) => x + 3
const f3 = (x) => x + 2

let ar = [f1, f2, f3]

let a = composed(...ar)
let c = a(1)
console.log(c)