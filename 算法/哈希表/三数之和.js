/**
 * 三数之和
 * 双指针方法
 */

function threeSum(nums, target) {
    let len = nums.length
    let res = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < len - 2; i++) {
        let initNum = nums[i]
        if (initNum > 0) return res
        //去重
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        let left = i + 1
        let right = len - 1
        while (left < right) {
            let sum = initNum + nums[left] + nums[right]
            if (sum === 0) {
                res.push([initNum, nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) {
                    left++
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--
                }
                left++
                right--
            } else if (sum < 0) {
                while(nums[left] === nums[left+1]) left++
                left++
            } else {
                while(nums[right] == nums[right-1]) right--
                right--
            }
        }
    }
    return res
}

let nums = [-1, 0, 1, 2, -1, -4]
nums.sort((a,b)=>a - b)
console.log(nums)

console.log(threeSum(nums))