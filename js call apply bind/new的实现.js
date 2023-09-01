/**
 * new 做了什么
 * 1.创建一个对象
 * 2. 新的对象会被执行[[prototype链接]]
 * 3. 改变this
 * 4.
 */

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

function new2() {
  //创建一个对象
  let obj = {};
  //获取构造函数
  let Con = [].shift.call(arguments);
  obj.__proto__ = Con.prototype;
  let res = Con.apply(obj, arguments);
  return res instanceof Object ? res : obj;
}

// 构造函数Person
function Person(name) {
  this.name = name;
}

let per = new2(Person, "你好，new");
console.log(per); // {name: "你好，new"}
console.log(Person.prototype.constructor === Person); // true
console.log(Object.getPrototypeOf(per) === Person.prototype); // true

/**
 * 新生成了一个对象
 * 链接到原型
 * 绑定this
 * 返回新对象
 */

function new2() {
  let obj = {};

  let fn = [].shift.call(arguments);

  obj.__proto__ = fn.prototype;

  let result = fn.apply(obj, arguments);

  return obj instanceof Object ? result : obj;
}
