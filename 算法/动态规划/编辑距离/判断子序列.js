/*
 * @Author: htz
 * @Date: 2023-12-17 11:18:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-09 23:21:45
 * @Description: 请填写简介
 */
/* @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // dp[i][j]是以i-1为结尾的字符串s和以 j -1结尾的字符串t的相同子序列的长度为dp[i][j]
  const dp = new Array(s.length + 1).fill(0).map(() => new Array(t.length + 1).fill(0))
  //这里判断的是s是否为t的子序列，即t的长度是大于s的
  for (let i = 1; i <= s.length; i++) {
    for (j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = dp[i][j - 1]
      }
    }
  }

  return dp[s.length][t.length] === s.length
}
