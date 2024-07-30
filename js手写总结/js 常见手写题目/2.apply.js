function apply(context, args) {
    let fn = Symbol('fn')
    context[fn] = this
    let res = context[fn](...args)
    delete context[fn]
    return res
}