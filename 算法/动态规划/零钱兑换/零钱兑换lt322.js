/**
 * 322. 零钱兑换
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
 *
 * 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
 *
 * 你可以认为每种硬币的数量是无限的。
 */
var coinChange = function (coins, amount) {
    if (amount === 0) return 0
    let len = coins.length
    // dp[j] 表示凑成金额为i所需钱币最少为dp[j]个
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 0; i < len; i++) { // 遍历物品
        // 遍历背包,  避免dp下标出现负数的情况
        for (let j = coins[i]; j <= amount; j++) {
            // 跳过初始值
            if (dp[i - coins[j]] !== Infinity) {
                dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
            }
        }
    }
    if (dp[amount] === Infinity) return -1
    return dp[amount]
}


var coinChange = function (coins, amount) {
    if (amount === 0) return 0
    let len = coins.length
    // dp[j] 表示凑成金额为i所需钱币最少为dp[j]个 为什么+1，因为要取amount
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0

    // 先遍历背包，在遍历物品
    for (let i = 0; i <= amount; i++) {
        for (let j = 0; j < len; j++) {
            if (i >= coins[j] && dp[i - coins[j]] !== Infinity) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
            }
        }
    }
    if (dp[amount] === Infinity) return -1
    return dp[amount]
}