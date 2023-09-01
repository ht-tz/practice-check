/*
 翻转字符串里的单词
 给定一个字符串，逐个翻转字符串中的每个单词。

示例 1：
输入: "the sky is blue"
输出: "blue is sky the"

示例 2：
输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。

示例 3：
输入: "a good   example"
输出: "example good a"
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
 */
function reverseWords(str) {
    let arrStr = Array.from(str)
    //移除多余的空格
    removeExtraSpaces(arrStr)
    // 字符串翻转
    reserve(arrStr, 0, arrStr.length - 1)
    //单词翻转
    let start = 0
    for (let i = 0; i <= arrStr.length; i++) {
        if (arrStr[i] === " " || i === arrStr.length) {
            reserve(arrStr, start, i - 1)
            start = i + 1
        }
    }
    return arrStr.join("")
}

function removeExtraSpaces(arrStr) {
    let slow = 0;
    let fast = 0;
    let len = arrStr.length
    while (fast < len) {
        // 移除开始位置的空格和重复的空格
        // fast所在的值的空，fast - 1所在的值也为空的话 移动fast++ 说明是连续的空格，直接继续移动，这样保留始终会有一个空格
        // fast所在的值的空，fast === 0 所在的值也为空的话 移动fast++ 则说明头部也是空值 
        if (arrStr[fast] === ' ' && (fast === 0 || arrStr[fast - 1] === ' ')) {
            fast++
        } else {
            //不为空的话就直接赋值包含空格
            arrStr[slow] = arrStr[fast]
            slow++
            fast++
        }
    }
    // 移除末尾的空格。// 可以改变数组的长度直接删除空格
    arrStr.length = arrStr[slow - 1] === ' ' ? slow - 1 : slow
}

{
    let arr = ['1', '2', '']
    let len = arr.length
    arr.length = 2
    console.log(arr)
}

// 可以使用库函数
function reserve(arrStr, start, end) {
    let l = start;
    let temp
    let r = end
    while (l < r) {
        temp = arrStr[l]
        arrStr[l] = arrStr[r]
        arrStr[r] = temp
        l++;
        r--
    }
    // return arrStr
}

let str = "the sky is blue"

console.log(reverseWords(str))