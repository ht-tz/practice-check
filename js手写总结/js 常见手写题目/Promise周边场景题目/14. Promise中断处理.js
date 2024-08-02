class AbortPromise {
    constructor(fn) {
        this.pfn = new Promise((resolve, reject) => {
            this.resolve = resolve
            this.reject = reject
            console.log(this.interrupt.bind(this))
            fn(this.interrupt.bind(this), resolve, reject)
        })
        this.abort = false
    }

    interrupt() {
        this.abort = true
    }

    then(onFulfilled, onRejected) {
        if (this.abort) {
            return
        }
        return this.pfn.then(onFulfilled, onRejected)
    }

    catch(onRejected) {
        if (this.abort) {
            return
        }
        return this.pfn.catch(onRejected)
    }
}


// 使用示例
const myPromise = new AbortPromise((interrupt, resolve, reject) => {
    setTimeout(() => {
        if (!interrupt()) {
            resolve('Promise 成功完成');
        } else {
            reject('Promise 被中断');
        }
    }, 2000);
});

// 一段时间后完成
setTimeout(() => {
    myPromise.interrupt()
},1000 )

myPromise.then((res) =>{
    console.log(res)
}).catch(error =>{
    console.log(error)
})