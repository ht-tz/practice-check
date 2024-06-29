/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    // dp[i][j]表示区间范围[i,j]的子子串是否是回文子串
    let len = s.length
    let res = 0
    let dp = new Array(len).fill(0).map(() => new Array(len).fill(false))
    for (let i = len - 1; i >= 0; i--) {
        for (let j = i; j < len; j++) {
            if (s[i] === s[j] && (j - i <= 1 || dp[i + 1][j - 1] === true)) {
                dp[i][j] = true
                res++
            }
        }
    }
    return res
};

