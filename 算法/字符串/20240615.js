/*
 * @Author: htz
 * @Date: 2024-06-15 22:19:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-16 00:13:18
 * @Description: 请填写简介
 */
// /**
//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */
// var reverseString = function (s) {
//     let len = s.length
//     let l = 0
//     let r = len - 1
//     while (l < r) {
//         let temp = s[l]
//         s[l] = s[r]
//         s[r] = temp
//         l++
//         r--
//     }
//     return s
// };
//
// var reverseString = function (s, k) {
//     let arr = s.split('')
//     let len = arr.length
//
//     for (let i = 0; i < len; i += 2 * k) {
//         let l = i
//         //   i+2K>len  取len 小于 取i+k-1,  防止越界
//         let r = Math.min(len - 1, l + k - 1)
//         while (l < r) {
//             let temp = arr[l]
//             arr[l] = arr[r]
//             arr[r] = temp
//             l++
//             r--
//         }
//     }
//
//     return arr.join('')
// }
//
// let s = "abcdefg", k = 2
// console.log(reverseString(s, k))

// function replaceStr(s) {
//     let modal = 'number'
//     let arr = s.split('')
//     for (let i = 0; i < arr.length; i++) {
//         if (Number(arr[i])) {
//             //是数字的话
//             arr[i] = modal
//         }
//     }
//     return arr.join('')
// }
//
// let str  ='a1b2c3'
// console.log(replaceStr(str))
// /**
//  * @param {string} s
//  * @return {string}
//  */
// var reverseWords = function (s) {
//     let arr = s.split(' ')
//     console.log(arr)
//     arr.reduce((pre, cur) => {
//         console.log(cur)
//         if (!!cur) {
//             pre.unshift(cur)
//         }
//         return pre
//     }, [])
//     return arr.join(' ')
// };
//
// let s = "  hello world  "
// console.log(reverseWords(s))
//
// console.log(!!(' '))

// function xzStr(str, k) {
//   let arr = str.split('')
//   let len = arr.length

//   let s1 = arr.slice(0, len - k)
//   let s2 = arr.slice(len - k, len)

//   return s2.concat(s1).join('')
// }

// let str = 'abcdefg'
// let k = 2
// console.log(xzStr(str, k))
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let [m, n] = [haystack.length, needle.length]
  for (let i = 0; i + m <= n; i++) {
    let flag = true
    // 匹配m个字符，      //  匹配不到发返回开始即可
    for (let j = 0; j < m; j++) {
      // i+j
      if (haystack[i + j] !== needle[j]) {
        flag = false
        break
      }
    }
    if (flag) {
      return i
    }
  }
  return -1
}
