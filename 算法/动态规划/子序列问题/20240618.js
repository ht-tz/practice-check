function lengthLong(nums) {
    let n = nums.length;
    // dp[i] 表示以 nums[i] 结尾的子序列的最大长度
    let dp = new Array(n).fill(1);
    let result = 1;
    for (let i = 1; i < n; i++) {
        // j 其实就是0 - 1
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
            result = Math.max(result, dp[i]);
        }
    }
    return result
}