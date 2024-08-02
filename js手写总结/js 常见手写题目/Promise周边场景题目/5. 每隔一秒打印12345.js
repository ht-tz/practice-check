for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, i * 1000)
}

function sleep(i) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(i)
        }, i * 1000)
    })
}

for (let i = 1; i <= 5; i++) {
    sleep(i).then((res) => {
        console.log(res)
    })
}
