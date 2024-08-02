// 题目描述:JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个
class Scheduler {
    constructor(limit) {
        //队列
        this.queue = [];
        //任务队列的最大长度
        this.maxCount = limit;
        //正常跑的执行任务
        this.runCounts = 0;
    }

    //添加任务
    add(time, order) {
        const promiseCreator = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(order)
                    resolve()
                }, time)
            })
        }
        //执行一个添加一个
        this.queue.push(promiseCreator);
    }

    //开始执行队列任务
    startTask() {
        for (let i = 0; i < this.maxCount; i++) {
            this.request()
        }
    }

    request() {
        //队列长度，不为0， 执行个数超出限制，请求无效
        if (!this.queue || !this.queue.length || this.runCounts >= this.maxCount) {
            return
        }
        //计数+1
        this.runCounts++
        //请求一次，弹出一个任务
        this.queue.shift()().then(() => {
            // 执行完计数减1
            this.runCounts--;
            // 继续执行
            this.request()
        })
    }
}


const scheduler = new Scheduler(3);
const addTask = (time, order) => {
    scheduler.add(time, order);
};
addTask(1000, "1");
addTask(2000, "2");
addTask(3000, "3");
addTask(4000, "4");
scheduler.startTask();
