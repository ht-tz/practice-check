function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${time}ms later`)
            resolve()
        }, time)
    })
}

sleep(1000).then((res)=>{
    console.log('done')
})

function arrrange(name) {
    const tasks = []
    tasks.push(() => {
        console.log(`${name} is notified`)
    })

    async function execute() {
        for (let task of tasks) {
            await task()
        }
    }

    function doingSomething(methods) {
        tasks.push(() => {
            console.log(`${name} is doing something`)
        })
        return this
    }

    function wait(time) {
        tasks.push(() => {
            return new Promise((resolve, reject) => {
                console.log(`wait ${time}`)
                setTimeout(resolve, time)
            })
        })
        return this
    }

    function waitFirst(time) {
        tasks.unshift(() => {
            return new Promise((resolve, reject) => {
                console.log(`first`)
                setTimeout(resolve, time)
            })
        })
        return this
    }

    return {
        execute,
        doingSomething,
        wait,
        waitFirst
    }
}

arrrange('Tom').waitFirst(3).wait(2).doingSomething('push').execute()
