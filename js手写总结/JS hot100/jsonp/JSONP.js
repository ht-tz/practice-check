/**
 * 1. 特点是标签不受跨域限制的特点，缺点是只能支持 get 请求
 * 2. 创建scrpipt标签，src属性为跨域的地址，以问号的形式传递参数，设置好回调函数callback 名称
 * 3.  插入html文本中
 * 4.  回调函数执行，将数据传入
 */

function jsonp({ url, data, callback }) {
    return new Promise((resolve, reject) => {
        // 1. 创建script标签
        let script = document.createElement('script')
        let arr = []
        //将数据处理参数
        for (let key in data) {
            arr.push(key + '=' + data[key])
        }
        //2. 设置标签的type
        script.type = 'text/javascript'
        //3. 设置src属性
        script.src = `url?callback=${callback}&${arr.join('&')}`
        //4. 插入html文本中
        document.body.appendChild(script)
        //5. 回调函数执行，将数据传入
        window[callback] = function (res) {
            resolve(res)
            document.body.removeChild(script)
        }
    })
}
