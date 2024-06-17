function compose(...funcs) {
    if (funcs.length === 0) return args => args
    if (funcs.length === 1) return funcs[0]
    return funcs.reduce((acc, pre) => (...args) => acc(pre(args)))
}

function compose1(...funcs) {
    if (funcs.length === 0) return args => args
    if (funcs.length === 1) return funcs[0]
    return funcs.reduce((acc,cur) =>{
         return function (...args){
             return acc(cur(args))
         }
    })
}

let fn1 = function (x) {
    return 'a'+x
}

let fn2 = function (x) {
    return 'b'+x
}

let fn =  compose1(fn1,fn2)
let da = fn(1)
console.log(da)