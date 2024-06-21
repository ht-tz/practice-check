// function canJump(nums) {
//     let max = 0
//     let len = nums.length
//     if (len === 1) return true
//     for (let i = 0; i <= max; i++) {
//         // 每次跳最大范围, 最后得到最大覆盖范围，是否能到达终点, for相当于前进一步吗，加上当前的nums[i]  就是你能的最大步数
//         max = Math.max(max, i + nums[i])
//         if (max >= len - 1) return true
//     }
//     return false
// }
// function canJump(nums) {
//
//     // 统计这一步和下一步覆盖最大
//     let max = 0
//     let len = nums.length
//     if (len === 1) return 0
//     let cur = 0
//     let next = 0
//     for (let i = 0; i < len; i++) {
//         // 下一步覆盖的最远范围
//         next = Math.max(next, i + nums[i])
//         // 遇见当前覆盖的最远下标注距离 -> next, 才走下一步
//         if (i === cur) {
//             max++
//             if (next >= nums.length - 1) break;
//             // 更新当前覆盖的距离
//             cur = next
//         }
//     }
//     return max
// }
//
// let arr = [2, 3, 1, 1, 4]
// console.log(canJump(arr));
// // 首先找到下一步的最大范围 电
// // 看当前覆盖范围是否达到了
// // 达到了走下一步
// // 下一步的最大范围赋值给当前
// // 判断哪是否到达了终点
// //到了return true
// // 没到继续循环


// var largestSumAfterKNegations = function (nums, k) {
//     let len = nums.length
//     //先排序
//     nums.sort((a, b) => Math.abs(b) - Math.abs(a))
//     let sum = 0
//     for (let i = 0; i < len; i++) {
//         if (nums[i] < 0 && k > 0) {
//             nums[i] *= -1
//             k--
//         }
//     }
//
//     if (k % 2 === 1) {
//         // 因为之间加过一次
//         nums[len - 1] *= -1
//     }
//     for (let  num of nums) {
//          sum+= num
//     }
//     return sum
// }

// var findContentChildren = function (g, s) {
//     if (s.length < 1) {
//         return 0
//     }
//     s.sort((a, b) => a - b)
//     g.sort((a, b) => a - b)
//     let index = 0
//     for (let i = 0; i < s.length; i++) {
//         if (index < g.length && g[index] <= s[i]) {
//             index++
//         }
//     }
//     return index
// }
//
// let g = [10, 9, 8, 7]
// let s = [5, 6, 7, 8]
// console.log(findContentChildren(g, s))
