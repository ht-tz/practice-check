// dp[i][j] i-1为结尾的1和j-1为结尾的w2相同 最小操作依次为dp[i][j]
var minDistance = function (word1, word2) {
    let dp = new Array(word1.length + 1).fill(0).map(() => new Array(word2.length + 1).fill(0));
    for (let i = 1; i <= word1.length; i++) {
        dp[i][0] = i;
    }
    for (let j = 1; j <= word2.length; j++) {
        dp[0][j] = j;
    }
    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1] + 2, dp[i - 1][j] + 1, dp[i][j - 1] + 1);
            }
        }
    }
    return dp[word1.length][word2.length];
}