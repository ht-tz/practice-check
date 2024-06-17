//dp[i] 表示爬到第i层楼梯，有dp[i]种方法
function climbStairs(n) {
    if (n <= 1) return n
    let dp = new Array(n + 1).fill(0)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}