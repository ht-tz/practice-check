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
            function throttle(fn, wait) {
                let pre = performance.now();
                return function () {
                    let now = performance.now();
                    if (now - pre > wait) {
                        fn.apply(this, arguments);
                        pre = performance.now()
                    }
                }
            }


// 适用于高频事件的发出触发，滚动， 窗口大小
            function RAFThrottle(fn) {
                let tracking = false
                return function () {
                    if (!tracking) {
                        tracking = true
                        window.requestAnimationFrame(() => {
                            fn.apply(this, arguments);
                            tracking = false
                        })
                    }
                }
            }

            function throttle(fn, immediate = false, wait = 0) {
                let timer = null
                return function (...args) {
                    const now = +new Date()
                    if(immediate) {
                        fn.apply(this, args)
                        immediate = false
                    }
                    if(!timer) {
                        timer = setTimeout(() => {
                            fn.apply(this, args)
                        }, wait)
                    }
                }
            }           func.apply(this, args)
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

function throttle(fn, wait) {
     let pre = +new Date()

    return function (...args) {
          if(+new Date() - pre > wait ) {
              pre = +new  Date()
              fn.apply(this, args)
          }
    }
}