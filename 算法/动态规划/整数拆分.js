/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    // dp[i] 代表拆分数字i可以得到最大的乘积dp[i]
    let dp = new Array(n + 1).fill(0)
    dp[2] = 1
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j <= i / 2; j++) {
            // dp[i]是依靠dp[i - j]的状态
            // 从1遍历j，然后两种渠道得到dp[i]
            // dp[i - j]*j
            // 一种是就j* dp[i -j] dp【[i - j]是i-j拆分的乘积（可以理解为，把dpp[i -j]拆分成两个以上的个数相乘）
            dp[i] = Math.max(dp[i], j * (i - j), dp[i - j] * j)
        }
    }
    return dp[n]
};