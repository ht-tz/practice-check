var change = function (amount, coins) {
    // dp[j] 表示凑成金额 j 有dp[j] 种方法
    let dp = new Array(amount + 1).fill(0)
    dp[0] = 1
    // 外层遍历物品，内层遍历背包容量
    for (let i = 1; i < coins.length; i++) {
        // 背包，如果j>amount 就放不下了，跳过
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] += dp[j - coins[i]]
        }
    }
    return dp[amount]
}
