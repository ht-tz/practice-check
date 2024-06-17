/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let len = nums.length
    if (len === 0) return 0
    if (len === 1) return nums[0]
    //情况一卡率首部
    let result1 = robAanage(nums, 0, len - 2)
    // 情况2考虑尾部数据
    let result2 = robAanage(nums, 1, len - 1)
    return Math.max(result1, result2)
};

function robAanage(nums, start, end) {
    // 相等表示此段只有一个元素，返回开始这个元素即可
    if (start === end) return nums[start]
    let dp = new Array(nums.length)
    dp[start] = nums[start]
    dp[start + 1] = Math.max(nums[start], nums[start + 1])
    for (let i = start + 2; i <= end; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[end]
}