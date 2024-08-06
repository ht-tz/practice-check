//函数柯里化

//把接收多个参数的函数变换成接收一个接收单一参数函数，并返回接收剩余参数的函数的新技术

/**
 * 1.缓存参数
 * 2。多元函数转换为一元函数，函数的力度更小
 * 3。组合函数可以实现更强大的功能
 */

function curry(fn) {
     //返回一个函数
     return function curried(...args) {
         //判断形势参数和实际参数的个数
         if (args.length < fn.length) {
             //bibao缓存参数
             return function (...arg) {
                 return curried(...args.concat([...arg]))
             }
         }else {
             return fn(...args);
         }
     }
}
const sum  = (a,b,c)=>a+b+c;
const sum1 = curry(sum)
console.log(sum1(1)(2)(3))


const  curries = (fn)=> {
    return function (...args) {
        if (args.length > fn.length)  {
             return function (...arg) {
                 return curries(...args.concat(...arg))
             }
        } else {
             return fn(...args)
        }
    }
}