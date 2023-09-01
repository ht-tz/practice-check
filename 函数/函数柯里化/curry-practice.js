//，柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，
//并且返回接受余下的参数且返回结果的新函数的技术。

/**
 * 柯里化的优点：
 *    1.缓存参数
 *    2.多元函数转换为一元函数，让函数变得比较灵活，函数粒度更小
 *    3.组合函数可以实现更强大的功能
 */
function currying(fn) {
    //返回一个函数 
    return function currieFn(...args) {
          //判断形势参数和实际参数的个数， 实际参数的个数小于形参个数，缓存参数
          if(args.length < fn.length) {
              return function (...arg) {
                  return currieFn(...args.concat([...arg]))
              }
          } else {
                //参数缓存够就去执行函数
              return fn(...args)
          }
    }
}


const sum  = (a,b,c) => a+b+c
 
const sum1 = currying(sum)
console.log(sum1(1)(2)(3));

/**
 * 接收多个参数的函数转变成接收一个单一参数的函，并且返回接收余下参数且结果返回新函数的技术
 */


function currued(fn) {
    return function curriedFn(...args) {
        if(args.length <fn.length) {
            return function (...arg) {
                return curriedFn(...args.concat([...arg]))
            }
        } else {
            return  fn(...args)
        }
    }
}