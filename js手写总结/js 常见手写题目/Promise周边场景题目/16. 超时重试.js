const delay = (timeout) =>{
    return new Promise((resolve, reject)=>{
         setTimeout(()=>{
               resolve(timeout)
         }, timeout)
    })
}
async function retry(fn, maxAttempt, timeout, cache) {
     let count = 0
     while(count < maxAttempt) {
          try {
              return await  Promise.race([fn,delay(timeout)])
          } catch(e) {
               count++
              console.log(`Attempts ${count} failed! ${e}`)
                 if(count === maxAttempt) {
                     return cache
                 }
          }
     }
}

let num = 3
let maxAttempt = 5

let cacheData = "cache"

let p = Promise.reject(new Error("错误"))
retry(p, maxAttempt, 3000, cacheData).then(res =>{
    console.log(res, 6666)
}).catch(err=>{
    console.log(err)
})