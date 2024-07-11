/*
 * @Author: htz
 * @Date: 2024-07-09 00:48:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-07-09 01:03:31
 * @Description: 单调栈
 */
//
// // 每日温度
// /**
//  * @param {number[]} temperatures
//  * @return {number[]}
//  */
// var dailyTemperatures = function (temperatures) {
//     let len = temperatures.length
//     let stack = []
//     let array = new Array(len).fill(0)
//     stack.push(0)
//     for (let i = 1; i < len; i++) {
//         if (temperatures[i] < temperatures[stack.at(-1)]) {
//             stack.push(i)
//         } else if (temperatures[i] === temperatures[stack.at(-1)]) {
//             stack.push(i)
//         } else {
//             while (stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
//                 let index = stack.pop()
//                 array[index] = i - index
//             }
//             stack.push(i)
//         }
//     }
//     return array
// };
//
//
// /**
//  * @param {number[]} temperatures
//  * @return {number[]}
//  */
// var dailyTemperatures = function (temperatures) {
//     let len = temperatures.length
//     let stack = []
//     let array = new Array(len).fill(0)
//     stack.push(0)
//     for (let i = 1; i < len; i++) {
//         while (stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
//             let index = stack.pop()
//             array[index] = i - index
//         }
//         stack.push(i)
//
//     }
//
//     return array
// };
// console.log(dailyTemperatures([89,62,70,58,47,47,46,76,100,70]))5555555555555555555555555555

// 下一个更大的元素
var nextGreaterElement = function (nums1, nums2) {
    let len = nums1.length
    let stack = []
    let array = new Array(len).fill(-1)
    if (len === 0) return 0
    let map = new Map()
    nums1.forEach((item, index) => {
        map.set(item, index)
    })
    stack.push(0)
    for (let i = 1; i < nums2.length; i++) {
        while (stack.length && nums2[i] > nums2[stack.at(-1)]) {
            let index = stack.pop()
            //栈顶的元素对应的就是map的key， 如存在， 就说明，nums1 map.get(nums2[index]) 获取nums[2]这个元素在 nums1中的索引值
            if (map.has(nums2[index])) {
                array[map.get(nums2[index])] = nums2[i]
            }
        }
        stack.push(i)
    }
    return array
}
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))