// Array.of()用于将一组值,转换为数组
let da = Array.of(2,23,5,6)
console.log(da)

Array.myOf = function (){
     return [].slice.call(arguments)
}

let db = Array.myOf(1,2,3,4)
console.log(db)