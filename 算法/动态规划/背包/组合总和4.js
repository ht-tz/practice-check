/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {

    // dp数组的含义 dp[j]凑成目标正整数为i的排列个数dp[i] 
    let dp = new Array(target + 1).fill(0)
    // 初始化dp:没有意义，为了递推推导公式
    dp[0] = 1
    //确定遍历的顺序：个数不限制使用-》完全背包，得到的是排列组合 讲究顺序
    for (let i = 0; i <= target; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i >= nums[j]) {
                dp[i] += dp[i - nums[j]]
            }
        }
        console.log(dp);
    }
    return dp[target];
};


{
    function combinationSum4(nums, target) {
        let dp = new Array(target + 1).fill().map(() => new Array(nums.length + 1).fill(0))
        for (let j = 1; j <= nums.length; j++) {
            dp[0][j] = 1
        }
        let arr = []
        for (let i = 1; i <= target; i++) {
            for (let j = 1; j <= nums.length; j++) {
                if (nums[j - 1] <= i) {
                    // 这个数字能选进来 
                    for (let k = 0; k < j; k++) {
                        //  从新组合
                        if (i - nums[k] > -1) {
                            arr.push([i, nums[j - 1], nums[k]])
                            dp[i][j] += dp[i - nums[k]][j]
                        }
                    }
                } else {
                    dp[i][j] = dp[i][j - 1]
                    arr.push([i, nums[j - 1], nums[j - 1]])
                }
            }
        }
        console.log(dp),
            console.log(arr);
        return dp[target][nums.length]

    }

    let nums = [1, 2, 3]
    let target = 4
    let res = combinationSum4(nums, target)
    console.log(res);
}

// {
//     var combinationSum4 = function (nums, target) {
//         const dp = new Array(target + 1).fill(0).map(item => new Array(nums.length + 1).fill(0))
//         for (let j = 1; j <= nums.length; j++) {
//             dp[0][j] = 1
//         }
//         let arr = []
//         for (let i = 1; i <= target; i++) {
//             for (let j = 1; j <= nums.length; j++) {
//                 if (nums[j - 1] <= i) { //这个数能选进来
//                     for (let k = 0; k < j; k++) { // 重新组合
//                         arr.push([i, nums[j - 1], nums[k]])
//                         if (i - nums[k] > -1) dp[i][j] += dp[i - nums[k]][j]
//                     }
//                 } else {
//                     dp[i][j] = dp[i][j - 1]
//                     arr.push([i, nums[j - 1], nums[j - 1]])
//                 }
//             }
//         }
//         console.log(dp),
//             console.log(arr);
//         return dp[target][nums.length]
//     };

//     let nums = [1, 2, 3]
//     let target = 4
//     let res = combinationSum4(nums, target)
//     console.log(res);
// }