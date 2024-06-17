// dp[i] 爬到有i个台阶的楼顶 有dp[i]
//表示有三个台阶相当于背包的容量为3
function bb(m, n) {
    let dp = new Array(m + 1).fill(0)
    dp[0] = 1
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (i >= j) {
                dp[i] += dp[i - j]
            }
        }
    }
    console.log(dp[m]);
    return dp[m]
}

bb(3, 2)