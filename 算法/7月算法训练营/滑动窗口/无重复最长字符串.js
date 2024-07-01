var lengthOfLongestSubstring = function (s) {
    let charMap = new Map()
    let max = 0
    let l = 0
    for (let i = 0; i < s.length; i++) {
        const curStr = s[i]
        //  已存在，且大于左边，说明重复了
        if (charMap.has(curStr) && charMap.get(curStr) >= l) {
            // 更新左边界
            l = charMap.get(curStr) + 1
        }
        // 更新当前字符串的位置
        charMap.set(curStr, i)
        max = Math.max(max, i - l + 1)
    }
    return max
}

/**
 * 1. 新建一个空串 str
 * 2.判断空串存不存在
 *      idx = str.indexOf(curStr)
 *     存在就从存在的位置开始截取字符串str.substring(idx, str.length)+ curStr
 * 3. 不存在吗，就+ cur 更新最长长度
 * @param s
 * @returns {number}
 */
var lengthOfLongestSubstring = function (s) {
    let str = ''
    let max = 0
    for (let i = 0; i < s.length; i++) {
        const cur = s[i]
        if (!str.includes(cur)) {
            str += cur
            max = Math.max(max, str.length)
        } else {
            let index = str.indexOf(cur)
            str = str.substring(index + 1, str.length) + cur
        }
    }
    return max
}

var lengthOfLongestSubstring = function (s) {
    let max = 0
    let str = ''
    let i = 0
    while (i < s.length) {
        let cur = s[i]
        if (!str.includes(cur)) {
            str += cur
            max = Math.max(str.length, max)
        } else {
            let idx = str.indexOf(cur)
            str = str.substring(idx + 1, str.length) + cur
        }
        i++
    }
    return max
}

var lengthOfLongestSubstring = function (s) {
    let max = 0
    let str = ''
    let i = 0
    for (let cur of s) {
        if (!str.includes(cur)) {
            str += cur
            max = Math.max(str.length, max)
        } else {
            let idx = str.indexOf(cur)
            str = str.substring(idx + 1, str.length) + cur
        }
    }
    return max
}

let s = 'pwwkew'
console.log(lengthOfLongestSubstring(s))
