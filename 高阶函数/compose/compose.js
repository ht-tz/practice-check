//compose函数从右到左执行，比如 compose（f,g,h) =》f(g(h))
function compose(...funcs){
    if (!funcs.length) return (v)=>v;
    if (funcs.length === 1 ){
        return funcs[0]
    }
    return funcs.reduce((a,b)=>(...args)=>a(b(args)))
}

function fn1(x) {
    return x + 1;
}
function fn2(x) {
    return x + 2;
}
function fn3(x) {
    return x + 3;
}
function fn4(x) {
    return x + 4;
}

const result  = compose(fn1,fn2,fn3,fn4);
console.log(result(1))


//基础版本的composed函数
function compose1(...args) {
    return function(value) {
        return args.reverse().reduce(function(pre,cur){
            return  cur(pre)
         },value)
    }
    
} 
const result1  = compose1(fn1,fn2,fn3,fn4);
console.log(result1(1))

const compose3 = (...args)=> value=> args.reverse().reduce((pre,cur)=> cur(pre),value)

const result2 = compose3(fn1,fn2,fn3,fn4);
console.log(result2(1))

