// 观察者模式：定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并自动更新。
class Subject {
    // 被观察者
    constructor(name) {
        this.name = name
        this.observes = [] //存储所有观察者
    }

    //收集观察者
    attach(o) {
        this.observes.push(o)
    }

    //更新被观察者的状态与方法
    setState(newState) {
        this.state = newState //更新状态
        // 指被观察者学生
        this.observes.forEach((el) => {
            el.update(this) //通知观察者更新他们的状态
        })
    }
}

// 观察者
class Observer {
    constructor(name) {
        this.name = name
    }

    update(student) {
        console.log('当前' + this.name + '被通知', '当前的状态是' + student.state)
    }
}

// 被观察者
let student = new Subject('学生')

// 观察者
let parent = new Observer('父母')
let teacher = new Observer('父母')

// 被观察者存储观察者的前提是，需要先接纳观察者

student.attach(parent)
student.attach(teacher)
student.setState('被欺负了')
