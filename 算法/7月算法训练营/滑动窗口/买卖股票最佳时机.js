// 贪心算法
function maxProfit(prices) {
    let minPrices = prices[0]
    let maxProfit = 0
    for (let i = 1; i < prices.length; i++) {
        minPrices = Math.min(prices[i], minPrices)
        maxProfit = Math.max(prices[i] - minPrices, maxProfit)
    }
    return maxProfit
}
//动态规划
function maxProfit(prices) {
    let len = prices.length
    if (len === 0) return 0

    // dp[i]表示第i天持有过票所获得额最大现金
    let dp = new Array(len).fill(0).map(() => new Array(2).fill(0))
    // 第一天持有
    dp[0][0] = -prices[0]
    // 第一天不持有
    dp[0][1] = 0
    for (let i = 1; i < len; i++) {
        // 持有股票
        dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
        //  持有股票的所得现金
        dp[i][1] = Math.max(dp[i - 1][0] + prices[i], dp[i - 1][1])
    }
    return dp[len - 1][1]
}
