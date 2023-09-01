Function.prototype.myCall = function (context = window,...args) {

    if (typeof context !=="object") context = new Object(context)
    //context 添加一个唯一值，不会出现覆盖
    let key = Symbol()
    context[key] = this

    let res  = context[key](...args)
    delete  context[key]
    return res
}
//不传版本的写法

Function.prototype.myCall1  = function (context) {
    context = context?  new Object(context):window
    context.fn = this
    let args =  [...arguments].slice(1)
    let res = context.fn(...args)
    delete context.fn
    return res
}
Function.prototype.myApply = function (context = window, ...args) {
    if (typeof context !=="object") context = new Object(context)
    //context 添加一个唯一值，不会出现覆盖
    let key = Symbol()
    context[key] = this

    let res  = context[key](args)
    delete  context[key]
    return res
}

Function.prototype.myBind = function (context = window,...args){
    let self = this
    let fnBound = function (...thisArgs) {
        return self.apply(
            this instanceof fnBound?this:context,
            args.concat(thisArgs)
        )
    }
    fnBound.prototype = Object.create(this.prototype)
    return fnBound
}