function ajax(url, method, body, headers) {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest()
        req.open(method, url)
        //设置头信息
        for (let key in headers) {
            req.setRequestHeader(key, headers[key])
        }

        // 0 UNSET  代理被创建，但是没右调open方法
        //  1 OPENED  代理被创建，并调用了open方法
        // 2  send 方法已经被调用， 并且头部状态已经
        // 3  请求完成，并且响应已准备好
        // 4  请求完成，并且响应已准备好
        req.onreadystatechange(() => {
             if(req.readyState === 4) {
                 if(req.status >= 200 && req.status <= 300) {
                      resolve(req.responseText)
                 } else {
                     reject(req)
                 }
             }
        })

        req.send(body)
    })
}