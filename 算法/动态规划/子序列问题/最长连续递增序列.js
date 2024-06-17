// dp[i] 以i结尾的最长递增子序列的长度dp[i]-连续

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let len = nums.length;
    if (len === 0) return 0;
    let dp = new Array(len).fill(1);
    let res = 1
    for (let i = 1; i < len; i++) {
        if (nums[i] > nums[i - 1]) { //连续记录只需要比较前一个就好了
            dp[i] = dp[i - 1] + 1;
        }
        if (dp[i] > res) {
            res = dp[i];
        }
    }
    return res;
};