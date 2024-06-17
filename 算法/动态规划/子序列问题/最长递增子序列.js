/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // dp[i]表示i之前包括i以nums[i]结尾的最长子递增子序列的长度
    let res = 0
    let dp = new Array(nums.length).fill(1)
    if (nums.length <= 1) {
        return nums.length
    }
    // 位置为i的最长升序子序列等于j从0到i-1各个位置的最长升序子序列+1的最大值
    for (let i = 1; i < nums.length; i++) {
        //dp[i] 是有到i-1各个位置的最长递增子序列推导来的，那么遍历顺序一定是从前向后遍历
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
            // 遍历i以内的每一个元素情况都会得到dp[i]
            // 遍历到nums[i]时 大于nums[j]的时候， 此时dp[j]+1 = dp[i]
            if (nums[i] > nums[j]) {
                //那么两个递增子序列一定是分别以nums[j]和nums[i]结尾
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        if (dp[i] > res) {
            res = dp[i]
        }
    }
    return res;
};