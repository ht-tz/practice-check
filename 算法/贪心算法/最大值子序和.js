const maxSubArray = (nums) => {
    let res = -Infinity;
    let count = 0
    // 连续和为负数的时候 立即抛弃，从下个数开始， 为正数的话，加上下一个子一定是增大的
    for (let i = 0; i < nums.length; i++) {
        count += nums[i]
        //记录最大值
        res = Math.max(count, res)
        // count是累加和
        if (count <= 0) count = 0
    }
    return res
}