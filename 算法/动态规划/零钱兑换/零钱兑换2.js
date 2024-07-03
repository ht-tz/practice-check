// //dp[j] 凑成总金额j的货币组合数为dp[j]
//
// /**
//  * @param {number} amount
//  * @param {number[]} coins
//  * @return {number}
//  */
// var change = function (amount, coins) {
//     let dp = new Array(amount + 1).fill(0)
//     dp[0] = 1
//
//     for (let i = 0; i < coins.length; i++) {
//         for (let j = coins[i]; j <= amount; j++) {
//             dp[j] += dp[j - coins[i]]
//         }
//         console.log(dp[i])
//     }
//     return dp[amount]
// // };

// let amount = 5
// let coins = [1, 2, 5]

// change1(amount, coins)

// //二维数组版本

// function change1(amount, coins) {
//   let len = coins.length
//   let dp = new Array(len).fill().map(() => new Array(amount + 1).fill(0))
//   for (let i = 0; i <= amount; i++) {
//     dp[0][i] = 1
//   }
//   for (let i = 1; i < len; i++) {
//     for (let j = 0; j <= amount; j++) {
//       // 第i种硬币使用0~k次,求和
//       for (let k = 0; k * coins[i] <= j; k++) {
//         dp[i][j] += dp[i - 1][j - k * coins[i]]
//       }
//     }
//     console.log(dp[i])
//   }
//   return dp[coins.length - 1][amount]
// }

{
    // //dp[i][j]代表使用目前i种硬币组成金额J的组合数
    // /**
    //  * 选择状态：
    //  *  1. 装进背包，和不装进去背包
    //  *  状态：背包的容量和可选择的物品
    //  *  3. 状态转义: 把第i个物品装入背包（即使用coins[i]这个面值的硬币）此时凑法dp[i][j]  = dp[i][j - coins[i]]
    //  *   i - coins[i - 1]表示当前背包的容量j减去重量coins[i - 1]
    //  *   因为i是从1开始的，所coins的 i-1表示第i个硬币的面值
    //  *
    //  * 3. 求组合数据就先遍历物品，再遍历背包
    //  * 4. dp[0]就是amount = 0的情况下，组合数为1
    //  *   下标非0的dp[j]初始化为0，这样累加dp[j - coins[i]]的时候才不会影响真正的dp[j]
    //  *   dp[0] = 1还说明了一种情况：正好选了coins[i]后,也就是j - coins[i] === 0 fd这样情况下标识硬币刚好满足能选，此时的dp[】为1表示只选coins[i]存在这样一种选法。
    //  * @param amount
    //  * @param coins
    //  * @returns {*}
    //  */
    // function change(amount, coins) {
    //   let len = coins.length;
    //   // 初始化二维dp数据
    //   let dp = new Array(len + 1).fill().map(() => new Array(amount + 1).fill(0));
    //   //初始化第一列
    //   for (let i = 0; i <= len; i++) {
    //     //组成为0金额， 组合数初始化为1
    //     dp[i][0] = 1;
    //   }
    //   console.log(dp);

    //   //先遍历物品， 在遍历背包
    //   for (let i = 1; i <= coins.length; i++) {
    //     //第一列数据已经初始化过了，所以从第1开始
    //     for (let j = 1; j <= amount; j++) {
    //       // 遍历目标金额的种类
    //       //如果当前硬币的面值大于需要凑出的面额， ->相当于背包放不下了还是上一个
    //       if (coins[i - 1] > j) {
    //         dp[i][j] = dp[i - 1][j];
    //       } else {
    //         //当前硬币的面值小于等于需要凑的目标金额，可以选择使用或者不使用目标金额
    //         dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
    //       }
    //     }
    //   }
    //   // console.log(dp);
    //   return dp[len][amount];
    // }


    /**
     * 给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。
     *
     * 请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。
     *
     * 假设每一种面额的硬币有无限个。
     *
     * 题目数据保证结果符合 32 位带符号整数。
     *
     *
     *
     * 示例 1：
     *
     * 输入：amount = 5, coins = [1, 2, 5]
     * 输出：4
     * 解释：有四种方式可以凑成总金额：
     * 5=5
     * 5=2+2+1
     * 5=2+1+1+1
     * 5=1+1+1+1+1
     * 示例 2：
     *
     * 输入：amount = 3, coins = [2]
     * 输出：0
     * 解释：只用面额 2 的硬币不能凑成总金额 3 。
     * 示例 3：
     *
     * 输入：amount = 10, coins = [10]
     * 输出：1
     * @type {number}
     */

    let amount = 3;
    let coins = [1, 2, 5];

    function change(amount, coins) {
        // amount+1标识组成金额为0的情况下，这是因为要考虑组成金额为0的情况，从数组的索引是0开始的，因此需要将组成金额为0的情况放在数组的第一个位置
        let dp = new Array(coins.length)
            .fill()
            .map(() => new Array(amount + 1).fill(0));

        for (let i = 0; i <= amount; i++) {
            //检查当前金额 j 是否是第一种硬币（coins[0]）的倍数。如果是，说明可以使用第一种硬币组成当前金额 j(不是倍数，是不可能)
            if (i % coins[0] === 0) {
                dp[0][i] = 1;
            }
        }

        for (let i = 1; i < coins.length; i++) {
            for (let j = 0; j <= amount; j++) {
                if (coins[i] <= j) {
                    dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i]];
                } else {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }
        console.log(dp);
        return dp[coins.length - 1][amount];
    }

    console.log(change(amount, coins));
}