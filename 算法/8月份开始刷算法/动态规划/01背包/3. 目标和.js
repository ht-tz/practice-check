// 目标和
var findTargetSumWays = function (nums, target) {
    if (nums.length === 0) return 0

    let sum = nums.reduce((a, b) => a + b, 0)
    if (Math.abs(target) > sum) return 0
    //x = (target+sum)/2
    if ((target + sum) % 2 !== 0) return 0
    let bagSize = (target + sum) / 2
    // 表示装满容量为j的背包，有dp[j]个方法
    let dp = new Array(bagSize + 1).fill(0)
    dp[0] = 1
    for (let i = 0; i < nums.length; i++) {
        for (let j = bagSize; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]]
        }
    }
    return dp[bagSize]
}
