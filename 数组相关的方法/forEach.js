Array.prototype.myForEach = function (fn,context) {

    let arr = Array.prototype.slice.call(this)
    for ( let i = 0; i <arr.length; i++) {
        if(arr.hasOwnProperty(i))  {
            fn.call(context,arr[i],i, this)
        }
    }
}

let arr = [1,2,3]

arr.myForEach((num,index,array)=>{
    console.log(num,index,array)
})