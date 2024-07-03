/**
 * 746. 使用最小花费爬楼梯
 * 已解答
 * 简单
 * 相关标签
 * 相关企业
 * 提示
 * 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。
 *
 * 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
 *
 * 请你计算并返回达到楼梯顶部的最低花费。
 */
var minCostClimbingStairs = function (cost) {
    // 爬到dp[i] 层所需的最小花费为dp[i]
    let dp = new Array(cost.length + 1)
    dp[0] = 0
    dp[1] = 0

    for (let i = 2; i <= cost.length; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    }
    return dp[cost.length - 1]
}