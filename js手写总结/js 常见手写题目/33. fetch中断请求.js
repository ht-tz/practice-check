const abortController = new AbortController()
// 创建信号源
const signal = abortController.signal

const request = async () => {
    try {
        const res = await fetch('https://www.baidu.com', {signal})
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

abortController.abort() // 取消请求
