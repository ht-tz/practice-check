Function.prototype.myApply = function (context, ...args) {
    context = context || window
    let symbol = Symbol('key')
    context[symbol] = this
    let result = context[symbol]([...args])
    delete context[symbol]
    return result
}


function myBind(context, ...args) {
    if (typeof this !== 'function') throw Error("xxx")
    var fn = this
    var args1 = [...arguments].slice(1)
    return function Fn(...args) {
        let params = args1.concat(args)
        return fn.myApply(this instanceof Fn ? this : context, params)
    }
}
