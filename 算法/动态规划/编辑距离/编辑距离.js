/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    //dp[i][j]以dp[i -1]为结尾的word1和j - 1为word2最近编辑距离为dp[i][j]
    let dp = new Array(word1.length + 1).fill().map(() => new Array(word2.length + 1).fill(0));
    // 初始化
    for (let i = 1; i <= word1.length; i++) {
        dp[i][0] = i;
    }
    for (let j = 1; j <= word2.length; j++) {
        dp[0][j] = j;
    }

    console.log(dp);
    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1] + 1, dp[i - 1][j] + 1, dp[i][j - 1] + 1);
            }
        }
    }
    return dp[word1.length][word2.length];
};
let dp = new Array(5 + 1).fill().map(() => new Array(5 + 1).fill(0));
console.log(dp);
minDistance("horse", "ros");