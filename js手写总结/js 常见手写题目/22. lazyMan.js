class lazyMan {
    queue = []

    constructor(name) {
        this.sayName(name)
        setTimeout(() => {
            this.next()
        })
    }

    createTask(time) {
        return () => {
            setTimeout(() => {
                console.log(`暂停执行${time}s`)
                this.next()
            }, time * 1000)
        }
    }

    next() {
        let task = this.queue.shift()
        task && task()
    }

    eat(food) {
        const fn = () => {
            console.log('eat', food)
            this.next()
        }
        this.queue.push(fn)
        return this
    }

    sayName(name) {
        const fn = () => {
            console.log('my name is', name)
            this.next()
        }
        this.queue.push(fn)
    }

    sleep(time) {
        let task = this.createTask(time)
        this.queue.push(task)
        return this
    }

    sleepFirst(time) {
        this.queue.unshift(this.createTask(time))
        return this
    }
}


let lazyName = new lazyMan('zhangsan')
lazyName.sleep(3).eat('apple').sleep(2).eat('banana').sleepFirst(1).eat('orange')
