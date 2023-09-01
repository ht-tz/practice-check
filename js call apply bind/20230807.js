Function.prototype.myBind = function (context = window, ...args) {
    //context 是bind传入的this,
    //args是bind传入的各个参数
    // this代表调用bind的函数
    let self = this;
    //返回一个函数，this作为实际调用传入的参数
    let fBound = function (...thisArgs) {
        // this instanceof fBound 表示构造函数的情况 new func.bind(obj)
        // 当作为构造函数的时候，this，指向实例， 此时this instanceof fBound为true, 可以让实例获取来自绑定函数的值
        // 当作为普通函数的时候，this默认指向window, false 将绑定函数的值指向context
        return self.apply(
            this instanceof fBound? this:context,
            args.concat(thisArgs)
        )
    }
    fBound.prototype = Object.create(this.prototype)
    return fBound
}