function new1(fn, ...args) {
    //创建一个新对象l
    let obj = new Object();
    //将传入构造函数的属性的原型连接到新对象
    Object.setPrototypeOf(obj, fn.prototype);
    //改变this的执行，指向构造函数，并添加属性
    let res = fn.apply(obj, args);
    //new关键词执行后总会返回一个系对象，要么是实例对象，要么是return语句指定的对象
    return res instanceof Object ? res : obj;
}