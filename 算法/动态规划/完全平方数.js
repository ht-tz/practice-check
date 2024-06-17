/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {

    //dp[j] 和为j的完全平方数的 最小数量为dp[j]
    //递推公式： dp[j] = Math.min(dp[j],dp[j - i*i]+1)
    //初始化dp[0] = 0 代表和为0的完全平方数量最小数量为0，因为dp[j]每次都要选择最小的值，非0下标的dp[j]一定要初始化为最大值
    //遍历顺序：从前往后遍历，因为dp[j]的值依赖于dp[j - i*i]
    let dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i <= n; i++) { //遍历背包
        for (let j = 1; j * j <= i; j++) { // 遍历物品
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    return dp[n];
}

//遍历物品-背包
var numSquares1 = function (n) {

    //dp[j] 和为j的完全平方数的 最小数量为dp[j]
    //递推公式： dp[j] = Math.min(dp[j],dp[j - i*i]+1)
    //初始化dp[0] = 0 代表和为0的完全平方数量最小数量为0，因为dp[j]每次都要选择最小的值，非0下标的dp[j]一定要初始化为最大值
    //遍历顺序：从前往后遍历，因为dp[j]的值依赖于dp[j - i*i]
    let dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i * i <= n; i++) { //遍历物品
        for (let j = i * i; j <= n; j++) { // 遍历背包
            dp[j] = Math.min(dp[j], dp[j - i * i] + 1);
        }
    }
    return dp[n];
}
