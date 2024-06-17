/**
 * @param {number[]} cost
 * @return {number}
 */
//dp[i]到达i 台阶，最少花费的最少体力为dp[i]
//两个途径得到dp[i],dp[i -1] dp[i -2]

/**
 * dp[i -1]到dp[i] 需要dp[i - 1]+cos[i - 1]
 * dp[i -2]到dp[i] 需要花费dp[i - 2] + cos[i - 2]
 * 从d[i-1] 开始呢还是从dp[ i -2]开始 那个花费小从那个开始
 *  dp[i] = min(dp[i - 1] + cos[i -1] ,dp[i -2] + cos[i - 2]
 */
var minCostClimbingStairs = function (cost) {
    let len = cost.length
    let dp = []
    dp[0] = 0 //0阶梯不需要花费体力 下标0开始， 开始不需要花费
    dp[1] = 0 //1 从第一阶开始 0 - 1  开始不需要花费
    for (let i = 2; i <= len; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    }
    return dp[len]
};

/**
 * @param {number[]} cost
 * @return {number}
 */
/**
 * dp[i -1]到dp[i] 需要dp[i - 1]+cos[i - 1] - dp[1] 跳到我i跳一步的花费
 * dp[i -2]到dp[i] 需要花费dp[i - 2] + cos[i - 2] -dp[0] 跳到i跳两步的花费
 * 从d[i-1] 开始呢还是从dp[ i -2]开始 那个花费小从那个开始
 *  dp[i] = min(dp[i - 1] + cos[i -1] ,dp[i -2] + cos[i - 2]
 */

var minCostClimbingStairs1 = function (cost) {
    let len = cost.length

    let dp0 = 0 //0阶梯不需要花费体力 下标0开始， 开始不需要花费
    let dp1 = 0 //1 从第一阶开始 0 - 1  开始不需要花费
    for (let i = 2; i <= len; i++) {
        let dpi = Math.min(dp1 + cost[i - 1], dp0 + cost[i - 2])
        dp0 = dp1
        dp1 = dpi
    }
    return dp1
};