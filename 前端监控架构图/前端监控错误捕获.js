/*
 * @Author: htz
 * @Date: 2024-07-04 15:32:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-07-04 15:59:43
 * @Description: 前端监控特殊错误捕获
 */

/**
 *  try catch 捕获错误
 * 1.捕获的异常必须是try catch 必须是线程执行进入到了try-catch 且 try-catch 执行完毕的时候抛出来
 */

// 语法检查阶段就出错了，线程尚未进入try-catch，所以不会捕获到
try {
    // c.``
} catch (erzror) {
    console.log(error)
}

// 不能捕获setTimout的错误或者Promise的错误。如果想要捕获， 将try-catchf放入到异步代码当中

try {
    new Promise((res, rej) => {
        rej('promise reject error')
// throw new Error('promise throw error')
    })
} catch (e) {
    console.log('catch error:', e)
}
try {
    setTimeout(() => {
        throw new Error('setTimeout throw error')
    }, 0)
} catch (e) {
    console.log('catch error:', e)
}


//async await
async function fn() {
    try {
        let res = await new Promise((res, rej) => {
            // rej('my reject err') // unhandledrejection 可以处理
            throw Error('my throw error') // unhandledrejection 可以处理
        })
    } catch (err) {
        console.log('catch err', err)
    }
}

n()
// try catch 中的错误已经被处理，它不会冒泡到window.onerror 上面去，所以window.onerror无法捕获到
// window.onerror 是一个全局错误处理器，可以捕获在执行javaScript代码时的错误，包含语句和语法的错误， 他可以用于收集错误信息，执行自定义的错误处理逻辑
window.onerror = function (message, source, lineno, colno, error) {
    // 错误信息
    console.log(message)
    // 错误源
    console.log(source)
    // 错误行号
    console.log(lineno)
    // 错误列号
    console.log(colno)
    // 错误对象
    console.log(error)
}

// 当资源加载失败或无法使用的时候，会在window对象触发error事件，无法捕获Promise错误，可以捕获setTimout的错误
//当加载自不同域的脚本中发生语法错误时，浏览器为避免信息泄露的安全风险，语法错误的细节将不会报告给浏览器console中，而是使用"Script error."信息代替。解决办法是为 script 标签添加 crossOrigin 属性，并且服务端配置Access-Control-Alow-Origin:*
window.addEventListener("error", function (event) {
})

// unhandledrejection 事件在Promise被拒绝且没有提供拒绝处理程序时触发，可以捕获Promise错误
window.addEventListener("unhandledrejection", function (event) {
})// 能触发 unhandledrejection ，因为未显式处理reason
Promise.reject('error').then()
Promise.reject('error').then(console.log)

// 不能触发 unhandledrejection ，因为已处理reason
Promise.reject('error').then(console.log, console.log)
// 不能触发 unhandledrejection ，因为没处理reason，直接抛出异常 
Promise.reject('error')
