function myNew(fn, ...args) {
    //创建新对象
    let obj = new Object()
    //把构造函数的对象链接到新对象
    Object.setPrototypeOf(obj, fn.prototype)
    //改变this的指向
    let res = fn.apply(obj, ...args)
    return res instanceof Object ? res : obj
}

//无参数

function myNew2() {
    let obj = new Object()
    let fn =Array.prototype.shift.call(arguments)
    console.log(typeof fn)
    obj.__proto__ = fn.prototype
    let res = fn.apply(obj, arguments)
    return res instanceof Object?res:obj
}

 function Person(name,age) {
    this.name = name
     this.age = age
 }

 let p1  = myNew2(Person,'xx',88)

console.log(p1)