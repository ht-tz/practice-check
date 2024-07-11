function threeSum(nums, target) {
    let len = nums.length
    let res = []
    nums.sort((a, b) => a - b)

    for (let i = 0; i < len - 2; i++) {
        let initNum = nums[i]
        if (nums[i] > 0) return res
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let l = i + 1
        let r = len - 1
        while (l < r) {
            let sum = initNum + nums[l] + nums[r]
            if (sum === 0) {
                res.push([initNum, nums[l], nums[r]])
                while (l < r && nums[l] === nums[l + 1]) l++
                while (l < r && nums[r] === nums[r - 1]) r--
                l++
                r--
            } else if (sum < 0) {
                while (nums[l] == nums[l + 1]) l++
                l++
            } else {
                while (nums[r] === nums[r - 1]) r--
                r--
            }
        }
    }
    return res
}
console.log(threeSum([-1, 0, 1, 2, -1, -4], 0))