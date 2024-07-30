/**
 * 手写Promise
 * 1.promise是一个类，在执行这个类的时候需要传递一个执行器进去（）=> {},执行器立即执行
 * 2.promise三种状态 ，成功，失败，等待fullfilld rejected,pendding
 * pending->fulfilled
 * pending->rejected
 *
 * 3. resolve 和 rejected 是用来更改成功或者失败的状态的
 * 4.then 方法内部做的事情就是判断状态，如果是成功就调用成功回调函数，如果是失败，就调用失败回调函数，then是定义在原型上的函数
 * 5.then多次调用  需要返回promise对象
 * 6.加入一步逻辑实现多次调用
 * 统一个promise then方法可以被多次调用
 *  7.then方法可以不被链式调用的，后面的then方法可以被链式调用，后秘哪的then方法拿到的是后面then方法调用的返回值
 */

//定义三种状态
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
const PENDING = 'pending';

class MyPromise {
    //执行器异常状态的捕捉，如果执行错误，捕捉异常，返回reject状态
    constructor(executor) {
        try {
            executor(this.resolve, this.reject);
        } catch (e) {
            //发生错误的状态，执行reject方法
            this.reject(e);
        }
    }

    // 定义状态，默认都是pending
    status = PENDING
    //成功之后的值
    value = undefined
    //失败之后的值
    reason = undefined

    successCallback = [];
    failedCallback = [];


    resolve = (value) => {
        //status是等待状态就不能改变了
        if (this.status !== PENDING) return
        //状态修改为成功
        this.status = FULFILLED;
        //存储成功之后的值
        this.value = value;
        //如果有成功回调就调用

        while (this.successCallback.length) {
            //执行完一个弹出一个
            this.successCallback.shift()(this.value);

        }
    }

    reject = (reason) => {
        if (this.status !== PENDING) return;
        //状态修改为 失败
        this.status = REJECTED;
        //存储失败的理由
        this.reason = reason;
        //如果有就调用
        while (this.failedCallback.length) {
            this.failedCallback.shift()(this.reason)
        }
    }

    // then 判断状态执行回调
    then(successCallBack, failedCallBack) {
        //把成功回调变为可选参数 存在就执行，不存在就给返回值
        successCallBack = successCallBack ? successCallBack : value => value;
        failedCallBack = failedCallBack ? failedCallBack : value => value;
        //调用then方法必须返回promise对象，调用的resolve 方法就拿到了成功回调的返回值
        let promise2 = new MyPromise((resolve, reject) => {
            if (this.status === FULFILLED) {
                /**
                 * 判断x的值是不是promise对象
                 * 如果是普通值，直接调用resolve
                 * 如果是promise对象，查看promise对象返回的结果，
                 * 根据promise对象返回的结果，决定调用resolve还是reject
                 * 在返回结果时候，防止循环调用， 添加判断
                 *  // 在这段代码中无法获取promise2// 因为是在执行过程中，怎么获取呢，要等new MyPromise执行完成后在能获取，
                 *  利用setTimeOut 把这段代码变为异步代码
                 */
                setTimeout(() => {
                    try {
                        let x = successCallBack(this.value);
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)

            } else if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = failedCallBack(this.value);
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            } else {
                //如果status 没有改变说明res和rej都咩有执行，
                //将其储存起来
                //如果执行失败就是返回成功回调
                //如果执行失败就返回失败回调
                //异步实现的关键
                this.successCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = successCallBack(this.value);
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                })
                this.failedCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = failedCallBack(this.value);
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                })
            }
        });
        return promise2;
    }
}

function resolvePromise(mypromise, x, resolve, rejected) {
    //防止promise循环调用
    if (mypromise === x) {
        return rejected(new TypeError("Chaining cycle detected for promise 高频手写 #<Promise>"));
    }
    if (x instanceof MyPromise) {
        //将值传递下去
        // x.then(value =>resolve(value),reason=>{reason})
        x.then(resolve, rejected)
    } else {
        //普通值
        resolve(x)
    }
}


module.exports = MyPromise