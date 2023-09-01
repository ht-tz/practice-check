/**
 * 两数之和
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 *
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 *
 * 示例:
 *
 * 给定 nums = [2, 7, 11, 15], target = 9
 *
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 *
 * 所以返回 [0, 1]
 *
 * #
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let item = nums[i]
        let num = target - item;
        let targetIndex = map.get(num)
        if (targetIndex!==undefined) {
            return [targetIndex, i]
        }
        //没找到先存起来， 下次进来取出，拿差值，判断是否在map里面,在的话就找到了，直接
        map.set(item, i)
    }
};
console.log(twoSum([2, 7, 11, 15], 9))