// 纯暴力
function largestRectangleArea(heights) {
    let sum = 0
    for (let i = 0; i < heights.length; i++) {
        let left = i
        let right = i

        // 向左寻找 最小高度
        for (; left >= 0; left--) {
            if (heights[left] < heights[i]) {
                break
            }
        }
        for (; right < heights.length; right++) {
            if (heights[right] < heights[i]) {
                break
            }
        }
        let w = right - left - 1
        let h = heights[i]
        sum = Math.max(sum, w * h)
    }
    return sum
}

// 双指针
function largestRectangleArea(heights) {
    let len = heights.length
    let sum = 0
    let maxLeft = new Array(len)
    let maxRight = new Array(len)
    //记录每个柱子 左边第一个小于该柱子的下标
    // 防止死循环
    maxLeft[0] = -1
    for (let i = 1; i < len; i++) {
        let t = i - 1
        //比当前值大就记录
        while (t >= 0 && heights[t] >= heights[i]) {
            // 具体来说，当 heights[t] >= heights[i] 时，我们知道 t 位置的柱子不能作为 i 位置柱子的左边界，所以我们可以直接跳到 t 的左边第一个小于 heights[t] 的柱子，也就是 maxLeft[t] 位置。
            t = maxLeft[t]
        }
        // 不满足的左边第一个就是
        maxLeft[i] = t
    }

    //记录每个柱子 右边第一个小于该柱子的下标
    maxRight[len - 1] = len
    for (let i = len - 2; i >= 0; i--) {
        let t = i + 1
        while (t < len && heights[t] >= heights[i]) {
            t = maxRight[t]
        }
        maxRight[i] = t
    }

    // 求和
    for (let i = 0; i < len; i++) {
        let area = heights[i] * (maxRight[i] - maxLeft[i] - 1)
        sum = Math.max(area, sum)
    }
    return sum
}

// 单调栈
//  找每个柱子左右侧的第一个高度值小于该柱子的柱子
//         单调栈：栈顶到栈底：从大到小（每插入一个新的小数值时，都要弹出先前的大数值）
//         栈顶，栈顶的下一个元素，即将入栈的元素：这三个元素组成了最大面积的高度和宽度
//         情况一：当前遍历的元素heights[i]大于栈顶元素的情况
//         情况二：当前遍历的元素heights[i]等于栈顶元素的情况
//         情况三：当前遍历的元素heights[i]小于栈顶元素的情况
function largestRectangleArea(heights) {
    // 栈顶到栈尾的元素，只有从大到到小，才能才保证栈顶的元 找到左右两个第一个小于栈顶的元素的柱子
    //栈先进后出，后进先出
    let stack = []
    // 栈顶元素和栈顶的下一个元素以及要入栈的元素组成了我们要求的最大面积
    let sum = 0

    heights.push(0)
    heights.unshift(0)
    stack.push(0)
    // 第一个元素已经入栈，从第一个元素开始遍历
    for (let i = 1; i < heights.length; i++) {
        //当前元素大于栈顶元素
        if (heights[i] > heights[stack.at(-1)]) {
            //情况一
            stack.push(i)
        } else if (heights[i] == heights[stack.at(-1)]) {
            // 情况2
            stack.pop()
            stack.push(i)
        } else if (heights[i] < heights[stack.at(-1)]) {
            // 当前边遍历元素小于栈顶  栈里面的元素是单调递减的
            while (stack.length && heights[i] < heights[stack.at(-1)]) {
                // 栈顶元素出栈
                // 栈顶元素出栈后，栈顶的下一个元素就是栈顶元素的左边第一个小于栈顶的元素
                // 当前遍历元素就是栈顶元素的右边第一个小于栈顶的元素
                let mid = stack.pop()
                if (stack.length) {
                    // 取出左边第一个小于栈顶的值
                    let left = stack.at(-1)
                    let right = i
                    let w = right - left - 1
                    let h = heights[mid]
                    sum = Math.max(sum, w * h)
                }
            }
            stack.push(i)
        }
    }
    return sum
}
