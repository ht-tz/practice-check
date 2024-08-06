//最多可以爬m层  2最多可以俩层
var climbStairs = function (n) {
    let dp = new Array(n + 1).fill(0)
    dp[0] = 1
    // 背包
    for (let j = 1; j <= n; j++) {
        for (let i = 1; i <= 2; i++) {
            // 物品
            if (j >= i) {
                dp[j] += dp[j - i]
            }
        }
    }
}
