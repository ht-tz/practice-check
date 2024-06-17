class AsyncQueue {
    constructor(max) {
        this.tasks = []
        this.max = max || 10
        this.results = []
        // 存储结果
        this.poolList = new Set()
    }

    addTask(task) {
        this.tasks.push(task)
    }

    async runTask() {
        let resArr = []
        for (let i = 0; i < this.tasks.length; i++) {
            // 如果并发达到最大值， 等待的其中任意一个之行完毕任务
            if (this.poolList.size === this.max) {
                //利用Promise.race来获取某一个任务完成的信号
                // 与await集当任务完成的时候，才让程序继续执， 让循环把线程池塞满
                await Promise.race([...this.poolList]).catch(err => {
                    console.log(`超出任务执行范围, 先执行一个${err}`)
                })
            }
            const p = Promise.resolve(this.tasks[i])
            const cb = () => this.poolList.delete(p)
            //定义任务完成后的操作（无论成功或者失败都要移除任务
            // 将已经完成的任务添加到promise的then和catch中
            p.then(cb,cb)
            // Promise.race执行完毕之后，就会被removeTask移除，然后push， 不管这个Promise被resolve 还是 reject都是会被执行掉的
            // 将任务添加并发线程池
            this.poolList.add(p)
            //任务添加到结果列表当中
            this.results.push(p)
        }
        // 等待所有的任务的都完成
        await Promise.allSettled(this.results)
        return resArr
    }
}


const createTask = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time)
        }, 10)
    })
}

let max = 3
const asyncQueue = new AsyncQueue(max)
for (let i = 0; i < 10; i++) {
    asyncQueue.addTask(createTask(i * 1000))
}

asyncQueue.runTask().then(res => {
    console.log(res)
})