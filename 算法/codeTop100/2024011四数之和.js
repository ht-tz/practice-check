function fourSum(nums, target) {
    let res = []
    // 升序排列
    nums.sort((a, b) => a - b)
    let len = nums.length

    for (let i = 0; i < len; i++) {
        // 第一个已经大于0了，且大于目标值，就没必要向下走了
        if (nums[i] > target && nums[i] >= 0) break
        // 对i去重
        if (i > 0 && nums[i] === nums[i - 1]) continue

        for (let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] > target && nums[j] >= 0) break

            if (j > i + 1 && nums[j] === nums[j - 1]) continue

            let left = j + 1
            let right = len - 1

            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right]

                if (sum === target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]])
                    // 去重
                    while (left < right && nums[left] == nums[left + 1]) left++
                    while (left < right && nums[right] == nums[right - 1]) right--
                    // 找打答案的时候双子针同时的收缩
                    left++
                    right--
                } else if (sum < target) {
                    left++
                } else if (sum > target) {
                    right--
                }
            }
        }
    }
    return res
}

let nums = [1, 0, -1, 0, -2, 2]
let target = 0
console.log(fourSum(nums, target))