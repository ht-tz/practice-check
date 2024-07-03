// 最长递增子序列
function findLengthOfLCIS(nums) {
    let len = nums.length
    if (len === 0) return 0

    // dp[i] 表示以nums[i]结尾的最长递增子序列的长度
    let dp = new Array(len).fill(1)
    let res = 1
    for (let i = 1; i < len; i++) {
        if (nums[i] > nums[i - 1]) {
            dp[i] = dp[i - 1] + 1
        }
        res = Math.max(res, dp[i])

    }
    return res
}

function findLengthOfLCIS(nums) {
    let len = nums.length
    if (len <= 1) return len
    let cur = 1
    let max = 1
    for (let i = 1; i < len; i++) {
        if (nums[i] > nums[i - 1]) {
            cur++
        } else {
            max = Math.max(cur, max)
            cur = 1
        }
    }
    max = Math.max(cur, max)
    return max
}

let nums = [1, 3, 5, 4, 7]
console.log(lengthOfLIS(nums))