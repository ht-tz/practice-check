function maxSubArray(nums) {
    let res = 0
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        count += nums[i]
        if (count > res) {
            res = count
        }
        if (count <= 0) {
            count = 0
        }
    }
    return res
}

function maxSubArray(nums) {
    let len = nums.length
    let dp = new Array(len).fill(0)
    dp[0] = nums[0]
    let res = 0
    for (let i = 0; i < len; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
        res = Math.max(res, dp[i])
    }
    return res
}
