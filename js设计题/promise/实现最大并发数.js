// Js设计任务队列，控制请求最大并发数

/**
 * 场景：前端页面需要发送20个请求，但是服务端有限制。需要前端控制并发数字，保证最多只能发送十个请求
 *要求：
 *  1.最多执行的任务数为10个
 *  2.当前任务执行完成后，释放队列空间，自动执行下一个任务
 *  3. 所有任务添加到任务队列后，自动开始执行任务
 */

function createTask(i) {
    return  ()=>{
        // 任务执行完成之后返回promise
        return  new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(i)
            },2000)
        })
    }
}


class TaskQueue {
    constructor(max) {
        this.max = max;
        this.taskList = []
        //制动执行
        setTimeout(() => {
            this.run()
        })
    }
    addTask(task) {
        this.taskList.push(task)
    }
    run() {
        const len = this.taskList.length
        if ((!len)) return
        const min = Math.min(len, this.max)
        for (let i = 0; i < min; i++) {
            //开始占用一个空间
            this.max--
            const task = this.taskList.shift()
            task().then(res => {
                console.log(res)
            }).catch(err => {
                throw Error('xx')
            }).finally(() => {
                this.max++
                this.run()
            })
        }

    }
}

const taskQueue = new TaskQueue(18)

for (let i = 0; i <20 ; i++) {
    const task  = createTask(i)
    taskQueue.addTask(task)
}