/**
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

示例 1： 输入：s = "We are happy."
输出："We%20are%20happy."

#
 */

let str = "We are happy"
function replaceSpace(str) {
    //字符串转数组
    let arr = Array.from(str)

    let count = 0
    //计算空格的数量
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            count++
        }
    }
    let left = arr.length - 1
    let right = arr.length - 1 + count * 2
    //从后向前填充  
    while (left >= 0) {
        if (arr[left] === " ") {
            arr[right--] = "0"
            arr[right--] = "2"
            arr[right] = "%"
        } else {
            arr[right] = arr[left]
        }
        left-- 
        right--
    }
    return arr.join("")
}
console.log(replaceSpace(str))


function replaceSpace1(str) {
    //字符串转数组
    let arr = Array.from(str)

    let count = 0
    //计算空格的数量
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            count++
        }
    }
    let left = arr.length - 1
    let right = arr.length - 1 + count * 2
    //从后向前填充  
    while (left >= 0) {
        if (arr[left] === " ") {
            arr[right] = "0"
            right--
            arr[right] = "2"
            right--
            arr[right] = "%"
        } else {
            arr[right] = arr[left]
        }
        left-- 
        right--
    }
    return arr.join("")
}
console.log(replaceSpace1(str))