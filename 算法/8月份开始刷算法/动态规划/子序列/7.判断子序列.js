var isSubsequence = function (s, t) {
    let [m, n] = [s.length, t.length]
    let i = 0, j = 0
    while (i < m && j < n) {
        if (s[i] === s[j]) {
            i++
        }
        j++
        return i === m
    }
}

var isSubsequence = function (s, t) {
    let [m, n] = [s.length, t.length]
    //表示以i- 1结尾的字符串s, 和以j - 1为结尾的字符串t, 相同子序列的长度为dp[i][j]
    let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i-1] == t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                // 删除t 元素  相当于s[t - 1] == t[j - 2] 比较的结果规范
                dp[i][j] = dp[i][j - 1]
            }
        }
    }
    return dp[m][n] == m
}


var isSubsequence = function (s, t) {
     let [m,n] = [s.length, t.length]
     let dp = new Array(m+1).map(() => new Array(n + 1).fill(0))
    for (let i = 1; i <=m; i++) {
        for (let j = 1; j <=n ; j++) {
             if(s[ i -1] ==  t[j - 1]) {
                 dp[i][j] = dp[i - 1][j - 1] + 1
             } else {
                 // 题目 s 是 t 字符串
                  dp[i][j] = dp[i][j - 1]
             }
        }
    }
    return  dp[m][n] === m
}

console.log(dp)