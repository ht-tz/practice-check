 function mySetTimeout(fn, delay) {
    let timerId  =  setInterval(()=> {
         fn()
         clearInterval(timerId)
    },delay)
}

const log = () => console.log('hello')

 mySetTimeout(log, 1000) // 输出 "heßllo" 每隔1秒)