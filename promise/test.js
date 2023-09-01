/**
 *  1.手写实现Promise.allSettled()
 *  2. 接受参数为数组，每一个数组成员都是Promise对象
 *  3. 方法返回的 Promise 实例终值也是一个数组，顺序同 promise 输入顺序，
 *  4.其中每个成员在输入 promise 为 resolved 状态时为 {status:'fulfilled', value:同一个终值}，
 *  5. rejected 状态时为 {status:'rejected', reason:同一个拒因}。
 */
function PromiseAllSettled(array) {
    if (array.length === 0) return Promise.resolve([]);
    let index = 0;
    //index == array.length表示执行完毕
    let result = [];
    let len = array.length;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < array.length; i++) {
            let current = array[i];
            Promise.resolve(current).then(res => {
                result[i] = {status: 'fulfilled', value: res};
            }).catch(reason=>{
                result[i] = {status: 'rejected', value: reason}
            }).finally(()=>{
                //最后执行完毕，判断计数是否等于传递进来的参数的个数
                index++
                if(index === array.length) {
                    resolve(result);
                }
            })
        }
    })
}


//测试一下allSettled
let p1 = Promise.resolve(2);
let p2 = Promise.resolve(3);
let p3 = Promise.reject("执行失败");

PromiseAllSettled([p1, p2, p3]).then(res => {
    console.log(res);
});
 
