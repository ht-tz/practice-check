/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let len = s.length
    let dp = new Array(len).fill().map(() => new Array(len).fill(false))
    let result = 0
    for (let i = len; i >= 0; i--) {
        for (j = i; j < len; j++) {
            if (s[i] == s[j]) {
                if (j - i <= 1) {
                    result++
                    dp[i][j] = true
                } else if (j - i > 1 && dp[i + 1][j - 1]) {
                    result++
                    dp[i][j] = true
                }
            }

        }
    }
    return result;
};

