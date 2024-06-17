function threeSum(nums, target) {
    let len = nums.length
    let res = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) return res
        // 去重
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let left = i + 1
        let right = len - 1
        while (left < right) {
            let sums = nums[left] + nums[right] + nums[i]
            if (sums === 0) {
                res.push([nums[i], nums[left], nums[right]])
                // 左边界去重
                while (nums[left] === nums[left + 1]) left++
                //右边界去重
                while (nums[right] === nums[right - 1]) right--
                left++
                right--
            } else if (sum > 0) {
                //收缩右边界
                right--
            } else if (sum < 0) {
                //收缩左边届
                left++
            }
        }
    }

    return res
}

