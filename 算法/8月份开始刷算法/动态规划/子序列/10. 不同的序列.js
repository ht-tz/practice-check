var minDistance = function (s, t) {
    let [l1, l2] = [s, t];
    let dp = new Array(l2).fill(0).map(() => new Array(l2 + 1).fill(0))
    for (let i = 0; i <=l1 ; i++) {
         dp[i][0] = 1
    }
    for (let i = 1; i <= l1; i++) {
        for (let j = 0; j <= l2; j++) {
            if (s[i - 1] === t[j - 1]) {
                 dp[i][j] = dp[ i -1][j - 1] + dp[i - 1][j]
            } else {
                dp[i][j] = dp[i -i][j]
            }
        }
    }
     return  dp[l1][l2]
}