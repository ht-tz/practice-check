function throttle(fn, delay) {
    let pre = +Date.now()
    return function (...args) {
        let now = +new Date()
        if (now - pre > delay) {
            fn.apply(this, args)
            pre = now
        }
    }
}

function RAFFunction(fn) {
    let tracking = false
    return function (...args) {
        if (!tracking) {
            tracking = true
            requestAnimationFrame(() => {
                tracking = false
                fn.apply(this, args)
            })
        }
    }
}