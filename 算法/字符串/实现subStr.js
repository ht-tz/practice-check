function strStr(haystack, needle) {
  let m = haystack.length
  let n = needle.length
  //边界条件， i+n>m 的话没意义了, 因为i+n>m 的时候，从i到m的字符串肯定不存在（为个数不够了）
  for (let i = 0; i + n <= m; i++) {
    let flag = true

    let j = 0
    while (j < n) {
      if (!haystack[i + j] == needle[j]) {
        flag = false
        // 这次没有匹配上的话， 继续匹配下一轮
        break
      }
    }
    //匹配成功的话 会返回i起始点
    if (flag) {
      return i
    }
  }
  return -1
}
console.log(strStr('hello', 'll'))
