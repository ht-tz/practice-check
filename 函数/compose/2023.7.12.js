function compose(...fn) {
    if(!fn.length)  return (v)=>v 
    if(fn.length == 1) {
        return fn[0]
    }
    return fn.reduce((pre,cur)=>{
        return (...args)=>pre(cur(...args))
    })
}

function fn1(x) {
    return x + 1;
}
function fn2(x) {
    return x + 2;
}


const result  = compose(fn1,fn2);
console.log(result(1))