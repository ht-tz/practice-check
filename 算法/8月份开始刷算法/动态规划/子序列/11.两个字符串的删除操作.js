var minDistance = function (word1, word2) {
    let [l1, l2] = [word1.length, word2.length];
    let dp = Array.from(new Array(l1 + 1).fill(0), new Array(l2 + 1).fill(0))
    for (let i = 0; i <= l1; i++) {
        dp[i][0] = i
    }

    for (let i = 0; i <= l2; i++) {
        dp[0][i] = i
    }

    for (let i = 1; i <= l1; i++) {
        for (let j = 1; j <= l2; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i -1][j - 1]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[j - 1][i - 1] + 2)
            }
        }
    }
    return dp[l1][l2]
}
