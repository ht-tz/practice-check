//dp[i][j]以 i- 1结尾的s子序列中出现以j -1为结尾的t扽个数为dp[i][j] ds
//dp[0][0] = 1 表示s前0个字符为'',t前0个字符为''
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    let dp = new Array(s.length + 1).fill(0).map(() => new Array(t.length + 1).fill(0));
    for (let i = 0; i <= s.length; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[s.length][t.length]
};