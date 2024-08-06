function maxProfit(prices) {
    let len = prices.length
    let dp = new Array(len).fill(0).map(() => new Array(5).fill(0))
    // 五种状态
    // 0没有操作
    // 1第一次持有
    // 2第一次不持有
    // 3第二次持有
    // 4第二次不持
    // dp[i][1] 表示第i天 j为0 - 4五种状态，dp[i][j]表示第i天状态j所剩最大现金

    // 初始化
    // dp[0][0] = 0
    dp[0][1] = -prices[0]
    // dp[0][2] = 0
    dp[0][3] = -prices[0]
    // dp[0][4] = 0

    for (let i = 1; i < len; i++) {
        dp[i][0] = dp[i - 1][0]
        //前天持有，当天买入
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
        //前一天不持有，今天买入
        dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i])
        // 前一天就持有， 前一天不持有， 今天买入
        dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i])
        dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i])
    }
    return dp[len - 1][4]
}
