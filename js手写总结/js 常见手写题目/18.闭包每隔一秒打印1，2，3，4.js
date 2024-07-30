for (let i = 1; i < 6; i++) {
    (function (i) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    })(i)
}



function sleep(i) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(i)
        }, i * 1000)

    })
}

for (let i =1; i <6 ; i++) {
    sleep(i).then((res) => {
        console.log(res)
    })
}