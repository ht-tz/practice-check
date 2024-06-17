var longestPalindromeSubseq = function(s) {
    let res = 0
    let max = 0
    // dp [i][j] 表示 s[i] 到 s[j] 最长回文子学的长度
    let dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0))
    // s[i]==s[j] dp[i][j] = dp[i+1][j-1] + 2,  左右各一个直接加2
    // s[i]!=s[j] dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]),
    let len = s.length
    for (let i = 0; i < len; i++) {
        dp[i][i] = 1
    }

    for (let i = len - 1; i >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            if (s[i] == s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[0][len -1]
}