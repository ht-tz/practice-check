class LazyMan {
    constructor(name) {
        this.name = name
        this.queue = []
        this.sayName(name)
        setTimeout(async () => {
            for (let fn of this.queue) {
                await fn()
            }
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

const lazyMan = new LazyMan("pink")
lazyMan.sleepFirst(5).eat("dinner").sleep(2).eat(9)