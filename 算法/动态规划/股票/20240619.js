// var maxProfit = function (prices) {
//     let res = 0
//     let min = prices[0]
//
//     for (let i = 1; i < prices.length; i++) {
//         //比当天小，更新最小值
//         min = Math.max(res, prices[i])
//         res = Math.max(res, prices[i] - min)
//     }
//     return res
// }
//
// var maxProfit = function (prices) {
//     if (prices.length === 0) return 0
//     let res = 0
//     // 第i天持有股票所得的现金
//     let dp = new Array(prices.length).fill(0).map(() => new Array(2).fill(0))
//     // 第一天买入持有的现金数量为-prices[0]
//     dp[0][0] = -prices[0]
//     // 不持有股票现金就是0
//     dp[0][1] = 0 // 已经初始化过了
//     for (let i = 1; i < prices.length; i++) {
//         //i持有股票
//         dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
//         // 第i天不持有股票所得的现金
//         dp[i][1] = Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0])
//     }
//     //
//     res = dp[prices.length - 1][1]
//     return res
// }

// var maxProfit = function (prices) {
//     let len = prices.length
//     if (len === 0) return 0
//     let dp = new Array(len).fill([0, 0])
//     dp[0][0] = -prices[0]
//     dp[0][1] = 0
//
//     for (let i = 1; i < len; i++) {
//         //i持有股票
//         dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
//         //i不持有股票
//         dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
//     }
//     return dp[len - 1][1]
// }
//
// var maxProfit = function (prices) {
//     let res = 0
//     let len = prices.length
//     for (let i = 1; i < len; i++) {
//         if (prices[i] > prices[i - 1]) {
//             res += prices[i] - prices[i - 1]
//         }
//     }
//     return res
// }


var maxProfit = function (prices) {
    let len = prices.length
    if (len === 0) return 0
    //第i天状态j所剩下的最大现金到
    let dp = new Array(len).fill([0, 1, 2, 3, 4])
    dp[0][0] = 0  //没有操作手里面的钱自然等于0
    dp[0][1] = -prices[0] //第一次买入后的初始现金为0
    dp[0][2] = 0 //当天第一次又买又卖金额为0
    dp[0][3] = -prices[0] // 当天第二次买入
    dp[0][4] = 0 //当天第二次卖出

    for (let i = 1; i < len; i++) {
        // 么有操作
        dp[i][0] = dp[i - 1][0]
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
        // 第1次不持有股票，就是卖掉股票， 或者延续之前的买入装状态
        dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i])
        //第二次持有股票， 就是买入股票，或者延续之前的状态。
        dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i])
        dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i])
    }
    return dp[len - 1][4]
}