var uniquePaths = function (m, n) {
    let dp = new Array(m).fill().map(() => new Array(n))
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1
    }

    for (let j = 0; j < n; j++) {
        dp[0][j] = 1
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
        }
    }
    return dp[m - 1][n - 1]
};