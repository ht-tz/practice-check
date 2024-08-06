// dp[j] 和为j的最少完全平方数最少个数为dp[j]
var numSquares = function (n) {
    let dp = new Array(n + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
        }
    }
    return dp[n]
}
