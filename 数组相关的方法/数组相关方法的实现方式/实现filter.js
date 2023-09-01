Array.prototype.myFilter = function(callback, context = null) {
    let that  = this
    let newArr = [] 
      for(let i = 0; i < that.length; i++) {
        if (callback.call(context, that[i], i, that))  {
             newArr.push(that[i])
        }
      }
      return newArr
}
 
let arr = [1,3,4]
 
let a = arr.myFilter(el=> el>1)
console.log(a);