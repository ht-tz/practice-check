function maxProfit(prices) {
    let len = prices.length
    let dp = new Array(n).fill(0).map(() => new Array(2).fill(0))
    dp[0][1] = 0
    dp[0][0] = -prices[0]

    for (let i = 1; i < len; i++) {
        // 持有
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
        // not
        dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    }
    return dp[len - 1][1]
}
