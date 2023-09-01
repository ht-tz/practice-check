Array.prototype.forEach = function (fn,context) {
    let arr = Array.prototype.slice.call(this)
    for ( let i = 0; i <arr.length ; i++) {
        typeof fn==='function' &&  fn.call(context, arr[i],i,arr)
    }
}

let arr = [1,2,3]

arr.myForEach((el,index)=>{
     console.log(el,index);
})