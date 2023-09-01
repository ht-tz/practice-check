/**
 * 1.finally 无论成功或者失败都要去调用这个回调函数
 * 2. 返回Promise
 * 3.finally方法后面链式调用then方法，所以需要返回Promise
 **/

Promise.prototype.finally = function (callback) {
    const constructor = this.constructor
    return this.then(
        value => constructor.resolve(callback()).then(() => value),
        reason => constructor.reject(callback()).then(() => {
            throw  reason
        })
    )
}

Promise.prototype.reject = function (reason) {
    return new Promise((resolve, reject)=>{
        reject(reason)
    })
}

