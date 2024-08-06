var lengthOfLIS = function (nums) {
    let len = nums.length
    let dp = new Array(len).fill(1)
    let res = 1
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[j + 1], dp[i])
                res = Math.max(res, dp[i])
            }
        }
    }
    return res
}