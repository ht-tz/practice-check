/**
 * 1. promise是一个类，在执行这个类的时候,需要传递一个执行器进去()=>{},执行器立即执行
 * 2. promise有三种状态 成功：fullfilled,失败: rejected，等待pending
 *    pending =>fullfilled
 *    pending => rejected,等待pending
 *    状态一旦更改不能修改
 * 3. resolve 和 rejected 是用来更改成功或者失败的状态的
 * 4.then 方法内部做的事情就是判断状态，如果是成功就调用成功回调函数，如果是失败，就调用失败回调函数，then是定义在原型上的函数
 * 5. then多次多次调用
 * 6.加入异步逻辑实现多次调用
 *   同一个promise  then方法可以被多次调用的
 *
 * 7.then方法可以被链式调用的，后面的then方法可以被链式调用，后面的then方法拿到的是后面的then方法调用返回的值
 * 8. then 方法链式调用自己，识别Promise自返回对象
 * 9.防止自己调用自己
 * 10. then 调用错误补充 补充状态链式调用其他代码补充
 * 11. 将then方法的参数变为可选参数
 * 12. promise 高频手写 all  参数是数组，顺序执行， 执行过程中有一个失败就直接返回，执行全部成功就返回所有
 * 13. promise 高频手写 resolve 方法是promise就直接返回，是普通值就new一个promise返回
 * 14. finally catch race方法实现
 */

//定义三种常量状态

const FULLFILLED = "fullfilled";
const REJECTED = "rejected";
const PENDING = "pending";


class MyPromise {
    constructor(executor) {
       try {
           executor(this.resolve, this.reject)
       } catch (e) {
           console.log(e)
       }

    }

    //定义状态变量
    status = PENDING;
    //成功之后的值
    value = undefined;
    //失败之后的值
    reason = undefined;

    successCallback = [];
    failureCallback = [];

    resolve(value) {
        //status 状态一旦修改了就不能改变了
        if (this.status !== PENDING) return
        this.status = FULLFILLED;
        this.value = value;
        while (this.successCallback.length) {
            this.successCallback.shift()(this.value);
        }
    }

    reject(reason) {
        if (this.status !== PENDING) return;
        this.status = REJECTED;
        this.reason = reason;
        while (this.failureCallback.length) {
            this.failureCallback.shift()(this.reason);
        }
    }

    /**
     * 实现链式调用
     * 1. 返回Promise对象，才能返回Promise对象
     * 2.把成功回调的返回值传递出去
     * @param successCallback
     * @param failureCallback
     * @returns {MyPromise}
     */
    then(successCallback, failureCallback) {

         // 参数变为可选参数
        successCallback = successCallback?successCallback:value=>value
        failureCallback = failureCallback?failureCallback: reason=>{throw reason};

         let promise = new MyPromise((resolve, reject) => {
            if (this.status === FULLFILLED) {
                //此处的代码村存在问题 ，此时获取不到promise  只有promise执行完的时候才能获取promise，此处的代码修改为异步代码
                setTimeout(()=>{
                   try {
                       let x = successCallback(this.value);
                       resolvePromise(promise,x, resolve, reject);
                   }catch (e) {
                       console.log(e)
                   }

                },0)
            } else if (this.status === failureCallback) {
                setTimeout(()=>{
                    let x = failureCallback(this.reason)
                    resolvePromise(promise,x, resolve, reject);
                },0)
            } else {
                this.failureCallback.push(()=>{
                    setTimeout(()=>{
                        try {
                            let x =  failureCallback(this.reason);
                            resolvePromise(promise,x,resolve,reject);
                        }catch (e) {
                            console.log(e)
                        }
                    },0)
                });
                this.successCallback.push(()=>{
                    try {

                    }catch (e) {
                        console.log(e)
                    }
                });
            }
        });
        return promise;
    }

    static all(array) {
        let index = 0,result = [];
        return new Promise((resolve, reject) =>{
            function addResult(key,value) {
                result[key] = value;
                index ++
                if (index === array.length) {
                    resolve(result)
                }
            }

            for (let i = 0; i < array.length; i++) {
                let x =  array[i]
                if (x instanceof Promise) {
                     x.then(value=>addResult(i,value),reason=> reject(reason))
                } else {
                    addResult(i,x)
                }

            }
        })
    }

}

function resolvePromise(mypromise,x, resolve, reject) {
    //不能返回then 方法当前所返回的Promise对象
    if (mypromise === x) {
        return reject(new TypeError('Chaining cycle detected for promise 高频手写 #<Promise>'))
    }
    if (x instanceof Promise) {
        x.then(resolve, reject);
    } else {
        resolve(x)
    }

}

module.exports = MyPromise;