function createTask(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`任务执行完成，耗时${time}秒`)
        }, time * 1000)
    })
}


function asyncTool(limit, iterable, iteratorFn) {
    let i = 0
    let ret = []
    let poolList = new Set()

    const enqueue = () => {
        if (i === iterable.length) {
            return Promise.resolve()
        }

        const task = iterable[i++]
        const p = Promise.resolve().then(() => iteratorFn(task, iterable))
        ret.push(p)
        poolList.add(p)
        //知识保持队列长度
        const clean = () => poolList.delete(p)
        //不管是失败还是成功，都从poolList中移除
        p.then(clean).catch(clean)
        let r = Promise.resolve()

        // 如果队列长度超过限制，则使用 Promise.race 方法，从队列中取出一个 Promise 对象，并执行它
        if (poolList.size >= limit) {
        }
            r = Promise.race([...poolList])

        // 返回一个 Promise 对象，该对象在队列中的 Promise 对象执行完毕后，再执行
        return r.then(() => enqueue())
    }
    return enqueue().then(() => Promise.allSettled(ret))
}