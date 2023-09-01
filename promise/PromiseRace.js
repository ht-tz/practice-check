/***
 * Promise.race
 * Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。
 */
function PromiseRace(array) {
    if (!Array.isArray(array))  return new TypeError("不是数组");
    return new Promise((resolve, reject) =>{
        for (let i = 0; i <array.length ; i++) {
            if (array[i] instanceof Promise) {
                //遇见promise立即执行
                array[i].then(resolve, reject);
            } else {
                resolve(array[i])
            }
        }
    })
}

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one')
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});


let arr = [promise1,promise2]
PromiseRace(arr).then(res=>{
    console.log(res)
}).catch(e=>{
    console.log(e)
})
