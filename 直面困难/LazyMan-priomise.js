class LazyMan {
    constructor(name) {
        this.name = name
        this.queue = []
        this.sayName(name)

        Promise.resolve().then(() => {
            let sequeue = Promise.resolve()
            this.queue.forEach(fn => {
                sequeue = sequeue.then(fn)
            })
        })
    }

    createTask(time) {
        return ()=> new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('等待' + time + '秒')
                resolve()
            }, time * 1000)
        })
    }

    sayName(name) {
        this.queue.push(() => {
            console.log('hi' + name)
        })
        return this
    }

    eat(food) {
        this.queue.push(() => {
            console.log('吃' + food)
        })
        return this
    }

    sleep(time) {
        this.queue.push(this.createTask(time))
        return this
    }

    sleepFirst(time) {
        this.queue.unshift(this.createTask(time))
        return this
    }
}
const lazyMan = (name) => new LazyMan(name);

lazyMan('Hank').sleepFirst(2).eat('dinner').sleep(3).eat('supper');