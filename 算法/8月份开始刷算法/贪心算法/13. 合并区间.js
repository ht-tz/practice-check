var merge = function (intervals) {
    let res = []
    if (intervals.length == 0) return []
    let pre = intervals[0]
    intervals.sort((a, b) => a[0] - b[0])
    for (let i = 1; i < intervals.length; i++) {
        let cur = intervals[i]
        if (cur[0] <= pre[1]) {
            // 更新pre的右边界
            pre[1] = Math.max(pre[1], cur[1])
        } else {
            res.push(pre)
            pre = cur
        }
    }
    res.push(pre)
    return res
}
let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]

console.log(merge(intervals))