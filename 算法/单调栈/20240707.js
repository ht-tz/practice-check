/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    // 单调栈：栈顶到栈底：从大到小（每插入一个新的小数值时，都要弹出先前的大数值）
    // 栈顶，栈顶的下一个元素，即将入栈的元素：这三个元素组成了最大面积的高度和宽度
    // 情况一：当前遍历的元素heights[i]大于栈顶元素的情况
    // 情况二：当前遍历的元素heights[i]等于栈顶元素的情况
    // 情况三：当前遍历的元素heights[i]小于栈顶元素的情况
    let res = 0
    //单调栈
    let stack = []
    heights.unshift(0)
    heights.push(0)
    stack.push(0)
    let len = heights.length

    for (let i = 1; i < len; i++) {
        if (heights[i] > heights[stack.at(-1)]) {
            stack.push(i)
        } else if (heights[i] === heights[stack.at(-1)]) {
            stack.pop()
            stack.push(i)
        } else {
            while (stack.length && heights[i] < heights[stack.at(-1)]) {
                let mid = stack.pop()
                if (stack.length) {
                    let left = stack.at(-1)
                    let right = i
                    let w = right - left - 1
                    let h = heights[mid]
                    let area = h * w
                    res = Math.max(res, area)
                }
            }
            stack.push(i)
        }
    }
    return res
}

console.log(largestRectangleArea([2, 4]))
