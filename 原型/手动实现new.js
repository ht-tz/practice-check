/**
 * new 做了什么事情
 * 1.创建一个对象
 * 2.将构造函数的作用于赋值给新的对象，（this指向新对象）
 * 3.小指向构造函数中的代码（为新对象添加属性）
 * 4.返回新对象，要么是实例对象，要么是return语句指定的对象
 */
{
    function mynew(fn, ...args) {
        //创建一个空对象
        let obj = {}
        //将obj.__prototype指向fn.prototype
        Object.setPrototypeOf(obj, fn.prototype);
        //this.指向空对象
        let result = fn.apply(obj,args);
        //对构造函数返回值做判断，返回对应的追
        return result instanceof Object ? result : obj;
    }
    //验证

    // 构造函数Person
    function Person(name) {
        this.name = name;
    }

    let per = mynew(Person, '你好，new');
    console.log(per); // {name: "你好，new"}
    console.log(per.constructor === Person); // true
    console.log(per.__proto__ === Person.prototype); // true
}