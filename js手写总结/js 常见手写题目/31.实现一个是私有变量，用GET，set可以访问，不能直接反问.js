const privateName = Symbol()

class Person {
    constructor(name) {
        //symbol作为属性名称
        this[privateName] = name
    }

    //get访问私有变量
    getName() {
        return this[privateName]
    }

    //set访问私有变量
    setName(name) {
        this[privateName] = name
    }
}

const p = new Person('张三')
console.log(p.getName()) // 张三
p.setName('李四')
console.log(p.getName()) // 李四
