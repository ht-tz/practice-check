// dp[i][0] 表示第i天所持有的现金。 
// dp[i][1] 表示第i天不持有股票的现金
//如果第i天持有的股票所得现金是几dp[i][0],那么有两个状态推导过来 
// 第i-1天就持有股票，那么就保持现状，所得现金就是昨天持有股票的所得现金 即：dp[i - 1][0]
// 第i天买入股票，所得现金就是昨天不持有股票的所得现金减去 今天的股票价格 即：dp[i - 1][1] - prices[i]
const maxProfit = function (prices) {
    let dp = Array.from(Array(prices.length), () => new Array(2).fill(0));
    //dp[i][0] 表示第i天持有股票所得的最多现金
    //dp[i][1] 表示第i天不持有股票所的最多现金 
    dp[0][0] = 0 - prices[0]
    dp[0][1] = 0
    for (let i = 1; i < prices.length; i++) {
        // 如果第i天持有股票即dp[i][0]， 那么可以由两个状态推出来
        // 第i-1天就持有股票，那么就保持现状，所得现金就是昨天持有股票的所得现金 即：dp[i - 1][0]
        // 第i天买入股票，所得现金就是昨天不持有股票的所得现金减去 今天的股票价格 即：dp[i - 1][1] - prices[i]
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
        // 在来看看如果第i天不持有股票即dp[i][1]的情况， 依然可以由两个状态推出来
        // 第i-1天就不持有股票，那么就保持现状，所得现金就是昨天不持有股票的所得现金 即：dp[i - 1][1]
        // 第i天卖出股票，所得现金就是按照今天股票佳价格卖出后所得现金即：prices[i] + dp[i - 1][0]
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    }

    return dp[prices.length - 1][1]
}


//动态规划滚动数组
const maxProfit1 = function (prices) {
    let n = prices.length
    let have = 0 - prices[0] // 第i天持有股票的最大收益。
    let noHave = 0 //nohave是第i天不持有股票的最大收益

    for (let i = 1; i < n; i++) {
        // 第i天持有股票的最大收益: 1.保持现状由i-1天推导而来 2. 今天买入 就是昨天不持有股票的所得现金 - 今天股票的价格
        have = Math.max(have, noHave - prices[i])
        // 第i天不持有股票的最大收益
        noHave = Math.max(noHave, have + prices[i])
    }
    return noHave
}