// 实现一个lazyMan
class lazyMan {
    queue = []
    constructor(name) {
        this.sayName(name);
        setTimeout(() => {
            this.next()
        })
    }

    sayName(name) {
        const fn = () => {
            console.log(`say${name}!`)
            this.next()
        }
        this.queue.push(fn)
    }

    next() {
        const fn = this.queue.shift()
        fn && fn()
    }

    createTask(time) {
        return () => {
            setTimeout(() => {
                console.log(`等待${time}s`)
                // 执行完毕之后开始执行队列里面的下一个任务
                this.next()
            }, time * 1000)
        }
    }

    sleep(time) {
        this.queue.push(this.createTask(time))
        return this
    }

    eat(food) {
        const fn = () => {
            console.log(`eat ${food}`)
            this.next();
        }
        this.queue.push(fn)
        return this
    }

    sleepFirst(time) {
        this.queue.unshift(this.createTask(time))
        return this
    }
}

const lazyMan1 = new lazyMan("韩泽曦")

lazyMan1.sleepFirst(5).eat("早饭").sleep(1).eat("苹果")