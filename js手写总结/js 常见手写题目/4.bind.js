function bind(context, ...args) {
    let self = this
    var fbound = function () {
        let args1 = Array.prototype.slice.call(arguments, 1)
        self.apply(this instanceof self ? this : context, args1.concat(args))
    }
    fbound.prototype = Object.create(self.prototype)
    return fbound
}