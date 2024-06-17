/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {

    // dp[j] 装满量j的背包，最少物品数量为dp[j] 
    // 加入装一个物品，最下数量就是dp[j - coins[i]]+1

    // 初始化 比较的时候才不会被覆盖的，
    const dp = new Array(amount + 1).fill(Infinity);
    // 初始化
    dp[0] = 0;
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    //dp[j]装满背包j所需最少物品的数量
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] = Math.min(dp[j - coins[i] + 1, dp[j])
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};