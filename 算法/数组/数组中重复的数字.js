/**
 * 数组中重复的数字
 * @url https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    let map = new Map()
    for (let i = 0;i<nums.length; i++) {
        let item = nums[i]
        if(map.has(item)) return item
        map.set(item,1)
    }
    return  null
};

let arr  = [2, 3, 1, 0, 2, 5, 3]
console.log(findRepeatNumber(arr))