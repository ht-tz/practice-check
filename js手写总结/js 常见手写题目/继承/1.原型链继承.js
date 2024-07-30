/**
 * 原型链继承
 * 所有的子实例原型都指向父亲组件实例
 * 因此对某一个子实例的父实例的修改都会影响所有的子实例
 * 2. 子实例无法像父构造 传递参数，即3没有super功能
 */

function Parent() {
    this.name = 'parent'
}

function Child() {
}

Child.prototype = new Parent()
// 修复constructor指向
Child.prototype.constructor = Child