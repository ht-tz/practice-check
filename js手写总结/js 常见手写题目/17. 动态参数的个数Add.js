function add (...params) {
    const proxy = (...args) => {
        params = params.concat(args)
        return proxy
    }

    proxy.toString = () => params.reduce((prev, next) => prev + next)
    return proxy// 返回函数的自身从而支持链式调用
}

const sum =  add(1)(12)(2,4,4)(6)
 console.log(sum.toString()) // 25
