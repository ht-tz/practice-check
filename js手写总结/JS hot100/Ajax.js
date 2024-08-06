/*
 * @Author: htz
 * @Date: 2024-07-13 15:58:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-07-13 16:26:33
 * @Description:   ajax
 */
/**
 * 1. 创建XmlHttpRequest对象
 * 2. 发出http请求
 * 3. 监听服务器响应 server返回xml格式的字符串
 * 4. 解析xml格式的字符串，更新局部页面（现代一般都是JSON）
 *
 *  xhr.readyState
 *  0: 表示客户端已经创建， 尚未调用open方法
 *  1: 表示客户端已经调用open方法， 尚未调用send方法
 *  2: 表示客户端已经调用send方法， 尚未接收到响应
 *  3: 表示客户端已经接收到部分响应， 尚未全部接收完毕
 *  4: 表示客户端已经接收到全部响应数据
 */
// 原生实现
function ajax() {
    let xhr = new XMLHttpRequest()
    // 调用
    xhr.open('get', 'http://localhost:3000/ajax')
    xhr.onreadystatechange = () => {
        //每当readyState属性改变的时候，就会调用该函数
        if (xhr.readyState === 4) {
            // 4 表示服务端已经完成了响应
            // 判断状态码  200-300表示请求成功
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log(xhr.responseText)
                let string = xhr.responseText
                let json = JSON.parse(string)
            }
        }
    }

    xhr.send()
}

function ajax() {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        // 调用
        xhr.open('get', 'http://localhost:3000/ajax')
        xhr.onreadystatechange = () => {
            //每当readyState属性改变的时候，就会调用该函数
            if (xhr.readyState === 4) {
                // 4 表示服务端已经完成了响应
                // 判断状态码  200-300表示请求成功
                if (xhr.status >= 200 && xhr.status < 300) {
                    console.log(xhr.responseText)
                    let string = xhr.responseText
                    let json = JSON.parse(string)
                    resolve(json)
                } else {
                    reject('请求出错')
                }
            }
        }

        xhr.send()
    })
}
