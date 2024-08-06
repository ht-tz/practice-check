/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let len = nums.length
    if (len == 0) return 0
    let dp = new Array(len).fill(0)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    for (let i = 2; i < len; i++) {
        //考虑 i-1
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
    }
    return dp[len - 1]
}
