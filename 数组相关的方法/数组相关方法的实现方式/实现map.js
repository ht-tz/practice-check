Array.prototype.myMap = function (fn, context) {
    let arr = Array.prototype.slice.call(this)
    let mapArr = []

    for (let i = 0; i < arr.length; i++) {
        //把当前的值，索引，当前数组返回去，调用的时候传到函数参数当中
        mapArr.push(fn.call(context, arr[i], i, arr))
    }
    return mapArr
}


let arr = [1, 23, 4]
let aa = arr.myMap(el => {
    return el * el
})
console.log(aa);