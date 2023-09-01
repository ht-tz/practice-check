// 初始值不传值，默认取函数的第一项
Array.prototype.myReduce = function (fn, initValue) {
    let arr = Array.prototype.slice.call(this)
    let res;
    let startIndex;
    // 初始值，不传值，默认数组的第一项
    res = initValue ? initValue : arr[0]
    startIndex = initValue ? 0 : 1
    for (let i = startIndex; i < arr.length; i++) {
        //把初始值，当前索引值，当前数组返回值，调用的时传到函数中 [1,2,3,4,5].reduce((initValue,curr,index,arr))
        res = fn.call(null,res, arr[i], i, this)
    }
    return res;
}


let arr =  [1,34,4,5,6] 

let data = arr.myReduce((acc,cur,index,array)=>{
  return acc + cur*cur
},1)
console.log(data);