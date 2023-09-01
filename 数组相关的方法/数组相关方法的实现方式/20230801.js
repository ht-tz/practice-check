Array.prototype.myReduce = function (fn, initValue) {
    let arr = Array.prototype.slice.call(this)
    let res;
    let startIndex
    res = initValue ? initValue : arr[0]
    startIndex = initValue ? 0 : 1
    for (let i = startIndex; i < arr.length; i++) {
        res = fn.call(null, res, arr[i], i, this)
    }
    return res;
}