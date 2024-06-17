/*
 * @Author: htz
 * @Date: 2024-06-08 19:43:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-08 19:59:04
 * @Description: 最长公共前缀
 */
function longestCommonPrefix(strs) {
  let len = strs.length
  if (!len) return ''
  let res = strs[0]

  for (let i = 0; i < res.length; i++) {
    let k = 0
    while (k < res.length && res[k] === strs[i][k]) {
      k++
    }
    res = res.slice(0, k)
  }
  return res
}

let strs = ['aqqbca', 'abc', 'abca', 'acbc', 'abcc']

console.log(longestCommonPrefix(strs)

