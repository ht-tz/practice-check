var numDistinct = function (s, t) {
  let [m, n] = [s.length, t.length]
  // dp[i][j] 是以  i-1为结尾的字符串s子序列中， 出现以就j - 1结尾 t的个数，
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  // 初始化
  // dp[i][0] 表示：以i-1为结尾的s可以随便删除元素，出现空字符串的个数。t
  // -> 迷惑关键点，
  // -> dp[i][0] 对应的是 j - 1 结尾的字符串，
  // ->  - 1 结尾 也就是0 t为空字符串
  // t为空的话， s就是删除完， 空t也是空s的一个字序列

  // dp[i - 1][j]对应的是[s - 2][t] 不考虑s最后一个元素，

  //dp[0][j] s是空字符串，t不是空字符串， 这时候 t 不可能是s的子序列，所以为0
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === t[j - 1]) {
        // 不考虑s和t的最后一个元素 就和之前的个数一样，
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }

  return dp[m][n]
}
