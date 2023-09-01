Array.prototype.MyMap = function (fn,context) {
    let arr = Array.prototype.slice.call(this)
    for ( let i = 0; i <array.length ; i++) {
        arr.push(fn.call(context, array[i],i,array))
    }
    return arr
}

Array.prototype.forEach = function (fn,context) {
    let arr = Array.prototype.slice.call(this)
    for ( let i = 0; i <arr.length ; i++) {
      typeof fn==='function' &&  fn.call(context, arr[i],i,arr)
    }
}

let arr = [1,2,3]

arr.forEach((el,index)=>{
    console.log(el,index);
})