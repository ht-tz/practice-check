/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let len = nums.length;
    nums.sort((a, b) => a - b)
    let ans = nums[0] + nums[1] + nums[2]
    for (let i = 0; i < len; i++) {
        let left = i + 1
        let right = len - 1
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            let abs = Math.abs(target - sum)
            let min = Math.abs(target - ans)
            if (abs < min) {
                ans = sum
            }
            //移动left 会更接近目标
            if (sum < target) {
                left++
            } else if (sum === target) {
                return target
            } else {
                // 移动right
                right--
            }
        }
    }
    return ans
};
let nums = [-1,2,1,-4], target = 1;
console.log(threeSumClosest(nums, target));