//1.利用script标签不受跨域限制的特点,缺点是只支持get请求
// 2. 创建script标签
//3.设置标签的属性 ？ 传递参数，设置好回调函数callback的名称
//4.插入到html文本中
//5.调用回调函数，res参数就是获取的数据

function jsonp({url,params,callback}) {
    return new Promise((resolve, reject) =>{
        let script = document.createElement('script');
        window[callback] = function (data) {
            resolve(data);
            document.body.removeChild(script);
        }
        var arr = []
        for (var key in params) {
            arr.push(`${key}=${params[key]}`)
        }
        script.type = 'text/javascript'
        script.src = `${url}?callback=${callback}&${arr.join('&')}`
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
}).then(data=>{console.log(data)})