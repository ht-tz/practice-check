/*
 * @Author: htz
 * @Date: 2024-06-05 10:23:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-05 11:07:37
 * @Description: 请填写简介
 */

class AbortPromise {
  constructor(pfn) {
    this.pfn = pfn
    this.abort = false
  }

  aborted() {
    this.abort = true
  }

  then(resolve, reject) {
    if (this.abort) {
      reject(new Error('abort'))
      return this.pfn.then((resolve, reject))
    } else {
    }
  }

  catch(reject) {
    if (this.abort) {
      return new Promise('Promise abort')
    } else {
      return this.pfn.catch(reject)
    }
  }

  finally(onFinally) {
    return this.pfn.finally(onFinally)
  }
}

const p1 = Promise.resolve(1)

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time))c

const abortPromise = new AbortPromise(p1)
abortPromise
  .then(res=>{
    console.log(res)
  },(err=>{
    console.log(err)
  }))
