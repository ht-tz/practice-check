function B(name) { 
     this.name = name
}

function A(name,age) { 
    // 将A的原型指向b
     Object.setPrototypeOf(A,B)
    //用A的实例去掉用B，得到继承B之后的实例， 这一步相当于调用super //重写A的实例
    Object.getPrototypeOf(A).call(this, name)
    //将A的原型重新添加到实例
    this.age = age;
     // 返回新的实例对象 
     return this
}



var a = new A('axx',2)

console.log(a);