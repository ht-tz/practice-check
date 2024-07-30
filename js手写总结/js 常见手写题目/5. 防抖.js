function debounce(fn, delay) {
    let timer = null
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}
function debounce(fn, delay, immediate = false) {
    let timer = null
    return function (...args) {
        if(!timer && immediate) {
           fn.apply(this, args)
        }
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}