function processTask(...tasks) {
    let isRunning = false
    let arr = []
    let index = 0
    return {
        start() {
            return new Promise(async (resolve) => {
                if (isRunning) return
                while (index < tasks.length) {
                    const task = tasks[index]
                    const res = await task()
                    arr.push(res)
                    index++
                    if (!isRunning) {
                        return
                    }
                }
                isRunning = false
                resolve(arr)
            })
        },
        pause() {
            isRunning = false
        }
    }
}

/**
 * 1. 依次执行任务，所有的任务全部完成后可以得到每一个任务的执行结果
 * 2. 可以暂停任务，暂停后可以恢复任务
 * 3. 需要返回start 和 pause 方法
 * 4. 每一个任务都具有原子性，不能被打断， 只能在两个任务之间之间中断
 */
