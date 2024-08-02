async function asyncToolEs7(poolLimit, iterable, iteratorFn) {
    const queue = []
    let executeSet = new Set()
    for (const item of iterable) {
        const p = Promise.resolve().then(() => iteratorFn(item, queue))
        queue.push(p)
        executeSet.add(p)
        const clean = () => executeSet.delete(p)
        // 无论成功不还是失败，都有保证Promise被清空
        p.then(clean).catch(clean)
        if (executeSet.size >= poolLimit) {
            await Promise.race(executeSet)
        }
    }
    console.log(queue)
    return Promise.all(queue)
}

let res = []
const sleep = (i) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(i)
        }, i*500)
    })
}

let limit = 2
let arr = [1, 2, 3, 4, 5]

asyncToolEs7(limit, arr, sleep).then((res) => {
    console.log(res)
})