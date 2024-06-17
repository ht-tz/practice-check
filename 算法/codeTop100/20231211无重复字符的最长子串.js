// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function (s) {
//     let arr = []
//     let maxLen = 0
//     for (let i of s) {
//         let index = arr.indexOf(s.charAt(i))
//         if (index !== -1) {
//             arr.splice(0, index + 1)
//         }
//         arr.push(s.charAt(i))
//         maxLen = Math.max(maxLen, arr.length)
//     }
//     return maxLen
// };


// let s = "bbbbb"
// let max = lengthOfLongestSubstring(s)
// console.log(max)


var lengthOfLongestSubstring = function (s) {
    let set = new Set()
    let len = s.length
    let right = 0
    let maxLen = 0
    for (let i = 0; i < len; i++) {
        if (i !== 0) {
            //左指针移动一格，移除一个子符
            set.delete(s.charAt(i - 1))
        }
        // 第一次进来的全是不重复的，
        // 如果不满足有重复的，则进入外部循环，删除左侧字符，一直更新set同时移动又指针，直到len
        // 其中一直收缩左边界 更新最大值
        while (right < len && !set.has(s.charAt(right))) {
            //积累了最长的值，不符合条件的话，就在上面删除，删除一个再次进来while不符合条件再次删除，直至所有的条件都符合
            set.add(s.charAt(right))
            right++
            maxLen = Math.max(maxLen, right - i)
        }
    }
    return maxLen
}

let s1 = 'abacdefg'
let max = lengthOfLongestSubstring(s1)
console.log(max)


var lengthOfLongestSubstring = function (s) {
    let set = new Set()
    let len = s.length
    let right = 0
    let maxLength = 0

    for (let i = 0; i < len; i++) {
        if (i !== 0) {
            // 左指着移动一格，移除一个字符
            set.delete(s.charAt(i - 1))
        }
        //小于len 且没有加进来的，加进来
        while (right < len && !set.has(s.charAt(right))) {
            set.add(s.charAt(right))
            right++
            maxLength = Math.max(maxLength, right - 1)
        }
    }
    return maxLength
}