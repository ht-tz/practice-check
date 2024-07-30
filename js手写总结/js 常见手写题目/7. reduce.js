Array.prototype.myReduce = function (fn, initValue) {
    let arr = this
    let res
    res = initValue || arr[0]
    let startIndex = initValue ? 0 : 1
    for (let i = startIndex; i < arr.length; i++) {
        res = fn(res, arr[i], i, this)
    }
    return res
}

let arr = [1,23,4,4]
 let a =  arr.myReduce((pre, cur) => pre + cur, 0)
 console.log(a)