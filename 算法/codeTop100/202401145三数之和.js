function threeSum(nums, target) {
    if (nums.length === 0) return []
    let res = []
    nums.sort((a, b) => a - b)
    let len = nums.length
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) break
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let start = i + i
        let end = len - 1
        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end]
            if (sum > 0) {
                end--
            } else if (sum < 0) {
                start++
            } else {
                res.push([nums[i], nums[start], nums[end]])
                // 去重
                while (start < end && nums[end] === nums[end - 1]) end--
                while (start < end && nums[start] === nums[start + 1]) start++
                end--
                start++
            }
        }
    }
    return res
}