var combinationSum4 = function (nums, target) {
    //dp[j] 表示凑成正整数为j的方案个数为dp[j]种方案
    let dp = new Array(target + 1).fill(0)
    dp[0] = 1
    // 个数不限制，  排列组合， 无限制取数据
    for (let j = 0; j <= target; j++) {
        for (let i = 0; i < nums.length; i++) {
            // 背包的容量大于物品的重量
            if (j >= nums[i]) {
                dp[j] += dp[j - nums[i]]
            }
        }
    }
    return dp[tagrget]
}
