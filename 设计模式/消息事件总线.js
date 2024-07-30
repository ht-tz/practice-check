/**
 * 1. 创建一个对象缓存时间列表
 * 2. 分==
 */

class EventBus {
    constructor() {
        this.eventBus = {}
    }

    // 注册事件监听器
    on(eventName, listener) {
        this.eventBus[eventName] = this.eventBus[eventName] || []
        this.eventBus[eventName].push(listener)
    }

    // 解绑事件
    off(eventName, listener) {
        // 取出所有的事件
        if (!this.eventBus[eventName]) return
        this.eventBus[eventName] = this.eventBus[eventName].filter(item => item !== listener)
    }

    // 订阅执行事件
    emit(eventName, ...args) {
        if (!this.eventBus[eventName]) return
        this.eventBus[eventName].forEach(listener => listener(...args))
    }

    //只执行一次的事件
    once(eventName, listener) {
        const cb = (...args) => {
            listener(args)
            // 执行完毕之后卸载
            this.off(eventName, cb)
        }
        this.on(eventName, cb)
    }
}

let ebus = new EventBus()

let click1 = function () {
    console.log('click1')
}
let  hover2 = function () {
    console.log('hover2')
}

ebus.on('click1', click1)
ebus.on('hover2', hover2)
ebus.emit('click1')
ebus.emit('hover2')
ebus.off('click1', click1)
ebus.emit('click1')