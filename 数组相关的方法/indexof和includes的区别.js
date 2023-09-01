// 1. 原型脸链继承，重写原型对象，代之以一个新类型的实例，

function Animal() {
    this.value = 'animal';
}

Animal.prototype.run = function () {
    return this.value + 'is running'
}


function Cat(){}

// 这里是关键，创建 Animal 的实例，并将该实例赋值给 Cat.prototype
// 相当于 Cat.prototype.__proto__ = Animal.prototype
Cat.prototype  = new Animal();

var instance = new Cat()
instance.value = 'cat'; //创建instance的自身属性 value
console.log(
    instance.run()
)

/**
 *  1.多个实例对饮用类型的操作挥别篡改
 *  2.子类原型的constructor属性被重写了
 *  3.给子类原型添加属性和方法必须在替换原型之后
 *  4.创建子类型实例的时候无法向父类型的构造传递参数
 */

//原型属性上的引用类型的操作会被篡改。
{
    function Animal(){
        this.names = ["cat", "dog"];
    }
    function Cat(){}

    Cat.prototype = new Animal();


    let instance = new Cat();
    instance.names.push('tiger');
    console.log(instance.names)

    let instance1 = new Cat();

    console.log(instance1.names);
}

{
    //问题2
    //子类型原型上的constructor属性被重写了，执行 Cat.prototype = new Animal() 后原型被覆盖
    //Cat.prototype 上丢失了 constructor 属性， Cat.prototype 指向了 Animal.prototype
}