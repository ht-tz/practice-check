// 贪心 因为股票只能买卖一次，那么贪心的想法很自然就是取最左最小值，
//到最右最大值，那么得到的自然是最大利润

function maxProfit(prices) {
    let low = prices[0];
    let res = 0
    for (let i = 0; i < prices.length; i++) {
        low = Math.min(low, prices[i]); //取到最左边的最小价格 ，
        res = Math.max(res, prices[i] - low); //直接去最大区间利润
    }
    return res
}

{
    //动态规划
    //dp[i][0]持有这次股票最大值，dp[i][1] 不持有股票的最大值
    function maxProfit(prices) {
        let len = prices.length;
        if (len === 0) {
            return 0
        }
        let dp = new Array(len).fill(0).map(v => new Array(2).fill(0))
        dp[0][0] = -prices[0] //第一天持有股
        dp[0][1] = 0 // 第天不持有股票

        for (let i = 1; i < len; i++) {
            dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
            dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
        }
        //不持有股票的现金肯定是最多的
        return dp[len - 1][1]
    }
}

let dp = new Array(5).fill(0).map(v => new Array(2).fill(0))
console.log(dp)
