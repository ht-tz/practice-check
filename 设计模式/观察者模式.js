/*
 * @Author: htz
 * @Date: 2024-07-13 11:41:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-07-13 12:00:21
 * @Description: 观察者
 */

// 什么事观者模式?
// 观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象。这个主题对象在状态发生变化时，会通知所有观察者对象，使他们能够自动
class Subject {
    constructor() {
        this.observers = []
    }

    // 添加订阅
    add(observer) {
        this.observers.push(observer)
    }

    // 移除订阅
    remove(observer) {
        this.observers = this.observers.filter((item) => item !== observer)
    }

    // 通知
    notify() {
        this.observers.forEach((observer) => observer.update())
    }
}

// 观察者
class Observer {
    constructor(name) {
        this.name = name
    }
    update() {
        console.log(`${this.name} 收到消息`)
    }
}
