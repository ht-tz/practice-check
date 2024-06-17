/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    //dp表示[0,i -1]的字符串text1,[0,j - 1]的字符串text2的最长公共子序列
    //分两种情况 text1[ i-1]和text2[j -1]相同，text1[i -1]与text2[j -1]不同
    //相同dp[i][j]  = dp[i -1][j - 1]+1
    //不同就是 看text[0, i -2]与text2[0,j - 1]的最长公共子序列和text1[0, i -1]和text2[0,j - 2]的最长公共序列，取最大的
    let dp = new Array(text1.length + 1).fill().map(() => new Array(text2.length + 1).fill(0));
    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[text1.length][text2.length];
}