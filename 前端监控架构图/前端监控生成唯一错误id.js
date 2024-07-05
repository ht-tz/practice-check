// 为了避免大量相同的堆栈信息的错误被重复上报， 可以对错误进行去重处理
// 基本思路：将错误堆栈信息进行hash，生成一个唯一的id，然后将这个id作为错误上报的标识，这样相同的错误只会被上报一次
// 基本步骤
// 捕获错误：使用 window.onerror 或 window.addEventListener("error", ...) 捕获错误。
// 生成错误标识符：基于错误信息和堆栈信息生成唯一标识符（可以使用哈希函数）。
// 维护错误缓存：使用一个缓存对象存储已捕获的错误标识符，并记录上报时间。
// 过滤重复错误：在上报错误前检查缓存，过滤掉在时间窗口内已经上报的相同错误。
// 上报错误：将未重复的错误上报到服务器，并更新缓存。


const errorMap = new Map()
const ERROR_CODE_DURATION = 1 * 60 * 1000 // 2分钟
// 生成唯一的错误标识
function generateErrorId(message, source, lineno, colno, stack) {
    return `${message}-${source}-${lineno}-${colno}-${stack}`
}

// 生成错误的唯一错误标识
// 使用 CryptoJS 库生成 MD5 哈希值
// 生成唯一标识符
function generateErrorId(message, source, lineno, colno, stack) {
    const errorString = `${message}_${source}_${lineno}_${colno}_${stack}`;
    return CryptoJS.MD5(errorString).toString();
}

// 检查重复并过滤错误
function isDuplicateError(errorId) {
    const now = Date.now()
    if (errorMap.has(errorId)) {
        const lastReportTime = errorMap.get(errorId)
        if (now - lastReportTime < ERROR_CODE_DURATION) {
            return true
        }
    }
    errorMap.set(errorId, now)
    return false
}

// 上报错误
function reportError(message, source, lineno, colno, stack) {
    // 上报错误到服务器
    const errorId = generateErrorId(message, source, lineno, colno, stack)

    if (isDuplicateError(errorId)) {
        console.log("DuPLICATE ERROR: ", errorId)
        return
    }

    const errorInfo = {
        message,
        source,
        lineno,
        colno,
        stack,
        timeStamp: new Date().toDateString()
    }

    fetch("xxx", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(errorInfo)
    }).then(response => {
        if (!response.ok) {
            throw new Error("new response was not ok")
        }
        return response.json()
    }).then(data => {
        console.log("error reported successfully", data)
    }).catch(report => {
        console.log("error reporting failed", report)
    })
}

// 全局资源加载错误
window.onerror = function (message, source, lineno, colno, error) {
    reportError(message, source, lineno, colno, error.stack)
}

// 捕获资源加载
window.addEventListener('error', function (event) {
    if (event.target !== window) {
        const message = `Resource ${event.target.localName} failed to load`
        const source = event.target.src || event.target.href
        reportError(message, source, 0, 0, new Error(message))
    }
}, true) // true 表示在捕获阶段处理事件，而不是冒泡阶段，这对于捕获资源加兹安错误非常的重要
// widow 对象上捕获资源加载错误时候，如果不适用捕获阶段，则默认情况下，事件监听器会在冒泡阶段执行，
// 然而，对于某些资源加载错误， 冒泡阶段，可能不会触发事件，导致冒泡阶段无法运行
