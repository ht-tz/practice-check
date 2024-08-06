var longestCommonSubsequence = function (text1, text2) {
    let [m, n] = [text1.length, text2.length];
    let res = 0
    let dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(0))
    for (let i = 1; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    } return res
}