Array.prototype.myEvery = function (callback, thisArgs) {
    let array = this,
        flag = false
    for (let j = 0; j < array.length; j++) {
        if (callback.call(thisArgs, array[j], i, array)) {
            flag = true
            break
        }
    }
    return flag
}


let arr = [1, 2, 4, 4, -5]

let fa = arr.some((el, index) => {
    return el < 0
})

console.log(fa);