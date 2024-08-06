var findLength = function (nums1, nums2) {
    let [l1, l2] = [nums1.length, nums2.length];
    let res = 0
    // dp[i][j]表示i - 1 和 j - 1结尾    的数组的最长重复子数组 长度为dp[i][j]
    let dp = Array.from(new Array(l1 + 1), () => new Array(l2 + 1).fill(0));
    for (let i = 1; i < l1; i++) {
        for (let j = 1; j < l2; j++) {
            if (nums[i - 1] == nums[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
                res = Math.max(res, dp[i][j])
            }
        }
    }
    return res
}