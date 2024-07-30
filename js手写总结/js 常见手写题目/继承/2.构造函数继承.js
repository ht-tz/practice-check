/**
 * 只能继承父类的实例属性和方法，不能继承原型属性/方法
 * 无法实现复用，每个子类都有父类实例函数的副本，影响性能
 * @param name
 * @constructor
 */
function Parent(name) {
    this.name = name;
    this.types = [1, 2, 3, 4]
}
Parent.prototype.say = function() { console.log(this.name) }

function Child(name, age) {
    Parent.call(this, name);
    this.age = age;
}

let child = new Child('lisi', 18);
console.log(child.name, child.age, child.types) // lisi 18 [1, 2, 3, 4])