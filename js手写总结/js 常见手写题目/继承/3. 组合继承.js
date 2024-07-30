// 每次创建子类实例都执行了两次构造函数(Parent.call()和new Parent())，
//
// 虽然这并不影响对父类的继承，但子类创建实例时，原型中会存在两份相同的属性和方法，不优雅


function Parent(name) {
    this.name = name
}

function Child() {
    // 构造函数继承
    Parent.call(this, 'zhangsan')
}


//原型链继承 指向父类的实例改为指向父类的原型
Child.prototype = new Parent()
Child.prototype.constructor = Child
// 优点：父类属性和方法继承，子类实例之间相互独立
// 缺点：每次创建子类实例都执行了两次构造函数(Parent.call()和new Parent())
const child = new Child()
const parent = new Parent()

console.log(child.getName()) // zhangsan
console.log(parent.getName()) // undefined
