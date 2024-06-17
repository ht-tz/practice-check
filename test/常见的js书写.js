// 思路由于sleep功能， 函数不嫩直接在调用的时候触发
// 初始化一个列表， 把函数注册进去
// 由每一个item触发next执行( 遇见sleep 则异步触发， 使用settTimeout
class LazyMan {
    constructor(name) {
        this.name = name
        this.tasks = []
        // 注册完毕后开始执行
        setTimeout(() => {
            this.next()
        })
    }

    next() {
        const task = this.tasks.shift()
        if (task) task()
    }

    eat(food) {
        const task = () => {
            console.log(`${this.name} eat ${food}`)
            this.next()
        }

        this.tasks.push(task)
        return this
    }

    sleep(seconds) {
        const task = () => {
            console.info(`${this.name}开始休息${seconds}s`)
            setTimeout(() => {
                console.info(`${this.name} 已经睡完了 ${seconds}s，开始执行下一个任务`)
                this.next()
            }, seconds * 1000)
        }
        this.tasks.push(task)
        return this
    }
}

const me = new LazyMan('张三')
me.eat('苹果').eat('香蕉').sleep(2).eat('葡萄').eat('西瓜').sleep(2).eat('橘子')


// // //随机生成颜色
// // function generateRandomColor() {
// //   var letters = '0123456789ABCDEF';
// //   var color = '#';
// //   for (var i = 0; i < 6; i++) {
// //     color += letters[Math.floor(Math.random() * 16)];
// //   }
// //   return color;
// // }
// // generateRandomColor()
//
// // 判断数组的包含关系
//
// // const a = [1,3,5,6,7]
// // const b = [1,3,5,6,7,8]
// //
// function  juadge(A,B) {
//      let str1 = A.sort((a,b=>a - b)).join('')
//      let str2 = B.sort((a,b=>a - b)).join('')
//       if(str1 === str2) return 0
//       if(str1.includes(str2)) return 2
//       if(str2.includes(str1)) return  1
// }
//
//
// function isObject(obj) {
//     return Object.prototype.toString.call(obj).slice(8, -1) === "object"
// }
//
// //合并对象
// function mergeObj(obj1, obj2) {
//      let res = {...obj1}
//      for(let key in obj2) {
//           if(isObject(obj2[key]) && isObject(res[key])) {
//                res[key] = mergeObj(res[key],obj2[key])
//           } else {
//               res[key] = obj2[key]
//           }
//      }
//      return res
// }
//
//

// 求数组的交集 差集 和 并集合

// let arr4 = [1,2,43,7,78,782,0]
// let arr5 = [1,2,4,7,71,76,0]
//  function union(arr1, arr2) {
//     let  arr3  = [...arr1, ...arr2]
//      return [...new Set(arr3)]
//  }
//
// console.log(union(arr4,arr5))
//
// //交集
// function intersections(arr1,arr2) {
//     let res= []
//     for (let i = 0; i < arr1 ; i++) {
//         if(arr2.includes(arr1[i])) {
//             res.push(arr1[i])
//         }
//     }
//     return res
// }
//
// function  chaji(arr1, arr2) {
//     return arr1.filter(item => !arr2.includes(item))
// }

// function isCircle(obj) {
//     let seenSets = new WeakSet()
//     function detect(obj) {
//         if (typeof obj === 'object') {
//             if (seenSets.has(obj)) {
//                 return true
//             }
//             seenSets.add(obj)
//             for (let key in obj) {
//                 if (detect(obj[key])) {
//                     return true
//                 }
//             }
//         }
//         return false
//     }
//
//     return detect(obj)
// }
//
// let cyclicObj2 = { a: { b: null } };
// cyclicObj2.a.b = cyclicObj2.a;
//
//

// console.log(isCircle(cyclicObj2)); // true.
//
// function unflattenObject(obj) {
//     let res = {}
//     for(let key in obj) {
//         let keys = key.split('.')
//         let temp = res
//         for(let i = 0; i < keys.length; i++) {
//              if(keys.length - 1 === i) {
//                  temp[keys[i]] = obj[key]
//              } else{
//                  if(!temp[keys[i]]) {
//                      temp[keys[i]] = {}
//                  }
//                  temp = temp[keys[i]]
//              }
//             console.log(temp)
//         }
//     }
//   console.log(res)
// }
//
// let testObj = {
//     'a.b.c': 1,
//     'd.e': [2, 3],
// };
//
// console.log(unflattenObject(testObj)); // 输出：{ a: { b: { c: 1 } }, d: { e: [2,3] } }

// let obj1 = {a: {b: {c: 1}}, d: {e: [2, 3]}}
// // let testObj = {
// //     'a.b.c': 1,
// //     'd.e': [2, 3],
// // };
// function isObject(obj) {
//     return Object.prototype.toString.call(obj).slice(8, -1) === "Object"
// }
//
// // 数组，日期，正则注意处理
// function flattenObj(obj, res = {}, prefix = "") {
//     for (let key in obj) {
//         let newKey = prefix ? `${prefix}.${key}` : key
//         let value = obj[key]
//         if (isObject(value) &&  value !== null) {
//             flattenObj(obj[key], res, newKey)
//         } else {
//             res[newKey] = obj [key]
//         }
//     }
//     return res
// }
//
// function flattenObject(obj, prefix = '', res = {}) {
//     for (let key in obj) {
//         let newKey = prefix ? `${prefix}.${key}` : key;
//         if (typeof obj[key] === 'object' && obj[key] !== null) {
//             flattenObject(obj[key], newKey, res);
//         } else {
//             res[newKey] = obj[key];
//         }
//     }
//     return res;
// }
//
// console.log(flattenObj(obj1))

// function compose(...args) {
//     return function (...args2) {
//         if (args.length === 0) return
//         if (args.length === 1) return args[0]
//         return args.reduceRight((acc, cur) => {
//             return cur(acc(...args2))
//         })
//     }
// }
//
// function fn1(x) {
//     return x + 1;
// }
//
// function fn2(x) {
//     return x + 2;
// }
//
//
// const result = compose(fn1, fn2);
// console.log(result(1))
//
// function partial(fn, ...args) {
//     if (typeof fn !== 'function') {
//         throw new TypeError(`${typeof fn} is not a function`)
//     }
//     return function (...arr) {
//         fn.apply(fn, args.concat(arr))
//     }
// }
// function a(a, b, c) {
//     console.log(a, b, c)
// }
//
// const fn = partial(a, 1, 2)
//
// fn(3)


// function  once(fn) {
//      let flag  = false
//      return function (...args) {
//           if(!flag) {// function curried(fn) {
// //     return function curry(...args) {
// //         if (args.length < fn.length) {
// //             return function (...thisArgs) {
// //                 return curry(...args.concat([...thisArgs]))
// //             }
// //         } else {
// //             return fn(...args)
// //         }
// //     }
// // }
// //
// // let sum = function (a, b, c) {
// //     return a + b + c
// // }
// //
// // let sf = curried(sum)
// // console.log(sf(1)(2)(3))
// //
// // //把字符串转为base64 编码
// // function stringToBase64(str) {
// //      const base64 = encodeURI(str)
// //     return btoa(base64)
// // }
// //
// // function base64ToString(base64) {
// //     const str = decodeURI(base64)
// //     return atob(str)
// // }
// //
//               fn.apply(this,  args)
//               flag  = true
//           }
//      }
// }
//
// let f1 = function() {
//     console.log(1)
// }
//
// let d = once(f1)
// d()
// d()
