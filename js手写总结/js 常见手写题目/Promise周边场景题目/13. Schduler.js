class Scheduler {
    constructor(limit) {
        this.limit = limit;
        this.queue = []
        this.count = []
    }

    add(time, order) {
        const promiseCreator = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(order)
                }, time)
            })
        }
        //执行一个添加一个
        this.queue.push(promiseCreator)
    }

    start() {
        for (let i = 0; i < this.limit; i++) {
            this.request()
        }
    }

    request() {
        // 队列长度不为零 执行个数超出限制， 请求无效
        if (!this.queue || !this.queue.length || this.count.length >= this.limit) {
            return
        }
        this.count++
        this.queue.shift()().then(() => {
            this.count--
            this.request()
        })
    }
}

const scheduler = new Scheduler(3)
const addTask = (time, order) => {
    scheduler.add(time, order)
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(4000, '4')
scheduler.start()