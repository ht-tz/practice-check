var maxSubArray = function (nums) {
    let len = nums.length
    if (len === 0) return 0
    if (len === 1) return nums[0]
    // dp[i]表示 以i结尾的最大连续子序和为dp[i
    let dp = new Array(len).fill(0)
    dp[0] = nums[0]
    let max = dp[0]
    for (let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
        max = Math.max(max, dp[i])
    }
    return max
}

var maxSubArray = function (nums) {
    let sum = 0;
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        res = Math.max(res, sum)
        // 重启最大子序的位置
        if (sum <=0) sum = 0
    }
    return res
}