// var findContentChildren = function (g, s) {
//     // g 代表孩子胃口，s 代表饼干大小
//     g.sort((a, b) => a - b);
//     s.sort((a, b) => a - b);
//     let index = s.length - 1
//     let count = 0
//     //大饼干满足大胃口
//     // 反过来不行
//     for (let i = g.length - 1; i >= 0; i--) { //遍历胃口
//         // 满足了就向前走《-
//         if (index >= 0 && s[index] >= g[i]) { // 遍历饼干
//             index--
//             count++
//         }
//     }
//     return count
// }
//
// console.log(findContentChildren([1, 2, 3], [1, 1]))
//
// // 反过来行不行， 反过来是不可的
// // 反过来就是： for 遍历饼干， if控制胃口，  g = 1,2,7,10  s =1, 3, 5, 9
// // s[index]>=g[i]  g[i] === 10   所以一直走不进去 if条件 s =1,3,5,9 走完了，那么 g[i] 还是 10
// // 所以不行
//
// // 换个思路，小饼干先满足小胃口
//
// var findContentChildren = function (g, s) {
//     // g 代表胃口， s 代表饼干
//     g.sort((a, b) => a - b);
//     s.sort((a, b) => a - b);
//     let index = 0
//     for (let i = 0; i < s.length; i++) { // 遍历饼干
//         if (i < s.length && g[index] <= s[i]) {
//             index++
//         }
//     }
//     return index
// }
// var maxSubArray = function (nums) {
//     let len = nums.length
//     // dp[i] 表示以i结尾的最大子数组和为dp[i]
//     let dp = new Array(len).fill(0)
//     dp[0] = nums[0]
//     let res = dp[0]
//     for (let i = 1; i < len; i++) {
//         // 两个方向推导出来 dp[i - 1]+nums[i]
//         // 从头开始计算连续子序和
//         dp[i] = Math.max(dp [i - 1] + nums[i], nums[i])
//         res = Math.max(res, dp[i])
//     }
//     return res
// }
//
//
// // 贪心解法
//
// var maxSubArray = function (nums) {
//      // 只要和>0就不会拖累总和， 也就是sum>0
//     // sum<0 直接从nums[i + 1】] 开始
//      let res = -Infinity, sum = 0
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//         res = Math.max(res, sum)
//         if (sum < 0) sum = 0
//     }
//     return res
// }
//
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var wiggleMaxLength = function (nums) {
//     if (nums.length <= 1) return nums.length
//     let pre = 0;
//     let cur = 0
//     let count = 1
//
//     for (let i = 1; i < nums.length - 1; i++) {
//         // 分三种情况 第一种就是
//         // 上下有平坡
//         // 数组首尾两端 2-2-5  pre=0 cur>0
//         // 单调有平坡
//
//         cur = nums[i + 1] - nums[i]
//         // 如果当前差值和上一个差值为一正一负
//         // 等于0的情况表示初始时的pre
//         // 波动
//         if (pre <= 0 && cur > 0 || pre >= 0 && cur < 0) {
//             count++
//             //只有摆动的时候才更新 curDiff
//             pre = cur
//         }
//     }
//     return count
// };

// /**
//  * 每次取最大跳跃步数（取最大覆盖范围），整体最优解：最后得到整体最大覆盖范围，看是否能到终点。
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var canJump = function (nums) {
//     // 每次覆盖最大
//     // 每一次取出最大的跳跃步数，整体最优解，最后得到整体最大覆盖范围， 看是否到终点
//     let cover = 0;
//     let len = nums.length
//     // 每次在cover范围内部取出最大值，每一移动一个元素， cover得到该元素的最大值
//     for (let i = 0; i <= cover; i++) {
//         cover = Math.max(cover, i + nums[i])
//         if (cover >= len - 1) return true
//     }
//     return false
// };
// var jump = function (nums) {
//     let len = nums.length
//     if (len === 1) return 0
//     // 当前覆盖的最大距离
//     let curCoverage = 0
//     // 记录走过的步数
//     let ans = 0
//     let nextDistance = 0
//     //移动下标 到达了当前最远距离的覆盖下标时，步数+1 来增加覆盖距离

//     // 1. 覆盖的最远距离不是终点，ans+1 继续走
//     // 2. 覆盖的最远距离是终点，结束
//     for (let i = 0; i < len; i++) {
//         // 更新下一步覆盖最远距离的下标
//         nextDistance = Math.max(nextDistance, i + nums[i])
//         //遇见当前最远距离的下标，步数+1
//         if (i === curCoverage) {
//             ans++
//             curCoverage = nextDistance
//             // 如果当前覆盖的最远距离已经到达终点，直接结束
//             if (nextDistance >= len - 1) break
//         }
//     }
//     return ans
// }
// console.log(jump([2, 3, 1, 1, 4]))

// //2. 贪心算法
// /**
//  * 1. 移动洗标只要遇到当前覆盖最远距离的下标，步数+1，不考虑终点的情况
//  * 2. 移动下标，最大移动到 len - 2的地方就可以了
//  *    1. 因为移动到 len - 2,  移动下标i ===当前最大覆盖距离洗标的时候，再走一步，覆盖到len - 1
//  *    2. 移动下标  不等于 当前最大覆盖距离洗标的时候，说明 当前覆盖的最大距离 因为已经覆盖到len - 2，
//  *       不相等只有一种情况，就是超过len - 2了，说明已经覆盖到终点
//  *
//  */

// var jump = function (nums) {
//     let len = nums.length
//     if (len === 1) return 0
//     // 当前覆盖的最大距离
//     let curCoverage = 0
//     // 记录走过的步数
//     let ans = 0
//     let nextDistance = 0
//     for (let i = 0; i < len - 2; i++) {
//         nextDistance = Math.max(nextDistance, i + nums[i])
//         if (i === curCoverage) {
//             ans++
//             curCoverage = nextDistance
//         }
//     }

//     return ans
// }
// console.log(jump([2, 3, 1, 1, 4]))
/**
 * 1. 先排序，消耗 k 遇见负数进行取反，遍历完数组中负数， k还有剩余    就对数组绝对值最小的元素进行取反， 消耗 k 最后求和
 * @param {Array} nums
 * @param {*} k
 */
var largestSumAfterKNegations = function (nums, k) {
    let len = nums.length
    // 排序 按照绝对值从大到小排序
    nums.sort((a, b) => Math.abs(b) - Math.abs(a))

    for (let i = 0; i < len; i++) {
        if (k > 0 && nums[i] < 0) {
            k--
            nums[i] *= -1
        }
    }
    // 计数的化取反，偶数取本身
    if (k % 2 === 1) {
        nums[len - 1] *= -1
    }

    let sum = nums.reduce((pre, cur) => pre + cur)
    return sum
}

console.log(largestSumAfterKNegations([4, 2, 3], 1))
