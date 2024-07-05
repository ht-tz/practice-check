const resource = performance.getEntriesByType('resource')
const formatResourceArray = resource.map(item => {
    return {
        name: item.name,                    //资源地址
        startTime: item.startTime,          //开始时间
        responseEnd: item.responseEnd,      //结束时间
        time: item.duration,                //消耗时间
        initiatorType: item.initiatorType, //资源类型
        transferSize: item.transferSize,    //传输大小
        //请求响应耗时 ttfb = item.responseStart - item.startTime
        //内容下载耗时 tran = item.responseEnd - item.responseStart
        //但是受到跨域资源影响。除非资源设置允许获取timing
    };
})

//静态的资源的加载
