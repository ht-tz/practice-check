function createTask(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(i)
        }, 1000)
    })
}

class TaskQueue {
    constructor(max) {
        this.max = max
        // 队列先进来先出来
        this.taskList = []
        //自动执行
        setTimeout(() => {
            this.run()
        })
    }

    addTask(task) {
        this.taskList.push(task)
    }

    run() {
        const len = this.taskList.length
        if (!len) return
        const min = Math.min(this.max, len)
        for (let i = 0; i < min; i++) {
            const task = this.taskList.shift()
            this.max--
            task.then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                //释放队列空间
                this.max++
                this.run()
            })
        }
    }
}

const taskQueue = new TaskQueue(3)
for (let i = 0; i < 10; i++) {
    const task = createTask(i)
    taskQueue.addTask(task)
}