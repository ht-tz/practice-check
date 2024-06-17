/**

 //es6 * call做了什么
 * 1.将函数设置为对象属性
 * 2.执行后删除这个对象
 * 3.指定this到函数并传入给定参Ω数，执行函数。
 * 如果不传入参数，默认指向window
 */
function myCall(thisArgs, ...args) {
    thisArgs = thisArgs ? thisArgs : window
    let symbol = Symbol('symbol')
    thisArgs[symbol] = this
    let res = thisArgs[symbol](...args)
    delete thisArgs[symbol]
    return res
}