let p1 = new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 3000))
let p2 = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 2000))
let p3 = new Promise(resolve => setTimeout(() => resolve('Promise 3 resolved'), 1000))

let ps = [p1, p2, p3]

// function executeSerial2(arr) {
//     let res = []
//     return new Promise((resolve, reject) => {
//         arr.reduce((pre, cur) => {
//             //依次自行完毕返回
//             return pre.then(() => cur.then(data => res.push(data)))
//         }, Promise.resolve()).then(() => resolve(res))
//     })
// }
//
// let resArr = executeSerial2(ps)
// resArr.then(res => {
//     console.log(res)
// })

async function executeSerial(arr) {
    for (let p of arr) {
         let res = await p
         console.log(res)
    }
}

executeSerial(ps)