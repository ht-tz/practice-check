// 零钱兑换2
var change = function (amount, coins) {
    // dp[j] 表示凑成金额 j 有dp[j] 种方法
    let dp = new Array(amount + 1).fill(0)
    dp[0] = 1
    // 本质上组合数，凑出方案的个数，美一个方案的个数都是组合数
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            // 装满容量为j -coins[i]的背包，有dp[j -coins[i]]种方法
            dp[j] += dp[j - coins[i]]
        }
    }
    return dp[amount]
}