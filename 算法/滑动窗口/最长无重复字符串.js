function maxLength(s) {
    let arr = [];
    let maxLen
    for (const i in s) {
        let index = arr.indexOf(s.charAt(i))
        if (index !==-1) {
            arr.splice(0,index+1)
        }
        arr.push(s.charAt(i));
        maxLen = Math.max(maxLen,arr.length)
    }
    return arr.length
}

let max = maxLength('1234321')

console.log(max)