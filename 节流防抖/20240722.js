function debounce(fn, wait) {
    let timer = null
    return function (args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(this, args)
        }, wait)
    }
}


function debounce(fn, wait, immediate) {
    let timer = null
    return function (args) {
        if (timer) clearTimeout(timer)
        if (immediate && !timer) {
            fn.apply(this, args)
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, wait)
    }
}

// 截流
function throttle(fn, wait) {
    let pre = +Date.now()
    return function (args) {
        let now = +Date.now()
        if (now - pre > wait) {
            fn.apply(this, args)
            pre = now
        }
    }
}
