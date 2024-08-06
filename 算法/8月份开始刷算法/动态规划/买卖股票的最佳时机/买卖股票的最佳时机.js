function maxProfit(prices) {
    let min = 0
    let result = 0
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(low, prices[i])
        result = Math.max(result, prices[i] - min)
    }
    return result
}

function maxProfit(prices) {
    //dp[i][0] 第 i 天持有股票所得的现金
    //dp[i][1] 第 i 天不持有股票所得的现金
    let len = prices.length
    let dp = new Array(len).fill(0).map(() => new Array(2).fill(0))
    dp[0][1] = 0
    dp[0][0] = -prices[0]
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
        dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    }
    return dp[len - 1][1]
}
