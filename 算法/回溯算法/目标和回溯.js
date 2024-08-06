// 目标和
var findTargetSumWays = function (nums, target) {
    let res = 0
    if (nums.length === 0) return res
    backtrack(nums, 0, target)

    return res

    function backtrack(nums, i, ramian) {
        if (i === nums.length) {
            if (ramian === 0) res++
            return
        }

        remain += nums[i]
        backtrack(nums, i + 1, remain)

        //撤销选择
        remain -= nums[i]
        remain -= nums[i]
        backtrack(nums, i + 1, remain)
        remain += nums[i]
    }
}
