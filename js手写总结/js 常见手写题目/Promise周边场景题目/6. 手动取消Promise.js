function cancelPromiseWrap(p) {
    let cancel
    let p1 = new Promise((resolve, reject) => {
        cancel = () => reject('取消')
    })
    let p2 = Promise.race([p, p1])
    p2.cancel = cancel
    return p2
}


let ptest = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('成功')
    }, 5000)
})
// 测试
let p = cancelPromiseWrap(ptest)
// p.then(res => {
//     console.log(res)
// })
p.cancel()

// 放到浏览器中去执行