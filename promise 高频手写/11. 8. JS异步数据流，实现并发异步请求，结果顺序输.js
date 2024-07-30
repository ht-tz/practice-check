// 异步数据流
function asyncRequest(url) {
    return new Promise(function (resolve, reject) {
        // 模拟异步请求
        setTimeout(function () {
            resolve('异步请求结果：' + url);
        }, 1000);
    });
}

//并发的URL数组
const urls = ['url1', 'url2', 'url3', 'url4', 'url5'];
// 异步请求数组
const promises = urls.map(el=>asyncRequest(el))

Promise.all(promises).then(results => {
    console.log(results)
}).catch(err=>{
    console.log(err)
})