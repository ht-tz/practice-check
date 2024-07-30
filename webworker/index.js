let worker

document.getElementById('startWorker').addEventListener('click', () => {
    if (typeof Worker !== 'undefined') {
        if (!worker) {
            // 创建webworker对象
            worker = new Worker('./worker.js')
            //事件冒泡到webworker时，事件监听函数被调用
            worker.onmessage = function (event) {
                console.log(event.data + '------')
                document.getElementById('result').innerHTML = `Result: ${event.data}`
            }
            worker.onerror = function (evnet) {
                //  出错了
                worker.terminate()
            }
        }
        // 发送消息到外层对象(发送到最近的外层对象)
        worker.postMessage('start')
    } else {
        console.log('Web Workers are not supported in this browser.')
    }
})

document.getElementById('stopWorker').addEventListener('click', () => {
    if (worker) {
        worker.terminate()
        worker = null
        document.getElementById('result').innerHTML = 'Worker stopped.'
    }
})
