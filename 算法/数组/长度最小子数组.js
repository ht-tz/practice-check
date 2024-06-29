// 给定一个含有 n 个正整数的数组和一个正整数 target 。
//
// 找出该数组中满足其总和大于等于 target 的长度最小的
// 子数组
//  [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0
const minSubArrayLen = (target, nums) => {
    let len = nums.length
    let sum = 0
    let start = 0
    let end = 0
    let ans = Infinity
    while (start < end) {
        sum += nums[end]
        while (sum >= target) {
            ans = Math.min(ans, end - start + 1)
            sum -= nums[start]
            start++
        }
        end++
    }

    return ans === Infinity ? 0 : ans
}