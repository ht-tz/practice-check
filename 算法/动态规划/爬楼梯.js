/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // dp[i] 上到第i层楼 有 dp[i]种方法
    let dp = []
    dp[1] = 1
    dp[2] = 2

    for (let i = 3; i <= n; i++) {
        dp[i] = dp [i - 1] + dp[i - 2]
    }

    return dp[n]
};