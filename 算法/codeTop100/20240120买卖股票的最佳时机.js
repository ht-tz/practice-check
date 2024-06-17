function myProfit(prices) {
    let low = prices[0]
    let res = 0
    for (let i = 1; i < prices.length; i++) {
        low = Math.min(low, prices[i])
        res = Math.max(res, prices[i] - low)
    }
    return res
}