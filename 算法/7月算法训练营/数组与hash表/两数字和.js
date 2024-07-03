/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map()
    let len = nums.length
    for (let i = 0; i < len; i++) {
        if (map.has(target - nums[i])) {
            return [i, map.get(target - nums[i])]
        } else {
            map.set(nums[i], i)
        }
    }
    return []
};

let nums = [3,3], target = 6
console.log(twoSum(nums, target))