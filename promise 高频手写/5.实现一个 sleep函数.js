const sleep  = ms => new Promise((resolve, reject)=>{
     setTimeout(resolve, ms)
})

async function example() {
    console.log('开始睡眠')
    await sleep(2000)
    console.log("睡眠结束")
}

example()