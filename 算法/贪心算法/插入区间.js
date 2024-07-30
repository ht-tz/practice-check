// https://leetcode.cn/problems/insert-interval/description/

var insert = function (intervals, newInterval) {
    // 推入区间
    intervals.push(newInterval)
    let len = intervals.length
    //左边界排序
    intervals.sort((a, b) => a[0] - b[0])
    let res = []
    let pre = intervals[0]
    for (let i = 1; i < len; i++) {
        let cur = intervals[i]
        if (pre[1] < cur[0]) {
            res.push(pre)
            pre = cur
        } else {
            pre[1] = Math.max(cur[1], pre[1])
        }
    }
    res.push(pre)
    return res
}

console.log(insert([[1, 3], [6, 9]], [2, 5]))