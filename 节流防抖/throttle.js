/**
 * 函数节流：不管时间触发频率多高，只在单位单位时间内执行
 */
{
    //时间戳实现
    function throttle(event, time) {
        let pre = 0;
        return function (...args) {
            if (Date.now() - pre > time) {
                pre = Date.now()
                event.apply(this, args)
            }
        }
    }
}


function RAFThrottle(fn) {
    let tracking = false
    return function () {
        if (!tracking) {
            tracking = true
            window.requestAnimationFrame(() => {
                fn.apply(this, arguments)
                tracking = false
            })
        }
    }
}

function throttle(fn, immediate = false, wait = 0) {
    let pre = +Date.now()
    return function (...args) {
        let now = +Date.now()
        if (immediate) {
            fn.apply(this, args)
        } else if (now - pre > wait) {
            fn.apply(this, args)
            pre = now
        }
    }
}