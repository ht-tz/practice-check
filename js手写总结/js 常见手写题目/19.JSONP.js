function jsonp(url, params, callback) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script')

        window[callback] = function (data) {
            resolve(data)
            document.body.removeChild(script)
        }

        let arr = []
        for (let key in params) {
            arr.push(`${key}=${params[key]}`)
        }
        script.type = 'text/javascript'
        script.src = `${url}?callback=${callback}&${arr.join("&")}`
        document.body.append(script)
    })
}


// 测试用例
jsonp({
    url: 'http://suggest.taobao.com/sug',
    callback: 'getData',
    params: {
        q: 'iphone手机',
        code: 'utf-8'
    },
}).then(data => {
    console.log(data)
})