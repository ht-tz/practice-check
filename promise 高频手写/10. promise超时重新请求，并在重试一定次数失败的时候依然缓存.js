//延时函数
const delay = (timeout) => new Promise((resolve, reject) => setTimeout(() => resolve(), timeout))

async function retry(fn, maxAttempt, timeout, cache) {
    let count = 0
    while (count < maxAttempt) {
        try {
            // 成功直接return
            return await Promise.race([fn, delay(timeout)])
        } catch (e) {
            count++
            console.log(`Attempts ${count} failed! ${e}`)
            if (maxAttempt === count) {
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