class asyncQueue {
    constructor(limit) {
        this.queue = []
        this.limit = limit
        this.running = 0
    }

    addTask(task) {
        this.queue.push(task)
        this.runTask();
    }

    async runTask() {
        while (this.running < this.limit && this.queue.length > 0) {
            const task = this.queue.shift()
            this.running++
            try {
                await task()
            } catch (e) {
                console.log(e)
            }
            this.running--
        }
    }
}

// 柯里化风格

// 函数组合
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x)

// 柯里化
function curry(fn) {
    let len = fn.length
    return function curried(...args1) {
        if (args1.length < len) {
            return function (...args2) {
                return curried(...args1, ...args2)
            }
        } else {
            return fn.apply(this, ...args1)
        }
    }
}

const asyncQueue = curry((limit, queue) => {
    let running = 0
    const runTask = async (task) => {
        running++
        await task()
        running--
        runTasks()
    }
    const runTasks = () => {
        while (running < limit && queue.length > 0) {
            const task = this.queue.shift()
            runTask(task)
        }
    }
    return runTasks()
})