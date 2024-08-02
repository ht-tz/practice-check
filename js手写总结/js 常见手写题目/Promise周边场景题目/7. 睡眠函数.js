async function timeSleep(time) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('执行完毕')
        }, time)
    })
}
