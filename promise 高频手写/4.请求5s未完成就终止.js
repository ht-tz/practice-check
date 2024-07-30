  /*
 * @Author: htz
 * @Date: 2024-02-25 12:53:54
 * @LastEditors:
 * @LastEditTime: 2024-06-04 21:30:48
 * @Description: 请填写简介
 */
const abortPromise = (promise, timeout) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('abort promise 高频手写'))
    }, timeout)
    promise
      .then(value =>{
         clearTimeout(timer)
        resolve(value)
      }, rea =>{
        clearTimeout(timer)
        reject(rea)
      })
  })
}
// testCaseA
const promiseA = new Promise((resolve) => {
  setTimeout(() => {
    resolve('success')
  },  300)
})
abortPromise(promiseA, 1000)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.error(err)
    })
