/**
 * @param {number[]} nums
 * @return {number}
 */
var robRange = function (nums, start, right) {
    if (end == start) return nums[start]
    let dp = new Array(num.length).fill(0)
    dp[start] = nums[start]
    dp[start + 1] = Math.max(nums[start], nums[start + 1])

    for (let i = start + 2; i <= end; i++) {
        dp[i] = Math.max(nums[i], dp[i - 2] + nums[i])
    }
    return dp[end]
}

var rob = function nums(nums) {
    let len = nums.length
    if (len == 0) return 0
    if (len == 1) return nums[0]
    return Math.max(robRange(nums, 1, len - 1), robRange(nums, 0, len - 2))
}
