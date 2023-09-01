const { defineSSRCustomElement } = require("vue");

class Subject {
     constructor (name) {
        this.name = name;
        this.observes = [] //存储所有观察者
     }

     //收集观察者
    attach(o) {
        this.observes.push(o);
    }
     
    //更新被观察者的状态与方法
    setState(newState) {
        this.state = newState //更新状态
        // 指被观察者学生
        this.observes.forEach(o=>{
              o.update(this) //通知观察者更新他们的状态
        })
         
    }
}
class Observer {
    constructor( name ){
        this.name = name;
    }

     update(student) {
         console.log('当前'+this.name+'被通知','当前的状态是'+ student.state);
     }
}


let student = new Subject('学生');

let parent = new Observer('父母');
let teacher = new Observer('父母');

// 被观察者存储观察者的前提是，需要先接纳观察者
 
student.attach(parent)
student.attach(teacher)
student.setState('被欺负了')


