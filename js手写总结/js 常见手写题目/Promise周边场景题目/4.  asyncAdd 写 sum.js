function asyncAdd(a, b, callback) {
    setTimeout(function () {
        callback(null, a + b)
    }, 1000)
}

function promiseAdd(num1, num2) {
    return new Promise((resolve, reject) => {
        asyncAdd(num1, num2, (err, rs) => {
            if (err) {
                reject(err)
            } else {
                resolve(rs)
            }
        })
    })
}

async function sum(...nums) {
    let res = 0
    for (let n of nums) {
        res = await promiseAdd(res, n)
    }
    return res
}

sum(1, 2, 3, 4, 5).then(res => {
    console.log(res)
})