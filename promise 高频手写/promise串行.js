/**
 * 在Promise中，当后续的Promise需要用到之前的Promise处理结果时，需要Promise的串联，无论是then还是catch方法，他们都具有返回值， 返回的是一个全新的Promise对象。
 * 他的状态满足以下规则：
 *  如当前的Promise是未决的，得到的新Promise是挂起的状态
 * 如果当前的Promise是已决的，会运行响应后的处理函数，并将后续处理函数的处理结果（返回值）作为resolved的状态数据，应用得到的新的Promise对象，如果后续处理函数发生错误，则把返回值
 *  作为rejected的状态数据，应用到新的Promise对象。
 *  后续的Promise 一定会等到前面的Promise有了处理结果后才会变为已决状态
 * @param promises
 */

//async await

async function executeSerial(promises) {
    for (let p of promises) {
        let res = await p
        console.log(res)
    }
}

let p1 = new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 1000))
let p2 = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 2000))
let p3 = new Promise(resolve => setTimeout(() => resolve('Promise 3 resolved'), 1000))

const promises = [p1, p2, p3];

executeSerial(promises).then(res => {
    console.log('All promises resolved sequentially')
})


// reduce

function executeSerial2(promises) {
    return promises.reduce((p, c) => {
        return p.then(c)
    }, Promise.resolve())
}

let resArr = executeSerial2(([p1, p2, p3]))
resArr.then(res => {
    console.log(res)
})


// 3. forEach
function promiseSerial(promises) {
    let res = Promise.resolve()
    promises.forEach(p => {
        res = res.then(() => p)
    })
}

const promises = new Array(4).fill().map((item, index) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(index);
            resolve(index);
        }, index * 1000)
    })
})
promiseSerial(promises)

const p1 = new Promise((resolve, reject) => {
    resolve(123) //123 给p1 就是已决议状态
})

//123*2 返回状态就是已决议
const p2 = p1.then(res => res * 2)
p2.then(res => {
    console.log(res) // 输出456就是已决状态
})

const p1 = new Promise((resolve, reject) => {
    resolve(123) //123 给p1 就是已决议状态
})

//123*2 返回状态就是已决议
const p2 = p1.then(res => res * 2)
p2.then(res => {
    console.log(res) // 输出456就是已决状态
})

//reject/**
//  * 在Promise中，当后续的Promise需要用到之前的Promise处理结果时，需要Promise的串联，无论是then还是catch方法，他们都具有返回值， 返回的是一个全新的Promise对象。
//  * 他的状态满足以下规则：
//  *  如当前的Promise是未决的，得到的新Promise是挂起的状态
//  * 如果当前的Promise是已决的，会运行响应后的处理函数，并将后续处理函数的处理结果（返回值）作为resolved的状态数据，应用得到的新的Promise对象，如果后续处理函数发生错误，则把返回值
//  *  作为rejected的状态数据，应用到新的Promise对象。
//  *  后续的Promise 一定会等到前面的Promise有了处理结果后才会变为已决状态
//  * @param promises
//  */
//
// //async await
//
// async function executeSerial(promises) {
//     for (let p of promises) {
//         let res = await p
//         console.log(res)
//     }
// }
//
// let p1 = new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 1000))
// let p2 = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 2000))
// let p3 = new Promise(resolve => setTimeout(() => resolve('Promise 3 resolved'), 1000))
//
// const promises = [p1, p2, p3];
//
// executeSerial(promises).then(res => {
//     console.log('All promises resolved sequentially')
// })
//
//
// // reduce
//
// function executeSerial2(promises) {
//     return promises.reduce((p, c) => {
//         return p.then(c)
//     }, Promise.resolve())
// }
//
// let resArr = executeSerial2(([p1, p2, p3]))
// resArr.then(res => {
//     console.log(res)
// })
//
//
// // 3. forEach
// function promiseSerial(promises) {
//     let res = Promise.resolve()
//     promises.forEach(p => {
//         res = res.then(() => p)
//     })
// }
//
// const promises = new Array(4).fill().map((item, index) => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(index);
//             resolve(index);
//         }, index * 1000)
//     })
// })
// promiseSerial(promises)
//
// const p1 = new Promise((resolve, reject) => {
//     resolve(123) //123 给p1 就是已决议状态
// })
//
// //123*2 返回状态就是已决议
// const p2 = p1.then(res => res * 2)
// p2.then(res => {
//     console.log(res) // 输出456就是已决状态
// })
//
// //reject
// let pr = new Promise((resolve, reject) => {
//     throw 1 //推向rejected
// })
//
// const p3 = pr.then(res => {
//     // 这里的pro2先挂起，登Pro2先为挂起，pr.then()
//     return res * 2
// }, err => {
//     return err * 3 //推向已决
// })
// p3.then(res => {
//     console.log(res)
// })
//reject/**
//  * 在Promise中，当后续的Promise需要用到之前的Promise处理结果时，需要Promise的串联，无论是then还是catch方法，他们都具有返回值， 返回的是一个全新的Promise对象。
//  * 他的状态满足以下规则：
//  *  如当前的Promise是未决的，得到的新Promise是挂起的状态
//  * 如果当前的Promise是已决的，会运行响应后的处理函数，并将后续处理函数的处理结果（返回值）作为resolved的状态数据，应用得到的新的Promise对象，如果后续处理函数发生错误，则把返回值
//  *  作为rejected的状态数据，应用到新的Promise对象。
//  *  后续的Promise 一定会等到前面的Promise有了处理结果后才会变为已决状态
//  * @param promises
//  */
//
// //async await
//
// async function executeSerial(promises) {
//     for (let p of promises) {
//         let res = await p
//         console.log(res)
//     }
// }
//
// let p1 = new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 1000))
// let p2 = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 2000))
// let p3 = new Promise(resolve => setTimeout(() => resolve('Promise 3 resolved'), 1000))
//
// const promises = [p1, p2, p3];
//
// executeSerial(promises).then(res => {
//     console.log('All promises resolved sequentially')
// })
//
//
// // reduce
//
// function executeSerial2(promises) {
//     return promises.reduce((p, c) => {
//         return p.then(c)
//     }, Promise.resolve())
// }
//
// let resArr = executeSerial2(([p1, p2, p3]))
// resArr.then(res => {
//     console.log(res)
// })
//
//
// // 3. forEach
// function promiseSerial(promises) {
//     let res = Promise.resolve()
//     promises.forEach(p => {
//         res = res.then(() => p)
//     })
// }
//
// const promises = new Array(4).fill().map((item, index) => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(index);
//             resolve(index);
//         }, index * 1000)
//     })
// })
// promiseSerial(promises)
//
// const p1 = new Promise((resolve, reject) => {
//     resolve(123) //123 给p1 就是已决议状态
// })
//
// //123*2 返回状态就是已决议
// const p2 = p1.then(res => res * 2)
// p2.then(res => {
//     console.log(res) // 输出456就是已决状态
// })
//
// //reject
// let pr = new Promise((resolve, reject) => {
//     throw 1 //推向rejected
// })
//
// const p3 = pr.then(res => {
//     // 这里的pro2先挂起，登Pro2先为挂起，pr.then()
//     return res * 2
// }, err => {
//     return err * 3 //推向已决
// })
// p3.then(res => {
//     console.log(res)
// })
let pr = new Promise((resolve, reject) => {
    throw 1 //推向rejected
})

const p3 = pr.then(res => {
    // 这里的pro2先挂起，登Pro2先为挂起，pr.then()
    return res * 2
}, err => {
    return err * 3 //推向已决
})
p3.then(res => {
    console.log(res)
})
