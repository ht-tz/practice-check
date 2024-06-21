/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let res = []
    // 存储元素的索引
    let stack = []
    let len = nums.length
    if (len === 1) return []
    for (let i = 0; i < len; i++) {
        // 移除滑动窗口以外的值,   i - k+1 滑动窗口最左边的边界值， 如果栈顶元素的值（索引）小于窗口最左边的边界值，说明不在窗口内部，就直接删除

        if (stack.length && stack[0] < i - k + 1) {
            stack.shift()
        }
        // 移除所有小于当前元素的索引, 每次进来的时候，都会和上一个值进行比较，  如果当前值大，就删除栈里面的，如果小， 直接跳过去，栈顶的始终是最大的元素，
        while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
            stack.pop()
        }
        // 存储的是最大值的索引
        stack.push(i)
        // 从第k个元素开始的，每次移动，  当前窗口第一个数字始终是最大的值。  i>= k - 1 保证了索引在K- 1 范围内不会移动 移动窗口，因为这时候，窗口里面数值还未满足k
        if (i >= k - 1) {
            res.push(nums[stack[0]])
        }
    }
    return res

};

let arr = [1, 3, -1, -3, 5, 3, 6, 7]
console.log(maxSlidingWindow(arr, 3))