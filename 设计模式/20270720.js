class EventBus {
    constructor() {
        this.events = {}
    }

    /**
     *  订阅事件
     * @param {} eventName 事件名称
     * @param {*} callback 回调
     */
    on(eventName, callback) {
        this.events[eventName] = this.events[eventName] || []
        this.events[eventName].push(callback)
    }

    /**
     * 发布事件
     * @param {*} eventName 事件名称
     * @param  {...any} args 事件发生的参数
     * @returns
     */
    emit(eventName, ...args) {
        if (!this.events[eventName]) return
        this.events[eventName].forEach((callback) => callback(...args))
    }
    /**
     *  取消订阅事件
     * @param {*} eventName
     * @param {*} callback
     * @returns
     */
    off(eventName, callback) {
        if (!this.events[eventName]) return
        this.events[eventName] = this.events[eventName].filter((item) => item !== callback)
        if (this.events[eventName].length === 0) {
            delete this.events[eventName]
        }
    }

    /**
     * 订阅一次事件
     * @param { *} eventName
     * @param {*} callback
     */
    once(eventName, callback) {
        const cb = (...args) => {
            callback(...args)
            this.off(eventName, cb)
        }
        this.on(eventName, cb)
    }
}

let ebs = new EventBus()

const click1 = () => {
    console.log(1)
}

const click2 = () => {
    console.log(2)
}

ebs.on('click', click1)
ebs.on('click', click2)
ebs.emit('click')
ebs.off('click', click1)
ebs.emit('click')
