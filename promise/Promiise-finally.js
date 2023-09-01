/**
 * 1.finally 无论成功或者失败都要去调用这个回调函数
 * 2. 返回Promise
 * 3.finally方法后面链式调用then方法，所以需要返回Promise
 **/



Promise.prototype.PromiseFinally = function (callback) {
    let p =  this.constructor;
    console.log(this)
    return this.then(value=>{
        callback()
        //把这个value return出去，下一个方法才能拿到value
        //不管callback 是promise or ordinary data, 这些都会转换成Promise，执行这个promise  接下来的then方法中 返回这个value, 在把这个结果返回出去。
        return Promise.resolve(callback()).then(value=>value);
    }, reason =>{
        return  Promise.resolve(callback()).then(()=>{
            throw reason
        })
    })
}

function  p1() {
    return new Promise(function(resolve, reject) {
        resolve(1000)
})
}
function  p2() {
    return new Promise(function(resolve, reject) {
        reject('errror')
})
}

p1().PromiseFinally(()=>{
    console.log('finally called')
}).then(value=>{
    console.log(value)
})