// 删除相邻的项
var removeDuplicates = function(s) {
    let arr = []
    // for (let i = 0; i <s.length ; i++) {
    //      if(arr[arr.length-1] === s[i]) {
    //          arr.pop()
    //      } else {
    //          arr.push(s[i])
    //      }
    // }

    for (let c of s) {
         if(arr[arr.length-1] === c) {
             arr.pop()
         } else {
             arr.push(c)
         }
    }
    return arr.join("")
}
let str = 'abbaca'
console.log(removeDuplicates(str))