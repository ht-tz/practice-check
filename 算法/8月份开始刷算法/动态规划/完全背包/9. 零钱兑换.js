const coinChange = (coins, amount) => {
    if (!amount) return 0
    let dp = Array(amount + 1).fill(Infinity)
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] = Math.max([dp[j], dp[j - coins[i]] + 1])
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
}
