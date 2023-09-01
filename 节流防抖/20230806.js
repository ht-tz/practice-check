/**
 *  防抖是将多次变为一次最后一次执行，节流是多次变为每个一段时间执行一次
 *
 */

//debounce

const debounce = (func, wait = 50, immediate = false) => {
    //缓存一个定时器
    let timer = null
    return function (...args) {
        if (timer) clearTimeout(timer)
        if (immediate  && !timer) {
             func.apply(this, args)
        }
        timer = setTimeout(() => {
            func.apply(this, args)
        }, wait)
    }
}

const throttle =  (fn,wait =  50)=> {
    let pre = +new Date()
    return function (...args) {
         if (+new Date() - pre>wait) {
             pre = +new Date()
             fn.apply(this, args)
         }
    }
}