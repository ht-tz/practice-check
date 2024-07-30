function call(context, ...args) {
    const fn = Symbol('fn')
    context = context || window
    context[fn] = this
    const res = context[fn](...args)
    delete context[fn]
    return res
}