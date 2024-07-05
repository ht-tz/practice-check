;(function (window, cdnPath, bid, document, globalName) {
    var ae = 'addEventListener'
    var pc = 'precoller'

    // 创建全局占位对象以预先处理用户扥提
    var sdk_placeholder = function (method) {
        var properties = ['get', 'set', 'del', 'has']
    }
    sdk_placeholder.queue = []
    window[globalName] = sdk_placeholder

    // 预处理错误

    if(ae in window) {
        s.precollectError = function (e) {
            //触发缓存收集
            window[globalName](pc, 'err', e``)
        }
    }

    // 增加全局 js 错误监听

    window[ae]('error', s.precollectError, true)

})(window,'sdk.js','test','xxxx',"xx");