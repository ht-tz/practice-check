/*
 * @Author: htz
 * @Date: 2023-09-03 12:20:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-04 18:28:06
 * @Description: 请填写简介
 */
/*
 * @Author: htz
 * @Date: 2023-09-03 12:20:03
 * @LastEditors:
 * @LastEditTime: 2024-06-04 17:18:13
 * @Description: 请填写简介
 */
/**
 * 手写Promise
 * 1.promise是一个类，在执行这个类的时候需要传递一个执行器进去（）=> {},执行器立即执行
 * 2.promise三种状态 ，成功，失败，等待fullfilld rejected,pendding
 * pending->fullfiled
 * pending->rejected
 *
 *  3. resolve 和 rejected 是用来更改成功或者失败的状态的
 * 4.then 方法内部做的事情就是判断状态，如果是成功就调用成功回调函数，如果是失败，就调用失败回调函数，then是定义在原型上的函数
 */

//定义三种状态
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
const PENDING = 'pending'

function runMircotsk(callback) {
  if (process && process.nextTick()) {
    process.nextTick(callback)
  } else if (MutationObserver) {
    let p = document.createElement('p')
    const oberver = new MutationObserver(callback)
    oberver.observe(p, {
      childList: true,
    })
    p.innerHTML = '1'
  } else {
    setTimeout(callback, 0)
  }
}

class MyPromise {
  constructor(executor) {
    executor(this.resolve, this.reject)
  }

  // 定义状态，默认都是pending
  status = PENDING
  //成功之后的值
  value = undefined
  //失败之后的值
  reason = undefined

  resolve = (value) => {
    //status是等待状态就不能改变了
    if (this.status !== PENDING) return
    //状态修改为成功
    this.status = FULFILLED
    //存储成功之后的值
    this.value = value
  }

  reject = (reason) => {
    if (this.status !== PENDING) return
    //状态修改为 失败
    this.status = REJECTED
    //存储失败的理由
    this.reason = reason
  }

  // then 判断状态执行回调
  then(successCallBack, failedCallBack) {
    if (this.status === FULFILLED) {
      successCallBack(this.value)
    } else if (this.status === REJECTED) {
      failedCallBack(this.reason)
    }
  }
}
