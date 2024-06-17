// 因为股票必须先买入在卖出在买入，所以可以计算每一天的利润，然后取正值
function maxProfit(prices) {
    let res = 0
    for (let i = 1; i < prices.length ; i++) {
        res += Math.max(prices[i] - prices[i - 1],0)
    }
    return res
}