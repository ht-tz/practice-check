const selfFilter = function (fn, context) {
    //获取数组对象
    let arr = Array.prototype.slice.call(this)
    let filterArray = []
    for (let i = 0; i < arr.length; i++) {
        if (!arr.hasOwnProperty(i)) continue
        fn.call(context, arr[i], i, this) && filterArray.push(arr[i])
    }
    return filterArray
}

Array.prototype.selfFilter = selfFilter;
console.log([2, 34, 23].selfFilter(el => el > 2));
console.log([23, 23, 4324].filter(el => el > 25));


Array.prototype.mfliter = function (callback) {
    const filteredArray = []
    for (let i = 0; i <this.length ; i++) {
         if(callback(this[i],i,this)) {
             filteredArray.push(this[i])
         }
    }
    return filteredArray
}