function curries (fn) {
    return function curry  (...args) {
        if(args.length < fn.length) { 
             return function(...thisArg) {
                  return curry(...args.concat([...thisArg]));
             }
        } else  {
             return fn(...args)
        }
    }

}

function getSum(a,b,c) {
    return a+b+c
}

 const sum = curries(getSum)
 console.log(sum(1)(2)(3));