var longestPalindromeSubseq = function (s) {
    let len = s.length
    //在s[i,j]中，dp[i][j]表示最长回文子序列的长度
    let dp = Array.from(new Array(len), () => new Array(len).fill(0))
    for (let i = 0; i < len; i++) {
        dp[i][i] = 1
    }
    for (let i = len - 1; i >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            if (s[i] == s[j]) {
                // 从里面向外边进行扩散
                dp[i][j] = dp[i + 1][j - 1] + 2
            } else {
                //  向左 或 像右边  拓展
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
            }
        }
    }
    //  从下向上
    return dp[0][len - 1]
}