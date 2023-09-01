/**
 * call做了什么
 * 1.将函数设置为对象属性
 * 2.执行后删除这个对象
 * 3.指定this到函数并传入给定参数，执行函数。
 * 如果不传入参数，默认指向window
 */
//es6
Function.prototype.myCall = function (context, ...args) {
    // context 是null 或者是 undefined的时候 默认指向window
    // if(context === null || context === undefined) {
    //     context = window;
    // } else {
    //     context = Object(context)
    // }
    context = context ? Object(context) : window;
    const symbol = Symbol();// 优于symbol的特殊性，来存储临时函数
    //改变this指向
    context[symbol] = this;
    let result = context[symbol](...args);//隐式绑定传递参数，并且执行函数
    //删除上下文对象
    delete context[symbol]
    //返回执行结果
    return result;
}


Function.prototype.MyCall1 = function (context) {
    context = context ? Object(context) : window;
    //改变this的指向
    context.fn = this
    //get  arguments
    let args = [...arguments].slice(1);
    //返回执行函数
    let result = context.fn(...args);
    delete context.fn;
    return result;
}

Function.prototype.MyCall2 = function(context) {

}