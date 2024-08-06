// 物品的重量为j为 stones[i]，物品的价值为stones[i]

var lastStoneWeightII = function (stones) {
    let sum = stones.reduce((a, b) => a + b, 0)
    let target = Math.floor(sum / 2) // < sum - dp[target]
    let dp = new Array(target + 1).fill(0)
    for (let i = 0; i < stones.length; i++) {
        for (let j = target; j >= stones[i]; j++) {
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
        }
    }

    return sum - 2 * dp[target]
}