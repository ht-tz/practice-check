/**
 * 1. 是普通值就new Promise包裹一下返回，
 * 2.是Promise就直接返回
 */

function PromiseResolve(value) {
    if (value instanceof Promise) {
        return value;
    } else {
        return new Promise((resolve) => {
            resolve(value)
        })
    }
}


PromiseResolve(100).then(value=>{
    console.log(100)
})