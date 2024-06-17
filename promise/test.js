// promise 窜行
async function promiseSerial(array) {
    for (let p of array) {
        let res = await p
        console.log(res)
    }
}


let p1 = new Promise(resolve => setTimeout(() => resolve('Promise1 resolved'), 1000))
let p2 = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 4000))
let p3 = new Promise(resolve => setTimeout(() => resolve('Promise 3 resolved'), 500))

const promiseArray = [p1, p2, p3]



promiseArray.reduce((acc, cur) => {
    return acc.then(() => cur.then(res=>{
        console.log(res)
    }))
}, Promise.resolve())

