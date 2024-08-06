function maxUncrossedLines(nums1, nums2) {
    let [m, n] = [nums1.length, nums2.length]
    let dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0))
    for (let i = 1; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (nums1[i - 1] == nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
        }
    }
    return dp[m][n]
}
