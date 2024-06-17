// dp[i][j] ：以下标i - 1为结尾的A，和以下标j - 1为结尾的B，最长重复子数组长度为dp[i][j]。 （特别注意： “以下标i - 1为结尾的A” 标明一定是 以A[i-1]为结尾的字符串 ）
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
    let m = nums1.length
    let n = nums2.length
    let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
    // 初始化最大长度为0
    let res = 0

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
                res = Math.max(res, dp[i][j])
                console.log(dp[i][j])
            }
        }
    }
    return res
};

let A = [1, 2, 3, 2, 1]
let B = [3, 2, 1, 4, 7]
findLength(A, B)
