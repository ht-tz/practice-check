/*
 * @Author: htz
 * @Date: 2024-07-01 11:54:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-07-01 12:40:58
 * @Description: 滑动窗口最大值
 */
/**
 *
 * @param {*} nums
 * @param {*} k  窗口的大小
 * @returns
 */
var maxSlidingWindow = function (nums, k) {
    let res = []
    let stack = []
    if (len === 1) return [nums[0]]
    if (len === 1) return []
    for (let i = 0; i < len; i++) {
        // 移除所有小于当前元素的索引值，每次进来都会很上一个进行比较，当前的值大，就删除栈中的值，如果当前值小于栈顶值，就跳过
        while (stack.length && nums[i] >= nums[stack[stack.length - 1]]) {
            stack.pop()
        }
        // 存储的是最大值的索引，小于当前元素的都被删除了，所以直接把当前元素的索引存入栈中
        stack.push(i)

        // stack存储元素的索引
        // 移除滑动窗口以外的值,   i - k+1 滑动窗口最左边的边界值，
        //如果栈顶元素的值（索引）小于窗口最左边的边界值，说明不在窗口内部，就直接删除
        while (stack.length && stack[0] < i - k + 1) {
            stack.shift()
        }

        // 从第k个元素开始的，每次移动，  当前窗口第一个数字始终是最大的值。
        //i >= k - 1 保证了索引在K - 1 范围内不会移动 移动窗口，因为这时候，窗口里面数值还未满足k
        //索引在0- k -1内不会移动,满足最小移动的条件
        if (i >= k - 1) {
            res.push(nums[stack[0]])
        }
    }

    return res
}

var maxSlidingWindow = function (nums, k) {
    let res = []
    let stack = []
    let len = nums.length
    if (len === 1) return [nums[0]]
    for (let i = 0; i < len; i++) {
        while (stack.length && stack[0] < i - k + 1) {
            //小于左边界的的索引，滑出窗口
            stack.shift()
        }
        let j = stack.length - 1
        // 移除小于当前元素的索引，因为当前元素是最大的，所以肯定在窗口内
        while (j >= 0 && nums[i] >= nums[stack[j]]) {
            j--
            // 删除小于当前元素的索引
            stack.pop()
        }
        stack.push(i)
        if (i >= k - 1) {
            res.push(nums[stack[0]])
        }
    }

    return res
}
