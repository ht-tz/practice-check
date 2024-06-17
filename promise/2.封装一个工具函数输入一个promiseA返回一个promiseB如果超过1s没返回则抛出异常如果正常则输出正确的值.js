function timeoutPromise(promiseA, timeout) {
  let timer = null

  // 创建一个新的promise用于超时控制
  const timeoutPromise = new Promise((resolve, reject) => {
    timer = setTimeout(() => {
      reject(new Error('promise超时'))
    }, timeout)
  })

  // 使用promise.race 返回最先resolved 或 rejected的promise
  return Promise.race([promiseA, timeoutPromise])
    .then((res) => {
      clearTimeout(timer)
      console.log(res)
      return res
    })
    .catch((err) => {
      clearTimeout(timer)
      console.log(err)
      throw err
    })
}
const pA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('PromiseA完成')
  }, 5000)
})

timeoutPromise(pA, 1000)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.error(err)
  })
