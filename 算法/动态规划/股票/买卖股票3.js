// d[i][0] 不操作
// dp[i][1] 第一次持有
// dp[i][2] 第一次不持有
// dp[i][3] 第二次持有
// dp[i][4] 第二次不持有 

function maxProfit(prices) {
    if (prices.length === 0) return 0;
    let dp = new Array(prices.length).fill(0).map(() => new Array(5).fill(0));
    // dp[0][0] = 0  //没有操作手里面的钱自然等于0  
    // dp[0][1] = -prices[0] //第一次买入后的初始现金为-prices[0]
    // dp[0][2] = 0 //当天第一次又买又卖金额为0  
    dp[0][3] = -prices[0] // 当天第二次买入 
    // dp[0][4] = 0 //当天第二次卖出

    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = dp[i - 1][0]
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
        dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i])
        dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i])
        dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i])
    }
    return dp[prices.length - 1][4]
}

{
    // // 空间优化的写法
    // function maxProfit(prices) {
    //     if (prices.length === 0) return 0
    //     let dp = new Array(5).fill(0)
    //     dp[0] = -prices[0]
    //     dp[3] = -prices[0]
    //     for (let i = 1; i < prices.length; i++) {
    //         // 第一次持有
    //         // dp[1] = max(dp[1], dp[0] - prices[i]); 如果dp[1]取dp[1]，即保持买入股票的状态，
    //         ///那么 dp[2] = max(dp[2], dp[1] + prices[i]);中dp[1] + prices[i] 就是今天卖出。
    //         // 如果dp[1]取dp[0] - prices[i]，今天买入股票，那么dp[2] = max(dp[2], dp[1] + prices[i]);
    //         // 中的dp[1] + prices[i]相当于是今天再卖出股票，一买一卖收益为0，对所得现金没有影响。
    //         // 相当于今天买入股票又卖出股票，等于没有操作，保持昨天卖出股票的状态了。
    //         dp[1] = Math.max(dp[1], dp[0] - prices[i])
    //         dp[2] = Math.max(dp[1], dp[1] + prices[i])
    //         dp[3] = Math.max(dp[3], dp[2] - prices[i])
    //         dp[4] = Math.max(dp[3], dp[3] + prices[i])
    //     }
    //     return dp[4]
    // }

}